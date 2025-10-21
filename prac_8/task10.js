function func(date1Str, date2Str) {
    let date1 = new Date(date1Str);
    let date2 = new Date(date2Str);
    
    let diffTime = Math.abs(date2 - date1);
    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    return diffDays;
}

console.log(func('10/21/2025', '01/01/2025') / 30);