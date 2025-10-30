function func(str) {
  return /^(\d{4})([- ]?)\d{4}\2\d{4}\2\d{4}$/.test(str);
}

console.log(func("1234-5678-9012-3456"));
console.log(func("1234 5678 9012 3456"));
console.log(func("1234567890123456")); 
console.log(func("1234567890123456789")); 
console.log(func("1234-5678 9012 3456")); 