function func(arr) {
    const set = new Set();
    const res = [];

    for (let i of arr) {
        set.add(i);
    }

    set.forEach(e => res.push(e));

    return res;
}

console.log(func([1, 1, 1, 2, 2, 5, 5, 8, 8]));
