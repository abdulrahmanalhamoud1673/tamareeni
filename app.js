/* ===== التمارين: الاسم بالعربي، والاسم الإنجليزي كما كتبته أنت في جدولك ===== */
const EX = {
  incline_bar_press: { ar: 'ضغط بار مائل', en: 'Incline bar press', inc: 2.5 },
  cable_press:       { ar: 'ضغط كيبل', en: 'Cable press', inc: 2.5 },
  cable_fly:         { ar: 'تفتيح كيبل', en: 'Cable fly', inc: 2.5 },
  decline_bar_press: { ar: 'ضغط بار منحدر', en: 'Decline bar press', inc: 2.5 },
  dips:              { ar: 'متوازي', en: 'Dips', inc: 2.5 },
  flat_db_press:     { ar: 'ضغط دمبل مستوي', en: 'Flat db press', inc: 2 },
  single_arm_oh_ext: { ar: 'تمديد ترايسبس بذراع واحدة', en: 'Single arm over head', inc: 1 },
  rope_pushdown:     { ar: 'سحب حبل ترايسبس', en: 'Rope push down', inc: 1 },
  tri_ext_machine:   { ar: 'جهاز الترايسبس', en: 'Tri ext mach', inc: 2.5 },

  lat_pulldown:      { ar: 'سحب أمامي عالي', en: 'Lat pull down', inc: 1 },
  low_row_cable:     { ar: 'تجديف كيبل منخفض', en: 'Low row cable (N)', inc: 1 },
  row_hammer_high:   { ar: 'تجديف هامر قبضة عالية', en: 'Row hammer strength high grip', inc: 2.5 },
  high_row_cable:    { ar: 'تجديف كيبل عالي', en: 'High row cable', inc: 2.5 },
  reverse_fly:       { ar: 'تفتيح خلفي', en: 'Reverse fly (traps)', inc: 1 },
  hyper_ext:         { ar: 'تمديد أسفل الظهر', en: 'Hyper ext', inc: 2.5 },
  trx_row:           { ar: 'تجديف TRX', en: 'TRX', bw: true },

  lateral_raise:     { ar: 'رفرفة جانبية', en: 'Lateral raises', inc: 1 },
  shoulder_press_ham:{ ar: 'ضغط كتف هامر', en: 'Shoulder press hammer strength', inc: 2.5 },
  upright_row:       { ar: 'تجديف عمودي', en: 'Upright row', inc: 2.5 },
  shoulder_press_n:  { ar: 'ضغط كتف قبضة محايدة', en: 'Shoulder press (N)', inc: 2 },
  shrugs:            { ar: 'هز الأكتاف', en: 'Shrugs', inc: 2.5 },
  alt_curl_15:       { ar: 'مرجحة تبادل', en: 'Alt arm curl 1.5', inc: 1 },
  cable_curl:        { ar: 'مرجحة كيبل', en: 'Cable arm curl', inc: 1 },
  hammer_curl:       { ar: 'مرجحة مطرقة', en: 'Hammer', inc: 1 },

  squat:             { ar: 'سكوات', en: 'Squat', inc: 5 },
  lunges:            { ar: 'طعنات', en: 'Lunges', bw: true },
  leg_ext:           { ar: 'تمديد الأرجل', en: 'Leg ext', inc: 2.5 },
  leg_curl:          { ar: 'ثني الأرجل', en: 'Leg curl', inc: 2.5 },
  abd_add:           { ar: 'تبعيد وتقريب الأفخاذ', en: 'Abd & add', inc: 5,
                       caps: ['تبعيد — Abductor', 'تقريب — Adductor'] },
  calf_raise:        { ar: 'رفع السمانة', en: 'Calf raises', inc: 5 },
  butterfly_situp:   { ar: 'بطن فراشة', en: 'Butterfly sit-ups', bw: true },
  plank:             { ar: 'بلانك', en: 'Plank', bw: true, sec: true },
  ab_wheel:          { ar: 'عجلة البطن', en: 'Wheel core', bw: true },
};

