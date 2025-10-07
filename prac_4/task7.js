let days = {
    1: 'Понедельник',
    2: 'Вторник',
    3: 'Среда',
    4: 'Четверг',
    5: 'Пятница',
    6: 'Суббота',
    7: 'Воскресенье'
};

let dayNumber = new Date().getDay();
dayNumber = dayNumber === 0 ? 7 : dayNumber;

// Выводим результат
console.log(`Сегодня: ${days[dayNumber]}`);