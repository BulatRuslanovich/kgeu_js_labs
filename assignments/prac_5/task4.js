// INFO: Конструктор, который читает два числа и умеет рассчитывать сумму и произведение
class TwoNumbers {
  constructor(a = 0, b = 0) {
    this.a = a;
    this.b = b;
  }

  read(a, b) {
    this.a = Number(a);
    this.b = Number(b);
  }

  sum() {
    return this.a + this.b;
  }

  mul() {
    return this.a * this.b;
  }
}

export function runTask() {
  const pairs = [
    [2, 3],
    [5, 7],
  ];

  const calculator = new TwoNumbers();
  const results = [];

  pairs.forEach(([a, b]) => {
    calculator.read(a, b);
    results.push(
      `(${a}, ${b}) -> sum: ${calculator.sum()}, mul: ${calculator.mul()}`,
    );
  });

  return results;
}
