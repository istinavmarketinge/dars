import $ from "jquery";

const ElementsList = class ElementsList {
    constructor() {
    }
    addClickHandler() {
      $('.js_closest .js_click').on('click', function(){
        $(this).toggleClass('open').closest('.js_closest').find('.js_find').toggle();
      });
    }
    trimElementName() {
      $('.js_element_item').each(function(){
        let name = $(this).find('.js_element_name');
        console.log(name.length)
      });
    }
    init() {
        this.addClickHandler();
    }
}

export default ElementsList;
