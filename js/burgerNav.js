const openNavMenuButton = document.querySelector(".open-button");
const closeNavMenuButton = document.querySelector(".close-button");
const navMenu = document.querySelector("#burger-nav");

openNavMenuButton.addEventListener("click", () => {
  navMenu.style.width = "100%";
});

closeNavMenuButton.addEventListener("click", () => {
  navMenu.style.width = "0%";
});
