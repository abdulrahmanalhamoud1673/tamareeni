(async () => {
  const all = await (await fetch('https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/dist/exercises.json')).json();
  const find = q => all.filter(e => q.toLowerCase().split('+').every(t => e.name.toLowerCase().includes(t.trim())))
                      .map(e => `${e.name}  [${e.category}/${e.equipment}]  -> ${e.id}`);
  for (const q of ['triceps press', 'one arm+triceps', 'seated+triceps', 'dumbbell+extension']) {
    console.log('\n### ' + q); console.log(find(q).join('\n') || '(لا يوجد)');
  }
})();
