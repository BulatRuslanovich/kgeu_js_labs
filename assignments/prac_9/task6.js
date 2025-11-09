// INFO: Проверяет URL вида http(s)://www.domain.{com|ru}
// ^https?:\/\/www\.[a-zA-Z0-9.-]+\.(com|ru)$:
//   ^             — начало строки: запрещает лишние символы перед URL;
//   https?        — "http" с необязательной буквой "s" (http или https);
//   :\/\/         — экранированная последовательность "://";
//   www\.         — фиксированное поддоменное имя "www.";
//   [a-zA-Z0-9.-]+ — доменное имя из букв, цифр, точек и дефисов (не пустое);
//   \.            — точка перед доменной зоной;
//   (com|ru)      — разрешены только зоны com или ru;
//   $             — конец строки: исключает постфиксы наподобие /path;
//   флагов нет    — проверяем строго одно значение через test.
const rx = /^https?:\/\/www\.[a-zA-Z0-9.-]+\.(com|ru)$/;

const data = [
  "https://www.yandex.ru",
  "http://www.google.com",
  "https://example.com",
  "http://www.example.org",
];

function validateUrl(url) {
  return rx.test(url);
}

export function runTask() {
  return data.map(
    (url) => `"${url}": ${validateUrl(url) ? "valid" : "invalid"}`,
  );
}
