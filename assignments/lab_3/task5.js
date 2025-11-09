// INFO: Повторяет символы строки, ориентируясь на цифры перед ними
function repeatCharacters(str) {
  let currentDigits = "";
  let res = "";

  for (let i = 0; i < str.length; i += 1) {
    const char = str[i];
    if (char >= "0" && char <= "9") {
      currentDigits += char;
    } else if (currentDigits !== "") {
      const lastDigit = parseInt(currentDigits[currentDigits.length - 1], 10);
      res += char.repeat(lastDigit);
    }
  }

  return res;
}

export function runTask() {
  const samples = ["3a2b5c2d", "3xyz", "3a443c1d", "1111"];
  return samples.map((value) => `"${value}" -> "${repeatCharacters(value)}"`);
}
