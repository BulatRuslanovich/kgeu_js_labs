// INFO: Подсчитывает количество вхождений каждого элемента массива
function countOccurrences(arr) {
  const res = {};

  for (const ch of arr) {
    res[ch] = (res[ch] ?? 0) + 1;
  }

  return res;
}

export function runTask() {
  const sample = ["a", "a", "b", "c", "c", "c"];
  const counts = countOccurrences(sample);
  return [`${JSON.stringify(sample)} -> ${JSON.stringify(counts)}`];
}
