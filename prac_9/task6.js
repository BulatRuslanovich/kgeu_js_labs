import { GREEN, RED, RESET } from './colors.js';

const rx = /^https?:\/\/www\.[a-zA-Z0-9.-]+\.(com|ru)$/;

const data = [
    'https://www.yandex.ru',
    'http://www.google.com',
    'https://example.com',
    'http://www.example.org'
];

data.forEach(url => {
    console.log(`"${url}": ${rx.test(url) ? `${GREEN}valid${RESET}` : `${RED}invalid${RESET}`}`);
});

