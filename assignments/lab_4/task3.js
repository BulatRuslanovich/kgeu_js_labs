// INFO: Добавляет аксессор fullName в объекты конструктора ObjConstr
export function ObjConstr(first, last) {
  this.firstName = first;
  this.lastName = last;

  Object.defineProperty(this, "fullName", {
    enumerable: true,
    configurable: false,
    get() {
      return `${this.firstName} ${this.lastName}`;
    },
    set(value) {
      if (typeof value !== "string") {
        throw new TypeError("fullName должен быть строкой");
      }

      const parts = value.split(" ").filter((part) => part !== "");

      if (parts.length === 0) {
        throw new Error("fullName должен содержать хотя бы одно слово");
      }

      this.firstName = parts.shift();
      this.lastName = parts.length > 0 ? parts.join(" ") : "";
    },
  });
}

export function runTask() {
  const me = new ObjConstr("Bulat", "Ruslanovich");
  const beforeChange = [
    `firstName: ${me.firstName}`,
    `lastName: ${me.lastName}`,
    `fullName: ${me.fullName}`,
  ];

  me.fullName = "Bobic Bobicovich";

  const afterChange = [
    `firstName после изменения fullName: ${me.firstName}`,
    `lastName после изменения fullName: ${me.lastName}`,
    `fullName после изменения: ${me.fullName}`,
  ];

  return [...beforeChange, ...afterChange];
}

