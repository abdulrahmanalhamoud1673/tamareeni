/* ===== التمارين: الاسم بالعربي، والاسم الإنجليزي كما كتبته أنت في جدولك ===== */
const EX = {
  incline_bar_press: { ar: 'ضغط بار مائل', en: 'Incline bar press', inc: 2.5 },
  cable_press:       { ar: 'ضغط كيبل', en: 'Cable press', inc: 2.5 },
  cable_fly:         { ar: 'تفتيح كيبل', en: 'Cable fly', inc: 2.5 },
  decline_bar_press: { ar: 'ضغط بار منحدر', en: 'Decline bar press', inc: 2.5 },
  dips:              { ar: 'متوازي', en: 'Dips', inc: 2.5 },
  flat_db_press:     { ar: 'ضغط دمبل مستوي', en: 'Flat db press', inc: 2 },
  dip_machine:       { ar: 'جهاز الديبس', en: 'Dip machine', inc: 2.5 },
  reverse_pushdown:  { ar: 'سحب كيبل بقبضة معكوسة', en: 'Reverse grip pushdown', inc: 1 },
  cable_one_arm_ext: { ar: 'سحب كيبل بذراع واحدة', en: 'Cable one arm extension', inc: 1 },

  // تمارين قديمة — باقية هنا فقط لتظهر بأسمائها في السجل
  close_grip_bench:  { ar: 'ضغط بار قبضة ضيقة', en: 'Close-grip bench press', inc: 2.5 },
  skull_crusher:     { ar: 'كسّارة الجمجمة بالبار المتعرّج', en: 'EZ-bar skull crusher', inc: 2.5 },
  rope_overhead:     { ar: 'تمديد حبل فوق الرأس', en: 'Rope overhead extension', inc: 2.5 },
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
    ['dip_machine',       [[20,12],[20,10],[20,8]]],
    ['reverse_pushdown',  [[10,12],[10,12],[10,12]]],
    ['cable_one_arm_ext', [[5,15],[5,15],[5,15]]],
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
let S = Object.assign({ sessions: [], active: null, rest: 90, notes: {} }, JSON.parse(localStorage.getItem(KEY) || '{}'));
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
  ({ home, workout, log, ask }[S.active && page !== 'ask' ? 'workout' : page])();
  window.scrollTo(0, toTop ? 0 : y);
}
const go = p => { page = p; render(true); };

