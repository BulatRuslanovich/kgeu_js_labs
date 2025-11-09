// INFO: Находит подстроки между x и x с произвольным количеством цифр
const str = "x1x x22x x333x x4444x xуx x55555x xcx xtpx";
// /x[0-9]*x/g:
//   x        — обязательная буква "x" слева;
//   [0-9]*   — любое количество цифр (включая 0 штук) между "x";
//   x        — обязательная буква "x" справа;
//   g        — режим поиска всех совпадений.
const rx = /x[0-9]*x/g;

function findMatches(input) {
  return input.match(rx) ?? [];
}

export function runTask() {
  const matches = findMatches(str);
  return [`Строка: ${str}`, `Совпадения: ${matches.join(", ")}`];
}
