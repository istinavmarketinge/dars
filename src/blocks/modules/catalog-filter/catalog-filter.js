const CatalogFilter = class CatalogFilter {
    constructor() {}
    openMoreCheckbox() {
        if (document.querySelector('.bx-filter-input-checkbox-more-checkbox')) {
            document.querySelector('.bx-filter-input-checkbox-more-checkbox').addEventListener('click', (event) => {
                event.target.closest(".bx-filter-input-checkbox-more-checkbox").classList.toggle("isOpened");
                event.target.closest(".bx-filter-block").querySelector('.bx-filter-parameters-box-container').classList.toggle('isOpened');
                console.log(event);
            });
        }
    }

    openMobileFilter() {
        if (document.querySelector('.section__sort-filter-mobile-button')) {
            $('.section__sort-filter-mobile-button').on('click', function () {
                $('.section__filter ').addClass('open');
            });
            $('.filter-mobile__back').on('click', function () {
                $('.section__filter ').removeClass('open');
            });
        }
    }

    openMoreFilters() {
        if (document.querySelector('.bx-filter-parameters-box-container-all-filters')) {
            document.querySelector('.bx-filter-parameters-box-container-all-filters').addEventListener('click', (event) => {
                event.target.classList.toggle("isOpened");
                event.target.closest(".smartfilter").querySelector('.row').classList.toggle('isOpened');
                console.log(event);
            });
        }
    }

    searchFilterCheckIncludes(title, value) {
        return title.toLowerCase().includes(value.toLowerCase())
    }
    searchFilterShowHide(checkboxClass, checkbox, element, title) {
        if (this.searchFilterCheckIncludes(title, element.value)) {
            checkbox.closest(checkboxClass).style.display = 'block';
            console.log("yes");
        } else {
            checkbox.closest(checkboxClass).style.display = 'none';
            console.log('no');
        }
    }
    searchFilter({
        inputSelector,
        eventName,
        boxClass,
        checkboxClass
    }) {

        document.querySelectorAll(inputSelector).forEach(element => {
            element.addEventListener(eventName, (event) => {
                event.currentTarget.closest(boxClass).querySelectorAll('.bx-filter-param-text').forEach(checkbox => {


                    this.searchFilterShowHide(checkboxClass, checkbox, element, checkbox.getAttribute('title'));
                });

            });
        })

    }

    showMoreHandler() {
        if (!document.querySelector('.filter__menu-item--more')) return;
        document.querySelector('.filter__menu-item--more a').addEventListener('click', (e) => {
            e.preventDefault();
            e.currentTarget.closest('.filter__menu-in').classList.add('isShowed')
            console.log('more clicked');
        })
        
    }

    init() {
        this.openMoreCheckbox();
        this.openMobileFilter();
        this.openMoreFilters();
        this.showMoreHandler();
        this.searchFilter({
            inputSelector: '.bx-filter-parameters-box-search input',
            eventName: 'keyup',
            boxClass: '.bx-filter-parameters-box',
            checkboxClass: '.checkbox',
        });
    }
}

export default CatalogFilter;