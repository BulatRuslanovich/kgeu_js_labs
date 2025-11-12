// INFO: Добавление свойств в пустой объект
export function runTask() {
  const emptyObj = {};
  Object.defineProperties(emptyObj, {
    prop1: {
      value: "value1",
      writable: false,
      configurable: false,
      enumerable: true,
    },
    prop2: {
      value: "value2",
      writable: false,
      configurable: false,
      enumerable: true,
    },
    prop3: {
      value: "value3",
      writable: false,
      configurable: false,
      enumerable: true,
    },
  });

  const results = [];

  results.push("Исходные свойства:");
  for (const key in emptyObj) {
    results.push(`${key}: ${emptyObj[key]}`);
  }

  results.push("\nПопытка изменения свойств:");
  try {
    emptyObj.prop1 = "new value1";
    results.push("prop1 после попытки изменения: " + emptyObj.prop1);
  } catch (e) {
    results.push("Ошибка при изменении prop1: " + e.message);
  }

  results.push("\nПопытка удаления свойств:");
  try {
    delete emptyObj.prop2;
    results.push(
      "prop2 после попытки удаления: " +
        (emptyObj.prop2 !== undefined ? "все еще существует" : "удален"),
    );
  } catch (e) {
    results.push("Ошибка при удалении prop2: " + e.message);
  }

  results.push("\nПеребор в цикле for...in:");
  const loopResults = [];
  for (const key in emptyObj) {
    loopResults.push(key);
  }
  results.push("Доступные свойства: " + loopResults.join(", "));

  return results;
}
