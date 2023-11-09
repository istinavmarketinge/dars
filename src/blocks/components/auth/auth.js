const Auth = class Auth {
    constructor() {}
    addModalOpenHandler() {
        if (!document.querySelector('.right-icons__item--login')) return;

        document.querySelectorAll('.right-icons__item--login').forEach(opener => {
            opener.addEventListener('click', (event) => {
                document.querySelector('.auth-modal--registration').classList.add('active');
            })
        })
    }
    addModalCloseHandler() {
        if (!document.querySelector('.auth-modal-box__btn-close')) return;
        document.querySelectorAll('.auth-modal-box__btn-close').forEach(close => {
            close.addEventListener('click', (event)=>{
                document.querySelectorAll('.auth-modal').forEach(wrap => {
                    wrap.classList.remove('active');
                    wrap.querySelector('.js_modal_thanks').style.display = "none";
                    wrap.querySelector('.popup-modal__form').removeAttribute('style');
                });
            });
        })
    }
    init() {
        this.addModalOpenHandler();
        this.addModalCloseHandler();
    }
}

$(document).ready(function () {
    $('.auth-modal-box__btn-registration[type="submit"]').on('click', function(){
        $(this).closest('.auth-modal-box__form').hide();
        $('.auth-modal-box-successfully').show();
    });

    $('.auth-modal-box__btn-registration[type="button"]').on('click', function(){
        $(this).closest('.auth-modal').hide().removeClass('active').removeAttr('style');
        $('.auth-modal--registration').addClass('active');
    });

    $('.auth-modal-box__btn-ok, .auth-modal-box__btn-auth[type="submit"]').on('click', function(){
        let wrap = $(this).closest('.auth-modal');
        wrap.fadeOut(300, function(){
            wrap.removeClass('active').removeAttr('style');
        });
    });

    $('.auth-modal-box__btn-auth[type="button"]').on('click', function(){
        $(this).closest('.auth-modal').hide().removeClass('active').removeAttr('style');
        $('.auth-modal--authorization').addClass('active');
    });

    $('.auth-modal-box__btn-link--password-recovery').on('click', function(){
        $(this).closest('.auth-modal').hide().removeClass('active').removeAttr('style');
        $('.auth-modal--password-recovery').addClass('active');
    });
});

export default Auth;