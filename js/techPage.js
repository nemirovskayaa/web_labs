const slidesContainer = document.querySelector(".slides-container");
const slides = slidesContainer.querySelectorAll(".slide");
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");

let currentSlideIndex = 0;

prevButton.addEventListener("click", () => {
  const slideWidth = slides[0].clientWidth;
  if (currentSlideIndex <= 0) {
    currentSlideIndex = slides.length - 1;
    slidesContainer.scrollLeft += slides[0].clientWidth * slides.length;
  } else {
    currentSlideIndex--;
    slidesContainer.scrollLeft -= slideWidth;
  }
});

nextButton.addEventListener("click", () => {
  const slideWidth = slides[0].clientWidth;
  if (currentSlideIndex >= slides.length - 1) {
    currentSlideIndex = 0;
    slidesContainer.scrollLeft = 0;
  } else {
    currentSlideIndex++;
    slidesContainer.scrollLeft += slideWidth;
  }
});
