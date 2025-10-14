function func(str) {
  const res = str.split(" ");
  const real_res = [];

  for (let word of res) {
    if (word.length >= 5) {
      real_res.push(word.split("").reverse().join(""));
    } else {
      real_res.push(word);
    }
  }

  return real_res.join(" ");
}


console.log(func("Hello world this is a test"));
