/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/components/modal/modal.js":
/*!**********************************************!*\
  !*** ./src/blocks/components/modal/modal.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var nativejs_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nativejs-select */ "./node_modules/nativejs-select/build/nativejs-select.min.js");
/* harmony import */ var nativejs_select__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativejs_select__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


/**
 * @class Modal
 * @description Класс для добавления обработчиков событий открытия модальных окон
 */
var Modal = /*#__PURE__*/function () {
  function Modal() {
    _classCallCheck(this, Modal);
  }

  /**
  * @description Добавляет обработчики событий клика для открытия модальных окон
   * 
   * При открытии модального окна записываются данные из data аттрибутов в параметр window.app.modalParams
   * 
   * Это полезно, например, для получения и последующей передачи id товара в форме "купить в один клик", добавив к кнопке data-product-id, после открытия модального окна можно получить id товара window.app.modalParams.productId
   * 
  * @example
  * // Вызов функции для обработки клика на элемент, у которого есть аттрибут data-modal-toggle
  * 
  * window.app.modal.addModalOpenHandler();
   * 
   * @example
  * // Для переопределения логики работы функции необходимо использовать следующий код:
  * 
  * window.app.modal.addModalOpenHandler = function() {
   *  // тут новая логика;
   * };
  */
  _createClass(Modal, [{
    key: "addModalOpenHandler",
    value: function addModalOpenHandler() {
      if (!document.querySelector('[data-modal-toggle]')) return;
      document.querySelectorAll('[data-modal-toggle]').forEach(function (opener) {
        opener.addEventListener('click', function (event) {
          event.preventDefault();
          if (document.querySelector('.modal-webform.active')) {
            document.querySelector('.modal-webform.active').classList.remove('active');
          }
          window.app.modalParams = opener.dataset;
          document.querySelector("[data-modal-id=\"".concat(event.currentTarget.dataset.modalToggle, "\"]")).classList.toggle('active');
          console.log('window.app.modalParams', window.app.modalParams);
        });
      });
      if (document.querySelector('.js-discount-info-btn')) {
        document.querySelectorAll('.js-discount-info-btn').forEach(function (closer) {
          closer.addEventListener('click', function (event) {
            event.currentTarget.classList.toggle('discount-info__btn--fire');
            event.currentTarget.classList.toggle('discount-info__btn--cross');
            document.querySelector('.js-modal-discount-info').classList.toggle('modal-discount-info--hidden');
          });
        });
      }
    }
    /**
    * @description Добавляет обработчики событий клика для закрытия модальных окон
    * @example
    * // Вызов функции для обработки клика на элемент, у которого есть класс modal-box__btn-close
    * 
    * window.app.modal.addModalCloseHandler();
    * 
     * @example
    * // Для переопределения логики работы функции необходимо использовать следующий код:
    * 
    * window.app.modal.addModalCloseHandler = function() {
     *  // тут новая логика;
     * };
    */
  }, {
    key: "addModalCloseHandler",
    value: function addModalCloseHandler() {
      if (document.querySelector('.modal-box__btn-close, .modal-delete-promocode__no, .modal-delete-order__btn')) {
        document.querySelectorAll('.modal-box__btn-close, .modal-delete-promocode__no, .modal-delete-order__btn').forEach(function (closer) {
          closer.addEventListener('click', function (event) {
            console.log('close');
            event.currentTarget.closest('.modal-webform').classList.remove('active');
            event.currentTarget.closest('.modal-webform').querySelector('.js_modal_thanks').style.display = "none";
            event.currentTarget.closest('.modal-webform').querySelector('form').removeAttribute('style');
          });
        });
      }
      if (document.querySelector('.modal-webform')) {
        document.querySelectorAll('.modal-webform').forEach(function (closer) {
          closer.addEventListener('click', function (event) {
            event.currentTarget.classList.remove('active');
            event.currentTarget.querySelector('.js_modal_thanks').style.display = "none";
            event.currentTarget.querySelector('form').removeAttribute('style');
          });
        });
      }
      if (document.querySelector('.modal-box, .modal-delete-promocode, .modal-delete-order')) {
        document.querySelectorAll('.modal-box, .modal-delete-promocode, .modal-delete-order').forEach(function (closer) {
          closer.addEventListener('click', function (event) {
            event.stopPropagation();
          });
        });
      }
    }
  }, {
    key: "stylizeSelect",
    value: function stylizeSelect() {
      if (!document.querySelector('.customized-select-js')) return;
      new (nativejs_select__WEBPACK_IMPORTED_MODULE_0___default())({
        selector: '.customized-select-js'
      });
    }
    /**
    * @example
    * // для создания модального окна используйте следующий пример
    * 
    * <button data-modal-toggle="modal">Открыть модальное окно</button>
    * 
    * <div class="modal-webform modal--default" data-modal-id="modal">
        <div id="comp_a2ed7ef7fedbf3b6ea9efc69a24048b1">
            <div class="modal-box js_closest">
                <button type="button" class="modal-box__btn-close">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path d="M2 20L11 11L2 20ZM11 11L20 2L11 11ZM11 11L2 2L11 11ZM11 11L20 20L11 11Z" fill="white">
                        </path>
                        <path d="M2 20L11 11M11 11L20 2M11 11L2 2M11 11L20 20" stroke="" stroke-width="3"
                            stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </button>
                <div class="modal-box__form">
                    <div class="modal-box__wrap">
                        <div class="modal-box__title">Заголовок</div>
                        <div class="modal-box__body">
                            
                              <div class="popup-modal__message js_modal_thanks" style="display: none;">
                                <div class="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 138 92" fill="none">
                                        <path
                                            d="M0 49.9136L47.2573 92L138 11.4199L124.972 0L47.2573 68.9996L12.8472 38.4133L0 49.9136Z"
                                            fill="#1BC49B"></path>
                                    </svg>
                                </div>
                                <div class="message">
                                    Спасибо. Заявка принята
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    */
  }, {
    key: "init",
    value: function init() {
      this.addModalOpenHandler();
      this.addModalCloseHandler();
      this.stylizeSelect();
    }
  }]);
  return Modal;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);

/***/ }),

/***/ "./src/blocks/modules/action/action.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/action/action.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var Action = /*#__PURE__*/function () {
  function Action() {
    _classCallCheck(this, Action);
    this.action_find_height = 0;
    this.jquery_obj = ".action .js_click_closest .js_click_find";
    this.class_close = "isClose";
  }
  _createClass(Action, [{
    key: "addClickHandler",
    value: function addClickHandler(action_find_heigh) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.action .js_click_link').on('click', function () {
        var obj = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
        obj.closest('.js_click_closest').find('.js_click_find').css('height', action_find_heigh + 'px');
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.jquery_obj).removeClass(this.class_close);
        obj.hide();
      });
    }
  }, {
    key: "init",
    value: function init() {
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.jquery_obj)) {
        this.action_find_height = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.jquery_obj).height();
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.jquery_obj).addClass(this.class_close);
      }
      this.addClickHandler(this.action_find_height);
    }
  }]);
  return Action;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Action);

/***/ }),

/***/ "./src/blocks/modules/affiliate-program/affiliate-program.js":
/*!*******************************************************************!*\
  !*** ./src/blocks/modules/affiliate-program/affiliate-program.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var AffiliateProgram = /*#__PURE__*/function () {
  function AffiliateProgram() {
    _classCallCheck(this, AffiliateProgram);
  }
  _createClass(AffiliateProgram, [{
    key: "openAffiliateProgram",
    value: function openAffiliateProgram() {}
  }, {
    key: "init",
    value: function init() {
      this.openAffiliateProgram();
    }
  }]);
  return AffiliateProgram;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AffiliateProgram);
jQuery(document).ready(function () {
  $(document).on('click', '.js-affiliate-program__more', function () {
    $('.js-affiliate-program__right').addClass('open');
  });
  $(document).on('click', '.js-affiliate-program__hide-details', function () {
    $('.js-affiliate-program__right').removeClass('open');
  });
});

/***/ }),

/***/ "./src/blocks/modules/banners/banner-big.js":
/*!**************************************************!*\
  !*** ./src/blocks/modules/banners/banner-big.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/bundle */ "./node_modules/swiper/swiper-bundle.mjs");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var Banner = /*#__PURE__*/function () {
  function Banner() {
    _classCallCheck(this, Banner);
    this.slider = null;
  }
  _createClass(Banner, [{
    key: "initSlider",
    value: function initSlider() {
      if (!document.querySelector('.banner__big.swiper')) return;
      this.slider = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"]('.banner__big.swiper', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 0,
        zoom: {
          maxRatio: 0
        },
        // If we need pagination
        pagination: {
          el: '.swiper-pagination'
        }

        // Navigation arrows
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // },
      }).mount();
    }
  }, {
    key: "init",
    value: function init() {
      this.initSlider();
    }
  }]);
  return Banner;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Banner);

/***/ }),

/***/ "./src/blocks/modules/banners/banners.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/banners/banners.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/bundle */ "./node_modules/swiper/swiper-bundle.mjs");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var BannerProduct = /*#__PURE__*/function () {
  function BannerProduct() {
    _classCallCheck(this, BannerProduct);
  }
  _createClass(BannerProduct, [{
    key: "initSlider",
    value: function initSlider() {
      if (!document.querySelector('.banner__small-slider.swiper')) return;
      new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"]('.banner__small-slider.swiper', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 0,
        observer: true,
        observeParents: true,
        navigation: {
          nextEl: '.banner__small-slider .swiper-button-next',
          prevEl: '.banner__small-slider .swiper-button-prev'
        },
        zoom: {
          maxRatio: 0
        },
        // If we need pagination
        pagination: {
          el: '.swiper-pagination'
        }

        // Navigation arrows
      }).mount();
    }
  }, {
    key: "setMobileTabsSwitcher",
    value: function setMobileTabsSwitcher() {
      $('div.banner__tabs').on('click', 'div:not(.active)', function () {
        $(this).addClass('active').siblings().removeClass('active').closest('.banner').find('.banner__content').removeClass('active').eq($(this).index()).addClass('active');
      });
    }
  }, {
    key: "init",
    value: function init() {
      this.initSlider();
      this.setMobileTabsSwitcher();
    }
  }]);
  return BannerProduct;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BannerProduct);

/***/ }),

/***/ "./src/blocks/modules/brands-detail-top/brands-detail-top.js":
/*!*******************************************************************!*\
  !*** ./src/blocks/modules/brands-detail-top/brands-detail-top.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var BrandsDetaiTop = /*#__PURE__*/function () {
  function BrandsDetaiTop() {
    _classCallCheck(this, BrandsDetaiTop);
    this.initialHeight = 63;
    this.overflowedHeight = 63;
  }
  _createClass(BrandsDetaiTop, [{
    key: "calculateInitialHeight",
    value: function calculateInitialHeight() {
      if (!document.querySelector('.brands-detail__text .text')) return;
      this.initialHeight = document.querySelector('.brands-detail__text .text').clientHeight;
      document.querySelector('.brands-detail__text .text').setAttribute('style', "--height: ".concat(this.overflowedHeight, "px;"));
    }
  }, {
    key: "setHeightToggleHandler",
    value: function setHeightToggleHandler() {
      var _this = this;
      if (!document.querySelector('.brands-detail__text-more')) return;
      document.querySelector('.brands-detail__text-more').addEventListener('click', function (event) {
        event.currentTarget.classList.toggle('isOpened');
        if (document.querySelector('.brands-detail__text .text').classList.contains('isOpened')) {
          document.querySelector('.brands-detail__text .text').setAttribute('style', "--height: ".concat(_this.overflowedHeight, "px;"));
          document.querySelector('.brands-detail__text .text').classList.remove('isOpened');
        } else {
          document.querySelector('.brands-detail__text .text').setAttribute('style', "--height: ".concat(_this.initialHeight, "px;"));
          document.querySelector('.brands-detail__text .text').classList.add('isOpened');
        }
      });
    }
  }, {
    key: "init",
    value: function init() {
      this.calculateInitialHeight();
      this.setHeightToggleHandler();
    }
  }]);
  return BrandsDetaiTop;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BrandsDetaiTop);

