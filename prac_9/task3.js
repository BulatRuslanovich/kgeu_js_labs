import { GREEN, RESET } from './colors.js';

const str = 'aba aea aca aza axa';
const rx = /a[bex]a/g;

let coloredStr = str;
let match;
while ((match = rx.exec(str)) !== null) {
    const original = match[0];
    const colored = `${GREEN}${original}${RESET}`;
    coloredStr = coloredStr.replace(original, colored);
}

console.log(coloredStr);
