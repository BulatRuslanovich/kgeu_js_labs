// INFO: Возвращает название месяца для переданной даты
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function getMonthName(date) {
  return months[date.getMonth()];
}

export function runTask() {
  const sampleDates = [
    new Date("2009-08-25"),
    new Date(),
    new Date("1997-01-15"),
  ];
  return sampleDates.map(
    (date) => `${date.toDateString()} -> ${getMonthName(date)}`,
  );
}
