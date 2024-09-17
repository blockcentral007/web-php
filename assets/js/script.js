const mobileButton = document.querySelector(".mobile-menu");
const mobileMenu = document.querySelector(".menu");
const closeMenu = document.querySelector(".overlay-close");

const toggleClose = function () {
  mobileMenu.classList.toggle("open");
};

mobileButton.addEventListener("click", toggleClose);
closeMenu.addEventListener("click", toggleClose);
