/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
    this.initialSearchWidth = document.querySelector('.header__search').offsetWidth;
    this.initialMenuhWidth = document.querySelector('.header__middle').offsetWidth;
    this.initialLogoWidth = document.querySelector('.header__left').offsetWidth;
    this.initialRightWidth = document.querySelector('.header__right').offsetWidth;
    this.initialCenterWidth = document.querySelector('.header__in').offsetWidth;
    this.space = (this.initialCenterWidth - this.initialLogoWidth - this.initialRightWidth - this.initialMenuhWidth) / 2;
  }
  _createClass(Header, [{
    key: "toggleRegion",
    value: function toggleRegion() {
      if (!document.querySelector('.header__region-dropdown .active')) return;
      document.querySelector('.header__region-dropdown .active').addEventListener('click', function (event) {
        console.log(1231212123123123);
        event.target.closest('.header__region-dropdown').classList.toggle('isActive');
      });
    }
  }, {
    key: "closeRegion",
    value: function closeRegion() {
      document.addEventListener('click', function (event) {
        if (event.target.closest('.header__region-dropdown')) return;
        document.querySelector('.header__region-dropdown').classList.remove('isActive');
      });
    }
  }, {
    key: "toggleBurger",
    value: function toggleBurger() {
      if (!document.querySelector('.header__burger_opener')) return;
      document.querySelector('.header__burger_opener').addEventListener('click', function () {
        document.querySelector('.header__burger').classList.toggle('isOpened');
      });
    }
  }, {
    key: "toggleFocus",
    value: function toggleFocus() {
      var _this = this;
      if (!document.querySelector('.header__search input')) return;
      document.querySelector('.header__search input').addEventListener('focus', function (event) {
        event.target.closest('.header__search').classList.add('isOpened');
        document.querySelector('.header__search').style.marginLeft = (_this.initialMenuhWidth + _this.space) * -1 + 'px';
        document.querySelector('.header__search').style.width = _this.initialMenuhWidth + _this.space + _this.initialSearchWidth + 'px';
      });
      console.log((this.initialCenterWidth - this.initialLogoWidth - this.initialRightWidth - this.initialMenuhWidth) / 2);
    }
  }, {
    key: "toggleBlur",
    value: function toggleBlur() {
      var _this2 = this;
      if (!document.querySelector('.header__search input')) return;
      document.querySelector('.header__search input').addEventListener('blur', function (event) {
        event.target.closest('.header__search').classList.remove('isOpened');
        document.querySelector('.header__search').style.marginLeft = 0 + 'px';
        document.querySelector('.header__search').style.width = _this2.initialSearchWidth + 'px';
      });
    }
  }, {
    key: "onWindowResize",
    value: function onWindowResize() {
      var _this3 = this;
      window.addEventListener('resize', function () {
        _this3.initialSearchWidth = document.querySelector('.header__search').offsetWidth;
        _this3.initialMenuhWidth = document.querySelector('.header__middle').offsetWidth;
        _this3.initialLogoWidth = document.querySelector('.header__left').offsetWidth;
        _this3.initialRightWidth = document.querySelector('.header__right').offsetWidth;
        _this3.initialCenterWidth = document.querySelector('.header__in').offsetWidth;
        _this3.space = (_this3.initialCenterWidth - _this3.initialLogoWidth - _this3.initialRightWidth - _this3.initialMenuhWidth) / 2;
      });
    }
  }, {
    key: "init",
    value: function init() {
      this.toggleRegion();
      this.closeRegion();
      this.toggleBurger();
      this.toggleFocus();
      this.toggleBlur();
      this.onWindowResize();
    }
  }]);
  return Header;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

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

window.app = {};
window.app.header = new _modules_header_header__WEBPACK_IMPORTED_MODULE_0__["default"]();
window.app.header.init();
})();

/******/ })()
;
//# sourceMappingURL=main.js.map