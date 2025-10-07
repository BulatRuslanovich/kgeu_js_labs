let sal = {
    Adam: 250,
    Bob: 350,
    Cindy: 400,
}

let sum = 0;

for (let key in sal) {
    sum += sal[key];
}

console.log(sum);