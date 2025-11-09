// INFO: Возвращает число секунд до конца текущего дня
function secondsUntilEndOfDay(date = new Date()) {
  const endOfDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate() + 1,
  );
  return Math.floor((endOfDay - date) / 1000);
}

export function runTask() {
  const seconds = secondsUntilEndOfDay();
  const hours = (seconds / 3600).toFixed(2);
  return [`Секунд до конца дня: ${seconds}`, `Часов до конца дня: ${hours}`];
}