/***/ }),

/***/ "./src/blocks/modules/brands-top/brands-top.js":
/*!*****************************************************!*\
  !*** ./src/blocks/modules/brands-top/brands-top.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var BrandsTop = /*#__PURE__*/function () {
  function BrandsTop() {
    _classCallCheck(this, BrandsTop);
  }
  _createClass(BrandsTop, [{
    key: "openSelect",
    value: function openSelect(opener) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(opener).closest('.brands-top__sort-select').find('.section__sort-div-select-block').slideToggle('fast');
    }
  }, {
    key: "addOpenerClickHandler",
    value: function addOpenerClickHandler() {
      var _this = this;
      if (!document.querySelector('.brands-top__sort-select .section__sort-button')) return;
      document.querySelector('.brands-top__sort-select .section__sort-button').addEventListener('click', function (event) {
        _this.openSelect(event.currentTarget);
      });
    }
  }, {
    key: "changeLanguage",
    value: function changeLanguage() {
      if (!document.querySelector('.lang-switch__item')) return;
      document.querySelectorAll('.lang-switch__item').forEach(function (switcher) {
        switcher.addEventListener('click', function (event) {
          document.querySelector('.lang-switch__item--active').classList.remove('lang-switch__item--active');
          event.currentTarget.classList.add('lang-switch__item--active');
          if (event.currentTarget.dataset.lang == 'all') {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(".brands-items__item[data-word-type]").slideDown('fast');
          } else {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(".brands-items__item[data-word-type=\"".concat(event.currentTarget.dataset.lang, "\"]")).slideDown('fast');
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(".brands-items__item:not([data-word-type=\"".concat(event.currentTarget.dataset.lang, "\"])")).slideUp('fast');
          }
        });
      });
    }
  }, {
    key: "changeCategory",
    value: function changeCategory() {
      var _this2 = this;
      if (!document.querySelector('[data-item-category-id]')) return;
      document.querySelectorAll('[data-item-category-id]').forEach(function (option) {
        option.addEventListener('click', function (event) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.currentTarget).closest('.brands-top__sort-select').find('.section__sort-div-select-block').slideToggle('fast');
          event.currentTarget.closest('.brands-top__sort-select').querySelector('.section__sort-selected').innerHTML = event.currentTarget.innerHTML;
          event.currentTarget.closest('.brands-top__sort-select').querySelector('[data-item-category-id].selected').classList.remove('selected');
          event.currentTarget.classList.add('selected');
          _this2.filterBrands(event.currentTarget.dataset.itemCategoryId);
        });
      });
    }
  }, {
    key: "filterBrands",
    value: function filterBrands(categoryId) {
      if (!document.querySelector('[data-item-category-ids]')) return;
      if (categoryId == 'all') {
        document.querySelectorAll('[data-item-category-ids]').forEach(function (brand) {
          brand.style.display = 'flex';
        });
        this.checkIfWrapIsEmpty();
        return false;
      }
      document.querySelectorAll('[data-item-category-ids]').forEach(function (brand) {
        if (brand.dataset.itemCategoryIds.includes(categoryId)) {
          brand.style.display = 'flex';
        } else {
          brand.style.display = 'none';
        }
      });
      this.checkIfWrapIsEmpty();
    }
  }, {
    key: "checkIfWrapIsEmpty",
    value: function checkIfWrapIsEmpty(wrap) {
      setTimeout(function () {
        document.querySelectorAll('.brands-items__logos').forEach(function (wrap) {
          var length = wrap.querySelectorAll('[data-item-category-ids][style="display: flex;"]').length;
          if (!length) {
            wrap.closest('.brands-items__item').classList.add('isEmpty');
          } else {
            wrap.closest('.brands-items__item').classList.remove('isEmpty');
          }
        });
      }, 0);
    }
  }, {
    key: "init",
    value: function init() {
      this.addOpenerClickHandler();
      this.changeLanguage();
      this.changeCategory();
    }
  }]);
  return BrandsTop;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BrandsTop);

/***/ }),

/***/ "./src/blocks/modules/brands/brands.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/brands/brands.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/bundle */ "./node_modules/swiper/swiper-bundle.mjs");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var PopularBrands = /*#__PURE__*/function () {
  function PopularBrands() {
    _classCallCheck(this, PopularBrands);
    this.slider = null;
  }
  _createClass(PopularBrands, [{
    key: "initSlider",
    value: function initSlider() {
      if (!document.querySelector('.brands__slider.swiper')) return;
      this.slider = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"]('.brands__slider.swiper', {
        loop: false,
        slidesPerView: 7.5,
        spaceBetween: 25,
        zoom: {
          maxRatio: 0
        },
        breakpoints: {
          1700: {
            slidesPerView: 7.5
          },
          1200: {
            slidesPerView: 5.5
          },
          900: {
            slidesPerView: 4,
            spaceBetween: 25
          },
          600: {
            slidesPerView: 3
          },
          0: {
            slidesPerView: 2.5,
            spaceBetween: 15
          }
        },
        // If we need pagination
        pagination: {
          el: '.swiper-pagination'
        },
        // Navigation arrows
        navigation: {
          nextEl: '.brands__arrow.swiper-button-next',
          prevEl: '.brands__arrow.swiper-button-prev'
        },
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar'
        }
      }).init();
    }
  }, {
    key: "openSelect",
    value: function openSelect() {
      $('.brands__button-categories').on('click', function () {
        $('.brands__categories-list').toggleClass('open');
      });
    }
  }, {
    key: "chooseSelectValue",
    value: function chooseSelectValue() {
      var _this = this;
      if (!document.querySelector('[data-brand-category-id]')) return;
      document.querySelectorAll('[data-brand-category-id]').forEach(function (option) {
        option.addEventListener('click', function (event) {
          event.currentTarget.closest('.brands__button-categories').querySelector('li.isActive').classList.remove('isActive');
          event.currentTarget.classList.add('isActive');
          event.currentTarget.closest('.brands__button-categories').querySelector('span').innerHTML = event.currentTarget.innerHTML;
          _this.filterBrands(event.currentTarget.dataset.brandCategoryId);
          setTimeout(function () {
            _this.slider.update();
          }, 100);
        });
      });
    }
  }, {
    key: "filterBrands",
    value: function filterBrands(id) {
      if (id == 'all') {
        this.slider.el.querySelectorAll('[data-brand-category-ids]').forEach(function (brand) {
          brand.style.display = 'flex';
        });
        return false;
      }
      this.slider.el.querySelectorAll('[data-brand-category-ids]').forEach(function (brand) {
        if (brand.dataset.brandCategoryIds.includes(id)) {
          brand.style.display = 'flex';
        } else {
          brand.style.display = 'none';
        }
      });
    }
  }, {
    key: "init",
    value: function init() {
      this.initSlider();
      this.openSelect();
      this.chooseSelectValue();
    }
  }]);
  return PopularBrands;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopularBrands);

/***/ }),

