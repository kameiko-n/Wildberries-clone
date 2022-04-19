const headerBtn = document.querySelector('.header__button');
const basket = document.querySelector('.basket');
const basketList = document.querySelector('.basket__list');
const basketTotal = document.querySelector('.basket__total');

const products = [

  {
    "id": 123456,
    "name": "Штаны мужские1",
    "oldPrice": 100,
    "newPrice": 65,
    "sale": 35,
    "imgSrc": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfRvDfX9MQLgugkKX_g-Zvx4UpXlko3qpNmA&usqp=CAU"
  },

  {
    "id": 122456,
    "name": "Штаны мужские2",
    "oldPrice": 100,
    "newPrice": 85,
    "sale": 15,
    "imgSrc": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfRvDfX9MQLgugkKX_g-Zvx4UpXlko3qpNmA&usqp=CAU"
  },

  {
    "id": 726456,
    "name": "Штаны мужские3",
    "oldPrice": 100,
    "newPrice": 90,
    "sale": 10,
    "imgSrc": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfRvDfX9MQLgugkKX_g-Zvx4UpXlko3qpNmA&usqp=CAU"
  }
]
const todosFromStorage = JSON.parse(localStorage.getItem('products'));

const addProductToBasket = () => {
  localStorage.setItem('products', JSON.stringify(todos));
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
  array.forEach(product => {
    basketList.append(createProduct(product.id, product.name, product.newPrice, product.oldPrice, product.imgSrc));
    sum += product.newPrice
  })
  basketTotal.innerText = `Итого ${sum} руб.`;
}

headerBtn.addEventListener('click', () => {
  basket.classList.add('show');
  initBasket();
})