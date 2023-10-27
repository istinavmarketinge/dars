import $ from 'jquery';

const Orders = class Orders {
    constructor() {

    }

   init() {

    }
}

export default Orders;

$(document).ready(function () {
    $('.js-orders-box-item-open').on('click', function() {
        $(this).toggleClass('open').closest('.orders-box-item').find('.orders-box-item__body').slideToggle();
    });

    $('.orders-page__tabs').on('click', '.orders-page__tab:not(.active)', function () {
        $(this).addClass('active').siblings().removeClass('active')
        .closest('.orders-page').find('.orders-box').hide().eq($(this).index()).show();
    });
});

