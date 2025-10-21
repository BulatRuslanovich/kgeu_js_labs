function func(year, month) {
    let lastDay = new Date(year, month, 0);
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    return days[lastDay.getDay()];
}

console.log(func(2020, 2));
console.log(func(2020, 12));