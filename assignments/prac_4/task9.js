// INFO: Проверяет, является ли переданный объект пустым или null/undefined
function isEmptyObject(obj) {
  if (obj == null) {
    return true;
  }

  return Object.getOwnPropertyNames(obj).length === 0;
}

export function runTask() {
  const samples = [{}, { name: "Lol" }, null, undefined];
  return samples.map(
    (value) => `${JSON.stringify(value)} -> ${isEmptyObject(value)}`,
  );
}
