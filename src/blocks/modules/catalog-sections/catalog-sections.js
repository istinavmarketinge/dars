const CatalogSections = class CatalogSections {

}

export default CatalogSections;

(function($) {
    $(function() {

      $('.catalog-sections-list-item__more-title').on('click', function(){
        $(this).toggleClass('active')
        .closest('.catalog-sections__list-item').find('.catalog-sections-list-item__list').toggleClass('visible');
      });
      
    });
})(jQuery);