// Меняет регистр каждой буквы строки на противоположный
function invertCase(str) {
  let res = "";
  const isLowercase = (char) => char === char.toLowerCase();

  for (const ch of str) {
    res += !isLowercase(ch) ? ch.toLowerCase() : ch.toUpperCase();
  }

  return res;
}

export function runTask() {
  const sample = "HeLlO wOrLd";
  return [`"${sample}" -> "${invertCase(sample)}"`];
}
