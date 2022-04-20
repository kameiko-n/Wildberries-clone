const productsItems = document.getElementById("products");
import { basketIcon, closeIcon } from "./variablesCardIcons.js"

const getProducts = () => {
    return new Promise((resolve, reject) => {
        fetch("https://625edd553b039517f1fdb9e1.mockapi.io/products")
        .then(response => response.json())
        .then(users => resolve(users))
    })
}

getProducts().then(products => {
    products.forEach(item => {
        const productId = item.id;
        const productName = item.name;
        const productOldPrice = item.oldPrice;
        const productNewPrice = item.newPrice;
        const productSale = item.sale;
        const productImage = item.imgSrc;
    
        let templete = 
                        `<div class="card" id="${productId}">

                        <div class="card__content">
                        <img src="${productImage}" alt="${productName}" class="card__photo">
                        <a href="#popup" class="card__fast-view popup__link">Быстрый просмотр</a>
                        <div class="card__bottom">
                            <p class="card__sale-value">${productSale}%</p>
                            <button class="card__add-in-basket-btn">
                                ${basketIcon}
                            </button>
                        </div>
                        </div>

                        <div class="card__prices">
                        <p class="card__new-price">${productNewPrice}р</p>
                        <p class="card__old-price">${productOldPrice}р</p>
                        </div>
                        <h3 class="card__title">${productName}</h3>

                        <div id="popup" class="popup">
                        <div class="popup-body">
                            
                                <img src="${productImage}" alt="${productName}" class="popup-photo">
                                <a href="/" class="popup-close close-popup">
                                ${closeIcon}
                                </a>
                           
                        </div>
                        </div>`;
        productsItems.insertAdjacentHTML("beforeend", templete);
    })
})