/***/ "./src/blocks/modules/cart-page-order/cart-page-order.js":
/*!***************************************************************!*\
  !*** ./src/blocks/modules/cart-page-order/cart-page-order.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var OrderPage = /*#__PURE__*/function () {
  function OrderPage() {
    _classCallCheck(this, OrderPage);
    this.mapOpen = null;
    this.mapChoose = null;
    this.selectedRadio = [];
  }
  _createClass(OrderPage, [{
    key: "fillSelectedRadios",
    value: function fillSelectedRadios() {
      var _this = this;
      if (!document.querySelector('[data-fields-id]')) return;
      this.selectedRadio = [];
      document.querySelectorAll('[data-fields-id]').forEach(function (radio) {
        if (radio.checked) {
          _this.selectedRadio.push(radio.dataset.fieldsId);
        }
      });
      console.log(this.selectedRadio);
      this.toggleRelatedElements();
    }
  }, {
    key: "setRadioChangeHandler",
    value: function setRadioChangeHandler() {
      var _this2 = this;
      if (!document.querySelector('[data-fields-id]')) return;
      document.querySelectorAll('[data-fields-id]').forEach(function (radio) {
        radio.addEventListener('change', function () {
          _this2.fillSelectedRadios();
        });
      });
    }
  }, {
    key: "toggleRelatedElements",
    value: function toggleRelatedElements() {
      var _this3 = this;
      if (!document.querySelector('[data-field]')) return;
      document.querySelectorAll('[data-field]').forEach(function (field) {
        if (!field.dataset.styleDisplay) {
          field.dataset.styleDisplay = window.getComputedStyle(field).display;
        }
        console.log('field.dataset.styleDisplay', field.dataset.styleDisplay);
        var fields = [];
        field.dataset.field.replace(/\s/g, '').split(',').forEach(function (tag) {
          fields.push(_this3.selectedRadio.includes(tag));
        });
        if (fields.includes(false)) {
          field.style.display = 'none';
          field.classList.remove('isShowed');
        } else {
          field.style.display = field.dataset.styleDisplay;
          field.classList.add('isShowed');
        }
      });
    }
  }, {
    key: "createOpenMap",
    value: function createOpenMap() {
      var _this4 = this;
      return new Promise(function (resolve, reject) {
        if (!document.querySelector('#cart-page__map-wrap--js-open')) {
          reject('Не найден селектор для инициализации карты');
          return false;
        }
        ;
        ymaps.ready(function () {
          _this4.mapOpen = new ymaps.Map("cart-page__map-wrap--js-open", {
            center: [55.76, 37.64],
            zoom: 7
          });
          resolve(_this4.mapOpen);
        });
      });
    }
  }, {
    key: "customChooseBaloon",
    value: function customChooseBaloon() {
      var template = ymaps.templateLayoutFactory.createClass('<div class="balloon-root ">' + '<a class="close" href="#">&times;</a>' + '<div class="arrow balloon-pin"></div>' + '<div class="balloon-head balloon">asdasads</div>' + '<div class="balloon-body balloon">asdasdadsads</div>' + '<div class="balloon-footer balloon">asdasdassdasd</div>' + '</div>', {
        //Формирование макета
        build: function build() {
          this.constructor.superclass.build.call(this);
        },
        //удаление макета из DOM
        clear: function clear() {
          // this._$element.find('.close')
          //     .off('click');

          // this.constructor.superclass.clear.call(this);
        },
        //закрытие балуна
        onCloseClick: function onCloseClick(e) {
          // e.preventDefault();

          // this.events.fire('userclose');
        }
      });
      return template;
    }
  }, {
    key: "createChooseMap",
    value: function createChooseMap() {
      var _this5 = this;
      return new Promise(function (resolve, reject) {
        if (!document.querySelector('#cart-page__map-wrap--js-choose')) {
          reject('Не найден селектор для инициализации карты');
          return false;
        }
        ;
        ymaps.ready(function () {
          _this5.mapChoose = new ymaps.Map("cart-page__map-wrap--js-choose", {
            center: [55.76, 37.64],
            zoom: 16,
            controls: []
          });
          var myPlacemark = null;
          var address = document.querySelector('#delivery-city .bx-ui-sls-fake').value != '' || document.querySelector('#delivery-address input.isShowed').value != "" ? "".concat(document.querySelector('#delivery-city .bx-ui-sls-fake').value, ", ").concat(document.querySelector('#delivery-address input.isShowed').value, " ") : 'г. Москва';
          ymaps.geocode(address, {
            results: 1
          }).then(function (res) {
            var coords = [res.geoObjects.get(0).geometry.getCoordinates()[0], res.geoObjects.get(0).geometry.getCoordinates()[1]];
            myPlacemark = new ymaps.Placemark(coords, {}, {
              draggable: true
            });
            _this5.mapChoose.geoObjects.add(myPlacemark);
            myPlacemark.events.add('dragend', function () {
              _this5.getAddress(myPlacemark.geometry.getCoordinates());
            });
            _this5.setMapCenter(_this5.mapChoose, coords);
          });
          _this5.mapChoose.events.add('click', function (e) {
            var coordinates = e.get('coords');
            // this.mapChoose.geoObjects.removeAll();
            // Если метка уже создана – просто передвигаем ее.
            if (myPlacemark) {
              myPlacemark.geometry.setCoordinates(coordinates);
            }
            // Если нет – создаем.
            else {
              myPlacemark = new ymaps.Placemark(coordinates, {}, {
                draggable: true
              });
            }
            _this5.mapChoose.geoObjects.add(myPlacemark);
            // Слушаем событие окончания перетаскивания на метке.
            myPlacemark.events.add('dragend', function () {
              _this5.getAddress(myPlacemark.geometry.getCoordinates());
            });
            // // }
            _this5.getAddress(coordinates);
          });
          resolve(_this5.mapChoose);
        });
      });
    }
  }, {
    key: "getAddress",
    value: function getAddress(coords) {
      ymaps.geocode(coords).then(function (res) {
        var firstGeoObject = res.geoObjects.get(0),
          address = firstGeoObject.getAddressLine();
        document.querySelector('#delivery-address input.isShowed').value = address;
      });
    }
  }, {
    key: "setMapPoint",
    value: function setMapPoint(map, address) {
      var _this6 = this;
      return new Promise(function (resolve, reject) {
        map.geoObjects.removeAll();
        ymaps.geocode(address, {
          results: 1
        }).then(function (res) {
          var coords = [res.geoObjects.get(0).geometry.getCoordinates()[0], res.geoObjects.get(0).geometry.getCoordinates()[1]];
          var point = new ymaps.Placemark(coords);
          map.geoObjects.add(point);
          _this6.setMapCenter(map, coords);
          resolve(coords);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    }
  }, {
    key: "setMapCenter",
    value: function setMapCenter(map, coords) {
      map.setCenter(coords);
    }
  }, {
    key: "setChangeHandler",
    value: function setChangeHandler() {
      var _this7 = this;
      if (!document.querySelector('.cart-page__choose-address')) return;
      document.querySelector('.cart-page__choose-address').addEventListener('change', function (event) {
        if (!_this7.mapOpen) return;
        var address = document.querySelector(".cart-page__choose-city option[value=\"".concat(document.querySelector('.cart-page__choose-city').value, "\"]")).innerHTML + ', ' + document.querySelector(".cart-page__choose-address option[value=\"".concat(document.querySelector('.cart-page__choose-address').value, "\"]")).innerHTML;
        _this7.setMapPoint(_this7.mapOpen, address);
      });
    }
  }, {
    key: "initOpenMap",
    value: function () {
      var _initOpenMap = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var map, address, coords;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.createOpenMap();
            case 2:
              map = _context.sent;
              address = document.querySelector(".cart-page__choose-city option[value=\"".concat(document.querySelector('.cart-page__choose-city').value, "\"]")).innerHTML + ', ' + document.querySelector(".cart-page__choose-address option[value=\"".concat(document.querySelector('.cart-page__choose-address').value, "\"]")).innerHTML;
              console.log('asdasdasdasdasd', address);
              _context.next = 7;
              return this.setMapPoint(this.mapOpen, address);
            case 7:
              coords = _context.sent;
            case 8:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function initOpenMap() {
        return _initOpenMap.apply(this, arguments);
      }
      return initOpenMap;
    }()
  }, {
    key: "initChooseMap",
    value: function () {
      var _initChooseMap = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var map;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.createChooseMap();
            case 2:
              map = _context2.sent;
            case 3:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function initChooseMap() {
        return _initChooseMap.apply(this, arguments);
      }
      return initChooseMap;
    }()
  }, {
    key: "openOpenMap",
    value: function openOpenMap() {
      var _this8 = this;
      if (!document.querySelector('.cart-page__open-map-open')) return;
      document.querySelector('.cart-page__open-map-open').addEventListener('click', function (event) {
        event.currentTarget.classList.toggle('isOpened');
        event.currentTarget.closest('.cart-page__order-map').querySelector('.cart-page__map-wrap').classList.toggle('isOpened');
        if (!_this8.mapOpen) {
          setTimeout(function () {
            _this8.initOpenMap();
          }, 300);
        } else {
          _this8.mapOpen.destroy();
          _this8.mapOpen = null;
        }
      });
    }
  }, {
    key: "openChooseMap",
    value: function openChooseMap() {
      var _this9 = this;
      if (!document.querySelector('.cart-page__open-map-choose')) return;
      document.querySelector('.cart-page__open-map-choose').addEventListener('click', function (event) {
        event.currentTarget.classList.toggle('isOpened');
        event.currentTarget.closest('.cart-page__order-block-in').querySelector('.cart-page__map-wrap').classList.toggle('isOpened');
        if (!_this9.mapChoose) {
          setTimeout(function () {
            _this9.initChooseMap();
          }, 300);
        } else {
          _this9.mapChoose.destroy();
          _this9.mapChoose = null;
        }
      });
    }
  }, {
    key: "init",
    value: function () {
      var _init = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              this.openOpenMap();
              this.openChooseMap();
              this.setChangeHandler();
              this.fillSelectedRadios();
              this.setRadioChangeHandler();
            case 5:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function init() {
        return _init.apply(this, arguments);
      }
      return init;
    }()
  }]);
  return OrderPage;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderPage);

/***/ }),

/***/ "./src/blocks/modules/cart-page/cart-page.js":
/*!***************************************************!*\
  !*** ./src/blocks/modules/cart-page/cart-page.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tippy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tippy.js */ "./node_modules/tippy.js/dist/tippy.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var CartPage = /*#__PURE__*/function () {
  function CartPage() {
    _classCallCheck(this, CartPage);
    this.tooltip = null;
  }
  _createClass(CartPage, [{
    key: "addTooltip",
    value: function addTooltip() {
      if (!document.getElementById('tooltip')) return;
      this.tooltip = (0,tippy_js__WEBPACK_IMPORTED_MODULE_0__["default"])('#tooltip', {
        content: document.getElementById('tooltip').dataset.tooltipText,
        // animateFill: true,
        // plugins: [animateFill],
        placement: 'bottom-start',
        offset: [-47, 5],
        interactive: true,
        theme: 'light'
        // inertia: true,
      });
    }
  }, {
    key: "addClearPromocodeHandler",
    value: function addClearPromocodeHandler() {
      if (!document.querySelector('.cart-page__promocode-input .cleaner')) return;
      document.querySelector('.cart-page__promocode-input .cleaner').addEventListener('click', function (event) {
        event.currentTarget.closest('.cart-page__promocode-input').classList.remove('hasError');
        event.currentTarget.closest('.cart-page__promocode-input').querySelector('input').value = '';
      });
    }
  }, {
    key: "addQuantityChangeHandler",
    value: function addQuantityChangeHandler() {
      if (!document.querySelector('.cart-page__counter')) return;
      document.querySelectorAll('.cart-page__counter .cart-page__counter-button').forEach(function (button) {
        button.addEventListener('click', function (event) {
          var value = +event.currentTarget.closest('.cart-page__counter').querySelector('input').value;
          if (event.currentTarget.dataset.action == 'plus') {
            event.currentTarget.closest('.cart-page__counter').querySelector('input').value = value + 1;
          }
          if (event.currentTarget.dataset.action == 'minus') {
            event.currentTarget.closest('.cart-page__counter').querySelector('input').value = value - 1;
          }
          event.currentTarget.closest('.cart-page__counter').querySelector('input').dispatchEvent(new Event('input'));
        });
      });
    }
  }, {
    key: "addQuantityinputChangeHandler",
    value: function addQuantityinputChangeHandler() {
      if (!document.querySelector('.cart-page__counter input')) return;
      document.querySelectorAll('.cart-page__counter input').forEach(function (input) {
        input.addEventListener('input', function (event) {
          if (+event.currentTarget.value < 1) {
            event.currentTarget.value = 1;
          }
          event.currentTarget.setAttribute('value', event.currentTarget.value);
        });
      });
    }
  }, {
    key: "init",
    value: function init() {
      this.addTooltip();
      this.addClearPromocodeHandler();
      this.addQuantityChangeHandler();
      this.addQuantityinputChangeHandler();
    }
  }]);
  return CartPage;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CartPage);

/***/ }),

/***/ "./src/blocks/modules/catalog-detail-page/catalog-detail-page.js":
/*!***********************************************************************!*\
  !*** ./src/blocks/modules/catalog-detail-page/catalog-detail-page.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/bundle */ "./node_modules/swiper/swiper-bundle.mjs");
