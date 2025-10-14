function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

n = 5;
m = 3;

arr = Array.from(Array(n), () => Array.from(Array(m)));

for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        arr[i][j] = getRandomInt(9);
    }
}
   

console.log(arr);







