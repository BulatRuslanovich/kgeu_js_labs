// Извлекает названия функций до открывающей скобки
const str = "sayHi() checkAge() showMessage()";
// /\b\w+(?=\()/g:
//   \b      — требуем границу слова перед именем функции;
//   \w+     — одна или более букв/цифр/подчёркиваний формируют имя;
//   (?=\()  — положительная проверка вперёд: сразу после имени должна идти "(";
//   g       — извлекаем все подходящие имена.
const pattern = /\b\w+(?=\()/g;

function extractFunctionNames(input) {
  return input.match(pattern) ?? [];
}

export function runTask() {
  const funcs = extractFunctionNames(str);
  return [`Строка: "${str}"`, `Найденные функции: ${funcs.join(", ")}`];
}
