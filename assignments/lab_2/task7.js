// INFO: Создаёт случайные матрицы и перемножает их
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function createMatrix(size, generator = () => getRandomInt(9)) {
  return Array.from({ length: size }, () =>
    Array.from({ length: size }, () => generator()),
  );
}

function multiplyMatrices(A, B) {
  const rowsA = A.length;
  const colsA = A[0].length;
  const rowsB = B.length;
  const colsB = B[0].length;

  if (colsA !== rowsB) {
    throw new Error("Матрицы несовместимы для умножения");
  }

  const result = Array.from({ length: rowsA }, () => Array(colsB).fill(0));

  for (let i = 0; i < rowsA; i += 1) {
    for (let j = 0; j < colsB; j += 1) {
      for (let k = 0; k < colsA; k += 1) {
        result[i][j] += A[i][k] * B[k][j];
      }
    }
  }

  return result;
}

export function runTask() {
  const matrixA = createMatrix(3);
  const matrixB = createMatrix(3);
  const product = multiplyMatrices(matrixA, matrixB);

  const format = (matrix) => matrix.map((row) => row.join(" ")).join("\n");

  return [
    "Матрица A:",
    format(matrixA),
    "Матрица B:",
    format(matrixB),
    "A × B:",
    format(product),
  ];
}
