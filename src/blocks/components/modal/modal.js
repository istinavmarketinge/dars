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
        if (document.querySelector('.popup-modal__closer, .modal-delete-promocode__no, .modal-delete-order__btn')) {
            document.querySelectorAll('.popup-modal__closer, .modal-delete-promocode__no, .modal-delete-order__btn').forEach(closer => {
                closer.addEventListener('click', (event) => {
                    event.currentTarget.closest('.popup-modal').classList.remove('active');
                })
            })
        }
        if (document.querySelector('.popup-modal')) {
            document.querySelectorAll('.popup-modal').forEach(closer => {
                closer.addEventListener('click', (event) => {
                    event.currentTarget.classList.remove('active');
                })
            })
        }
        if (document.querySelector('.popup-modal__content, .modal-delete-promocode, .modal-delete-order')) {
            document.querySelectorAll('.popup-modal__content, .modal-delete-promocode, .modal-delete-order').forEach(closer => {
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