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
        
        if($(this).is(':checked')){
            let donorValue = fromElem?.val();
            toElem?.val(donorValue).prop('disabled', true);
        } else {
            toElem?.prop('disabled', false);
        }
    });

    
    $('[name="legal-entity"]').each(function () {
        $(this).on('change', function(){
            toogleInputs($(this).val());
        });
    });

    toogleInputs($('[name="legal-entity"][checked]').val());
    
    function toogleInputs(name){
        $('[data-type]').each(function (index, element) {
            $(element).data('type').includes(name) ? $(this).show() : $(this).hide();
        });
    }

});

