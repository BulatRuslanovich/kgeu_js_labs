// INFO: Определяет, приходится ли дата на выходной день
function isWeekend(dateStr) {
  const date = new Date(dateStr);
  const day = date.getDay();
  return day === 0 || day === 6;
}

export function runTask() {
  const samples = ["Oct 17, 2020", "Sep 1, 2020", new Date().toDateString()];
  return samples.map(
    (sample) =>
      `${sample} -> ${isWeekend(sample) ? "выходной" : "рабочий день"}`,
  );
}
