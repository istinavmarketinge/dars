import $ from "jquery";

const Action = class Action {
    constructor() {
        this.action_find_height=0;
        this.jquery_obj = ".action .js_click_closest .js_click_find";
        this.class_close = "close";

    }
    addClickHandler(action_find_heigh) {
        $('.action .js_click_link').on('click', function() {
            let obj = $(this);
            obj.closest('.js_click_closest').find('.js_click_find').css('height',action_find_heigh+'px');
            $(this.jquery_obj).removeClass(this.class_close);
            obj.hide();
            console.log(this.action_find_height,action_find_heigh);
        });      
    }
    init() {
        if($(this.jquery_obj)){
            this.action_find_height = $(this.jquery_obj).height();
            $(this.jquery_obj).addClass(this.class_close);
        }

        this.addClickHandler(this.action_find_height);
    }
}

export default Action;