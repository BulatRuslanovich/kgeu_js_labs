function func(str) {
    const _str = str.length % 2 === 0 ? str : str + '_';
    const res = [];

    res.push(_str.substring(0, _str.length / 2))
    res.push(_str.substring(_str.length / 2, _str.length))
    
    // for (let i = 0; i < _str.length; i += 2) {
    //     res.push(_str.substring(i, i + 2));
    // }
    
    return res;
}

console.log(func('qweac'));
console.log(func('qweraa'));
