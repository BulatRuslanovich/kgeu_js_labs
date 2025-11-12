// INFO: Преобразование объекта с заменой ключей и значений
export function runTask() {
  const obj = { name: "Adam", age: 25 };
  const transformedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    transformedObj[value] = key;
  }

  return JSON.stringify(transformedObj);
}
