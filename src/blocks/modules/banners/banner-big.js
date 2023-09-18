import Swiper from 'swiper/bundle';

const Banner = class Banner {
    constructor() {
        this.slider = null;
    }
    initSlider() {
        if (!document.querySelector('.banner__big.swiper')) return;
        this.slider = new Swiper('.banner__big.swiper', {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 0,
            zoom: {
                maxRatio: 0,
              },
          
            // If we need pagination
            pagination: {
              el: '.swiper-pagination',
            },
          
            // Navigation arrows
            // navigation: {
            //   nextEl: '.swiper-button-next',
            //   prevEl: '.swiper-button-prev',
            // },
          
          }).mount();
    }
    init() {
        this.initSlider();
    }
}

export default Banner;