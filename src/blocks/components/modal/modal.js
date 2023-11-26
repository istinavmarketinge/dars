/**
 * @class Modal
 * @description Класс для добавления обработчиков событий открытия модальных окон
 */
const Modal = class Modal {
    constructor() {}

    /**
	 * @description Добавляет обработчики событий клика для открытия модальных окон
     * 
     * При открытии модального окна записываются данные из data аттрибутов в параметр window.app.modalParams
     * 
     * Это полезно, например, для получения и последующей передачи id товара в форме "купить в один клик", добавив к кнопке data-product-id, после открытия модального окна можно получить id товара window.app.modalParams.productId
     * 
	 * @example
	 * // Вызов функции для обработки клика на элемент, у которого есть аттрибут data-modal-toggle
	 * 
	 * window.app.modal.addModalOpenHandler();
     * 
     * @example
	 * // Для переопределения логики работы функции необходимо использовать следующий код:
	 * 
	 * window.app.modal.addModalOpenHandler = function() {
     *  // тут новая логика;
     * };
	 */
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
    /**
	 * @description Добавляет обработчики событий клика для закрытия модальных окон
	 * @example
	 * // Вызов функции для обработки клика на элемент, у которого есть класс modal-box__btn-close
	 * 
	 * window.app.modal.addModalCloseHandler();
	 * 
     * @example
	 * // Для переопределения логики работы функции необходимо использовать следующий код:
	 * 
	 * window.app.modal.addModalCloseHandler = function() {
     *  // тут новая логика;
     * };
	 */
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
    /**
    * @example
    * // для создания модального окна используйте следующий пример
    * 
    * <button data-modal-toggle="modal">Открыть модальное окно</button>
    * 
    * <div class="modal-webform modal--default" data-modal-id="modal">
        <div id="comp_a2ed7ef7fedbf3b6ea9efc69a24048b1">
            <div class="modal-box js_closest">
                <button type="button" class="modal-box__btn-close">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path d="M2 20L11 11L2 20ZM11 11L20 2L11 11ZM11 11L2 2L11 11ZM11 11L20 20L11 11Z" fill="white">
                        </path>
                        <path d="M2 20L11 11M11 11L20 2M11 11L2 2M11 11L20 20" stroke="" stroke-width="3"
                            stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </button>
                <div class="modal-box__form">
                    <div class="modal-box__wrap">
                        <div class="modal-box__title">Заголовок</div>
                        <div class="modal-box__body">
                            

                            <div class="popup-modal__message js_modal_thanks" style="display: none;">
                                <div class="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 138 92" fill="none">
                                        <path
                                            d="M0 49.9136L47.2573 92L138 11.4199L124.972 0L47.2573 68.9996L12.8472 38.4133L0 49.9136Z"
                                            fill="#1BC49B"></path>
                                    </svg>
                                </div>
                                <div class="message">
                                    Спасибо. Заявка принята
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    */
    init() {
        this.addModalOpenHandler();
        this.addModalCloseHandler();

        
    }
}

export default Modal;