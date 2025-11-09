// INFO: Находит все пятницы 13-го в заданном диапазоне лет
function findFriday13ths(start, end = start) {
  const dates = [];

  for (let year = start; year <= end; year += 1) {
    for (let month = 0; month < 12; month += 1) {
      const date = new Date(year, month, 13);
      if (date.getDay() === 5) {
        dates.push(`${month + 1}/${13}/${year}`);
      }
    }
  }

  return dates;
}

export function runTask() {
  return [
    `1999-2000: ${findFriday13ths(1999, 2000).join(", ")}`,
    `2000: ${findFriday13ths(2000).join(", ")}`,
  ];
}