/* ===== برنامجك: الأوزان والتكرارات كما أعطيتني =====
   العنصر الثالث (اختياري) = رقم السوبرست: التمارين التي تحمل نفس الرقم تُنفَّذ بلا راحة بينها */
const PROGRAM = {
  d1: { name: 'صدر وترايسبس', items: [
    ['incline_bar_press', [[10,12],[10,10],[10,8]]],
    ['cable_press',       [[20,8],[20,8],[20,8]], 1],
    ['cable_fly',         [[25,8],[25,8],[25,8]], 1],
    ['decline_bar_press', [[10,8],[10,8],[10,8]], 2],
    ['dips',              [[30,8],[30,8],[30,8]], 2],
    ['flat_db_press',     [[14,10],[14,10],[14,10]]],
    ['single_arm_oh_ext', [[15,12],[15,12],[15,12]]],
    ['rope_pushdown',     [[20,12],[20,10],[20,8]]],
    ['tri_ext_machine',   [[25,20],[25,20],[25,20]]],
  ]},
  d2: { name: 'ظهر', items: [
    ['lat_pulldown',    [[6,12],[6,10],[6,8]]],
    ['low_row_cable',   [[6,10],[6,10],[7,10]]],
    ['row_hammer_high', [[25,10],[25,10],[25,10]]],
    ['high_row_cable',  [[20,12],[20,12],[20,12]]],
    ['reverse_fly',     [[4,15],[5,15],[5,15]]],
    ['hyper_ext',       [[10,15],[10,15],[10,15]]],
    ['trx_row',         [[0,10],[0,10],[0,10]]],
  ]},
  d3: { name: 'أكتاف وبايسبس', items: [
    ['lateral_raise',      [[6,12],[6,12],[8,12]]],
    ['shoulder_press_ham', [[15,10],[20,10],[20,10]]],
    ['upright_row',        [[20,12],[20,12],[25,12]]],
    ['shoulder_press_n',   [[10,10],[10,10],[10,10]]],
    ['shrugs',             [[20,15],[20,15],[20,15]]],
    ['alt_curl_15',        [[8,12],[8,10],[8,8]]],
    ['cable_curl',         [[4,12],[5,12],[5,12]]],
    ['hammer_curl',        [[8,12],[10,12],[10,12]]],
  ]},
  d4: { name: 'أرجل وبطن', items: [
    ['squat',           [[20,12],[20,10],[20,8]]],
    ['lunges',          [[0,12],[0,12],[0,12]]],
    ['leg_ext',         [[18,12],[23,12],[29,12]]],
    ['leg_curl',        [[39,12],[45,12],[45,12]]],
    ['abd_add',         [[95,15],[95,15],[95,15]]],
    ['calf_raise',      [[45,20],[45,20],[45,20]], 1],
    ['butterfly_situp', [[0,20],[0,20],[0,20]]],
    ['plank',           [[0,60],[0,60],[0,60]]],
    ['ab_wheel',        [[0,10],[0,10],[0,10]]],
  ]},
};

/* ===== التخزين ===== */
const KEY = 'tamareeni';
let S = Object.assign({ sessions: [], active: null, rest: 90 }, JSON.parse(localStorage.getItem(KEY) || '{}'));
const save = () => localStorage.setItem(KEY, JSON.stringify(S));

