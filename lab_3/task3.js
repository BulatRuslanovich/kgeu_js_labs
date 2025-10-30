function func(str) {
  const rgx = /\b(0[1-9]|[12][0-9]|3[01])[-\/.](0[1-9]|1[0-2])[-\/.]\d{4}\b/g;
  return str.match(rgx) || [];
}

console.log(func("Даты: 31/12/2020, 31-12-2020, 31.12.2020"));