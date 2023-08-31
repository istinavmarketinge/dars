import Glide from '@glidejs/glide';

const PopularCategories = class PopularCategories {
    constructor() {
        this.slider = null;
    }
    initSlider() {
        if (!document.querySelector('.popular-categories__slider.glide')) return;
        this.slider = new Glide('.popular-categories__slider.glide', {
            perView: 5,
            gap: 25,
            bound: true,
            peek: {
                before: 0,
                after: 135
            },
            breakpoints: {
                980: {
                    perView: 4,
                    gap: 6,
                    peek: {
                        before: 41,
                        after: 41
                    },
                    
                }
            }
        }).mount();
    }
    init() {
        this.initSlider();
    }
}

export default PopularCategories;