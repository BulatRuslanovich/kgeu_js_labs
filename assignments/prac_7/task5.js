// INFO: Вставляет дефисы между соседними чётными цифрами в числе
function insertDashesBetweenEvenDigits(num) {
  let res = "";
  let oldDigit = -1;
  let current = num;

  while (current > 0) {
    const digit = current % 10;
    current = Math.floor(current / 10);

    if (digit % 2 === 0 && oldDigit % 2 === 0) {
      res = `${digit}-${res}`;
    } else {
      res = `${digit}${res}`;
    }

    oldDigit = digit;
  }

  return res;
}

export function runTask() {
  const samples = [827468, 123456, 86420];
  return samples.map(
    (value) => `${value} -> ${insertDashesBetweenEvenDigits(value)}`,
  );
}
