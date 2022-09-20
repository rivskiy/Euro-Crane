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

//Sliders

const prewBtn = document.querySelector('.btn-prew');
const nextBtn = document.querySelector('.btn-next');
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slider__item');
const slideCount = slides.length;

let activeSlide = 0;

nextBtn.addEventListener('click', () => {
  chengeSlide('next');
});

prewBtn.addEventListener('click', () => {
  chengeSlide('prew');
});

function chengeSlide(direction) {
  const slidesVisible = Math.round(slider.clientWidth / slides[0].clientWidth);
  if (direction === 'next') {
    prewBtn.disabled = false;
    activeSlide++;
    if (activeSlide === slideCount - slidesVisible + 1) {
      nextBtn.disabled = true;
    };
  } else if (direction === 'prew') {
    nextBtn.disabled = false;
    activeSlide--;
    if (activeSlide === 0) {
      prewBtn.disabled = true;
    };
  };

  const width = slides[0].clientWidth + 30;

  slider.style.transform = `translateX(-${activeSlide * width}px)`;
};
