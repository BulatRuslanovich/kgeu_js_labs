// INFO: Реализует алгоритм Евклида для поиска НОД двух чисел
function gcd(x, y) {
  let a = Math.abs(x);
  let b = Math.abs(y);

  if (a < b) {
    [a, b] = [b, a];
  }

  while (b !== 0) {
    const r = a % b;
    a = b;
    b = r;
  }

  return a;
}

export function runTask() {
  const pairs = [
    [98, 33],
    [54, 24],
    [20, 5],
  ];

  return pairs.map(([x, y]) => `gcd(${x}, ${y}) = ${gcd(x, y)}`);
}
