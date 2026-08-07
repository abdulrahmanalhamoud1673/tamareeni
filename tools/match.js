// يطابق تمارين جدولي مع قاعدة البيانات المجانية ويطبع أفضل النتائج
const NEED = {
  incline_bar_press: 'barbell incline bench press',
  cable_press: 'cable chest press',
  cable_fly: 'cable crossover fly chest',
  decline_bar_press: 'decline barbell bench press',
  dips: 'dips chest triceps',
  flat_db_press: 'dumbbell bench press flat',
  single_arm_oh_ext: 'one arm overhead dumbbell triceps extension',
  rope_pushdown: 'triceps pushdown rope',
  tri_ext_machine: 'machine triceps extension dip machine',

  lat_pulldown: 'wide grip lat pulldown',
  low_row_cable: 'seated cable row',
  row_hammer_high: 'leverage machine high row',
  high_row_cable: 'cable row high',
  reverse_fly: 'reverse machine flyes rear delt',
  hyper_ext: 'hyperextensions back extension',
  trx_row: 'inverted row suspension',

  lateral_raise: 'side lateral raise dumbbell',
  shoulder_press_ham: 'machine shoulder press leverage',
  upright_row: 'upright barbell row',
  shoulder_press_n: 'dumbbell shoulder press neutral',
  shrugs: 'barbell shrug',
  alt_curl_15: 'alternate dumbbell biceps curl',
  cable_curl: 'cable biceps curl',
  hammer_curl: 'hammer curls dumbbell',

  squat: 'barbell full squat',
  lunges: 'bodyweight walking lunge',
  leg_ext: 'leg extensions machine',
  leg_curl: 'seated leg curl machine',
  abd_add: 'thigh abductor adductor machine',
  calf_raise: 'standing calf raises',
  butterfly_situp: 'butterfly situp',
  plank: 'plank',
  ab_wheel: 'ab roller wheel rollout',
};

(async () => {
  const res = await fetch('https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/dist/exercises.json');
  const all = await res.json();
  console.log('total exercises in db:', all.length);
  const out = {};
  for (const [key, q] of Object.entries(NEED)) {
    const terms = q.toLowerCase().split(/\s+/);
    const scored = all.map(e => {
      const name = e.name.toLowerCase();
      let s = 0;
      for (const t of terms) if (name.includes(t)) s += t.length;
      s -= Math.abs(name.split(/\s+/).length - terms.length) * 0.4;   // فضّل الأسماء المشابهة بالطول
      return { s, e };
    }).sort((a, b) => b.s - a.s).slice(0, 3);
    out[key] = scored.map(x => `${x.s.toFixed(1)} :: ${x.e.name} :: ${x.e.images[0]}`);
  }
  console.log(JSON.stringify(out, null, 1));
})();
