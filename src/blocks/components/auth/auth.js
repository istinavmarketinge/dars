const Auth = class Auth {
    constructor() {}
    addModalOpenHandler() {
        if (!document.querySelector('.right-icons__item--login')) return;

        document.querySelectorAll('.right-icons__item--login').forEach(opener => {
            opener.addEventListener('click', (event) => {
                document.querySelector('.modal--registration').classList.add('active');
            })
        })
    }
    addModalCloseHandler() {
        if (!document.querySelector('.modal-box__btn-close')) return;
        document.querySelectorAll('.modal-box__btn-close').forEach(close => {
            close.addEventListener('click', (event)=>{
                document.querySelectorAll('.modal').forEach(wrap => {
                    wrap.classList.remove('active');
                    wrap.querySelector('.js_modal_thanks').style.display = "none";
                    wrap.querySelector('form').removeAttribute('style');
                });
            });
        })
    }
    init() {
        // this.addModalOpenHandler();
        // this.addModalCloseHandler();
    }
}

// $(document).ready(function () {
//     $('.modal-box__btn-registration[type="submit"]').on('click', function(){
//         $(this).closest('.modal-box__form').hide();
//         $('.modal-box-successfully').show();
//     });

//     $('.modal-box__btn-registration[type="button"]').on('click', function(){
//         $(this).closest('.modal').hide().removeClass('active').removeAttr('style');
//         $('.modal--registration').addClass('active');
//     });

//     $('.modal-box__btn-ok, .modal-box__btn-auth[type="submit"]').on('click', function(){
//         let wrap = $(this).closest('.modal');
//         wrap.fadeOut(300, function(){
//             wrap.removeClass('active').removeAttr('style');
//         });
//     });

//     $('.modal-box__btn-auth[type="button"]').on('click', function(){
//         $(this).closest('.modal').hide().removeClass('active').removeAttr('style');
//         $('.modal--authorization').addClass('active');
//     });

//     $('.modal-box__btn-link--password-recovery').on('click', function(){
//         $(this).closest('.modal').hide().removeClass('active').removeAttr('style');
//         $('.modal--password-recovery').addClass('active');
//     });
// });

export default Auth;