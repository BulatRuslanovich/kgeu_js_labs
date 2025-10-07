function isPrime(number) {
    if (number <= 1) return false;
    if (number <= 3) return true;
    if (number % 2 === 0 || number % 3 === 0) return false;

    for (let i = 5; i * i <= number; i += 6) {
        if (number % i === 0 || number % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}

function getPrimesUpTo(num) {
    if (num < 2) return "Простых чисел нет (число должно быть ≥ 2)";

    const primes = [];
    for (let i = 2; i <= num; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }

    return `Простые числа до ${num}: ${primes.join(', ')}`;
}

console.log(getPrimesUpTo(10));

console.log(getPrimesUpTo(20));

console.log(getPrimesUpTo(1));

console.log(getPrimesUpTo(30));