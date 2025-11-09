// INFO: Функциональный калькулятор с числами-замыканиями и операциями
function numberFunction(value) {
  return function (operation) {
    if (typeof operation === "function") {
      return operation(value);
    }

    return value;
  };
}

const zero = numberFunction(0);
const one = numberFunction(1);
const two = numberFunction(2);
const three = numberFunction(3);
const four = numberFunction(4);
const five = numberFunction(5);
const six = numberFunction(6);
const seven = numberFunction(7);
const eight = numberFunction(8);
const nine = numberFunction(9);

function sum(right) {
  return function (left) {
    return left + right;
  };
}

function difference(right) {
  return function (left) {
    return left - right;
  };
}

function product(right) {
  return function (left) {
    return left * right;
  };
}

function quotient(right) {
  return function (left) {
    return left / right;
  };
}

export function runTask() {
  return [
    `two(product(six())) = ${two(product(six()))}`,
    `nine(difference(four())) = ${nine(difference(four()))}`,
    `eight(quotient(two())) = ${eight(quotient(two()))}`,
    `three(sum(five())) = ${three(sum(five()))}`,
    `zero(sum(nine())) = ${zero(sum(nine()))}`,
    `one(difference(seven())) = ${one(difference(seven()))}`,
  ];
}
