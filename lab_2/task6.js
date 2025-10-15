function func(num) {
    let len = num.toString().length;
    let cnt = 0;

    while (len > 1) {
        let mul = 1

        for (let i of num.toString()) {
            mul *= Number.parseInt(i);
        }

        len = mul.toString().length;
        cnt++;
        num = mul;
    }

    return cnt;
}

console.log(`func(39): ${func(39)}`);
console.log(`func(999): ${func(999)}`);
console.log(`func(4): ${func(4)}`);
