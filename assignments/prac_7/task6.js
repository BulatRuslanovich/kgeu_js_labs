// INFO: Создаёт матрицу заданного размера и заполняет случайными числами
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function createMatrix(rows, cols, generator = getRandomInt) {
  return Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => generator(10)),
  );
}

export function runTask() {
  const rows = 5;
  const cols = 3;
  const matrix = createMatrix(rows, cols);
  const formatted = matrix.map((row) => row.join(" "));
  return [`Матрица ${rows}x${cols}:`, ...formatted];
}
