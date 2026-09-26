// بيبعث تنبيهات "تماريني" للموبايل حتى لو التطبيق مسكّر والشاشة مطفية.
//
// ليش من هون أصلاً: الموبايل ما بقدر يجدول تنبيه لحاله وهو مسكّر — لازم جهة
// برّا تبعثله Web Push. هاي الجهة هي GitHub Actions: بتشتغل كل شوي، بتقرا
// اشتراك الجهاز وتفضيلاته، وبتقرّر لحالها إذا في إشي يستاهل تنبيه هلأ.
//
// شو بيجي من وين:
//   PUSH_STORE   رابط مخزن الأجهزة (بيرجّع JSON من {devId: {...}})  — الأفضل
//   PUSH_DEVICES نفس المحتوى لكن ملصوق كنص، لما يكون المخزن مش جاهز
//   VAPID_PRIVATE / VAPID_PUBLIC  مفاتيح التوقيع
//
// كل جهاز بالمخزن: { sub, tz, daily:"07:00", lead:45, favs:[...], next:"صدر وترايسبس" }
// والمفضّلة مفتاحها: فرع|يوم|وقت|اسم|مدرّب  مثلاً  GGA|1|18:00|BODYPUMP|AHMAD

const fs = require('fs');
const path = require('path');
const webpush = require('web-push');

const TZ = 'Asia/Amman';
const STATE = path.join(__dirname, 'state.json');
const BRANCH = { GGA: 'عبدون', GGK: 'خلدا' };
const WD_AR = ['الأحد', 'الاثنين', 'الثلاثا', 'الأربعا', 'الخميس', 'الجمعة', 'السبت'];

// دقّة التشغيل مش مضمونة (كرون GitHub بيتأخّر)، فبنشتغل بنوافذ مش بلحظة
const CLASS_EARLY = 40;   // لو الكرون تأخّر، بنظل ندّق حتى لو ضلّ للحصة شوي
const CLASS_LATE = 5;     // أو تقدّمنا شوي
const DAILY_WIN = 70;     // رسالة الصبح: ساعة وشوي بعد الوقت المطلوب

const pad = n => String(n).padStart(2, '0');
const arTime = t => { const [h, m] = t.split(':').map(Number);
  return `${h % 12 || 12}:${pad(m)} ${h < 12 ? 'ص' : 'م'}`; };
const mins = t => { const [h, m] = t.split(':').map(Number); return h * 60 + m; };

// الوقت بعمّان: التاريخ، الدقائق من نص الليل، ورقم اليوم بالأسبوع (٠ = الأحد)
function nowAmman() {
  const parts = Object.fromEntries(new Intl.DateTimeFormat('en-CA', {
    timeZone: TZ, year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', hour12: false, weekday: 'short',
  }).formatToParts(new Date()).map(p => [p.type, p.value]));
  const h = Number(parts.hour) % 24;
  const wd = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(parts.weekday);
  return { date: `${parts.year}-${parts.month}-${parts.day}`, min: h * 60 + Number(parts.minute), wd };
}

function readDevices() {
  const raw = process.env.PUSH_DEVICES;
  if (raw && raw.trim()) return normalize(JSON.parse(raw));
  const url = (process.env.PUSH_STORE || '').replace(/\/$/, '');
  if (!url) return Promise.resolve([]);
  return fetch(`${url}/devices.json`).then(r => r.ok ? r.json() : null).then(normalize);
}
// المخزن بيرجّع كائناً مفاتيحه معرّفات الأجهزة؛ واللصق ممكن يكون جهازاً واحداً أو مصفوفة
function normalize(d) {
  if (!d) return [];
  const list = Array.isArray(d) ? d : (d.sub ? [d] : Object.entries(d).map(([id, v]) => ({ id, ...v })));
  return list.filter(x => x && x.sub && x.sub.endpoint)
             .map((x, i) => ({ id: x.id || `dev${i}`, ...x }));
}

const loadState = () => { try { return JSON.parse(fs.readFileSync(STATE, 'utf8')); } catch (e) { return { sent: {} }; } };

