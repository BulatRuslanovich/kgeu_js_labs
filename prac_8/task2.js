function func(month, year) {
    return new Date(year, month, 0).getDate();
}

console.log(func(1, 2012));
console.log(func(2, 2012));
console.log(func(2, 2013));
console.log(func(12, 2012));
