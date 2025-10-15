function func(arr) {
    let res = {};
    
    for (let ch of arr) {
        if (res[ch] === undefined) {
            res[ch] = 1;
        } else {
            res[ch] += 1;
        }
    }

    return res;
}

console.log(func(['a', 'a', 'b', 'c', 'c', 'c']));
