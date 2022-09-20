//Slider-Offer

function sliderOffer() {

  const prewBtn = document.querySelector('.offer__slider-btn--prew');
  const nextBtn = document.querySelector('.offer__slider-btn--next');
  const slider = document.querySelector('.offer__slider');
  const slides = document.querySelectorAll('.offer__slider__item');
  const slideCount = slides.length;

  let activeSlide = 0;

  nextBtn.addEventListener('click', () => {
    chengeSlide('next');
  });

  prewBtn.addEventListener('click', () => {
    chengeSlide('prew');
  });

  function chengeSlide(direction) {
    if (direction === 'next') {
      prewBtn.disabled = false;
      activeSlide++;
      if (activeSlide === slideCount - 1) {
        nextBtn.disabled = true;
      };
    } else if (direction === 'prew') {
      nextBtn.disabled = false;
      activeSlide--;
      if (activeSlide === 0) {
        prewBtn.disabled = true;
      };
    };

    const width = slider.clientWidth;

    slider.style.transform = `translateX(-${activeSlide * width}px)`;
  };
  }

  sliderOffer()
