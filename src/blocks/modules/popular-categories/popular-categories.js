

const PopularCategories = class PopularCategories {
    constructor() {
        this.slider = null;
    }
    initSlider() {
        if (!document.querySelector('.popular-categories__slider.swiper')) return;
        this.slider = new Swiper('.popular-categories__slider.swiper', {
            loop: true,
            slidesPerView: 5.5,
            spaceBetween: 25,
            zoom: {
                maxRatio: 0,
              },

              breakpoints: {
                1700: {
                  slidesPerView: 5.5,
                },
                1200: {
                  slidesPerView: 4,
                },
                900: {
                  slidesPerView: 3,
                  spaceBetween: 25,
                },
                600: {
                  slidesPerView: 2,
                },
                0: {
                  slidesPerView: 2,
                  spaceBetween: 15,
                },
              },
                
          
            // If we need pagination
            pagination: {
              el: '.swiper-pagination',
            },
          
            // Navigation arrows
            navigation: {
              nextEl: '.popular-categories__arrow.swiper-button-next',
              prevEl: '.popular-categories__arrow.swiper-button-prev',
            },
          
            // And if we need scrollbar
            scrollbar: {
              el: '.swiper-scrollbar',
            },
          }).mount();
    }
    init() {
        this.initSlider();
    }
}



export default PopularCategories;