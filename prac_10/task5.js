const rgx = /^(1[5-7][0-9]{2}|1800)$/;
console.log('1500: ' + rgx.test('1500'));
console.log('1800: ' + rgx.test('1800'));
console.log('1499: ' + rgx.test('1499'));