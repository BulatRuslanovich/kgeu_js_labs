// Находит подстроки a?a, где ? — один из символов b . * +
const str = "aba aea aca aza axa a.a a+a a*a";
const rx = /a[b\.\*\+]a/g;

function findMatches(input) {
  return input.match(rx) ?? [];
}

export function runTask() {
  const matches = findMatches(str);
  return [`Строка: ${str}`, `Совпадения: ${matches.join(", ")}`];
}
