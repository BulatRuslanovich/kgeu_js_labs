function func(str) {
    const reverse = (str) => str.split("").reverse().join("");
    
    return str.split(" ").map(reverse).join(" ");
}

console.log(func('hello world how are you'));
