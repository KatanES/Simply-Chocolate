//ініціалізація Swiper
new Swiper('.swiper-container', {
  navigation: {
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    //dynamicBullets: true,
    //slideToClickedSlide: true,
  },
  //безкінцево
  loop: true,
});
const swiper = new Swiper('.swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
    dynamicBullets: true,
  },
  loop: true,
  speed: 1000,
});
