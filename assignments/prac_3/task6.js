// INFO: Преобразует температуру между шкалами Цельсия и Фаренгейта
const celsiusToFahrenheit = (celsius) => (celsius * 9) / 5 + 32;
const fahrenheitToCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;

export function runTask() {
  const samples = [
    { type: "C→F", value: 0, result: celsiusToFahrenheit(0) },
    { type: "C→F", value: 100, result: celsiusToFahrenheit(100) },
    { type: "F→C", value: 32, result: fahrenheitToCelsius(32) },
    { type: "F→C", value: 212, result: fahrenheitToCelsius(212) },
  ];

  return samples.map(
    ({ type, value, result }) => `${type} ${value} -> ${result.toFixed(2)}`,
  );
}
