let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

let darkModeToggle = document.querySelector('#dark-mode-toggle');

darkModeToggle.onclick = () => {
    document.body.classList.toggle('dark-mode');
};