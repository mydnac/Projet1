let burger = document.getElementById('burger');
let navbar = document.getElementById('navbar');
let menumobile = document.getElementById('menumobile');
// burger.addEventListener ('click', (event) => { 
//     navbar.classList.toggle('open-burger');
//     menumobile.classList.toggle('displaymenu');

// })

burger.addEventListener ('click', burgerDisplay)

function burgerDisplay() {
    navbar.classList.toggle('open-burger');
    menumobile.classList.toggle('displayMenu');
}