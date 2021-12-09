const barre = document.getElementsByClassName("fa-bars")
const hamburgerMenu = document.getElementsByClassName("hamburger-menu")

barre.onclick = function() {menuVisibile()};

function menuVisibile() {
  hamburgerMenu.classList.add("active");
}
