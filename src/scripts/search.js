const header = document.querySelector(".header");
const searchBtn = document.querySelector(".header__search-sm-btn");
const searchBox = document.querySelector(".header__search-box");
const basketBtn = document.querySelector(".header__button");
const logo = document.querySelector(".logo");


header.addEventListener("click", () => {
    if (event.target.closest(".header__search-sm-btn") || event.target.closest(".header__search-box.enabled")) {
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


})

