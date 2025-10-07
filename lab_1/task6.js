let res = '';

for (let i = 1; i < 10; i++) {
    if (i === 1) {
        res += `-${i}-`;
    } else if (i === 9) {
        res += `${i}-`;
    } else {
        res += `${i}-`;
    }
}

console.log(res)
