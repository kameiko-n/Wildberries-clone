const header = document.querySelector(".header");
const searchBtn = document.querySelector(".header__search-sm-btn");
const searchBox = document.querySelector(".header__search-box");
const searchInput = document.querySelector(".header__search-text");
const basketBtn = document.querySelector(".header__button");
const logo = document.querySelector(".logo");

const products = document.querySelector(".products");
const cardTitle = document.querySelectorAll(".card__title");

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
    }
});

const findCards = () => {
    let value = searchInput.value.toLowerCase().trim();
    if (value !== "") {
        cardTitle.forEach((title) => {
            if (title.innerText.toLowerCase().search(value) === -1) {
                title.parentElement.classList.add("hide");
            } else {
                title.parentElement.classList.remove("hide");
            }
        });
    } else {
        cardTitle.forEach((title) =>
            title.parentElement.classList.remove("hide"),
        );
    }
    searchInput.value = "";
};
