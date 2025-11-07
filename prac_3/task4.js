// Возводит число в натуральную степень циклом с проверкой параметров
function power(x, n) {
  if (n < 1) {
    return "Параметр n должен быть ≥ 1";
  }

  let result = 1;
  let count = 0;

  while (count < n) {
    result *= x;
    count += 1;
  }

  return result;
}

export function runTask() {
  const samples = [
    [2, 3],
    [5, 2],
    [3, 4],
    [10, 1],
    [7, 3],
    [2, 0],
  ];

  return samples.map(
    ([base, exponent]) =>
      `power(${base}, ${exponent}) = ${power(base, exponent)}`,
  );
}
