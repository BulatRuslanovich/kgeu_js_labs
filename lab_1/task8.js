let res = 1;

for (let i = 2; i < 11; i++) {
    let sum = 0;
    for (let j = 1; j < i + 1; j++) {
        sum += j;
    }

    res *= sum;
}

console.log(res);

