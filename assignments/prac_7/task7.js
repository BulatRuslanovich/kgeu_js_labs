// Набор вспомогательных функций: range, квадраты, случайные числа, простые
function range(n, start = 0, step = 1) {
  const res = [];
  let i = start;

  while (n > 0) {
    res.push(i);
    i += step;
    n -= 1;
  }

  return res;
}

function squares(num) {
  return range(num).map((value) => (value + 1) * (value + 1));
}

function randomIntegers(count, min = 0, max = 1) {
  let low = min;
  let high = max;
  if (high < low) {
    [low, high] = [high, low];
  }

  const res = [];
  for (let i = 0; i < count; i += 1) {
    res.push(Math.floor(Math.random() * (high - low + 1)) + low);
  }

  return res;
}

function primes(n) {
  const isPrime = (num, knownPrimes) => {
    const limit = Math.sqrt(num);

    for (const prime of knownPrimes) {
      if (prime > limit) break;
      if (num % prime === 0) return false;
    }
    return true;
  };

  if (n <= 0) {
    return [];
  }

  const res = [2];
  let num = 3;

  while (res.length < n) {
    if (isPrime(num, res)) {
      res.push(num);
    }
    num += 2;
  }

  return res;
}

export function runTask() {
  return [
    `squares(5): [${squares(5).join(", ")}]`,
    `range(6, 3, 2): [${range(6, 3, 2).join(", ")}]`,
    `randomIntegers(5, -10, 10): [${randomIntegers(5, -10, 10).join(", ")}]`,
    `primes(6): [${primes(6).join(", ")}]`,
  ];
}
