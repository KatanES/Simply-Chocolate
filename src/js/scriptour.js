import Swiper from 'swiper/bundle';

const swiper = new Swiper('.swiperOur', {
  // Optional parameters

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.slider-pagination',
    clickable: true,
    type: 'bullets',
    clickable: true,
    dynamicBullets: false,
  },
  loop: true,
  spaceBetween: 18,
  speed: 1000,
});
