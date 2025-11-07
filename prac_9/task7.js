// Находит все числа в строке и суммирует их
const rx = /\d+/g;

const data = ["Hello World! 1 23 JavaScript 456", "No numbers here!"];

function sumNumbers(str) {
  return str.match(rx)?.reduce((acc, numStr) => acc + Number(numStr), 0) ?? 0;
}

export function runTask() {
  return data.map((str) => {
    const sum = sumNumbers(str);
    return sum > 0 ? `"${str}" — сумма чисел: ${sum}` : `"${str}" — чисел нет`;
  });
}
