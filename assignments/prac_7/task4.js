// INFO: Сортирует массив объектов по полю sc по возрастанию
const arr = [
  { fs: 1, sc: 3 },
  { fs: 4, sc: 2 },
  { fs: 6, sc: 1 },
];

function sortBySecond(values) {
  return [...values].sort((a, b) => a.sc - b.sc);
}

export function runTask() {
  const sorted = sortBySecond(arr);
  const format = (item) => `{fs: ${item.fs}, sc: ${item.sc}}`;
  return [
    `Исходный массив: ${arr.map(format).join(", ")}`,
    `После сортировки: ${sorted.map(format).join(", ")}`,
  ];
}
