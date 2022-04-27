import { basketIconCheck, basketIconPlus, closeIcon } from "./variablesCardIcons.js";
import { basketOutput } from "./basket";

const header = document.querySelector(".header");
const searchBtn = document.querySelector(".header__search-sm-btn");
const searchBox = document.querySelector(".header__search-box");
const searchInput = document.querySelector(".header__search-text");
const basketBtn = document.querySelector(".header__button");
const logo = document.querySelector(".logo");
const productsBox = document.querySelector(".products");
const mainTitle = document.querySelector(".title")

const addProductsCard = (products) => {
    products.forEach((item) => {
        const productId = item.id;
        const productName = item.name;
        const productOldPrice = item.oldPrice;
        const productNewPrice = item.newPrice;
        const productSale = item.sale;
        const productImage = item.imgSrc;

        let templete = `<div class="card" data-id="${productId}">
        
                            <div class="card__content" id="cardContent">
                                <img src="${productImage}" alt="${productName}" class="card__photo">
                                <a href="#popup" class="card__fast-view" >Быстрый просмотр</a>
                                <div class="card__bottom">
                                    <p class="card__sale-value">${productSale}%</p>
                                    <button class="card__add-in-basket-btn">${basketIconPlus}</button>
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
                                    <a href="#" class="popup-close">${closeIcon}</a>
                                </div>
                            </div>
                        </div>`;
        productsBox.insertAdjacentHTML("beforeend", templete);
    });
};

const getProducts = () => {
    return new Promise((resolve, reject) => {
        fetch("https://625edd553b039517f1fdb9e1.mockapi.io/products")
            .then((response) => response.json())
            .then((products) => resolve(products));
    });
};

// add Event Listener on Header
header.addEventListener("click", () => {
    // SHOW SEARCHBOX
    if (
        event.target.closest(".header__search-sm-btn") ||
        event.target.closest(".header__search-box.enabled")
    ) {
        logo.classList.add("disabled");
        basketBtn.classList.add("disabled");
        searchBox.classList.add("enabled");
        searchBtn.classList.add("disabled");
    } else {
        logo.classList.remove("disabled");
        basketBtn.classList.remove("disabled");
        searchBox.classList.remove("enabled");
        searchBtn.classList.remove("disabled");
    }

    // INIT SEARCH
    if (event.target.className === "header__search-btn") {
        getProducts().then((products) => {
            let value = searchInput.value.toLowerCase().trim();

            let newProducts = products.filter((product) =>
                product.name.toLowerCase().includes(value),
            );

            if (value === "") {
                return;
            } else if (newProducts.length === 0) {
                productsBox.innerHTML = "";
                productsBox.classList.add("not-found");
                productsBox.innerText = "Товаров не найдено";
            } else {
                productsBox.innerHTML = "";
                addProductsCard(newProducts);
            }
            searchInput.value = "";
            mainTitle.remove();
            console.log(document.querySelectorAll(".card__add-in-basket-btn"))
            document.querySelectorAll(".card__add-in-basket-btn").forEach((btn) => {
                btn.addEventListener("click", (event) => {
                    console.log(event.target.className)
                    const id = event.target.closest(".card").dataset.id;
                    const product = products.find((elem) => elem.id === id);
                    basketOutput.addProduct(product);

                    btn.innerHTML = `${basketIconCheck}`;
                    btn.className = "card__add-in-basket-btn-disable";
                });
            });
        })
    }
});
