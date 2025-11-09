// Возвращает объект только с теми ключами, что присутствуют в шаблоне
function keepKeys(source, template) {
  const keysToKeep = new Set(Object.keys(template));
  const result = {};

  Object.keys(source).forEach((key) => {
    if (keysToKeep.has(key)) {
      result[key] = source[key];
    }
  });

  return result;
}

export function runTask() {
  const a = { a: 1, b: 2, c: 3, d: 4 };
  const b = { a: 3, b: 4 };
  return [
    `Исходное: ${JSON.stringify(a)}`,
    `Оставляем ключи из: ${JSON.stringify(Object.keys(b))}`,
    `Результат: ${JSON.stringify(keepKeys(a, b))}`,
  ];
}
