import { GREEN, RESET } from './colors.js';

const str = 'aaa aBa aca aDa afa aZa aga';
const rx = /a[a-fA-Z]a/g;

let coloredStr = str;
let match;
while ((match = rx.exec(str)) !== null) {
    const original = match[0];
    const colored = `${GREEN}${original}${RESET}`;
    coloredStr = coloredStr.replace(original, colored);
}

console.log(coloredStr);
