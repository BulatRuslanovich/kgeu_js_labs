// Сравнивает язык интерфейса и предлагает переключиться на русский
function chooseLanguage(lang, confirmSwitch) {
  const l = lang === "Русский" ? true : confirmSwitch();
  const l2 = lang === "Русский" || confirmSwitch();
  return { l, l2 };
}

export function runTask() {
  const lang = "Русский";
  const confirmSwitch = () => {
    runTask.confirmCalls += 1;
    return false;
  };
  runTask.confirmCalls = 0;
  const { l, l2 } = chooseLanguage(lang, confirmSwitch);
  return [
    `lang = ${lang}`,
    `l (тернарный оператор) = ${l}`,
    `l2 (логическое ИЛИ) = ${l2}`,
    `confirmSwitch вызван: ${runTask.confirmCalls} раз(а)`,
  ];
}
