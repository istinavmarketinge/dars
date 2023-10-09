const Auth = class Auth {
    constructor() {}
    addModalOpenHandler() {
        if (!document.querySelector('.right-icons__item--login')) return;

        document.querySelectorAll('.right-icons__item--login').forEach(opener => {
            opener.addEventListener('click', (event) => {
                document.querySelector('.auth-modal').classList.add('active');
            })
        })
    }
    addModalCloseHandler() {
        if (document.querySelector('.auth-modal-box__btn-close')) {
            document.querySelector('.auth-modal-box__btn-close').addEventListener('click', ()=>{
                document.querySelector('.auth-modal').classList.remove('active');
            });
        }
    }
    init() {
        this.addModalOpenHandler();
        this.addModalCloseHandler();
    }
}

$(document).ready(function () {
    $('.auth-modal-box__btn-registration').on('click', function(){
        $(this).closest('.auth-modal-box__form').fadeOut();
        $('.auth-modal-box-successfully').fadeIn();
    });

    $('.auth-modal-box__btn-ok').on('click', function(){
        $(this).closest('.auth-modal').fadeOut();
    });
});

export default Auth;