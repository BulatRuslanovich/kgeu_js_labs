// INFO: Возвращает название дня недели последнего дня заданного месяца
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function getLastDayOfMonthName(year, month) {
  const lastDay = new Date(year, month, 0);
  return days[lastDay.getDay()];
}

export function runTask() {
  const samples = [
    { year: 2020, month: 2 },
    { year: 2020, month: 12 },
    { year: 2025, month: 10 },
  ];

  return samples.map(
    ({ year, month }) =>
      `Последний день ${month}.${year}: ${getLastDayOfMonthName(year, month)}`,
  );
}
