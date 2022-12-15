const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");
const form = document.querySelector("form");
const submitButton = document.querySelector(".submit-button");
const submitted = document.querySelector(".submitted");

menu.addEventListener("click", () => {
  if (navLinks.style.display === "none") {
    navLinks.style.display = "flex";
  } else {
    navLinks.style.display = "none";
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  form.style.display = "none";
    submitted.style.display = "block";
});
