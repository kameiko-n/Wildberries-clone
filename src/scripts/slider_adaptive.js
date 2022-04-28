const imagesSlider = document.querySelectorAll(
    ".flex-wrapper, .slider, .slider__img",
);
const sliderLine = document.querySelector(".slider");
let count = 0;
let width;

const resizeSlider = () => {
    width = document.querySelector(".slider").offsetWidth;
    sliderLine.style.width = width * imagesSlider.length + "px";
    imagesSlider.forEach((item) => {
        item.style.width = width + "px";
        item.style.height = "auto";
    });
};
window.addEventListener("resize", resizeSlider);
resizeSlider();
