const headerBtn = document.querySelector('.header__button');
const basket = document.querySelector('.basket');
const basketList = document.querySelector('.basket__list');
const basketTotal = document.querySelector('.basket__total');
const basketDelete = document.querySelector('.basket__delete');

const productCount = document.createElement('p');
productCount.className = 'product__count';
headerBtn.append(productCount);

function showProductCount() {
  const products = JSON.parse(localStorage.getItem('products'));

  if (products.length <= 0) {
    productCount.classList.add('hide');
  } else {
    productCount.innerText = `${products.length}`;
  }
};

showProductCount();

let products = [];
let sum = 0;

export const addProductToBasket = (product) => {
  products.push(product);
  localStorage.setItem('products', JSON.stringify(products));
  showProductCount();
}

const createProduct = (id, name, newPrice, oldPrice, imgSrc) => {
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

    showProductCount();
  })
  return basketItem;
}

const initBasket = () => {
  sum = 0;
  const productsFromStorage = JSON.parse(localStorage.getItem('products'));
  showProductCount();

  if ('products' in localStorage && productsFromStorage && productsFromStorage.length) {
    basketList.innerHTML = '';
    productsFromStorage.forEach(product => {
      basketList.append(createProduct(product.id, product.name, product.newPrice, product.oldPrice, product.imgSrc));
      products.push(product);
      sum += product.newPrice;
    });

    basketTotal.innerText = `Итого ${sum} руб.`;
    showProductCount();
  }
}

headerBtn.addEventListener('click', () => {
  basket.classList.add('show');
  initBasket();
})

basketDelete.addEventListener('click', () => {
  basketList.innerHTML = '';
  basketTotal.innerText = `В корзине пока ничего нет`;
  products = [];
  localStorage.setItem('products', JSON.stringify(products));
  showProductCount();
})