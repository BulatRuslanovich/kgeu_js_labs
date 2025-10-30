const rgx = /^(0[0-9]|1[0-2])\.[0-5][0-9] (am|pm)$/;
console.log('11.59 am: ' + rgx.test('11.59 am'));
console.log('00.01 pm: ' + rgx.test('00.01 pm'));