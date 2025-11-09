// INFO: Подсчитывает количество гласных букв в строке
const vowelRegex = /[aeiou]/gi;

function countVowels(str) {
  const matches = str.match(vowelRegex);
  return matches ? matches.length : 0;
}

export function runTask() {
  const sample = "The Russian Federation";
  return [`"${sample}" -> ${countVowels(sample)}`];
}
