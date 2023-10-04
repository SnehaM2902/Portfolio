// Example JavaScript for a responsive menu
const menuButton = document.querySelector('.menu-button');
const navMenu = document.querySelector('.nav-menu');

menuButton.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
