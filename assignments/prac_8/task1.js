// INFO: Форматирует текущую дату с заданным разделителем
function formatDate(separator) {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${day}${separator}${month}${separator}${year}`;
}

export function runTask() {
  const separators = ["/", "-", "."];
  const today = new Date();
  return separators
    .map((separator) => `${separator} -> ${formatDate(separator)}`)
    .concat(`Текущая дата: ${today.toDateString()}`);
}
