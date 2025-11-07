// Удаляет дубликаты из массива, сохраняя порядок
function uniqueValues(arr) {
  return Array.from(new Set(arr));
}

export function runTask() {
  const sample = [1, 1, 1, 2, 2, 5, 5, 8, 8];
  return [
    `${JSON.stringify(sample)} -> ${JSON.stringify(uniqueValues(sample))}`,
  ];
}
