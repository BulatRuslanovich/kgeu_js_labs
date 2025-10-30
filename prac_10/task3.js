const str = '1+2=  3+4=  5+6=';
const res = str.replace(/(\d+)\+(\d)=/g, (match, a, b) => `${match}${parseInt(a) + parseInt(b)} `);
console.log(res);