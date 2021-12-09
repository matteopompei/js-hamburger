const barre = document.querySelector(".fa-bars");
const crocetta = document.querySelector(".fa-times");
const hamburgerMenu = document.querySelector(".hamburger-menu");

barre.onclick = function() {menuVisibile()};
crocetta.onclick = function() {menuNascosto()};

function menuVisibile() {
  hamburgerMenu.classList.add("active");
}

function menuNascosto() {
  hamburgerMenu.classList.remove("active");
}