let count = 0;

for (let i = 10; i <= 99; i++) {
    let remainder = i % 7;
    if ([1, 2, 5].includes(remainder)) {
        console.log(i);
        count++;
    }
}

console.log(`Количество: ${count}`);
