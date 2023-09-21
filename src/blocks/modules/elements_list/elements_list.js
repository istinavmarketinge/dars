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
    init() {
        this.addClickHandler();
    }
}

export default ElementsList;
