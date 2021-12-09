const barre = document.querySelector(".fa-bars"); // Qui selezioni l'icona del menù
const crocetta = document.querySelector(".fa-times"); // Qui selezioni la crocetta del menù (per chiuderlo)
const hamburgerMenu = document.querySelector(".hamburger-menu"); // Qui selezioni il menu hamburger

barre.onclick = function() {menuVisibile()}; // Qui parte la funzione menuVisibile quando clicchi su sull'icona del menù
crocetta.onclick = function() {menuNascosto()}; // Qui parte la funzione menuNascosto quando clicchi sulla crocetta (per chiuderlo)

// Questa è la funzione che dice di aggiungere la classe .active ad .hamburger-menu
function menuVisibile() {
  hamburgerMenu.classList.add("active");
}

// Questa è la funzione che dice di rimuovere la classe .active ad .hamburger-menu
function menuNascosto() {
  hamburgerMenu.classList.remove("active");
}