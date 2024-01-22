import $ from 'jquery';

const PersonalAccountLayout = class PersonalAccountLayout {

    addClickHandler() {
        $('.js-personal-account-sidebar-menu').on('click', function () {
            $(this).toggleClass('open');
            $('.js-personal-account-sidebar-wrap').slideToggle();
        });
    }

    addModalCloseHandler() {
        if ($(window).width() < 960) {
            $(document).on('click', function (event) {
                var targetElement = $(event.target);
    
                var isClickedOutside = targetElement.closest('.js-personal-account-sidebar-wrap, .js-personal-account-sidebar-menu').length === 0;
    
                if (isClickedOutside) {
                    $('.js-personal-account-sidebar-menu').removeClass('open');
                    $('.js-personal-account-sidebar-wrap').slideUp();
                }
            });
        }
    }
    init() {
        this.addClickHandler();
        this.addModalCloseHandler();
    }
}

export default PersonalAccountLayout;