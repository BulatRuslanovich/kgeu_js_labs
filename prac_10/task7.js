const str = 'sayHi() checkAge() showMessage()';
const funcs = str.match(/\b\w+(?=\()/g);
console.log(funcs);