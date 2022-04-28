import {productsBox} from "./variables.js";
import { basketIconPlus, basketIconCheck, closeIcon } from "./variables.js";
import { basketOutput } from "./basket.js";
import { buttonArrow } from "./scroll-arrow.js";
import { addProductsCard, getProducts } from "./add_products_card.js";


getProducts()
  .then((products) => addProductsCard(products))
  .then((products) => {
    document.querySelectorAll(".card__add-in-basket-btn").forEach((btn) => {
      btn.addEventListener("click", (event) => {
        const id = event.target.closest(".card").dataset.id;
        const product = products.find((elem) => elem.id === id);
        basketOutput.addProduct(product);

        btn.innerHTML = `${basketIconCheck}`;
        btn.className = "card__add-in-basket-btn-disable";
      });
    });
  })
  .then((cards) => {
    document.querySelectorAll(".card__fast-view").forEach((btn) => {
      btn.addEventListener("click", (event) => {
        event.preventDefault();
        const popup = event.target.closest(".card").querySelector(".popup");
        popup.classList.add("open");
        document.body.style.overflow = 'hidden';
        buttonArrow.classList.add("hiddenButtonArrow");

        const close = popup.querySelector(".popup-close");
        close.addEventListener("click", (event) => {
          event.preventDefault();
          popup.classList.remove("open");
          document.body.style.overflow = 'auto';
          buttonArrow.classList.remove("hiddenButtonArrow");
        })
      })
    })
  })