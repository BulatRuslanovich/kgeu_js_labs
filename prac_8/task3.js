function func(date) {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    
    return months[date.getMonth()];
}

console.log(func(new Date("08/25/2009")));