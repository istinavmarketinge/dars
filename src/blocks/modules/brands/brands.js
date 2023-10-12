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
          }).init();
    }
    openSelect() {
      $('.brands__button-categories').on('click',function(){
        $('.brands__categories-list').toggleClass('open');
      });
    }
    chooseSelectValue() {
      console.log('chooseSelectValue');
      if (!document.querySelector('[data-brand-category-id]')) return;
      document.querySelectorAll('[data-brand-category-id]').forEach(option => {
        option.addEventListener('click', (event) => {
          event.currentTarget.closest('.brands__button-categories').querySelector('li.isActive').classList.remove('isActive')
          event.currentTarget.classList.add('isActive')
          event.currentTarget.closest('.brands__button-categories').querySelector('span').innerHTML = event.currentTarget.innerHTML;
          this.filterBrands(event.currentTarget.dataset.brandCategoryId);
          setTimeout(() => {
            this.slider.update()
          }, 100)
        })
      })
    }
    filterBrands(id) {
      if (id == 'all') {
        this.slider.el.querySelectorAll('[data-brand-category-ids]').forEach(brand => {
          brand.style.display = 'flex';
        });
        return false;
      }
      this.slider.el.querySelectorAll('[data-brand-category-ids]').forEach(brand => {
        if (brand.dataset.brandCategoryIds.includes(id)) {
          brand.style.display = 'flex';
          console.log(brand);
        } else {
          console.log(brand);
          brand.style.display = 'none';
        }
      })
      
    }
    init() {
        this.initSlider();
        this.openSelect();
        this.chooseSelectValue();
    }
}

export default PopularBrands;


