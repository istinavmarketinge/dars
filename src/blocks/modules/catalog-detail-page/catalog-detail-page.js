import Swiper from 'swiper/bundle';

const DetailCatalogSlider = class DetailCatalogSlider {
    constructor() {
        this.slider = null;
    }
    initSlider() {
        if (!document.querySelector('.catalog-detail-slider-main, .catalog-detail-slider-nav, .catalog-detail-page-tabs-list')) return;

        let navSlider = new Swiper('.catalog-detail-slider-nav', {
          loop: true,
          spaceBetween: 3,
          slidesPerView: 10,
          freeMode: true,
          watchSlidesProgress: true,
        });

        let mainSlider = new Swiper('.catalog-detail-slider-main', {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 10,
            thumbs: {
              swiper: navSlider,
            },
            breakpoints: {
              960: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              600: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              }
            }
          });

        let catalogSlider = new Swiper('.catalog-detail-page__catalog-slider', {
          loop: true,
          spaceBetween: 20,
          slidesPerView: 6,
          freeMode: true,
          watchSlidesProgress: true,
          scrollbar: {
            el: '.swiper-scrollbar',
          },
          breakpoints: {
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
              freeMode: false,
            },
            400: {
              slidesPerView: 2,
              freeMode: false,
            },
            700: {
              slidesPerView: 3,
            },
            800: {
              slidesPerView: 4,
            },
            1300: {
              slidesPerView: 5,
            },
            1600: {
              slidesPerView: 6,
            },
          }
        });

        var init = false;
        var catalogSliderVertical;
        function swiperCard() {
          if (window.innerWidth <= 1500) {
            if (!init) {
              init = true;
              catalogSliderVertical = new Swiper('.catalog-detail-page-related-products__list', {
                spaceBetween: 20,
                slidesPerView: 6,
                freeMode: true,
                scrollbar: {
                  el: '.swiper-scrollbar',
                },
                breakpoints: {
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                    freeMode: false,
                  },
                  400: {
                    slidesPerView: 2,
                    freeMode: false,
                  },
                  700: {
                    slidesPerView: 3,
                  },
                  800: {
                    slidesPerView: 4,
                  },
                  1300: {
                    slidesPerView: 5,
                  },
                  1600: {
                    slidesPerView: 6,
                  },
                }
              });
            }
          } else if (init) {
            catalogSliderVertical.destroy();
            init = false;
          }
        }

        swiperCard();
        window.addEventListener("resize", swiperCard);
    }

    init() {
      this.initSlider();
    }
}

export default DetailCatalogSlider;

jQuery(document).ready(function() {
	
	// $('.box-to-favourites').on('click',function(){
	// 	$(this).toggleClass('active');

  //   if($(this).hasClass('active')){
  //     $(this).find('.controls-bar__item-title').text('В избранном');
  //   } else {
  //     $(this).find('.controls-bar__item-title').text('В избранное');
  //   }
  // });

	// $('.box-to-compare').on('click',function(){
  //   $(this).toggleClass('active');
    
  //   if($(this).hasClass('active')){
  //     $(this).find('.controls-bar__item-title').text('В сравнении');
  //   } else {
  //     $(this).find('.controls-bar__item-title').text('К сравнению');
  //   }
	// });
  
  $('.catalog-detail-page-header__specifications-more').on('click',function(){
    let link = $(this).data('link');
    
    $("html, body").animate({
      scrollTop: $('.catalog-detail-page-tabs-list').offset().top - 100
    }, 200);

    let index = $('.catalog-detail-page-tabs-list').find(`#${link}`).index();

    $('.catalog-detail-page-tabs-list').find('li').removeClass('active').eq(index).addClass('active')
    .closest('.catalog-detail-page-tabs-block').find('.catalog-detail-page-main-list__item').removeClass('active').eq(index).addClass('active');
    
  });

  $('.btn-to-basket').on('click',function(){
    $(this).toggleClass('active');

    if($(this).hasClass('active')){
      $(this).attr('href', '/basket/').html('Товар в корзине <span>Перейти</span>');
    }
  });

  $('.btn-fast-buy').on('click',function(){
    $(this).toggleClass('active');

    if($(this).hasClass('active')){
      $(this).html('Спасибо за покупку! <span>Перейти в каталог</span>');
    }
  });

  $('.catalog-detail-page-tabs-list').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('.catalog-detail-page-tabs-block').find('.catalog-detail-page-main-list__item').removeClass('active').eq($(this).index()).addClass('active');
  });

  $('.review-form__estimation-input').on('change', function(){
    let num = $(this).val();
    $('.rating-calculation__estimation-value').text(num);
  });

  $('.reviews-list-box__add-review').on('click', function () {
    $(this).toggleClass('active');

    if($(this).hasClass('active')){
      $(this).text($(this).data('activeText'));
    } else {
      $(this).text($(this).data('text'));
    }


      $('.review-block__review-form').slideToggle();
  });
	

});