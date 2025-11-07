// Проверяет, является ли число числом Армстронга
function isArmstrongNumber(num) {
  if (num < 0 || !Number.isInteger(num)) return false;

  const digits = num.toString().split("");

  const sum = digits.reduce(
    (acc, digit) => acc + Math.pow(Number(digit), digits.length),
    0,
  );

  return sum === num;
}

export function runTask() {
  const samples = [8208, 122, 153];
  return samples.map((value) => `${value} -> ${isArmstrongNumber(value)}`);
}
