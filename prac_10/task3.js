// Подставляет результаты сложения в арифметические выражения внутри строки
const str = "1+2=  3+4=  5+6=";

function evaluateAdditions(input) {
  return input.replace(
    /(\d+)\+(\d)=/g,
    (match, a, b) => `${match}${parseInt(a, 10) + parseInt(b, 10)} `,
  );
}

export function runTask() {
  const res = evaluateAdditions(str);
  return [`Строка: "${str}"`, `С результатами: "${res.trimEnd()}"`];
}
