// INFO: Добавляет три неизменяемых и неудаляемых свойства в объект
export function runTask() {
  const target = {};

  Object.defineProperties(target, {
    first: {
      value: 'lol',
      enumerable: true,
      writable: false,
      configurable: false,
    },
    second: {
      value: 'kek',
      enumerable: true,
      writable: false,
      configurable: false,
    },
    third: {
      value: 'bobik',
      enumerable: true,
      writable: false,
      configurable: false,
    },
  });

  return JSON.stringify(target);
}

