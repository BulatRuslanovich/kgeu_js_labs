// Строит строку вида -1-2-...-9-
function buildSequence() {
  let res = "-";
  for (let i = 1; i < 10; i += 1) {
    res += `${i}-`;
  }
  return res;
}

export function runTask() {
  return [buildSequence()];
}
