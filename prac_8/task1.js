function func(separator) {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    
    return `${day}${separator}${month}${separator}${year}`;
}

console.log(func('/')); 
console.log(func('-'));