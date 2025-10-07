let date = new Date();
let current_moment = {
    hour: date.getHours(),
    minute: date.getMinutes(),
    day: date.getDate(),
    month: date.getMonth() + 1,
    year: date.getFullYear()
};

console.log(`Сейчас ${current_moment.hour}:${current_moment.minute} ${current_moment.day}.${current_moment.month}.${current_moment.year}`);