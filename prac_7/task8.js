function func(num, arr) {
  const res = [];
  arr = arr.sort().reverse(); 

  while (num > 0) {
    let last = arr[0];

    if (num >= last) {
      num -= last;
      res.push(last);
    } else {
      arr = arr.slice(1);
    }
  }

  return res;
}


console.log(func(96, [20, 25, 10, 2, 1]));
