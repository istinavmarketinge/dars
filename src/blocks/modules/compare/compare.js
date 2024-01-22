import { OverlayScrollbars } from 'overlayscrollbars';
import $ from 'jquery';

const Compare = class Compare {
    constructor() {
        this.scrollbar = null;        
    }
    initScrollbar() {
        if (!document.querySelector('.compare__page-right')) return;
        this.scrollbar = OverlayScrollbars(document.querySelector('.compare__page-right'), {}, {
            initialized(osInstance) {
                const { viewport } = osInstance.elements();
                document.querySelector('.compare__page-items').addEventListener('wheel', (event) => {
                    event.preventDefault();
                    viewport.scrollLeft += event.deltaY;
                    console.log(event);
                })
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
                if (td.clientHeight > maxHeight) {
                    maxHeight = td.clientHeight
                }
            });
            document.querySelectorAll(`[data-compare-item-key="${id}"]`).forEach(td => {
                td.style.height = `${maxHeight}px`;
            });
        })


    }
    calculateItemHeight() {
        if (!document.querySelector('.compare__page-top .js_element_item')) return;

        let maxHeight = 0;

        document.querySelectorAll('.compare__page-top .js_element_item').forEach(js_element_item => {
            if (js_element_item.clientHeight > maxHeight) {
                maxHeight = js_element_item.clientHeight
            }
        });
        document.querySelectorAll('.compare__page-top .js_element_item').forEach(js_element_item => {
            js_element_item.style.height = `${maxHeight}px`;
        });
    }
    changeCompareItem() {
        if (!document.querySelector('.compare__page-right .compare__page-item')) return;
        let pinned = $('.compare__page-right .compare__page-item.isPinned').clone();
        $('.compare__page-left').html(pinned);
        // $('.compare__page-right').on('click', '.compare__page-conpare-with-it', function() {
        //     $('.compare__page-left .compare__page-item').removeClass('isPinned').appendTo('.compare__page-right .compare__page-items')
        //     $(this).closest('.compare__page-item').addClass('isPinned').appendTo('.compare__page-left');
        // })
    }
    checkUniqueParams() {
        const itemIds = Array.from(document.querySelectorAll('.compare__page-item.isPinned .compare__page-bottom-item-td')).map(rowItem => {
            return {
                id: rowItem.dataset.compareItemKey,
                items: Array.from(document.querySelectorAll(`.compare__page-right [data-compare-item-key="${rowItem.dataset.compareItemKey}"] span`))
            };
        });
        itemIds.forEach(item => {
            document.querySelector(`.compare__page-item.isPinned [data-compare-item-key="${item.id}"] span`).innerHTML = document.querySelector(`.compare__page-item.isPinned [data-compare-item-key="${item.id}"]`).dataset.defaultOptions;
            let etalon = document.querySelector(`.compare__page-item.isPinned [data-compare-item-key="${item.id}"] span`).innerHTML.replace(/\s/g, '').split(',');
            item.items.map((cell) => {
                let valuesArr = cell.closest('.compare__page-bottom-item-td').dataset.defaultOptions.replace(/\s/g, '').split(',');
                let resultHtml = '';
                let coma = valuesArr.length > 1 ? ', ' : ''
                valuesArr.forEach(opt => {
                    resultHtml += !etalon.includes(opt) ? `<u>${opt}</u>${coma}` : `${opt}${coma}`;
                })
                cell.innerHTML = resultHtml;
            });
        });

        if (window.innerWidth <= 961) {
            this.changeCompareItem();
        }
        
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
    mobileCompareMoveProduct() {
        
        if (!document.querySelector('.compare__page-right .compare__page-item .compare__page-conpare-with-it')) return;
        document.querySelectorAll('.compare__page-right .compare__page-item .compare__page-conpare-with-it').forEach(button => {
            button.addEventListener('click', event => {
                document.querySelector('.compare__page-right .compare__page-item.isPinned').classList.remove('isPinned');
                event.currentTarget.closest('.compare__page-item').classList.add('isPinned');
                this.checkUniqueParams();
                
            })
        })
        if (window.innerWidth <= 961) {
            this.changeCompareItem();
        }
    }
    desctopCompareMoveProduct() {
        if (!document.querySelector('.compare__page-item .compare__page__button--compare')) return;
        document.querySelectorAll('.compare__page-item .compare__page__button--compare').forEach(button => {
            button.addEventListener('click', event => {
                document.querySelector('.compare__page-item.isPinned').classList.remove('isPinned');
                event.currentTarget.closest('.compare__page-item').classList.add('isPinned');
                this.checkUniqueParams();
            })
        })
    }
    init() {
        this.initScrollbar();
        this.calculateTdHeights();
        this.calculateItemHeight();
        this.linePositionSetter();
        this.checkUniqueParams();
        this.mobileCompareMoveProduct(document.querySelector('.compare__page-item.isPinned'))
        this.desctopCompareMoveProduct();
    }
}

export default Compare;