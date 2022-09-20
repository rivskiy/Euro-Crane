//Mobile menu
const menu = document.querySelector('.header__nav');
const menuBtn = document.querySelector('.header__menu-btn');
const menuOverlay = document.querySelector('.header__menu-overlay');
const menuLink = document.querySelectorAll('.header__link');

menuBtn.addEventListener('click', showMenu);

menuOverlay.addEventListener('click', showMenu);

function showMenu() {
  menuBtn.classList.toggle('--active');
  menu.classList.toggle('--active');
  menuOverlay.classList.toggle('--active');
  document.body.classList.toggle('--lock');
}
