// Возводит каждую найденную в строке цифру в квадрат
function generateNumbers() {
  return Array.from(
    { length: 5 },
    () => Math.floor(Math.random() * 9) + 1,
  ).join(" ");
}

function squareNumbersInString(str) {
  return str.replace(/\d+/g, (match) => Math.pow(parseInt(match, 10), 2));
}

export function runTask() {
  const nums = generateNumbers();
  const res = squareNumbersInString(nums);
  return [`Исходные числа: ${nums}`, `Возведённые в квадрат: ${res}`];
}
