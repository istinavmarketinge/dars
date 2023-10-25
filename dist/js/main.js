/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/components/auth/auth.js":
/*!********************************************!*\
  !*** ./src/blocks/components/auth/auth.js ***!
  \********************************************/
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
var Auth = /*#__PURE__*/function () {
  function Auth() {
    _classCallCheck(this, Auth);
  }
  _createClass(Auth, [{
    key: "addModalOpenHandler",
    value: function addModalOpenHandler() {
      if (!document.querySelector('.right-icons__item--login')) return;
      document.querySelectorAll('.right-icons__item--login').forEach(function (opener) {
        opener.addEventListener('click', function (event) {
          document.querySelector('.auth-modal--registration').classList.add('active');
        });
      });
    }
  }, {
    key: "addModalCloseHandler",
    value: function addModalCloseHandler() {
      if (!document.querySelector('.auth-modal-box__btn-close')) return;
      document.querySelectorAll('.auth-modal-box__btn-close').forEach(function (close) {
        close.addEventListener('click', function (event) {
          document.querySelectorAll('.auth-modal').forEach(function (wrap) {
            wrap.classList.remove('active');
          });
        });
      });
    }
  }, {
    key: "init",
    value: function init() {
      this.addModalOpenHandler();
      this.addModalCloseHandler();
    }
  }]);
  return Auth;
}();
$(document).ready(function () {
  $('.auth-modal-box__btn-registration[type="submit"]').on('click', function () {
    $(this).closest('.auth-modal-box__form').hide();
    $('.auth-modal-box-successfully').show();
  });
  $('.auth-modal-box__btn-registration[type="button"]').on('click', function () {
    $(this).closest('.auth-modal').hide().removeClass('active').removeAttr('style');
    $('.auth-modal--registration').addClass('active');
  });
  $('.auth-modal-box__btn-ok, .auth-modal-box__btn-auth[type="submit"]').on('click', function () {
    var wrap = $(this).closest('.auth-modal');
    wrap.fadeOut(300, function () {
      wrap.removeClass('active').removeAttr('style');
    });
  });
  $('.auth-modal-box__btn-auth[type="button"]').on('click', function () {
    $(this).closest('.auth-modal').hide().removeClass('active').removeAttr('style');
    $('.auth-modal--authorization').addClass('active');
  });
  $('.auth-modal-box__btn-link--password-recovery').on('click', function () {
    $(this).closest('.auth-modal').hide().removeClass('active').removeAttr('style');
    $('.auth-modal--password-recovery').addClass('active');
  });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Auth);

/***/ }),