/* harmony import */ var glightbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! glightbox */ "./node_modules/glightbox/dist/js/glightbox.min.js");
/* harmony import */ var glightbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(glightbox__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



var DetailCatalogSlider = /*#__PURE__*/function () {
  function DetailCatalogSlider() {
    _classCallCheck(this, DetailCatalogSlider);
    this.slider = null;
    this.lightbox = null;
  }
  _createClass(DetailCatalogSlider, [{
    key: "initLightbox",
    value: function initLightbox() {
      if (!document.querySelector('.catalog-detail-slider-main__link')) return;
      this.lightbox = glightbox__WEBPACK_IMPORTED_MODULE_2___default()({
        selector: '.catalog-detail-slider-main__link'
      });
    }
  }, {
    key: "initSlider",
    value: function initSlider() {
      if (!document.querySelector('.catalog-detail-slider-main, .catalog-detail-slider-nav, .catalog-detail-page-tabs-list')) return;
      var navSlider = new swiper_bundle__WEBPACK_IMPORTED_MODULE_1__["default"]('.catalog-detail-slider-nav', {
        loop: true,
        spaceBetween: 3,
        slidesPerView: 10,
        freeMode: true,
        watchSlidesProgress: true
      });
      var mainSlider = new swiper_bundle__WEBPACK_IMPORTED_MODULE_1__["default"]('.catalog-detail-slider-main', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 10,
        thumbs: {
          swiper: navSlider
        },
        breakpoints: {
          960: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }
      });
      var catalogSlider = new swiper_bundle__WEBPACK_IMPORTED_MODULE_1__["default"]('.catalog-detail-page__catalog-slider', {
        loop: false,
        spaceBetween: 20,
        slidesPerView: 6,
        freeMode: true,
        watchSlidesProgress: true,
        scrollbar: {
          el: '.swiper-scrollbar'
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
            freeMode: false
          },
          400: {
            slidesPerView: 2,
            freeMode: false
          },
          700: {
            slidesPerView: 3
          },
          800: {
            slidesPerView: 4
          },
          1300: {
            slidesPerView: 5
          },
          1600: {
            slidesPerView: 6
          }
        }
      });
      var init = false;
      var catalogSliderVertical;
      function swiperCard() {
        if (window.innerWidth <= 1500) {
          if (!init) {
            init = true;
            catalogSliderVertical = new swiper_bundle__WEBPACK_IMPORTED_MODULE_1__["default"]('.catalog-detail-page-related-products__list', {
              spaceBetween: 20,
              slidesPerView: 6,
              freeMode: true,
              scrollbar: {
                el: '.swiper-scrollbar'
              },
              breakpoints: {
                320: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                  freeMode: false
                },
                400: {
                  slidesPerView: 2,
                  freeMode: false
                },
                700: {
                  slidesPerView: 3
                },
                800: {
                  slidesPerView: 4
                },
                1300: {
                  slidesPerView: 5
                },
                1600: {
                  slidesPerView: 6
                }
              }
            });
          }
        } else if (init) {
          catalogSliderVertical.destroy();
          init = false;
        }
      }
      swiperCard();
      window.addEventListener("resize", swiperCard);
    }
  }, {
    key: "init",
    value: function init() {
      this.initSlider();
      this.initLightbox();
    }
  }]);
  return DetailCatalogSlider;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DetailCatalogSlider);
jQuery(document).ready(function () {
  // $('.box-to-favourites').on('click',function(){
  // 	$(this).toggleClass('active');

  //   if($(this).hasClass('active')){
  //     $(this).find('.controls-bar__item-title').text('В избранном');
  //   } else {
  //     $(this).find('.controls-bar__item-title').text('В избранное');
  //   }
  // });

  // $('.box-to-compare').on('click',function(){
  //   $(this).toggleClass('active');

  //   if($(this).hasClass('active')){
  //     $(this).find('.controls-bar__item-title').text('В сравнении');
  //   } else {
  //     $(this).find('.controls-bar__item-title').text('К сравнению');
  //   }
  // });

  jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-scroll-to]').on('click', function () {
    var id = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('scrollTo');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("html, body").animate({
      scrollTop: jquery__WEBPACK_IMPORTED_MODULE_0___default()('.catalog-detail-page-tabs-list').offset().top - 100
    }, 100);
    var index = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.catalog-detail-page-tabs-list').find("[data-scroll-for=\"".concat(id, "\"]")).index();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.catalog-detail-page-tabs-list').find('li').removeClass('active').eq(index).addClass('active').closest('.catalog-detail-page-tabs-block').find('.catalog-detail-page-main-list__item').removeClass('active').eq(index).addClass('active');
  });

  // $('.btn-to-basket').on('click',function(){
  //   $(this).toggleClass('active');

  //   if($(this).hasClass('active')){
  //     $(this).attr('href', '/basket/').html('Товар в корзине <span>Перейти</span>');
  //   }
  // });

  // $('.btn-fast-buy').on('click',function(){
  //   $(this).toggleClass('active');

  //   if($(this).hasClass('active')){
  //     $(this).html('Спасибо за покупку! <span>Перейти в каталог</span>');
  //   }
  // });

  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.catalog-detail-page-tabs-list').on('click', 'li:not(.active)', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('active').siblings().removeClass('active').closest('.catalog-detail-page-tabs-block').find('.catalog-detail-page-main-list__item').removeClass('active').eq(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).index()).addClass('active');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.review-form__estimation-input').on('change', function () {
    var num = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.rating-calculation__estimation-value').text(num);
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.reviews-list-box__add-review').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).toggleClass('active');
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).hasClass('active')) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).text(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('activeText'));
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).text(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('text'));
    }
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.review-block__review-form').slideToggle();
  });
});
function showMore(count) {
  var ajaxElement = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.reviews-list-box-list__ajax-load');
  if (ajaxElement.attr('data-next')) {
    if (ajaxElement.attr('data-next') >= jquery__WEBPACK_IMPORTED_MODULE_0___default()('.reviews-list-box-list__item').length) {
      return;
    }
    count = +ajaxElement.attr('data-next');
  }
  var wt = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop();
  var wh = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height();
  var et = ajaxElement.offset().top;
  var eh = ajaxElement.outerHeight();
  var dh = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).height();
  var centerWindow = wt + wh / 2;
  if (centerWindow >= et) {
    setTimeout(function () {
      ajaxElement.removeClass('visually-hidden');
    }, 500);
    setTimeout(function () {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.reviews-list-box-list__item').each(function (index) {
        if (index <= count) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).css({
            'display': 'block'
          });
        }
      });
      ajaxElement.attr('data-next', count + 5).addClass('visually-hidden');
    }, 1500);
  }
}
jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scroll(function () {
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-scroll-for="tab-reviews"]').hasClass('active')) {
    var countViewed = 5;
    showMore(countViewed);
  }
  ;
});

/***/ }),

/***/ "./src/blocks/modules/catalog-filter/catalog-filter.js":
/*!*************************************************************!*\
  !*** ./src/blocks/modules/catalog-filter/catalog-filter.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var CatalogFilter = /*#__PURE__*/function () {
  function CatalogFilter() {
    _classCallCheck(this, CatalogFilter);
  }
  _createClass(CatalogFilter, [{
    key: "openMoreCheckbox",
    value: function openMoreCheckbox() {
      if (document.querySelector('.bx-filter-input-checkbox-more-checkbox')) {
        document.querySelector('.bx-filter-input-checkbox-more-checkbox').addEventListener('click', function (event) {
          event.target.closest(".bx-filter-input-checkbox-more-checkbox").classList.toggle("isOpened");
          event.target.closest(".bx-filter-block").querySelector('.bx-filter-parameters-box-container').classList.toggle('isOpened');
        });
      }
    }
  }, {
    key: "openMobileFilter",
    value: function openMobileFilter() {
      if (document.querySelector('.section__sort-filter-mobile-button')) {
        $('.section__sort-filter-mobile-button').on('click', function () {
          $('.section__filter ').addClass('open');
        });
        $('.filter-mobile__back').on('click', function () {
          $('.section__filter ').removeClass('open');
        });
      }
    }
  }, {
    key: "openMoreFilters",
    value: function openMoreFilters() {
      if (document.querySelector('.bx-filter-parameters-box-container-all-filters')) {
        document.querySelector('.bx-filter-parameters-box-container-all-filters').addEventListener('click', function (event) {
          event.target.classList.toggle("isOpened");
          event.target.closest(".smartfilter").querySelector('.row').classList.toggle('isOpened');
        });
      }
    }
  }, {
    key: "searchFilterCheckIncludes",
    value: function searchFilterCheckIncludes(title, value) {
      return title.toLowerCase().includes(value.toLowerCase());
    }
  }, {
    key: "searchFilterShowHide",
    value: function searchFilterShowHide(checkboxClass, checkbox, element, title) {
      if (this.searchFilterCheckIncludes(title, element.value)) {
        checkbox.closest(checkboxClass).style.display = 'block';
      } else {
        checkbox.closest(checkboxClass).style.display = 'none';
      }
    }
  }, {
    key: "searchFilter",
    value: function searchFilter(_ref) {
      var _this = this;
      var inputSelector = _ref.inputSelector,
        eventName = _ref.eventName,
        boxClass = _ref.boxClass,
        checkboxClass = _ref.checkboxClass;
      document.querySelectorAll(inputSelector).forEach(function (element) {
        element.addEventListener(eventName, function (event) {
          event.currentTarget.closest(boxClass).querySelectorAll('.bx-filter-param-text').forEach(function (checkbox) {
            _this.searchFilterShowHide(checkboxClass, checkbox, element, checkbox.getAttribute('title'));
          });
        });
      });
    }
  }, {
    key: "showMoreHandler",
    value: function showMoreHandler() {
      if (!document.querySelector('.filter__menu-item--more')) return;
      document.querySelector('.filter__menu-item--more a').addEventListener('click', function (e) {
        e.preventDefault();
        e.currentTarget.closest('.filter__menu-in').classList.add('isShowed');
      });
    }
  }, {
    key: "init",
    value: function init() {
      this.openMoreCheckbox();
      this.openMobileFilter();
      this.openMoreFilters();
      this.showMoreHandler();
      this.searchFilter({
        inputSelector: '.bx-filter-parameters-box-search input',
        eventName: 'keyup',
        boxClass: '.bx-filter-parameters-box',
        checkboxClass: '.checkbox'
      });
    }
  }]);
  return CatalogFilter;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CatalogFilter);

/***/ }),

/***/ "./src/blocks/modules/catalog-menu/catalog-menu.js":
/*!*********************************************************!*\
  !*** ./src/blocks/modules/catalog-menu/catalog-menu.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/bundle */ "./node_modules/swiper/swiper-bundle.mjs");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var CatalogMenu = /*#__PURE__*/function () {
  function CatalogMenu() {
    _classCallCheck(this, CatalogMenu);
  }
  _createClass(CatalogMenu, [{
    key: "initSlider",
    value: function initSlider() {
      if (!document.querySelector('.catalog-menu__right-products-slider.swiper')) return;
      document.querySelectorAll('.catalog-menu__right-products-slider.swiper').forEach(function (slider) {
        new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"](slider, {
          loop: true,
          slidesPerView: 3,
          spaceBetween: 30,
          zoom: {
            maxRatio: 0
          },
          breakpoints: {
            1700: {
              slidesPerView: 3
            },
            1000: {
              slidesPerView: 2
            },
            900: {
              slidesPerView: 1,
              spaceBetween: 25
            },
            0: {
              slidesPerView: 1.5,
              spaceBetween: 15
            }
          },
          // If we need pagination
          pagination: {
            el: '.swiper-pagination'
          },
          // Navigation arrows
          navigation: {
            nextEl: '.popular-categories__arrow.swiper-button-next',
            prevEl: '.popular-categories__arrow.swiper-button-prev'
          }

          // // And if we need scrollbar
          // scrollbar: {
          //   el: '.swiper-scrollbar',
          // },
        }).mount();
      });
    }
  }, {
    key: "openMenu",
    value: function openMenu() {
      document.querySelectorAll(".catalog-menu__left-list li").forEach(function (menuItem) {
        menuItem.addEventListener("click", function (event) {
          // if (window.innerWidth <= 960) return;
          if (event.target.closest(".catalog-menu__left-list li").querySelector(".catalog-menu__right-container--mobile")) {
            event.currentTarget.classList.toggle('open');
            event.target.closest(".catalog-menu__left-list li").querySelector(".catalog-menu__right-container--mobile").classList.toggle('open');
          }
        });
      });
    }
  }, {
    key: "addShowOnHoverHandler",
    value: function addShowOnHoverHandler() {
      if (!document.querySelector('[data-menu-to-open]')) return;
      document.querySelectorAll('[data-menu-to-open]').forEach(function (opener) {
        opener.addEventListener('mouseenter', function (event) {
          document.querySelector('[data-menu-to-open].isActive').classList.remove('isActive');
          event.currentTarget.classList.add('isActive');
          if (document.querySelector("[data-menu-id=\"".concat(event.currentTarget.dataset.menuToOpen, "\"]"))) {
            document.querySelector("[data-menu-id].isOpened").classList.remove('isOpened');
            document.querySelector("[data-menu-id=\"".concat(event.currentTarget.dataset.menuToOpen, "\"]")).classList.add('isOpened');
          }
        });
      });
    }
  }, {
    key: "init",
    value: function init() {
      this.addShowOnHoverHandler();
      this.initSlider();
      this.openMenu();
    }
  }]);
  return CatalogMenu;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CatalogMenu);

