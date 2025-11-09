// Возвращает название дня недели по его номеру
function getDayOfWeek(dayNumber) {
  switch (dayNumber) {
    case 1:
      return "Понедельник";
    case 2:
      return "Вторник";
    case 3:
      return "Среда";
    case 4:
      return "Четверг";
    case 5:
      return "Пятница";
    case 6:
      return "Суббота";
    case 7:
      return "Воскресенье";
    default:
      return "Число должно быть от 1 до 7";
  }
}

export function runTask() {
  const samples = [1, 3, 5, 7, 0, 8];
  return samples.map((value) => `${value} -> ${getDayOfWeek(value)}`);
}
