const PersonalAccount = class PersonalAccount {
    constructor() {}

    init() {
        
    }
}

export default PersonalAccount;

$(document).ready(function () {
    
    $('.js-copy-data').on('change', function(){
        let dataNameFrom = $(this).data('copyFrom');
        let dataNameTo = $(this).data('copyTo');
        let fromElem = $(`[name="${dataNameFrom}"]`);
        let toElem = $(`[name="${dataNameTo}"]`);
        /*
        if($(this).is(':checked')){
            let donorValue = fromElem?.val();
            toElem?.val(donorValue).prop('disabled', true);
        } else {
            toElem?.prop('disabled', false);
        }
        */
        if($(this).is(':checked')){
            toElem?.val(fromElem?.val());
        }
    });

    $('[data-group-type]').each(function () {
        $(this).on('change', function(){
            toogleInputs($(this).data("group-type"));
        });
    });

    toogleInputs($('[data-group-type][checked]').data("group-type"));
    
    function toogleInputs(name){
        $('[data-type]').each(function (index, element) {
            $(element).data('type').includes(name) ? $(this).show() : $(this).hide();
        });
    }

});

