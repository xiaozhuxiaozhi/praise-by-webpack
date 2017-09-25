/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
let t = '';
class PraiseButton {
    constructor(num, element) {
        this.num = num;
        this.element = element;

    }

    clickAction() {
        this.element.click(() => {
            // 用setTimeout对点击事件稀释（或节流）
            if(t){
                clearTimeout(t);
            }
            t = setTimeout(()=> {
                if (this.num < 10) {
                    this.element.css('-webkit-filter', 'grayscale(0)');
                    $('#animation').addClass('num');
                    this.num = add(this.num);
                        setTimeout(function() {
                            $('#animation').removeClass('num');
                        }, 1000);
                } else {
                    this.element.css('-webkit-filter', 'grayscale(1)');
                    this.num = 0;
                }
                console.log('点赞次数：'+this.num);
            }, 800);
        })
    }
}

//用作测试
function add(i) {
    return i + 1;
}


class Thumb extends PraiseButton {
    constructor(num, element) {
        super(num, element);
    }
}
/* harmony default export */ __webpack_exports__["default"] = ({
    Thumb
});

// 实例化
// let run= new Thumb(0,$('#thumb'));
// run.clickAction();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(exports);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.index = mod.exports;
    }
})(this, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    var t = '';

    var PraiseButton = function () {
        function PraiseButton(num, element) {
            _classCallCheck(this, PraiseButton);

            this.num = num;
            this.element = element;
        }

        _createClass(PraiseButton, [{
            key: 'clickAction',
            value: function clickAction() {
                var _this = this;

                this.element.click(function () {
                    // 用setTimeout对点击事件稀释（或节流）
                    if (t) {
                        clearTimeout(t);
                    }
                    t = setTimeout(function () {
                        if (_this.num < 10) {
                            _this.element.css('-webkit-filter', 'grayscale(0)');
                            $('#animation').addClass('num');
                            _this.num = add(_this.num);
                            setTimeout(function () {
                                $('#animation').removeClass('num');
                            }, 1000);
                        } else {
                            _this.element.css('-webkit-filter', 'grayscale(1)');
                            _this.num = 0;
                        }
                        console.log('点赞次数：'+_this.num);
                    }, 800);
                });
            }
        }]);

        return PraiseButton;
    }();

    //用作测试
    function add(i) {
        return i + 1;
    }

    var Thumb = function (_PraiseButton) {
        _inherits(Thumb, _PraiseButton);

        function Thumb(num, element) {
            _classCallCheck(this, Thumb);

            return _possibleConstructorReturn(this, (Thumb.__proto__ || Object.getPrototypeOf(Thumb)).call(this, num, element));
        }

        return Thumb;
    }(PraiseButton);

    exports.default = {
        Thumb: Thumb

        // 实例化
        // let run= new Thumb(0,$('#thumb'));
        // run.clickAction();

    };
});


/***/ })
/******/ ]);