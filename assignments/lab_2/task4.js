// Разворачивает каждое слово в строке по отдельности
function reverseWords(str) {
  const reverse = (word) => word.split("").reverse().join("");

  return str.split(" ").map(reverse).join(" ");
}

export function runTask() {
  const sample = "hello world how are you";
  return [`"${sample}" -> "${reverseWords(sample)}"`];
}
