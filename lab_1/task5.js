// Считает сумму чисел от 1 до лимита, кратных 3 или 5 (но не обоим)
function sumMultiples(limit = 1000) {
  let sum = 0;
  for (let i = 1; i <= limit; i += 1) {
    if ((i % 3 === 0 || i % 5 === 0) && i % 15 !== 0) {
      sum += i;
    }
  }
  return sum;
}

export function runTask() {
  return [`Сумма чисел до 1000: ${sumMultiples(1000)}`];
}
