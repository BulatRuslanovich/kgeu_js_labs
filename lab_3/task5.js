function func(str) {
  let current = '';
  let res = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char >= '0' && char <= '9') {
      current += char;
    } else {
      if (current !== '') {
        const lastDigit = current[current.length - 1];
        const count = parseInt(lastDigit);
        res += char.repeat(count);
      }
    }
  }

  return res;
}


console.log(func("3a2b5c2d"));
console.log(func("3xyz")); 
console.log(func("3a443c1d")); 
console.log(func("1111"));