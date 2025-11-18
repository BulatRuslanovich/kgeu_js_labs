// INFO: Функция-конструктор User с неизменяемым именем
export function runTask() {
  function User() {
    Object.defineProperty(this, 'name', {
      value: 'Bulat',
      enumerable: true,
      writable: false,
      configurable: false,
    });
  }

  const user = new User();
  const keys = [];
  for (const key in user) {
    keys.push(key);
  }

  return JSON.stringify({ user, keys });
}

