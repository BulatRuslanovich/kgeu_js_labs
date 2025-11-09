// Заменяет множественные пробелы в строке одним пробелом
const str = "Hello        World            Javascript";

function normalizeWhitespace(input) {
  // /\s+/g:
  //   \s+  — одна или более любых пробельных символов (пробел, таб, перенос);
  //   g    — заменяем все группы пробелов в строке.
  return input.replace(/\s+/g, " ");
}

export function runTask() {
  const result = normalizeWhitespace(str);
  return [`Исходная строка: "${str}"`, `Результат: "${result}"`];
}
