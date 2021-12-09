const barre = document.querySelector(".fa-bars");
const hamburgerMenu = document.querySelector(".hamburger-menu");

barre.onclick = function() {menuVisibile()};

function menuVisibile() {
  hamburgerMenu.classList.add("active");
}

