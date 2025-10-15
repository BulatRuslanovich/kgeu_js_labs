function func(str) {
    const capitalaze = (str) => str[0].toUpperCase() + str.substring(1);
    
    return str.split(" ").map(capitalaze).join(" ");
}

console.log(func('hello world how are you'));
