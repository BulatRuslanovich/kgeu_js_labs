let sal = {
    Adam: 250,
    Bob: 350,
    Cindy: 400,
    Donald: "Fired",
}

for (let key in sal) {
    if (typeof sal[key] == "number") {
        sal[key] = sal[key] * 10;
    }
}

console.log(sal);
