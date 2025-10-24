import { GREEN, RED, RESET } from './colors.js';

const rx = /\b\w+\b/g;

const data = [
    'Oh, hey there! What is going on? Tell me.',
    'Hello World! 1 23 JavaScript 456',
    '  '
];

data.forEach(str => {
    const wordCount = str.match(rx)?.length ?? 0;
    
    if (wordCount > 0) {
        console.log(`"${str}" - ${GREEN}Word count: ${wordCount}${RESET}`);
    } else {
        console.log(`"${str}" - ${RED}No words found${RESET}`);
    }
});
