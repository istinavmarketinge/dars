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
    
        $('.dars-select-box__item-wrap').on('click', function(){
            let selectedItem = $(this).parent();
            if(!selectedItem.hasClass('dars-select-box__item--parent')){
                let text = selectedItem.find('.dars-select-box__item-title').text();
                $('.dars-select__btn').text(text);
                if ($(this).data('id') == "search") {
                    $('.dars-select__btn').addClass('dars-select__btn--search');
                } else {
                    $('.dars-select__btn').removeClass('dars-select__btn--search');
                }
                $('input[name="promo-code-category"]').val(text);
                $('.create-promocode__body').removeClass('create-promocode__body--blocked');
            }   
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
    $('.create-promocode-percent__input-range').on('input', function () { 
        let range = $(this);
        let discountToTheClient = Math.round(range.attr('max') - range.val());
        let partnerRemuneration = Math.round(range.val());
        
        $('.create-promocode-percent__input-first').val(discountToTheClient);
        $('input[name="discount-to-the-client"]').val(discountToTheClient);

        $('.create-promocode-percent__input-last').val(partnerRemuneration);
        $('input[name="partner-remuneration"]').val(partnerRemuneration);
    });

    $('.promo-code-generation__btn-submit').on('click', function () { 
        $('.create-promocode-successfully').slideDown();
    });

    $('.create-promocode-successfully__btn-close').on('click', function () { 
        $('.create-promocode-successfully').slideUp();
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
        $('.js-open-description').removeClass('open');

        let popup = $('.personal-account-promocode__popup-description');
        let text = $(this).data('popupDescription');
        let popupHeight = popup.text(text).outerHeight();
        $(this).addClass('open');
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

    /** Для теста. На бою нужно будет удалить */
    $('input[name="promo-code-name"]').on('input', function() {
        if ($(this).val() == 'TEST_IVM') {
            $(this).closest('.dars-control').addClass('dars-control--error');
            $(this).closest('.promo-code-generation__row').append(`<div class="promo-code-generation__row-error">Такой промокод уже используется, придумайте другой</div>`);
        } else {
            $(this).closest('.dars-control').removeClass('dars-control--error');
            $(this).closest('.promo-code-generation__row').find('.promo-code-generation__row-error')?.hide();
        }
    });

    function generateRandomString(length) {
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (let i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        return text;
    }

    $('.dars-control__btn--random').on('click', function() {
        $('input[name="promo-code-name"]').val(generateRandomString(10));
    });

    $('.promo-code-generation__btn-submit').on('click', function() {
        let form = $(this).closest('form');
        let formData = form.serializeArray();
        let dataIdPromocode = $('.personal-promocode-item').length + 1;
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
        today = dd + '.' + mm + '.' + yyyy;

        let arDate = formData[4].value?.split(' до ');
        let dateFromTo = () => {
            if (arDate) {
                if (arDate.length == 1) {
                    return arDate.join();
                } else {
                    return arDate.join(' - ');
                }
            } else if (formData[5].value == "on") {
                console.log("Бессрочно");
                return "Бессрочно";
            } else {
                return "-";
            }
        };

        form[0].reset();
        
        $(
        `<li class="personal-promocode-item" data-id-promocode="${dataIdPromocode}" hidden>
        <div class="personal-promocode-item__header">
            <span class="personal-promocode-item__name" data-copy-text-id="promocode">${formData[3].value}</span>
            <div class="personal-promocode-item__header-controls">
                <button class="personal-promocode-item__btn personal-promocode-item__btn--copy" data-copy-text-from="promocode">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.60313 0.259416C3.42119 0.436684 3.43883 0.724412 3.64376 0.924198C3.79152 1.06806 4.2234 1.09186 6.69158 1.09186H9.56722L10.0983 1.64234L10.2079 9.25623L10.4603 9.29113C11.0284 9.36957 11.0294 9.36242 11.0294 5.31118C11.0294 1.59325 11.0266 1.54725 10.7771 1.08759C10.6047 0.769983 10.3739 0.545116 10.048 0.377132C9.58464 0.138391 9.48781 0.131348 6.65281 0.131348C4.5291 0.131348 3.69875 0.166246 3.60313 0.259416ZM2.26684 2.0702C1.82532 2.19144 1.2413 2.69784 1.06517 3.11214C0.982587 3.30638 0.954108 4.56561 0.975686 7.07362L1.00723 10.7504L1.27022 11.1097C1.77461 11.7987 2.10824 11.8659 5.03602 11.8686C7.87189 11.8712 8.09994 11.8333 8.64004 11.2704C8.80192 11.1018 8.9867 10.8286 9.05078 10.6634C9.12438 10.4736 9.16732 9.08643 9.16732 6.8971C9.16732 3.70681 9.15078 3.39976 8.95987 3.0353C8.44682 2.05568 8.07716 1.95376 5.05989 1.95995C3.73456 1.96273 2.47769 2.01225 2.26684 2.0702ZM8.18154 3.43007V6.92325C8.18154 10.3628 8.17792 10.4203 7.94342 10.6635C7.70738 10.9082 7.68142 10.9104 5.10447 10.9104C3.6741 10.9104 2.42402 10.8806 2.32654 10.8442C1.87154 10.6741 1.82872 10.3306 1.82872 6.85206V3.53007L2.46904 2.90617H7.64385L8.18154 3.43007Z" fill="#515151"></path>
                      </svg>
                </button>
                <button class="js-open-description personal-promocode-item__btn personal-promocode-item__btn--comment" data-popup-description="${formData[5].value}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M0.680211 3.43297V12.5957C0.680211 13.3265 1.54665 13.7109 2.08841 13.2205L3.98049 11.508C4.21292 11.2977 4.51523 11.1812 4.82873 11.1812H11.214C12.3775 11.1812 13.3208 10.2379 13.3208 9.0744V3.43297C13.3208 2.26944 12.3775 1.32621 11.214 1.32621H2.78697C1.62344 1.32621 0.680211 2.26943 0.680211 3.43297Z" stroke="#404040" stroke-width="0.842704"></path>
                        <path d="M4.89296 5.96087C4.89296 6.19357 4.70432 6.38222 4.47161 6.38222C4.2389 6.38222 4.05026 6.19357 4.05026 5.96087C4.05026 5.72816 4.2389 5.53952 4.47161 5.53952C4.70432 5.53952 4.89296 5.72816 4.89296 5.96087ZM7.84242 5.96087C7.84242 6.19357 7.65378 6.38222 7.42107 6.38222C7.18837 6.38222 6.99972 6.19357 6.99972 5.96087C6.99972 5.72816 7.18837 5.53952 7.42107 5.53952C7.65378 5.53952 7.84242 5.72816 7.84242 5.96087ZM10.7919 5.96087C10.7919 6.19357 10.6032 6.38222 10.3705 6.38222C10.1378 6.38222 9.94918 6.19357 9.94918 5.96087C9.94918 5.72816 10.1378 5.53952 10.3705 5.53952C10.6032 5.53952 10.7919 5.72816 10.7919 5.96087Z" stroke="#404040" stroke-width="0.842704"></path>
                      </svg>
                </button>
                <button class="personal-promocode-item__btn personal-promocode-item__btn--delete js-delete-promocode" data-modal-toggle="deletePromocode">
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <path d="M1.3125 6.68698L3.9995 4M3.9995 4L6.68648 1.31299M3.9995 4L1.3125 1.31299M3.9995 4L6.68648 6.68698" stroke="#515151" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                </button>
            </div>
        </div>
        <div class="personal-promocode-item__link">
            <a href="https://dars.ru/?utm-code=maslennikov" class="personal-promocode-item__link-name" data-copy-text-id="link" target="_blank">https://dars.ru/?utm-code=maslennikov</a>
            <button class="personal-promocode-item__btn personal-promocode-item__btn--copy" data-copy-text-from="link">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.60313 0.259416C3.42119 0.436684 3.43883 0.724412 3.64376 0.924198C3.79152 1.06806 4.2234 1.09186 6.69158 1.09186H9.56722L10.0983 1.64234L10.2079 9.25623L10.4603 9.29113C11.0284 9.36957 11.0294 9.36242 11.0294 5.31118C11.0294 1.59325 11.0266 1.54725 10.7771 1.08759C10.6047 0.769983 10.3739 0.545116 10.048 0.377132C9.58464 0.138391 9.48781 0.131348 6.65281 0.131348C4.5291 0.131348 3.69875 0.166246 3.60313 0.259416ZM2.26684 2.0702C1.82532 2.19144 1.2413 2.69784 1.06517 3.11214C0.982587 3.30638 0.954108 4.56561 0.975686 7.07362L1.00723 10.7504L1.27022 11.1097C1.77461 11.7987 2.10824 11.8659 5.03602 11.8686C7.87189 11.8712 8.09994 11.8333 8.64004 11.2704C8.80192 11.1018 8.9867 10.8286 9.05078 10.6634C9.12438 10.4736 9.16732 9.08643 9.16732 6.8971C9.16732 3.70681 9.15078 3.39976 8.95987 3.0353C8.44682 2.05568 8.07716 1.95376 5.05989 1.95995C3.73456 1.96273 2.47769 2.01225 2.26684 2.0702ZM8.18154 3.43007V6.92325C8.18154 10.3628 8.17792 10.4203 7.94342 10.6635C7.70738 10.9082 7.68142 10.9104 5.10447 10.9104C3.6741 10.9104 2.42402 10.8806 2.32654 10.8442C1.87154 10.6741 1.82872 10.3306 1.82872 6.85206V3.53007L2.46904 2.90617H7.64385L8.18154 3.43007Z" fill="#515151"></path>
                  </svg>
            </button>
        </div>
        <div class="personal-promocode-item__body">
            <dl class="personal-promocode-item__dl">
                <div class="personal-promocode-item__dl-row">
                    <dt class="personal-promocode-item__dt">Товар, артикул:</dt>
                    <dd class="personal-promocode-item__dd">${formData[0].value}</dd>
                </div>
                <div class="personal-promocode-item__dl-row">
                    <dt class="personal-promocode-item__dt">Скидка клиенту:</dt>
                    <dd class="personal-promocode-item__dd">
                        <span class="personal-promocode-item__ellipse personal-promocode-item__ellipse--red">-${formData[1].value}%</span>
                    </dd>
                </div>
                <div class="personal-promocode-item__dl-row">
                    <dt class="personal-promocode-item__dt">Ваше вознаграждение:</dt>
                    <dd class="personal-promocode-item__dd">
                        <span class="personal-promocode-item__ellipse personal-promocode-item__ellipse--green">+${formData[2].value}%</span>
                    </dd>
                </div>
                <div class="personal-promocode-item__dl-row">
                    <dt class="personal-promocode-item__dt">Срок действия:</dt>
                    <dd class="personal-promocode-item__dd">
                        <div class="personal-promocode-item__validity-period">
                            <span>${dateFromTo()}</span>
                        </div>
                    </dd>
                </div>
            </dl>
        </div>
        <div class="personal-promocode-item__footer">
            <span class="personal-promocode-item__date-creation">${today}</span>
            <span class="personal-promocode-item__status personal-promocode-item__status--consideration">На рассмотрении</span>
        </div>
    </li>`).prependTo('.personal-promocode__list').slideDown();
    });

    /** / Для теста. На бою нужно будет удалить */

});
