// Проверяет URL вида http(s)://www.domain.{com|ru}
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
