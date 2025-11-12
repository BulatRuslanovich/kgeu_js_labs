// INFO: Конструктор User с защищенным свойством name

function User() {
  Object.defineProperty(this, "name", {
    value: "Bulat",
    writable: false,
    configurable: false,
    enumerable: true,
  });
}

export function runTask() {
  const user = new User();

  const properties = [];
  for (const key in user) {
    properties.push(`${key} = "${user[key]}"`);
  }

  return [
    `Создан объект User со свойством name = "${user.name}"`,
    `Свойства доступные в цикле: {${properties.join(", ")}}`,
    `Проверка: свойство name ${user.name === "Bulat" ? "неизменяемо" : "изменилось"}`,
    `Проверка: свойство name ${Object.getOwnPropertyDescriptor(user, "name").configurable ? "удаляемо" : "неудаляемо"}`,
  ];
}
