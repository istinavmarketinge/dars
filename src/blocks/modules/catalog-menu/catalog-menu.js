

const CatalogMenu = class CatalogMenu {
    constructor() {
        this.slider = null;
    }
    initSlider() {
        if (!document.querySelector('.catalog-menu__right-products-slider.swiper')) return;
        this.slider = new Swiper('.catalog-menu__right-products-slider.swiper', {
            loop: true,
            slidesPerView: 3,
            spaceBetween: 30,
            zoom: {
                maxRatio: 0,
              },

              breakpoints: {
                1700: {
                  slidesPerView: 3
                },
                1000: {
                  slidesPerView: 2,
                },
                900: {
                  slidesPerView: 1,
                  spaceBetween: 25,
                },
                0: {
                  slidesPerView: 1.5,
                  spaceBetween: 15,
                },
              },
                
          
            // If we need pagination
            pagination: {
              el: '.swiper-pagination',
            },
          
            // Navigation arrows
            navigation: {
              nextEl: '.popular-categories__arrow.swiper-button-next',
              prevEl: '.popular-categories__arrow.swiper-button-prev',
            },
          
            // And if we need scrollbar
            scrollbar: {
              el: '.swiper-scrollbar',
            },
          }).mount();
    }
    openMenu() {
        document.querySelectorAll(".catalog-menu__left-list li").forEach((menuItem) => {
            menuItem.addEventListener("click", (event) => {
            console.log(menuItem);

            event.target.closest(".catalog-menu__left-list li").querySelector(".catalog-menu__right-container--mobile").classList.toggle('open');
            
            })
          })
        
    }
    init() {
        this.initSlider();
        this.openMenu();
    }
}



export default CatalogMenu;

