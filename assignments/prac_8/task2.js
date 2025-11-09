// INFO: Возвращает количество дней в указанном месяце и году
function getDaysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

export function runTask() {
  const samples = [
    { month: 1, year: 2012 },
    { month: 2, year: 2012 },
    { month: 2, year: 2013 },
    { month: 12, year: 2012 },
  ];

  return samples.map(
    ({ month, year }) =>
      `${month}.${year} -> ${getDaysInMonth(month, year)} дней`,
  );
}
