import { GREEN, RESET } from './colors.js';

const str = 'x1x x2x x3x x4x x5x xbx xvx';
const rx = /x[0-9]x/g;

let coloredStr = str;
let match;
while ((match = rx.exec(str)) !== null) {
    const original = match[0];
    const colored = `${GREEN}${original}${RESET}`;
    coloredStr = coloredStr.replace(original, colored);
}

console.log(coloredStr);
