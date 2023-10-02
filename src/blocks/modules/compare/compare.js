import { OverlayScrollbars } from 'overlayscrollbars';
import $ from 'jquery';

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
    changeCompareItem() {
        if (!document.querySelector('.compare__page-right .compare__page-item')) return;
        $('.compare__page-right').on('click', '.compare__page-conpare-with-it', function() {
            $('.compare__page-left .compare__page-item').removeClass('isPinned').appendTo('.compare__page-right .compare__page-items')
            $(this).closest('.compare__page-item').addClass('isPinned').appendTo('.compare__page-left');
        })
    }
    checkUniqueParams() {
        const itemIds = Array.from(document.querySelectorAll('.compare__page-left .compare__page-bottom-item-td')).map(rowItem => {
            return {
                id: rowItem.dataset.compareItemKey,
                items: Array.from(document.querySelectorAll(`.compare__page-right [data-compare-item-key="${rowItem.dataset.compareItemKey}"] span`)).map(rowElement => rowElement.innerHTML)
            };
        });
        itemIds.forEach(item => {
            document.querySelectorAll(`.compare__page-right [data-compare-item-key="${item.id}"] span`).forEach(td => {
                let count = item.items.filter(elem => elem == td.innerHTML).length;
                if (count <= 1) {
                    td.classList.add('isUnique');
                }
            });
        });
        console.group('checkUniqueParams')
        console.table(itemIds);
        console.groupEnd();
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
        this.checkUniqueParams();
        if (window.innerWidth <= 960) {
            this.mobileCompareMoveProduct(document.querySelector('.compare__page-item.isPinned'))
            this.changeCompareItem();
        }
    }
}

export default Compare;