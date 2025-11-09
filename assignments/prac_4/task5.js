// INFO: Проверяет наличие ключей в объекте с помощью оператора in
const obj = {
  q: 1,
  w: 2,
  e: 3,
};

function hasKey(object, key) {
  return key in object;
}

export function runTask() {
  const keysToCheck = ["w", "x"];
  return keysToCheck.map((key) => `${key} in obj -> ${hasKey(obj, key)}`);
}
