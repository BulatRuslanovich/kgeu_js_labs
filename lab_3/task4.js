function func1(str) {
  return str
    .replace(/a/gi, '1')
    .replace(/e/gi, '2')
    .replace(/i/gi, '3')
    .replace(/o/gi, '4')
    .replace(/u/gi, '5');
}

function func2(str) {
  return str
    .replace(/1/g, 'a')
    .replace(/2/g, 'e')
    .replace(/3/g, 'i')
    .replace(/4/g, 'o')
    .replace(/5/g, 'u');
}

console.log(func1("Hello World"));
console.log(func2("H2ll4 W4rld"));
