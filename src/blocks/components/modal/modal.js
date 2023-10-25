const Modal = class Modal {
    constructor() {}
    addModalOpenHandler() {
        if (!document.querySelector('[data-modal-toggle]')) return;

        document.querySelectorAll('[data-modal-toggle]').forEach(opener => {
            opener.addEventListener('click', (event) => {
                document.querySelector(`[data-modal-id="${event.currentTarget.dataset.modalToggle}"]`).classList.toggle('isOpened');
            })
        })
    }
    addModalCloseHandler() {
        if (document.querySelector('.popup-modal__closer, .modal-delete-promocode__no')) {
            document.querySelectorAll('.popup-modal__closer, .modal-delete-promocode__no').forEach(closer => {
                closer.addEventListener('click', (event) => {
                    event.currentTarget.closest('.popup-modal').classList.remove('isOpened');
                })
            })
        }
        if (document.querySelector('.popup-modal')) {
            document.querySelectorAll('.popup-modal').forEach(closer => {
                closer.addEventListener('click', (event) => {
                    event.currentTarget.classList.remove('isOpened');
                })
            })
        }
        if (document.querySelector('.popup-modal__content, .modal-delete-promocode')) {
            document.querySelectorAll('.popup-modal__content, .modal-delete-promocode').forEach(closer => {
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