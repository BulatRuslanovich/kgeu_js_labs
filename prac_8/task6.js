function func() {
    let now = new Date();
    let startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    
    return Math.floor((now - startOfDay) / 1000);
}

console.log(func());