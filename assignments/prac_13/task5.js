// INFO: Реализация Object.create с проверкой прототипа
export function runTask() {
  function customCreate(prototype, properties) {
    if (prototype !== null && typeof prototype !== 'object') {
      return 'Ошибка';
    }

    const obj = {};
    Object.setPrototypeOf(obj, prototype);

    if (properties !== undefined) {
      Object.defineProperties(obj, properties);
    }

    return obj;
  }

  const proto = { kek: 'kek' };
  const withProps = customCreate(proto, {
    name: {
      value: 'Lol',
      enumerable: true,
    },
  });
  const onlyProto = customCreate(proto);
  const invalid = customCreate(42);

  return JSON.stringify({ withProps, onlyProto, invalid },
    null, 2);
}

