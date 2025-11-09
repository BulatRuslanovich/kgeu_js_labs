// Находит подстроки a?a, где ? — буквы из набора [bex]
const str = "aba aea aca aza axa";
// /a[bex]a/g:
//   a        — обязательная буква "a" в начале;
//   [bex]    — одна буква из перечисленных вариантов b, e или x;
//   a        — обязательная буква "a" в конце;
//   g        — находим сразу все подходящие фрагменты.
const rx = /a[bex]a/g;

function findMatches(input) {
  return input.match(rx) ?? [];
}

export function runTask() {
  const matches = findMatches(str);
  return [`Строка: ${str}`, `Совпадения: ${matches.join(", ")}`];
}
