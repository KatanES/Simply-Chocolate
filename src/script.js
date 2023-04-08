//ініціалізація Swiper
new Swiper('.swiper-container',{
    // navigation: {
    //     nextButton: '.swiper-button-next', 
    //     prevButton: '.swiper-button-prev',
    // },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        //dynamicBullets: true,
        //slideToClickedSlide: true,
    },
    loop: true,    
});

const swiper = new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        dynamicBullets: true,
        
            },
    loop: true,  
    speed: 1000,
            

  });