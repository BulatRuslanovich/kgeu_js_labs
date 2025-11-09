// INFO: Делает первую букву строки заглавной
function capitalizeFirst(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}

export function runTask() {
  const samples = ["lol hello", "javascript", ""];
  return samples.map((value) => `"${value}" -> "${capitalizeFirst(value)}"`);
}
