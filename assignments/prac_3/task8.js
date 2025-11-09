// INFO: Решает квадратные (и линейные) уравнения с разными дискриминантами
function solveQuadraticEquation(a, b, c) {
  let equation = `${a}x² ${b >= 0 ? "+" : ""}${b}x ${c >= 0 ? "+" : ""}${c} = 0`;

  if (a === 0) {
    if (b === 0) {
      if (c === 0) {
        return `${equation}\nУравнение имеет бесконечно много решений`;
      } else {
        return `${equation}\nУравнение не имеет решений`;
      }
    } else {
      // Линейное уравнение
      const root = -c / b;
      return `${equation}\nУравнение является линейным\nКорень: x = ${root}`;
    }
  }

  const discriminant = b * b - 4 * a * c;

  if (discriminant > 0) {
    const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return `${equation}\nУравнение имеет 2 действительных корня\nx₁ = ${x1.toFixed(2)}\nx₂ = ${x2.toFixed(2)}`;
  } else if (discriminant === 0) {
    const x = -b / (2 * a);
    return `${equation}\nУравнение имеет 1 действительный корень (кратности 2)\nx = ${x.toFixed(2)}`;
  } else {
    const realPart = -b / (2 * a);
    const imaginaryPart = Math.sqrt(-discriminant) / (2 * a);
    return `${equation}\nУравнение имеет 2 комплексных корня\nx₁ = ${realPart.toFixed(2)} + ${imaginaryPart.toFixed(2)}i\nx₂ = ${realPart.toFixed(2)} - ${imaginaryPart.toFixed(2)}i`;
  }
}

export function runTask() {
  const samples = [
    [1, -3, 2],
    [1, -4, 4],
    [1, 2, 5],
    [0, 2, -4],
    [0, 0, 5],
  ];

  return samples.map((params) => solveQuadraticEquation(...params));
}
