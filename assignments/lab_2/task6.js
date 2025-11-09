// INFO: Считает мультипликативную стойкость числа (количество перемножений цифр)
function multiplicativePersistence(num) {
  let current = num;
  let count = 0;

  while (current.toString().length > 1) {
    let product = 1;

    for (const digit of current.toString()) {
      product *= Number.parseInt(digit, 10);
    }

    count += 1;
    current = product;
  }

  return count;
}

export function runTask() {
  const samples = [39, 999, 4];
  return samples.map(
    (value) =>
      `multiplicativePersistence(${value}) = ${multiplicativePersistence(value)}`,
  );
}
