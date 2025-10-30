function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

console.log('formatNumber(1234): ' + formatNumber(1234));
console.log('formatNumber(12345.67): ' + formatNumber(12345.67));
console.log('formatNumber(123456): ' + formatNumber(123456));