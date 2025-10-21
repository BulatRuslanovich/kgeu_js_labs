function func(year) {
    let date = new Date(year, 1, 29);
    
    return date.getMonth() === 1;
}

console.log(func(2024)); 
console.log(func(2025));
console.log(func(2400));
