/* ================= قاعدة بيانات التمارين ================= */
const MUSCLES = {
  chest:    { ar: 'صدر',      icon: '🎯', color: '#ef4444' },
  back:     { ar: 'ظهر',      icon: '🦅', color: '#3b82f6' },
  shoulders:{ ar: 'أكتاف',    icon: '🪖', color: '#f59e0b' },
  biceps:   { ar: 'بايسبس',   icon: '💪', color: '#a855f7' },
  triceps:  { ar: 'ترايسبس',  icon: '🔱', color: '#ec4899' },
  legs:     { ar: 'أرجل',     icon: '🦵', color: '#22c55e' },
  abs:      { ar: 'بطن',      icon: '🧱', color: '#14b8a6' },
  traps:    { ar: 'ترابيس',   icon: '⛰️', color: '#eab308' },
};

// inc = مقدار الزيادة المقترحة بالوزن | bw = وزن الجسم | unit: 'sec' للوقت
const EX = {
  /* ---- صدر ---- */
  incline_bar_press:  { ar:'ضغط بار مائل',            en:'Incline Barbell Press', m:'chest', inc:2.5, tip:'نزّل البار لأعلى الصدر، الكوع ٤٥°، لا ترتدّ عن الصدر.' },
  flat_bar_press:     { ar:'ضغط بار مستوي',           en:'Flat Barbell Press',    m:'chest', inc:2.5, tip:'الكتف مشدود للخلف والقدم ثابتة على الأرض.' },
  decline_bar_press:  { ar:'ضغط بار منحدر',           en:'Decline Barbell Press', m:'chest', inc:2.5, tip:'يركّز على أسفل الصدر، تحكّم بالنزول.' },
  flat_db_press:      { ar:'ضغط دمبل مستوي',          en:'Flat DB Press',         m:'chest', inc:2,   tip:'انزل حتى تشعر بشدّ الصدر، لا تصطدم الدمبلات فوق.' },
  incline_db_press:   { ar:'ضغط دمبل مائل',           en:'Incline DB Press',      m:'chest', inc:2,   tip:'زاوية الكرسي ٣٠-٤٥ درجة.' },
  cable_press:        { ar:'ضغط كيبل',                en:'Cable Press',           m:'chest', inc:2.5, tip:'ادفع للأمام وللداخل قليلاً واعصر الصدر.' },
  cable_fly:          { ar:'تفتيح كيبل',              en:'Cable Fly',             m:'chest', inc:2.5, tip:'الكوع شبه ثابت، الحركة من الكتف مش من الذراع.' },
  pec_deck:           { ar:'جهاز التفتيح',            en:'Pec Deck',              m:'chest', inc:5,   tip:'اعصر بالنهاية ثانية كاملة.' },
  dips:               { ar:'متوازي (ديبس)',           en:'Dips',                  m:'chest', inc:2.5, bw:true, tip:'ميل للأمام قليلاً لتركيز الصدر، عمودي للترايسبس.' },
  pushup:             { ar:'ضغط أرضي',                en:'Push Up',               m:'chest', inc:0,   bw:true, tip:'الجسم خط مستقيم، لا ترخِ الحوض.' },

  /* ---- ظهر ---- */
  lat_pulldown:       { ar:'سحب أمامي عالي',          en:'Lat Pull Down',         m:'back', inc:1,  tip:'اسحب بالمرفق مش باليد، الصدر مرفوع.' },
  low_row_cable:      { ar:'تجديف كيبل منخفض (محايد)', en:'Low Row Cable',        m:'back', inc:1,  tip:'الظهر مستقيم، اسحب للسرّة واعصر لوح الكتف.' },
  row_hammer_high:    { ar:'تجديف هامر قبضة عالية',   en:'Hammer Row High Grip',  m:'back', inc:2.5,tip:'اسحب حتى نهاية المدى واعصر ثانية.' },
  high_row_cable:     { ar:'تجديف كيبل عالي',         en:'High Row Cable',        m:'back', inc:2.5,tip:'اسحب باتجاه أعلى البطن مع فتح الصدر.' },
  reverse_fly:        { ar:'تفتيح خلفي (ترابيس)',     en:'Reverse Fly',           m:'traps',inc:1,  tip:'وزن خفيف وتحكّم عالي — العضلة صغيرة.' },
  hyper_ext:          { ar:'تمديد أسفل الظهر',        en:'Hyper Extension',       m:'back', inc:2.5,bw:true, tip:'لا تفرط بالرجوع للخلف، توقّف عند الاستقامة.' },
  trx_row:            { ar:'تجديف TRX',               en:'TRX Row',               m:'back', inc:0,  bw:true, tip:'كل ما قرّبت رجليك زادت الصعوبة.' },
  pullup:             { ar:'عقلة',                    en:'Pull Up',               m:'back', inc:2.5,bw:true, tip:'ابدأ من التعليق الكامل، الذقن فوق البار.' },
  bb_row:             { ar:'تجديف بار',               en:'Barbell Row',           m:'back', inc:2.5,tip:'ميل ٤٥°، الظهر مشدود ومستقيم.' },
  db_row:             { ar:'تجديف دمبل',              en:'DB Row',                m:'back', inc:2,  tip:'اسحب للخلف باتجاه الورك مش للأعلى.' },

  /* ---- أكتاف ---- */
  lateral_raise:      { ar:'رفرفة جانبية',            en:'Lateral Raise',         m:'shoulders', inc:1, tip:'ارفع لمستوى الكتف فقط، الخنصر أعلى من الإبهام.' },
  shoulder_press_ham: { ar:'ضغط كتف هامر',            en:'Shoulder Press Hammer', m:'shoulders', inc:2.5, tip:'لا تقفل الكوع بالأعلى.' },
  upright_row:        { ar:'تجديف عمودي',             en:'Upright Row',           m:'shoulders', inc:2.5, tip:'اسحب للصدر، إذا آلمك الكتف وسّع القبضة.' },
  shoulder_press_n:   { ar:'ضغط كتف قبضة محايدة',     en:'Neutral Shoulder Press',m:'shoulders', inc:2,   tip:'ألطف على مفصل الكتف من القبضة العادية.' },
  shrugs:             { ar:'هز الأكتاف',              en:'Shrugs',                m:'traps',     inc:2.5, tip:'ارفع للأعلى مباشرة، لا تلفّ الكتف.' },
  front_raise:        { ar:'رفرفة أمامية',            en:'Front Raise',           m:'shoulders', inc:1,   tip:'بدون تأرجح من الظهر.' },
  rear_delt_fly:      { ar:'رفرفة خلفية',             en:'Rear Delt Fly',         m:'shoulders', inc:1,   tip:'انحنِ للأمام وافتح بالمرفق.' },
  arnold_press:       { ar:'ضغط أرنولد',              en:'Arnold Press',          m:'shoulders', inc:2,   tip:'لفّة كاملة للمعصم أثناء الرفع.' },

  /* ---- بايسبس ---- */
  alt_curl_15:        { ar:'مرجحة تبادل ١.٥ عدة',     en:'Alt Curl 1.5 Reps',     m:'biceps', inc:1, tip:'عدّة كاملة + نصف عدّة من الأسفل = عدّة واحدة.' },
  cable_curl:         { ar:'مرجحة كيبل',              en:'Cable Curl',            m:'biceps', inc:1, tip:'الكوع ثابت جنب الجسم طول الحركة.' },
  hammer_curl:        { ar:'مرجحة مطرقة',             en:'Hammer Curl',           m:'biceps', inc:1, tip:'القبضة محايدة، تستهدف الساعد أيضاً.' },
  preacher_curl:      { ar:'مرجحة على الكرسي المائل', en:'Preacher Curl',         m:'biceps', inc:1, tip:'انزل للتمديد الكامل ببطء.' },
  bb_curl:            { ar:'مرجحة بار',               en:'Barbell Curl',          m:'biceps', inc:2.5, tip:'لا تحرّك ظهرك، الحركة من الكوع فقط.' },

  /* ---- ترايسبس ---- */
  single_arm_oh_ext:  { ar:'تمديد فوق الرأس بذراع واحدة', en:'Single Arm OH Ext', m:'triceps', inc:1, tip:'الكوع قريب من الرأس وثابت.' },
  rope_pushdown:      { ar:'سحب حبل ترايسبس',         en:'Rope Push Down',        m:'triceps', inc:1, tip:'افتح الحبل بالنهاية واعصر.' },
  tri_ext_machine:    { ar:'جهاز الترايسبس',          en:'Triceps Machine',       m:'triceps', inc:2.5, tip:'مدى كامل وتحكّم بالرجوع.' },
  skull_crusher:      { ar:'كسّارة الجمجمة',          en:'Skull Crusher',         m:'triceps', inc:2.5, tip:'انزل خلف الجبهة مش عليها.' },
  bench_dips:         { ar:'ديبس على الكرسي',         en:'Bench Dips',            m:'triceps', inc:0, bw:true, tip:'الكتف لا ينزل تحت مستوى الكوع كثيراً.' },

  /* ---- أرجل ---- */
  squat:              { ar:'سكوات',                   en:'Squat',                 m:'legs', inc:5, tip:'الركبة باتجاه أصابع القدم، الصدر مرفوع، انزل للموازاة.' },
  lunges:             { ar:'طعنات',                   en:'Lunges',                m:'legs', inc:2, bw:true, tip:'الخطوة واسعة والركبة الأمامية لا تتجاوز القدم كثيراً.' },
  leg_ext:            { ar:'تمديد الأرجل',            en:'Leg Extension',         m:'legs', inc:2.5, tip:'اعصر بالأعلى ثانية، لا ترمِ الوزن للأسفل.' },
  leg_curl:           { ar:'ثني الأرجل',              en:'Leg Curl',              m:'legs', inc:2.5, tip:'الحوض ملتصق بالكرسي.' },
  abd_add:            { ar:'تبعيد وتقريب الأفخاذ',    en:'Abduction & Adduction', m:'legs', inc:5, tip:'حركة بطيئة، لا تستخدم الزخم.' },
  calf_raise:         { ar:'رفع السمانة',             en:'Calf Raise',            m:'legs', inc:5, tip:'مدى كامل: انزل للأسفل تماماً وارفع لأقصى نقطة.' },
  leg_press:          { ar:'ضغط الأرجل',              en:'Leg Press',             m:'legs', inc:5, tip:'لا تقفل الركبة بالأعلى.' },
  rdl:                { ar:'الرفعة الرومانية',        en:'Romanian Deadlift',     m:'legs', inc:2.5, tip:'ادفع الورك للخلف والظهر مستقيم.' },
  hip_thrust:         { ar:'دفع الحوض',               en:'Hip Thrust',            m:'legs', inc:5, tip:'اعصر المؤخرة بالأعلى وثبّت ثانية.' },

  /* ---- بطن ---- */
  butterfly_situp:    { ar:'بطن فراشة',               en:'Butterfly Situp',       m:'abs', inc:0, bw:true, tip:'باطن القدمين ملتصق، ارفع بالبطن مش بالرقبة.' },
  plank:              { ar:'بلانك',                   en:'Plank',                 m:'abs', inc:0, bw:true, unit:'sec', tip:'الجسم خط مستقيم، اشدّ البطن والمؤخرة.' },
  ab_wheel:           { ar:'عجلة البطن',              en:'Ab Wheel',              m:'abs', inc:0, bw:true, tip:'الظهر لا يتقوّس، انزل بالمدى الذي تتحكم فيه.' },
  hanging_leg_raise:  { ar:'رفع الأرجل بالتعليق',     en:'Hanging Leg Raise',     m:'abs', inc:0, bw:true, tip:'ارفع الحوض قليلاً بالنهاية.' },
  crunch:             { ar:'كرنش',                    en:'Crunch',                m:'abs', inc:0, bw:true, tip:'حركة قصيرة ومركّزة.' },
};

