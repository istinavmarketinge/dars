/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
      }).mount();
    }
  }, {
    key: "init",
    value: function init() {
      this.initSlider();
    }
  }]);
  return PopularBrands;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopularBrands);
jQuery(document).ready(function () {
  $('.brands__button-categories').on('click', function () {
    $('.brands__categories-list').toggleClass('open');
  });
  //   $('.header-top__modal-close').on('click',function(){
  // 	$('.header-top__modal-city').removeClass('open');
  // });
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
    this.slider = null;
  }
  _createClass(CatalogMenu, [{
    key: "initSlider",
    value: function initSlider() {
      if (!document.querySelector('.catalog-menu__right-products-slider.swiper')) return;
      this.slider = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"]('.catalog-menu__right-products-slider.swiper', {
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
    }
  }, {
    key: "openMenu",
    value: function openMenu() {
      document.querySelectorAll(".catalog-menu__left-list li").forEach(function (menuItem) {
        menuItem.addEventListener("click", function (event) {
          console.log(menuItem);
          event.target.closest(".catalog-menu__left-list li").querySelector(".catalog-menu__right-container--mobile").classList.toggle('open');
        });
      });
    }
  }, {
    key: "init",
    value: function init() {
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
        document.querySelector('.catalog-menu__plate').style.width = "".concat(this.calculateCatalogBounds().left + 30, "px");
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