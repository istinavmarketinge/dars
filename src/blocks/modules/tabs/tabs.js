
const Tabs = class Tabs {
    constructor() {
        this.slider = null;
    }
    initSlider() {
        if (!document.querySelector('.tabs__slider.swiper')) return;
        this.slider = new Swiper('.tabs__slider.swiper', {
            loop: true,
            slidesPerView: 4.5,
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
              nextEl: '.tabs__arrow.swiper-button-next',
              prevEl: '.tabs__arrow.swiper-button-prev',
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

export default Tabs;