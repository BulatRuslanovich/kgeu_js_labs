// INFO: Демонстрирует доступ к свойствам через переменные-ключи
const obj = {
  a: 1,
  b: 2,
  c: 3,
};

function getProperty(object, key) {
  return object[key];
}

export function runTask() {
  const keys = ["b", "a"];
  return keys.map((key) => `${key} -> ${getProperty(obj, key)}`);
}
