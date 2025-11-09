// INFO: Демонстрирует особенности поднятия переменных (hoisting) в JavaScript
function demonstrateVarHoisting(flag) {
  let x = 0;

  function f() {
    if (flag) {
      x = true;
    } else {
      x = false;
    }
  }

  f();
  return x;
}

export function runTask() {
  return [
    `Результат выполнения функции f(true): ${demonstrateVarHoisting(true)}`,
    `Результат выполнения функции f(false): ${demonstrateVarHoisting(false)}`,
  ];
}
