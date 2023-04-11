import Swiper from 'swiper/bundle';

const gallary = new Swiper('.gallary', {
  navigation: {
    nextEl: '.course-next',
    prevEl: '.course-prev',
  },
  pagination: {
    el: '.gallary-pagination',
    type: 'bullets',
    clickable: true,
    dynamicBullets: true,
  },
  loop: true,
  speed: 1000,
      breakpoints: {
        1200: {
           slidesPerGroup: 2,
           slidesPerView: 3, 
           spaceBetween: 20,
        },
        767: {
           slidesPerGroup: 1,
           slidesPerView: 2, 
           spaceBetween: 20,
        },
        0: {
           slidesPerGroup: 1, 
           slidesPerView: 1, 
           spaceBetween: 20,
        }, 
    },
});


