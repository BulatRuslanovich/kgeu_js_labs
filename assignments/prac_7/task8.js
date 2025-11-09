// INFO: Разбивает число на суммы заданных номиналов жадным алгоритмом
function greedyDecompose(num, denominations) {
  const res = [];
  let remaining = num;
  let values = [...denominations].sort((a, b) => b - a);

  while (remaining > 0 && values.length > 0) {
    const current = values[0];

    if (remaining >= current) {
      remaining -= current;
      res.push(current);
    } else {
      values = values.slice(1);
    }
  }

  if (remaining > 0) {
    res.push(`Остаток: ${remaining}`);
  }

  return res;
}

export function runTask() {
  const denominations = [20, 25, 10, 2, 1];
  const value = 96;
  const result = greedyDecompose(value, denominations);
  return [
    `Доступные номиналы: [${denominations.join(", ")}]`,
    `Число: ${value}`,
    `Результат: ${result.join(", ")}`,
  ];
}
