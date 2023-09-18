import Swiper from 'swiper/bundle';

const BannerProduct = class BannerProduct {
    constructor() {}
    initSlider() {
        if (!document.querySelector('.banner__small-slider.swiper')) return;

        new Swiper('.banner__small-slider.swiper', {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 0,
            observer: true, 
            observeParents: true,
            navigation: {
              nextEl: '.banner__small-slider .swiper-button-next',
              prevEl: '.banner__small-slider .swiper-button-prev',
            },
            zoom: {
                maxRatio: 0,
            },
          
            // If we need pagination
            pagination: {
              el: '.swiper-pagination',
            },
          
            // Navigation arrows
            
          }).mount();
    }
    setMobileTabsSwitcher() {

        $('div.banner__tabs').on('click', 'div:not(.active)', function() {
          $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('.banner').find('.banner__content').removeClass('active').eq($(this).index()).addClass('active');
        });
    }
    init() {
        this.initSlider();
        this.setMobileTabsSwitcher();
        
    }
}

export default BannerProduct;

