// INFO: Создает объекты с только читаемыми свойствами firstName, lastName и fullName
export function ObjConst(first, last) {
  Object.defineProperties(this, {
    firstName: {
      value: first,
      enumerable: true,
    },
    lastName: {
      value: last,
      enumerable: true,
    },
    fullName: {
      value: `${first} ${last}`,
      enumerable: true,
    },
  });
}

export function runTask() {
  const person = new ObjConst("Ann", "Taylor");

  const attempt = (() => {
    try {
      person.firstName = "Changed";
    } catch (error) {
      return `Попытка изменить firstName завершилась ошибкой: ${error.message}`;
    }
    return "Попытка изменить firstName не изменила значение";
  })();

  return [
    `firstName: ${person.firstName}`,
    `lastName: ${person.lastName}`,
    `fullName: ${person.fullName}`,
    attempt,
    `firstName после попытки изменения: ${person.firstName}`,
  ];
}

