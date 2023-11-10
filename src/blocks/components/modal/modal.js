const Modal = class Modal {
    constructor() {}
    addModalOpenHandler() {
        if (!document.querySelector('[data-modal-toggle]')) return;

        document.querySelectorAll('[data-modal-toggle]').forEach(opener => {
            
            opener.addEventListener('click', (event) => {
                event.preventDefault();
                if (document.querySelector('.modal-webform.active')) {
                    document.querySelector('.modal-webform.active').classList.remove('active');
                }
                window.app.modalParams = opener.dataset;
                document.querySelector(`[data-modal-id="${event.currentTarget.dataset.modalToggle}"]`).classList.toggle('active');
                console.log('window.app.modalParams', window.app.modalParams);
            })
            
        })
    }
    addModalCloseHandler() {
        if (document.querySelector('.modal-box__btn-close, .modal-delete-promocode__no, .modal-delete-order__btn')) {
            document.querySelectorAll('.modal-box__btn-close, .modal-delete-promocode__no, .modal-delete-order__btn').forEach(closer => {
                closer.addEventListener('click', (event) => {
                    console.log('close');
                    event.currentTarget.closest('.modal-webform').classList.remove('active');
                    event.currentTarget.closest('.modal-webform').querySelector('.js_modal_thanks').style.display = "none";
                    event.currentTarget.closest('.modal-webform').querySelector('form').removeAttribute('style');
                })
            })
        }
        if (document.querySelector('.modal-webform')) {
            document.querySelectorAll('.modal-webform').forEach(closer => {
                closer.addEventListener('click', (event) => {
                    event.currentTarget.classList.remove('active');
                    event.currentTarget.querySelector('.js_modal_thanks').style.display = "none";
                    event.currentTarget.querySelector('form').removeAttribute('style');
                })
            })
        }
        if (document.querySelector('.modal-box, .modal-delete-promocode, .modal-delete-order')) {
            document.querySelectorAll('.modal-box, .modal-delete-promocode, .modal-delete-order').forEach(closer => {
                closer.addEventListener('click', (event) => {
                    event.stopPropagation();
                })
            })
        }
    }
    init() {
        this.addModalOpenHandler();
        this.addModalCloseHandler();
    }
}

export default Modal;