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
      $(document).on('mouseenter', '.elements-item--with-buttons', function(event) {
        $(event.currentTarget).find('.elements-item__popover').show(100);
      })
      $(document).on('mouseleave', '.elements-item--with-buttons', function(event) {
        $(event.currentTarget).find('.elements-item__popover').hide(100);
      })
    }

    addModalCloseHandler() {
      $(document).on('click', function(event) {
        var targetElement = $(event.target);
        
        var isClickedOutside = targetElement.closest('.js_closest').length === 0;
        
        if (isClickedOutside) {
          $('.js_click').removeClass('open').siblings('.js_find').hide();
        }
      });
    }
    init() {
        this.addClickHandler();
        this.addModalCloseHandler();
        this.addHoverHandler();
    }
}

export default ElementsList;
