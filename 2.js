// Задача 2. Продолжить работу с интернет-магазином:
// 2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
// 2.2. Реализуйте такие объекты.
// 2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.


  const Basket = {
    goods: [
      {
        id_product: 001,
        product_name: "Блендер",
        price: 5800,
        quantity: 1
      },
      {
        id_product: 002,
        product_name: "Соковыжималка",
        price: 12850,
        quantity: 1
      },
      {
        id_product: 003,
        product_name: "Смартфон",
        price: 84500,
        quantity: 1
      },
      {
        id_product: 004,
        product_name: "Фитнес браслет",
        price: 15250,
        quantity: 1
      },
    ],
    countBasketPrice() {
      return this.goods.reduce((totalPrice, cartItem) => totalPrice += cartItem.price, 0);
    }
  };

  console.log(Basket.countBasketPrice());