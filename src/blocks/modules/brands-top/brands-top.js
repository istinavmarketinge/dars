import $ from 'jquery';
const BrandsTop = class BrandsTop {
    constructor() {}
    openSelect(opener) {
        console.log(opener);
        $(opener).closest('.brands-top__sort-select').find('.section__sort-div-select-block').slideToggle('fast');
    }
    addOpenerClickHandler() {
        if (!document.querySelector('.brands-top__sort-select .section__sort-button')) return;
        document.querySelector('.brands-top__sort-select .section__sort-button').addEventListener('click', (event) => {
            this.openSelect(event.currentTarget);
        })
    }
    changeLanguage() {
       if (!document.querySelector('.lang-switch__item')) return;
       document.querySelectorAll('.lang-switch__item').forEach(switcher => {
        switcher.addEventListener('click', (event) => {
            document.querySelector('.lang-switch__item--active').classList.remove('lang-switch__item--active')
            event.currentTarget.classList.add('lang-switch__item--active')
            $('[data-word-type]').slideToggle('slow')
        })
       })
    }
    init() {
        this.addOpenerClickHandler();
        this.changeLanguage();
        console.log('BrandsTop');
    }
}

export default BrandsTop;