function func(date, weeks) {
    let newDate = new Date(date);
    newDate.setDate(newDate.getDate() + (weeks * 7));
    
    return newDate;
}

console.log(func(new Date('2020-01-01'), 2));
console.log(func(new Date('2020-01-01'), 4));