function squares(num) {
  let res = [];
  for (const i of range(num)) {
    res.push((i + 1) * (i + 1));
  }

  return res;
}

console.log(`squares(5): ${squares(5)}`);


function range(n, start = 0, step = 1) {
  let res = [];
  let i = start;

  while (n > 0) {
    res.push(i)
    i += step;
    n -= 1;
  }

  return res;
}

console.log(`range(6, 3, 2): ${range(6, 3, 2)}`);


function random(n, min = 0, max = 1) {
  if (max < min) {
    max, min = min, max;
  }

  let res = [];
  
  while (n > 0) {
    res.push((Math.floor(Math.random() * (max - min + 1)) + min))
    n -= 1;
  }

  return res;
}

console.log(`random(5, -10, 10): ${random(5, -10, 10)}`);


function primes(n) {
    const isPrime = (num, primes) => {
      const limit = Math.sqrt(num);

      for (const prime of primes) {
        if (prime > limit) break;
        if (num % prime === 0) return false;
      }
      return true;
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

console.log(`primes(6): ${primes(6)}`);











