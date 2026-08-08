(async () => {
  const all = await (await fetch('https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/dist/exercises.json')).json();
  const tri = all.filter(e => e.primaryMuscles.includes('triceps'));
  console.log('=== كل تمارين الترايسبس ===');
  console.log(tri.map(e => `${e.name}  [${e.equipment}]  -> ${e.id}`).join('\n'));
})();
