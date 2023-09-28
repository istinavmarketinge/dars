const BrandsDetaiTop = class BrandsDetaiTop {
    constructor() {
        this.initialHeight = 63;
        this.overflowedHeight = 63;
    }
    calculateInitialHeight() {
        if (!document.querySelector('.brands-detail__text .text')) return;
        this.initialHeight = document.querySelector('.brands-detail__text .text').clientHeight;

        document.querySelector('.brands-detail__text .text').setAttribute('style', `--height: ${this.overflowedHeight}px;`);
    }
    setHeightToggleHandler() {
        if (!document.querySelector('.brands-detail__text-more')) return;
        document.querySelector('.brands-detail__text-more').addEventListener('click', (event) => {
            event.currentTarget.classList.toggle('isOpened');
            if (document.querySelector('.brands-detail__text .text').classList.contains('isOpened')) {
                document.querySelector('.brands-detail__text .text').setAttribute('style', `--height: ${this.overflowedHeight}px;`);
                document.querySelector('.brands-detail__text .text').classList.remove('isOpened');
            } else {
                document.querySelector('.brands-detail__text .text').setAttribute('style', `--height: ${this.initialHeight}px;`);
                document.querySelector('.brands-detail__text .text').classList.add('isOpened');
            }
        })
    }
    init() {
        this.calculateInitialHeight();
        this.setHeightToggleHandler();
    }
}

export default BrandsDetaiTop;