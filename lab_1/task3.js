for (let i = 1; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        for (let k = 0; k < 10; k++) {
            if (i**3 + j**3 + k**3 === i * 100 + j * 10 + k) {
                console.log(i * 100 + j * 10 + k);
            }
        }
    }
}