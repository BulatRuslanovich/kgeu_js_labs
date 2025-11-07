// Находит подстроки a?a, где ? — буквы из набора [bex]
const str = "aba aea aca aza axa";
const rx = /a[bex]a/g;

function findMatches(input) {
  return input.match(rx) ?? [];
}

export function runTask() {
  const matches = findMatches(str);
  return [`Строка: ${str}`, `Совпадения: ${matches.join(", ")}`];
}
