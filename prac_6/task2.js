function func(start, end) {
    var res = "";
    // NOTE: я знаю проблему конкотонации строк, но спецально сделаю по тупому

    for (let y = start; y <= end; y++) {
        if ((y % 400 === 0) || (y % 4 === 0 && y % 100 !== 0)) {
            res += y + " ";
        }
    }

    return res;
}


console.log(func(2000, 2023));
