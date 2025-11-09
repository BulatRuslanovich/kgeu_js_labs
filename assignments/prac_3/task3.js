// INFO: Возвращает максимум из двух чисел с обработкой равенства
function max(a, b) {
  if (a > b) return a;
  if (b > a) return b;
  return "Эти числа равны";
}

export function runTask() {
  const samples = [
    [1, 2],
    [5, -3],
    [4, 4],
  ];

  return samples.map(
    ([first, second]) => `max(${first}, ${second}) = ${max(first, second)}`,
  );
}
