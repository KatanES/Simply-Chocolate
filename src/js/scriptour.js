import Swiper from 'swiper/bundle';
const swiper = new Swiper('.price-swiper', {
  // Optional parameters
  pagination: {
    el: '.slider-pagination',
    clickable: true,
  },
  keyboard: {
    enabled: true,
    onlyOnViewport: true,
    padeUpDown: true,
  },
  spaceBetween: 30,
  autoplay: {
    delay: 2000,
    stopOnLastSlide: false,
    disableOnIteration: false,
  },
  speed: 1000,
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 2.5,
      slidesPerGroup: 2,
      spaceBetween: 18,
    },
    1199: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 18,
    },
  },
});
