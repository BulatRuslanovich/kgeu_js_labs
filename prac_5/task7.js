function Seller(name, itemsSold) {
  this.name = name;
  this.itemsSold = Number(itemsSold) || 0;

  this.sell = function(something) {
    this.itemsSold += 1;
    return `Менеджер ${this.name} продал ${something}. Теперь у него ${this.itemsSold} продаж.`;
  };
}

const adam = new Seller("Adam", 0);

console.log(adam.sell("телефон"));    
console.log(adam.sell("наушники"));
console.log(adam.sell("адаптер"));    

