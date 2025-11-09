// INFO: Определяет, является ли переданный год високосным
function isLeapYear(year) {
  const date = new Date(year, 1, 29);
  return date.getMonth() === 1;
}

export function runTask() {
  const samples = [2024, 2025, 2400, 2100];
  return samples.map(
    (year) => `${year} -> ${isLeapYear(year) ? "високосный" : "не високосный"}`,
  );
}
