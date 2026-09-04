/* ===== التمارين: الاسم بالعربي، والاسم الإنجليزي كما كتبته أنت في جدولك ===== */
const EX = {
  // bar: true = تمرين بالبار، فتظهر له حاسبة توزيع الأوزان
  incline_bar_press: { ar: 'ضغط بار مائل', en: 'Incline bar press', inc: 2.5, bar: true },
  cable_press:       { ar: 'ضغط كيبل', en: 'Cable press', inc: 2.5 },
  cable_fly:         { ar: 'تفتيح كيبل', en: 'Cable fly', inc: 2.5 },
  decline_bar_press: { ar: 'ضغط بار منحدر', en: 'Decline bar press', inc: 2.5, bar: true },
  dips:              { ar: 'متوازي', en: 'Dips', inc: 2.5 },
  flat_db_press:     { ar: 'ضغط دمبل مستوي', en: 'Flat db press', inc: 2 },
  dip_machine:       { ar: 'جهاز الديبس', en: 'Dip machine', inc: 2.5 },
  reverse_pushdown:  { ar: 'سحب كيبل بقبضة معكوسة', en: 'Reverse grip pushdown', inc: 1 },
  cable_one_arm_ext: { ar: 'سحب كيبل بذراع واحدة', en: 'Cable one arm extension', inc: 1 },

  // تمارين قديمة — باقية هنا فقط لتظهر بأسمائها في السجل
  db_row_one_arm:       { ar: 'تجديف دمبل بذراع واحدة', en: 'One arm db row', inc: 2 },
  straight_arm_pulldown:{ ar: 'سحب بذراع مستقيمة', en: 'Straight arm pulldown', inc: 2.5 },
  rear_delt_fly_db:     { ar: 'رفرفة خلفية بالدمبل', en: 'Rear delt fly (traps)', inc: 1 },
  row_hammer_high:   { ar: 'تجديف هامر قبضة عالية', en: 'Row hammer strength high grip', inc: 2.5 },
  high_row_cable:    { ar: 'تجديف كيبل عالي', en: 'High row cable', inc: 2.5 },
  reverse_fly:       { ar: 'تفتيح خلفي', en: 'Reverse fly (traps)', inc: 1 },
  close_grip_bench:  { ar: 'ضغط بار قبضة ضيقة', en: 'Close-grip bench press', inc: 2.5 },
  skull_crusher:     { ar: 'كسّارة الجمجمة بالبار المتعرّج', en: 'EZ-bar skull crusher', inc: 2.5 },
  rope_overhead:     { ar: 'تمديد حبل فوق الرأس', en: 'Rope overhead extension', inc: 2.5 },
  single_arm_oh_ext: { ar: 'تمديد ترايسبس بذراع واحدة', en: 'Single arm over head', inc: 1 },
  rope_pushdown:     { ar: 'سحب حبل ترايسبس', en: 'Rope push down', inc: 1 },
  tri_ext_machine:   { ar: 'جهاز الترايسبس', en: 'Tri ext mach', inc: 2.5 },

  lat_pulldown:      { ar: 'سحب أمامي عالي', en: 'Lat pull down', inc: 1 },
  low_row_cable:     { ar: 'تجديف كيبل منخفض', en: 'Low row cable (N)', inc: 1 },
  iso_row_machine:      { ar: 'جهاز التجديف', en: 'Iso row machine', inc: 2.5 },
  tbar_row_machine:     { ar: 'جهاز التي بار', en: 'T-bar row machine', inc: 2.5 },
  shrug_machine:        { ar: 'جهاز هز الأكتاف', en: 'Shrug machine (traps)', inc: 5 },
  hyper_ext:         { ar: 'تمديد أسفل الظهر', en: 'Hyper ext', inc: 2.5 },
  trx_row:           { ar: 'تجديف TRX', en: 'TRX', bw: true },

  lateral_raise:     { ar: 'رفرفة جانبية', en: 'Lateral raises', inc: 1 },
  shoulder_press_ham:{ ar: 'ضغط كتف هامر', en: 'Shoulder press hammer strength', inc: 2.5 },
  upright_row:       { ar: 'تجديف عمودي', en: 'Upright row', inc: 2.5, bar: true },
  shoulder_press_n:  { ar: 'ضغط كتف قبضة محايدة', en: 'Shoulder press (N)', inc: 2 },
  shrugs:            { ar: 'هز الأكتاف', en: 'Shrugs', inc: 2.5, bar: true },
  alt_curl_15:       { ar: 'مرجحة تبادل', en: 'Alt arm curl 1.5', inc: 1 },
  cable_curl:        { ar: 'مرجحة كيبل', en: 'Cable arm curl', inc: 1 },
  hammer_curl:       { ar: 'مرجحة مطرقة', en: 'Hammer', inc: 1 },

  squat:             { ar: 'سكوات', en: 'Squat', inc: 5, bar: true },
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
    ['dip_machine',       [[20,12],[20,10],[20,8]]],
    ['reverse_pushdown',  [[10,12],[10,12],[10,12]]],
    ['cable_one_arm_ext', [[5,15],[5,15],[5,15]]],
  ]},
  d2: { name: 'ظهر', items: [
    ['lat_pulldown',    [[6,12],[6,10],[6,8]]],
    ['low_row_cable',   [[6,10],[6,10],[7,10]]],
    ['iso_row_machine',  [[25,12],[25,10],[25,8]]],
    ['tbar_row_machine', [[20,12],[20,12],[20,12]]],
    ['shrug_machine',    [[30,15],[30,15],[30,15]]],
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

// لون وأيقونة SVG مصمّمة مخصوص لكل يوم تمرين (بدل إيموجي جاهز) — عائلة أيقونات
// متّسقة بلغة بصرية واحدة: بار حديد + الوضعية المميّزة لكل يوم، بنفس سماكة الخط
// المستخدمة بأيقونة الكاميرا بصفحة "اسأل". stroke="currentColor" يعني لونها
// يتبع أي عنصر أب معطى color، فما في حاجة نلوّنها كل مرة يدوياً.
const DAY_ACC = { d1: 'var(--d1)', d2: 'var(--d2)', d3: 'var(--d3)', d4: 'var(--d4)' };
const ICON_S = 'fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"';
const DAY_ICON = {
  // صدر: بار على مقعد ضغط
  d1: `<svg viewBox="0 0 24 24" ${ICON_S}><path d="M3 11h18"/><path d="M5 8v6M3.3 9v4"/><path d="M19 8v6M20.7 9v4"/><path d="M8 17h8"/><path d="M9 17v3M15 17v3"/></svg>`,
  // ظهر: بار عقلة وجسم معلّق
  d2: `<svg viewBox="0 0 24 24" ${ICON_S}><path d="M4 6h16"/><path d="M4 6v2.2M20 6v2.2"/><path d="M9 6.5c-.6 2.3.3 3.8.9 5.2.6 1.5.1 3-1.4 5"/><path d="M15 6.5c.6 2.3-.3 3.8-.9 5.2-.6 1.5-.1 3 1.4 5"/></svg>`,
  // أكتاف: بار مرفوع فوق الرأس بذراعين
  d3: `<svg viewBox="0 0 24 24" ${ICON_S}><path d="M5 7h14"/><path d="M6 5v4M4.3 5.5v3"/><path d="M18 5v4M19.7 5.5v3"/><path d="M7.3 7l4 6.3M16.7 7l-4 6.3"/><path d="M12 13.3v6.5"/></svg>`,
  // أرجل: بار سكوات على وضعية نزول
  d4: `<svg viewBox="0 0 24 24" ${ICON_S}><path d="M6 6h12"/><path d="M7 4v4M5.3 4.5v3"/><path d="M17 4v4M18.7 4.5v3"/><path d="M12 6v4.3"/><path d="M12 10.3c-2 0-3.3 1.5-3.6 4-.2 1.7-.4 3-1.4 5"/><path d="M12 10.3c2 0 3.3 1.5 3.6 4 .2 1.7.4 3 1.4 5"/></svg>`,
};

// أيقونات شريط التنقل السفلي — نفس أسلوب أيقونات الأيام، رسم مخصوص لا إيموجي
const TABS = [
  ['home', `<svg viewBox="0 0 24 24" ${ICON_S}><path d="M6.5 9v6M4.5 10v4"/><path d="M17.5 9v6M19.5 10v4"/><path d="M9 12h6"/></svg>`, 'تمرين'],
  ['food', `<svg viewBox="0 0 24 24" ${ICON_S}><path d="M7 3v6a1.6 1.6 0 1 0 3.2 0V3M8.6 9v12"/><path d="M15.5 3c-1.2.3-2 2-2 4.2 0 1.8.6 3 1.6 3.6V21"/></svg>`, 'الأكل'],
  ['body', `<svg viewBox="0 0 24 24" ${ICON_S}><path d="M12 3v3.2"/><path d="M5 6.2h14"/><path d="M7 6.2l-3 6.3a3 3 0 0 0 6 0l-3-6.3z"/><path d="M17 6.2l-3 6.3a3 3 0 0 0 6 0l-3-6.3z"/><path d="M8.5 21h7"/><path d="M12 6.2V21"/></svg>`, 'قياسات'],
  ['report', `<svg viewBox="0 0 24 24" ${ICON_S}><path d="M4 19V9.5M9.5 19V5M15 19v-6M20 19v-4"/><path d="M4 19h16"/></svg>`, 'تقرير'],
  ['ask', `<svg viewBox="0 0 24 24" ${ICON_S}><path d="M3.5 12c0-4.4 3.8-7.8 8.5-7.8s8.5 3.4 8.5 7.8-3.8 7.8-8.5 7.8c-1.1 0-2.2-.2-3.2-.6L4.5 21l1-4.1C4.2 15.6 3.5 13.9 3.5 12z"/><circle cx="8.7" cy="12" r=".9" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r=".9" fill="currentColor" stroke="none"/><circle cx="15.3" cy="12" r=".9" fill="currentColor" stroke="none"/></svg>`, 'اسأل'],
];

// ثابتان بدل إعدادات: مدة راحة موصى فيها لبرنامج تضخيم عضلي مختلط
// (مركّبة + معزولة) — ٩٠ ثانية الوسط الذهبي اللي بتتفق عليه أغلب المصادر.
// ووزن البار الأولمبي القياسي بأغلب الصالات.
const REST_SEC = 90;
const BAR_KG = 20;

// تعافي العضلات: نافذة تقريبية بالساعات لكل يوم حتى يرجع جاهز — عضلات أصغر
// (أكتاف/باي) بتتعافى أسرع من الكبيرة (ظهر/أرجل)، حسب إرشادات علم التمرين
// العامة لبرامج التضخيم. مبني على وقت انتهاء آخر تمرين فعلي (s.end)، مو تخمين.
const RECOVERY_H = { d1: 60, d2: 72, d3: 48, d4: 84 };
function recoveryInfo(day) {
  const done = S.sessions.filter(s => s.day === day);
  if (!done.length) return null;
  const last = done[done.length - 1];
  const hSince = (Date.now() - last.end) / 36e5;
  const need = RECOVERY_H[day] || 72;
  const pct = Math.min(100, Math.round(hSince / need * 100));
  return { pct, ready: pct >= 100, remainH: Math.max(0, Math.ceil(need - hSince)), lastDate: last.date };
}

/* ===== بيانات آخر بطاقة InBody (٣٠ أغسطس ٢٠٢٦) ===== */
const HEIGHT_CM = 178.5;
const INBODY_CARD = {
  date: '2026-08-30', weight: 82.7, smm: 35.9, bfm: 19.9, pbf: 24.0, bmi: 26.0,
  visceral: 8, bmr: 1727, score: 74, target: 73.9, whr: 0.96,
};
// القياسات الثمانية المطبوعة على البطاقة، من الأقدم للأحدث. البطاقة نفسها لا تعطي
// تاريخاً دقيقاً لكل نقطة (فقط لآخر ٥ قياسات)، فلا نخترع تواريخ لها.
const INBODY_HISTORY = {
  weight: [76.3, 77.3, 72.9, 78.2, 74.6, 77.3, 76.6, 82.7],
  smm:    [33.5, 34.7, 33.2, 35.9, 34.0, 35.1, 35.5, 35.9],
  pbf:    [22.6, 21.1, 20.2, 19.6, 19.6, 20.2, 18.7, 24.0],
};

/* ===== التخزين ===== */
const KEY = 'tamareeni';
let S = Object.assign({ sessions: [], active: null, notes: {}, body: [], diet: null, meals: [] },
                      JSON.parse(localStorage.getItem(KEY) || '{}'));
// الصور تُعرض أثناء الجلسة فقط ولا تُخزَّن (حتى لا تمتلئ ذاكرة المتصفح)
const save = () => localStorage.setItem(KEY, JSON.stringify(S, (k, v) => k === '_img' ? undefined : v));

/* ===== أدوات ===== */
const $ = s => document.querySelector(s);
const pad = n => String(n).padStart(2, '0');
const today = () => { const d = new Date(); return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`; };
const MONTHS = ['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر'];
const fmt = k => { const d = new Date(k + 'T12:00:00'); return `${d.getDate()} ${MONTHS[d.getMonth()]}`; };
const since = k => Math.round((new Date(today() + 'T12:00:00') - new Date(k + 'T12:00:00')) / 864e5);
const ago = k => { const n = since(k); return n === 0 ? 'اليوم' : n === 1 ? 'أمس' : `قبل ${n} يوم`; };

// بداية الأسبوع (الإثنين) للتاريخ المعطى، كسلسلة YYYY-MM-DD
const weekStart = k => {
  const d = new Date(k + 'T12:00:00'); const wd = (d.getDay() + 6) % 7;
  d.setDate(d.getDate() - wd); return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
};
// عدد الأسابيع المتتالية اللي فيها تمرين واحد ع الأقل — نفس تعريف "الالتزام" بتطبيقات مشهورة
// زي Hevy. الأسبوع الحالي ما بيكسر السلسلة لو لسا ما انتهى وما فيه تمرين بعد، بس ما بينحسب لحد ما يصير فيه.
function streakWeeks() {
  if (!S.sessions.length) return 0;
  const weeks = new Set(S.sessions.map(s => weekStart(s.date)));
  let cur = weekStart(today());
  if (!weeks.has(cur)) { const d = new Date(cur + 'T12:00:00'); d.setDate(d.getDate() - 7); cur = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`; }
  let n = 0;
  while (weeks.has(cur)) { n++; const d = new Date(cur + 'T12:00:00'); d.setDate(d.getDate() - 7); cur = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`; }
  return n;
}
const n1 = v => String(Math.round(v * 10) / 10);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;' }[c]));
const ex = id => EX[id] || { ar: id, inc: 2.5 };

function msg(t, kind) {
  const el = $('#msg'); el.textContent = t; el.classList.add('show');
  el.classList.toggle('pr', kind === 'pr');
  clearTimeout(el._h); el._h = setTimeout(() => { el.classList.remove('show'); el.classList.remove('pr'); }, 2200);
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
// وحدة "الرقم القياسي" حسب نوع التمرين — وزن عادي، أو تكرار/ثانية لتمارين وزن الجسم والوقت
const exUnit = id => { const e = ex(id); return e.sec ? 'ث' : e.bw ? 'عدة' : 'كغم'; };

/* ===== حاسبة توزيع أوزان البار ===== */
const PLATES = [20, 15, 10, 5, 2.5, 1.25];
const nP = v => String(Math.round(v * 100) / 100);   // 1.25 تبقى 1.25 مش 1.3
const nK = v => Math.round(v).toLocaleString('en-US');  // فواصل الآلاف
// صيغة الجمع بالعربي: ١ / ٢ / ٣-١٠ / ١١+
const plur = (n, one, two, few, many) => n === 1 ? one : n === 2 ? two : `${n} ${n <= 10 ? few : many}`;
function plateSplit(total, bar) {
  bar = bar || BAR_KG;
  if (!(total > 0)) return { err: 'اكتب الوزن الكلي' };
  if (total < bar) return { err: `أقل من وزن البار نفسه (${nP(bar)} كغم)` };
  if (total === bar) return { bar, side: [], left: 0 };
  let side = (total - bar) / 2;
  const out = [];
  for (const p of PLATES) {
    const n = Math.floor(side / p + 1e-9);
    if (n > 0) { out.push([p, n]); side = Math.round((side - n * p) * 100) / 100; }
  }
  return { bar, side: out, left: side };
}
function plateText(total) {
  const r = plateSplit(total);
  if (r.err) return r.err;
  if (!r.side.length) return `البار لحاله (${nP(r.bar)} كغم)`;
  const list = r.side.map(([p, n]) => n > 1 ? `${n}×${nP(p)}` : nP(p)).join(' + ');
  return `بار ${nP(r.bar)} + (${list}) لكل جهة`
       + (r.left > 0.01 ? ` — ناقص ${nP(r.left * 2)} كغم، أقرب وزن ${nP(total - r.left * 2)}` : '');
}
// ألوان الأقراص القياسية بالصالات (نفس ترميز الاتحاد الدولي تقريباً) — لكل وزن موجود بـPLATES
const PLATE_COLOR = { 20: '#2563eb', 15: '#eab308', 10: '#16a34a', 5: '#e5e7eb', 2.5: '#18181b', 1.25: '#9ca3af' };
const PLATE_LIGHT = new Set([5, 1.25]);   // أقراص فاتحة تحتاج نص غامق
function plateVisual(total) {
  const r = plateSplit(total);
  if (r.err || !r.side.length) return '';
  const discs = r.side.flatMap(([p, n]) => Array(n).fill(p));
  const maxP = Math.max(...discs);
  return `<div class="platerow">
    ${discs.map(p => `<div class="disc${PLATE_LIGHT.has(p) ? ' light' : ''}"
      style="height:${22 + (p / maxP) * 34}px;background:${PLATE_COLOR[p] || 'var(--mut)'}">${nP(p)}</div>`).join('')}
  </div>`;
}
function plateOut(total) { return plateVisual(total) + `<div class="pout">${esc(plateText(total))}</div>`; }

/* هل أنجز كل التكرارات المستهدفة آخر مرة؟ إذاً حان وقت الزيادة */
function readyToAdd(id, day) {
  const l = last(id); if (!l) return null;
  const item = (PROGRAM[day] || { items: [] }).items.find(x => x[0] === id);
  if (!item) return null;
  const t = item[1];
  const hit = l.sets.length >= t.length && t.every((x, i) => l.sets[i] && l.sets[i].r >= x[1]);
  if (!hit) return null;
  const e = ex(id);
  return e.sec ? 'زِد الوقت' : (e.bw && !e.inc) ? 'زِد التكرار' : 'زِد الوزن';
}

/* ===== حسابات التقرير الأسبوعي ===== */
const inLast = d => S.sessions.filter(s => since(s.date) < d);

// سجل تمرين معيّن عبر الزمن: أقصى "رقم قياسي" وحجم كل جلسة. المقياس نفسه يختلف
// حسب نوع التمرين — وزن للعادي، تكرار/ثواني لتمارين وزن الجسم والوقت (بدون هذا
// التمييز كانت plank/lunges/trx_row وغيرها تُقرأ دايماً وزنها صفر، فتختفي تماماً
// من التقرير والأرقام القياسية رغم إنها فعلاً بتتطوّر).
function exHistory(id) {
  const useReps = ex(id).bw || ex(id).sec;
  const out = [];
  for (const s of S.sessions) {
    const it = s.entries.find(e => e.ex === id);
    if (!it || !it.sets.length) continue;
    out.push({
      t: new Date(s.date + 'T12:00:00').getTime(),
      max: useReps ? Math.max(...it.sets.map(x => x.r || 0)) : Math.max(...it.sets.map(x => x.w || 0)),
      reps: it.sets.reduce((a, x) => a + (x.r || 0), 0),
    });
  }
  return out;
}
function weekStats(d = 7) {
  const ss = inLast(d);
  let sets = 0, kg = 0;
  for (const s of ss) for (const e of s.entries) for (const x of e.sets) {
    sets++; if (!ex(e.ex).sec) kg += (x.w || 0) * (x.r || 0);
  }
  return { days: ss.length, sets, kg };
}
// شو تطوّر وشو واقف مكانه، بمقارنة آخر جلستين لكل تمرين
function changes(d = 7) {
  const up = [], flat = [];
  const ids = [...new Set(inLast(d).flatMap(s => s.entries.map(e => e.ex)))];
  for (const id of ids) {
    const h = exHistory(id); if (h.length < 2) continue;
    const a = h[h.length - 2], b = h[h.length - 1];
    if (b.max > a.max) up.push({ id, from: a.max, to: b.max });
    else if (b.max === a.max && b.reps > a.reps) up.push({ id, from: a.reps, to: b.reps, reps: true });
    else if (b.max === a.max) flat.push({ id, at: b.max });
  }
  return { up, flat };
}
// الرقم المستدير التالي الذي يستحق أن يكون هدفاً
const nextGoal = w => { const s = w < 20 ? 5 : w < 60 ? 10 : 20; return Math.floor(w / s) * s + s; };

// بمعدل تطوّرك الحالي، متى توصل الهدف؟
function projection(id) {
  const h = exHistory(id).filter(x => x.max > 0);
  if (h.length < 3) return null;
  const first = h[0], last = h[h.length - 1];
  const weeks = (last.t - first.t) / (7 * 864e5);
  if (weeks < 1.5 || last.max <= first.max) return null;
  const rate = (last.max - first.max) / weeks;
  const goal = nextGoal(last.max);
  const n = Math.ceil((goal - last.max) / rate);
  if (!isFinite(n) || n < 1 || n > 78) return null;
  return { now: last.max, goal, weeks: n, rate };
}
function allProjections() {
  // الأهداف المستديرة (nextGoal) مبنية على قفزات كيلوغرامية، فما تلائم تمارين
  // وزن الجسم/الوقت — نستثنيها من التوقّعات، مش لأنها ما تتطوّر
  const ids = [...new Set(Object.values(PROGRAM).flatMap(p => p.items.map(i => i[0])))]
    .filter(id => !ex(id).bw && !ex(id).sec);
  return ids.map(id => ({ id, p: projection(id) })).filter(x => x.p)
            .sort((a, b) => a.p.weeks - b.p.weeks).slice(0, 5);
}

/* ملاحظات التمارين — تبقى محفوظة بين التمارين */
let noteOpen = null;
const startNote = id => { noteOpen = id; render(); const i = $('#noteIn'); if (i) { i.focus(); i.setSelectionRange(i.value.length, i.value.length); } };
function saveNote(id, v) {
  v = v.trim();
  if (v) S.notes[id] = v; else delete S.notes[id];
  noteOpen = null; save(); render();
}

/* ===== العرض ===== */
let page = 'home';
// إعادة الرسم تحافظ على موضعك في الصفحة. مرّر true فقط عند الانتقال لشاشة أخرى.
function render(toTop) {
  const y = window.scrollY;
  const OVERLAY = ['ask', 'report', 'body', 'food', 'records'];   // شاشات تُعرض حتى لو في تمرين شغّال
  const active = S.active && !OVERLAY.includes(page) ? 'workout' : page;
  ({ home, workout, log, ask, report, body, food, records }[active])();
  renderTabs(active);
  window.scrollTo(0, toTop ? 0 : y);
}
const go = p => { page = p; render(true); };

// شريط التنقل السفلي — يُبنى مرة وحدة من TABS، ثم كل رسمة بس تبدّل حالة "نشط"
function buildTabbar() {
  const bar = $('#tabbar');
  bar.innerHTML = TABS.map(([p, icon, label]) => {
    const reset = p === 'food' ? 'foodDay=null;' : p === 'ask' ? 'askEx=null;' : '';
    return `<button data-p="${p}" onclick="${reset}go('${p}')"><span class="ti">${icon}</span><span class="tl">${label}</span></button>`;
  }).join('');
}
// مخفي أثناء التمرين فقط (شاشة مركّزة بلا تشتيت)
function renderTabs(active) {
  const bar = $('#tabbar');
  bar.classList.toggle('hide', active === 'workout');
  bar.querySelectorAll('button').forEach(b => b.classList.toggle('on', b.dataset.p === active));
}

function home() {
  const done = S.sessions;
  const lastDay = done.length ? done[done.length - 1].day : null;
  const keys = Object.keys(PROGRAM);
  const next = lastDay ? keys[(keys.indexOf(lastDay) + 1) % keys.length] : keys[0];
  const streak = streakWeeks();

  $('#app').innerHTML = `
  <header>
    <div><h1>🏋️ تماريني</h1>
      ${streak ? `<div class="sub streak">🔥 ${plur(streak, 'أسبوع واحد', 'أسبوعين', 'أسابيع', 'أسبوعاً')} متتالي</div>` : ''}
    </div>
    <div class="hlinks">
      <button class="link" onclick="go('log')">📅 السجل</button>
    </div></header>

  <div class="lbl">اختر تمرين اليوم</div>
  <div class="daylist">
    ${keys.map(k => {
      const l = done.filter(s => s.day === k).pop();
      const r = l && recoveryInfo(k);
      const rTxt = !r ? '' : r.ready ? ' · جاهز'
        : ` · يحتاج ${r.remainH < 24 ? r.remainH + ' سا' : plur(Math.round(r.remainH / 24), 'يوم', 'يومين', 'أيام', 'يوماً')}`;
      const rColor = !r ? '' : r.ready ? 'var(--good)' : 'var(--warn)';
      return `<button class="day" style="--dc:${DAY_ACC[k]}" onclick="start('${k}')">
        <b class="dlbl"><span class="dicon" style="color:${DAY_ACC[k]}">${DAY_ICON[k]}</span>${PROGRAM[k].name}</b>
        <span>${l ? ago(l.date) : k === next ? 'ابدأ من هنا' : '—'}${rTxt ? `<b style="color:${rColor};font-weight:600">${rTxt}</b>` : ''}</span>
      </button>`;
    }).join('')}
  </div>
  `;
}

function start(k) {
  page = 'home'; askEx = null;      // اخرج من أي شاشة أخرى عند بدء تمرين
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
  save(); render(true);
}

function workout() {
  const a = S.active;
  $('#app').innerHTML = `
  <header>
    <div><h1 class="dlbl" style="color:${DAY_ACC[a.day] || 'var(--tx)'}"><span class="dicon">${DAY_ICON[a.day] || ''}</span>${PROGRAM[a.day].name}</h1><div class="sub" id="clock">0:00</div></div>
    <div class="hlinks">
      <button class="link iconbtn" onclick="cancel()" aria-label="رجوع — إلغاء بلا حفظ">
        <svg viewBox="0 0 24 24" ${ICON_S}><path d="M6 6l12 12M18 6L6 18"/></svg>
      </button>
      <button class="link" onclick="finish()">إنهاء</button>
    </div>
  </header>

  ${groupSS(a.entries).map(g =>
    g.ss ? `<div class="ssgroup" style="--dc:${DAY_ACC[a.day]}"><div class="sslabel">${g.idx.length > 1
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
    const up = readyToAdd(it.ex, S.active.day);
    const note = S.notes[it.ex] || '';
    return `<section class="ex">
      <div class="head">
        <img class="thumb" src="img/${it.ex}-0.jpg" alt="" loading="lazy"
             onclick="pic('${it.ex}')" onerror="this.remove()">
        <div>
        <h2 onclick="pic('${it.ex}')">${esc(e.ar)}<span class="en">${esc(e.en || '')}</span></h2>
      <div class="last">${l ? `<em>آخر مرة</em>${l.sets.map(s => setText(it.ex, s)).join('   ')}` : '<em>أول مرة</em>'}${
        up ? `<span class="up">${up}</span>` : ''}</div>
        ${noteOpen === it.ex
          ? `<input id="noteIn" class="noteinput" value="${esc(note)}" placeholder="مثال: المقعد على درجة ٣"
               onblur="saveNote('${it.ex}',this.value)" onkeydown="if(event.key==='Enter')this.blur()">`
          : note ? `<div class="note" onclick="startNote('${it.ex}')">${esc(note)}</div>` : ''}
        </div>
      </div>
      <div class="heads"><span></span><span>${e.bw ? '' : 'وزن'}</span><span>${e.sec ? 'ثانية' : 'تكرار'}</span><span></span><span></span></div>
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
          ${trash(`delSet(${i},${j})`, 'حذف المجموعة')}
        </div>`).join('')}
      ${e.bar ? (barOpen === i ? `
        <div class="plates">
          <div class="prow"><span>الوزن الكلي</span>
            <input type="number" inputmode="decimal" id="barIn" value="${barVal || it.sets.find(s => !s.done)?.w || it.sets[0].w}"
                   oninput="barVal=+this.value; $('#barOut').innerHTML=plateOut(barVal)"></div>
          <div id="barOut">${plateOut(barVal || it.sets.find(s => !s.done)?.w || it.sets[0].w)}</div>
        </div>` : '') : ''}
      <div class="exfoot"><button onclick="addSet(${i})">إضافة مجموعة</button>${
        note || noteOpen === it.ex ? '' : `<button onclick="startNote('${it.ex}')">إضافة ملاحظة</button>`}${
        e.bar ? `<button onclick="toggleBar(${i})">${barOpen === i ? 'إخفاء توزيع الأوزان' : 'توزيع الأوزان'}</button>` : ''}</div>
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
let barOpen = -1, barVal = 0;
function toggleBar(i) {
  if (barOpen === i) { barOpen = -1; }
  else { barOpen = i; const st = S.active.entries[i].sets; barVal = (st.find(s => !s.done) || st[0]).w; }
  render();
}
function delSet(i, j) {
  const st = S.active.entries[i].sets;
  if (st.length === 1) return msg('لازم تضل مجموعة وحدة على الأقل');
  st.splice(j, 1); save(); render();
}
function tick(i, j) {
  const it = S.active.entries[i], s = it.sets[j];
  s.done = !s.done;
  if (s.done) {
    buzz(25);
    // رقم قياسي: أعلى وزن (أو تكرار/ثواني لتمارين وزن الجسم والوقت) من أي جلسة سابقة
    const e = ex(it.ex);
    const cur = (e.bw || e.sec) ? s.r : s.w;
    if (cur > 0) {
      const h = exHistory(it.ex);
      if (h.length && cur > Math.max(...h.map(x => x.max))) msg('🏆 رقم قياسي جديد', 'pr');
    }
    // داخل السوبرست: انتقل للتمرين التالي مباشرة بلا راحة
    const nx = S.active.entries[i + 1];
    const inSS = it.ss != null && nx && nx.ss === it.ss && nx.sets.some(x => !x.done);
    if (!inSS && S.active.entries.some(e => e.sets.some(x => !x.done))) rest(REST_SEC);
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
    <button class="btn quiet askbtn" onclick="closePic();askEx='${id}';go('ask')">اسأل عن هذا التمرين</button>
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
  S.active = null; save(); restSkip(); page = 'home'; render(true);
  msg('💪 تم حفظ التمرين');
}
function cancel() {
  if (!confirm('إلغاء التمرين بدون حفظ؟')) return;
  S.active = null; save(); restSkip(); page = 'home'; render(true);
}

/* ===== السجل ===== */
let openRec = -1;
// أيقونة سلة موحّدة
const trash = (call, label) => `<button class="del" onclick="${call}" aria-label="${label}">
  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.9"
       stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14M10 11v5M14 11v5"/></svg></button>`;

function delRec(idx) {
  const s = S.sessions[idx]; if (!s) return;
  if (!confirm(`حذف تمرين ${PROGRAM[s.day] ? PROGRAM[s.day].name : s.day} بتاريخ ${fmt(s.date)}؟`)) return;
  S.sessions.splice(idx, 1); openRec = -1; save(); render();
}
function delEntry(idx, k) {
  const s = S.sessions[idx]; if (!s || !s.entries[k]) return;
  if (!confirm(`حذف «${ex(s.entries[k].ex).ar}» من هذا التمرين؟`)) return;
  s.entries.splice(k, 1);
  if (!s.entries.length) S.sessions.splice(idx, 1);   // ما ضل فيه شي
  save(); render();
}

// شهر صغير يبيّن انتظامك بنظرة واحدة — نفس فكرة تقويم الالتزام بتطبيقات
// مشهورة، بس بدل نقطة لون واحد بيستخدم لون اليوم نفسه فتعرف أي عضلة تمرّنت
function miniCalendar() {
  const now = new Date();
  const y = now.getFullYear(), m = now.getMonth();
  const startOffset = new Date(y, m, 1).getDay();
  const daysInMonth = new Date(y, m + 1, 0).getDate();
  const byDate = {};
  S.sessions.forEach(s => { if (!byDate[s.date]) byDate[s.date] = s.day; });
  const todayStr = today();
  const WD = ['ح', 'ن', 'ث', 'ر', 'خ', 'ج', 'س'];
  const cells = Array(startOffset).fill(null).concat(
    Array.from({ length: daysInMonth }, (_, i) => {
      const d = i + 1, ds = `${y}-${pad(m + 1)}-${pad(d)}`;
      return { d, ds, day: byDate[ds], isToday: ds === todayStr };
    })
  );
  return `<div class="calbox">
    <div class="calhead">${MONTHS[m]} ${y}</div>
    <div class="calwd">${WD.map(w => `<span>${w}</span>`).join('')}</div>
    <div class="calcells">
      ${cells.map(c => !c ? `<span class="cc empty"></span>`
        : `<span class="cc${c.isToday ? ' today' : ''}" style="${c.day ? `--dc:${DAY_ACC[c.day]}` : ''}">${c.d}${c.day ? '<i></i>' : ''}</span>`
      ).join('')}
    </div>
  </div>`;
}

function log() {
  const list = S.sessions.slice().reverse();
  $('#app').innerHTML = `
  <header><h1>📅 السجل</h1><button class="link" onclick="go('home')">رجوع</button></header>
  ${S.sessions.length ? miniCalendar() : ''}
  ${list.length ? list.map((s, i) => `
    <div class="rec">
      <div class="recrow">
        <button class="recmain" onclick="openRec=${openRec === i ? -1 : i};render()">
          <b class="dlbl"><span class="dicon" style="color:${DAY_ACC[s.day] || 'var(--mut)'}">${DAY_ICON[s.day] || ''}</span>${PROGRAM[s.day] ? PROGRAM[s.day].name : s.day}</b>
          <time>${fmt(s.date)} · ${Math.max(1, Math.round((s.end - s.start) / 60000))} د</time>
        </button>
        ${trash(`delRec(${S.sessions.length - 1 - i})`, 'حذف التمرين')}
      </div>
      ${openRec === i ? `<div class="body">${s.entries.map((e, k) => `
        <div class="row">
          <b>${esc(ex(e.ex).ar)}</b>
          <span>${e.sets.map(x => setText(e.ex, x)).join('  ')}</span>
          ${trash(`delEntry(${S.sessions.length - 1 - i},${k})`, 'حذف هذا التمرين من السجل')}
        </div>`).join('')}
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
      S = Object.assign({ sessions: [], active: null, notes: {}, body: [], diet: null, meals: [] }, d);
      seedInBody();
      save(); render(true); msg('✅ تم الاسترجاع');
    } catch (e) { msg('الملف غير صالح'); }
  };
  r.readAsText(f);
}

/* ===== تقرير الأسبوع ===== */
let repBusy = false;
function report() {
  const w = weekStats(7), prev = weekStats(14);
  const ch = changes(7), pr = allProjections();
  const lastWeekDays = prev.days - w.days;         // عدد تمارين الأسبوع اللي قبله
  const daysDelta = w.days - lastWeekDays;          // الفرق: هالأسبوع مقابل اللي قبله
  const rep = S.report;

  $('#app').innerHTML = `
  <header><h1>📈 تقرير الأسبوع</h1>
    <div class="hlinks">
      <button class="link" onclick="go('records')">🏆 أرقامي</button>
      <button class="link" onclick="go('home')">رجوع</button>
    </div></header>

  ${!S.sessions.length ? '<div class="empty">سجّل أول تمرين وبيبلّش التقرير يشتغل</div>' : `
  <div class="lbl">آخر ٧ أيام</div>
  <div class="rstats" style="grid-template-columns:repeat(2,1fr)">
    <div><b>${w.days}</b><i>${w.days === 1 ? 'تمرين' : w.days <= 10 ? 'تمارين' : 'تمريناً'}</i>${daysDelta ? `<u class="${daysDelta > 0 ? 'pos' : ''}">${daysDelta > 0 ? '+' : ''}${daysDelta} عن الأسبوع اللي قبله</u>` : ''}</div>
    <div><b>${w.sets}</b><i>${w.sets === 1 ? 'مجموعة' : w.sets <= 10 ? 'مجموعات' : 'مجموعة'}</i></div>
  </div>

  ${ch.up.length ? `<div class="lbl">⬆️ تطوّرت</div>
  <div class="rlist">${ch.up.map(c => `<div class="rrow"><span>${esc(ex(c.id).ar)}</span>
    <b class="good">${n1(c.from)} ← ${n1(c.to)} ${c.reps ? 'عدة' : exUnit(c.id)}</b></div>`).join('')}</div>` : ''}

  ${ch.flat.length ? `<div class="lbl">⏸️ واقف مكانه</div>
  <div class="rlist">${ch.flat.map(c => `<div class="rrow"><span>${esc(ex(c.id).ar)}</span>
    <b class="warn">${n1(c.at)} ${exUnit(c.id)}</b></div>`).join('')}</div>` : ''}

  ${pr.length ? `<div class="lbl">🎯 بهالمعدل، رح توصل</div>
  <div class="rlist">${pr.map(x => `<div class="rrow proj">
    <span>${esc(ex(x.id).ar)}</span>
    <b class="acc">${n1(x.p.goal)} كغم</b>
    <u>خلال ${x.p.weeks === 1 ? 'أسبوع' : x.p.weeks === 2 ? 'أسبوعين' : x.p.weeks + ' أسابيع'}
       · الآن ${n1(x.p.now)}</u></div>`).join('')}</div>
  <p class="muted sm">التوقّع مبني على سرعة تطوّرك الفعلية. كل ما داومت، كل ما قرب.</p>`
  : '<p class="muted sm">التوقّعات بتظهر بعد ٣ تمارين على الأقل لنفس التمرين.</p>'}

  <div class="lbl">🧠 تحليل المدرب</div>
  ${rep ? `<div class="aibox">${fmtAi(rep.text)}<div class="raw2">${esc(fmt(rep.date))}</div></div>` : ''}
  <button class="btn ${rep ? 'quiet' : ''}" id="repBtn" onclick="makeReport()" ${repBusy ? 'disabled' : ''}>
    ${repBusy ? 'المدرب عم يقرأ أرقامك...' : rep ? 'حدّث التحليل' : 'اطلب تحليل المدرب'}</button>
  ${!S.key ? '<p class="muted sm">بدّه تفعيل المساعد مرة وحدة من صفحة «اسأل».</p>' : ''}
  `}`;
}

async function makeReport() {
  if (!S.key) { msg('فعّل المساعد أول من صفحة اسأل'); return go('ask'); }
  if (repBusy) return;
  repBusy = true; render();
  try {
    const t = await gemini([{ text: reportPrompt() }], null, { max: 3000 });
    S.report = { date: today(), text: t };
  } catch (e) { msg(arErr(e.message)); }
  repBusy = false; save(); render();
}

function reportPrompt() {
  const w = weekStats(7), p2 = weekStats(14), ch = changes(7);
  const last = S.sessions.slice(-8).map(s =>
    `${s.date} (${PROGRAM[s.day] ? PROGRAM[s.day].name : s.day}): ` +
    s.entries.map(e => `${ex(e.ex).ar} ${e.sets.map(x => x.w + '×' + x.r).join(',')}`).join(' | ')).join('\n');
  const notes = Object.entries(S.notes || {}).map(([k, v]) => `${ex(k).ar}: ${v}`).join(' | ');
  const rec = Object.keys(PROGRAM).map(k => {
    const r = recoveryInfo(k);
    const s = !r ? 'ما جرّبه بعد' : r.ready ? 'جاهز تماماً الآن'
      : `لسا بحاجة ${r.remainH < 24 ? r.remainH + ' ساعة' : plur(Math.round(r.remainH / 24), 'يوم', 'يومين', 'أيام', 'يوماً')} تعافي`;
    return `${PROGRAM[k].name}: ${s}`;
  }).join(' | ');
  return `اكتب تقريراً أسبوعياً قصيراً لهذا المتدرّب بالعربية العامية الأردنية.

أرقام آخر ٧ أيام: ${w.days} تمارين، ${w.sets} مجموعة، ${Math.round(w.kg)} كغم إجمالي.
الأسبوع اللي قبله: ${p2.days - w.days} تمارين، ${Math.round(p2.kg - w.kg)} كغم.
تطوّر فيها: ${ch.up.map(c => `${ex(c.id).ar} ${c.from}→${c.to} ${c.reps ? 'عدة' : exUnit(c.id)}`).join('، ') || 'لا شيء'}
واقفة مكانها: ${ch.flat.map(c => `${ex(c.id).ar} عند ${c.at} ${exUnit(c.id)}`).join('، ') || 'لا شيء'}
ملاحظاته على الأجهزة: ${notes || 'لا يوجد'}
حالة تعافي كل يوم الآن (محسوبة من وقت آخر تمرين فعلي، مو تخمين): ${rec}

تفاصيل آخر التمارين:
${last || 'لا يوجد'}

اكتب بالضبط بهذا الشكل وبدون مقدمات:
سطر أول: تقييم الأسبوع بجملة واحدة صريحة.
ثم "أحسن شي:" وسطر واحد.
ثم "لازم تنتبه:" وسطر أو سطرين على التمارين الواقفة مكانها أو الحجم الناقص.
ثم "الأسبوع الجاي:" وسطرين إجراءات محددة بأرقام (مثلاً: زِد السكوات لـ ٢٥ كغم، أو أضف مجموعة رابعة لتمرين كذا) —
خذ حالة التعافي بعين الاعتبار إذا فيها شيء مفيد (مثلاً يوم لسا متعب فعلاً، اقترح يبلّش بيوم ثاني جاهز أكتر).
لا تتجاوز ١٤٠ كلمة إجمالاً.`;
}

/* ===== أرقامي القياسية ===== */
// أفضل رقم سُجّل لهذا التمرين على الإطلاق (+ التاريخ)، وزن عادة أو تكرار/ثواني
// لتمارين وزن الجسم والوقت
function exBest(id) {
  const useReps = ex(id).bw || ex(id).sec;
  let best = null;
  for (const s of S.sessions) {
    const it = s.entries.find(e => e.ex === id);
    if (!it || !it.sets.length) continue;
    const max = useReps ? Math.max(...it.sets.map(x => x.r || 0)) : Math.max(...it.sets.map(x => x.w || 0));
    if (max <= 0 || (best && max <= best.max)) continue;
    const reps = useReps ? 0 : it.sets.filter(x => x.w === max).reduce((a, x) => a + (x.r || 0), 0);
    best = { date: s.date, max, reps };
  }
  return best;
}
// رسم بياني صغير لتطوّر وزن تمرين معيّن عبر الوقت — نفس أسلوب weightChart تماماً
function exChart(h) {
  const W = 320, H = 70, P = 8;
  const vals = h.map(x => x.max);
  const mn = Math.min(...vals), mx = Math.max(...vals), rg = (mx - mn) || 1;
  const x = i => h.length === 1 ? W / 2 : P + i * (W - P * 2) / (h.length - 1);
  const y = v => H - P - ((v - mn) / rg) * (H - P * 2);
  const d = vals.map((v, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(' ');
  return `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" style="width:100%;height:${H}px;display:block">
    <path d="${d}" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>
    ${vals.map((v, i) => `<circle cx="${x(i).toFixed(1)}" cy="${y(v).toFixed(1)}" r="2.4" fill="currentColor"/>`).join('')}
  </svg>`;
}

// شارات إنجاز بسيطة مبنية على أرقامك الفعلية — بلا أي تعقيد إضافي، بس محطات تستاهل احتفال
const BADGES = [
  { id: 'b1', icon: '🥉', name: 'البداية', need: s => s.sessions.length >= 1 },
  { id: 'b2', icon: '🥈', name: 'مستمر', need: s => s.sessions.length >= 10 },
  { id: 'b3', icon: '🥇', name: 'ملتزم', need: s => s.sessions.length >= 50 },
  { id: 'b4', icon: '💯', name: 'المئة', need: s => s.sessions.length >= 100 },
  { id: 'b5', icon: '🔥', name: 'شهر كامل', need: () => streakWeeks() >= 4 },
  { id: 'b6', icon: '👑', name: 'نص سنة', need: () => streakWeeks() >= 26 },
];

let prOpen = null;   // معرّف التمرين المفتوح حالياً (رسمه البياني ظاهر)
function records() {
  const groups = Object.entries(PROGRAM).map(([k, prog]) => ({
    k, name: prog.name,
    items: prog.items.map(([id]) => ({ id, b: exBest(id) })).filter(x => x.b),
  })).filter(g => g.items.length);

  $('#app').innerHTML = `
  <header><h1>🏆 أرقامي القياسية</h1><button class="link" onclick="go('report')">رجوع</button></header>

  <div class="badges">
    ${BADGES.map(b => {
      const on = b.need(S);
      return `<div class="badge${on ? '' : ' locked'}"><span class="bi">${b.icon}</span><span class="bn">${b.name}</span></div>`;
    }).join('')}
  </div>

  ${!groups.length ? '<div class="empty">سجّل أول تمرين وبتبدأ أرقامك تتجمّع هون</div>' : groups.map(g => `
  <div class="lbl"><span class="dicon" style="color:${DAY_ACC[g.k]};display:inline-flex;vertical-align:-5px">${DAY_ICON[g.k]}</span> ${g.name}</div>
  <div class="rlist">
    ${g.items.map(({ id, b }) => `
      <div class="rrow" style="cursor:pointer" onclick="prOpen=prOpen==='${id}'?null:'${id}';render()">
        <span>${esc(ex(id).ar)}</span>
        <b class="acc">${n1(b.max)} ${exUnit(id)}${b.reps ? ' · ' + b.reps + ' عدة' : ''}</b>
      </div>
      ${prOpen === id ? `<div class="prchart" style="color:${DAY_ACC[g.k]}">
        ${exChart(exHistory(id).filter(x => x.max > 0))}
        <p class="muted sm">أفضل رقم يوم ${fmt(b.date)}</p>
      </div>` : ''}
    `).join('')}
  </div>`).join('')}
  `;
}

/* ===== قياساتي وخطة التغذية ===== */
let dietBusy = false;
const bmiOf = w => Math.round((w / ((HEIGHT_CM / 100) ** 2)) * 10) / 10;
const sortedBody = () => S.body.slice().sort((a, b) => a.date < b.date ? -1 : a.date > b.date ? 1 : 0);

// تُضاف مرة واحدة: بيانات بطاقة الـ InBody الحقيقية
function seedInBody() {
  if (S.body.some(b => b.source === 'inbody' && b.date === INBODY_CARD.date)) return;
  S.body.push({
    date: INBODY_CARD.date, weight: INBODY_CARD.weight, smm: INBODY_CARD.smm,
    pbf: INBODY_CARD.pbf, bmi: INBODY_CARD.bmi, visceral: INBODY_CARD.visceral,
    bmr: INBODY_CARD.bmr, score: INBODY_CARD.score, source: 'inbody',
  });
  save();
}

function delBody(idx) {
  const entry = sortedBody()[idx]; if (!entry) return;
  if (!confirm(`حذف قياس ${fmt(entry.date)} (${n1(entry.weight)} كغم)؟`)) return;
  const real = S.body.indexOf(entry);
  if (real >= 0) S.body.splice(real, 1);
  save(); render();
}

function weightChart(list) {
  const W = 320, H = 92, P = 10;
  const vals = list.map(b => b.weight);
  const mn = Math.min(...vals), mx = Math.max(...vals), rg = (mx - mn) || 1;
  const x = i => list.length === 1 ? W / 2 : P + i * (W - P * 2) / (list.length - 1);
  const y = v => H - P - ((v - mn) / rg) * (H - P * 2);
  const d = vals.map((v, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(' ');
  return `<div class="chartbox">
    <svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" style="width:100%;height:${H}px;display:block">
      <path d="${d}" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>
      ${vals.map((v, i) => `<circle cx="${x(i).toFixed(1)}" cy="${y(v).toFixed(1)}" r="2.6" fill="currentColor"/>`).join('')}
    </svg>
    <div class="chartrange"><span>${n1(mn)}</span><span>${n1(mx)} كغم</span></div>
  </div>`;
}

function body() {
  const list = sortedBody();
  const latest = list[list.length - 1];

  $('#app').innerHTML = `
  <header><h1>⚖️ قياساتي</h1><button class="link" onclick="go('home')">رجوع</button></header>

  ${inbodyBusy ? `<button class="btn" disabled>عم أقرأ البطاقة...</button>` : `
  <div class="photobtns">
    <button class="btn" onclick="$('#inbodyCam').click()">صوّر</button>
    <button class="btn quiet" onclick="$('#inbodyLib').click()">من الألبوم</button>
  </div>`}
  <input type="file" id="inbodyCam" accept="image/*" capture="environment" hidden onchange="attachInBody(this)">
  <input type="file" id="inbodyLib" accept="image/*" hidden onchange="attachInBody(this)">
  ${!S.key ? '<p class="muted sm">بدّه تفعيل المساعد مرة وحدة من صفحة «اسأل».</p>' : ''}

  ${latest ? `
  <div class="lbl">آخر قياس — ${fmt(latest.date)}${latest.source === 'inbody' ? ' · InBody' : ''}</div>
  <div class="rstats">
    <div><b>${n1(latest.weight)}</b><i>كغم</i></div>
    <div><b>${latest.pbf != null ? n1(latest.pbf) + '%' : '—'}</b><i>نسبة الدهون</i></div>
    <div><b>${latest.smm != null ? n1(latest.smm) : '—'}</b><i>عضلات كغم</i></div>
  </div>
  <div class="rlist" style="margin-top:9px">
    ${latest.bmi != null ? `<div class="rrow"><span>مؤشر كتلة الجسم</span><b>${n1(latest.bmi)}</b></div>` : ''}
    ${latest.visceral != null ? `<div class="rrow"><span>الدهون الحشوية</span><b>${latest.visceral}</b></div>` : ''}
    ${latest.bmr != null ? `<div class="rrow"><span>الأيض الأساسي</span><b>${nK(latest.bmr)} سعرة</b></div>` : ''}
    ${latest.score != null ? `<div class="rrow"><span>نتيجة InBody</span><b>${latest.score}/100</b></div>` : ''}
    <div class="rrow"><span>الوزن المستهدف</span><b>${n1(INBODY_CARD.target)} كغم</b></div>
  </div>
  ${list.length > 1 ? weightChart(list) : ''}
  ` : '<div class="empty">صوّر أول InBody فوق</div>'}

  ${list.length ? `
  <div class="lbl">القياسات السابقة</div>
  <div class="rlist">
    ${list.slice().reverse().map((b, i) => `
      <div class="rrow">
        <span>${fmt(b.date)}${b.source === 'inbody' ? ' · InBody' : ''}</span>
        <b>${n1(b.weight)} كغم${b.pbf != null ? ' · ' + n1(b.pbf) + '%' : ''}</b>
        ${trash(`delBody(${list.length - 1 - i})`, 'حذف القياس')}
      </div>`).join('')}
  </div>` : ''}

  <div class="lbl">من بطاقة InBody الأخيرة</div>
  <p class="muted sm">القياسات الثمانية المطبوعة على البطاقة، من الأقدم للأحدث:</p>
  <div class="histbox">
    <div class="seqrow"><em>الوزن (كغم)</em>${INBODY_HISTORY.weight.map(n1).join('   ')}</div>
    <div class="seqrow"><em>العضلات SMM (كغم)</em>${INBODY_HISTORY.smm.map(n1).join('   ')}</div>
    <div class="seqrow"><em>الدهون PBF (%)</em>${INBODY_HISTORY.pbf.map(n1).join('   ')}</div>
  </div>

  <div class="lbl">🥗 خطة غذائية</div>
  ${S.diet ? `
  <div class="rstats">
    <div><b>${nK(S.diet.calories)}</b><i>سعرة/يوم</i></div>
    <div><b>${S.diet.protein}</b><i>بروتين غ</i></div>
    <div><b>${S.diet.carbs}/${S.diet.fat}</b><i>كارب/دهون غ</i></div>
  </div>
  <div class="aibox" style="margin-top:9px">${fmtAi(S.diet.plan)}<div class="raw2">${esc(fmt(S.diet.date))}</div></div>` : ''}
  <button class="btn ${S.diet ? 'quiet' : ''}" id="dietBtn" onclick="makeDiet()" ${dietBusy ? 'disabled' : ''}>
    ${dietBusy ? 'عم يجهّز الخطة...' : S.diet ? 'حدّث الخطة' : 'اطلب خطة غذائية'}</button>
  ${!S.key ? '<p class="muted sm">بدّه تفعيل المساعد مرة وحدة من صفحة «اسأل».</p>' : ''}
  `;
}

const DIET_SCHEMA = {
  type: 'OBJECT',
  properties: {
    calories: { type: 'NUMBER' }, protein: { type: 'NUMBER' },
    carbs: { type: 'NUMBER' }, fat: { type: 'NUMBER' },
    plan: { type: 'STRING' },
  },
  required: ['calories', 'protein', 'carbs', 'fat', 'plan'],
};

async function makeDiet() {
  if (!S.key) { msg('فعّل المساعد أول من صفحة اسأل'); return go('ask'); }
  if (dietBusy) return;
  dietBusy = true; render();
  try {
    const raw = await gemini([{ text: dietPrompt() }], null, { max: 2000, sys: DIET_SYS, json: DIET_SCHEMA });
    const d = JSON.parse(raw);
    S.diet = { date: today(), calories: Math.round(d.calories), protein: Math.round(d.protein),
               carbs: Math.round(d.carbs), fat: Math.round(d.fat), plan: d.plan };
  } catch (e) { msg(arErr(e.message)); }
  dietBusy = false; save(); render();
}

const DIET_SYS = `أنت أخصائي تغذية عملي تساعد متدرّب حديد في الأردن. جاوب بالعربية العامية الأردنية البسيطة، مباشر وبدون مقدمات.
رجّع النتيجة بصيغة JSON فقط بالحقول المطلوبة:
- calories/protein/carbs/fat: أرقام فقط (سعرة وغرام)، مبنية على أرقامه الحقيقية المعطاة لك. لا تخترع رقماً أبداً.
- plan: نص خطة الوجبات، بهذا الترتيب بالضبط:
  "يومك:" فطور - غدا - عشا - سناك، كل وحدة بجملة قصيرة بأكل عادي متوفر بالأردن (دجاج، لحمة، أرز، خبز، بيض، لبنة، جبنة، خضار، فواكه، شوفان)، بدون مكملات أو أطعمة غريبة.
  ثم "نصيحة:" جملة عملية واحدة.
  ثم جملة إنك لست طبيباً ولا أخصائي تغذية مرخّص، وهذا إرشاد عام، وإذا في حالة صحية يراجع مختص.
  خلّيه عملياً وقابلاً للتكرار يومياً، لا تتجاوز ٢٢٠ كلمة، ولا تقطع الجملة أبداً.`;

function dietPrompt() {
  const list = sortedBody();
  const latest = list[list.length - 1];
  const w = weekStats(7);
  // أرقام الأيض/الدهون الحشوية/الخصر-ورك تُقرأ من آخر InBody مسجّل فعلياً (لو موجود)
  // بدل ما تضل عالقة على أول بطاقة زُرعت بالتطبيق — نفس منطق الوزن والدهون تماماً
  const bmr = latest && latest.bmr != null ? latest.bmr : INBODY_CARD.bmr;
  const visceral = latest && latest.visceral != null ? latest.visceral : INBODY_CARD.visceral;
  const whr = latest && latest.whr != null ? latest.whr : INBODY_CARD.whr;
  return `بيانات المتدرّب:
العمر: ٢٣ سنة، ذكر، الطول ${HEIGHT_CM} سم
الوزن الحالي: ${latest ? n1(latest.weight) : n1(INBODY_CARD.weight)} كغم
الوزن المستهدف: ${n1(INBODY_CARD.target)} كغم (فرق ${n1(INBODY_CARD.weight - INBODY_CARD.target)} كغم تقريباً)
نسبة الدهون: ${latest && latest.pbf != null ? n1(latest.pbf) + '%' : n1(INBODY_CARD.pbf) + '% (من آخر InBody)'}
كتلة العضلات: ${latest && latest.smm != null ? n1(latest.smm) + ' كغم' : n1(INBODY_CARD.smm) + ' كغم (من آخر InBody)'}
معدل الأيض الأساسي (BMR): ${bmr} سعرة
الدهون الحشوية: ${visceral} (طبيعي حتى ٩)
نسبة الخصر للورك: ${whr} (الطبيعي ٠.٨٠–٠.٩٠)
تمارين حديد آخر ٧ أيام: ${w.days} تمارين

الهدف: تخفيف دهون مع الحفاظ على كتلة العضلات (الوزن المستهدف أقل من الحالي).`;
}

/* ===== قراءة بطاقة InBody بالصورة ===== */
let inbodyBusy = false;

const INBODY_SCHEMA = {
  type: 'OBJECT',
  properties: {
    weight: { type: 'NUMBER' }, pbf: { type: 'NUMBER' }, smm: { type: 'NUMBER' },
    bmi: { type: 'NUMBER' }, visceral: { type: 'NUMBER' }, bmr: { type: 'NUMBER' },
    score: { type: 'NUMBER' }, whr: { type: 'NUMBER' },
  },
  required: ['weight'],
};
const INBODY_SYS = `أنت تقرأ بطاقة نتائج جهاز InBody (تحليل تكوين الجسم) من صورة. استخرج فقط القيم الظاهرة فعلياً
بصيغة JSON: weight (الوزن كغم)، pbf (نسبة الدهون PBF %)، smm (كتلة العضلات الهيكلية SMM كغم)،
bmi (مؤشر كتلة الجسم)، visceral (Visceral Fat Level)، bmr (الأيض الأساسي BMR سعرة)،
score (InBody Score من ١٠٠)، whr (نسبة الخصر للورك WHR).
weight إلزامي. أي قيمة مو واضحة بالصورة أو مو موجودة أصلاً — اتركها فارغة، لا تخترع رقماً أبداً.`;

async function attachInBody(inp) {
  const f = inp.files[0]; if (!f) return; inp.value = '';
  if (!S.key) { msg('فعّل المساعد أول من صفحة اسأل'); return go('ask'); }
  if (inbodyBusy) return;
  inbodyBusy = true; render();
  try {
    const full = await shrink(f, 1100, 0.8);
    const raw = await gemini(
      [{ inline_data: { mime_type: 'image/jpeg', data: full.split(',')[1] } }, { text: 'اقرأ بطاقة الـ InBody هذه.' }],
      null, { max: 300, sys: INBODY_SYS, json: INBODY_SCHEMA }
    );
    const d = JSON.parse(raw);
    if (!(d.weight > 0)) throw new Error('ما قدرت أقرأ الوزن من الصورة بوضوح، جرّب صورة أوضح وأقرب للبطاقة');
    const dt = today();
    const entry = {
      date: dt, source: 'inbody', weight: d.weight,
      pbf: d.pbf ?? null, smm: d.smm ?? null, bmi: d.bmi ?? bmiOf(d.weight),
      visceral: d.visceral ?? null, bmr: d.bmr ?? null, score: d.score ?? null, whr: d.whr ?? null,
    };
    const i = S.body.findIndex(b => b.date === dt);
    if (i >= 0) S.body[i] = entry; else S.body.push(entry);
    save(); inbodyBusy = false; render(); msg('⚖️ تم حفظ InBody — عم أحدّث خطتك الغذائية تلقائياً');
    makeDiet();   // أرقام جديدة = خطة غذائية جديدة، بلا ما تضغط شي إضافي
  } catch (e) { inbodyBusy = false; msg(arErr(e.message)); render(); }
}

/* ===== تسجيل الوجبات بالصورة ===== */
let mealBusy = false, mealPendingImg = null, foodDay = null;   // foodDay = null يعني اليوم

const sortedMeals = date => (S.meals || []).filter(m => m.date === date).sort((a, b) => a.time - b.time);
const todayMeals = () => sortedMeals(today());
const mealDates = () => [...new Set((S.meals || []).map(m => m.date))].sort().reverse();
function dayTotal(date) {
  return sortedMeals(date).reduce((a, m) => ({
    calories: a.calories + (m.calories || 0), protein: a.protein + (m.protein || 0),
    carbs: a.carbs + (m.carbs || 0), fat: a.fat + (m.fat || 0),
  }), { calories: 0, protein: 0, carbs: 0, fat: 0 });
}

// نصغّر الصورة مرتين: نسخة أكبر للتحليل عند جوجل، ونسخة صغيرة جداً تبقى محفوظة بجهازك
function shrinkDataUrl(dataUrl, max, q) {
  return new Promise(res => {
    const im = new Image();
    im.onload = () => {
      const s = Math.min(1, max / Math.max(im.width, im.height));
      const cv = document.createElement('canvas');
      cv.width = Math.round(im.width * s); cv.height = Math.round(im.height * s);
      cv.getContext('2d').drawImage(im, 0, 0, cv.width, cv.height);
      res(cv.toDataURL('image/jpeg', q));
    };
    im.src = dataUrl;
  });
}

const MEAL_SCHEMA = {
  type: 'OBJECT',
  properties: {
    label: { type: 'STRING' }, calories: { type: 'NUMBER' },
    protein: { type: 'NUMBER' }, carbs: { type: 'NUMBER' }, fat: { type: 'NUMBER' },
  },
  required: ['label', 'calories', 'protein', 'carbs', 'fat'],
};
const MEAL_SYS = `أنت خبير تغذية تحلّل صور الأكل وتقدّر سعراتها اعتماداً على حجم الحصة وطريقة التحضير الظاهرة بالصورة قدر الإمكان.
رجّع بصيغة JSON فقط: label (اسم الوجبة بجملة عربية قصيرة، مثل "صدر دجاج مشوي مع أرز وسلطة")، calories (رقم السعرات التقديرية)، protein/carbs/fat (أرقام بالغرام).
هذا تقدير تقريبي بصري مش تحليل مخبري دقيق. لا تضف أي نص خارج الحقول المطلوبة.`;

async function attachMeal(inp) {
  const f = inp.files[0]; if (!f) return; inp.value = '';
  if (!S.key) { msg('فعّل المساعد أول من صفحة اسأل'); return go('ask'); }
  if (mealBusy) return;
  mealBusy = true; render();
  try {
    const full = await shrink(f, 800, 0.72);            // للتحليل عند جوجل، ما تُخزَّن
    mealPendingImg = await shrinkDataUrl(full, 220, 0.55); // نسخة صغيرة تُحفظ بالسجل
    render();
    const raw = await gemini(
      [{ inline_data: { mime_type: 'image/jpeg', data: full.split(',')[1] } }, { text: 'حلّل هذه الوجبة.' }],
      null, { max: 400, sys: MEAL_SYS, json: MEAL_SCHEMA }
    );
    const d = JSON.parse(raw);
    S.meals = S.meals || [];
    S.meals.push({
      date: today(), time: Date.now(), img: mealPendingImg, label: d.label,
      calories: Math.round(d.calories), protein: Math.round(d.protein),
      carbs: Math.round(d.carbs), fat: Math.round(d.fat),
    });
    foodDay = null; save(); msg('🍽️ تمت إضافة الوجبة');
  } catch (e) { msg(arErr(e.message)); }
  mealBusy = false; mealPendingImg = null; render();
}
function delMeal(date, idx) {
  const list = sortedMeals(date); const m = list[idx]; if (!m) return;
  if (!confirm(`حذف «${m.label}»؟`)) return;
  const real = S.meals.indexOf(m);
  if (real >= 0) S.meals.splice(real, 1);
  save(); render();
}

function ringSVG(pct) {
  const r = 42, c = Math.round(2 * Math.PI * r);
  const off = Math.round(c * (1 - Math.min(1, pct / 100)));
  const color = pct > 100 ? 'var(--warn)' : 'var(--food)';
  return `<svg viewBox="0 0 100 100" class="calring">
    <circle cx="50" cy="50" r="${r}" fill="none" stroke="var(--line)" stroke-width="9"/>
    <circle cx="50" cy="50" r="${r}" fill="none" stroke="${color}" stroke-width="9" stroke-linecap="round"
      stroke-dasharray="${c}" stroke-dashoffset="${off}" transform="rotate(-90 50 50)"/>
  </svg>`;
}

function food() {
  const dt = foodDay || today();
  const isToday = dt === today();
  const list = sortedMeals(dt);
  const tot = dayTotal(dt);
  const target = S.diet ? S.diet.calories : null;
  const pct = target ? Math.round(tot.calories / target * 100) : null;
  const pastDays = mealDates().filter(d => d !== dt);
  // مقارنة بآخر يوم مسجَّل فيه أكل قبل هذا اليوم — عشان يشوف رايح فوق أو تحت
  const prevDate = pastDays.find(d => d < dt);
  const prevCal = prevDate ? dayTotal(prevDate).calories : null;
  const cmp = (isToday && list.length && prevCal) ? Math.round(tot.calories - prevCal) : null;

  $('#app').innerHTML = `
  <header><h1>🍽️ الأكل${isToday ? ' اليوم' : ''}</h1><button class="link" onclick="go('home')">رجوع</button></header>

  ${!isToday ? `<div class="lbl">${fmt(dt)}</div>` : ''}
  ${target ? `
  <div class="calring-wrap">${ringSVG(pct)}
    <div class="calnum"><b>${nK(tot.calories)}</b><i>من ${nK(target)} سعرة</i></div>
  </div>` : `
  <div class="rstats" style="grid-template-columns:1fr"><div><b>${nK(tot.calories)}</b><i>سعرة</i></div></div>`}
  ${cmp != null ? `<p class="cmpline ${cmp > 0 ? 'warn' : cmp < 0 ? 'good' : ''}">
    ${cmp === 0 ? 'نفس آخر يوم مسجّل' : `${cmp > 0 ? '▲' : '▼'} ${nK(Math.abs(cmp))} سعرة ${cmp > 0 ? 'أكثر من' : 'أقل من'} آخر يوم مسجّل`}
  </p>` : ''}
  <div class="rstats" style="margin-top:9px">
    <div><b>${Math.round(tot.protein)}</b><i>بروتين غ</i></div>
    <div><b>${Math.round(tot.carbs)}</b><i>كارب غ</i></div>
    <div><b>${Math.round(tot.fat)}</b><i>دهون غ</i></div>
  </div>

  ${isToday ? `
  ${mealBusy ? `<button class="btn" disabled>عم يحلّل الوجبة...</button>` : `
  <div class="photobtns">
    <button class="btn" onclick="$('#mealCam').click()">صوّر وجبة</button>
    <button class="btn quiet" onclick="$('#mealLib').click()">من الألبوم</button>
  </div>`}
  <input type="file" id="mealCam" accept="image/*" capture="environment" hidden onchange="attachMeal(this)">
  <input type="file" id="mealLib" accept="image/*" hidden onchange="attachMeal(this)">
  ${!S.key ? '<p class="muted sm">بدّه تفعيل المساعد مرة وحدة من صفحة «اسأل».</p>' : ''}
  ` : ''}

  ${mealBusy && mealPendingImg ? `
  <div class="meallist" style="margin-top:14px">
    <div class="mealcard pend"><img src="${mealPendingImg}" alt=""><div class="mealinfo"><b>عم يحلّل الصورة...</b></div></div>
  </div>` : ''}

  ${list.length ? `<div class="lbl">وجبات ${isToday ? 'اليوم' : 'هذا اليوم'}</div>
  <div class="meallist">
    ${list.slice().reverse().map((m, i) => `
      <div class="mealcard">
        <img src="${m.img}" alt="">
        <div class="mealinfo">
          <b>${esc(m.label)}</b>
          <span>${nK(m.calories)} سعرة · ${m.protein}غ بروتين · ${m.carbs}غ كارب · ${m.fat}غ دهون</span>
          <time>${new Date(m.time).toLocaleTimeString('ar', { hour: '2-digit', minute: '2-digit' })}</time>
        </div>
        ${trash(`delMeal('${dt}',${list.length - 1 - i})`, 'حذف الوجبة')}
      </div>`).join('')}
  </div>` : (mealBusy ? '' : `<div class="empty">${isToday ? 'صوّر أول وجبة تحت' : 'ما في وجبات هذا اليوم'}</div>`)}

  ${pastDays.length ? `
  <div class="lbl">أيام سابقة</div>
  <div class="rlist">
    ${pastDays.slice(0, 14).map(d => `
      <div class="rrow daypick" onclick="foodDay='${d}';render(true)">
        <span>${fmt(d)}</span><b>${nK(dayTotal(d).calories)} سعرة</b>
      </div>`).join('')}
  </div>` : ''}
  ${!isToday ? `<button class="btn quiet" onclick="foodDay=null;render(true)">رجوع لليوم</button>` : ''}
  `;
}

/* ===== المساعد الذكي (Gemini المجاني) ===== */
let askEx = null;              // التمرين المرتبط بالسؤال، إن وُجد
let pending = null;            // صورة بانتظار الإرسال
let draft = '';                // نص مكتوب لم يُرسَل بعد
let busy = false;              // بانتظار رد

function ask() {
  if (!S.key) return askSetup();
  const c = S.chat || [];
  $('#app').innerHTML = `
  <header><h1>🤖 اسأل</h1>
    <div class="hlinks">
      ${c.length ? '<button class="link" onclick="clearChat()">مسح</button>' : ''}
      <button class="link" onclick="changeKey()">المفتاح</button>
      <button class="link" onclick="askEx=null;go('home')">رجوع</button>
    </div></header>
  ${askEx ? `<div class="ctx">بخصوص: ${esc(ex(askEx).ar)}</div>` : ''}
  <div class="chat" id="chatBox">
    ${c.length ? c.map(m => `<div class="m ${m.role}">${
        m._img ? `<img src="${m._img}" alt="">` : m.img ? '<div class="imgnote">صورة</div>' : ''
      }${m.role === 'me' ? esc(m.text) : fmtAi(m.text)}</div>`).join('')
      : `<div class="hintbox">صوّر أي جهاز في النادي واسأل عنه، أو اكتب سؤالك مباشرة.</div>`}
    ${pending ? `<div class="m me pend"><img src="${pending}" alt=""><span class="muted">جاهزة للإرسال</span></div>` : ''}
    ${busy ? '<div class="m ai typing"><span></span><span></span><span></span></div>' : ''}
  </div>

  <div class="chips">
    <button onclick="quick('هذا الجهاز اللي بالصورة، هل هو الصحيح لهذا التمرين؟ وإذا لأ شو الصحيح؟')">هذا الجهاز صح؟</button>
    <button onclick="quick('ما بحس بالعضلة بهذا التمرين. شو الأخطاء الشائعة وكيف أصلحها؟')">ما بحس بالعضلة</button>
    <button onclick="quick('حلّل تقدمي بآخر تمارين وقلّي شو أعدّل')">حلّل تقدمي</button>
  </div>

  <div class="askbar">
    <button onclick="$('#camIn').click()" aria-label="صوّر">
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.7"
           stroke-linecap="round" stroke-linejoin="round">
        <path d="M3 8a2 2 0 0 1 2-2h2l1.5-2h7L17 6h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <circle cx="12" cy="13" r="3.4"/></svg>
    </button>
    <button onclick="$('#libIn').click()" aria-label="من الألبوم">
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.7"
           stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="4" width="18" height="16" rx="2.5"/><circle cx="8.5" cy="9.5" r="1.6"/>
        <path d="M21 15.5l-5.5-5.5a1.5 1.5 0 0 0-2.1 0L4 19"/></svg>
    </button>
    <input type="text" id="qIn" placeholder="اكتب سؤالك..." value="${esc(draft)}"
           oninput="draft=this.value" onkeydown="if(event.key==='Enter')send()">
    <button class="send" onclick="send()" aria-label="إرسال">
      <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.9"
           stroke-linecap="round" stroke-linejoin="round"><path d="M20 12H5M12 5l-7 7 7 7"/></svg>
    </button>
  </div>
  <input type="file" id="camIn" accept="image/*" capture="environment" hidden onchange="attach(this)">
  <input type="file" id="libIn" accept="image/*" hidden onchange="attach(this)">`;
  const b = $('#chatBox'); if (b) b.scrollTop = b.scrollHeight;
  window.scrollTo(0, document.body.scrollHeight);
}

function askSetup() {
  $('#app').innerHTML = `
  <header><h1>🤖 اسأل</h1><button class="link" onclick="go('home')">رجوع</button></header>
  <input type="text" id="keyIn" class="keyin" placeholder="مفتاح Gemini" value="${esc(S.key || '')}"
         oninput="onKeyInput()" onpaste="setTimeout(onKeyInput,30)">
  <div class="keyerr" id="keyErr"></div>`;
  const i = $('#keyIn'); if (i) i.focus();
}

// جوجل يصدر صيغتين للمفتاح: القديمة AIza… والجديدة AQ.…
const KEY_RE = /^(AIza[A-Za-z0-9_-]{30,}|AQ\.[A-Za-z0-9_.-]{20,})$/;

// ترجمة أخطاء جوجل لرسائل مفهومة
function arErr(m) {
  m = String(m || '');
  if (/UNAUTHENTICATED|invalid authentication credentials|OAuth 2 access token|login cookie/i.test(m))
    return 'جوجل رفض المفتاح — تأكد إنك نسخته كامل بدون نقصان.';
  if (/API key not valid|API_KEY_INVALID|API key expired/i.test(m))
    return 'المفتاح غير صحيح أو منتهي.';
  if (/has not been used|SERVICE_DISABLED|PERMISSION_DENIED|blocked|suspended/i.test(m))
    return 'هذا المفتاح بدون صلاحية.';
  if (/RESOURCE_EXHAUSTED|Quota exceeded|rate limit|429/i.test(m))
    return 'وصلت حد الاستخدام المجاني — جرّب بعد شوي.';
  if (/no longer available|is not found|NOT_FOUND|not supported for/i.test(m))
    return 'صار تغيير بالنماذج عند جوجل — جرّب كمان مرة.';
  if (/انقطع الاتصال/i.test(m))
    return 'الشبكة عالقة أو بطيئة جداً. جرّب تبدّل من واي فاي لبيانات الجوال أو العكس، وحاول كمان مرة.';
  if (/user location|not available in your country|location is not supported/i.test(m))
    return 'الخدمة مش متاحة من موقعك حالياً.';
  if (/Failed to fetch|NetworkError|network|ERR_/i.test(m))
    return 'ما في اتصال إنترنت.';
  return 'صار خطأ غير متوقع.';
}

// تنظيف الأحرف غير المرئية اللي بتنلصق أحياناً من لوحة مفاتيح عربية على الجوال
// (رموز اتجاه النص U+200B..200F و U+202A..202E، رابط الكلمات U+2060، وBOM)
// فتخلّي المفتاح يبدو صحيحاً للعين بس يفشل عند جوجل بصمت
const cleanKey = s => s.replace(/[\s​-‏‪-‮⁠﻿]/g, '');

// يفحّط المفتاح تلقائياً فور لصقه — بدون زر
let keyBusy = false, keyAutoT = null;
function onKeyInput() {
  clearTimeout(keyAutoT);
  const err = $('#keyErr'); if (err) err.innerHTML = '';
  const k = cleanKey($('#keyIn') ? $('#keyIn').value : '');
  if (!k) return;
  keyAutoT = setTimeout(() => trySaveKey(k), 300);
}
async function trySaveKey(k) {
  if (keyBusy) return;
  const err = $('#keyErr'); if (!err) return;
  if (!KEY_RE.test(k)) { err.textContent = 'هذا مش شكل مفتاح API.'; return; }
  keyBusy = true; err.textContent = 'جارِ الفحص...';
  const old = S.key; S.key = k;
  try {
    await gemini([{ text: 'رد بكلمة واحدة: جاهز' }], null, { max: 64, sys: 'رد بكلمة واحدة فقط.' });
    save(); msg('🤖 المساعد صار جاهز'); render();
  } catch (e) {
    S.key = old;
    const e2 = $('#keyErr');
    if (e2) e2.innerHTML = esc(arErr(e.message)) + `<div class="raw">${esc(String(e.message).slice(0, 150))}</div>`;
  }
  keyBusy = false;
}
function changeKey() { S.key = ''; save(); render(true); }
function clearChat() { S.chat = []; save(); render(); }
const fmtAi = t => esc(t).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>')
                        .replace(/^\s*[-*]\s+/gm, '— ').replace(/\n/g, '<br>');
const quick = t => { $('#qIn').value = t; send(); };

function shrink(file, max = 800, q = 0.7) {
  return new Promise(res => {
    const fr = new FileReader(), im = new Image();
    fr.onload = () => { im.onload = () => {
      const s = Math.min(1, max / Math.max(im.width, im.height));
      const cv = document.createElement('canvas');
      cv.width = Math.round(im.width * s); cv.height = Math.round(im.height * s);
      cv.getContext('2d').drawImage(im, 0, 0, cv.width, cv.height);
      res(cv.toDataURL('image/jpeg', q));
    }; im.src = fr.result; };
    fr.readAsDataURL(file);
  });
}
async function attach(inp) {
  const f = inp.files[0]; if (!f) return; inp.value = '';
  const i = $('#qIn'); if (i) draft = i.value;      // لا تضيّع اللي كتبه
  msg('جارِ تجهيز الصورة...');
  pending = await shrink(f); render();
}

async function send() {
  if (busy) return;
  const inp = $('#qIn'); const q = (inp ? inp.value : draft).trim();
  if (!q && !pending) return;
  const img = pending; pending = null; draft = '';
  S.chat = S.chat || [];
  S.chat.push({ role: 'me', text: q || 'شو هذا الجهاز؟', img: !!img, _img: img || undefined });
  if (S.chat.length > 24) S.chat = S.chat.slice(-24);
  busy = true; save(); render();

  try {
    const parts = [];
    if (img) parts.push({ inline_data: { mime_type: 'image/jpeg', data: img.split(',')[1] } });
    parts.push({ text: q || 'شو هذا الجهاز وأي تمرين بينعمل عليه؟' });
    // كل الرسائل قبل الحالية = ذاكرة المحادثة
    const t = await gemini(parts, S.chat.slice(0, -1));
    S.chat.push({ role: 'ai', text: t });
  } catch (e) {
    S.chat.push({ role: 'ai', text: arErr(e.message) });
  }
  busy = false; save(); render();
}

/* كل ما يعرفه المساعد عن المتدرّب — يُرسل مع كل رسالة */
function context() {
  const prog = Object.entries(PROGRAM).map(([k, d]) => {
    const rows = d.items.map((it, i) => {
      const id = it[0], l = last(id);
      const now = l ? l.sets.map(s => `${s.w}×${s.r}`).join('  ') : 'ما جرّبه بعد';
      const tgt = it[1].map(s => `${s[0]}×${s[1]}`).join('  ');
      const n = (S.notes || {})[id] ? ` | ملاحظته: ${S.notes[id]}` : '';
      return `  ${i + 1}. ${ex(id).ar} (${ex(id).en})${it[2] ? ' [سوبرست]' : ''}`
           + `\n     آخر أداء: ${now} | المستهدف: ${tgt}${n}`;
    }).join('\n');
    const l = S.sessions.filter(s => s.day === k).pop();
    return `${d.name}${l ? ` (آخر مرة ${ago(l.date)})` : ' (ما بلّشه بعد)'}:\n${rows}`;
  }).join('\n\n');

  const recent = S.sessions.slice(-5).map(s =>
    `${s.date} — ${PROGRAM[s.day] ? PROGRAM[s.day].name : s.day}: ` +
    s.entries.map(e => `${ex(e.ex).ar} ${e.sets.map(x => x.w + '×' + x.r).join(',')}`).join(' | ')).join('\n');

  const ids = [...new Set(S.sessions.flatMap(s => s.entries.map(e => e.ex)))];
  const bests = ids.map(id => {
    const h = exHistory(id); if (!h.length) return null;
    return `${ex(id).ar}: ${Math.max(...h.map(x => x.max))} ${exUnit(id)}`;
  }).filter(Boolean).join('، ');

  const proj = allProjections().map(x =>
    `${ex(x.id).ar}: الآن ${x.p.now} ← ${x.p.goal} كغم خلال ${x.p.weeks} أسبوع`).join('\n');

  const w = weekStats(7);
  return `تاريخ اليوم: ${today()}
آخر ٧ أيام: ${w.days} تمارين، ${w.sets} مجموعة، ${Math.round(w.kg)} كغم إجمالي.

=== برنامجه (٤ أيام) بأوزانه الحالية ===
${prog}

=== تفاصيل آخر ٥ تمارين ===
${recent || 'ما في تمارين مسجّلة بعد'}

=== أعلى وزن وصله بكل تمرين ===
${bests || 'لا يوجد بعد'}

=== توقّعات حسب سرعة تطوّره ===
${proj || 'لسه ما في بيانات كافية'}`;
}

const SYS = `أنت مدرب حديد شخصي لهذا المتدرّب تحديداً. تعرف برنامجه وأوزانه وكل أرقامه، وهي معطاة لك تحت.

قواعد:
- جاوب بالعربية العامية الأردنية البسيطة، مباشر وبلا مقدمات.
- استخدم أرقامه الحقيقية بالاسم. لا تخترع رقماً أبداً؛ إذا الرقم مش مسجّل قل إنه مش مسجّل.
- أكمل جوابك حتى النهاية. لا تقطع الجملة بالنص أبداً.
- خلّي الرد ١٢٠ كلمة أو أقل إلا إذا طلب تفصيل.
- إذا أرسل صورة جهاز: حدّد اسمه، أي عضلة يستهدف، وهل يناسب التمرين اللي بيسأل عنه.
- تذكّر المحادثة السابقة وجاوب على أساسها.
- لا نصائح دوائية ولا منشطات. إذا ذكر إصابة أو ألم، انصحه بمراجعة مختص.`;

const sysPrompt = () => SYS + '\n\n' + context()
  + (askEx ? `\n\nملاحظة: سؤاله الحالي يخص تمرين «${ex(askEx).ar}» (${ex(askEx).en}).` : '');

// نجرّب أكثر من نموذج: جوجل بتوقف نماذج قديمة عن المفاتيح الجديدة بين فترة وفترة
// (مثال حصل فعلياً: gemini-2.5-flash-lite صار "غير متاح للمستخدمين الجدد" وطلبت gemini-3.5-flash-lite بدلها).
// flash-latest بالأول لأنه اسم ثابت بيشاور تلقائياً على أحدث نسخة، وباقي القائمة احتياط.
const MODELS = ['gemini-flash-latest', 'gemini-3.5-flash', 'gemini-3.5-flash-lite',
                'gemini-2.5-flash', 'gemini-2.0-flash', 'gemini-2.5-flash-lite'];

// history = رسائل المحادثة السابقة حتى يفهم السياق ولا يبدأ من الصفر كل مرة
async function gemini(parts, history, opts) {
  opts = opts || {};
  let err = 'تعذّر الاتصال';
  const contents = [];
  for (const m of (history || [])) {
    if (!m.text) continue;
    contents.push({ role: m.role === 'me' ? 'user' : 'model', parts: [{ text: m.text }] });
  }
  contents.push({ role: 'user', parts });

  for (const model of MODELS) {
    // نماذج 2.5 "بتفكّر" قبل ما تجاوب، والتفكير بيستهلك من حدّ الإخراج نفسه.
    // بدون تعطيله كان الرد ينقطع بنص الجملة.
    const gen = { temperature: 0.6, maxOutputTokens: opts.max || 2048 };
    // كل النماذج إلا سلسلة 2.0 بتفكّر قبل ما تجاوب، والتفكير بياكل من حدّ الرد نفسه
    if (!model.includes('2.0')) gen.thinkingConfig = { thinkingBudget: 0 };
    // مخرجات JSON منظّمة (خطة الغذاء وتحليل الوجبات) — بيضمن أرقاماً قابلة للجمع بدل نص حر
    if (opts.json) { gen.responseMimeType = 'application/json'; gen.responseSchema = opts.json; }
    // بدون حد زمني، اتصال عالق (شبكة بطيئة أو محجوبة جزئياً) كان يخلّي الطلب معلّق للأبد
    // بصمت — لا نجاح ولا رسالة خطأ. بعد 12 ثانية نلغي المحاولة وننتقل للنموذج التالي.
    const ac = new AbortController();
    const to = setTimeout(() => ac.abort(), 12000);
    try {
      const r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-goog-api-key': S.key },
        body: JSON.stringify({
          contents,
          systemInstruction: { parts: [{ text: opts.sys || sysPrompt() }] },
          generationConfig: gen,
        }),
        signal: ac.signal,
      });
      clearTimeout(to);
      const j = await r.json();
      if (j.error) { err = j.error.message; continue; }
      const c = (j.candidates || [])[0];
      const t = ((c && c.content && c.content.parts) || []).map(p => p.text).filter(Boolean).join('').trim();
      if (t) return t;
      err = c && c.finishReason === 'MAX_TOKENS' ? 'الرد انقطع لأنه طويل' : ((c && c.finishReason) || 'رد فارغ');
    } catch (e) {
      clearTimeout(to);
      err = e.name === 'AbortError' ? 'انقطع الاتصال — الشبكة بطيئة جداً أو محجوبة' : e.message;
    }
  }
  throw new Error(err);
}

/* ===== الإقلاع ===== */
seedInBody();
buildTabbar();
render();
// المتصفح بشكل افتراضي بيفحص وجود نسخة جديدة من sw.js كل ٢٤ ساعة تقريباً بس —
// حتى لو المستخدم سكّر التطبيق وفتحه ألف مرة. نفرض فحصاً فورياً كل ما يفتح الصفحة،
// وإذا وصل تحديث ونحن مش وسط تمرين، نعيد التحميل تلقائياً حتى يشتغل الكود الجديد فوراً.
if ('serviceWorker' in navigator && location.protocol !== 'file:') {
  navigator.serviceWorker.register('sw.js').then(reg => {
    reg.update().catch(() => {});
    navigator.serviceWorker.addEventListener('controllerchange', () => { if (!S.active) location.reload(); });
  }).catch(() => {});
}
addEventListener('beforeunload', e => { if (S.active) { e.preventDefault(); e.returnValue = ''; } });
