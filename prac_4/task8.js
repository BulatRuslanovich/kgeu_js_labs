// Умножает числовые значения зарплат в объекте на коэффициент
const salaries = {
  Adam: 250,
  Bob: 350,
  Cindy: 400,
  Donald: "Fired",
};

function increaseNumericSalaries(data, multiplier = 10) {
  const updated = { ...data };
  Object.keys(updated).forEach((key) => {
    if (typeof updated[key] === "number") {
      updated[key] *= multiplier;
    }
  });
  return updated;
}

export function runTask() {
  const updated = increaseNumericSalaries(salaries);
  return [`Обновлённые данные: ${JSON.stringify(updated)}`];
}
