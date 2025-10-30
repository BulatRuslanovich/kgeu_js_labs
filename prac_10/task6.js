const str = 'push pop avada kedavra';
const words = str.match(/\b(\w)(\w*?\1)?\b/gi);
console.log(words);