function home() {
  const done = S.sessions;
  const lastDay = done.length ? done[done.length - 1].day : null;
  const keys = Object.keys(PROGRAM);
  const next = lastDay ? keys[(keys.indexOf(lastDay) + 1) % keys.length] : keys[0];

  $('#app').innerHTML = `
  <header><h1>تماريني</h1>
    <div class="hlinks">
      <button class="link" onclick="askEx=null;go('ask')">اسأل</button>
      <button class="link" onclick="go('log')">السجل</button>
    </div></header>

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
      <div class="exfoot"><button onclick="addSet(${i})">إضافة مجموعة</button>${
        note || noteOpen === it.ex ? '' : `<button onclick="startNote('${it.ex}')">إضافة ملاحظة</button>`}</div>
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
  msg('تم حفظ التمرين');
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

function log() {
  const list = S.sessions.slice().reverse();
  $('#app').innerHTML = `
  <header><h1>السجل</h1><button class="link" onclick="go('home')">رجوع</button></header>
  ${list.length ? list.map((s, i) => `
    <div class="rec">
      <div class="recrow">
        <button class="recmain" onclick="openRec=${openRec === i ? -1 : i};render()">
          <b>${PROGRAM[s.day] ? PROGRAM[s.day].name : s.day}</b>
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
      S = Object.assign({ sessions: [], active: null, rest: 90 }, d);
      save(); render(true); msg('تم الاسترجاع');
    } catch (e) { msg('الملف غير صالح'); }
  };
  r.readAsText(f);
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
  <header><h1>اسأل</h1>
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
    <button onclick="$('#camIn').click()" aria-label="صورة">
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.7"
           stroke-linecap="round" stroke-linejoin="round">
        <path d="M3 8a2 2 0 0 1 2-2h2l1.5-2h7L17 6h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <circle cx="12" cy="13" r="3.4"/></svg>
    </button>
    <input type="text" id="qIn" placeholder="اكتب سؤالك..." value="${esc(draft)}"
           oninput="draft=this.value" onkeydown="if(event.key==='Enter')send()">
    <button class="send" onclick="send()" aria-label="إرسال">
      <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.9"
           stroke-linecap="round" stroke-linejoin="round"><path d="M20 12H5M12 5l-7 7 7 7"/></svg>
    </button>
  </div>
  <input type="file" id="camIn" accept="image/*" capture="environment" hidden onchange="attach(this)">`;
  const b = $('#chatBox'); if (b) b.scrollTop = b.scrollHeight;
  window.scrollTo(0, document.body.scrollHeight);
}

function askSetup() {
  $('#app').innerHTML = `
  <header><h1>اسأل</h1><button class="link" onclick="go('home')">رجوع</button></header>
  <p class="muted">مساعد بيجاوبك عن أي تمرين أو جهاز، وبيقدر يشوف صورة تصوّرها بالنادي. مجاني تماماً.</p>
  <ol class="steps">
    <li>افتح <b>aistudio.google.com/apikey</b> وسجّل دخول بحساب جوجل</li>
    <li>من القائمة اليسرى اضغط <b>API Keys</b> — مش Projects</li>
    <li>إذا ما عندك مفتاح، اضغط <b>Create API key</b></li>
    <li>اضغط أيقونة النسخ اللي جنب المفتاح بالجدول، والصقه هنا</li>
  </ol>
  <div class="note2">المفتاح يبدأ بـ <b>AIza</b> — مثال: <span dir="ltr">AIzaSyD…</span><br>
  انتبه: <span dir="ltr">gen-lang-client-…</span> هذا رقم المشروع مش المفتاح، وبيكون بصفحة Projects.</div>
  <input type="text" id="keyIn" class="keyin" placeholder="AIzaSy..." value="${esc(S.key || '')}">
  <div class="keyerr" id="keyErr"></div>
  <button class="btn" id="keyBtn" onclick="saveKey()">تفعيل</button>
  <p class="muted sm">بدون بطاقة وبدون اشتراك. المفتاح بيتخزّن على جهازك فقط.
  عند الضغط على تفعيل بنجرّبه فوراً ونتأكد إنه شغّال.</p>`;
}

// شكل مفتاح Gemini: يبدأ بـ AIza وطوله ٣٩ خانة تقريباً
const KEY_RE = /^AIza[A-Za-z0-9_-]{30,}$/;

// ترجمة أخطاء جوجل لرسائل مفهومة وقابلة للتنفيذ
function arErr(m) {
  m = String(m || '');
  if (/UNAUTHENTICATED|invalid authentication credentials|OAuth 2 access token|login cookie/i.test(m))
    return 'اللي حطيته مش مفتاح API — يبدو إنه توكن تسجيل دخول. المفتاح الصحيح يبدأ بـ AIza، انسخه من aistudio.google.com/apikey';
  if (/API key not valid|API_KEY_INVALID|API key expired/i.test(m))
    return 'المفتاح غير صحيح أو منتهي. أنشئ مفتاحاً جديداً من aistudio.google.com/apikey';
  if (/has not been used|SERVICE_DISABLED|PERMISSION_DENIED|blocked|suspended/i.test(m))
    return 'هذا المفتاح ما عليه صلاحية. أنشئ مفتاحاً جديداً من aistudio.google.com/apikey مباشرة (مش من Google Cloud).';
  if (/RESOURCE_EXHAUSTED|Quota exceeded|rate limit/i.test(m))
    return 'خلص حدّك المجاني لهاليوم. جرّب بعد شوي أو بكرا.';
  if (/user location|not available in your country|location is not supported/i.test(m))
    return 'الخدمة مش متاحة من موقعك حالياً.';
  if (/Failed to fetch|NetworkError|network|ERR_/i.test(m))
    return 'ما في اتصال إنترنت. المساعد بيحتاج نت، بعكس باقي التطبيق.';
  return 'صار خطأ غير متوقع. جرّب مفتاحاً جديداً من aistudio.google.com/apikey';
}

async function saveKey() {
  const k = $('#keyIn').value.trim().replace(/\s+/g, '');
  const err = $('#keyErr'), btn = $('#keyBtn');
  err.innerHTML = '';
  if (!k) { err.textContent = 'الصق المفتاح أولاً.'; return; }
  // امنع الخطأ قبل ما نرسل أصلاً، واشرح بالضبط شو لصق
  if (!KEY_RE.test(k)) {
    let what = `اللي لصقته يبدأ بـ «${esc(k.slice(0, 8))}…» — هذا شي ثاني من الصفحة.`;
    if (/^gen-lang-client/i.test(k)) what = 'هذا <b>Project ID</b> (رقم المشروع) مش المفتاح — إنت بصفحة Projects.';
    else if (/^projects\//i.test(k) || /^\d{6,}$/.test(k)) what = 'هذا اسم أو رقم المشروع، مش المفتاح.';
    else if (/^AQ\./i.test(k)) what = 'هذا توكن تسجيل دخول، مش المفتاح.';
    err.innerHTML = `${what}<br><br>
      المفتاح موجود في صفحة <b>API Keys</b> — من القائمة اليسرى في AI Studio، فوق Projects.<br>
      اضغط عليها، وبتلاقي مفتاحك بالجدول. انسخه من أيقونة النسخ اللي جنبه.<br>
      لازم يبدأ بـ <b>AIza</b> وطوله ٣٩ خانة تقريباً.`;
    return;
  }
  const old = S.key; S.key = k;
  btn.disabled = true; btn.textContent = 'جارِ الفحص...';
  try {
    await gemini([{ text: 'رد بكلمة واحدة: جاهز' }]);
    save(); render(); msg('المساعد صار جاهز');
  } catch (e) {
    S.key = old;
    btn.disabled = false; btn.textContent = 'تفعيل';
    err.innerHTML = esc(arErr(e.message)) + `<div class="raw">${esc(String(e.message).slice(0, 150))}</div>`;
  }
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
    parts.push({ text: `${context()}\n\nسؤاله: ${q || 'شو هذا الجهاز وأي تمرين بينعمل عليه؟'}` });
    const t = await gemini(parts);
    S.chat.push({ role: 'ai', text: t });
  } catch (e) {
    S.chat.push({ role: 'ai', text: arErr(e.message) });
  }
  busy = false; save(); render();
}

function context() {
  const days = Object.entries(PROGRAM)
    .map(([k, d]) => `- ${d.name}: ${d.items.map(x => ex(x[0]).ar).join('، ')}`).join('\n');
  const recent = S.sessions.slice(-3).map(s =>
    `${s.date} (${PROGRAM[s.day] ? PROGRAM[s.day].name : s.day}): ` +
    s.entries.map(e => `${ex(e.ex).ar} ${e.sets.map(x => x.w + '×' + x.r).join(',')}`).join(' | ')).join('\n');
  return `برنامج المتدرّب (٤ أيام):\n${days}\n\nآخر تمارينه:\n${recent || 'لا يوجد بعد'}`
    + (askEx ? `\n\nسؤاله يخص تمرين: ${ex(askEx).ar} (${ex(askEx).en})` : '');
}

const SYS = 'أنت مدرب حديد محترف. جاوب بالعربية العامية الأردنية، مختصر ومباشر وعملي، أقل من ١٥٠ كلمة إلا إذا طُلب تفصيل. '
  + 'إذا أُرسلت صورة جهاز، حدّد اسمه وأي عضلة يستهدف وكيف يُستخدم صح. '
  + 'لا تعطِ نصائح دوائية أو منشطات، وإذا ذُكرت إصابة انصح بمراجعة مختص.';

async function gemini(parts) {
  let err = 'تعذّر الاتصال';
  for (const m of ['gemini-2.5-flash', 'gemini-2.0-flash']) {
    try {
      const r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${m}:generateContent?key=${encodeURIComponent(S.key)}`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ role: 'user', parts }],
          systemInstruction: { parts: [{ text: SYS }] },
          generationConfig: { temperature: 0.6, maxOutputTokens: 700 },
        }),
      });
      const j = await r.json();
      if (j.error) { err = j.error.message; continue; }
      const t = (j.candidates?.[0]?.content?.parts || []).map(p => p.text).filter(Boolean).join('');
      if (t) return t;
      err = 'رد فارغ';
    } catch (e) { err = e.message; }
  }
  throw new Error(err);
}

/* ===== الإقلاع ===== */
render();
if ('serviceWorker' in navigator && location.protocol !== 'file:') navigator.serviceWorker.register('sw.js').catch(() => {});
addEventListener('beforeunload', e => { if (S.active) { e.preventDefault(); e.returnValue = ''; } });
