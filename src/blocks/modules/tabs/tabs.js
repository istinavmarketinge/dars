import Swiper from 'swiper/bundle';

const Tabs = class Tabs {
    constructor() {
        this.slider = null;
    }
    initSlider() {
        if (!document.querySelector('.tabs__slider.swiper')) return;
        this.slider = new Swiper('.tabs__slider.swiper', {
          loop: false,
          slidesPerView: 4.5,
          spaceBetween: 25,
          zoom: {
              maxRatio: 0,
            },

            breakpoints: {
              1700: {
                slidesPerView: 4.5,
              },
              1200: {
                slidesPerView: 3.5,
              },
              900: {
                slidesPerView: 2.5,
                spaceBetween: 25,
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
            nextEl: '.tabs__arrow.swiper-button-next',
            prevEl: '.tabs__arrow.swiper-button-prev',
          },
        
          // And if we need scrollbar
          scrollbar: {
            el: '.swiper-scrollbar',
          },
        }).init();
        
    }
    addtabChangeHandler() {
      if (!document.querySelector('[data-slide-show]')) return;
      document.querySelectorAll('[data-slide-show]').forEach(tabButton => {
        tabButton.addEventListener('click', (e) => {
          if (e.target.classList.contains('tabs__left-item--active')) return;


          document.querySelector('.tabs__left-item--active').classList.remove('tabs__left-item--active');
          console.log(tabButton.dataset.slideShow);
          document.querySelectorAll(`.tabs__slider-item`).forEach(slide => {
            if (slide.dataset.slideType == tabButton.dataset.slideShow) {
              slide.style.display = 'block';
            } else {
              slide.style.display = 'none';
            }
          });
          this.slider.update()
          tabButton.classList.add('tabs__left-item--active');
        })
      })

    }
    imageShowHendler() {
      if(!document.querySelector(".tabs__slider-item-image")) return;
       document.querySelectorAll(".tabs__hidden-item").forEach((hiddenItem) => {
        hiddenItem.addEventListener("mouseover", (event) => {
         let imageId = event.target.dataset.imageToShow;

         event.target.closest(".tabs__slider-item-image").querySelector('.tabs__image--active').classList.remove("tabs__image--active");

         event.target.closest(".tabs__slider-item-image").querySelector('.tabs__hidden-item.isActive').classList.remove("isActive");

         event.target.closest(".tabs__slider-item-image").querySelector(`[data-image_id="${imageId}"]`).classList.add("tabs__image--active");

         event.target.classList.add("isActive");
        })
       })
    }
    
    init() {
        this.initSlider();
        this.imageShowHendler();
        this.addtabChangeHandler();
    }
}

export default Tabs;

