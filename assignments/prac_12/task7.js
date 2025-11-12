// INFO: Функция для поиска подстрок с использованием Set

function findSubstrings(A, B) {
  const bSet = new Set(B);
  const result = [];

  for (const a of A) {
    for (const b of bSet) {
      if (b.includes(a)) {
        result.push(a);
        break;
      }
    }
  }

  return result.sort();
}

export function runTask() {
  const A = ["some", "less", "hold", "absence"];
  const B = [
    "stronghold",
    "wireless",
    "seamless",
    "lonesome",
    "troublesome",
    "script",
    "algorithm",
  ];

  const result = findSubstrings(A, B);

  return [
    "Массив A: " + JSON.stringify(A),
    "Массив B: " + JSON.stringify(B),
    "Результат поиска подстрок: " + JSON.stringify(result),
    `Найдено элементов: ${result.length}`,
    "Использован Set для массива B: " +
      new Set(B).size +
      " уникальных элементов",
  ];
}
