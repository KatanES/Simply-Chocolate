//ініціалізація Swiper
// new Swiper('.swiper-container', {
//   navigation: {
//     nextButton: '.swiper-button-next',
//     prevButton: '.swiper-button-prev',
//   },
//   pagination: {
//     el: '.swiper-pagination',
// clickable: true,
//dynamicBullets: true,
//slideToClickedSlide: true,
//   },
//   //безкінцево
//   //loop: true,
// });

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

// var swiper = new Swiper(".swiper", {
//   effect: "flip",
//   // grabCursor: true,
//   pagination: {
//     el: ".swiper-pagination",
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

// var swiper = new Swiper(".mySwiper", {
//   effect: "coverflow",
//   grabCursor: true,
//   centeredSlides: true,
//   slidesPerView: "auto",
//   coverflowEffect: {
//     rotate: 50,
//     stretch: 0,
//     depth: 100,
//     modifier: 1,
//     slideShadows: true,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//   },
// });
