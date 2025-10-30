const nums = Array.from({length: 5}, () => Math.floor(Math.random() * 9) + 1).join(' ');
const res = nums.replace(/\d+/g, match => Math.pow(parseInt(match), 2));
console.log(res);