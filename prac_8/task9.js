function func(year) {
    let date = new Date(year, 1, 29);
    
    return date.getMonth() === 1;
}

console.log(func(2020)); 
console.log(func(2021)); 
console.log(func(2000)); 
console.log(func(1900));