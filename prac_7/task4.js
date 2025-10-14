let arr = [
    {fs: 1, sc: 3},
    {fs: 4, sc: 2},
    {fs: 6, sc: 1},
];

arr = arr.sort((a, b) => a.sc - b.sc);
console.log(arr);
