const offset = 500;
export const buttonArrow = document.querySelector(".button-scroll");

const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

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