import { GREEN, RED, RESET } from './colors.js';

const rx = /\d+/g;

const data = [
    'Hello World! 1 23 JavaScript 456',
    'No numbers here!'
];

data.forEach(str => {
    const sum = str.match(rx)?.reduce((sum, numStr) => sum + Number(numStr), 0) ?? 0;

    if (sum > 0) {
        console.log(`"${str}" - ${GREEN}Sum: ${sum}${RESET}`);
    } else {
        console.log(`"${str}" - ${RED}No numbers found${RESET}`);
    }
});
