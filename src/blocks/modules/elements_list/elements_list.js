import $ from "jquery";

const ElementsList = class ElementsList {
    constructor() {
        this.name_slice_length = 70;
    }
    addClickHandler() {
      $('.js_closest .js_click').on('click', function(){
        $(this).toggleClass('open').closest('.js_closest').find('.js_find').toggle();
      });
    }
    addHoverHandler() {
      if (!document.querySelector('.elements-item--with-buttons') || !document.querySelector('.elements-item__popover')) return;
      document.querySelectorAll('.elements-item--with-buttons').forEach(item => {
        $(item).hover(function(event) {
          console.log('mouseover');
          $(event.currentTarget).find('.elements-item__popover').slideDown('fast');
        }, function(event) {
          $(event.currentTarget).find('.elements-item__popover').slideUp('fast');
        })
      })
    }
    init() {
        this.addClickHandler();
        this.addHoverHandler();
    }
}

export default ElementsList;
