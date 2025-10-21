function func(dateStr) {
    let date = new Date(dateStr);
    let day = date.getDay();
    
    return day === 0 || day === 6;
}

console.log(func('Oct 17, 2020')); 
console.log(func('Sep 1, 2020')); 