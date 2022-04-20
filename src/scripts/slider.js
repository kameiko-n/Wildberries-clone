const sliderBlock = document.querySelector(".slider-wrapper");
const slides = document.querySelectorAll(".slide");
const leftButton = document.querySelector(".slider__btn-left");
const rightButton = document.querySelector(".slider__btn-right");
const dots = document.querySelectorAll(".slired__dot");
let index = 0;
let startX = null;
let startY = null;

// Slider function
const activeSlide = (n) => {
  for (slide of slides) {
    slide.classList.remove("active");
  }
  slides[n].classList.add("active");
};

// Dot function
const activeDot = (n) => {
  for (dot of dots) {
    dot.classList.remove("active");
  }
  dots[n].classList.add("active");
};

const prepareCurrentSlide = (ind) => {
  activeSlide(ind);
  activeDot(ind);
};

// function next Slide
const nextSlide = () => {
  if (index === slides.length - 1) {
    index = 0;
    prepareCurrentSlide(index);
  } else {
    index++;
    prepareCurrentSlide(index);
  }
};

// function previous Slide
const prevSlide = () => {
  if (index === 0) {
    index = slides.length - 1;
    prepareCurrentSlide(index);
  } else {
    index--;
    prepareCurrentSlide(index);
  }
};

// Dot active Slider
dots.forEach((item, indexDot) => {
  item.addEventListener("click", () => {
    index = indexDot;
    prepareCurrentSlide(index);
  });
});

// Listeners
rightButton.addEventListener("click", nextSlide);
leftButton.addEventListener("click", prevSlide);

sliderBlock.addEventListener("touchstart", handleTouchStart, false);
sliderBlock.addEventListener("touchmove", handleTouchMove, false);

// Interval Slider
setInterval(nextSlide, 4000);

// Swipe Slider
function handleTouchStart(event) {
  const firstTouch = event.touches[0];
  startX = firstTouch.clientX;
  startY = firstTouch.clientY;
}

function handleTouchMove(event) {
  if (!startX || !startY) {
    return false;
  }
  let moveX = event.touches[0].clientX;
  let moveY = event.touches[0].clientY;

  let xDiff = moveX - startX;
  let yDiff = moveY - startY;

  if (Math.abs(moveX) > Math.abs(moveY)) {
    if (moveX > 0) {
      nextSlide();
    } else {
      prevSlide();
    }
  }

  if (moveY > 0) {
    nextSlide();
  } else {
    prevSlide();
  }
};