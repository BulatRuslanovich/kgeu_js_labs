// INFO: Находит времена формата hh:mm и разбивает их на часы и минуты
const str = "12:00 14:30 18:45";
// /(\d{2}):(\d{2})/g:
//   (\d{2}) — первая группа: две цифры для часов;
//   :       — двоеточие-разделитель;
//   (\d{2}) — вторая группа: две цифры для минут;
//   g       — находим каждое время в строке.
const rgx = /(\d{2}):(\d{2})/g;

function extractTimes(input) {
  return Array.from(input.matchAll(rgx), (match) => ({
    full: match[0],
    hours: match[1],
    minutes: match[2],
  }));
}

export function runTask() {
  const res = extractTimes(str);
  return res.map(
    (item) => `${item.full} -> часы: ${item.hours}, минуты: ${item.minutes}`,
  );
}
