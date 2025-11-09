// INFO: Извлекает даты формата ДД-ММ-ГГГГ с различными разделителями
const dateRegex = /\b(0[1-9]|[12][0-9]|3[01])[-/.](0[1-9]|1[0-2])[-/.]\d{4}\b/g;

function extractDates(str) {
  return str.match(dateRegex) || [];
}

export function runTask() {
  const sample = "Даты: 31/12/2020, 31-12-2020, 31.12.2020";
  return [`"${sample}" -> ${JSON.stringify(extractDates(sample))}`];
}
