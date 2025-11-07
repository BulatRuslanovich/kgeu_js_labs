// Считает количество слов в строке по регулярному выражению
const rx = /\b\w+\b/g;

const data = [
  "Oh, hey there! What is going on? Tell me.",
  "Hello World! 1 23 JavaScript 456",
  "  ",
];

function countWords(str) {
  return str.match(rx)?.length ?? 0;
}

export function runTask() {
  return data.map((str) => {
    const count = countWords(str);
    return count > 0
      ? `"${str}" — количество слов: ${count}`
      : `"${str}" — слов не найдено`;
  });
}
