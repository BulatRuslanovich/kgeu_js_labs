// Проверяет корректность формата номера банковской карты
const cardPattern = /^(\d{4})([- ]?)\d{4}\2\d{4}\2\d{4}$/;

function isValidCardNumber(str) {
  return cardPattern.test(str);
}

export function runTask() {
  const samples = [
    "1234-5678-9012-3456",
    "1234 5678 9012 3456",
    "1234567890123456",
    "1234567890123456789",
    "1234-5678 9012 3456",
  ];

  return samples.map((value) => `"${value}" -> ${isValidCardNumber(value)}`);
}
