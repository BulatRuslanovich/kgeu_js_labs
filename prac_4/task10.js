function func(a, b) {
    Object.keys(b).forEach(key => delete a[key]);
    return a;
}

let a = {'a': 1, 'b': 2, 'c': 3, 'd': 4};
let b = {'a': 3, 'b': 4};
console.log(func(a, b));

