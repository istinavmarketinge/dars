import Swiper from 'swiper/bundle';

const DetailCatalogSlider = class DetailCatalogSlider {
    constructor() {
        this.slider = null;
    }
    initSlider() {
        if (!document.querySelector('.catalog-detail-slider-main, .catalog-detail-slider-nav')) return;

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
          });


    }
    init() {
        this.initSlider();
    }
}

export default DetailCatalogSlider;

jQuery(document).ready(function() {
	
	$('.box-to-favourites').on('click',function(){
		$(this).toggleClass('active');

    if($(this).hasClass('active')){
      $(this).find('.controls-bar__item-title').text('В избранном');
    } else {
      $(this).find('.controls-bar__item-title').text('В избранное');
    }
  });

	$('.box-to-compare').on('click',function(){
    $(this).toggleClass('active');
    
    if($(this).hasClass('active')){
      $(this).find('.controls-bar__item-title').text('В сравнении');
    } else {
      $(this).find('.controls-bar__item-title').text('К сравнению');
    }
	});
  
  $('.catalog-detail-page-header__specifications-more').on('click',function(){
    let link = $(this).data('link');
    let tabsBlockPosition = $('.catalog-detail-page-header__in-right-block').offset().top;
    
    window.scrollTo({
      top: tabsBlockPosition
    });

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
	
});