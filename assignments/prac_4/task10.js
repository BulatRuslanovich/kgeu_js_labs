// INFO: Удаляет список ключей второго объекта из первого
function removeKeys(source, keysToRemove) {
  const result = { ...source };
  Object.keys(keysToRemove).forEach((key) => delete result[key]);
  return result;
}

export function runTask() {
  const a = { a: 1, b: 2, c: 3, d: 4 };
  const b = { a: 3, b: 4 };
  return [
    `Исходное: ${JSON.stringify(a)}`,
    `Удаляем ключи: ${JSON.stringify(Object.keys(b))}`,
    `Результат: ${JSON.stringify(removeKeys(a, b))}`,
  ];
}
