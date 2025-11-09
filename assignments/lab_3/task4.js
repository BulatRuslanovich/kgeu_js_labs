// INFO: Кодирует и декодирует гласные буквы в строке цифрами 1-5
function encodeVowels(str) {
  return str
    .replace(/a/gi, "1")
    .replace(/e/gi, "2")
    .replace(/i/gi, "3")
    .replace(/o/gi, "4")
    .replace(/u/gi, "5");
}

function decodeVowels(str) {
  return str
    .replace(/1/g, "a")
    .replace(/2/g, "e")
    .replace(/3/g, "i")
    .replace(/4/g, "o")
    .replace(/5/g, "u");
}

export function runTask() {
  const original = "Hello World";
  const encoded = encodeVowels(original);
  const decoded = decodeVowels(encoded);
  return [
    `Оригинал: ${original}`,
    `Кодирование: ${encoded}`,
    `Декодирование: ${decoded}`,
  ];
}
