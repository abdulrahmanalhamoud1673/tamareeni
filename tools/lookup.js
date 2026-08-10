(async () => {
  const all = await (await fetch('https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/dist/exercises.json')).json();
  const back = m => ['lats', 'middle back', 'traps', 'lower back'].some(x => m.includes(x));
  const rows = all.filter(e => back(e.primaryMuscles) && /machine/i.test(e.equipment || ''));
  console.log('=== تمارين الظهر والترابيس على أجهزة ===');
  console.log(rows.map(e => `${e.name}  [${e.primaryMuscles}]  -> ${e.id}`).join('\n'));
  console.log('\n=== الكتف الخلفي على أجهزة ===');
  console.log(all.filter(e => e.primaryMuscles.includes('shoulders') && /machine/i.test(e.equipment || ''))
    .map(e => `${e.name} -> ${e.id}`).join('\n'));
})();
