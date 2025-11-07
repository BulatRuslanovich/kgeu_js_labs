// Создаёт объект человека и позволяет переопределить имя
const person = {
  name: "Bulat",
};

function setName(obj, newName) {
  return { ...obj, name: newName };
}

export function runTask() {
  const updated = setName(person, "Bulat");
  return [`Меня зовут ${updated.name}`];
}
