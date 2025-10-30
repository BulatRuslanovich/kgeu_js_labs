const str = '12:00 14:30 18:45';
const rgx = /(\d{2}):(\d{2})/g;
const res = Array.from(str.matchAll(rgx), match => [match[0], match[1], match[2]]);
console.log(res);