/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/modules/banners/banner-big.js":
/*!**************************************************!*\
  !*** ./src/blocks/modules/banners/banner-big.js ***!
  \**************************************************/
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
var Banner = /*#__PURE__*/function () {
  function Banner() {
    _classCallCheck(this, Banner);
    this.slider = null;
  }
  _createClass(Banner, [{
    key: "initSlider",
    value: function initSlider() {
      if (!document.querySelector('.banner__big.swiper')) return;
      this.slider = new Swiper('.banner__big.swiper', {
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
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var BannerProduct = /*#__PURE__*/function () {
  function BannerProduct() {
    _classCallCheck(this, BannerProduct);
    this.slider = null;
  }
  _createClass(BannerProduct, [{
    key: "initSlider",
    value: function initSlider() {
      if (!document.querySelector('.banner__small-slider.swiper')) return;
      this.slider = new Swiper('.banner__small-slider.swiper', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 0,
        zoom: {
          maxRatio: 0
        },
        // If we need pagination
        pagination: {
          el: '.swiper-pagination'
        },
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
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
      this.slider = new Swiper('.brands__slider.swiper', {
        loop: true,
        slidesPerView: 7.5,
        spaceBetween: 25,
        zoom: {
          maxRatio: 0
        },
        // If we need pagination
        pagination: {
          el: '.swiper-pagination'
        },
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
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
    key: "init",
    value: function init() {}
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
      this.slider = new Swiper('.popular-categories__slider.swiper', {
        loop: true,
        slidesPerView: 5.5,
        spaceBetween: 25,
        zoom: {
          maxRatio: 0
        },
        // If we need pagination
        pagination: {
          el: '.swiper-pagination'
        },
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_popular_categories_popular_categories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/popular-categories/popular-categories */ "./src/blocks/modules/popular-categories/popular-categories.js");
/* harmony import */ var _modules_brands_brands__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/brands/brands */ "./src/blocks/modules/brands/brands.js");
/* harmony import */ var _modules_banners_banners__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/banners/banners */ "./src/blocks/modules/banners/banners.js");
/* harmony import */ var _modules_banners_banner_big__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/banners/banner-big */ "./src/blocks/modules/banners/banner-big.js");





window.app = {};
window.app.header = new _modules_header_header__WEBPACK_IMPORTED_MODULE_0__["default"]();
window.app.header.init();
window.app.popularCategories = new _modules_popular_categories_popular_categories__WEBPACK_IMPORTED_MODULE_1__["default"]();
window.app.popularCategories.init();
window.app.popularBrands = new _modules_brands_brands__WEBPACK_IMPORTED_MODULE_2__["default"]();
window.app.popularBrands.init();
window.app.bannerProduct = new _modules_banners_banners__WEBPACK_IMPORTED_MODULE_3__["default"]();
window.app.bannerProduct.init();
window.app.banner = new _modules_banners_banner_big__WEBPACK_IMPORTED_MODULE_4__["default"]();
window.app.banner.init();
})();

/******/ })()
;
//# sourceMappingURL=main.js.map