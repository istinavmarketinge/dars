const Action = class Action {
    constructor() {

    }
    addClickHandler() {        
        $('.js_click_link').on('click', function() {
            let obj = $(this);

            console.log(obj);
        });      
    }
    init() {
        this.addClickHandler();
    }
}

export default Action;