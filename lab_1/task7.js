// Генерирует строковое представление чисел с повторением цифры
function repeatedNumbers(limit = 9) {
  const result = [];
  for (let i = 1; i <= limit; i += 1) {
    result.push(i.toString().repeat(i));
  }
  return result;
}

export function runTask() {
  return repeatedNumbers();
}
