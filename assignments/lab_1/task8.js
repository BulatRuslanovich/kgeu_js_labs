// INFO: Перемножает суммы первых n натуральных чисел для диапазона
function productOfPartialSums(limit = 10) {
  let result = 1;
  for (let i = 2; i <= limit; i += 1) {
    let sum = 0;
    for (let j = 1; j <= i; j += 1) {
      sum += j;
    }
    result *= sum;
  }
  return result;
}

export function runTask() {
  return [`Произведение = ${productOfPartialSums(10)}`];
}
