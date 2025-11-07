// Создаёт замыкание, запоминающее переданную строку
function first(str) {
  function second() {
    return str;
  }

  return second;
}

export function runTask() {
  const anyString = "any_string";
  const showMessage = first(anyString);
  return [
    `Входная строка: "${anyString}"`,
    `Результат вызова: "${showMessage()}"`,
  ];
}