async function main() {
  const pub = process.env.VAPID_PUBLIC, priv = process.env.VAPID_PRIVATE;
  if (!pub || !priv) { console.log('لا توجد مفاتيح VAPID — لا شيء ليُرسل'); return; }
  webpush.setVapidDetails('https://github.com/abdulrahmanalhamoud1673/tamareeni', pub, priv);

  const devices = await readDevices();
  if (!devices.length) { console.log('لا يوجد جهاز مسجّل بعد'); return; }

  const now = nowAmman();
  const state = loadState();
  const jobs = [];

  for (const dev of devices) {
    const lead = Number(dev.lead) || 45;
    const next = dev.next || '';
    const favs = (dev.favs || []).map(k => String(k).split('|'))
      .filter(p => p.length >= 4 && Number(p[1]) === now.wd)
      .sort((a, b) => mins(a[2]) - mins(b[2]));

    // ١) رسالة الصبح: شو تمرينك اليوم ومعه حصصك المفضّلة
    const daily = dev.daily || '07:00';
    if (now.min >= mins(daily) && now.min < mins(daily) + DAILY_WIN) {
      const bits = [];
      if (next) bits.push(`تمرينك: ${next}`);
      if (favs.length) bits.push('حصصك: ' + favs.map(p => `${p[3]} ${arTime(p[2])}`).join('، '));
      jobs.push({ dev, key: `${dev.id}|${now.date}|daily`, payload: {
        title: `${WD_AR[now.wd]} — شو عندك اليوم`,
        body: bits.length ? bits.join(' · ') : 'ما في إشي مجدول اليوم — يوم راحة',
        tag: 'daily', kind: 'daily', live: 1,
      } });
    }

    // ٢) قبل كل حصة مفضّلة
    for (const p of favs) {
      const left = mins(p[2]) - now.min;                       // كم باقي للحصة
      if (left > lead + CLASS_LATE || left < lead - CLASS_EARLY) continue;
      const where = BRANCH[p[0]] || p[0];
      const when = left <= 0 ? 'هلأ' : left === 1 ? 'بعد دقيقة' : `بعد ${left} دقيقة`;
      jobs.push({ dev, key: `${dev.id}|${now.date}|${p.join('|')}`, payload: {
        title: `${p[3]} ${when}`,
        body: `${arTime(p[2])} · ${where}${p[4] ? ` · مع ${p[4]}` : ''}${next ? ` — وتمرينك اليوم ${next}` : ''}`,
        tag: `cls-${p[2]}`,
        // live = الموبايل بيعيد كتابة النص من بياناتك الطازة، وهذا احتياطي إذا ما لقيها
        kind: 'class', live: 1, at: p[2], name: p[3], where, coach: p[4] || '',
      } });
    }
  }

  let sent = 0;
  for (const job of jobs) {
    if (state.sent[job.key]) continue;                         // انبعث قبل شوي
    try {
      await webpush.sendNotification(job.dev.sub, JSON.stringify(job.payload), { TTL: 3600 });
      state.sent[job.key] = Date.now();
      sent++;
      console.log('أُرسل:', job.payload.title, '—', job.payload.body);
    } catch (e) {
      const code = e && e.statusCode;
      console.log('فشل الإرسال', code || e.message, 'للجهاز', job.dev.id);
      // ٤٠٤/٤١٠ = الاشتراك مات (المستخدم شال التطبيق أو المتصفّح دوّره)
      if ((code === 404 || code === 410) && process.env.PUSH_STORE) {
        await fetch(`${process.env.PUSH_STORE.replace(/\/$/, '')}/devices/${job.dev.id}.json`, { method: 'DELETE' })
          .catch(() => {});
        console.log('شِلت الجهاز الميّت', job.dev.id);
      }
    }
  }

  // ما بنحتفظ بذاكرة أكثر من يومين — بتكفي تمنع التكرار وبتضل الملف صغير
  const cut = Date.now() - 2 * 864e5;
  state.sent = Object.fromEntries(Object.entries(state.sent).filter(([, t]) => t > cut));
  fs.writeFileSync(STATE, JSON.stringify(state, null, 1) + '\n');
  console.log(`الوقت بعمّان ${pad(Math.floor(now.min / 60))}:${pad(now.min % 60)} ${WD_AR[now.wd]} — أجهزة ${devices.length}، مرسل ${sent}`);
}

main().catch(e => { console.error(e); process.exit(1); });
