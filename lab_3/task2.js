function func(str) {
  const mt = str.match(/[aeiou]/gi);
  return mt ? mt.length : 0;
}

console.log(func("The Russian Federation"));