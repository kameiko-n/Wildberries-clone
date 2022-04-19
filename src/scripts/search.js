const searchBtn = document.querySelector(".header__search-sm-btn");
const searchBox = document.querySelector(".header__search-box");
const basketBtn = document.querySelector(".header__button");
const logo = document.querySelector(".logo");


searchBtn.addEventListener("click", () => {
    logo.classList.add("disabled");
    basketBtn.classList.add("disabled");
    searchBox.classList.add("enabled");
    searchBtn.classList.add("disabled");
    searchBox.addEventListener("mouseout", () => {
        console.log("hi")
        logo.classList.remove("disabled");
        basketBtn.classList.remove("disabled");
        searchBox.classList.remove("enabled");
        searchBtn.classList.remove("disabled");
    })
})

