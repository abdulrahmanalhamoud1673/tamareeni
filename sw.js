const CACHE = 'tamareeni-v53';
const ASSETS = ['./', './index.html', './app.js', './manifest.json', './icon-192.png', './icon-512.png',
  './fonts/plex-arabic-400.woff2', './fonts/plex-latin-400.woff2',
  './fonts/plex-arabic-600.woff2', './fonts/plex-latin-600.woff2',
  './fonts/plex-arabic-700.woff2', './fonts/plex-latin-700.woff2'];

// صور التمارين — تُخزّن مسبقاً حتى تظهر بدون إنترنت
const EX_IDS = [
  'incline_bar_press','cable_press','cable_fly','decline_bar_press','dips','flat_db_press',
  'dip_machine','reverse_pushdown','cable_one_arm_ext','close_grip_bench','skull_crusher','rope_overhead',
  'single_arm_oh_ext','rope_pushdown','tri_ext_machine','lat_pulldown','low_row_cable',
  'iso_row_machine','tbar_row_machine','shrug_machine',
  'db_row_one_arm','straight_arm_pulldown','rear_delt_fly_db',
  'row_hammer_high','high_row_cable','reverse_fly','hyper_ext','trx_row','lateral_raise',
  'shoulder_press_ham','upright_row','shoulder_press_n','shrugs','alt_curl_15','cable_curl',
  'hammer_curl','squat','lunges','leg_ext','leg_curl','abd_add','calf_raise',
  'butterfly_situp','plank','ab_wheel',
];
const IMAGES = EX_IDS.flatMap(id => [`./img/${id}-0.jpg`, `./img/${id}-1.jpg`]);

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(async c => {
      await c.addAll(ASSETS);
      // الصور بشكل فردي حتى لا يفشل التثبيت كله بسبب ملف واحد
      await Promise.all(IMAGES.map(u => c.add(u).catch(() => {})));
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ).then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.hostname.includes('googleapis.com')) return;   // طلبات المدرب تمر للشبكة مباشرة
  if (url.origin !== location.origin) return;

  // الشبكة أولاً لملفات التطبيق (حتى تصل التحديثات)، والكاش احتياطي عند انقطاع النت
  const isApp = /\.(html|js|json)$/.test(url.pathname) || url.pathname.endsWith('/');
  if (isApp) {
    // no-cache = تحقّق من الخادم دائماً، حتى لا تبقى نسخة قديمة عالقة في ذاكرة المتصفح
    e.respondWith(
      fetch(new Request(req, { cache: 'no-cache' })).then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(req, copy));
        return res;
      }).catch(() => caches.match(req).then(hit => hit || caches.match('./index.html')))
    );
    return;
  }

  // الكاش أولاً للصور والأيقونات
  e.respondWith(
    caches.match(req).then(hit => hit || fetch(req).then(res => {
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put(req, copy));
      return res;
    }))
  );
});

/* ===== التنبيهات =====
   الرسالة بتوصل من GitHub Actions حتى لو التطبيق مسكّر والشاشة مطفية.
   الجسم JSON: {title, body, tag, url}. وإذا وصلت رسالة فاضية (نادر)،
   بنعرض تنبيهاً عاماً بدل ما يعرض المتصفّح رسالته الجاهزة "تم تحديث الموقع". */
self.addEventListener('push', e => {
  let d = {};
  try { d = e.data ? e.data.json() : {}; } catch (err) { d = { body: e.data && e.data.text() }; }
  e.waitUntil(self.registration.showNotification(d.title || 'تماريني', {
    body: d.body || 'افتح التطبيق',
    icon: './icon-192.png',
    badge: './icon-192.png',
    tag: d.tag || 'tamareeni',
    dir: 'rtl',
    lang: 'ar',
    renotify: !!d.tag,
    vibrate: [80, 50, 80],
    data: { url: d.url || './index.html' },
  }));
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  const target = new URL((e.notification.data && e.notification.data.url) || './index.html', self.location.href).href;
  e.waitUntil(clients.matchAll({ type: 'window', includeUncontrolled: true }).then(list => {
    // إذا التطبيق مفتوح أصلاً، بنرجّعه للواجهة بدل ما نفتح نسخة ثانية
    for (const c of list) if (c.url.startsWith(self.location.origin) && 'focus' in c) return c.focus();
    return clients.openWindow(target);
  }));
});
