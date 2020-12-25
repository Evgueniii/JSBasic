"use strict";

const catalog = {
  catalogBlock: null,
  cart: {},
  list: [
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
      }
  ],

init(catalogBlockClass, cart) {
    this.catalogBlock = document.querySelector(`.${catalogBlockClass}`);
    this.cart = cart;
    this.render();
    this.addEventHandlers();
  },

render() {
    if (this.getCatalogListLength() > 0) {
      this.renderCatalogList();
    } else {
      this.renderEmptyCatalog();
    }
  },

addEventHandlers() {
    this.catalogBlock.addEventListener('click', event => this.addToBasket(event));
    },

  addToBasket(event) {
    if (!event.target.classList.contains('product__add-to-cart')) return;
    const id_product = +event.target.dataset.id_product;
    this.cart.addToBasket(id_product);
  },

  getCatalogListLength() {
    return this.list.length;

  renderCatalogList() {
    this.catalogBlock.innerHTML = '';
    this.list.forEach(item => {
      this.catalogBlock.insertAdjacentHTML('beforeend', this.renderCatalogItem(item));
    });
  },

  renderCatalogItem(item) {
    return `<div class="product">
                <h3>${item.product_name}</h3>
                <p>${item.price} руб.</p>
                <button class="product__add-to-cart" data-id_product="${item.id_product}">В корзину</button>
            </div>`;
  },

  renderEmptyCatalog() {
    this.catalogBlock.innerHTML = '';
    this.catalogBlock.insertAdjacentHTML('beforeend', `Каталог товаров пуст.`);
  },
};

const cart = {
  cartBlock: null,
  clrCartButton: null,
  catalogList: [],
  goods: [
    {
        id_product: 001,
        product_name: "Блендер",
        price: 5800,
        quantity: 2
    },
  ],

  init(cartBlockClass, clrCartButton, catalogList) {
    this.cartBlock = document.querySelector(`.${cartBlockClass}`);
    this.clrCartButton = document.querySelector(`.${clrCartButton}`);
    this.catalogList = catalogList;

    this.addEventHandlers();
    this.render();
  },

  addEventHandlers() {
    this.clrCartButton.addEventListener('click', this.dropCart.bind(this));
  },

  dropCart() {
    this.goods = [];
    this.render();
  },

  render() {
    if (this.getCartGoodsLength() > 0) {
      this.renderCartList();
    } else {
      this.renderEmptyCart();
    }
  },

  findProduct(id_product) {
    return this.catalogList.find(product => product.id_product === id_product);
  },

  addToBasket(id_product) {
    const product = this.findProduct(id_product);

    if (product) {
      this.goods.push({...product});
      this.render();
    } else {
      alert('Ошибка добавления!');
    }

  },

  getCartGoodsLength() {
    return this.goods.length;
  },

  renderEmptyCart() {
    this.cartBlock.innerHTML = '';
    this.cartBlock.insertAdjacentHTML('beforeend', 'Корзина пуста.');
  },

  renderCartList() {
    this.cartBlock.innerHTML = '';
    this.goods.forEach(item => {
      this.cartBlock.insertAdjacentHTML('beforeend', this.renderCartItem(item));
    });
  },

  renderCartItem(item) {
    return `<div>
                <h3>${item.product_name}</h3>
                <p>${item.price} руб.</p>
                <p>${item.quantity} шт.</p>
            </div>`;
  },
};

catalog.init('catalog', cart);
cart.init('cart', 'clr-cart', catalog.list);