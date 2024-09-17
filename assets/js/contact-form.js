const contactForm = document.querySelector(".contact-form");
const body = document.body;
const menu = document.querySelector(".menu");

function toggleContact() {
  const windowWidth = window.innerWidth;

  contactForm.classList.toggle("active");
  body.classList.toggle("overflow-hidden");
  if (menu) {
    menu.classList.remove("active");
  }

  if (windowWidth < 700) {
    // Adjust this value based on your breakpoint
    body.classList.add("overflow-hidden");
  }
}

function closeForm() {
  body.classList.remove("overflow-hidden");
  contactForm.classList.remove("active");
}

