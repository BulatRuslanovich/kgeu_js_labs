function func(start, end) {
  if (end === undefined) {
    end = start;
  }

  const dates = [];

  for (let year = start; year <= end; year++) {
    for (let month = 0; month < 12; month++) {
      const date = new Date(year, month, 13);
      if (date.getDay() === 5) {
        dates.push(`${month + 1}/${13}/${year}`);
      }
    }
  }

  return dates.join(', ');
}

console.log(func(1999, 2000));
console.log(func(2000));

