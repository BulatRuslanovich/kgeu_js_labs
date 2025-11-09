// Умножает каждый элемент массива на его индекс
const arr = [2, 4, 6, 8, 10];

function multiplyByIndex(values) {
  return values.map((num, index) => num * index);
}

export function runTask() {
  const mapped = multiplyByIndex(arr);
  return [
    `Исходный массив: [${arr.join(", ")}]`,
    `После умножения: [${mapped.join(", ")}]`,
  ];
}
