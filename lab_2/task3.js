// Делает первую букву каждого слова заглавной
function capitalizeWords(str) {
  const capitalize = (word) =>
    word ? word[0].toUpperCase() + word.substring(1) : word;
  return str.split(" ").map(capitalize).join(" ");
}

export function runTask() {
  const sample = "hello world how are you";
  return [`"${sample}" -> "${capitalizeWords(sample)}"`];
}
