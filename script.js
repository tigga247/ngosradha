const header = document.querySelector("header");
const hamburger = document.querySelector(".hamburger_on");
const navLinks = document.querySelector(".nav_links");
let hamburgerOpen = false;
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});
hamburger.addEventListener("click", function () {
  if (!hamburgerOpen) {
    navLinks.classList.toggle("show_navlinks");
    hamburger.classList.toggle("hamburger_off");
  } else {
    navLinks.classList.remove("show_navlinks");
    hamburger.classList.remove("hamburger_off");
    hamburgerOpen = false;
  }
});
//call Us button/
document.getElementById("btn").addEventListener("click", function () {
  window.location.href = "/contact.html";
});
// Popup Button
const openPopupButton = document.getElementById("open-popup");
const popup = document.getElementById("popup");
const closePopupButton = popup.getElementsByClassName("close")[0];

openPopupButton.addEventListener("click", function() {
  popup.style.display = "block";
});

closePopupButton.addEventListener("click", function() {
  popup.style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target === popup) {
    popup.style.display = "none";
  }
});
// contact form



