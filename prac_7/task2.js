// Отфильтровывает неотрицательные значения из массива
const arr = [1, 2, 4, -2, 3, -100, 0];

function filterNonNegative(values) {
  return values.filter((v) => v >= 0);
}

export function runTask() {
  const filtered = filterNonNegative(arr);
  return [
    `Исходный массив: [${arr.join(", ")}]`,
    `После фильтра: [${filtered.join(", ")}]`,
  ];
}
