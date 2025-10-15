function func(arr1, arr2) {
    const master = arr1.length > arr2.length ? arr1 : arr2;
    const slave = arr1.length > arr2.length ? arr2 : arr1;

    const res = [];

    let i = 0;

    for (; i < slave.length; i++) {
        res[i] = slave[i] + master[i];
    }

    for (; i < master.length; i++) {
        res[i] = master[i];
    }

    return res;
}


console.log(func([1, 3, 5, 7, 9, 11],  [2, 4, 6, 8]));

