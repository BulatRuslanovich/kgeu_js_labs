// Извлекает названия функций до открывающей скобки
const str = "sayHi() checkAge() showMessage()";
const pattern = /\b\w+(?=\()/g;

function extractFunctionNames(input) {
  return input.match(pattern) ?? [];
}

export function runTask() {
  const funcs = extractFunctionNames(str);
  return [`Строка: "${str}"`, `Найденные функции: ${funcs.join(", ")}`];
}