/* ================= برنامجك (من جدولك بالضبط) ================= */
// ss = رقم مجموعة السوبرست | sets = [{w, r}] الأوزان والتكرارات المستهدفة
const PROGRAM = {
  d1: { name:'صدر وترايسبس', short:'صدر', icon:'🎯', color:'#ef4444', items:[
    { ex:'incline_bar_press', sets:[{w:10,r:12},{w:10,r:10},{w:10,r:8}] },
    { ex:'cable_press', ss:1, sets:[{w:20,r:8},{w:20,r:8},{w:20,r:8}] },
    { ex:'cable_fly',   ss:1, sets:[{w:25,r:8},{w:25,r:8},{w:25,r:8}] },
    { ex:'decline_bar_press', ss:2, sets:[{w:10,r:8},{w:10,r:8},{w:10,r:8}] },
    { ex:'dips',        ss:2, sets:[{w:30,r:8},{w:30,r:8},{w:30,r:8}], note:'مساعدة ٣٠' },
    { ex:'flat_db_press', sets:[{w:14,r:10},{w:14,r:10},{w:14,r:10}] },
    { ex:'single_arm_oh_ext', sets:[{w:15,r:12},{w:15,r:12},{w:15,r:12}] },
    { ex:'rope_pushdown', sets:[{w:20,r:12},{w:20,r:10},{w:20,r:8}] },
    { ex:'tri_ext_machine', sets:[{w:25,r:20},{w:25,r:20},{w:25,r:20}] },
  ]},
  d2: { name:'ظهر', short:'ظهر', icon:'🦅', color:'#3b82f6', items:[
    { ex:'lat_pulldown', sets:[{w:6,r:12},{w:6,r:10},{w:6,r:8}] },
    { ex:'low_row_cable', sets:[{w:6,r:10},{w:6,r:10},{w:7,r:10}] },
    { ex:'row_hammer_high', sets:[{w:25,r:10},{w:25,r:10},{w:25,r:10}] },
    { ex:'high_row_cable', sets:[{w:20,r:12},{w:20,r:12},{w:20,r:12}] },
    { ex:'reverse_fly', sets:[{w:4,r:15},{w:5,r:15},{w:5,r:15}], flag:'نقطة ضعف — ركّز عليها' },
    { ex:'hyper_ext', sets:[{w:10,r:15},{w:10,r:15},{w:10,r:15}] },
    { ex:'trx_row', sets:[{w:0,r:10},{w:0,r:10},{w:0,r:10}] },
  ]},
  d3: { name:'أكتاف وبايسبس', short:'أكتاف', icon:'🪖', color:'#f59e0b', items:[
    { ex:'lateral_raise', sets:[{w:6,r:12},{w:6,r:12},{w:8,r:12}] },
    { ex:'shoulder_press_ham', sets:[{w:15,r:10},{w:20,r:10},{w:20,r:10}] },
    { ex:'upright_row', sets:[{w:20,r:12},{w:20,r:12},{w:25,r:12}] },
    { ex:'shoulder_press_n', sets:[{w:10,r:10},{w:10,r:10},{w:10,r:10}] },
    { ex:'shrugs', sets:[{w:20,r:15},{w:20,r:15},{w:20,r:15}] },
    { ex:'alt_curl_15', sets:[{w:8,r:12},{w:8,r:10},{w:8,r:8}] },
    { ex:'cable_curl', sets:[{w:4,r:12},{w:5,r:12},{w:5,r:12}] },
    { ex:'hammer_curl', sets:[{w:8,r:12},{w:10,r:12},{w:10,r:12}] },
  ]},
  d4: { name:'أرجل وبطن', short:'أرجل', icon:'🦵', color:'#22c55e', items:[
    { ex:'squat', sets:[{w:20,r:12},{w:20,r:10},{w:20,r:8}] },
    { ex:'lunges', sets:[{w:0,r:12},{w:0,r:12},{w:0,r:12}] },
    { ex:'leg_ext', sets:[{w:18,r:12},{w:23,r:12},{w:29,r:12}] },
    { ex:'leg_curl', sets:[{w:39,r:12},{w:45,r:12},{w:45,r:12}] },
    { ex:'abd_add', sets:[{w:95,r:15},{w:95,r:15},{w:95,r:15}] },
    { ex:'calf_raise', ss:1, sets:[{w:45,r:20},{w:45,r:20},{w:45,r:20}] },
    { ex:'butterfly_situp', sets:[{w:0,r:20},{w:0,r:20},{w:0,r:20}] },
    { ex:'plank', sets:[{w:0,r:60},{w:0,r:60},{w:0,r:60}] },
    { ex:'ab_wheel', sets:[{w:0,r:10},{w:0,r:10},{w:0,r:10}] },
  ]},
};

/* ================= الحالة والتخزين ================= */
const KEY = 'gym_ar_v1';
const DEFAULTS = {
  sessions: [],          // {id, day, date, start, end, entries:[{ex, ss, sets:[{w,r,done}], note, flag}]}
  active: null,          // جلسة قيد التنفيذ
  body: [],              // {date, weight, waist, chest, arm, thigh, neck}
  program: null,         // نسخة قابلة للتعديل من PROGRAM
  xp: 0,
  prs: {},               // exId -> {w, e1rm, vol, date}
  settings: { rest: 90, restSS: 30, sound: true, vibrate: true, theme: 'dark', geminiKey: '', wake: true },
  chat: [],
  seen: { welcome: false },
};

let S = load();
function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return structuredClone(DEFAULTS);
    const d = JSON.parse(raw);
    return Object.assign(structuredClone(DEFAULTS), d, { settings: Object.assign({}, DEFAULTS.settings, d.settings || {}) });
  } catch (e) { console.warn(e); return structuredClone(DEFAULTS); }
}
let saveTimer = null;
function save() {
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    try { localStorage.setItem(KEY, JSON.stringify(S)); }
    catch (e) { toast('⚠️ الذاكرة ممتلئة — احذف بعض الصور من صفحة جسمي'); }
  }, 150);
}
if (!S.program) { S.program = structuredClone(PROGRAM); save(); }
// دمج أي أيام جديدة أضيفت للبرنامج الأساسي لاحقاً
for (const k of Object.keys(PROGRAM)) if (!S.program[k]) S.program[k] = structuredClone(PROGRAM[k]);

/* ================= أدوات مساعدة ================= */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const pad = n => String(n).padStart(2, '0');
const todayKey = (d = new Date()) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const AR_DAYS = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
const AR_MONTHS = ['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر'];
const fmtDate = k => { const d = new Date(k + 'T12:00:00'); return `${AR_DAYS[d.getDay()]} ${d.getDate()} ${AR_MONTHS[d.getMonth()]}`; };
const daysAgo = k => Math.round((new Date(todayKey() + 'T12:00:00') - new Date(k + 'T12:00:00')) / 86400000);
const num = n => (Math.round(n * 10) / 10).toLocaleString('en-US');
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const exOf = id => EX[id] || { ar: id, m: 'chest', inc: 2.5 };
const e1rm = (w, r) => (w > 0 && r > 0) ? w * (1 + r / 30) : 0;
// صيغة الجمع بالعربي: ١ / ٢ / ٣-١٠ / ١١+
function plur(n, one, two, few, many) {
  if (n === 1) return one;
  if (n === 2) return two;
  return `${n} ${n >= 3 && n <= 10 ? few : many}`;
}
const agoText = k => { const d = daysAgo(k); return d === 0 ? 'اليوم' : d === 1 ? 'أمس' : `قبل ${plur(d, 'يوم', 'يومين', 'أيام', 'يوماً')}`; };

