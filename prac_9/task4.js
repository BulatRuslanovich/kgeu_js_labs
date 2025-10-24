import { GREEN, RESET } from './colors.js';

const str = 'aba aea aca aza axa a.a a+a a*a';
const rx = /a[b\.\*\+]a/g;


let coloredStr = str;
let match;
while ((match = rx.exec(str)) !== null) {
    const original = match[0];
    const colored = `${GREEN}${original}${RESET}`;
    coloredStr = coloredStr.replace(original, colored);
}

console.log(coloredStr);
