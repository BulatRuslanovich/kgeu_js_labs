let sumNum = 0;
for (let i = 1; i < 1001; i++) {
    if ((i % 3 === 0 || i % 5 === 0) && i % 15 !== 0) {
        sumNum += i;
    }
}

console.log(sumNum);