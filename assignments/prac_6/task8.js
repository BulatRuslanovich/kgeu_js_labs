// INFO: Разбивает строку на две половины, дополняя символом '_' при нечётной длине
function splitInHalf(str) {
  const normalized = str.length % 2 === 0 ? str : `${str}_`;
  const middle = normalized.length / 2;
  return [normalized.substring(0, middle), normalized.substring(middle)];
}

export function runTask() {
  const samples = ["qweac", "qweraa", "abc"];
  return samples.map(
    (value) => `${value} -> ${splitInHalf(value).join(" | ")}`,
  );
}
