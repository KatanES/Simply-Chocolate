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


const gallary = new Swiper('.gallary', {
  // navigation: {
  //   nextEl: '.course-next',
  //   prevEl: '.course-prev',
  // },
  pagination: {
    el: '.gallary-pagination',
    type: 'bullets',
    clickable: true,
    dynamicBullets: true,
  },
  loop: true,
  speed: 1000,


});


