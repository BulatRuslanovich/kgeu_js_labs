function func(a, b) {
    const keysToKeep = new Set(Object.keys(b));

    Object.keys(a).forEach(key => {
        if (!keysToKeep.has(key)) {
            delete a[key];
        }
    });

    return a;
}

let a = {'a': 1, 'b': 2, 'c': 3, 'd': 4};
let b = {'a': 3, 'b': 4};
console.log(func(a, b)); // {}

