// INFO: Рассчитывает процент инфляции по потребительской корзине за период
function parseBasket(basket) {
  return basket.split(",").map((item) => {
    const [countPart, productPart] = item.split("*");

    if (!productPart) {
      throw new Error(`Неверный формат элемента корзины: "${item.trim()}"`);
    }

    const count = Number.parseInt(countPart.trim(), 10);
    const product = productPart.trim();

    if (Number.isNaN(count) || count < 0) {
      throw new RangeError(`Количество должно быть неотрицательным числом: "${item.trim()}"`);
    }

    if (product.length === 0) {
      throw new Error(`Не удалось определить товар в записи: "${item.trim()}"`);
    }

    return { product, count };
  });
}

function calculateBasketCost(data, basketItems, year) {
  const prices = data[year];

  if (!prices) {
    throw new Error(`Отсутствуют данные о ценах за ${year} год`);
  }

  return basketItems.reduce((total, { product, count }) => {
    if (!(product in prices)) {
      throw new Error(`Отсутствует цена для товара "${product}" за ${year} год`);
    }
    return total + count * prices[product];
  }, 0);
}

export function calculateInflation(data, basket, startYear, endYear) {
  if (startYear > endYear) {
    throw new RangeError("Начальный год не может быть больше конечного");
  }

  const basketItems = parseBasket(basket);
  const startCost = calculateBasketCost(data, basketItems, startYear);
  const endCost = calculateBasketCost(data, basketItems, endYear);

  if (startCost === 0) {
    throw new Error("Стоимость корзины в начальном году равна нулю, инфляцию вычислить нельзя");
  }

  const inflation = ((endCost - startCost) / startCost) * 100;
  return Number(inflation.toFixed(2));
}

export function runTask() {
  const basket = "1 * meat, 4 * cheese, 2 * candy, 4 * milk";

  const data = {
    2019: { meat: 1.25, cheese: 1, candy: 0.5, milk: 0.4 },
    2020: { meat: 1.25, cheese: 1.25, candy: 0.7, milk: 0.5 },
    2021: { meat: 2.5, cheese: 1, candy: 1, milk: 0.6 },
  };

  const inflation = calculateInflation(data, basket, 2019, 2021);

  return [`Инфляция за период 2019-2021: ${inflation}%`];
}

