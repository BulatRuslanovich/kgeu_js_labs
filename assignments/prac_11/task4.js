// INFO: Создаёт замыкание для проверки пароля на совпадение
function createPass(str1) {
  function guessPass(str2) {
    return str1 === str2;
  }

  return guessPass;
}

export function runTask() {
  const passCheck = createPass("1234");
  return [
    `guessPass('1234') -> ${passCheck("1234")}`,
    `guessPass('12345') -> ${passCheck("12345")}`,
  ];
}
