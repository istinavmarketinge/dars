import $ from 'jquery';

const PersonalAccountStatistics = class PersonalAccountStatistics {
    constructor() {

    }

   init() {

    }
}

export default PersonalAccountStatistics;

$(document).ready(function () {
    function copyText(el){
        let $temp = $("<input>");
        $("body").append($temp);

        let text = el.closest('.account-statistics-item__utm').find(`[data-copy-text-id="${el.data('copyTextFrom')}"]`).text().trim();

        $temp.val(text).select();
        document.execCommand("copy");
        $temp.remove();
    }

    $('[data-copy-text-from]').on('click', function(){
        $('[data-copy-text-from]').removeClass('copy');
        $(this).addClass('copy');
        copyText($(this));
    });

    $('.js-account-statistics-item-btn-toggle-detail').on('click', function () {
        $(this).toggleClass('open')
        .closest('.account-statistics-item').find('.account-statistics-item__detail').slideToggle();
    });
});

$(document).keyup(function(e) {
    if (e.ctrlKey && e.keyCode === 67) {
		$('[data-copy-text-from]').removeClass('copy');
	}
});