function toast(msg, ms = 2600) {
  let t = $('#toast');
  if (!t) { t = document.createElement('div'); t.id = 'toast'; document.body.appendChild(t); }
  t.textContent = msg; t.classList.add('show');
  clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove('show'), ms);
}
function buzz(pattern) { if (S.settings.vibrate && navigator.vibrate) navigator.vibrate(pattern); }

let AC = null;
function beep(times = 1, freq = 880) {
  if (!S.settings.sound) return;
  try {
    AC = AC || new (window.AudioContext || window.webkitAudioContext)();
    if (AC.state === 'suspended') AC.resume();
    for (let i = 0; i < times; i++) {
      const o = AC.createOscillator(), g = AC.createGain();
      const t0 = AC.currentTime + i * 0.28;
      o.frequency.value = freq; o.type = 'sine';
      g.gain.setValueAtTime(0.0001, t0);
      g.gain.exponentialRampToValueAtTime(0.35, t0 + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.22);
      o.connect(g); g.connect(AC.destination); o.start(t0); o.stop(t0 + 0.25);
    }
  } catch (e) {}
}

/* ================= المستوى والخبرة ================= */
const TITLES = ['مبتدئ', 'مواظب', 'نشيط', 'قوي', 'صخرة', 'وحش', 'أسطورة', 'خارق'];
const levelOf = xp => Math.max(1, Math.floor(Math.sqrt(Math.max(0, xp) / 60)) + 1);
const xpForLevel = l => Math.pow(l - 1, 2) * 60;
const titleOf = l => TITLES[Math.min(TITLES.length - 1, Math.floor((l - 1) / 3))];
function addXp(n) {
  const before = levelOf(S.xp); S.xp += n; const after = levelOf(S.xp);
  if (after > before) { setTimeout(() => { confetti(); toast(`🎉 وصلت للمستوى ${after} — ${titleOf(after)}!`, 4000); beep(3, 660); }, 400); }
  save();
}

/* ================= إحصائيات ================= */
function sessionVolume(s) {
  let v = 0;
  for (const it of s.entries) for (const st of it.sets) if (st.done && exOf(it.ex).unit !== 'sec') v += (st.w || 0) * (st.r || 0);
  return v;
}
function sessionSets(s) { let n = 0; for (const it of s.entries) for (const st of it.sets) if (st.done) n++; return n; }
function allDone() { return S.sessions.filter(s => s.end); }

// آخر أداء فعلي لتمرين معيّن
function lastPerf(exId, excludeId) {
  const list = allDone().filter(s => s.id !== excludeId).sort((a, b) => b.start - a.start);
  for (const s of list) {
    const it = s.entries.find(e => e.ex === exId && e.sets.some(x => x.done));
    if (it) return { date: s.date, sets: it.sets.filter(x => x.done) };
  }
  return null;
}
// اقتراح التطوّر التدريجي
function suggest(exId, target, prev) {
  const ex = exOf(exId);
  if (!prev || !prev.sets.length) return null;
  const best = prev.sets.reduce((a, b) => (b.w > a.w || (b.w === a.w && b.r > a.r)) ? b : a);
  const tgtR = target ? target.r : best.r;
  if (ex.unit === 'sec') return { text: `زِد ${5} ثواني عن آخر مرة (${best.r} ث)`, w: 0, r: best.r + 5 };
  if (ex.bw && !ex.inc) return { text: `حاول ${best.r + 1} تكرار (آخر مرة ${best.r})`, w: best.w, r: best.r + 1 };
  if (best.r >= tgtR) return { text: `أنجزت الهدف ✅ زِد الوزن ${ex.inc} → ${num(best.w + ex.inc)}`, w: best.w + ex.inc, r: tgtR };
  return { text: `ثبّت الوزن ${num(best.w)} وحاول ${best.r + 1} تكرار`, w: best.w, r: best.r + 1 };
}
// أرقام قياسية
function checkPR(exId, w, r) {
  const cur = S.prs[exId] || { w: 0, e1rm: 0, date: null };
  const est = e1rm(w, r); const out = [];
  if (w > cur.w) { out.push('أعلى وزن'); cur.w = w; }
  if (est > cur.e1rm + 0.01) { out.push('أقوى أداء'); cur.e1rm = est; }
  if (out.length) { cur.date = todayKey(); S.prs[exId] = cur; save(); }
  return out;
}
// حجم التدريب لكل عضلة خلال آخر N يوم
function muscleVolume(days = 7) {
  const out = {}; for (const k in MUSCLES) out[k] = { vol: 0, sets: 0, last: null };
  for (const s of allDone()) {
    const ago = daysAgo(s.date);
    for (const it of s.entries) {
      const m = exOf(it.ex).m; if (!out[m]) continue;
      const done = it.sets.filter(x => x.done);
      if (done.length && (out[m].last === null || ago < out[m].last)) out[m].last = ago;
      if (ago < days) { out[m].sets += done.length; for (const st of done) out[m].vol += (st.w || 0) * (st.r || 0); }
    }
  }
  return out;
}
// سلسلة الالتزام: تمارين متتالية بفجوة ≤ 3 أيام
function streak() {
  const days = [...new Set(allDone().map(s => s.date))].sort().reverse();
  if (!days.length) return { n: 0, gap: null };
  const gap = daysAgo(days[0]);
  if (gap > 3) return { n: 0, gap };
  let n = 1;
  for (let i = 0; i < days.length - 1; i++) {
    const d = Math.round((new Date(days[i] + 'T12:00:00') - new Date(days[i + 1] + 'T12:00:00')) / 86400000);
    if (d <= 3) n++; else break;
  }
  return { n, gap };
}
function funCompare(kg) {
  const items = [[12000, 'باص 🚌'], [5000, 'فيل 🐘'], [1200, 'سيارة 🚗'], [600, 'جمل 🐪'], [250, 'ثلاجة 🧊'], [50, 'كيس إسمنت 🧱']];
  for (const [w, name] of items) { const n = kg / w; if (n >= 1) return `= ${num(n)} × ${name}`; }
  return '';
}

/* ================= التنقل ================= */
const TABS = [
  { id: 'workout',  ar: 'التمرين', icon: '🏋️' },
  { id: 'progress', ar: 'التقدم',  icon: '📈' },
  { id: 'history',  ar: 'السجل',   icon: '📅' },
  { id: 'body',     ar: 'جسمي',    icon: '⚖️' },
  { id: 'coach',    ar: 'المدرب',  icon: '🤖' },
];
let tab = 'workout';
function go(t) { tab = t; render(); window.scrollTo(0, 0); }

function render() {
  $('#nav').innerHTML = TABS.map(t =>
    `<button class="nb ${t.id === tab ? 'on' : ''}" onclick="go('${t.id}')"><span>${t.icon}</span><i>${t.ar}</i></button>`).join('');
  const v = $('#view');
  ({ workout: viewWorkout, progress: viewProgress, history: viewHistory, body: viewBody, coach: viewCoach }[tab])(v);
}

/* ================= تبويب التمرين ================= */
function viewWorkout(v) {
  if (S.active) return viewActive(v);
  const lvl = levelOf(S.xp), nx = xpForLevel(lvl + 1), pv = xpForLevel(lvl);
  const pct = Math.min(100, Math.round((S.xp - pv) / Math.max(1, nx - pv) * 100));
  const st = streak();
  const done = allDone();
  const lastDay = done.length ? done[done.length - 1].day : null;
  const order = Object.keys(S.program);
  const next = lastDay ? order[(order.indexOf(lastDay) + 1) % order.length] : order[0];
  const totalKg = done.reduce((a, s) => a + sessionVolume(s), 0);

  v.innerHTML = `
  <div class="hero">
    <div class="lvlrow">
      <div class="lvlbadge">${lvl}</div>
      <div style="flex:1">
        <div class="lvltitle">${titleOf(lvl)} · المستوى ${lvl}</div>
        <div class="bar"><i style="width:${pct}%"></i></div>
        <div class="muted sm">${S.xp - pv} / ${nx - pv} نقطة للمستوى التالي</div>
      </div>
    </div>
    <div class="stats3">
      <div class="st"><b>${done.length}</b><i>تمرين</i></div>
      <div class="st"><b>${st.n}${st.n >= 3 ? ' 🔥' : ''}</b><i>سلسلة</i></div>
      <div class="st"><b>${num(totalKg / 1000)}</b><i>طن مرفوع</i></div>
    </div>
  </div>

  ${st.gap !== null && st.gap > 3 ? `<div class="warn">⏰ آخر تمرين قبل ${st.gap} يوم — يلا نرجع!</div>` : ''}
  ${neglectedBanner()}

  <h2 class="h">اختر تمرين اليوم</h2>
  <div class="daygrid">
    ${order.map(k => {
      const d = S.program[k];
      const l = done.filter(s => s.day === k).pop();
      const ago = l ? daysAgo(l.date) : null;
      return `<button class="daycard ${k === next ? 'suggest' : ''}" style="--c:${d.color}" onclick="startDay('${k}')">
        ${k === next ? '<span class="pill">مقترح اليوم</span>' : ''}
        <div class="dic">${d.icon}</div>
        <div class="dname">${d.name}</div>
        <div class="dsub">${plur(d.items.length, 'تمرين واحد', 'تمرينان', 'تمارين', 'تمريناً')} · ${d.items.reduce((a, i) => a + i.sets.length, 0)} مجموعة</div>
        <div class="dago">${ago === null ? 'لم تبدأ بعد' : `آخر مرة ${agoText(l.date)}`}</div>
      </button>`;
    }).join('')}
  </div>
  <button class="btn ghost wide" onclick="startFree()">➕ تمرين حر (اختر تماريناً يدوياً)</button>
  <button class="btn ghost wide" onclick="openLibrary()">📚 مكتبة التمارين وطريقة الأداء</button>
  `;
}
function neglectedBanner() {
  const mv = muscleVolume(30);
  const bad = Object.entries(mv).filter(([k, x]) => x.last !== null && x.last >= 8).sort((a, b) => b[1].last - a[1].last)[0];
  const never = Object.entries(mv).filter(([k, x]) => x.last === null);
  if (bad) return `<div class="warn">${MUSCLES[bad[0]].icon} عضلة <b>${MUSCLES[bad[0]].ar}</b> ما تمرّنت من ${bad[1].last} يوم — لا تهملها.</div>`;
  if (never.length && allDone().length > 2) return `<div class="warn">👀 ما سجّلت أي تمرين لعضلة <b>${MUSCLES[never[0][0]].ar}</b> بعد.</div>`;
  return '';
}

