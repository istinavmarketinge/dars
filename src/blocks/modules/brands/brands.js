import Swiper from 'swiper/bundle';

const PopularBrands = class PopularBrands {
    constructor() {
        this.slider = null;
    }
    initSlider() {
        if (!document.querySelector('.brands__slider.swiper')) return;
        this.slider = new Swiper('.brands__slider.swiper', {
            loop: false,
            slidesPerView: 7.5,
            spaceBetween: 25,
            zoom: {
                maxRatio: 0,
              },

              breakpoints: {
                1700: {
                  slidesPerView: 7.5,
                },
                1200: {
                  slidesPerView: 5.5,
                },
                900: {
                  slidesPerView: 4,
                  spaceBetween: 25,
                },
                600: {
                  slidesPerView: 3,
                },
                0: {
                  slidesPerView: 2.5,
                  spaceBetween: 15,
                },
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

jQuery(document).ready(function() {
	
	$('.brands__button-categories').on('click',function(){
		$('.brands__categories-list').toggleClass('open');
	});
  //   $('.header-top__modal-close').on('click',function(){
	// 	$('.header-top__modal-city').removeClass('open');
	// });
	
});