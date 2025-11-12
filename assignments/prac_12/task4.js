// INFO: Функция для расчета углов круговой диаграммы
function calculatePieChartAngles(inputStr) {
  const obj = JSON.parse(inputStr);
  const total = Object.values(obj).reduce((sum, val) => sum + val, 0);
  const result = {};

  for (const [key, value] of Object.entries(obj)) {
    result[key] = Math.round((value / total) * 360);
  }

  return JSON.stringify(result);
}

export function runTask() {
  var sample = '{"A": 4, "B": 5, "C": 6, "D": 1, "E": 4}';

  return [
    `Исходная строка: ${sample}`,
    `Результат: ${calculatePieChartAngles(sample)}`,
  ];
}
