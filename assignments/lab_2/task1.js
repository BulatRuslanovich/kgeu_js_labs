// INFO: Складывает соответствующие элементы двух массивов (с хвостом длинного)
function mergeAndSum(arr1, arr2) {
  const master = arr1.length > arr2.length ? arr1 : arr2;
  const slave = arr1.length > arr2.length ? arr2 : arr1;

  const res = [];

  let i = 0;

  for (; i < slave.length; i += 1) {
    res[i] = slave[i] + master[i];
  }

  for (; i < master.length; i += 1) {
    res[i] = master[i];
  }

  return res;
}

export function runTask() {
  const arr1 = [1, 3, 5, 7, 9, 11];
  const arr2 = [2, 4, 6, 8];
  return [`mergeAndSum -> [${mergeAndSum(arr1, arr2).join(", ")}]`];
}
