
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
          }).mount();
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
    }
}

export default Tabs;

