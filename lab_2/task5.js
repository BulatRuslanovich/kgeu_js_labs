function func(num, q, pm = "") {
    const len = num.toString().length;
    return pm + '0'.repeat(q - len) + num;
}

console.log(func(12345, 7, '+'));
