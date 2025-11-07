// Конструктор инкрементор: хранит значение и умеет прибавлять ввод пользователя
class Incrementor {
  constructor(initialValue = 0) {
    this.value = Number(initialValue);
  }

  read(delta) {
    const increment = Number(delta);
    if (!Number.isNaN(increment)) {
      this.value += increment;
    }
  }
}

export function runTask() {
  const inc = new Incrementor(10);
  const inputs = [5, -3, "abc", 12];
  const outputs = [];

  inputs.forEach((input) => {
    const before = inc.value;
    inc.read(input);
    outputs.push(`+${input} -> ${before} => ${inc.value}`);
  });

  outputs.push("Интерактивная версия доступна в task5.html.");

  return outputs;
}
