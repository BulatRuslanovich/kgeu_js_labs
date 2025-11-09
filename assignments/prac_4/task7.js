// INFO: Возвращает название дня недели для текущей даты
const days = {
  1: "Понедельник",
  2: "Вторник",
  3: "Среда",
  4: "Четверг",
  5: "Пятница",
  6: "Суббота",
  7: "Воскресенье",
};

function getWeekdayName(date = new Date()) {
  const dayNumber = date.getDay();
  const normalizedDay = dayNumber === 0 ? 7 : dayNumber;
  return days[normalizedDay];
}

export function runTask() {
  return [`Сегодня: ${getWeekdayName()}`];
}
