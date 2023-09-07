
const PopularBrands = class PopularBrands {
    constructor() {
        this.slider = null;
    }
    initSlider() {
        if (!document.querySelector('.brands__slider.swiper')) return;
        this.slider = new Swiper('.brands__slider.swiper', {
            loop: true,
            slidesPerView: 7.5,
            spaceBetween: 25,
            zoom: {
                maxRatio: 0,
              },
          
            // If we need pagination
            pagination: {
              el: '.swiper-pagination',
            },
          
            // Navigation arrows
            navigation: {
              nextEl: '.brands__arrow.swiper-button-next',
              prevEl: '.brands__arrow.swiper-button-prev',
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

export default PopularBrands;