/***/ }),

/***/ "./src/blocks/modules/catalog-sections/catalog-sections.js":
/*!*****************************************************************!*\
  !*** ./src/blocks/modules/catalog-sections/catalog-sections.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var CatalogSections = /*#__PURE__*/function () {
  function CatalogSections() {
    _classCallCheck(this, CatalogSections);
    this.list_count = 5;
  }
  _createClass(CatalogSections, [{
    key: "addClickHandler",
    value: function addClickHandler() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.catalog-sections-list-item__more-title').on('click', function () {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).toggleClass('active').closest('.catalog-sections__list-item').find('.catalog-sections-list-item__list').toggleClass('visible');
      });
    }
  }, {
    key: "showButtonMore",
    value: function showButtonMore(list_count) {
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.catalog-sections__list-item')) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.catalog-sections__list-item').each(function () {
          var obj = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.catalog-sections-list-item__more') && obj.find('.catalog-sections-list-item__list-item').length > list_count) {
            obj.find('.catalog-sections-list-item__more').show();
          }
        });
      }
    }
  }, {
    key: "init",
    value: function init() {
      this.showButtonMore(this.list_count);
      this.addClickHandler();
    }
  }]);
  return CatalogSections;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CatalogSections);

/***/ }),

/***/ "./src/blocks/modules/compare/compare.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/compare/compare.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var overlayscrollbars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! overlayscrollbars */ "./node_modules/overlayscrollbars/overlayscrollbars.mjs");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var Compare = /*#__PURE__*/function () {
  function Compare() {
    _classCallCheck(this, Compare);
    this.scrollbar = null;
  }
  _createClass(Compare, [{
    key: "initScrollbar",
    value: function initScrollbar() {
      if (!document.querySelector('.compare__page-right')) return;
      this.scrollbar = (0,overlayscrollbars__WEBPACK_IMPORTED_MODULE_1__.OverlayScrollbars)(document.querySelector('.compare__page-right'), {}, {
        initialized: function initialized(osInstance) {
          var _osInstance$elements = osInstance.elements(),
            viewport = _osInstance$elements.viewport;
          document.querySelector('.compare__page-items').addEventListener('wheel', function (event) {
            event.preventDefault();
            viewport.scrollLeft += event.deltaY;
            console.log(event);
          });
        }
      });
    }
  }, {
    key: "calculateTdHeights",
    value: function calculateTdHeights() {
      if (!document.querySelector('[data-compare-item-key]')) return;
      var itemIds = Array.from(document.querySelectorAll('.compare__page-left .compare__page-bottom-item-td')).map(function (rowItem) {
        return rowItem.dataset.compareItemKey;
      });
      itemIds.forEach(function (id) {
        var maxHeight = 0;
        document.querySelectorAll("[data-compare-item-key=\"".concat(id, "\"]")).forEach(function (td) {
          if (td.clientHeight > maxHeight) {
            maxHeight = td.clientHeight;
          }
        });
        document.querySelectorAll("[data-compare-item-key=\"".concat(id, "\"]")).forEach(function (td) {
          td.style.height = "".concat(maxHeight, "px");
        });
      });
    }
  }, {
    key: "changeCompareItem",
    value: function changeCompareItem() {
      if (!document.querySelector('.compare__page-right .compare__page-item')) return;
      var pinned = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.compare__page-right .compare__page-item.isPinned').clone();
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.compare__page-left').html(pinned);
      // $('.compare__page-right').on('click', '.compare__page-conpare-with-it', function() {
      //     $('.compare__page-left .compare__page-item').removeClass('isPinned').appendTo('.compare__page-right .compare__page-items')
      //     $(this).closest('.compare__page-item').addClass('isPinned').appendTo('.compare__page-left');
      // })
    }
  }, {
    key: "checkUniqueParams",
    value: function checkUniqueParams() {
      var itemIds = Array.from(document.querySelectorAll('.compare__page-item.isPinned .compare__page-bottom-item-td')).map(function (rowItem) {
        return {
          id: rowItem.dataset.compareItemKey,
          items: Array.from(document.querySelectorAll(".compare__page-right [data-compare-item-key=\"".concat(rowItem.dataset.compareItemKey, "\"] span")))
        };
      });
      itemIds.forEach(function (item) {
        document.querySelector(".compare__page-item.isPinned [data-compare-item-key=\"".concat(item.id, "\"] span")).innerHTML = document.querySelector(".compare__page-item.isPinned [data-compare-item-key=\"".concat(item.id, "\"]")).dataset.defaultOptions;
        var etalon = document.querySelector(".compare__page-item.isPinned [data-compare-item-key=\"".concat(item.id, "\"] span")).innerHTML.replace(/\s/g, '').split(',');
        item.items.map(function (cell) {
          var valuesArr = cell.closest('.compare__page-bottom-item-td').dataset.defaultOptions.replace(/\s/g, '').split(',');
          var resultHtml = '';
          var coma = valuesArr.length > 1 ? ', ' : '';
          valuesArr.forEach(function (opt) {
            resultHtml += !etalon.includes(opt) ? "<u>".concat(opt, "</u>").concat(coma) : "".concat(opt).concat(coma);
          });
          cell.innerHTML = resultHtml;
        });
      });
      if (window.innerWidth <= 961) {
        this.changeCompareItem();
      }
    }
  }, {
    key: "linePositionSetter",
    value: function linePositionSetter() {
      document.querySelectorAll('[data-compare-item-key]').forEach(function (item) {
        item.addEventListener('mouseenter', function (event) {
          document.querySelector('.compare__page-right-line').style.display = 'block';
          document.querySelector('.compare__page-right-line').style.top = "".concat(event.target.getBoundingClientRect().top - event.target.closest('.compare__page').getBoundingClientRect().top, "px");
          document.querySelector('.compare__page-right-line').style.height = "".concat(event.target.clientHeight + 20, "px");
        });
      });
    }
  }, {
    key: "mobileCompareMoveProduct",
    value: function mobileCompareMoveProduct() {
      var _this = this;
      if (!document.querySelector('.compare__page-right .compare__page-item .compare__page-conpare-with-it')) return;
      document.querySelectorAll('.compare__page-right .compare__page-item .compare__page-conpare-with-it').forEach(function (button) {
        button.addEventListener('click', function (event) {
          document.querySelector('.compare__page-right .compare__page-item.isPinned').classList.remove('isPinned');
          event.currentTarget.closest('.compare__page-item').classList.add('isPinned');
          _this.checkUniqueParams();
        });
      });
      if (window.innerWidth <= 961) {
        this.changeCompareItem();
      }
    }
  }, {
    key: "desctopCompareMoveProduct",
    value: function desctopCompareMoveProduct() {
      var _this2 = this;
      if (!document.querySelector('.compare__page-item .compare__page__button--compare')) return;
      document.querySelectorAll('.compare__page-item .compare__page__button--compare').forEach(function (button) {
        button.addEventListener('click', function (event) {
          document.querySelector('.compare__page-item.isPinned').classList.remove('isPinned');
          event.currentTarget.closest('.compare__page-item').classList.add('isPinned');
          _this2.checkUniqueParams();
        });
      });
    }
  }, {
    key: "init",
    value: function init() {
      this.initScrollbar();
      this.calculateTdHeights();
      this.linePositionSetter();
      this.checkUniqueParams();
      this.mobileCompareMoveProduct(document.querySelector('.compare__page-item.isPinned'));
      this.desctopCompareMoveProduct();
    }
  }]);
  return Compare;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Compare);

/***/ }),

/***/ "./src/blocks/modules/countdown/countdown.js":
/*!***************************************************!*\
  !*** ./src/blocks/modules/countdown/countdown.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var dynamic_countdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dynamic-countdown */ "./node_modules/dynamic-countdown/index.min.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var Counter = /*#__PURE__*/function () {
  function Counter() {
    _classCallCheck(this, Counter);
  }
  _createClass(Counter, [{
    key: "setCounter",
    value: function setCounter() {
      document.querySelectorAll('.counter__wrapper').forEach(function (counter) {
        counter.appendChild((0,dynamic_countdown__WEBPACK_IMPORTED_MODULE_0__.mountCounter)(counter.dataset.targetDate, counter.dataset.timeFormat, '2', 'ru'));
      });
    }
  }, {
    key: "counterStart",
    value: function counterStart() {
      (0,dynamic_countdown__WEBPACK_IMPORTED_MODULE_0__.counter)();
    }
  }, {
    key: "init",
    value: function init() {
      var _this = this;
      if (!document.querySelector('.counter__wrapper')) return;
      this.setCounter();
      window.onload = function () {
        _this.counterStart();
      };
    }
  }]);
  return Counter;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Counter);

/***/ }),

/***/ "./src/blocks/modules/elements_list/elements_list.js":
/*!***********************************************************!*\
  !*** ./src/blocks/modules/elements_list/elements_list.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var ElementsList = /*#__PURE__*/function () {
  function ElementsList() {
    _classCallCheck(this, ElementsList);
    this.name_slice_length = 70;
  }
  _createClass(ElementsList, [{
    key: "addClickHandler",
    value: function addClickHandler() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js_closest .js_click').on('click', function () {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).toggleClass('open').closest('.js_closest').find('.js_find').toggle();
      });
    }
  }, {
    key: "addHoverHandler",
    value: function addHoverHandler() {
      if (!document.querySelector('.elements-item--with-buttons') || !document.querySelector('.elements-item__popover')) return;
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('mouseenter', '.elements-item--with-buttons', function (event) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.currentTarget).find('.elements-item__popover').show(100);
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('mouseleave', '.elements-item--with-buttons', function (event) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.currentTarget).find('.elements-item__popover').hide(100);
      });
    }
  }, {
    key: "addModalCloseHandler",
    value: function addModalCloseHandler() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', function (event) {
        var targetElement = jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.target);
        var isClickedOutside = targetElement.closest('.js_closest').length === 0;
        if (isClickedOutside) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js_click').removeClass('open').siblings('.js_find').hide();
        }
      });
    }
  }, {
    key: "init",
    value: function init() {
      this.addClickHandler();
      this.addModalCloseHandler();
      this.addHoverHandler();
    }
  }]);
  return ElementsList;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ElementsList);

/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * @class Header
 * @description Класс для работы с шапкой сайта
 */