/* ===== أدوات ===== */
const $ = s => document.querySelector(s);
const pad = n => String(n).padStart(2, '0');
const today = () => { const d = new Date(); return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`; };
const MONTHS = ['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر'];
const fmt = k => { const d = new Date(k + 'T12:00:00'); return `${d.getDate()} ${MONTHS[d.getMonth()]}`; };
const since = k => Math.round((new Date(today() + 'T12:00:00') - new Date(k + 'T12:00:00')) / 864e5);
const ago = k => { const n = since(k); return n === 0 ? 'اليوم' : n === 1 ? 'أمس' : `قبل ${n} يوم`; };
const n1 = v => String(Math.round(v * 10) / 10);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;' }[c]));
const ex = id => EX[id] || { ar: id, inc: 2.5 };

function msg(t) {
  const el = $('#msg'); el.textContent = t; el.classList.add('show');
  clearTimeout(el._h); el._h = setTimeout(() => el.classList.remove('show'), 2200);
}
function buzz(p) { if (navigator.vibrate) navigator.vibrate(p); }
let AC;
function beep(times) {
  try {
    AC = AC || new (window.AudioContext || window.webkitAudioContext)();
    if (AC.state === 'suspended') AC.resume();
    for (let i = 0; i < times; i++) {
      const o = AC.createOscillator(), g = AC.createGain(), t = AC.currentTime + i * .3;
      o.frequency.value = 880; g.gain.setValueAtTime(.0001, t);
      g.gain.exponentialRampToValueAtTime(.3, t + .02);
      g.gain.exponentialRampToValueAtTime(.0001, t + .24);
      o.connect(g); g.connect(AC.destination); o.start(t); o.stop(t + .26);
    }
  } catch (e) {}
}

/* آخر مرة عمل فيها هذا التمرين */
function last(id) {
  for (let i = S.sessions.length - 1; i >= 0; i--) {
    const it = S.sessions[i].entries.find(e => e.ex === id);
    if (it && it.sets.length) return { date: S.sessions[i].date, sets: it.sets };
  }
  return null;
}
const setText = (id, s) => ex(id).sec ? `${s.r} ث` : ex(id).bw ? `${s.r}` : `${n1(s.w)}×${s.r}`;

/* ===== العرض ===== */
let page = 'home';
function render() { ({ home, workout, log }[S.active ? 'workout' : page])(); scrollTo(0, 0); }
const go = p => { page = p; render(); };

function home() {
  const done = S.sessions;
  const lastDay = done.length ? done[done.length - 1].day : null;
  const keys = Object.keys(PROGRAM);
  const next = lastDay ? keys[(keys.indexOf(lastDay) + 1) % keys.length] : keys[0];

  $('#app').innerHTML = `
  <header><h1>تماريني</h1>
    <button class="link" onclick="go('log')">السجل</button></header>

  <div class="lbl">اختر تمرين اليوم</div>
  <div class="daylist">
    ${keys.map(k => {
      const l = done.filter(s => s.day === k).pop();
      return `<button class="day" onclick="start('${k}')">
        <b>${PROGRAM[k].name}</b>
        <span>${l ? ago(l.date) : k === next ? 'ابدأ من هنا' : '—'}</span>
      </button>`;
    }).join('')}
  </div>

  <div class="setting">
    <span>مدة الراحة</span>
    <input type="number" inputmode="numeric" value="${S.rest}" onchange="S.rest=Math.max(10,+this.value||90);save()">
  </div>`;
}

function start(k) {
  S.active = {
    day: k, date: today(), start: Date.now(),
    entries: PROGRAM[k].items.map(([id, sets, ss]) => {
      const l = last(id);
      return { ex: id, ss: ss || null, sets: sets.map((s, i) => {
        const p = l && l.sets[i];
        return { w: p ? p.w : s[0], r: p ? p.r : s[1], done: false };
      })};
    }),
  };
  save(); render();
}

function workout() {
  const a = S.active;
  $('#app').innerHTML = `
  <header>
    <div><h1>${PROGRAM[a.day].name}</h1><div class="sub" id="clock">0:00</div></div>
    <button class="link" onclick="finish()">إنهاء</button>
  </header>

  ${groupSS(a.entries).map(g =>
    g.ss ? `<div class="ssgroup"><div class="sslabel">${g.idx.length > 1
              ? 'سوبرست — بدون راحة بين التمرينين' : 'سوبرست'}</div>${g.idx.map(exSection).join('')}</div>`
         : exSection(g.idx[0])).join('')}

  <button class="btn" onclick="finish()">إنهاء التمرين</button>
  <button class="btn quiet" onclick="cancel()">إلغاء</button>`;
  clock();
}

// يجمع التمارين المتتالية التي تحمل نفس رقم السوبرست
function groupSS(entries) {
  const out = [];
  for (let i = 0; i < entries.length; i++) {
    if (entries[i].ss != null) {
      const idx = [i];
      while (i + 1 < entries.length && entries[i + 1].ss === entries[i].ss) idx.push(++i);
      out.push({ ss: true, idx });
    } else out.push({ ss: false, idx: [i] });
  }
  return out;
}

function exSection(i) {
    const it = S.active.entries[i];
    const e = ex(it.ex), l = last(it.ex);
    const wcol = e.bw ? '<div class="num flat">وزن الجسم</div>' : null;
    return `<section class="ex">
      <div class="head">
        <img class="thumb" src="img/${it.ex}-0.jpg" alt="" loading="lazy"
             onclick="pic('${it.ex}')" onerror="this.remove()">
        <div>
        <h2 onclick="pic('${it.ex}')">${esc(e.ar)}<span class="en">${esc(e.en || '')}</span></h2>
      <div class="last">${l ? `<em>آخر مرة</em>${l.sets.map(s => setText(it.ex, s)).join('   ')}` : '<em>أول مرة</em>'}</div>
        </div>
      </div>
      <div class="heads"><span></span><span>${e.bw ? '' : 'وزن'}</span><span>${e.sec ? 'ثانية' : 'تكرار'}</span><span></span></div>
      ${it.sets.map((s, j) => `
        <div class="set ${s.done ? 'done' : ''}">
          <span class="n">${j + 1}</span>
          ${wcol || `<div class="num">
            <button onclick="adj(${i},${j},'w',-${e.inc})">−</button>
            <input type="number" inputmode="decimal" value="${s.w}" onchange="put(${i},${j},'w',this.value)">
            <button onclick="adj(${i},${j},'w',${e.inc})">+</button></div>`}
          <div class="num">
            <button onclick="adj(${i},${j},'r',-${e.sec ? 5 : 1})">−</button>
            <input type="number" inputmode="numeric" value="${s.r}" onchange="put(${i},${j},'r',this.value)">
            <button onclick="adj(${i},${j},'r',${e.sec ? 5 : 1})">+</button></div>
          <button class="tick ${s.done ? 'on' : ''}" onclick="tick(${i},${j})">✓</button>
        </div>`).join('')}
      <div class="exfoot"><button onclick="addSet(${i})">إضافة مجموعة</button></div>
    </section>`;
}

function adj(i, j, f, d) {
  const s = S.active.entries[i].sets[j];
  s[f] = Math.max(0, Math.round((+s[f] + d) * 100) / 100);
  save(); render();
}
function put(i, j, f, v) { S.active.entries[i].sets[j][f] = Math.max(0, +v || 0); save(); }
function addSet(i) {
  const st = S.active.entries[i].sets, l = st[st.length - 1];
  st.push({ w: l.w, r: l.r, done: false }); save(); render();
}
function tick(i, j) {
  const it = S.active.entries[i], s = it.sets[j];
  s.done = !s.done;
  if (s.done) {
    buzz(25);
    // داخل السوبرست: انتقل للتمرين التالي مباشرة بلا راحة
    const nx = S.active.entries[i + 1];
    const inSS = it.ss != null && nx && nx.ss === it.ss && nx.sets.some(x => !x.done);
    if (!inSS && S.active.entries.some(e => e.sets.some(x => !x.done))) rest(S.rest);
  }
  save(); render();
}

/* ===== صورة التمرين ===== */
function pic(id) {
  const caps = ex(id).caps || ['البداية', 'النهاية'];
  $('#photo').innerHTML = `<div class="in">
    <div class="bar">
      <div><h2>${esc(ex(id).ar)}</h2><div class="en">${esc(ex(id).en || '')}</div></div>
      <button class="link" onclick="closePic()">إغلاق</button>
    </div>
    <figure><img src="img/${id}-0.jpg" alt=""><figcaption>${esc(caps[0])}</figcaption></figure>
    <figure><img src="img/${id}-1.jpg" alt="" onerror="this.parentNode.remove()"><figcaption>${esc(caps[1])}</figcaption></figure>
  </div>`;
  $('#photo').classList.add('show');
}
const closePic = () => $('#photo').classList.remove('show');

/* ===== مؤقت الراحة ===== */
let rt, left = 0, total = 0;
function rest(sec) {
  clearInterval(rt); left = total = sec;
  $('#rest').classList.add('show'); paint();
  rt = setInterval(() => {
    left--;
    if (left <= 0) { clearInterval(rt); beep(2); buzz([180, 90, 180]); $('#rest').classList.remove('show'); }
    paint();
  }, 1000);
}
function paint() {
  $('#restNum').textContent = `${Math.floor(Math.max(0, left) / 60)}:${pad(Math.max(0, left) % 60)}`;
  $('#track i').style.width = Math.max(0, left / total * 100) + '%';
}
const restAdd = d => { if (left > 0) { left += d; total = Math.max(total, left); paint(); } };
const restSkip = () => { clearInterval(rt); $('#rest').classList.remove('show'); };

let ct;
function clock() {
  clearInterval(ct);
  const f = () => {
    const el = $('#clock'); if (!el || !S.active) return clearInterval(ct);
    const s = Math.floor((Date.now() - S.active.start) / 1000);
    el.textContent = `${Math.floor(s / 60)}:${pad(s % 60)}`;
  };
  f(); ct = setInterval(f, 1000);
}

/* ===== إنهاء ===== */
function finish() {
  const a = S.active;
  const entries = a.entries.map(e => ({ ex: e.ex, sets: e.sets.filter(s => s.done).map(s => ({ w: s.w, r: s.r })) }))
                           .filter(e => e.sets.length);
  if (!entries.length) return msg('ما سجّلت أي مجموعة بعد');
  S.sessions.push({ day: a.day, date: a.date, start: a.start, end: Date.now(), entries });
  S.active = null; save(); restSkip(); page = 'home'; render();
  msg('تم حفظ التمرين');
}
function cancel() {
  if (!confirm('إلغاء التمرين بدون حفظ؟')) return;
  S.active = null; save(); restSkip(); page = 'home'; render();
}

/* ===== السجل ===== */
let openRec = -1;
function log() {
  const list = S.sessions.slice().reverse();
  $('#app').innerHTML = `
  <header><h1>السجل</h1><button class="link" onclick="go('home')">رجوع</button></header>
  ${list.length ? list.map((s, i) => `
    <div class="rec">
      <button onclick="openRec=${openRec === i ? -1 : i};render()">
        <b>${PROGRAM[s.day] ? PROGRAM[s.day].name : s.day}</b>
        <time>${fmt(s.date)} · ${Math.max(1, Math.round((s.end - s.start) / 60000))} د</time>
      </button>
      ${openRec === i ? `<div class="body">${s.entries.map(e => `
        <div class="row"><b>${esc(ex(e.ex).ar)}</b><span>${e.sets.map(x => setText(e.ex, x)).join('  ')}</span></div>`).join('')}
      </div>` : ''}
    </div>`).join('') : '<div class="empty">ما في تمارين محفوظة بعد</div>'}
  <div class="foot">
    <button onclick="backup()">حفظ نسخة احتياطية</button>
    <button onclick="$('#imp').click()">استرجاع نسخة</button>
  </div>
  <input type="file" id="imp" accept="application/json" hidden onchange="restore(this)">`;
}
function backup() {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([JSON.stringify(S)], { type: 'application/json' }));
  a.download = `تماريني-${today()}.json`; a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 3000);
}
function restore(inp) {
  const f = inp.files[0]; if (!f) return; inp.value = '';
  const r = new FileReader();
  r.onload = () => {
    try {
      const d = JSON.parse(r.result);
      if (!Array.isArray(d.sessions)) throw 0;
      if (!confirm('سيتم استبدال بياناتك الحالية. متابعة؟')) return;
      S = Object.assign({ sessions: [], active: null, rest: 90 }, d);
      save(); render(); msg('تم الاسترجاع');
    } catch (e) { msg('الملف غير صالح'); }
  };
  r.readAsText(f);
}

/* ===== الإقلاع ===== */
render();
if ('serviceWorker' in navigator && location.protocol !== 'file:') navigator.serviceWorker.register('sw.js').catch(() => {});
addEventListener('beforeunload', e => { if (S.active) { e.preventDefault(); e.returnValue = ''; } });
