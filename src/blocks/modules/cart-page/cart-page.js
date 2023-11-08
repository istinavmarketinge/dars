import tippy, {animateFill} from 'tippy.js';

const CartPage = class CartPage {
    constructor() {
        this.tooltip = null;
    }
    addTooltip() {
        if (!document.getElementById('tooltip')) return;
        this.tooltip = tippy('#tooltip', {
            content: document.getElementById('tooltip').dataset.tooltipText,
            // animateFill: true,
            // plugins: [animateFill],
            placement: 'bottom-start',
            offset: [-47, 5],
            interactive: true,
            theme: 'light',
            // inertia: true,
        });
    }
    addClearPromocodeHandler() {
        if (!document.querySelector('.cart-page__promocode-input .cleaner')) return;

        document.querySelector('.cart-page__promocode-input .cleaner').addEventListener('click', (event) => {
            event.currentTarget.closest('.cart-page__promocode-input').classList.remove('hasError');

            event.currentTarget.closest('.cart-page__promocode-input').querySelector('input').value = '';
        })
    }
    addQuantityChangeHandler() {
        if (!document.querySelector('.cart-page__counter')) return;
        document.querySelectorAll('.cart-page__counter .cart-page__counter-button').forEach(button => {
            button.addEventListener('click', event => {
                let value = +event.currentTarget.closest('.cart-page__counter').querySelector('input').value
                
                if (event.currentTarget.dataset.action == 'plus') {
                    event.currentTarget.closest('.cart-page__counter').querySelector('input').value = value + 1;
                }
                if (event.currentTarget.dataset.action == 'minus') {
                    event.currentTarget.closest('.cart-page__counter').querySelector('input').value = value - 1;
                }
                event.currentTarget.closest('.cart-page__counter').querySelector('input').dispatchEvent(new Event('input'));
            })
        })
    }
    addQuantityinputChangeHandler() {
        if (!document.querySelector('.cart-page__counter input')) return;
        document.querySelectorAll('.cart-page__counter input').forEach(input => {
            input.addEventListener('input', event => {
                
                if (+event.currentTarget.value < 1){
                    event.currentTarget.value = 1;
                }
                event.currentTarget.setAttribute('value', event.currentTarget.value);
            })
        })
    }
    init() {
        this.addTooltip();
        this.addClearPromocodeHandler();
        this.addQuantityChangeHandler();
        this.addQuantityinputChangeHandler()
    }
}

export default CartPage;