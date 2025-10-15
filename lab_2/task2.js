function func(str) {
    let res = "";
    const isLowercase = (char) => char === char.toLowerCase();
    
    for (let ch of str) {
        res += !isLowercase(ch) ? ch.toLowerCase() : ch.toUpperCase();
    }

    return res;
}

console.log(func('HeLlO wOrLd'));
