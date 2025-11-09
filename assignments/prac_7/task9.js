// INFO: Разворачивает слова длиной ≥ threshold в предложении
function reverseLongWords(str, threshold = 5) {
  return str
    .split(" ")
    .map((word) =>
      word.length >= threshold ? word.split("").reverse().join("") : word,
    )
    .join(" ");
}

export function runTask() {
  const sentence = "Hello world this is a test";
  return [
    `Исходная строка: "${sentence}"`,
    `Результат: "${reverseLongWords(sentence)}"`,
  ];
}
