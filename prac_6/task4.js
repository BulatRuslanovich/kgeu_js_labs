// Проверяет, является ли число степенью двойки
function isPowerOfTwo(num) {
  if (num <= 0) return false;
  return (num & (num - 1)) === 0;
}

export function runTask() {
  const samples = [1, 2, 3, 4, 16, 17];
  return samples.map((value) => `${value} -> ${isPowerOfTwo(value)}`);
}
