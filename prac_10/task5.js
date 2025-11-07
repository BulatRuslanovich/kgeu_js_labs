// Проверяет, лежит ли год в диапазоне 1500-1800 включительно
const rgx = /^(1[5-7][0-9]{2}|1800)$/;

export function runTask() {
  const samples = ["1500", "1800", "1499", "1701"];
  return samples.map((sample) => `${sample}: ${rgx.test(sample)}`);
}
