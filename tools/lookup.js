(async () => {
  const all = await (await fetch('https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/dist/exercises.json')).json();
  const show = e => `${e.name}  [${e.equipment}]  -> ${e.id}`;

  const groups = {
    'ROWS (cable/machine, back)': all.filter(e =>
      /row|pulldown/i.test(e.name) && e.primaryMuscles.some(m => /lats|middle back|traps/.test(m))),
    'REAR DELT / REVERSE FLY': all.filter(e =>
      /rear|reverse|delt fly|face pull/i.test(e.name)),
    'SIT-UP / CRUNCH variants': all.filter(e =>
      /sit-?up|crunch|butterfly|frog/i.test(e.name)),
    'PLANK variants': all.filter(e => /plank/i.test(e.name)),
    'INCLINE BENCH (barbell)': all.filter(e => /incline/i.test(e.name) && /barbell/i.test(e.equipment || '')),
    'ADDUCTOR / ABDUCTOR': all.filter(e => /adductor|abductor|thigh/i.test(e.name)),
  };
  for (const [k, v] of Object.entries(groups)) {
    console.log('\n===== ' + k);
    console.log(v.map(show).join('\n') || '(none)');
  }
})();
