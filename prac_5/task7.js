// Конструктор продавца, считающий количество совершённых продаж
class Seller {
  constructor(name, itemsSold = 0) {
    this.name = name;
    this.itemsSold = Number(itemsSold) || 0;
  }

  sell(item) {
    this.itemsSold += 1;
    return `Менеджер ${this.name} продал ${item}. Теперь у него ${this.itemsSold} продаж.`;
  }
}

export function runTask() {
  const adam = new Seller("Adam", 0);
  const items = ["телефон", "наушники", "адаптер"];
  return items.map((item) => adam.sell(item));
}
