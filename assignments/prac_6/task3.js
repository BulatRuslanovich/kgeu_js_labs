// INFO: Подсчитывает количество заданного символа в строке без учёта регистра
function countCharacter(targetChar, str) {
  const low = targetChar.toLowerCase();
  let cnt = 0;

  for (const ch of str) {
    if (ch.toLowerCase() === low) cnt += 1;
  }

  return cnt;
}

export function runTask() {
  const text = "Amsterdam is the capital of the Netherlands";
  return [`Строка: "${text}"`, `Количество "a": ${countCharacter("a", text)}`];
}
