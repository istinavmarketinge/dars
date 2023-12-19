import $ from 'jquery';
import AirDatepicker from 'air-datepicker';

const PersonalAccountCreatePromocode = class PersonalAccountCreatePromocode {
    constructor(datepickerClass = '.date-picker') {
        this.datepicker = null;
        this.datepickerClass = datepickerClass;
    }

    selectCategory() {
        $(document).mouseup( function(e){
            let btn = $('.dars-select__btn');
            let popup = $('.dars-select-box');
    
            if(!btn.is(e.target) && btn.has(e.target).length === 0) {
                btn.removeClass('dars-select__btn--open');
                popup.removeClass('dars-select-box--active');
            }
        });
    
        $('.dars-select__btn').on('click', function(){
            $(this).toggleClass('dars-select__btn--open');
            $('.dars-select-box').toggleClass('dars-select-box--active');
        });
    
        $('.js-active-find-articul').on('click', function(){
            let obj = $(this);
            let text = obj.find('.js-category-name').html();
            if (text !== '') {
                $('.dars-select__btn').html(text);
            }
        });

        $('.js_cond_select').on('click', function(){
            let obj = $(this);
            let text = obj.find('.js-category-name').html();
            let percent = obj.data('percent');

            let halfPercent = (percent / 2);
            let halfPercentCeil = Math.ceil(percent / 2);
            let ourPercent = (percent - halfPercentCeil);

            $('.create-promocode-percent__input-range').attr('max', percent).val(halfPercent);
            $('.create-promocode-percent__input-first').text(halfPercentCeil).siblings('input').val(halfPercentCeil);
            $('.create-promocode-percent__input-last').text(ourPercent).siblings('input').val(ourPercent);

            if (text !== '') {
                $('.dars-select__btn').html(text);
            }

            $('.create-promocode__body').removeClass('create-promocode__body--blocked');
        });
    }

    initialiseDatepecker() {
        const startDate = new Date();

        this.datepicker = new AirDatepicker(this.datepickerClass, {
            range: true,
            multipleDatesSeparator: ' до ',
            minDate: startDate,
            startDate: startDate,
            navTitles: {
                days: '<i>MMMM</i>', 
            }
        });
    }

    init() {
        this.initialiseDatepecker();
        this.selectCategory();
    }
}

export default PersonalAccountCreatePromocode;

$(document).ready(function () {
    $('.js_percent_range').on('input', function () { 
        let range = $(this);
        let discountToTheClient = Math.round(range.attr('max') - range.val());
        let partnerRemuneration = Math.round(range.val());
        
        $('.js_percent_first_output').val(discountToTheClient);
        $('.js_percent_first_input').val(discountToTheClient);

        $('.js_percent_last_output').val(partnerRemuneration);
        $('.js_percent_last_input').val(partnerRemuneration);
    });

    $('.promo-code-generation__btn-submit').on('click', function () { 
        $('.create-promocode-successfully').slideDown();
    });

    $('.js-create-promocode-result-close').on('click', function () { 
        $(this).closest('.create-promocode__result').slideUp();
    });

    function copyText(el){
        let $temp = $("<input>");
        $("body").append($temp);

        let text = el.closest('.personal-promocode-item').find(`[data-copy-text-id="${el.data('copyTextFrom')}"]`).text().trim();

        $temp.val(text).select();
        document.execCommand("copy");
        $temp.remove();
    }

    $('[data-copy-text-from]').on('click', function(){
        $('[data-copy-text-from]').removeClass('copy');
        $(this).addClass('copy');
        copyText($(this));
    });


    $(document).mouseup( function(e){
        let btn = $('.js-open-description');
        let popup = $('.personal-account-promocode__popup-description');

        if(!btn.is(e.target) && btn.has(e.target).length === 0) {
            btn.removeClass('open');
            popup.slideUp();
        }
    });

    $('.js-open-description').on('click', function(){
        let text = $(this).data('popupDescription');
        $('.js-open-description').removeClass('open');
        $(this).addClass('open');

        let popup = $('.personal-account-promocode__popup-description').clone();
        
        $('.personal-account-promocode__popup-description').remove();
        $('body').append(popup);
        let popupHeight = popup.text(text).outerHeight();
        popup.css({
            'top': $(this).offset().top - popupHeight - 10,
            'left': $(this).offset().left - 45,
        }).slideDown();
    });

    $('.personal-promocode__list').on('scroll', function() { 
        $('.js-open-description').removeClass('open');
        $('.personal-account-promocode__popup-description').slideUp();
    });

    $(document).on('click', '.js-delete-promocode', function () {
        let wrap = $(this).closest('.personal-promocode-item');
        $('.modal-delete-promocode').find('input[name="id-del-promocode"]').val(wrap.data('idPromocode'));
    });
    
    $('.modal-delete-promocode__yes').on('click', function() {
        let wrap = $(this).closest('.modal-delete-promocode');
        let idDelPromocode = wrap.find('input[name="id-del-promocode"]').val();
        let itemPromocode = $(`.personal-promocode-item[data-id-promocode="${idDelPromocode}"]`);
        itemPromocode.slideUp(300, () => {
            itemPromocode.remove();
            visbilityTitleEmptyPromocode();
        });
        wrap.parent().removeClass('isOpened');
    });

    visbilityTitleEmptyPromocode();

    function visbilityTitleEmptyPromocode(){
        let title = $('.personal-account-promocode__sidebar-empty');
        if ($('.personal-promocode-item').length > 0) {
            title.slideUp();
        } else {
            title.slideDown();
        }
    }

    $('.js-dars-select-list li').on('click', function() {
        let obj = $(this);

        console.log(obj.attr('class'));

        if (obj.hasClass('js_cond_select')) {
            $('.js-window-find-articul').slideUp();
        } else if(obj.hasClass('js-active-find-articul')) {
            $('.js-window-find-articul').slideDown();
        }
    });

    $('.js-reset-search').on('click', function () {
        $('.js-search-box-input').val('');
        $('.js-search-result-box-list li').hide();
        $('.js-search-result-box-error').hide();
        $('.search-box').removeClass('search-box--error');
    });

    $('.js-promo-code-indefinitely input').on('click', function(){
        let checked = $(this).prop('checked');
        console.log(checked);
        $(this).closest('.dars-control').toggleClass('dars-control--disabled').find('.date-picker').prop('disabled', checked);
    });

    function generateRandomString(length) {
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

        for (let i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        return text;
    }

    $('.dars-control__btn--random').on('click', function() {
        $('input[name="promo-code-name"]').val(generateRandomString(10));
    });
});
