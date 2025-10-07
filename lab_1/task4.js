let x = 98;
let y = 33;

let a = x > y ? x : y;
let b = x > y ? y : x;

let r = 100;

let q;

while (r > 0) {
    q = Math.trunc(a / b);
    r = a % b;

    a = b;
    b = r;
}

console.log(a);



