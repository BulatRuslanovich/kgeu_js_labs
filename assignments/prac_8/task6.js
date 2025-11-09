// INFO: Считает количество секунд, прошедших с начала текущего дня
function secondsSinceStartOfDay(date = new Date()) {
  const startOfDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
  );
  return Math.floor((date - startOfDay) / 1000);
}

export function runTask() {
  const seconds = secondsSinceStartOfDay();
  const hours = (seconds / 3600).toFixed(2);
  return [`Секунд с начала дня: ${seconds}`, `Часов с начала дня: ${hours}`];
}
