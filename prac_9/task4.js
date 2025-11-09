// Находит подстроки a?a, где ? — один из символов b . * +
const str = "aba aea aca aza axa a.a a+a a*a";
// /a[b\.\*\+]a/g:
//   a           — фиксируем "a" слева;
//   [b\.\*\+]   — один символ из набора: буква b или спецсимволы . * +,
//                 экранирование обратным слешем превращает их в обычные символы;
//   a           — фиксируем "a" справа;
//   g           — ищем все совпадения, а не только первое.
const rx = /a[b\.\*\+]a/g;

function findMatches(input) {
  return input.match(rx) ?? [];
}

export function runTask() {
  const matches = findMatches(str);
  return [`Строка: ${str}`, `Совпадения: ${matches.join(", ")}`];
}
