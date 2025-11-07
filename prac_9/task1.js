// Находит все подстроки вида xNx (x + цифра + x)
const str = "x1x x2x x3x x4x x5x xbx xvx";
const rx = /x[0-9]x/g;

function findMatches(input) {
  return input.match(rx) ?? [];
}

export function runTask() {
  const matches = findMatches(str);
  return [`Строка: ${str}`, `Совпадения: ${matches.join(", ")}`];
}