/***/ "./src/blocks/components/modal/modal.js":
/*!**********************************************!*\
  !*** ./src/blocks/components/modal/modal.js ***!
  \**********************************************/
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
var Modal = /*#__PURE__*/function () {
  function Modal() {
    _classCallCheck(this, Modal);
  }
  _createClass(Modal, [{
    key: "addModalOpenHandler",
    value: function addModalOpenHandler() {
      if (!document.querySelector('[data-modal-toggle]')) return;
      document.querySelectorAll('[data-modal-toggle]').forEach(function (opener) {
        opener.addEventListener('click', function (event) {
          document.querySelector("[data-modal-id=\"".concat(event.currentTarget.dataset.modalToggle, "\"]")).classList.toggle('isOpened');
        });
      });
    }
  }, {
    key: "addModalCloseHandler",
    value: function addModalCloseHandler() {
      if (document.querySelector('.popup-modal__closer, .modal-delete-promocode__no')) {
        document.querySelectorAll('.popup-modal__closer, .modal-delete-promocode__no').forEach(function (closer) {
          closer.addEventListener('click', function (event) {
            event.currentTarget.closest('.popup-modal').classList.remove('isOpened');
          });
        });
      }
      if (document.querySelector('.popup-modal')) {
        document.querySelectorAll('.popup-modal').forEach(function (closer) {
          closer.addEventListener('click', function (event) {
            event.currentTarget.classList.remove('isOpened');
          });
        });
      }
      if (document.querySelector('.popup-modal__content, .modal-delete-promocode')) {
        document.querySelectorAll('.popup-modal__content, .modal-delete-promocode').forEach(function (closer) {
          closer.addEventListener('click', function (event) {
            event.stopPropagation();
          });
        });
      }
    }
  }, {
    key: "init",
    value: function init() {
      this.addModalOpenHandler();
      this.addModalCloseHandler();
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
    this.class_close = "close";
  }
  _createClass(Action, [{
    key: "addClickHandler",
    value: function addClickHandler(action_find_heigh) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.action .js_click_link').on('click', function () {
        var obj = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
        obj.closest('.js_click_closest').find('.js_click_find').css('height', action_find_heigh + 'px');
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.jquery_obj).removeClass(this.class_close);
        obj.hide();
        console.log(this.action_find_height, action_find_heigh);
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
if (document.querySelector(".affiliate-program__more ")) {
  jQuery(document).ready(function () {
    $('.affiliate-program__more ').on('click', function () {
      $('.affiliate-program__right').addClass('open');
    });
    $('.affiliate-program__hide-details').on('click', function () {
      $('.affiliate-program__right').removeClass('open');
    });
    $('.affiliate-program__button').on('click', function () {
      $('.thanks-you').addClass('open');
    });
    $('.thanks-you__close').on('click', function () {
      $('.thanks-you').removeClass('open');
    });
  });
}

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
          console.log(event.currentTarget.dataset.lang);
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(".brands-items__item[data-word-type=\"".concat(event.currentTarget.dataset.lang, "\"]")).slideDown('fast');
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(".brands-items__item:not([data-word-type=\"".concat(event.currentTarget.dataset.lang, "\"])")).slideUp('fast');
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
      console.log(categoryId);
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
          console.log(brand);
        } else {
          console.log(brand);
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
          console.log(length);
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
      console.log('BrandsTop');
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
      console.log('chooseSelectValue');
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
          console.log(brand);
        } else {
          console.log(brand);
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
      console.log('tooltip');
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
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/bundle */ "./node_modules/swiper/swiper-bundle.mjs");
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
  }
  _createClass(DetailCatalogSlider, [{
    key: "initSlider",
    value: function initSlider() {
      if (!document.querySelector('.catalog-detail-slider-main, .catalog-detail-slider-nav, .catalog-detail-page-tabs-list')) return;
      var navSlider = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"]('.catalog-detail-slider-nav', {
        loop: true,
        spaceBetween: 3,
        slidesPerView: 10,
        freeMode: true,
        watchSlidesProgress: true
      });
      var mainSlider = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"]('.catalog-detail-slider-main', {
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
      var catalogSlider = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"]('.catalog-detail-page__catalog-slider', {
        loop: true,
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
            catalogSliderVertical = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"]('.catalog-detail-page-related-products__list', {
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
    }
  }]);
  return DetailCatalogSlider;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DetailCatalogSlider);
jQuery(document).ready(function () {
  $('.box-to-favourites').on('click', function () {
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
      $(this).find('.controls-bar__item-title').text('В избранном');
    } else {
      $(this).find('.controls-bar__item-title').text('В избранное');
    }
  });

  // $('.box-to-compare').on('click',function(){
  //   $(this).toggleClass('active');

  //   if($(this).hasClass('active')){
  //     $(this).find('.controls-bar__item-title').text('В сравнении');
  //   } else {
  //     $(this).find('.controls-bar__item-title').text('К сравнению');
  //   }
  // });

  $('.catalog-detail-page-header__specifications-more').on('click', function () {
    var link = $(this).data('link');
    var tabsBlockPosition = $('.catalog-detail-page-header__in-right-block').offset().top;
    window.scrollTo({
      top: tabsBlockPosition
    });
    var index = $('.catalog-detail-page-tabs-list').find("#".concat(link)).index();
    $('.catalog-detail-page-tabs-list').find('li').removeClass('active').eq(index).addClass('active').closest('.catalog-detail-page-tabs-block').find('.catalog-detail-page-main-list__item').removeClass('active').eq(index).addClass('active');
  });
  $('.btn-to-basket').on('click', function () {
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
      $(this).attr('href', '/basket/').html('Товар в корзине <span>Перейти</span>');
    }
  });
  $('.btn-fast-buy').on('click', function () {
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
      $(this).html('Спасибо за покупку! <span>Перейти в каталог</span>');
    }
  });
  $('.catalog-detail-page-tabs-list').on('click', 'li:not(.active)', function () {
    $(this).addClass('active').siblings().removeClass('active').closest('.catalog-detail-page-tabs-block').find('.catalog-detail-page-main-list__item').removeClass('active').eq($(this).index()).addClass('active');
  });
  $('.review-form__estimation-input').on('change', function () {
    var num = $(this).val();
    $('.rating-calculation__estimation-value').text(num);
  });
  $('.reviews-list-box__add-review').on('click', function () {
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
      $(this).text($(this).data('activeText'));
    } else {
      $(this).text($(this).data('text'));
    }
    $('.review-block__review-form').slideToggle();
  });
});

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
          console.log(menuItem);
          if (event.target.closest(".catalog-menu__left-list li").querySelector(".catalog-menu__right-container--mobile")) {
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
          console.log("[data-menu-id=\"".concat(event.currentTarget.dataset.menuToOpen, "]"));
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
          if (window.innerWidth >= 960) {
            osInstance.isClicked = false;
            var _osInstance$elements = osInstance.elements(),
              viewport = _osInstance$elements.viewport;
            document.querySelector('.compare__page').addEventListener('mousedown', function (event) {
              osInstance.isClicked = true;
            });
            document.querySelector('.compare__page').addEventListener('mouseup', function (event) {
              osInstance.isClicked = false;
            });
            document.querySelector('.compare__page').addEventListener('mousemove', function (event) {
              if (osInstance.isClicked) {
                console.log(event.clientX, viewport.scrollLeft);
                // osInstance.scroll({y: event.offsetX})
                viewport.scrollTo({
                  left: viewport.scrollLeft - (event.clientX - viewport.clientWidth / 2) / 10
                });
              }
            });
          }
        }
      });
      // console.log(this.scrollbar.elements());
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
          console.log(td.clientHeight);
          if (td.clientHeight > maxHeight) {
            maxHeight = td.clientHeight;
          }
        });
        document.querySelectorAll("[data-compare-item-key=\"".concat(id, "\"]")).forEach(function (td) {
          td.style.height = "".concat(maxHeight, "px");
        });
      });
      console.log(itemIds);
    }
  }, {
    key: "changeCompareItem",
    value: function changeCompareItem() {
      if (!document.querySelector('.compare__page-right .compare__page-item')) return;
      var pinned = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.compare__page-right .compare__page-item.isPinned').clone();
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.compare__page-left').html(pinned);
      console.log('pinned', pinned);
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
      console.log('itemIds', itemIds);
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
        // document.querySelectorAll(`.compare__page-right [data-compare-item-key="${item.id}"] span`).forEach(td => {
        //     console.log()
        //     // if (count <= 1) {
        //     //     td.classList.add('isUnique');
        //     // }
        // });
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
          console.log(event.currentTarget);
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
          console.log(event.currentTarget);
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
      document.querySelectorAll('.elements-item--with-buttons').forEach(function (item) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(item).hover(function (event) {
          console.log('mouseover');
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.currentTarget).find('.elements-item__popover').show(100);
        }, function (event) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.currentTarget).find('.elements-item__popover').hide(100);
        });
      });
    }
  }, {
    key: "init",
    value: function init() {
      this.addClickHandler();
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
var Header = /*#__PURE__*/function () {
  function Header() {
    _classCallCheck(this, Header);
  }
  _createClass(Header, [{
    key: "openMenuHandler",
    value: function openMenuHandler() {
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
  }, {
    key: "calculateCatalogBounds",
    value: function calculateCatalogBounds() {
      var windowHeight = window.innerHeight;
      var windowWidth = window.innerWidth;
      var headerTopHeight = document.querySelector('.header-top').clientHeight;
      var headerBottomHeight = document.querySelector('.header-bottom').clientHeight;
      var headerBottomBounds = document.querySelector('.header-bottom').getBoundingClientRect();
      console.log("".concat(windowHeight, " - ").concat(headerTopHeight, " - ").concat(headerBottomHeight, " = ").concat(windowHeight - headerTopHeight - headerBottomHeight));
      console.log(headerBottomBounds);
      return {
        top: headerTopHeight + headerBottomHeight,
        left: headerBottomBounds.x,
        height: windowHeight - headerTopHeight - headerBottomHeight,
        right: headerBottomBounds.y + 273
      };
    }
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
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'air-datepicker'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dars-select-box__item-wrap').on('click', function () {
        var selectedItem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent();
        if (!selectedItem.hasClass('dars-select-box__item--parent')) {
          var text = selectedItem.find('.dars-select-box__item-title').text();
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dars-select__btn').text(text);
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('id') == "search") {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dars-select__btn').addClass('dars-select__btn--search');
          } else {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dars-select__btn').removeClass('dars-select__btn--search');
          }
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('input[name="promo-code-category"]').val(text);
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.create-promocode__body').removeClass('create-promocode__body--blocked');
        }
      });
    }
  }, {
    key: "initialiseDatepecker",
    value: function initialiseDatepecker() {
      var startDate = new Date();
      this.datepicker = new Object(function webpackMissingModule() { var e = new Error("Cannot find module 'air-datepicker'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this.datepickerClass, {
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
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.create-promocode-percent__input-range').on('input', function () {
    var range = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
    var discountToTheClient = Math.round(range.attr('max') - range.val());
    var partnerRemuneration = Math.round(range.val());
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.create-promocode-percent__input-first').val(discountToTheClient);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('input[name="discount-to-the-client"]').val(discountToTheClient);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.create-promocode-percent__input-last').val(partnerRemuneration);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('input[name="partner-remuneration"]').val(partnerRemuneration);
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.promo-code-generation__btn-submit').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.create-promocode-successfully').slideDown();
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.create-promocode-successfully__btn-close').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.create-promocode-successfully').slideUp();
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
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-open-description').removeClass('open');
    var popup = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.personal-account-promocode__popup-description');
    var text = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('popupDescription');
    var popupHeight = popup.text(text).outerHeight();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('open');
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

  /** Для теста. На бою нужно будет удалить */
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('input[name="promo-code-name"]').on('input', function () {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val() == 'TEST_IVM') {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).closest('.dars-control').addClass('dars-control--error');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).closest('.promo-code-generation__row').append("<div class=\"promo-code-generation__row-error\">\u0422\u0430\u043A\u043E\u0439 \u043F\u0440\u043E\u043C\u043E\u043A\u043E\u0434 \u0443\u0436\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F, \u043F\u0440\u0438\u0434\u0443\u043C\u0430\u0439\u0442\u0435 \u0434\u0440\u0443\u0433\u043E\u0439</div>");
    } else {
      var _$$closest$find;
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).closest('.dars-control').removeClass('dars-control--error');
      (_$$closest$find = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).closest('.promo-code-generation__row').find('.promo-code-generation__row-error')) === null || _$$closest$find === void 0 ? void 0 : _$$closest$find.hide();
    }
  });
  function generateRandomString(length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dars-control__btn--random').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('input[name="promo-code-name"]').val(generateRandomString(10));
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.promo-code-generation__btn-submit').on('click', function () {
    var _formData$4$value;
    var form = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).closest('form');
    var formData = form.serializeArray();
    var dataIdPromocode = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.personal-promocode-item').length + 1;
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = dd + '.' + mm + '.' + yyyy;
    var arDate = (_formData$4$value = formData[4].value) === null || _formData$4$value === void 0 ? void 0 : _formData$4$value.split(' до ');
    var dateFromTo = function dateFromTo() {
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
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("<li class=\"personal-promocode-item\" data-id-promocode=\"".concat(dataIdPromocode, "\" hidden>\n        <div class=\"personal-promocode-item__header\">\n            <span class=\"personal-promocode-item__name\" data-copy-text-id=\"promocode\">").concat(formData[3].value, "</span>\n            <div class=\"personal-promocode-item__header-controls\">\n                <button class=\"personal-promocode-item__btn personal-promocode-item__btn--copy\" data-copy-text-from=\"promocode\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" viewBox=\"0 0 12 12\" fill=\"none\">\n                        <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M3.60313 0.259416C3.42119 0.436684 3.43883 0.724412 3.64376 0.924198C3.79152 1.06806 4.2234 1.09186 6.69158 1.09186H9.56722L10.0983 1.64234L10.2079 9.25623L10.4603 9.29113C11.0284 9.36957 11.0294 9.36242 11.0294 5.31118C11.0294 1.59325 11.0266 1.54725 10.7771 1.08759C10.6047 0.769983 10.3739 0.545116 10.048 0.377132C9.58464 0.138391 9.48781 0.131348 6.65281 0.131348C4.5291 0.131348 3.69875 0.166246 3.60313 0.259416ZM2.26684 2.0702C1.82532 2.19144 1.2413 2.69784 1.06517 3.11214C0.982587 3.30638 0.954108 4.56561 0.975686 7.07362L1.00723 10.7504L1.27022 11.1097C1.77461 11.7987 2.10824 11.8659 5.03602 11.8686C7.87189 11.8712 8.09994 11.8333 8.64004 11.2704C8.80192 11.1018 8.9867 10.8286 9.05078 10.6634C9.12438 10.4736 9.16732 9.08643 9.16732 6.8971C9.16732 3.70681 9.15078 3.39976 8.95987 3.0353C8.44682 2.05568 8.07716 1.95376 5.05989 1.95995C3.73456 1.96273 2.47769 2.01225 2.26684 2.0702ZM8.18154 3.43007V6.92325C8.18154 10.3628 8.17792 10.4203 7.94342 10.6635C7.70738 10.9082 7.68142 10.9104 5.10447 10.9104C3.6741 10.9104 2.42402 10.8806 2.32654 10.8442C1.87154 10.6741 1.82872 10.3306 1.82872 6.85206V3.53007L2.46904 2.90617H7.64385L8.18154 3.43007Z\" fill=\"#515151\"></path>\n                      </svg>\n                </button>\n                <button class=\"js-open-description personal-promocode-item__btn personal-promocode-item__btn--comment\" data-popup-description=\"").concat(formData[5].value, "\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" viewBox=\"0 0 14 14\" fill=\"none\">\n                        <path d=\"M0.680211 3.43297V12.5957C0.680211 13.3265 1.54665 13.7109 2.08841 13.2205L3.98049 11.508C4.21292 11.2977 4.51523 11.1812 4.82873 11.1812H11.214C12.3775 11.1812 13.3208 10.2379 13.3208 9.0744V3.43297C13.3208 2.26944 12.3775 1.32621 11.214 1.32621H2.78697C1.62344 1.32621 0.680211 2.26943 0.680211 3.43297Z\" stroke=\"#404040\" stroke-width=\"0.842704\"></path>\n                        <path d=\"M4.89296 5.96087C4.89296 6.19357 4.70432 6.38222 4.47161 6.38222C4.2389 6.38222 4.05026 6.19357 4.05026 5.96087C4.05026 5.72816 4.2389 5.53952 4.47161 5.53952C4.70432 5.53952 4.89296 5.72816 4.89296 5.96087ZM7.84242 5.96087C7.84242 6.19357 7.65378 6.38222 7.42107 6.38222C7.18837 6.38222 6.99972 6.19357 6.99972 5.96087C6.99972 5.72816 7.18837 5.53952 7.42107 5.53952C7.65378 5.53952 7.84242 5.72816 7.84242 5.96087ZM10.7919 5.96087C10.7919 6.19357 10.6032 6.38222 10.3705 6.38222C10.1378 6.38222 9.94918 6.19357 9.94918 5.96087C9.94918 5.72816 10.1378 5.53952 10.3705 5.53952C10.6032 5.53952 10.7919 5.72816 10.7919 5.96087Z\" stroke=\"#404040\" stroke-width=\"0.842704\"></path>\n                      </svg>\n                </button>\n                <button class=\"personal-promocode-item__btn personal-promocode-item__btn--delete js-delete-promocode\" data-modal-toggle=\"deletePromocode\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"8\" height=\"8\" viewBox=\"0 0 8 8\" fill=\"none\">\n                        <path d=\"M1.3125 6.68698L3.9995 4M3.9995 4L6.68648 1.31299M3.9995 4L1.3125 1.31299M3.9995 4L6.68648 6.68698\" stroke=\"#515151\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n                      </svg>\n                </button>\n            </div>\n        </div>\n        <div class=\"personal-promocode-item__link\">\n            <a href=\"https://dars.ru/?utm-code=maslennikov\" class=\"personal-promocode-item__link-name\" data-copy-text-id=\"link\" target=\"_blank\">https://dars.ru/?utm-code=maslennikov</a>\n            <button class=\"personal-promocode-item__btn personal-promocode-item__btn--copy\" data-copy-text-from=\"link\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" viewBox=\"0 0 12 12\" fill=\"none\">\n                    <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M3.60313 0.259416C3.42119 0.436684 3.43883 0.724412 3.64376 0.924198C3.79152 1.06806 4.2234 1.09186 6.69158 1.09186H9.56722L10.0983 1.64234L10.2079 9.25623L10.4603 9.29113C11.0284 9.36957 11.0294 9.36242 11.0294 5.31118C11.0294 1.59325 11.0266 1.54725 10.7771 1.08759C10.6047 0.769983 10.3739 0.545116 10.048 0.377132C9.58464 0.138391 9.48781 0.131348 6.65281 0.131348C4.5291 0.131348 3.69875 0.166246 3.60313 0.259416ZM2.26684 2.0702C1.82532 2.19144 1.2413 2.69784 1.06517 3.11214C0.982587 3.30638 0.954108 4.56561 0.975686 7.07362L1.00723 10.7504L1.27022 11.1097C1.77461 11.7987 2.10824 11.8659 5.03602 11.8686C7.87189 11.8712 8.09994 11.8333 8.64004 11.2704C8.80192 11.1018 8.9867 10.8286 9.05078 10.6634C9.12438 10.4736 9.16732 9.08643 9.16732 6.8971C9.16732 3.70681 9.15078 3.39976 8.95987 3.0353C8.44682 2.05568 8.07716 1.95376 5.05989 1.95995C3.73456 1.96273 2.47769 2.01225 2.26684 2.0702ZM8.18154 3.43007V6.92325C8.18154 10.3628 8.17792 10.4203 7.94342 10.6635C7.70738 10.9082 7.68142 10.9104 5.10447 10.9104C3.6741 10.9104 2.42402 10.8806 2.32654 10.8442C1.87154 10.6741 1.82872 10.3306 1.82872 6.85206V3.53007L2.46904 2.90617H7.64385L8.18154 3.43007Z\" fill=\"#515151\"></path>\n                  </svg>\n            </button>\n        </div>\n        <div class=\"personal-promocode-item__body\">\n            <dl class=\"personal-promocode-item__dl\">\n                <div class=\"personal-promocode-item__dl-row\">\n                    <dt class=\"personal-promocode-item__dt\">\u0422\u043E\u0432\u0430\u0440, \u0430\u0440\u0442\u0438\u043A\u0443\u043B:</dt>\n                    <dd class=\"personal-promocode-item__dd\">").concat(formData[0].value, "</dd>\n                </div>\n                <div class=\"personal-promocode-item__dl-row\">\n                    <dt class=\"personal-promocode-item__dt\">\u0421\u043A\u0438\u0434\u043A\u0430 \u043A\u043B\u0438\u0435\u043D\u0442\u0443:</dt>\n                    <dd class=\"personal-promocode-item__dd\">\n                        <span class=\"personal-promocode-item__ellipse personal-promocode-item__ellipse--red\">-").concat(formData[1].value, "%</span>\n                    </dd>\n                </div>\n                <div class=\"personal-promocode-item__dl-row\">\n                    <dt class=\"personal-promocode-item__dt\">\u0412\u0430\u0448\u0435 \u0432\u043E\u0437\u043D\u0430\u0433\u0440\u0430\u0436\u0434\u0435\u043D\u0438\u0435:</dt>\n                    <dd class=\"personal-promocode-item__dd\">\n                        <span class=\"personal-promocode-item__ellipse personal-promocode-item__ellipse--green\">+").concat(formData[2].value, "%</span>\n                    </dd>\n                </div>\n                <div class=\"personal-promocode-item__dl-row\">\n                    <dt class=\"personal-promocode-item__dt\">\u0421\u0440\u043E\u043A \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F:</dt>\n                    <dd class=\"personal-promocode-item__dd\">\n                        <div class=\"personal-promocode-item__validity-period\">\n                            <span>").concat(dateFromTo(), "</span>\n                        </div>\n                    </dd>\n                </div>\n            </dl>\n        </div>\n        <div class=\"personal-promocode-item__footer\">\n            <span class=\"personal-promocode-item__date-creation\">").concat(today, "</span>\n            <span class=\"personal-promocode-item__status personal-promocode-item__status--consideration\">\u041D\u0430 \u0440\u0430\u0441\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u0438\u0438</span>\n        </div>\n    </li>")).prependTo('.personal-promocode__list').slideDown();
  });

  /** / Для теста. На бою нужно будет удалить */
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
    if ($(this).is(':checked')) {
      var donorValue = fromElem === null || fromElem === void 0 ? void 0 : fromElem.val();
      toElem === null || toElem === void 0 ? void 0 : toElem.val(donorValue).prop('disabled', true);
    } else {
      toElem === null || toElem === void 0 ? void 0 : toElem.prop('disabled', false);
    }
  });
  $('[name="legal-entity"]').each(function () {
    $(this).on('change', function () {
      toogleInputs($(this).val());
    });
  });
  toogleInputs($('[name="legal-entity"][checked]').val());
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

