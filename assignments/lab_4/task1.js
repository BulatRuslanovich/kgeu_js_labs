// INFO: Создает объект-счетчик с методами инкремента и декремента
function createCounterObject() {
  const obj = {};

  Object.defineProperties(obj, {
    count: {
      value: 0,
      writable: true,
      enumerable: true,
    },
    increm: {
      enumerable: true,
      value() {
        this.count += 1;
        return this.count;
      },
    },
    decrem: {
      enumerable: true,
      value() {
        this.count -= 1;
        return this.count;
      },
    },
  });

  return obj;
}

export function runTask() {
  const counter = createCounterObject();

  const results = [
    `Начальное значение count: ${counter.count}`,
    `После increm(): ${counter.increm()}`,
    `После increm(): ${counter.increm()}`,
    `После decrem(): ${counter.decrem()}`,
  ];

  return results;
}

