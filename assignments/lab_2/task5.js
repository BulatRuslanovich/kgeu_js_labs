// INFO: Дополняет число ведущими нулями и необязательным префиксом
function padNumber(num, width, prefix = "") {
  const str = num.toString();
  const zeros = Math.max(0, width - str.length);
  return `${prefix}${"0".repeat(zeros)}${str}`;
}

export function runTask() {
  const examples = [
    [12345, 7, "+"],
    [42, 5, "#"],
    [999, 2, "*"],
  ];

  return examples.map(
    ([num, width, prefix]) =>
      `padNumber(${num}, ${width}, "${prefix}") -> "${padNumber(num, width, prefix)}"`,
  );
}
