function func(str) {
    const _str = str.length % 2 === 0 ? str : str + '_';
    const res = [];
    
    for (let i = 0; i < _str.length; i += 2) {
        res.push(_str.substring(i, i + 2));
    }
    
    return res;
}

console.log(func('qwe'));
console.log(func('qwer'));
