import { basketIconCheck, basketIconPlus, closeIcon } from "./variables.js";
import { basketOutput } from "./basket.js";
import { header, searchBtn, searchBox, searchInput, basketBtn, logo, productsBox, mainTitle} from "./variables.js";
import {getProducts, addProductsCard} from "./add_products_card";

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
                productsBox.classList.remove("not-found");
                addProductsCard(newProducts);
            }
            searchInput.value = "";
            mainTitle.remove();
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

