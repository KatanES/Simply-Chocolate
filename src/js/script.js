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
    //   breakpoints: { 
    //     320: {           
    //        slidesPerView: 1, 
    //        spaceBetween: 20,
    //   },      
    //     768: {          
    //        slidesPerView: 2, 
    //        spaceBetween: 20,
    //   },        
    //     1199: {           
    //        slidesPerView: 3, 
    //        spaceBetween: 20,
    //     }, 
    // },
});


