
function func(num) {
    if (num <= 0) return '0.00';
    
    let sum = 0;
    let d = 1;
    
    for (let i = 0; i < num; i++) {
        sum += 1 / d;
        d += 3;
    }
    
    return sum.toFixed(2);
}



console.log(func(1));

console.log(func(2));

console.log(func(5));