var PopularCategories = /*#__PURE__*/function () {
  function PopularCategories() {
    _classCallCheck(this, PopularCategories);
    this.slider = null;
  }
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
          console.log(tabButton.dataset.slideShow);
          document.querySelectorAll(".tabs__slider-item").forEach(function (slide) {
            if (slide.dataset.slideType == tabButton.dataset.slideShow) {
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
/* harmony import */ var _components_auth_auth__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! %components%/auth/auth */ "./src/blocks/components/auth/auth.js");
/* harmony import */ var _modules_cart_page_cart_page__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! %modules%/cart-page/cart-page */ "./src/blocks/modules/cart-page/cart-page.js");
/* harmony import */ var _modules_personal_account_personal_account__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! %modules%/personal-account/personal-account */ "./src/blocks/modules/personal-account/personal-account.js");
/* harmony import */ var _modules_personal_account_create_promocode_personal_account_create_promocode__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! %modules%/personal-account-create-promocode/personal-account-create-promocode */ "./src/blocks/modules/personal-account-create-promocode/personal-account-create-promocode.js");





















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
window.app.auth = new _components_auth_auth__WEBPACK_IMPORTED_MODULE_17__["default"]();
window.app.cartPage = new _modules_cart_page_cart_page__WEBPACK_IMPORTED_MODULE_18__["default"]();
window.app.personalAccount = new _modules_personal_account_personal_account__WEBPACK_IMPORTED_MODULE_19__["default"]();
window.app.personalAccountCreatePromocode = new _modules_personal_account_create_promocode_personal_account_create_promocode__WEBPACK_IMPORTED_MODULE_20__["default"]();
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
  window.app.auth.init();
  window.app.cartPage.init();
  window.app.personalAccount.init();
  window.app.personalAccountCreatePromocode.init();
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