// NAVBAR SCROLL EFFECT

window.addEventListener("scroll", () => {

  const navbar = document.querySelector(".navbar");

  navbar.classList.toggle("scrolled", window.scrollY > 50);

});


// MOBILE MENU

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


// ABOUT BUTTON SCROLL

const aboutBtn = document.getElementById("aboutBtn");

aboutBtn.addEventListener("click", () => {

  document.querySelector("#about").scrollIntoView({
    behavior: "smooth"
  });

});


// CONTACT FORM

const form = document.querySelector(".contact-form");

form.addEventListener("submit", (e) => {

  e.preventDefault();

  alert("Thank you! Your message has been sent.");

  form.reset();

});
