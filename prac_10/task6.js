// Находит слова, начинающиеся и заканчивающиеся одинаковой буквой
const str = "push pop avada kedavra";
const pattern = /\b(\w)(\w*?\1)?\b/gi;

function findWords(input) {
  return input.match(pattern) ?? [];
}

export function runTask() {
  const words = findWords(str);
  return [`Строка: "${str}"`, `Подходящие слова: ${words.join(", ")}`];
}
