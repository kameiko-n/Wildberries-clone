const imagesSlider = document.querySelectorAll(
    ".flex-wrapper, .slider-wrapper, .slider__img",
);
const sliderLine = document.querySelector(".slider-wrapper");
let count = 0;
let width;

const resizeSlider = () => {
    width = document.querySelector(".slider-wrapper").offsetWidth;
    sliderLine.style.width = width * imagesSlider.length + "px";
    imagesSlider.forEach((item) => {
        item.style.width = width + "px";
        item.style.height = "auto";
    });
};
window.addEventListener("resize", resizeSlider);
resizeSlider();
