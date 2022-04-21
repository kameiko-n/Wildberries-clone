import { basketIcon, closeIcon } from "./variablesCardIcons";

const header = document.querySelector(".header");
const searchBtn = document.querySelector(".header__search-sm-btn");
const searchBox = document.querySelector(".header__search-box");
const searchInput = document.querySelector(".header__search-text");
const basketBtn = document.querySelector(".header__button");
const logo = document.querySelector(".logo");

const productsBox = document.querySelector(".products");
const cardTitle = document.querySelectorAll(".card__title");

const getProducts = () => {
    return new Promise((resolve, reject) => {
        fetch("https://625edd553b039517f1fdb9e1.mockapi.io/products")
            .then((response) => response.json())
            .then((products) => resolve(products));
    });
};

// const findCards = () => {
//     let value = searchInput.value.toLowerCase().trim();
//     if (value !== "") {
//         console.log(value);
//         cardTitle.forEach((title) => {
//             console.log(title);
//             if (title.innerText.toLowerCase().search(value) === -1) {
//                 title.parentElement.classList.add("hide");
//                 console.log("no");
//             } else {
//                 title.parentElement.classList.remove("hide");
//                 console.log("yes");
//             }
//         });
//     } else {
//         cardTitle.forEach((title) =>
//             title.parentElement.classList.remove("hide"),
//         );
//     }
//     searchInput.value = "";
// };

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
        setTimeout(() => {
            findCards();
        }, 5000);
    }
});

// getProducts().then((products) => {
//     products.forEach((item) => {
//         const productId = item.id;
//         const productName = item.name;
//         const productOldPrice = item.oldPrice;
//         const productNewPrice = item.newPrice;
//         const productSale = item.sale;
//         const productImage = item.imgSrc;
//
//         let templete = `<div class="card" id="${productId}">
//
//                         <div class="card__content">
//                         <img src="${productImage}" alt="${productName}" class="card__photo">
//                         <a href="#popup" class="card__fast-view popup__link">Быстрый просмотр</a>
//                         <div class="card__bottom">
//                             <p class="card__sale-value">${productSale}%</p>
//                             <button class="card__add-in-basket-btn">
//                                 ${basketIcon}
//                             </button>
//                         </div>
//                         </div>
//
//                         <div class="card__prices">
//                         <p class="card__new-price">${productNewPrice}р</p>
//                         <p class="card__old-price">${productOldPrice}р</p>
//                         </div>
//                         <h3 class="card__title">${productName}</h3>
//
//                         <div id="popup" class="popup">
//                         <div class="popup-body">
//
//                                 <img src="${productImage}" alt="${productName}" class="popup-photo">
//                                 <a href="/" class="popup-close close-popup">
//                                 ${closeIcon}
//                                 </a>
//
//                         </div>
//                         </div>`;
//         productsBox.insertAdjacentHTML("beforeend", templete);
//     });
// });
