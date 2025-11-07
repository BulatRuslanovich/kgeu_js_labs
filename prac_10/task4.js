// Проверяет соответствие строк формату времени hh.mm am/pm
const rgx = /^(0[0-9]|1[0-2])\.[0-5][0-9] (am|pm)$/;

export function runTask() {
  const samples = ["11.59 am", "00.01 pm", "12.00 am"];
  return samples.map((sample) => `${sample}: ${rgx.test(sample)}`);
}
