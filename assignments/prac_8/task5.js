// Добавляет заданное количество недель к дате
function addWeeks(date, weeks) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + weeks * 7);
  return newDate;
}

export function runTask() {
  const base = new Date("2020-01-01");
  const deltas = [2, 4, 12];
  return deltas.map(
    (weeks) =>
      `${weeks} недель после ${base.toDateString()} -> ${addWeeks(base, weeks).toDateString()}`,
  );
}
