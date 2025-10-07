// NODE: в первой лабе было что то такое, но тут нет лимитов

function func(num) {
    if (num < 0 || !Number.isInteger(num)) return false;
    
    const digits = num.toString().split('');

    let sum = 0;

    for (let n of digits) {
        sum += Math.pow(n, digits.length);
    }
    
    return sum === num;
}

console.log(func(8208));

console.log(func(122));
