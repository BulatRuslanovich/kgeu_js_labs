function power(x, n) {
    if (n < 1) {
        return "Параметр n должен быть ≥ 1";
    }

    let result = 1;
    let count = 0;

    while (count < n) {
        result *= x;
        count++;
    }

    return result;
}

console.log(power(2, 3));
console.log(power(5, 2));
console.log(power(3, 4));
console.log(power(10, 1));
console.log(power(7, 3));
console.log(power(2, 0));