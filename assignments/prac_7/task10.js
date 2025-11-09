// INFO: Перемещает все нули массива в конец, сохраняя порядок остальных элементов
function moveZerosToEnd(values) {
  const nonZeros = values.filter((value) => value !== 0);
  const zeroCount = values.length - nonZeros.length;
  return [...nonZeros, ...Array(zeroCount).fill(0)];
}

export function runTask() {
  const sample = [false, true, 1, 2, 0, 3, 0, 4, 0, "hello"];
  return [
    `Исходный массив: ${JSON.stringify(sample)}`,
    `Результат: ${JSON.stringify(moveZerosToEnd(sample))}`,
  ];
}
