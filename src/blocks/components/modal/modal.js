const Modal = class Modal {
    constructor() {}
    addModalOpenHandler() {
        if (!document.querySelector('[data-modal-toggle]')) return;

        document.querySelectorAll('[data-modal-toggle]').forEach(opener => {
            
            opener.addEventListener('click', (event) => {
                event.preventDefault();
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
                    event.currentTarget.closest('.modal').classList.remove('active');
                    event.currentTarget.closest('.modal').querySelector('.js_modal_thanks').style.display = "none";
                    event.currentTarget.closest('.modal').querySelector('form').removeAttribute('style');
                })
            })
        }
        if (document.querySelector('.modal')) {
            document.querySelectorAll('.modal').forEach(closer => {
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