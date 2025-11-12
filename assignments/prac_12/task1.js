// INFO: Преобразование строки в массив и вывод элементов
export function runTask() {
  const str = "['Adam','Bob','Cindy']";
  const array = JSON.parse(str.replace(/'/g, '"'));

  return [array];
}
