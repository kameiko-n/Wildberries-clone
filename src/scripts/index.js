import {
    basketBtn,
    basketIconCheck,
    body,
    header,
    logo, mainTitle,
    productsBox,
    searchBox,
    searchBtn,
    searchInput,
    buttonArrow,
    imagesSlider,
    sliderLine,
} from "./variables.js";
import { addProductCard, getProducts } from "./add_product_card.js";
import { addProductToBasket, initListeners, showProductCount } from "./basket.js";

// VARIABLES
const offset = 500;
let width;

const resizeSlider = () => {
    width = document.querySelector(".slider").offsetWidth;
    sliderLine.style.width = width * imagesSlider.length + "px";
    imagesSlider.forEach((item) => {
        item.style.width = width + "px";
        item.style.height = "auto";
    });
};

const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

const addInBasketBtn = (products) => {
    document.querySelectorAll(".card__add-in-basket-btn").forEach((btn) => {
        btn.addEventListener("click", (event) => {
            const id = event.target.closest(".card").dataset.id;
            const product = products.find((elem) => elem.id === id);
            basketOutput.addProduct(product);

            btn.innerHTML = `${basketIconCheck}`;
            btn.className = "card__add-in-basket-btn-disable";
        });
    });
}

// BASKET
const basketOutput = {
    init: () => {
        const productsFromStorage = JSON.parse(
            localStorage.getItem("products"),
        );

        if (!("products" in localStorage) && !productsFromStorage) {
            localStorage.setItem("products", JSON.stringify(products));
        }

        const message = document.createElement("div");
        const productCount = document.createElement("p");

        message.className = "message";
        productCount.className = "product__count";
        message.innerText = "Товар успешно добавлен в корзину";

        body.append(message);
        basketBtn.append(productCount);

        initListeners();
        showProductCount();
    },
    addProduct: (product) => {
        addProductToBasket(product);
    },
};

basketOutput.init();

// CARDS
getProducts()
    .then((products) => addProductCard(products))
    .then((products) => addInBasketBtn(products))
    .then(() => {
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

// SEARCH
header.addEventListener("click", () => {
    // show searchbox
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

    // init search
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
                addProductCard(newProducts);
            }
            searchInput.value = "";
            mainTitle.remove();
            addInBasketBtn(products)
        })
    }
});

// SCROLL ARROW
window.addEventListener("scroll", () => {

    if (getTop() > offset) {
        buttonArrow.classList.add("scroll-up--active");
    } else {
        buttonArrow.classList.remove("scroll-up--active")
    }
})

buttonArrow.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// SLIDER ADAPTIVE
window.addEventListener("resize", resizeSlider);
resizeSlider();
