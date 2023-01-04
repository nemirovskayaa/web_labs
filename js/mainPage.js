const slidesContainer = document.querySelector(".slides-container");
const slidesContainerHeight = slidesContainer.clientHeight;
const slides = slidesContainer.querySelectorAll(".slide");
const nextButton = document.querySelectorAll(".next");
const prevButton = document.querySelectorAll(".prev");

let slideIndex = 0;
let slideHeight = slides[slideIndex].clientHeight;

prevButton.forEach((button) => {
  button.addEventListener("click", () => {
    if (slideIndex <= 0) {
      slideIndex = slides.length - 1;
      slides.forEach((item) => {
        slideHeight += item.clientHeight;
      });
      slidesContainer.scrollTop = slideHeight;
    } else {
      slideIndex--;
      console.log(slidesContainerHeight + " " + slideIndex);
      if (slideIndex == slides.length - 2)
        slideHeight =
          slides[slides.length - 1].clientHeight -
          (slidesContainerHeight - slides[slideIndex].clientHeight);
      else slideHeight = slides[slideIndex].clientHeight;
      slidesContainer.scrollTop -= slideHeight;
    }
  });
});

nextButton.forEach((button) => {
  button.addEventListener("click", () => {
    if (slideIndex >= slides.length - 1) {
      slideIndex = 0;
      slidesContainer.scrollTop = 0;
    } else {
      currentSlideHeight = slides[slideIndex].clientHeight;
      slideIndex++;
      slidesContainer.scrollTop += currentSlideHeight;
    }
  });
});
