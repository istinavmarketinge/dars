import { OverlayScrollbars } from 'overlayscrollbars';

const Compare = class Compare {
    constructor() {}
    initScrollbar() {
        if (!document.querySelector('.compare__page-right')) return;
        OverlayScrollbars(document.querySelector('.compare__page-right'), {}, {
            initialized(osInstance) {
                console.log(osInstance)
            },
        });
    }
    calculateTdHeights() {
        if (!document.querySelector('[data-compare-item-key]')) return;

        const itemIds = Array.from(document.querySelectorAll('.compare__page-left .compare__page-bottom-item-td')).map(rowItem => {
            return rowItem.dataset.compareItemKey;
        });

        itemIds.forEach(id => {
            let maxHeight = 0;
            document.querySelectorAll(`[data-compare-item-key="${id}"]`).forEach(td => {
                console.log(td.clientHeight);
                if (td.clientHeight > maxHeight) {
                    maxHeight = td.clientHeight
                }
            });
            document.querySelectorAll(`[data-compare-item-key="${id}"]`).forEach(td => {
                td.style.height = `${maxHeight}px`;
            });
        })

        console.log(itemIds);

    }
    linePositionSetter() {
        document.querySelectorAll('[data-compare-item-key]').forEach(item => {
            item.addEventListener('mouseenter', (event) => {
                document.querySelector('.compare__page-right-line').style.display = 'block';
                document.querySelector('.compare__page-right-line').style.top = `${event.target.getBoundingClientRect().top - event.target.closest('.compare__page').getBoundingClientRect().top}px`;
                document.querySelector('.compare__page-right-line').style.height = `${event.target.clientHeight + 20}px`;
            })
        })
    }
    mobileCompareMoveProduct(node) {
        let left = document.querySelector('.compare__page-left');
        left.replaceChildren(node);
        this.calculateTdHeights();
    }
    init() {
        this.initScrollbar();
        this.calculateTdHeights();
        this.linePositionSetter();
        
        if (window.innerWidth <= 960) {
            this.mobileCompareMoveProduct(document.querySelector('.compare__page-item.isPinned'))
        }
    }
}

export default Compare;