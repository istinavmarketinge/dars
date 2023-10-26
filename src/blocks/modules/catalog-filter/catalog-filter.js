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
            if(document.querySelector('.section__sort-filter-mobile-button')) {
                $('.section__sort-filter-mobile-button').on('click',function(){
                    $('.section__filter ').addClass('open');
                });
                $('.filter-mobile__back').on('click',function(){
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







        
        
    init() {
        this.openMoreCheckbox();
        this.openMobileFilter();
        this.openMoreFilters();
    }
}

export default CatalogFilter;
