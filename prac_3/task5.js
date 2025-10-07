function getDayOfWeek(dayNumber) {
    switch (dayNumber) {
        case 1:
            return "Понедельник";
        case 2:
            return "Вторник";
        case 3:
            return "Среда";
        case 4:
            return "Четверг";
        case 5:
            return "Пятница";
        case 6:
            return "Суббота";
        case 7:
            return "Воскресенье";
        default:
            return "Число должно быть от 1 до 7";
    }
}

console.log(getDayOfWeek(1));
console.log(getDayOfWeek(3));
console.log(getDayOfWeek(5));
console.log(getDayOfWeek(7));
console.log(getDayOfWeek(0));
console.log(getDayOfWeek(8));