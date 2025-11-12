// INFO: Сортировка объекта по значениям и преобразование в JSON
export function runTask() {
  const obj = { three: 3, two: 2, five: 5, four: 4 };
  const sortedObj = Object.fromEntries(
    Object.entries(obj).sort(([, a], [, b]) => a - b),
  );

  return JSON.stringify(sortedObj, null, 2);
}