/* ---- بدء جلسة ---- */
function startDay(k) {
  const d = S.program[k];
  const entries = d.items.map(it => ({
    ex: it.ex, ss: it.ss || null, note: it.note || '', flag: it.flag || '',
    sets: it.sets.map(s => ({ w: s.w, r: s.r, done: false, tw: s.w, tr: s.r })),
  }));
  S.active = { id: Date.now(), day: k, date: todayKey(), start: Date.now(), end: null, entries, open: 0 };
  save(); wakeOn(); render();
}
function startFree() {
  S.active = { id: Date.now(), day: 'free', date: todayKey(), start: Date.now(), end: null, entries: [], open: 0 };
  save(); wakeOn(); render(); pickExercise();
}

/* ---- شاشة الجلسة النشطة ---- */
function viewActive(v) {
  const a = S.active;
  const d = S.program[a.day] || { name: 'تمرين حر', icon: '➕', color: '#64748b' };
  const totalSets = a.entries.reduce((x, e) => x + e.sets.length, 0);
  const doneSets = a.entries.reduce((x, e) => x + e.sets.filter(s => s.done).length, 0);
  const pct = totalSets ? Math.round(doneSets / totalSets * 100) : 0;
  const vol = sessionVolume(a);

  let html = `
  <div class="sess" style="--c:${d.color}">
    <div class="srow">
      <div><div class="sname">${d.icon} ${d.name}</div><div class="muted sm" id="elapsed">00:00</div></div>
      <button class="btn sm danger" onclick="endSession()">إنهاء</button>
    </div>
    <div class="bar big"><i style="width:${pct}%"></i></div>
    <div class="srow2"><span>${doneSets} / ${totalSets} مجموعة</span><span>${num(vol)} كغم مرفوع</span></div>
  </div>`;

  // تجميع السوبرست
  const groups = []; let i = 0;
  while (i < a.entries.length) {
    const e = a.entries[i];
    if (e.ss) { const g = []; const s = e.ss; while (i < a.entries.length && a.entries[i].ss === s) { g.push(i); i++; } groups.push({ ss: s, idx: g }); }
    else { groups.push({ ss: null, idx: [i] }); i++; }
  }

  html += groups.map(g => {
    const inner = g.idx.map(ix => exCard(ix)).join('');
    return g.ss ? `<div class="ssgroup"><div class="sslabel">🔗 سوبرست — بدون راحة بينهم</div>${inner}</div>` : inner;
  }).join('');

  html += `
  <div class="actrow">
    <button class="btn ghost" onclick="pickExercise()">➕ أضف تمرين</button>
    <button class="btn ghost" onclick="voiceLog()">🎤 تسجيل بالصوت</button>
  </div>
  <button class="btn wide" onclick="endSession()">✅ إنهاء التمرين وحفظه</button>`;
  v.innerHTML = html;
  tickElapsed();
}

function exCard(ix) {
  const a = S.active, it = a.entries[ix], ex = exOf(it.ex);
  const m = MUSCLES[ex.m] || MUSCLES.chest;
  const prev = lastPerf(it.ex, a.id);
  const doneN = it.sets.filter(s => s.done).length;
  const open = a.open === ix;
  const sug = suggest(it.ex, it.sets[Math.min(doneN, it.sets.length - 1)], prev);
  const isSec = ex.unit === 'sec';

  const sets = it.sets.map((s, si) => `
    <div class="setrow ${s.done ? 'ok' : ''}">
      <span class="sn">${si + 1}</span>
      ${ex.bw && !ex.inc ? `<span class="bwlbl">وزن الجسم</span>` : `
      <div class="stepper">
        <button onclick="adj(${ix},${si},'w',-${ex.inc || 1})">−</button>
        <input type="number" inputmode="decimal" value="${s.w}" onchange="setVal(${ix},${si},'w',this.value)">
        <button onclick="adj(${ix},${si},'w',${ex.inc || 1})">+</button>
      </div>`}
      <div class="stepper">
        <button onclick="adj(${ix},${si},'r',-${isSec ? 5 : 1})">−</button>
        <input type="number" inputmode="numeric" value="${s.r}" onchange="setVal(${ix},${si},'r',this.value)">
        <button onclick="adj(${ix},${si},'r',${isSec ? 5 : 1})">+</button>
      </div>
      <button class="chk ${s.done ? 'on' : ''}" onclick="toggleSet(${ix},${si})">${s.done ? '✓' : '✓'}</button>
    </div>`).join('');

  return `
  <div class="excard ${doneN === it.sets.length ? 'complete' : ''}" style="--m:${m.color}">
    <div class="exhead" onclick="openEx(${ix})">
      <div class="exicon">${m.icon}</div>
      <div class="exmain">
        <div class="exname">${esc(ex.ar)} ${it.flag ? '<span class="redflag">🔴</span>' : ''}</div>
        <div class="exsub">${m.ar}${it.note ? ' · ' + esc(it.note) : ''} · ${doneN}/${it.sets.length} مجموعة</div>
      </div>
      <div class="exarrow">${open ? '▲' : '▼'}</div>
    </div>
    ${open ? `
    <div class="exbody">
      ${it.flag ? `<div class="flagbox">🔴 ${esc(it.flag)}</div>` : ''}
      <div class="lastbox">
        <div class="lb-t">آخر مرة</div>
        <div class="lb-v">${prev ? prev.sets.map(s => `${isSec ? s.r + ' ث' : (ex.bw && !ex.inc ? s.r + ' عدة' : num(s.w) + '×' + s.r)}`).join(' · ') + `<span class="muted"> (${agoText(prev.date)})</span>` : '<span class="muted">أول مرة — الأرقام من جدولك</span>'}</div>
      </div>
      ${sug ? `<div class="sugbox">💡 ${esc(sug.text)} <button class="mini" onclick="applySug(${ix},${sug.w},${sug.r})">طبّق</button></div>` : ''}
      <div class="setheads"><span></span>${ex.bw && !ex.inc ? '<span></span>' : '<span>الوزن</span>'}<span>${isSec ? 'ثواني' : 'تكرار'}</span><span></span></div>
      ${sets}
      <div class="exfoot">
        <button class="mini" onclick="addSet(${ix})">+ مجموعة</button>
        <button class="mini" onclick="delSet(${ix})">− مجموعة</button>
        <button class="mini" onclick="showTip('${it.ex}')">❔ الأداء الصحيح</button>
        <button class="mini danger" onclick="delEx(${ix})">حذف التمرين</button>
      </div>
    </div>` : ''}
  </div>`;
}

function openEx(ix) { S.active.open = (S.active.open === ix ? -1 : ix); save(); render(); }
function adj(ix, si, f, d) {
  const s = S.active.entries[ix].sets[si];
  s[f] = Math.max(0, Math.round((Number(s[f]) + d) * 100) / 100);
  save(); render();
}
function setVal(ix, si, f, v) { S.active.entries[ix].sets[si][f] = Math.max(0, Number(v) || 0); save(); }
function applySug(ix, w, r) {
  for (const s of S.active.entries[ix].sets) if (!s.done) { s.w = w; s.r = r; }
  save(); render(); toast('تم تطبيق الاقتراح ✅');
}
function addSet(ix) {
  const st = S.active.entries[ix].sets; const l = st[st.length - 1] || { w: 0, r: 10 };
  st.push({ w: l.w, r: l.r, done: false }); save(); render();
}
function delSet(ix) { const st = S.active.entries[ix].sets; if (st.length > 1) st.pop(); save(); render(); }
function delEx(ix) { S.active.entries.splice(ix, 1); save(); render(); }

function toggleSet(ix, si) {
  const it = S.active.entries[ix], s = it.sets[si];
  s.done = !s.done;
  if (s.done) {
    buzz(30); beep(1, 1046); addXp(10);
    const prs = checkPR(it.ex, s.w, s.r);
    if (prs.length && s.w > 0) { confetti(); toast(`🏆 رقم قياسي جديد: ${prs.join(' + ')} في ${exOf(it.ex).ar}!`, 4000); addXp(60); }
    // فتح التمرين التالي تلقائياً عند إكمال الحالي
    if (it.sets.every(x => x.done)) {
      const nx = S.active.entries.findIndex((e, i) => i > ix && e.sets.some(x => !x.done));
      if (nx >= 0) S.active.open = nx;
    }
    const nextSS = S.active.entries[ix + 1];
    const inSS = it.ss && nextSS && nextSS.ss === it.ss;
    startRest(inSS ? S.settings.restSS : S.settings.rest);
  }
  save(); render();
}

