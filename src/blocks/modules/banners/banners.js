const BannerProduct = class BannerProduct {
    constructor() {
        this.slider = null;
    }
    initSlider() {
        if (!document.querySelector('.banner__small-slider.swiper')) return;
        this.slider = new Swiper('.banner__small-slider.swiper', {
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
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
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

export default BannerProduct;


