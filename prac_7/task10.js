function func(arr) {
  var i = 0;
  var zero_cnt = 0;
  while (i < arr.length) {
    if (arr[i] === 0) {
      arr.splice(i, 1);
      zero_cnt += 1;
    } else {
      ++i;
    }
  }

  while (zero_cnt > 0) {
    arr.push(0);
    zero_cnt -= 1;
  }

  return arr;
}


console.log(func([false, true, 1, 2, 0, 3, 0, 4, 0, "hello"]));
