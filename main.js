import "./scss/styles.scss";

document.addEventListener("DOMContentLoaded", () => {
  // Hamburger Menu
  const hamburger = document.querySelector(".header__hamburger");
  const nav = document.querySelector(".header__nav");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("nav-open");
    nav.classList.toggle("nav-open");
  });

  // Form Validation
  const form = document.querySelector("#form");
  const inputEmail = document.querySelector("#input-email");
  const errorMessage = document.querySelector(".message--error");
  const successMessage = document.querySelector(".message--success");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (isValidEmail(inputEmail.value)) {
      errorMessage.classList.remove("show");
      successMessage.classList.add("show");

      setTimeout(() => {
        successMessage.classList.remove("show");
      }, 2000);
    } else {
      successMessage.classList.remove("show");
      errorMessage.classList.add("show");

      setTimeout(() => {
        errorMessage.classList.remove("show");
      }, 2000);
    }
  });
});

// Email Validation Function
const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
