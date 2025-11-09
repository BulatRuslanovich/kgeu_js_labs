// Формирует строку с данными студента по переданным объектам
function studentInfoToString(student) {
  return `${student.first_Name} ${student.last_Name} обучается в группе ${student.group}. Год поступления ${student.year}`;
}

const students = [
  {
    first_Name: "Булат",
    last_Name: "-",
    group: "ТРП-3-22",
    year: 2022,
  },
  {
    first_Name: "Сайдаш",
    last_Name: "-",
    group: "ТРП-3-22",
    year: 2022,
  },
  {
    first_Name: "Иделия",
    last_Name: "-",
    group: "ТРП-3-22",
    year: 2022,
  },
];

export function runTask() {
  return students.map((student) => studentInfoToString(student));
}
