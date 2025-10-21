function func() {
    let now = new Date();
    let endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    
    return Math.floor((endOfDay - now) / 1000);
}

console.log(func() / 3600);