/* ---- مؤقت الراحة ---- */
let restT = null;
function startRest(sec) {
  clearInterval(restT);
  const el = $('#rest'); el.classList.add('show');
  let left = sec; const total = sec;
  const draw = () => {
    const pct = Math.max(0, left / total);
    $('#restRing').style.strokeDashoffset = String(283 * (1 - pct));
    $('#restNum').textContent = `${Math.floor(Math.max(0, left) / 60)}:${pad(Math.max(0, left) % 60)}`;
  };
  draw();
  restT = setInterval(() => {
    left--;
    if (left <= 3 && left > 0) beep(1, 660);
    if (left <= 0) { clearInterval(restT); beep(3, 990); buzz([200, 100, 200, 100, 400]); el.classList.remove('show'); }
    draw();
  }, 1000);
  el._add = d => { left = Math.max(0, left + d); draw(); };
}
function restAdd(d) { const el = $('#rest'); if (el._add) el._add(d); }
function restSkip() { clearInterval(restT); $('#rest').classList.remove('show'); }

let elT = null;
function tickElapsed() {
  clearInterval(elT);
  const f = () => {
    const el = $('#elapsed'); if (!el || !S.active) return clearInterval(elT);
    const s = Math.floor((Date.now() - S.active.start) / 1000);
    el.textContent = `${pad(Math.floor(s / 3600))}:${pad(Math.floor(s / 60) % 60)}:${pad(s % 60)}`;
  };
  f(); elT = setInterval(f, 1000);
}

/* ---- إنهاء الجلسة ---- */
function endSession() {
  const a = S.active; if (!a) return;
  const n = sessionSets(a);
  if (!n) { if (!confirm('ما سجّلت أي مجموعة. إلغاء التمرين؟')) return; S.active = null; save(); wakeOff(); render(); return; }
  a.end = Date.now();
  a.entries = a.entries.map(e => ({ ...e, sets: e.sets.filter(s => s.done) })).filter(e => e.sets.length);
  S.sessions.push(a); S.active = null;
  addXp(80); save(); wakeOff(); clearInterval(restT); restSkip();
  const vol = sessionVolume(a), mins = Math.round((a.end - a.start) / 60000);
  confetti();
  modal(`
    <h3>💪 أحسنت!</h3>
    <div class="sumgrid">
      <div><b>${n}</b><i>مجموعة</i></div>
      <div><b>${mins}</b><i>دقيقة</i></div>
      <div><b>${num(vol)}</b><i>كغم</i></div>
    </div>
    <p class="fun">${funCompare(vol) ? 'رفعت اليوم ما يعادل ' + funCompare(vol).replace('= ', '') : 'استمر — كل تمرين يقرّبك خطوة.'}</p>
    <p class="muted sm">+80 نقطة خبرة · المستوى ${levelOf(S.xp)}</p>
    <button class="btn wide" onclick="closeModal();go('progress')">شوف تقدمك 📈</button>
    <button class="btn ghost wide" onclick="closeModal()">تمام</button>`);
  render();
}

/* ---- اختيار تمرين من المكتبة ---- */
function pickExercise() {
  const byM = {};
  for (const [id, e] of Object.entries(EX)) { (byM[e.m] = byM[e.m] || []).push(id); }
  modal(`
    <h3>أضف تمريناً</h3>
    <input class="search" id="exSearch" placeholder="🔍 ابحث بالعربي أو الإنجليزي..." oninput="filterEx(this.value)">
    <div class="picklist" id="pickList">
      ${Object.keys(MUSCLES).map(m => byM[m] ? `
        <div class="pgroup" data-m="${m}"><div class="ptitle">${MUSCLES[m].icon} ${MUSCLES[m].ar}</div>
        ${byM[m].map(id => `<button class="pitem" data-s="${esc(EX[id].ar + ' ' + EX[id].en)}" onclick="addExercise('${id}')">${esc(EX[id].ar)} <span class="muted sm">${esc(EX[id].en)}</span></button>`).join('')}
        </div>` : '').join('')}
    </div>`);
}
function filterEx(q) {
  q = q.trim().toLowerCase();
  $$('#pickList .pitem').forEach(b => { b.style.display = !q || b.dataset.s.toLowerCase().includes(q) ? '' : 'none'; });
  $$('#pickList .pgroup').forEach(g => { g.style.display = [...g.querySelectorAll('.pitem')].some(b => b.style.display !== 'none') ? '' : 'none'; });
}
function addExercise(id) {
  if (!S.active) { closeModal(); return showTip(id); }
  const prev = lastPerf(id);
  const base = prev ? prev.sets[prev.sets.length - 1] : { w: exOf(id).bw ? 0 : 10, r: exOf(id).unit === 'sec' ? 45 : 10 };
  S.active.entries.push({ ex: id, ss: null, note: '', flag: '', sets: [1, 2, 3].map(() => ({ w: base.w, r: base.r, done: false })) });
  S.active.open = S.active.entries.length - 1;
  closeModal(); save(); render();
}
function openLibrary() { pickExercise(); }
function showTip(id) {
  const e = exOf(id), m = MUSCLES[e.m] || MUSCLES.chest;
  const pr = S.prs[id];
  modal(`<h3>${m.icon} ${esc(e.ar)}</h3>
    <p class="muted sm">${esc(e.en || '')} · ${m.ar}</p>
    <div class="tipbox">📌 ${esc(e.tip || 'ركّز على المدى الكامل والتحكّم بالحركة.')}</div>
    ${pr ? `<div class="tipbox">🏆 رقمك القياسي: ${num(pr.w)} كغم · أقصى قوة تقديرية ${num(pr.e1rm)} كغم</div>` : ''}
    <button class="btn wide" onclick="closeModal()">إغلاق</button>`);
}

/* ================= تبويب التقدم ================= */
function viewProgress(v) {
  const done = allDone();
  if (!done.length) { v.innerHTML = `<div class="empty">📈<p>ما في بيانات بعد.<br>سجّل أول تمرين وبتشوف تقدمك هون.</p><button class="btn" onclick="go('workout')">ابدأ تمرين</button></div>`; return; }
  const totalVol = done.reduce((a, s) => a + sessionVolume(s), 0);
  const mv = muscleVolume(7);
  const maxV = Math.max(1, ...Object.values(mv).map(x => x.vol));
  const exIds = [...new Set(done.flatMap(s => s.entries.map(e => e.ex)))];
  const sel = viewProgress.sel && exIds.includes(viewProgress.sel) ? viewProgress.sel : exIds[0];

  v.innerHTML = `
  <div class="cards3">
    <div class="card"><b>${num(totalVol)}</b><i>كغم إجمالي</i><small>${funCompare(totalVol)}</small></div>
    <div class="card"><b>${done.reduce((a, s) => a + sessionSets(s), 0)}</b><i>مجموعة</i></div>
    <div class="card"><b>${Object.keys(S.prs).length}</b><i>رقم قياسي</i></div>
  </div>

  <h2 class="h">توازن العضلات (آخر ٧ أيام)</h2>
  <div class="mbars">
    ${Object.entries(mv).map(([k, x]) => `
      <div class="mrow">
        <div class="mlbl">${MUSCLES[k].icon} ${MUSCLES[k].ar}</div>
        <div class="mtrack"><i style="width:${Math.round(x.vol / maxV * 100)}%;background:${MUSCLES[k].color}"></i></div>
        <div class="mval ${x.last !== null && x.last >= 8 ? 'bad' : ''}">${x.sets} مج</div>
      </div>`).join('')}
  </div>
  <p class="muted sm">"مج" = عدد المجموعات. الهدف الصحي: ١٠–٢٠ مجموعة لكل عضلة بالأسبوع.</p>

  <h2 class="h">تطوّر التمارين</h2>
  <select class="sel" onchange="viewProgress.sel=this.value;render()">
    ${exIds.map(id => `<option value="${id}" ${id === sel ? 'selected' : ''}>${esc(exOf(id).ar)}</option>`).join('')}
  </select>
  ${exChart(sel)}

  <h2 class="h">🏆 أرقامك القياسية</h2>
  <div class="prlist">
    ${Object.entries(S.prs).sort((a, b) => b[1].e1rm - a[1].e1rm).map(([id, p]) => `
      <div class="pr"><span>${esc(exOf(id).ar)}</span><b>${num(p.w)} كغم</b><small>قوة تقديرية ${num(p.e1rm)} · ${p.date ? fmtDate(p.date) : ''}</small></div>`).join('') || '<p class="muted">لا يوجد بعد.</p>'}
  </div>`;
}

