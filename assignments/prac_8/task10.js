// Вычисляет разницу между двумя датами в днях (и приблизительно в месяцах)
function daysBetween(date1Str, date2Str) {
  const date1 = new Date(date1Str);
  const date2 = new Date(date2Str);

  const diffTime = Math.abs(date2 - date1);
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

export function runTask() {
  const pairs = [
    ["2025-10-21", "2025-01-01"],
    ["2024-05-01", "2024-05-15"],
    ["2023-01-01", "2022-12-01"],
  ];

  return pairs.map(([date1, date2]) => {
    const diff = daysBetween(date1, date2);
    return `${date1} ↔ ${date2} -> ${diff} дней (~${(diff / 30).toFixed(1)} месяцев)`;
  });
}
