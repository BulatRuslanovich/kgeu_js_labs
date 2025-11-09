// INFO: Суммирует значения зарплат в объекте сотрудников
const salaries = {
  Adam: 250,
  Bob: 350,
  Cindy: 400,
};

function sumSalaries(data) {
  return Object.values(data).reduce((acc, value) => acc + value, 0);
}

export function runTask() {
  return [`Сумма зарплат: ${sumSalaries(salaries)}`];
}
