// 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины.
// Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
// Товары в корзине хранятся в массиве. Задачи:
// a) Организовать такой массив для хранения товаров в корзине;
// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

const basketItems = ['Блендер', 'Соковыжималка', 'Смартфон', 'Фитнес браслет'];
const ItemsCost = [['Блендер', 5800], ['Соковыжималка', 12850], ['Смартфон', 84500], ['Фитнес браслет', 15250]];
let m = ' - ноль';
let b = ' - чётное число';
let c = ' - нечётное число';
let d = -1;
do {
    d++;
        if (d === 0) {
            alert(d + m);
        } else if (d % 2 == 0) {
            alert(d + b);
        } else {
            alert(d + c);
        }
    } while (d < 10);

const getItemPrice = (item, array) => {
  const items = [];
  const costs = [];

  for (let i = 0; i < array.length; i++) {
    items.push(array[i][0]);
    costs.push(array[i][1]);
  }

  return costs[items.indexOf(item)];
};

const countBasketPrice = (basketArr, costArr) => {
  let totalCost = 0;
  for (let i = 0; i < basketArr.length; i++) {

    totalCost += getItemPrice(basketArr[i], costArr);
  }
  return totalCost;
};
console.log('Массив корзины: ' + basketItems);
console.log('Массив стоимости каждого товара: ' + ItemsCost);
console.log('Вывод полной стоимости корзины: ' + countBasketPrice(basketItems, ItemsCost));