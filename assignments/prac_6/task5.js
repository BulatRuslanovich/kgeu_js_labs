// Суммирует элементы дробного ряда с шагом 3 и форматирует до 2 знаков
function seriesSum(num) {
  if (num <= 0) return "0.00";

  let sum = 0;
  let denominator = 1;

  for (let i = 0; i < num; i += 1) {
    sum += 1 / denominator;
    denominator += 3;
  }

  return sum.toFixed(2);
}

export function runTask() {
  const samples = [1, 2, 5, 10];
  return samples.map((value) => `n=${value} -> ${seriesSum(value)}`);
}
