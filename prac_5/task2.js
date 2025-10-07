const obj_A = {
  valueOf() { return 22; }
};

const obj_B = {
  valueOf() { return 33; }
};

console.log(obj_A + obj_B);
