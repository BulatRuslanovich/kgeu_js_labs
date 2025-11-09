// INFO: Проверяет знак произведения трёх чисел
function productSign(a, b, c) {
  return a * b * c > 0 ? "+" : "-";
}

export function runTask() {
  const samples = [
    [0, 0, 0],
    [1, -2, 3],
    [-1, -2, -3],
  ];

  return samples.map(
    ([a, b, c]) => `${a} * ${b} * ${c} -> ${productSign(a, b, c)}`,
  );
}
