// Рекурсивно вычисляет факториал с проверкой аргумента
const factorial = (n) => {
  if (n < 0) {
    return "Факториал определен только для неотрицательных чисел";
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
};

export function runTask() {
  const samples = [0, 1, 2, 3, 4, 5, 6, -1];
  return samples.map((value) => `${value}! = ${factorial(value)}`);
}
