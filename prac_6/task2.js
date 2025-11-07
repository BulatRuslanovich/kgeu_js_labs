// Возвращает список високосных лет в заданном интервале
function listLeapYears(start, end) {
  const res = [];
  for (let year = start; year <= end; year += 1) {
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
      res.push(year);
    }
  }
  return res;
}

export function runTask() {
  const start = 2000;
  const end = 2023;
  return [
    `Период: ${start}–${end}`,
    `Високосные годы: ${listLeapYears(start, end).join(", ")}`,
  ];
}
