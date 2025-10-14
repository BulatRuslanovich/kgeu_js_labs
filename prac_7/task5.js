function my_fn(num) {
    let res = "";
    let old_d = -1;

    while (num > 0) {
        let d = num % 10;
        num = Math.floor(num / 10);

        if (d % 2 === 0 && old_d % 2 === 0) {
            res = `${d}-${res}`;
        } else {
            res = `${d}${res}`;
        }


        old_d = d;
    }

    return res;
}


console.log(my_fn(827468));




