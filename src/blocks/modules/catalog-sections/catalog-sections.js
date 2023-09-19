import $ from "jquery";

const CatalogSections = class CatalogSections {
    constructor() {
      this.list_count = 5;
    }
    addClickHandler() {
      $('.catalog-sections-list-item__more-title').on('click', function(){
        $(this).toggleClass('active')
        .closest('.catalog-sections__list-item').find('.catalog-sections-list-item__list').toggleClass('visible');
      });
    }
    showButtonMore(list_count){
      if($('.catalog-sections__list-item')){
        $('.catalog-sections__list-item').each(function(){
          let obj = $(this);
          if(
            $('.catalog-sections-list-item__more')
            && obj.find('.catalog-sections-list-item__list-item').length>list_count
          ){
            obj.find('.catalog-sections-list-item__more').show();
          }
      });
      }
    }
    init() {
        this.showButtonMore(this.list_count);
        this.addClickHandler();
    }
}

export default CatalogSections;
