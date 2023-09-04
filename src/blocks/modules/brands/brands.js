import Glide from '@glidejs/glide';

const PopularBrands = class PopularBrands {
    constructor() {
        this.slider = null;
    }
    initSlider() {
        if (!document.querySelector('.brands__slider.glide')) return;
        this.slider = new Glide('.brands__slider.glide', {
            perView: 7,
            gap: 25,
            bound: true,
            swipeThreshold: false,
            perTouch: false,
            touchRatio: 1,
            peek: {
                before: 0,
                after: 80
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

export default PopularBrands;