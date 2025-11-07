// Демонстрирует особенности поднятия переменных (hoisting) в JavaScript
function demonstrateVarHoisting() {
  let x = 0;

  function f() {
    if (1) {
      x = true;
    } else {
      x = false;
    }
  }

  f();
  return x;
}

export function runTask() {
  return [`Результат выполнения функции f(): ${demonstrateVarHoisting()}`];
}
