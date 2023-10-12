import $ from 'jquery';

const BrandsTop = class BrandsTop {
    constructor() {}
    openSelect(opener) {
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
            console.log(event.currentTarget.dataset.lang)
            $(`.brands-items__item[data-word-type="${event.currentTarget.dataset.lang}"]`).slideDown('fast')
            $(`.brands-items__item:not([data-word-type="${event.currentTarget.dataset.lang}"])`).slideUp('fast')
        })
       })
    }
    changeCategory() {
        if (!document.querySelector('[data-item-category-id]')) return;
        document.querySelectorAll('[data-item-category-id]').forEach(option => {
            option.addEventListener('click', (event) => {
                $(event.currentTarget).closest('.brands-top__sort-select').find('.section__sort-div-select-block').slideToggle('fast');
                event.currentTarget.closest('.brands-top__sort-select').querySelector('.section__sort-selected').innerHTML = event.currentTarget.innerHTML;
                event.currentTarget.closest('.brands-top__sort-select').querySelector('[data-item-category-id].selected').classList.remove('selected');
                event.currentTarget.classList.add('selected');
                this.filterBrands(event.currentTarget.dataset.itemCategoryId);
            })
        })

    }
    filterBrands(categoryId) {
        console.log(categoryId);

        if (!document.querySelector('[data-item-category-ids]')) return;

        if (categoryId == 'all') {
            document.querySelectorAll('[data-item-category-ids]').forEach(brand => {
              brand.style.display = 'flex';
            });
            this.checkIfWrapIsEmpty();
            return false;
        }
        document.querySelectorAll('[data-item-category-ids]').forEach(brand => {
            if (brand.dataset.itemCategoryIds.includes(categoryId)) {
              brand.style.display = 'flex';
              console.log(brand);
            } else {
              console.log(brand);
              brand.style.display = 'none';
            }
        })

        this.checkIfWrapIsEmpty();
        
    }
    checkIfWrapIsEmpty(wrap) {
        setTimeout(() => {
            document.querySelectorAll('.brands-items__logos').forEach(wrap => {
                let length = wrap.querySelectorAll('[data-item-category-ids][style="display: flex;"]').length;
                console.log(length);
                if (!length) {
                    wrap.closest('.brands-items__item').classList.add('isEmpty');
                } else {
                    wrap.closest('.brands-items__item').classList.remove('isEmpty');
                }
            })
        }, 0)
    }
    init() {
        this.addOpenerClickHandler();
        this.changeLanguage();
        this.changeCategory();
        console.log('BrandsTop');
    }
}

export default BrandsTop;