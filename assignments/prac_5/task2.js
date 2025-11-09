// INFO: Показывает, как переопределённый valueOf влияет на сложение объектов
const objA = {
  valueOf() {
    return 22;
  },
};

const objB = {
  valueOf() {
    return 33;
  },
};

function addObjects(a, b) {
  return a + b;
}

export function runTask() {
  return [`objA + objB = ${addObjects(objA, objB)}`];
}
