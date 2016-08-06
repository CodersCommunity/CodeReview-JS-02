{
  'use strict';

  const sliderElement = document.getElementById('slider');
  const navElement = document.getElementById('nav');
  const slideDir = './slajdy';
  const slideTime = 5000;
  const slideSources = ['slajd1.png', 'slajd2.png', 'slajd3.png', 'slajd4.png', 'slajd5.png'];
  const slides = [];
  let currentSlide;
  let sliderTimeout;

  const setSlide = slideIndex => {
    currentSlide = slideIndex >= slideSources.length ? 0 : slideIndex;
    slides.forEach(slide => slide.classList.remove('visible'));
    slides[currentSlide].classList.add('visible');
    clearTimeout(sliderTimeout);
    sliderTimeout = setTimeout(() => setSlide(++currentSlide), slideTime);
  };

  const addSlide = slideSource => {
    const slide = document.createElement('img');
    const link = document.createElement('a');
    const slideIndex = slides.push(slide) - 1;

    slide.src = `${slideDir}/${slideSource}`;
    slide.classList.add('slide');

    link.href = `#${slideIndex}`;
    link.addEventListener('click', () => setSlide(slideIndex), false)
    link.classList.add('nav__link');

    sliderElement.appendChild(slide);
    navElement.appendChild(link);
  };

  slideSources.forEach(source => addSlide(source));

  setTimeout(() => {
    if (document.location.hash !== '') {
      const locationSlide = Number(document.location.hash.substr(1));
      setSlide(locationSlide);
    } else {
      const randomSlideIndex = Math.floor(Math.random() * slides.length);
      setSlide(randomSlideIndex);
    }
  }, 500);
}
