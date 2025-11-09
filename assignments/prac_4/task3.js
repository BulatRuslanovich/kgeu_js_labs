// Показывает объект с нестандартными ключами
const obj = {
  "1x": 1,
  y2: 2,
  "z-z": 3,
  "d 4": 4,
};

export function runTask() {
  return Object.entries(obj).map(([key, value]) => `${key}: ${value}`);
}
