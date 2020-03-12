let burger = document.getElementById('burger');
let navbar = document.getElementById('navbar');
burger.addEventListener ('click', burgerDisplay)

function burgerDisplay() {
    navbar.classList.toggle('open-burger');
    menumobile.classList.toggle('displayMenu');
}