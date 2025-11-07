// Находит подстроки a?a, где ? — буква из диапазона a-f или A-Z

const str = "aaa aBa aca aDa afa aZa aga";
const rx = /a[a-fA-Z]a/g;

function findMatches(input) {
  return input.match(rx) ?? [];
}

export function runTask() {
  const matches = findMatches(str);
  return [`Строка: ${str}`, `Совпадения: ${matches.join(", ")}`];
}
