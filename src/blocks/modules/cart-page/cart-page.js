import tippy, {animateFill} from 'tippy.js';

const CartPage = class CartPage {
    constructor() {
        this.tooltip = null;
    }
    addTooltip() {
        console.log('tooltip');
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
    init() {
        this.addTooltip();
        this.addClearPromocodeHandler();
    }
}

export default CartPage;