var Header = /*#__PURE__*/function () {
  function Header() {
    _classCallCheck(this, Header);
  }
  _createClass(Header, [{
    key: "openMenuHandler",
    value:
    /**
     * @description Добавляет обработчики событий клика для открытия меню
     * @example
     * // Вызов функции для обработки клика на '.header-top__city', '.header-top__modal-close' и '.header-bottom__catalog-button'
     * 
     * window.app.header.openMenuHandler();
     */
    function openMenuHandler() {
      var _this = this;
      $('.header-top__city').on('click', function () {
        $('.header-top__modal-city').addClass('open');
      });
      $('.header-top__modal-close').on('click', function () {
        $('.header-top__modal-city').removeClass('open');
      });
      document.querySelector('.header-bottom__catalog-button').addEventListener('click', function () {
        document.querySelector('.catalog-menu').classList.toggle('open');
        _this.setCatalogBounds();
        if (window.innerWidth > 1300) {
          document.querySelector('body').classList.add('isScrollPrevented');
        }
      });
    }
    /**
     * @description Добавляет обработчики событий клика для закрытия меню
     * @example
     * // Вызов функции для обработки клика на '.catalog-menu__overlay' и '.catalog-menu__closer'
     * 
     * window.app.header.closeMenuHandler();
     */
  }, {
    key: "closeMenuHandler",
    value: function closeMenuHandler() {
      document.querySelector('.catalog-menu__overlay').addEventListener('click', function () {
        document.querySelector('.catalog-menu').classList.remove('open');
        document.querySelector('body').classList.remove('isScrollPrevented');
      });
      document.querySelector('.catalog-menu__closer').addEventListener('click', function () {
        document.querySelector('.catalog-menu').classList.remove('open');
        document.querySelector('body').classList.remove('isScrollPrevented');
      });
    }
    /**
     * @description Рассчитывает позиции меню каталога на странице при открытии
     * @returns {Object} { top: 100, left: 100, height: 100, right: 100,} Объект с позициями относительно окна браузера
     * @example
     * // Вызов функции для получения позиции меню каталога относительно окна браузера
     * 
     * let bounds = window.app.header.calculateCatalogBounds();
     * console.log(bounds.top);
     */
  }, {
    key: "calculateCatalogBounds",
    value: function calculateCatalogBounds() {
      var windowHeight = window.innerHeight;
      var windowWidth = window.innerWidth;
      var headerTopHeight = document.querySelector('.header-top').clientHeight;
      var headerBottomHeight = document.querySelector('.header-bottom').clientHeight;
      var headerBottomBounds = document.querySelector('.header-bottom').getBoundingClientRect();
      return {
        top: headerTopHeight + headerBottomHeight,
        left: headerBottomBounds.x,
        height: windowHeight - headerTopHeight - headerBottomHeight,
        right: headerBottomBounds.y + 273
      };
    }
    /**
     * @description Задает позиции меню каталога относительно окна браузера
     * @example
     * // Вызов функции для задания позиции меню каталога относительно окна браузера
     * 
     * window.app.header.setCatalogBounds();
     */
  }, {
    key: "setCatalogBounds",
    value: function setCatalogBounds() {
      if (window.innerWidth > 1300) {
        document.querySelector('.catalog-menu').style.height = "".concat(this.calculateCatalogBounds().height, "px");
        document.querySelector('.catalog-menu').style.top = "".concat(this.calculateCatalogBounds().top, "px");
        document.querySelector('.catalog-menu').style.setProperty('--plateWidth', "".concat(this.calculateCatalogBounds().left + 30, "px"));
        document.querySelector('.catalog-menu').style.right = "".concat(this.calculateCatalogBounds().right, "px");
      }
    }
    /**
     * @description Запускает функции при загрузке страницы
     * @example
     * // Вызов функций необходимых для работы при загрузке страницы
     * 
     * window.app.header.init();
     */
  }, {
    key: "init",
    value: function init() {
      var _this2 = this;
      this.openMenuHandler();
      this.closeMenuHandler();
      window.addEventListener('resize', function () {
        _this2.setCatalogBounds();
      });
    }
  }]);
  return Header;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/blocks/modules/inputmask/inputmask.js":
/*!***************************************************!*\
  !*** ./src/blocks/modules/inputmask/inputmask.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inputmask */ "./node_modules/inputmask/dist/inputmask.js");
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inputmask__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var Mask = /*#__PURE__*/function () {
  function Mask() {
    _classCallCheck(this, Mask);
  }
  _createClass(Mask, [{
    key: "addInitialMasks",
    value: function addInitialMasks() {
      var _this = this;
      document.querySelectorAll('[data-input-mask]').forEach(function (selector) {
        _this.setMask(selector, selector.dataset.inputMask);
      });
    }
  }, {
    key: "setMask",
    value: function setMask(selector, mask) {
      inputmask__WEBPACK_IMPORTED_MODULE_0___default()(mask).mask(selector);
    }
  }, {
    key: "init",
    value: function init() {
      this.addInitialMasks();
    }
  }]);
  return Mask;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Mask);

/***/ }),

/***/ "./src/blocks/modules/map/map.js":
/*!***************************************!*\
  !*** ./src/blocks/modules/map/map.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * @class
 * @description Класс для работы с картой
 */
var Map = /*#__PURE__*/function () {
  function Map() {
    _classCallCheck(this, Map);
    if (document.querySelector('#map_yandex')) {
      this.create();
    }
  }
  /**
  * @description Создает карту в любом блоке
  * @param  {String}  [selector = map_yandex]  [id блока куда вставится карта, без #]
  * @param  {Integer} [zoom = 16]     [Zoom карты при загрузке карты]
  * @param  {Array}   [center = [55.76, 37.64]]   [Координаты центра карты при загрузке]
  * @param  {Array}   [points = []]   [Массив точек на карте. Элементами массива могут быть как массив координат вида [55.76, 37.64], так и строка с адресом ]
  * @return {Promise}  map             [Объект карты]
  * 
  * @example
  * // Пример вызова карты с параметрами
  * 
  * window.app.map.create({
  selector: 'footer__map',
  zoom: 10,
  center: [55.76, 37.64],
  points: [ "Тула, Маргелова 5а", [55.76, 37.64] ]
  })
  * @example
  * // Для применения дополнительного функционала можно использовать метод then(), который принимает параметр map
  * 
  * window.app.map.create({
  selector: 'footer__map',
  zoom: 10,
  center: [55.76, 37.64],
  points: [ "Тула, Маргелова 5а", [55.76, 37.64] ]
  }).then(map => {
  console.log(map);
  map.setZoom(18);
  // тут можно писать любой функционал поверх экземпляра карты, который хранится в объекте map
  // доступные методы для работы с картой: {@link https://yandex.ru/dev/jsapi30/doc/ru/ref/#class-ymap}
  })
    */
  _createClass(Map, [{
    key: "create",
    value: function create() {
      var _this = this;
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$selector = _ref.selector,
        selector = _ref$selector === void 0 ? 'map_yandex' : _ref$selector,
        _ref$center = _ref.center,
        center = _ref$center === void 0 ? [55.76, 37.64] : _ref$center,
        _ref$zoom = _ref.zoom,
        zoom = _ref$zoom === void 0 ? 16 : _ref$zoom,
        _ref$controls = _ref.controls,
        controls = _ref$controls === void 0 ? ['default'] : _ref$controls,
        _ref$points = _ref.points,
        points = _ref$points === void 0 ? [] : _ref$points;
      return new Promise(function (resolve, reject) {
        if (!document.querySelector("#".concat(selector))) {
          reject("\u041D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 \u043D\u0435\u0442 \u0431\u043B\u043E\u043A\u0430 \u0441 \u0441\u0435\u043B\u0435\u043A\u0442\u043E\u0440\u043E\u043C ".concat(selector));
          return false;
        }
        ymaps.ready(function () {
          var map = new ymaps.Map(selector, {
            center: center,
            zoom: zoom,
            controls: controls
          });
          if (points) {
            _this.setMapPoint(map, points);
          }
          resolve(map);
        });
      });
    }
  }, {
    key: "setMapPoint",
    value: function () {
      var _setMapPoint = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(map, points) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return points.forEach(function (point) {
                ymaps.geocode(point, {
                  results: 1
                }).then(function (res) {
                  var coords = [res.geoObjects.get(0).geometry.getCoordinates()[0], res.geoObjects.get(0).geometry.getCoordinates()[1]];
                  console.log('res', res, coords);
                  map.geoObjects.add(new ymaps.Placemark(coords, {}, {
                    draggable: true
                  }));
                  map.setCenter(coords);
                });
              });
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function setMapPoint(_x, _x2) {
        return _setMapPoint.apply(this, arguments);
      }
      return setMapPoint;
    }()
  }]);
  return Map;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Map);

/***/ }),

/***/ "./src/blocks/modules/orders/orders.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/orders/orders.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var Orders = /*#__PURE__*/function () {
  function Orders() {
    _classCallCheck(this, Orders);
  }
  _createClass(Orders, [{
    key: "init",
    value: function init() {}
  }]);
  return Orders;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Orders);
jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-orders-box-item-open').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).toggleClass('open').closest('.orders-box-item').find('.orders-box-item__body').slideToggle();
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.orders-page__tabs').on('click', '.orders-page__tab:not(.active)', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('active').siblings().removeClass('active').closest('.orders-page').find('.orders-box').hide().eq(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).index()).show();
  });
});

/***/ }),

/***/ "./src/blocks/modules/personal-account-create-promocode/personal-account-create-promocode.js":
/*!***************************************************************************************************!*\
  !*** ./src/blocks/modules/personal-account-create-promocode/personal-account-create-promocode.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var air_datepicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! air-datepicker */ "./node_modules/air-datepicker/index.es.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var PersonalAccountCreatePromocode = /*#__PURE__*/function () {
  function PersonalAccountCreatePromocode() {
    var datepickerClass = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.date-picker';
    _classCallCheck(this, PersonalAccountCreatePromocode);
    this.datepicker = null;
    this.datepickerClass = datepickerClass;
  }
  _createClass(PersonalAccountCreatePromocode, [{
    key: "selectCategory",
    value: function selectCategory() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).mouseup(function (e) {
        var btn = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dars-select__btn');
        var popup = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dars-select-box');
        if (!btn.is(e.target) && btn.has(e.target).length === 0) {
          btn.removeClass('dars-select__btn--open');
          popup.removeClass('dars-select-box--active');
        }
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dars-select__btn').on('click', function () {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).toggleClass('dars-select__btn--open');
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dars-select-box').toggleClass('dars-select-box--active');
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-active-find-articul').on('click', function () {
        var obj = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
        var text = obj.find('.js-category-name').html();
        if (text !== '') {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dars-select__btn').html(text);
        }
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js_cond_select').on('click', function () {
        var obj = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
        var text = obj.find('.js-category-name').html();
        var percent = obj.data('percent');
        var halfPercent = percent / 2;
        var halfPercentCeil = Math.ceil(percent / 2);
        var ourPercent = percent - halfPercentCeil;
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.create-promocode-percent__input-range').attr('max', percent).val(halfPercent);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.create-promocode-percent__input-first').text(halfPercentCeil).siblings('input').val(halfPercentCeil);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.create-promocode-percent__input-last').text(ourPercent).siblings('input').val(ourPercent);
        if (text !== '') {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dars-select__btn').html(text);
        }
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.create-promocode__body').removeClass('create-promocode__body--blocked');
      });
    }
  }, {
    key: "initialiseDatepecker",
    value: function initialiseDatepecker() {
      var startDate = new Date();
      this.datepicker = new air_datepicker__WEBPACK_IMPORTED_MODULE_1__["default"](this.datepickerClass, {
        range: true,
        multipleDatesSeparator: ' до ',
        minDate: startDate,
        startDate: startDate,
        navTitles: {
          days: '<i>MMMM</i>'
        }
      });
    }
  }, {
    key: "init",
    value: function init() {
      this.initialiseDatepecker();
      this.selectCategory();
    }
  }]);
  return PersonalAccountCreatePromocode;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PersonalAccountCreatePromocode);
jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js_percent_range').on('input', function () {
    var range = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
    var discountToTheClient = Math.round(range.attr('max') - range.val());
    var partnerRemuneration = Math.round(range.val());
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js_percent_first_output').val(discountToTheClient);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js_percent_first_input').val(discountToTheClient);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js_percent_last_output').val(partnerRemuneration);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js_percent_last_input').val(partnerRemuneration);
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.promo-code-generation__btn-submit').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.create-promocode-successfully').slideDown();
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-create-promocode-result-close').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).closest('.create-promocode__result').slideUp();
  });
  function copyText(el) {
    var $temp = jquery__WEBPACK_IMPORTED_MODULE_0___default()("<input>");
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").append($temp);
    var text = el.closest('.personal-promocode-item').find("[data-copy-text-id=\"".concat(el.data('copyTextFrom'), "\"]")).text().trim();
    $temp.val(text).select();
    document.execCommand("copy");
    $temp.remove();
  }
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-copy-text-from]').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-copy-text-from]').removeClass('copy');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('copy');
    copyText(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).mouseup(function (e) {
    var btn = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-open-description');
    var popup = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.personal-account-promocode__popup-description');
    if (!btn.is(e.target) && btn.has(e.target).length === 0) {
      btn.removeClass('open');
      popup.slideUp();
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-open-description').on('click', function () {
    var text = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('popupDescription');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-open-description').removeClass('open');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('open');
    var popup = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.personal-account-promocode__popup-description').clone();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.personal-account-promocode__popup-description').remove();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').append(popup);
    var popupHeight = popup.text(text).outerHeight();
    popup.css({
      'top': jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).offset().top - popupHeight - 10,
      'left': jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).offset().left - 45
    }).slideDown();
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.personal-promocode__list').on('scroll', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-open-description').removeClass('open');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.personal-account-promocode__popup-description').slideUp();
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '.js-delete-promocode', function () {
    var wrap = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).closest('.personal-promocode-item');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.modal-delete-promocode').find('input[name="id-del-promocode"]').val(wrap.data('idPromocode'));
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.modal-delete-promocode__yes').on('click', function () {
    var wrap = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).closest('.modal-delete-promocode');
    var idDelPromocode = wrap.find('input[name="id-del-promocode"]').val();
    var itemPromocode = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".personal-promocode-item[data-id-promocode=\"".concat(idDelPromocode, "\"]"));
    itemPromocode.slideUp(300, function () {
      itemPromocode.remove();
      visbilityTitleEmptyPromocode();
    });
    wrap.parent().removeClass('isOpened');
  });
  visbilityTitleEmptyPromocode();
  function visbilityTitleEmptyPromocode() {
    var title = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.personal-account-promocode__sidebar-empty');
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.personal-promocode-item').length > 0) {
      title.slideUp();
    } else {
      title.slideDown();
    }
  }
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-dars-select-list li').on('click', function () {
    var obj = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
    console.log(obj.attr('class'));
    if (obj.hasClass('js_cond_select')) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-window-find-articul').slideUp();
    } else if (obj.hasClass('js-active-find-articul')) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-window-find-articul').slideDown();
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-reset-search').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-search-box-input').val('');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-search-result-box-list li').hide();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-search-result-box-error').hide();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.search-box').removeClass('search-box--error');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-promo-code-indefinitely input').on('click', function () {
    var checked = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).prop('checked');
    console.log(checked);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).closest('.dars-control').toggleClass('dars-control--disabled').find('.date-picker').prop('disabled', checked);
  });
  function generateRandomString(length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dars-control__btn--random').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('input[name="promo-code-name"]').val(generateRandomString(10));
  });
});

/***/ }),

/***/ "./src/blocks/modules/personal-account-statistics/personal-account-statistics.js":
/*!***************************************************************************************!*\
  !*** ./src/blocks/modules/personal-account-statistics/personal-account-statistics.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var PersonalAccountStatistics = /*#__PURE__*/function () {
  function PersonalAccountStatistics() {
    _classCallCheck(this, PersonalAccountStatistics);
  }
  _createClass(PersonalAccountStatistics, [{
    key: "init",
    value: function init() {}
  }]);
  return PersonalAccountStatistics;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PersonalAccountStatistics);
jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  function copyText(el) {
    var $temp = jquery__WEBPACK_IMPORTED_MODULE_0___default()("<input>");
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").append($temp);
    var text = el.closest('.js_closest').find("[data-copy-text-id=\"".concat(el.data('copyTextFrom'), "\"]")).text().trim();
    $temp.val(text).select();
    document.execCommand("copy");
    $temp.remove();
  }
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-copy-text-from]').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-copy-text-from]').removeClass('copy');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('copy');
    copyText(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-account-statistics-item-btn-toggle-detail').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).toggleClass('open').closest('.account-statistics-item').find('.account-statistics-item__detail').slideToggle();
  });
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).keyup(function (e) {
  if (e.ctrlKey && e.keyCode === 67) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-copy-text-from]').removeClass('copy');
  }
});

/***/ }),

/***/ "./src/blocks/modules/personal-account/personal-account.js":
/*!*****************************************************************!*\
  !*** ./src/blocks/modules/personal-account/personal-account.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var PersonalAccount = /*#__PURE__*/function () {
  function PersonalAccount() {
    _classCallCheck(this, PersonalAccount);
  }
  _createClass(PersonalAccount, [{
    key: "init",
    value: function init() {}
  }]);
  return PersonalAccount;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PersonalAccount);
$(document).ready(function () {
  $('.js-copy-data').on('change', function () {
    var dataNameFrom = $(this).data('copyFrom');
    var dataNameTo = $(this).data('copyTo');
    var fromElem = $("[name=\"".concat(dataNameFrom, "\"]"));
    var toElem = $("[name=\"".concat(dataNameTo, "\"]"));
    /*
    if($(this).is(':checked')){
        let donorValue = fromElem?.val();
        toElem?.val(donorValue).prop('disabled', true);
    } else {
        toElem?.prop('disabled', false);
    }
    */
    if ($(this).is(':checked')) {
      toElem === null || toElem === void 0 ? void 0 : toElem.val(fromElem === null || fromElem === void 0 ? void 0 : fromElem.val());
    }
  });
  $('[data-group-type]').each(function () {
    $(this).on('change', function () {
      toogleInputs($(this).data("group-type"));
    });
  });
  toogleInputs($('[data-group-type][checked]').data("group-type"));
  function toogleInputs(name) {
    $('[data-type]').each(function (index, element) {
      $(element).data('type').includes(name) ? $(this).show() : $(this).hide();
    });
  }
});

/***/ }),

/***/ "./src/blocks/modules/popular-categories/popular-categories.js":
/*!*********************************************************************!*\
  !*** ./src/blocks/modules/popular-categories/popular-categories.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/bundle */ "./node_modules/swiper/swiper-bundle.mjs");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * @class PopularCategories
 * @description Класс для обработки блока "Популярные категории"
 *
*/

var PopularCategories = /*#__PURE__*/function () {
  function PopularCategories() {
    _classCallCheck(this, PopularCategories);
    this.slider = null;
  }
  /**
   * @description Добавляет слайдер (swiper) для блока с классом .popular-categories__slider.swiper
   * 
   * @example
   * // Вызов функции для создания слайдера
   * 
   * window.app.popularCategories.initSlider();
   *
   * @example
   * // Для переопределения параметров необходимо переопределить функцию создания слайдера
   * 
   * window.app.popularCategories.initSlider = function() {
   *   if (!document.querySelector('.popular-categories__slider.swiper')) return;
   *   window.app.popularCategories.slider = new Swiper('.popular-categories__slider.swiper', {
   *    loop: false,
   *    slidesPerView: 5.5,
   *    spaceBetween: 25,
   *  }).mount();
   *};
   *  
  */
  _createClass(PopularCategories, [{
    key: "initSlider",
    value: function initSlider() {
      if (!document.querySelector('.popular-categories__slider.swiper')) return;
      this.slider = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"]('.popular-categories__slider.swiper', {
        loop: false,
        slidesPerView: 5.5,
        spaceBetween: 25,
        zoom: {
          maxRatio: 0
        },
        breakpoints: {
          1700: {
            slidesPerView: 5.5
          },
          1200: {
            slidesPerView: 4
          },
          900: {
            slidesPerView: 3,
            spaceBetween: 25
          },
          600: {
            slidesPerView: 2
          },
          0: {
            slidesPerView: 2,
            spaceBetween: 15
          }
        },
        // If we need pagination
        pagination: {
          el: '.swiper-pagination'
        },
        // Navigation arrows
        navigation: {
          nextEl: '.popular-categories__arrow.swiper-button-next',
          prevEl: '.popular-categories__arrow.swiper-button-prev'
        },
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar'
        }
      }).mount();
    }
  }, {
    key: "init",
    value: function init() {
      this.initSlider();
    }
  }]);
  return PopularCategories;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopularCategories);

/***/ }),

/***/ "./src/blocks/modules/sale/sale.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/sale/sale.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var SaleBlock = /*#__PURE__*/function () {
  function SaleBlock() {
    _classCallCheck(this, SaleBlock);
  }
  _createClass(SaleBlock, [{
    key: "addShowAllClickHandler",
    value: function addShowAllClickHandler() {
      if (document.querySelector('.sale__button-all')) {
        document.querySelector('.sale__button-all').addEventListener('click', function (event) {
          console.log('asdasdasasds');
          event.target.classList.toggle("isOpened");
          event.target.closest(".sale__in").querySelector('.sale__list').classList.toggle('isOpened');
        });
      }
    }
  }, {
    key: "init",
    value: function init() {
      this.addShowAllClickHandler();
    }
  }]);
  return SaleBlock;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SaleBlock);

/***/ }),

