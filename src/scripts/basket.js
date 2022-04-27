const body = document.querySelector('body');
const headerBtn = document.querySelector('.header__button');
const basket = document.querySelector('.basket');
const basketList = document.querySelector('.basket__list');
const basketTotal = document.querySelector('.basket__total');
const basketDelete = document.querySelector('.basket__delete');

let products = [];
let sum = 0;

const basketObject = {
  showProductCount: () => {
    const products = JSON.parse(localStorage.getItem('products'));
    const productCount = document.querySelector('.product__count');

    if (products.length) {
      productCount.innerText = `${products.length}`;
      productCount.classList.remove('hide');
    } else {
      productCount.classList.add('hide');
    }
  },

  addProductToBasket: (product) => {
    const products = JSON.parse(localStorage.getItem('products'));
    const find = products.find(item => item.id === product.id);
    const message = document.querySelector('.message')

    message.classList.add('show');
    setTimeout(() => {
      message.classList.remove('show')
    }, 1500);

    if (find) {
      message.innerText = 'Товар уже есть в корзине';
      return;
    }

    products.push(product);
    localStorage.setItem('products', JSON.stringify(products));
    basketObject.showProductCount();

  },

  createProduct: (id, name, newPrice, oldPrice, imgSrc) => {
    const basketItem = document.createElement('li');
    const image = document.createElement('img');
    const productInfo = document.createElement('div');
    const productName = document.createElement('p');
    const costs = document.createElement('div');
    const newCost = document.createElement('p');
    const oldCost = document.createElement('p');
    const deleteProduct = document.createElement('button');

    basketItem.className = 'basket__item';
    image.className = 'basket__image';
    productInfo.className = 'basket__info';
    productName.className = 'basket__info-name';
    costs.className = 'basket__info-costs';
    newCost.className = 'basket__info-new-cost';
    oldCost.className = 'basket__info-old-cost';
    deleteProduct.className = 'basket__info-delete';

    basketItem.dataset.productId = id;
    basketItem.append(image, productInfo);
    productInfo.append(productName, costs);
    costs.append(newCost, oldCost, deleteProduct);

    image.src = imgSrc;
    productName.innerText = name;
    newCost.innerText = `${newPrice} руб.`;
    oldCost.innerText = `${oldPrice} руб.`;
    deleteProduct.innerText = "Удалить";

    deleteProduct.addEventListener('click', (event) => {
      const parent = event.target.closest('.basket__item');
      parent.remove();
      products = products.filter(product => +product.id !== +parent.dataset.productId);
      localStorage.setItem('products', JSON.stringify(products));
      sum -= newPrice;

      if (sum <= 0) {
        basketTotal.innerText = `В корзине пока ничего нет`;
      } else {
        basketTotal.innerText = `Итого ${sum} руб.`;
      }

      basketObject.showProductCount();
    })
    return basketItem;
  },

  initBasket: () => {
    body.style.overflow = 'hidden';
    sum = 0;
    const productsFromStorage = JSON.parse(localStorage.getItem('products'));
    basketObject.showProductCount();

    if ('products' in localStorage && productsFromStorage && productsFromStorage.length) {
      basketList.innerHTML = '';
      productsFromStorage.forEach(product => {
        basketList.append(basketObject.createProduct(product.id, product.name, product.newPrice, product.oldPrice, product.imgSrc));
        products.push(product);
        sum += product.newPrice;
      })
      basketTotal.innerText = `Итого ${sum} руб.`;
    }
    //  else {
    //   basket.classList.add('empty');
    // }

    basket.classList.add('show');
  },

  initListeners: () => {
    headerBtn.addEventListener('click', () => {
      basketObject.initBasket();
    })

    basketDelete.addEventListener('click', () => {
      basketList.innerHTML = '';
      basketTotal.innerText = `В корзине пока ничего нет`;
      products = [];
      localStorage.setItem('products', JSON.stringify(products));
      basketObject.showProductCount();
    })
  }
}

export const basketOutput = {
  init: () => {
    const productsFromStorage = JSON.parse(localStorage.getItem('products'));

    if (!('products' in localStorage) && !productsFromStorage) {
      localStorage.setItem('products', JSON.stringify(products));
    }

    const message = document.createElement('div');
    const productCount = document.createElement('p');

    message.className = 'message';
    productCount.className = 'product__count';
    message.innerText = 'Товар успешно добавлен в корзину';

    body.append(message);
    headerBtn.append(productCount);

    basketObject.initListeners();
    basketObject.showProductCount();
  },
  addProduct: (product) => {
    basketObject.addProductToBasket(product);
  }
}