// INFO: Находит трёхзначные числа Армстронга из цифр
function findThreeDigitArmstrongNumbers() {
  const result = [];
  for (let i = 1; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      for (let k = 0; k < 10; k += 1) {
        const candidate = i * 100 + j * 10 + k;
        if (i ** 3 + j ** 3 + k ** 3 === candidate) {
          result.push(candidate);
        }
      }
    }
  }
  return result;
}

export function runTask() {
  return findThreeDigitArmstrongNumbers().map((num) => String(num));
}
