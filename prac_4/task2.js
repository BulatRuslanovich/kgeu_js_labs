// Возвращает текущие дату и время в виде объекта
function getCurrentMoment(date = new Date()) {
  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    day: date.getDate(),
    month: date.getMonth() + 1,
    year: date.getFullYear(),
  };
}

export function runTask() {
  const currentMoment = getCurrentMoment();
  const { hour, minute, day, month, year } = currentMoment;
  const paddedMinute = minute.toString().padStart(2, "0");
  const paddedHour = hour.toString().padStart(2, "0");
  return [`Сейчас ${paddedHour}:${paddedMinute} ${day}.${month}.${year}`];
}
