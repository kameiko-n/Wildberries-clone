const headerBtn = document.querySelector('.header__button');
const basket = document.querySelector('.basket');
const basketList = document.querySelector('.basket__list');
const basketTotal = document.querySelector('.basket__total');
const basketButton = document.querySelector('.basket__button');

let products = [];

const productsFromStorage = JSON.parse(localStorage.getItem('products'));

export const addProductToBasket = (product) => {
  products.push(product);
  basketList.append(createProduct(product.id, product.name, product.newPrice, product.oldPrice, product.imgSrc));
  localStorage.setItem('products', JSON.stringify(products));
}


const createProduct = (id, name, newPrice, oldPrice, imgSrc) => {
  const basketItem = document.createElement('li');
  const image = document.createElement('img');
  const productInfo = document.createElement('div');
  const productName = document.createElement('p');
  const costs = document.createElement('div');
  const newCost = document.createElement('p');
  const oldCost = document.createElement('p');


  basketItem.className = 'basket__item';
  image.className = 'basket__image';
  productInfo.className = 'basket__info';
  productName.className = 'basket__info-name';
  costs.className = 'basket__info-costs';
  newCost.className = 'basket__info-new-cost';
  oldCost.className = 'basket__info-old-cost';


  basketItem.append(image, productInfo);
  productInfo.append(productName, costs);
  costs.append(newCost, oldCost);

  image.src = imgSrc;
  productName.innerText = name;
  newCost.innerText = `${newPrice} руб.`;
  oldCost.innerText = `${oldPrice} руб.`;

  return basketItem;
}

const initBasket = () => {
  let sum = 0;
  if ('products' in localStorage && productsFromStorage && productsFromStorage.length) {
    productsFromStorage.forEach(product => {
      basketList.append(createProduct(product.id, product.name, product.newPrice, product.oldPrice, product.imgSrc));
      products.push(product);
      sum += product.newPrice;
    });
    basketTotal.innerText = `Итого ${sum} руб.`;
  }
}

headerBtn.addEventListener('click', () => {
  basket.classList.add('show');
  initBasket();
})

basketButton.addEventListener('click', () => {
  basketList.innerHTML = '';
  basketTotal.innerText = `В корзине пока ничего нет`;
  products = [];
  localStorage.setItem('products', JSON.stringify(products));
})