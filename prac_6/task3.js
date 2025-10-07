function func(_char, string) {
    const low = _char.toLowerCase();
    let cnt = 0;

    for (let ch of string)
        if (ch.toLowerCase() === low) cnt++;

    return cnt;
}

console.log(func("a", "Amsterdam is the capital of the Netherlands"));