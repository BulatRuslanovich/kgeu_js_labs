function func(names) {
    const length = names.length;
    
    switch (length) {
        case 0:
            return "no one likes this";
        case 1:
            return `${names[0]} likes this`;
        case 2:
            return `${names[0]} and ${names[1]} like this`;
        case 3:
            return `${names[0]}, ${names[1]} and ${names[2]} like this`;
        default:
            return `${names[0]}, ${names[1]} and ${length - 2} others like this`;
    }
}

console.log(func([]));
console.log(func(['Adam']));
console.log(func(['Bob', 'Cindy']));
console.log(func(['Adam', 'Bob', 'Cindy']));
console.log(func(['Adam', 'Bob', 'Cindy', 'lol']));