function exChart(id) {
  const pts = [];
  for (const s of allDone()) {
    const it = s.entries.find(e => e.ex === id); if (!it) continue;
    const done = it.sets.filter(x => x.done); if (!done.length) continue;
    const mw = Math.max(...done.map(x => x.w));
    const vol = done.reduce((a, x) => a + (x.w || 0) * (x.r || 0), 0);
    const best = done.reduce((a, b) => e1rm(b.w, b.r) > e1rm(a.w, a.r) ? b : a);
    pts.push({ date: s.date, w: mw, vol, e: e1rm(best.w, best.r) });
  }
  if (pts.length < 1) return '<p class="muted">لا يوجد بيانات.</p>';
  const last = pts[pts.length - 1], first = pts[0];
  const diff = last.w - first.w;
  return `
  <div class="chartbox">
    ${line(pts.map(p => p.w), 'أقصى وزن (كغم)', '#22c55e')}
    ${line(pts.map(p => p.vol), 'حجم التدريب (كغم)', '#3b82f6')}
    <div class="chstats">
      <div><b>${num(last.w)}</b><i>آخر وزن</i></div>
      <div><b>${num(last.e)}</b><i>أقصى قوة تقديرية (1RM)</i></div>
      <div class="${diff > 0 ? 'up' : diff < 0 ? 'down' : ''}"><b>${diff > 0 ? '+' : ''}${num(diff)}</b><i>منذ البداية</i></div>
    </div>
  </div>`;
}
function line(vals, label, color) {
  if (!vals.length) return '';
  const W = 320, H = 110, P = 22;
  const mn = Math.min(...vals), mx = Math.max(...vals), rg = (mx - mn) || 1;
  const x = i => vals.length === 1 ? W / 2 : P + i * (W - P * 2) / (vals.length - 1);
  const y = v => H - P - ((v - mn) / rg) * (H - P * 2);
  const d = vals.map((v, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(' ');
  const area = `${d} L${x(vals.length - 1).toFixed(1)},${H - P} L${x(0).toFixed(1)},${H - P} Z`;
  return `<div class="chart"><div class="clbl">${label}</div>
   <svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="none">
     <path d="${area}" fill="${color}" opacity=".14"/>
     <path d="${d}" fill="none" stroke="${color}" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>
     ${vals.map((v, i) => `<circle cx="${x(i).toFixed(1)}" cy="${y(v).toFixed(1)}" r="3.2" fill="${color}"/>`).join('')}
   </svg>
   <div class="crange"><span>${num(mn)}</span><span>${num(mx)}</span></div></div>`;
}

/* ================= تبويب السجل ================= */
let calM = new Date().getMonth(), calY = new Date().getFullYear();
function viewHistory(v) {
  const st = streak();
  const dates = new Set(allDone().map(s => s.date));
  const dayColor = {}; for (const s of allDone()) dayColor[s.date] = (S.program[s.day] || {}).color || '#64748b';
  const first = new Date(calY, calM, 1), start = first.getDay(), n = new Date(calY, calM + 1, 0).getDate();
  let cells = '';
  for (let i = 0; i < start; i++) cells += '<div></div>';
  for (let d = 1; d <= n; d++) {
    const k = `${calY}-${pad(calM + 1)}-${pad(d)}`;
    const isT = k === todayKey();
    cells += `<div class="cday ${dates.has(k) ? 'has' : ''} ${isT ? 'today' : ''}" ${dates.has(k) ? `style="--dc:${dayColor[k]}" onclick="showSession('${k}')"` : ''}>${d}</div>`;
  }
  const monthCount = allDone().filter(s => s.date.startsWith(`${calY}-${pad(calM + 1)}`)).length;

  v.innerHTML = `
  <div class="cards3">
    <div class="card"><b>${st.n}${st.n >= 3 ? '🔥' : ''}</b><i>سلسلة الالتزام</i></div>
    <div class="card"><b>${monthCount}</b><i>تمارين هذا الشهر</i></div>
    <div class="card"><b>${st.gap === null ? '—' : st.gap}</b><i>يوم من آخر تمرين</i></div>
  </div>

  <div class="calhead">
    <button class="mini" onclick="calMove(-1)">◀</button>
    <b>${AR_MONTHS[calM]} ${calY}</b>
    <button class="mini" onclick="calMove(1)">▶</button>
  </div>
  <div class="calnames">${['أحد', 'إثن', 'ثلا', 'أرب', 'خمي', 'جمع', 'سبت'].map(d => `<span>${d}</span>`).join('')}</div>
  <div class="cal">${cells}</div>

  <h2 class="h">التمارين السابقة</h2>
  <div class="hlist">
    ${allDone().slice().reverse().slice(0, 30).map(s => {
      const d = S.program[s.day] || { name: 'تمرين حر', icon: '➕', color: '#64748b' };
      return `<button class="hitem" style="--c:${d.color}" onclick="showSession('${s.date}',${s.id})">
        <span class="hic">${d.icon}</span>
        <span class="hmain"><b>${d.name}</b><i>${fmtDate(s.date)}</i></span>
        <span class="hstat">${sessionSets(s)} مج<br><small>${num(sessionVolume(s))} كغم</small></span></button>`;
    }).join('') || '<p class="muted">لا يوجد تمارين محفوظة.</p>'}
  </div>

  <h2 class="h">النسخ الاحتياطي</h2>
  <p class="muted sm">بياناتك محفوظة داخل متصفح جهازك فقط. احفظ نسخة كل فترة حتى لا تفقدها.</p>
  <div class="actrow">
    <button class="btn ghost" onclick="exportData()">⬇️ حفظ نسخة</button>
    <button class="btn ghost" onclick="$('#importFile').click()">⬆️ استرجاع نسخة</button>
  </div>
  <input type="file" id="importFile" accept="application/json" style="display:none" onchange="importData(this)">`;
}
function calMove(d) { calM += d; if (calM < 0) { calM = 11; calY--; } if (calM > 11) { calM = 0; calY++; } render(); }
function showSession(date, id) {
  const s = id ? allDone().find(x => x.id === id) : allDone().filter(x => x.date === date).pop();
  if (!s) return;
  const d = S.program[s.day] || { name: 'تمرين حر', icon: '➕' };
  modal(`<h3>${d.icon} ${d.name}</h3><p class="muted sm">${fmtDate(s.date)} · ${Math.round((s.end - s.start) / 60000)} دقيقة · ${num(sessionVolume(s))} كغم</p>
   <div class="deta">${s.entries.map(e => {
      const ex = exOf(e.ex), sec = ex.unit === 'sec';
      return `<div class="detrow"><b>${esc(ex.ar)}</b><span>${e.sets.map(x => sec ? `${x.r}ث` : (ex.bw && !ex.inc ? `${x.r}` : `${num(x.w)}×${x.r}`)).join(' · ')}</span></div>`;
    }).join('')}</div>
   <button class="btn ghost wide danger" onclick="delSession(${s.id})">حذف هذا التمرين</button>
   <button class="btn wide" onclick="closeModal()">إغلاق</button>`);
}
function delSession(id) {
  if (!confirm('حذف هذا التمرين نهائياً؟')) return;
  S.sessions = S.sessions.filter(s => s.id !== id); save(); closeModal(); render();
}
function exportData() {
  const blob = new Blob([JSON.stringify(S, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob); a.download = `نسخة-تماريني-${todayKey()}.json`; a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 4000);
  toast('تم حفظ النسخة ✅');
}
function importData(inp) {
  const f = inp.files[0]; if (!f) return;
  const r = new FileReader();
  r.onload = () => {
    try {
      const d = JSON.parse(r.result);
      if (!d.sessions) throw 0;
      if (!confirm('سيتم استبدال كل بياناتك الحالية بهذه النسخة. متأكد؟')) return;
      S = Object.assign(structuredClone(DEFAULTS), d);
      save(); render(); toast('تم الاسترجاع ✅');
    } catch (e) { toast('❌ الملف غير صالح'); }
  };
  r.readAsText(f); inp.value = '';
}

/* ================= تبويب جسمي ================= */
const BODY_FIELDS = [
  { k: 'weight', ar: 'الوزن', u: 'كغم' }, { k: 'waist', ar: 'الخصر', u: 'سم' },
  { k: 'chest', ar: 'الصدر', u: 'سم' }, { k: 'arm', ar: 'الذراع', u: 'سم' },
  { k: 'thigh', ar: 'الفخذ', u: 'سم' }, { k: 'neck', ar: 'الرقبة', u: 'سم' },
];
function viewBody(v) {
  const b = S.body.slice().sort((a, x) => a.date < x.date ? -1 : 1);
  const last = b[b.length - 1] || {};
  const wvals = b.filter(x => x.weight).map(x => x.weight);
  const diff = wvals.length > 1 ? wvals[wvals.length - 1] - wvals[0] : 0;

  v.innerHTML = `
  <h2 class="h">قياسات اليوم</h2>
  <div class="bodygrid">
    ${BODY_FIELDS.map(f => `<label class="bfield"><span>${f.ar} <i>${f.u}</i></span>
      <input type="number" inputmode="decimal" step="0.1" id="bf_${f.k}" value="${last[f.k] ?? ''}" placeholder="—"></label>`).join('')}
  </div>
  <button class="btn wide" onclick="saveBody()">💾 حفظ قياسات اليوم</button>

  ${wvals.length ? `<h2 class="h">تطوّر الوزن</h2>
  <div class="chartbox">${line(wvals, 'الوزن (كغم)', '#f59e0b')}
    <div class="chstats"><div><b>${num(wvals[wvals.length - 1])}</b><i>الآن</i></div>
    <div class="${diff > 0 ? 'up' : diff < 0 ? 'down' : ''}"><b>${diff > 0 ? '+' : ''}${num(diff)}</b><i>التغيّر</i></div>
    <div><b>${b.length}</b><i>قياس</i></div></div></div>` : ''}

  <h2 class="h">📸 صور التقدم</h2>
  <p class="muted sm">الصور محفوظة على جهازك فقط ولا تُرفع لأي مكان.</p>
  <button class="btn ghost wide" onclick="$('#photoIn').click()">➕ أضف صورة اليوم</button>
  <input type="file" id="photoIn" accept="image/*" capture="environment" style="display:none" onchange="addPhoto(this)">
  <div class="photos" id="photos">جارِ التحميل...</div>

  <h2 class="h">⚙️ الإعدادات</h2>
  <div class="setlist">
    <label class="srowi"><span>مدة الراحة (ثانية)</span><input type="number" value="${S.settings.rest}" onchange="S.settings.rest=+this.value||90;save()"></label>
    <label class="srowi"><span>راحة السوبرست (ثانية)</span><input type="number" value="${S.settings.restSS}" onchange="S.settings.restSS=+this.value||30;save()"></label>
    <label class="srowi"><span>صوت التنبيه</span><input type="checkbox" ${S.settings.sound ? 'checked' : ''} onchange="S.settings.sound=this.checked;save()"></label>
    <label class="srowi"><span>الاهتزاز</span><input type="checkbox" ${S.settings.vibrate ? 'checked' : ''} onchange="S.settings.vibrate=this.checked;save()"></label>
    <label class="srowi"><span>إبقاء الشاشة مضاءة أثناء التمرين</span><input type="checkbox" ${S.settings.wake ? 'checked' : ''} onchange="S.settings.wake=this.checked;save()"></label>
    <label class="srowi"><span>الوضع الفاتح</span><input type="checkbox" ${S.settings.theme === 'light' ? 'checked' : ''} onchange="S.settings.theme=this.checked?'light':'dark';save();applyTheme()"></label>
  </div>
  <button class="btn ghost wide danger" onclick="resetAll()">🗑️ مسح كل البيانات</button>`;
  renderPhotos();
}
function saveBody() {
  const rec = { date: todayKey() };
  let any = false;
  for (const f of BODY_FIELDS) { const val = parseFloat($('#bf_' + f.k).value); if (!isNaN(val)) { rec[f.k] = val; any = true; } }
  if (!any) return toast('اكتب قيمة واحدة على الأقل');
  const i = S.body.findIndex(x => x.date === rec.date);
  if (i >= 0) S.body[i] = rec; else S.body.push(rec);
  addXp(15); save(); render(); toast('تم الحفظ ✅ +15 نقطة');
}
function resetAll() {
  if (!confirm('سيتم حذف كل التمارين والقياسات والصور نهائياً. متأكد؟')) return;
  if (!confirm('تأكيد أخير — لا يمكن التراجع.')) return;
  localStorage.removeItem(KEY); idbClear(); S = structuredClone(DEFAULTS); S.program = structuredClone(PROGRAM);
  save(); render(); toast('تم المسح');
}

/* ---- صور التقدم (IndexedDB) ---- */
let _db = null;
function idb() {
  return _db || (_db = new Promise((res, rej) => {
    const r = indexedDB.open('gymPhotos', 1);
    r.onupgradeneeded = () => r.result.createObjectStore('p', { keyPath: 'id' });
    r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error);
  }));
}
async function idbAll() { const db = await idb(); return new Promise(res => { const q = db.transaction('p').objectStore('p').getAll(); q.onsuccess = () => res(q.result || []); q.onerror = () => res([]); }); }
async function idbPut(o) { const db = await idb(); return new Promise(res => { const t = db.transaction('p', 'readwrite'); t.objectStore('p').put(o); t.oncomplete = res; }); }
async function idbDel(id) { const db = await idb(); return new Promise(res => { const t = db.transaction('p', 'readwrite'); t.objectStore('p').delete(id); t.oncomplete = res; }); }
async function idbClear() { try { const db = await idb(); const t = db.transaction('p', 'readwrite'); t.objectStore('p').clear(); } catch (e) {} }

function shrink(file, max = 800, q = 0.72) {
  return new Promise(res => {
    const img = new Image(), fr = new FileReader();
    fr.onload = () => { img.onload = () => {
      const sc = Math.min(1, max / Math.max(img.width, img.height));
      const c = document.createElement('canvas');
      c.width = Math.round(img.width * sc); c.height = Math.round(img.height * sc);
      c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
      res(c.toDataURL('image/jpeg', q));
    }; img.src = fr.result; };
    fr.readAsDataURL(file);
  });
}
async function addPhoto(inp) {
  const f = inp.files[0]; if (!f) return; inp.value = '';
  toast('جارِ المعالجة...');
  const data = await shrink(f);
  await idbPut({ id: Date.now(), date: todayKey(), data });
  addXp(20); renderPhotos(); toast('تمت إضافة الصورة ✅');
}
async function renderPhotos() {
  const el = $('#photos'); if (!el) return;
  const list = (await idbAll()).sort((a, b) => b.id - a.id);
  el.innerHTML = list.length ? list.map(p => `<figure class="ph"><img src="${p.data}" onclick="bigPhoto(${p.id})"><figcaption>${fmtDate(p.date)}<button onclick="rmPhoto(${p.id})">✕</button></figcaption></figure>`).join('')
    : '<p class="muted">لا يوجد صور بعد. صوّر نفسك اليوم وبعد شهر شوف الفرق.</p>';
  el._list = list;
}
async function rmPhoto(id) { if (!confirm('حذف الصورة؟')) return; await idbDel(id); renderPhotos(); }
async function bigPhoto(id) {
  const list = await idbAll(); const p = list.find(x => x.id === id); if (!p) return;
  const others = list.filter(x => x.id !== id).sort((a, b) => a.id - b.id);
  modal(`<h3>${fmtDate(p.date)}</h3><img class="bigimg" src="${p.data}">
   ${others.length ? `<p class="muted sm">قارن مع:</p><div class="cmpstrip">${others.map(o => `<img src="${o.data}" onclick="cmp(${p.id},${o.id})" title="${fmtDate(o.date)}">`).join('')}</div>` : ''}
   <button class="btn wide" onclick="closeModal()">إغلاق</button>`);
}
async function cmp(a, b) {
  const list = await idbAll(); const A = list.find(x => x.id === a), B = list.find(x => x.id === b);
  modal(`<h3>مقارنة</h3><div class="cmp2">
    <figure><img src="${B.data}"><figcaption>${fmtDate(B.date)}</figcaption></figure>
    <figure><img src="${A.data}"><figcaption>${fmtDate(A.date)}</figcaption></figure>
   </div><button class="btn wide" onclick="closeModal()">إغلاق</button>`);
}

/* ================= تبويب المدرب (Gemini مجاني) ================= */
function viewCoach(v) {
  if (!S.settings.geminiKey) {
    v.innerHTML = `
    <div class="setup">
      <h2>🤖 مدرّبك الشخصي</h2>
      <p>اربط مفتاح Google Gemini <b>المجاني</b> وبيصير عندك مدرب يعرف جدولك وأرقامك، يحلل تقدمك، يقترح بدائل للتمارين، ويتعرّف على أي جهاز بالنادي من صورة.</p>
      <ol class="steps">
        <li>افتح <b>aistudio.google.com/apikey</b> من متصفح جوالك.</li>
        <li>سجّل دخول بحساب Google العادي.</li>
        <li>اضغط <b>Create API key</b> ثم انسخ المفتاح.</li>
        <li>الصقه بالمربع تحت. مجاني بالكامل ولا يحتاج بطاقة.</li>
      </ol>
      <input class="search" id="gk" placeholder="الصق المفتاح هنا (AIza...)">
      <button class="btn wide" onclick="saveKey()">حفظ وتفعيل المدرب</button>
      <p class="muted sm">المفتاح يُحفظ على جهازك فقط.</p>
    </div>`;
    return;
  }
  v.innerHTML = `
  <div class="quick">
    <button class="qb" onclick="ask('حلّل تقدمي في آخر تمارين وقلّي على نقاط ضعفي وشو أعدّل')">📊 حلّل تقدمي</button>
    <button class="qb" onclick="ask('اعطني نصيحة اليوم للتغذية والتمرين، مختصرة وعملية')">🥗 نصيحة اليوم</button>
    <button class="qb" onclick="askAlt()">🔄 بديل لتمرين</button>
    <button class="qb" onclick="$('#machineIn').click()">📷 صوّر جهاز</button>
  </div>
  <input type="file" id="machineIn" accept="image/*" capture="environment" style="display:none" onchange="identifyMachine(this)">
  <div class="chat" id="chat">
    ${S.chat.length ? S.chat.map(m => `<div class="msg ${m.role}">${m.role === 'user' ? esc(m.text) : mdLite(m.text)}</div>`).join('')
      : '<div class="msg model">أهلاً 👋 أنا مدربك. أعرف جدولك وأرقامك — اسألني عن أي تمرين، أو خلّيني أحلّل تقدمك.</div>'}
  </div>
  <div class="askbar">
    <button class="mic" onclick="voiceAsk()">🎤</button>
    <input id="q" placeholder="اسأل مدربك..." onkeydown="if(event.key==='Enter')ask(this.value)">
    <button class="send" onclick="ask($('#q').value)">➤</button>
  </div>
  <button class="btn ghost wide" onclick="S.chat=[];save();render()">مسح المحادثة</button>`;
  const c = $('#chat'); if (c) c.scrollTop = c.scrollHeight;
}
function saveKey() {
  const k = $('#gk').value.trim();
  if (k.length < 20) return toast('المفتاح يبدو غير صحيح');
  S.settings.geminiKey = k; save(); render(); toast('تم التفعيل ✅');
}
function mdLite(t) {
  return esc(t).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').replace(/^\s*[-*]\s+(.*)$/gm, '• $1').replace(/\n/g, '<br>');
}
function contextText() {
  const done = allDone().slice(-4);
  const lines = done.map(s => {
    const d = S.program[s.day] || { name: 'حر' };
    return `${s.date} (${d.name}): ` + s.entries.map(e => `${exOf(e.ex).ar} ${e.sets.map(x => `${x.w}×${x.r}`).join(',')}`).join(' | ');
  });
  const prs = Object.entries(S.prs).map(([id, p]) => `${exOf(id).ar}: ${num(p.w)}كغم`).join('، ');
  const b = S.body[S.body.length - 1];
  return `برنامج المتدرّب (٤ أيام):\n${Object.values(S.program).map(d => `- ${d.name}: ${d.items.map(i => exOf(i.ex).ar).join('، ')}`).join('\n')}\n\nآخر تمارين:\n${lines.join('\n') || 'لا يوجد'}\n\nأرقام قياسية: ${prs || 'لا يوجد'}\nالوزن الحالي: ${b && b.weight ? b.weight + ' كغم' : 'غير مسجّل'}\nالمستوى: ${levelOf(S.xp)}`;
}
const SYS = 'أنت مدرب لياقة وكمال أجسام محترف. أجب بالعربية العامية الأردنية البسيطة، مختصر ومباشر وعملي. استخدم أرقام المتدرّب الحقيقية المعطاة لك. لا تعطِ نصائح طبية أو أدوية أو منشطات، وإذا سئلت عن إصابة انصح بمراجعة مختص. اجعل الرد أقل من ١٨٠ كلمة إلا إذا طُلب تفصيل.';

async function gemini(parts) {
  const key = S.settings.geminiKey;
  const models = ['gemini-2.5-flash', 'gemini-2.0-flash'];
  let lastErr = '';
  for (const m of models) {
    try {
      const r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${m}:generateContent?key=${encodeURIComponent(key)}`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: [{ role: 'user', parts }], systemInstruction: { parts: [{ text: SYS }] }, generationConfig: { temperature: 0.7, maxOutputTokens: 800 } }),
      });
      const j = await r.json();
      if (j.error) { lastErr = j.error.message || 'خطأ'; continue; }
      const t = j.candidates?.[0]?.content?.parts?.map(p => p.text).filter(Boolean).join('') || '';
      if (t) return t;
      lastErr = 'رد فارغ';
    } catch (e) { lastErr = e.message; }
  }
  throw new Error(lastErr || 'تعذّر الاتصال');
}
function pushMsg(role, text) { S.chat.push({ role, text }); if (S.chat.length > 40) S.chat.shift(); save(); }
async function ask(q) {
  q = (q || '').trim(); if (!q) return;
  const inp = $('#q'); if (inp) inp.value = '';
  pushMsg('user', q); render();
  const c = $('#chat'); c.insertAdjacentHTML('beforeend', '<div class="msg model" id="typing">... يفكّر</div>'); c.scrollTop = c.scrollHeight;
  try {
    const t = await gemini([{ text: `${contextText()}\n\nسؤال المتدرّب: ${q}` }]);
    pushMsg('model', t);
  } catch (e) { pushMsg('model', '❌ ما قدرت أتصل: ' + e.message + '\nتأكد من الإنترنت أو المفتاح.'); }
  render();
}
function askAlt() {
  const ids = [...new Set(Object.values(S.program).flatMap(d => d.items.map(i => i.ex)))];
  modal(`<h3>بديل لأي تمرين؟</h3><div class="picklist">${ids.map(id => `<button class="pitem" onclick="closeModal();ask('اعطني ٣ بدائل لتمرين ${esc(exOf(id).ar)} بنفس العضلة، واشرح أي واحد أفضل ولماذا')">${esc(exOf(id).ar)}</button>`).join('')}</div>`);
}
async function identifyMachine(inp) {
  const f = inp.files[0]; if (!f) return; inp.value = '';
  go('coach');
  const data = await shrink(f, 900, 0.7);
  pushMsg('user', '📷 [صورة جهاز من النادي]'); render();
  const c = $('#chat'); c.insertAdjacentHTML('beforeend', '<div class="msg model" id="typing">... يحلل الصورة</div>'); c.scrollTop = c.scrollHeight;
  try {
    const t = await gemini([
      { inline_data: { mime_type: 'image/jpeg', data: data.split(',')[1] } },
      { text: 'شو اسم هذا الجهاز؟ أي عضلة يستهدف؟ كيف أستخدمه صح خطوة بخطوة؟ وشو أشهر ٣ أخطاء فيه؟ رد مختصر بنقاط.' },
    ]);
    pushMsg('model', t);
  } catch (e) { pushMsg('model', '❌ ' + e.message); }
  render();
}

/* ================= التسجيل الصوتي ================= */
function speech(onResult) {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) { toast('متصفحك لا يدعم التسجيل الصوتي — جرّب Chrome'); return null; }
  const r = new SR(); r.lang = 'ar-SA'; r.interimResults = false; r.maxAlternatives = 1;
  r.onresult = e => onResult(e.results[0][0].transcript);
  r.onerror = e => toast('تعذّر التسجيل: ' + e.error);
  r.start(); toast('🎤 تكلّم الآن...');
  return r;
}
function voiceAsk() { speech(t => { $('#q').value = t; ask(t); }); }

const AR_NUM = { 'واحد': 1, 'اثنين': 2, 'اثنان': 2, 'ثنين': 2, 'ثلاثة': 3, 'ثلاث': 3, 'أربعة': 4, 'اربعة': 4, 'خمسة': 5, 'خمس': 5, 'ستة': 6, 'ست': 6, 'سبعة': 7, 'سبع': 7, 'ثمانية': 8, 'ثمان': 8, 'تسعة': 9, 'تسع': 9, 'عشرة': 10, 'عشر': 10, 'اثناشر': 12, 'اثنعش': 12, 'عشرين': 20, 'ثلاثين': 30, 'أربعين': 40, 'اربعين': 40, 'خمسين': 50, 'ستين': 60, 'سبعين': 70, 'ثمانين': 80, 'تسعين': 90, 'مية': 100, 'مئة': 100 };
function parseVoice(t) {
  const norm = t.replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d));
  let nums = (norm.match(/\d+(\.\d+)?/g) || []).map(Number);
  if (nums.length < 2) { for (const w of norm.split(/\s+/)) if (AR_NUM[w] !== undefined) nums.push(AR_NUM[w]); }
  const words = norm.replace(/\d+(\.\d+)?/g, ' ').toLowerCase();
  let best = null, bestScore = 0;
  for (const [id, e] of Object.entries(EX)) {
    const toks = e.ar.split(/\s+/).filter(x => x.length > 2);
    let sc = 0; for (const tk of toks) if (words.includes(tk)) sc++;
    if (e.en) for (const tk of e.en.toLowerCase().split(/\s+/)) if (tk.length > 3 && words.includes(tk)) sc++;
    if (sc > bestScore) { bestScore = sc; best = id; }
  }
  return { ex: best, w: nums[0], r: nums[1] };
}
function voiceLog() {
  speech(t => {
    const p = parseVoice(t);
    if (!p.ex || p.w === undefined || p.r === undefined) return toast(`ما فهمت: "${t}" — جرّب: بنش برس ٨٠ ثمانية`);
    let ix = S.active.entries.findIndex(e => e.ex === p.ex);
    if (ix < 0) { S.active.entries.push({ ex: p.ex, ss: null, note: '', flag: '', sets: [] }); ix = S.active.entries.length - 1; }
    const it = S.active.entries[ix];
    let si = it.sets.findIndex(s => !s.done);
    if (si < 0) { it.sets.push({ w: p.w, r: p.r, done: false }); si = it.sets.length - 1; }
    it.sets[si].w = p.w; it.sets[si].r = p.r;
    S.active.open = ix; save();
    toggleSet(ix, si);
    toast(`✅ ${exOf(p.ex).ar} — ${p.w} × ${p.r}`);
  });
}

/* ================= نوافذ / تأثيرات ================= */
function modal(html) { $('#modal').innerHTML = `<div class="mbox">${html}</div>`; $('#modal').classList.add('show'); }
function closeModal() { $('#modal').classList.remove('show'); $('#modal').innerHTML = ''; }
function confetti() {
  const box = document.createElement('div'); box.className = 'conf';
  const cols = ['#22c55e', '#f59e0b', '#ef4444', '#3b82f6', '#a855f7'];
  for (let i = 0; i < 40; i++) {
    const s = document.createElement('i');
    s.style.cssText = `left:${Math.random() * 100}%;background:${cols[i % cols.length]};animation-delay:${Math.random() * .4}s;transform:rotate(${Math.random() * 360}deg)`;
    box.appendChild(s);
  }
  document.body.appendChild(box); setTimeout(() => box.remove(), 2600);
}
function applyTheme() { document.documentElement.dataset.theme = S.settings.theme; }

/* ---- إبقاء الشاشة مضاءة ---- */
let wl = null;
async function wakeOn() { if (!S.settings.wake || !navigator.wakeLock) return; try { wl = await navigator.wakeLock.request('screen'); } catch (e) {} }
function wakeOff() { try { wl && wl.release(); } catch (e) {} wl = null; }
document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible' && S.active) wakeOn(); });

/* ================= الإقلاع ================= */
applyTheme();
render();
if (S.active) { wakeOn(); }
if (!S.seen.welcome) {
  S.seen.welcome = true; save();
  setTimeout(() => modal(`<h3>💪 أهلاً فيك</h3>
    <p>جدولك الأربعة أيام محمّل جاهز بالأوزان اللي أعطيتني ياها.</p>
    <ul class="steps">
      <li>اختر يوم التمرين واضغط عليه.</li>
      <li>سجّل كل مجموعة بزر ✓ — مؤقت الراحة يشتغل لحاله.</li>
      <li>التطبيق بيحفظ أرقامك وبيقترح عليك متى تزيد الوزن.</li>
    </ul>
    <button class="btn wide" onclick="closeModal()">يلا نبدأ</button>`), 600);
}
if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
  navigator.serviceWorker.register('sw.js').catch(() => {});
}
window.addEventListener('beforeunload', e => { if (S.active) { e.preventDefault(); e.returnValue = ''; } });
