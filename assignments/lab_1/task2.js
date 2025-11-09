// INFO: Классическая задача FizzBuzz для чисел до заданного лимита
function fizzBuzz(limit = 100) {
  const result = [];
  for (let i = 1; i <= limit; i += 1) {
    if (i % 15 === 0) {
      result.push("FizzBuzz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else {
      result.push(String(i));
    }
  }
  return result;
}

export function runTask() {
  return fizzBuzz(30);
}
