// Возвращает функцию, которая добавляет переданное число к исходному значению
function outside(initial) {
  function inside(num) {
    return initial + num;
  }

  return inside;
}

export function runTask() {
  const addFive = outside(5);
  const addTen = outside(10);
  const diffThree = outside(-3);

  return [
    `outside(5)(7) = ${addFive(7)}`,
    `outside(5)(0) = ${addFive(0)}`,
    `outside(10)(15) = ${addTen(15)}`,
    `outside(-3)(8) = ${diffThree(8)}`,
  ];
}
