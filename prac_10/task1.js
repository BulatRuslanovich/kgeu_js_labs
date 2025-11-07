// Заменяет множественные пробелы в строке одним пробелом
const str = "Hello        World            Javascript";

function normalizeWhitespace(input) {
  return input.replace(/\s+/g, " ");
}

export function runTask() {
  const result = normalizeWhitespace(str);
  return [`Исходная строка: "${str}"`, `Результат: "${result}"`];
}