/***/ "./src/blocks/modules/tabs/tabs.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/tabs/tabs.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/bundle */ "./node_modules/swiper/swiper-bundle.mjs");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var Tabs = /*#__PURE__*/function () {
  function Tabs() {
    _classCallCheck(this, Tabs);
    this.slider = null;
  }
  _createClass(Tabs, [{
    key: "initSlider",
    value: function initSlider() {
      if (!document.querySelector('.tabs__slider.swiper')) return;
      this.slider = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"]('.tabs__slider.swiper', {
        loop: false,
        slidesPerView: 4.5,
        spaceBetween: 25,
        zoom: {
          maxRatio: 0
        },
        breakpoints: {
          1700: {
            slidesPerView: 4.5
          },
          1200: {
            slidesPerView: 3.5
          },
          900: {
            slidesPerView: 2.5,
            spaceBetween: 25
          },
          0: {
            slidesPerView: 2.5,
            spaceBetween: 15
          }
        },
        // If we need pagination
        pagination: {
          el: '.swiper-pagination'
        },
        // Navigation arrows
        navigation: {
          nextEl: '.tabs__arrow.swiper-button-next',
          prevEl: '.tabs__arrow.swiper-button-prev'
        },
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar'
        }
      }).init();
    }
  }, {
    key: "addtabChangeHandler",
    value: function addtabChangeHandler() {
      var _this = this;
      if (!document.querySelector('[data-slide-show]')) return;
      document.querySelectorAll('[data-slide-show]').forEach(function (tabButton) {
        tabButton.addEventListener('click', function (e) {
          if (e.target.classList.contains('tabs__left-item--active')) return;
          document.querySelector('.tabs__left-item--active').classList.remove('tabs__left-item--active');
          document.querySelectorAll(".tabs__slider-item").forEach(function (slide) {
            if (slide.dataset.slideType.includes(tabButton.dataset.slideShow)) {
              slide.style.display = 'block';
            } else {
              slide.style.display = 'none';
            }
          });
          _this.slider.update();
          tabButton.classList.add('tabs__left-item--active');
        });
      });
    }
  }, {
    key: "imageShowHendler",
    value: function imageShowHendler() {
      if (!document.querySelector(".tabs__slider-item-image")) return;
      document.querySelectorAll(".tabs__hidden-item").forEach(function (hiddenItem) {
        hiddenItem.addEventListener("mouseover", function (event) {
          var imageId = event.target.dataset.imageToShow;
          event.target.closest(".tabs__slider-item-image").querySelector('.tabs__image--active').classList.remove("tabs__image--active");
          event.target.closest(".tabs__slider-item-image").querySelector('.tabs__hidden-item.isActive').classList.remove("isActive");
          event.target.closest(".tabs__slider-item-image").querySelector("[data-image_id=\"".concat(imageId, "\"]")).classList.add("tabs__image--active");
          event.target.classList.add("isActive");
        });
      });
    }
  }, {
    key: "init",
    value: function init() {
      this.initSlider();
      this.imageShowHendler();
      this.addtabChangeHandler();
    }
  }]);
  return Tabs;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tabs);

/***/ }),

/***/ "./src/blocks/modules/up-button/up-button.js":
/*!***************************************************!*\
  !*** ./src/blocks/modules/up-button/up-button.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var UpButton = /*#__PURE__*/function () {
  function UpButton() {
    _classCallCheck(this, UpButton);
  }
  _createClass(UpButton, [{
    key: "setClickHandler",
    value: function setClickHandler() {
      if (!document.querySelector('.up-button--js')) return;
      document.querySelector('.up-button--js').addEventListener('click', function () {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }
  }, {
    key: "init",
    value: function init() {
      this.setClickHandler();
    }
  }]);
  return UpButton;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UpButton);

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_popular_categories_popular_categories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/popular-categories/popular-categories */ "./src/blocks/modules/popular-categories/popular-categories.js");
/* harmony import */ var _modules_brands_brands__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/brands/brands */ "./src/blocks/modules/brands/brands.js");
/* harmony import */ var _modules_banners_banners__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/banners/banners */ "./src/blocks/modules/banners/banners.js");
/* harmony import */ var _modules_banners_banner_big__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/banners/banner-big */ "./src/blocks/modules/banners/banner-big.js");
/* harmony import */ var _modules_tabs_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/tabs/tabs */ "./src/blocks/modules/tabs/tabs.js");
/* harmony import */ var _modules_catalog_menu_catalog_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/catalog-menu/catalog-menu */ "./src/blocks/modules/catalog-menu/catalog-menu.js");
/* harmony import */ var _modules_countdown_countdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! %modules%/countdown/countdown */ "./src/blocks/modules/countdown/countdown.js");
/* harmony import */ var _modules_action_action__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! %modules%/action/action */ "./src/blocks/modules/action/action.js");
/* harmony import */ var _modules_catalog_sections_catalog_sections__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! %modules%/catalog-sections/catalog-sections */ "./src/blocks/modules/catalog-sections/catalog-sections.js");
/* harmony import */ var _modules_elements_list_elements_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! %modules%/elements_list/elements_list */ "./src/blocks/modules/elements_list/elements_list.js");
/* harmony import */ var _modules_catalog_detail_page_catalog_detail_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! %modules%/catalog-detail-page/catalog-detail-page */ "./src/blocks/modules/catalog-detail-page/catalog-detail-page.js");
/* harmony import */ var _modules_compare_compare__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! %modules%/compare/compare */ "./src/blocks/modules/compare/compare.js");
/* harmony import */ var _modules_brands_detail_top_brands_detail_top__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! %modules%/brands-detail-top/brands-detail-top */ "./src/blocks/modules/brands-detail-top/brands-detail-top.js");
/* harmony import */ var _modules_brands_top_brands_top__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! %modules%/brands-top/brands-top */ "./src/blocks/modules/brands-top/brands-top.js");
/* harmony import */ var _modules_affiliate_program_affiliate_program__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! %modules%/affiliate-program/affiliate-program */ "./src/blocks/modules/affiliate-program/affiliate-program.js");
/* harmony import */ var _components_modal_modal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! %components%/modal/modal */ "./src/blocks/components/modal/modal.js");
/* harmony import */ var _modules_cart_page_cart_page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! %modules%/cart-page/cart-page */ "./src/blocks/modules/cart-page/cart-page.js");
/* harmony import */ var _modules_personal_account_personal_account__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! %modules%/personal-account/personal-account */ "./src/blocks/modules/personal-account/personal-account.js");
/* harmony import */ var _modules_personal_account_create_promocode_personal_account_create_promocode__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! %modules%/personal-account-create-promocode/personal-account-create-promocode */ "./src/blocks/modules/personal-account-create-promocode/personal-account-create-promocode.js");
/* harmony import */ var _modules_catalog_filter_catalog_filter__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! %modules%/catalog-filter/catalog-filter */ "./src/blocks/modules/catalog-filter/catalog-filter.js");
/* harmony import */ var _modules_personal_account_statistics_personal_account_statistics__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! %modules%/personal-account-statistics/personal-account-statistics */ "./src/blocks/modules/personal-account-statistics/personal-account-statistics.js");
/* harmony import */ var _modules_orders_orders__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! %modules%/orders/orders */ "./src/blocks/modules/orders/orders.js");
/* harmony import */ var _modules_cart_page_order_cart_page_order__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! %modules%/cart-page-order/cart-page-order */ "./src/blocks/modules/cart-page-order/cart-page-order.js");
/* harmony import */ var _modules_inputmask_inputmask__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! %modules%/inputmask/inputmask */ "./src/blocks/modules/inputmask/inputmask.js");
/* harmony import */ var _modules_up_button_up_button__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! %modules%/up-button/up-button */ "./src/blocks/modules/up-button/up-button.js");
/* harmony import */ var _modules_map_map__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! %modules%/map/map */ "./src/blocks/modules/map/map.js");
/* harmony import */ var _modules_sale_sale__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! %modules%/sale/sale */ "./src/blocks/modules/sale/sale.js");




























window.app = {};
window.app.header = new _modules_header_header__WEBPACK_IMPORTED_MODULE_0__["default"]();
window.app.popularCategories = new _modules_popular_categories_popular_categories__WEBPACK_IMPORTED_MODULE_1__["default"]();
window.app.popularBrands = new _modules_brands_brands__WEBPACK_IMPORTED_MODULE_2__["default"]();
window.app.bannerProduct = new _modules_banners_banners__WEBPACK_IMPORTED_MODULE_3__["default"]();
window.app.banner = new _modules_banners_banner_big__WEBPACK_IMPORTED_MODULE_4__["default"]();
window.app.tabs = new _modules_tabs_tabs__WEBPACK_IMPORTED_MODULE_5__["default"]();
window.app.catalogMenu = new _modules_catalog_menu_catalog_menu__WEBPACK_IMPORTED_MODULE_6__["default"]();
window.app.counter = new _modules_countdown_countdown__WEBPACK_IMPORTED_MODULE_7__["default"]();
window.app.action = new _modules_action_action__WEBPACK_IMPORTED_MODULE_8__["default"]();
window.app.catalogSections = new _modules_catalog_sections_catalog_sections__WEBPACK_IMPORTED_MODULE_9__["default"]();
window.app.elementsList = new _modules_elements_list_elements_list__WEBPACK_IMPORTED_MODULE_10__["default"]();
window.app.catalogDetailPage = new _modules_catalog_detail_page_catalog_detail_page__WEBPACK_IMPORTED_MODULE_11__["default"]();
window.app.compare = new _modules_compare_compare__WEBPACK_IMPORTED_MODULE_12__["default"]();
window.app.brandsDetaiTop = new _modules_brands_detail_top_brands_detail_top__WEBPACK_IMPORTED_MODULE_13__["default"]();
window.app.brandsTop = new _modules_brands_top_brands_top__WEBPACK_IMPORTED_MODULE_14__["default"]();
window.app.affiliateProgram = new _modules_affiliate_program_affiliate_program__WEBPACK_IMPORTED_MODULE_15__["default"]();
window.app.modal = new _components_modal_modal__WEBPACK_IMPORTED_MODULE_16__["default"]();
window.app.cartPage = new _modules_cart_page_cart_page__WEBPACK_IMPORTED_MODULE_17__["default"]();
window.app.personalAccount = new _modules_personal_account_personal_account__WEBPACK_IMPORTED_MODULE_18__["default"]();
window.app.personalAccountCreatePromocode = new _modules_personal_account_create_promocode_personal_account_create_promocode__WEBPACK_IMPORTED_MODULE_19__["default"]();
window.app.catalogFilter = new _modules_catalog_filter_catalog_filter__WEBPACK_IMPORTED_MODULE_20__["default"]();
window.app.orderPage = new _modules_cart_page_order_cart_page_order__WEBPACK_IMPORTED_MODULE_23__["default"]();
window.app.upButton = new _modules_up_button_up_button__WEBPACK_IMPORTED_MODULE_25__["default"]();
window.app.personalAccountStatistics = new _modules_personal_account_statistics_personal_account_statistics__WEBPACK_IMPORTED_MODULE_21__["default"]();
window.app.orders = new _modules_orders_orders__WEBPACK_IMPORTED_MODULE_22__["default"]();
window.app.mask = new _modules_inputmask_inputmask__WEBPACK_IMPORTED_MODULE_24__["default"]();
window.app.map = new _modules_map_map__WEBPACK_IMPORTED_MODULE_26__["default"]();
window.app.sale = new _modules_sale_sale__WEBPACK_IMPORTED_MODULE_27__["default"]();
document.addEventListener('DOMContentLoaded', function () {
  window.app.header.init();
  window.app.popularCategories.init();
  window.app.popularBrands.init();
  window.app.bannerProduct.init();
  window.app.banner.init();
  window.app.tabs.init();
  window.app.catalogMenu.init();
  window.app.counter.init();
  window.app.action.init();
  window.app.catalogSections.init();
  window.app.elementsList.init();
  window.app.catalogDetailPage.init();
  window.app.compare.init();
  window.app.brandsDetaiTop.init();
  window.app.brandsTop.init();
  window.app.affiliateProgram.init();
  window.app.modal.init();
  window.app.cartPage.init();
  window.app.personalAccount.init();
  window.app.personalAccountCreatePromocode.init();
  window.app.catalogFilter.init();
  window.app.orderPage.init();
  window.app.upButton.init();
  window.app.personalAccountStatistics.init();
  window.app.orders.init();
  window.app.mask.init();
  window.app.sale.init();
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkgulp_scss_starter"] = self["webpackChunkgulp_scss_starter"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./src/js/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map