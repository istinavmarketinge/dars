import Swiper from 'swiper/bundle';

const CatalogMenu = class CatalogMenu {
    constructor() {}
    initSlider() {
        if (!document.querySelector('.catalog-menu__right-products-slider.swiper')) return;
        document.querySelectorAll('.catalog-menu__right-products-slider.swiper').forEach(slider => {
        new Swiper(slider, {
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
          
            // // And if we need scrollbar
            // scrollbar: {
            //   el: '.swiper-scrollbar',
            // },
          }).mount();
        })
    }
    openMenu() {
        document.querySelectorAll(".catalog-menu__left-list li").forEach((menuItem) => {
            menuItem.addEventListener("click", (event) => {
              // if (window.innerWidth <= 960) return;
              console.log(menuItem);
              if (event.target.closest(".catalog-menu__left-list li").querySelector(".catalog-menu__right-container--mobile")) {
                event.target.closest(".catalog-menu__left-list li").querySelector(".catalog-menu__right-container--mobile").classList.toggle('open');
              }
            
            })
          })
        
    }
    addShowOnHoverHandler() {
      if (!document.querySelector('[data-menu-to-open]')) return;
      document.querySelectorAll('[data-menu-to-open]').forEach(opener => {
        opener.addEventListener('mouseenter', (event) => {
          document.querySelector('[data-menu-to-open].isActive').classList.remove('isActive');
          event.currentTarget.classList.add('isActive');
          console.log(`[data-menu-id="${event.currentTarget.dataset.menuToOpen}]`);
          if (document.querySelector(`[data-menu-id="${event.currentTarget.dataset.menuToOpen}"]`)) {
            document.querySelector(`[data-menu-id].isOpened`).classList.remove('isOpened');
            document.querySelector(`[data-menu-id="${event.currentTarget.dataset.menuToOpen}"]`).classList.add('isOpened')
          }
        })
      })
    }
    init() {
        this.addShowOnHoverHandler();
        this.initSlider();
        this.openMenu();
    }
}



export default CatalogMenu;

