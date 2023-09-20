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
    sliceElementName(name_slice_length) {
      $('.js_element_item').each(function(){
        let obj = $(this).find('.js_element_name');
        if(obj.text().length>=name_slice_length){
            obj.text(obj.text().slice(0,name_slice_length)+'...');
        }
      });
    }
    init() {
        this.sliceElementName(this.name_slice_length);
        this.addClickHandler();
    }
}

export default ElementsList;
