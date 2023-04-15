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
    },
    loop: true,
    speed: 1000,
    breakpoints: {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 18,
    },
    1199: {
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 18,
    },
    },
});