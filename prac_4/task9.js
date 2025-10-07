function func(obj) {
    if (obj == null) {
        return true;
    }

    return Object.getOwnPropertyNames(obj).length === 0;
}


const emptyObj = {};
console.log('empty:', func(emptyObj)); // true

const nonEmptyObj = { name: 'Lol' };
console.log('non empty:', func(nonEmptyObj)); // false

console.log('null:', func(null)); // true

console.log('undefined:', func(undefined)); // true