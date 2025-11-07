// Форматирует строку "лайкнули" в стиле соцсетей по количеству имён
function formatLikes(names) {
  const length = names.length;

  switch (length) {
    case 0:
      return "no one likes this";
    case 1:
      return `${names[0]} likes this`;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    default:
      return `${names[0]}, ${names[1]} and ${length - 2} others like this`;
  }
}

export function runTask() {
  const samples = [
    [],
    ["Adam"],
    ["Bob", "Cindy"],
    ["Adam", "Bob", "Cindy"],
    ["Adam", "Bob", "Cindy", "Lola"],
  ];

  return samples.map(
    (names) => `${JSON.stringify(names)} -> ${formatLikes(names)}`,
  );
}
