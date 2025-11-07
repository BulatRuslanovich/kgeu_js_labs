// Форматирует число, добавляя разделители тысяч запятыми
function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function runTask() {
  const samples = [1234, 12345.67, 123456, 1234567.89];
  return samples.map((value) => `${value} -> ${formatNumber(value)}`);
}
