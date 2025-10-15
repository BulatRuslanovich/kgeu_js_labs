function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function createMatrix(size) {
    const arr = Array.from(Array(size), () => Array.from(Array(size)));

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            arr[i][j] = getRandomInt(9);
        }
    }

    return arr;
}

function mulMatrix(A, B) {
    const rowsA = A[0].length;
    const colsA = A.length;
    const colsB = B.length;
    const C = Array.from(Array(rowsA), () => Array(colsB).fill(0));

    for (let i = 0; i < rowsA; i++) {
        for (let j = 0; j < colsB; j++) {
            for (let k = 0; k < colsA; k++) {
                C[i][j] += A[i][k] * B[k][j];
            }
        }
    }
    return C;
}


console.log(mulMatrix(createMatrix(3), createMatrix(3)));







