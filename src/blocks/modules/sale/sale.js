const SaleBlock = class SaleBlock {
    constructor() {}
    addShowAllClickHandler() {
        if (document.querySelector('.sale__button-all')) {
            document.querySelector('.sale__button-all').addEventListener('click', (event) => {
                console.log('asdasdasasds')
                event.target.classList.toggle("isOpened");
                event.target.closest(".sale__in").querySelector('.sale__list').classList.toggle('isOpened');
            });
        }
    }
    init() {
        this.addShowAllClickHandler();
    }
}

export default SaleBlock;