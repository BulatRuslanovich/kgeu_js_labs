// Возвращает вложенную функцию, отдающую строку "Hello World"
function first() {
  function second() {
    return "Hello World";
  }

  return second;
}

export function runTask() {
  const result = first()();
  return ["Hello World -> " + result];
}
