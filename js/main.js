/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var homepage = document.querySelector('.homepage');
var header = document.querySelector('.header');
var homePreview = document.querySelector('.home-preview');

if (homepage) {
  header.classList.add('header-homepage');
}

window.addEventListener('scroll', function () {
  var homePreviewHeight = homePreview.clientHeight;
  var scrolled = window.scrollY;

  if (scrolled > homePreviewHeight) {
    header.classList.remove('header-homepage');
  } else {
    header.classList.add('header-homepage');
  }
});

/***/ }),

/***/ "./src/blocks/modules/home-preview/home-preview.js":
/*!*********************************************************!*\
  !*** ./src/blocks/modules/home-preview/home-preview.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/mobile-menu/mobile-menu.js":
/*!*******************************************************!*\
  !*** ./src/blocks/modules/mobile-menu/mobile-menu.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var mobileMenu = document.querySelector('.mobile-menu');
var btnOpen = document.querySelector('.header__menu-btn');
var btnCLose = document.querySelector('.mobile-menu__close');
var body = document.querySelector('body');
var lockPadding = document.querySelector('.header');
var lockPaddingValue = window.innerWidth - body.offsetWidth + 'px';
var timeout = 400;

var bodyLock = function bodyLock() {
  lockPadding.style.paddingRight = lockPaddingValue;
  body.style.paddingRight = lockPaddingValue;
  body.classList.add('lock');
};

var bodyUnlock = function bodyUnlock() {
  setTimeout(function () {
    lockPadding.style.paddingRight = '0px';
    body.style.paddingRight = '0px';
    body.classList.remove('lock');
  }, timeout);
};

btnOpen.addEventListener('click', function (e) {
  e.preventDefault();
  mobileMenu.classList.add('open');
  bodyLock();
});
btnCLose.addEventListener('click', function (e) {
  e.preventDefault();
  mobileMenu.classList.remove('open');
  bodyUnlock();
});
mobileMenu.addEventListener('click', function (e) {
  if (!e.target.closest('.mobile-menu__panel')) {
    mobileMenu.classList.remove('open');
    bodyUnlock();
  }
});
document.addEventListener('keydown', function (e) {
  if (e.which === 27) {
    mobileMenu.classList.remove('open');
    bodyUnlock();
  }
});

/***/ }),

/***/ "./src/blocks/modules/production-charts/production-chart-1.js":
/*!********************************************************************!*\
  !*** ./src/blocks/modules/production-charts/production-chart-1.js ***!
  \********************************************************************/
/*! exports provided: options1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options1", function() { return options1; });
var options1 = {
  chart: {
    events: {
      mouseMove: function mouseMove(event, chartContext, config) {
        var dataPointIndex = config.dataPointIndex;
        var dataSeries = config.globals.series.flat();
        var currentDataSeries = dataSeries.find(function (el) {
          return dataSeries.indexOf(el) === dataPointIndex;
        });
        var currentPercent = dataPercent1.find(function (el) {
          return dataPercent1.indexOf(el) === dataPointIndex;
        });

        if (currentDataSeries) {
          units1.textContent = currentDataSeries.toLocaleString('ru-RU');
          percent1.textContent = currentPercent;
        } else {
          units1.textContent = dataSeries1[dataSeries1.length - 1].toLocaleString('ru-RU');
          percent1.textContent = dataPercent1[dataPercent1.length - 1];
        }
      }
    }
  },
  series: [{
    name: '',
    data: [17000, 34000, 53000, 86000],
    percent: [41, 56, 64, 74]
  }]
};
var dataSeries1 = options1.series.map(function (el) {
  return el.data;
}).flat(); // получили копию массива data

var dataPercent1 = options1.series.map(function (el) {
  return el.percent;
}).flat(); // получили массив процентов

var units1 = document.getElementById('units1'); // едениц произведено

var percent1 = document.getElementById('percent1'); // проценты

units1.textContent = dataSeries1[dataSeries1.length - 1].toLocaleString('ru-RU'); // показываем последнее значение по умолчанию

percent1.textContent = dataPercent1[dataPercent1.length - 1]; // показываем последнее значение по умолчанию

/***/ }),

/***/ "./src/blocks/modules/production-charts/production-chart-2.js":
/*!********************************************************************!*\
  !*** ./src/blocks/modules/production-charts/production-chart-2.js ***!
  \********************************************************************/
/*! exports provided: options2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options2", function() { return options2; });
var options2 = {
  chart: {
    events: {
      mouseMove: function mouseMove(event, chartContext, config) {
        var dataPointIndex = config.dataPointIndex;
        var dataSeries = config.globals.series.flat();
        var currentDataSeries = dataSeries.find(function (el) {
          return dataSeries.indexOf(el) === dataPointIndex;
        });
        var currentPercent = dataPercent2.find(function (el) {
          return dataPercent2.indexOf(el) === dataPointIndex;
        });

        if (currentDataSeries) {
          units2.textContent = currentDataSeries.toLocaleString('ru-RU');
          percent2.textContent = currentPercent;
        } else {
          units2.textContent = dataSeries2[dataSeries2.length - 1].toLocaleString('ru-RU');
          percent2.textContent = dataPercent2[dataPercent2.length - 1];
        }
      }
    }
  },
  series: [{
    name: '',
    data: [29000, 18000, 38000, 47000],
    percent: [44, 25, 108, 194]
  }]
};
var dataSeries2 = options2.series.map(function (el) {
  return el.data;
}).flat();
var dataPercent2 = options2.series.map(function (el) {
  return el.percent;
}).flat();
var units2 = document.getElementById('units2');
var percent2 = document.getElementById('percent2');
units2.textContent = dataSeries2[dataSeries2.length - 1].toLocaleString('ru-RU');
percent2.textContent = dataPercent2[dataPercent2.length - 1];

/***/ }),

/***/ "./src/blocks/modules/production-charts/production-chart-3.js":
/*!********************************************************************!*\
  !*** ./src/blocks/modules/production-charts/production-chart-3.js ***!
  \********************************************************************/
/*! exports provided: options3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options3", function() { return options3; });
var options3 = {
  chart: {
    events: {
      mouseMove: function mouseMove(event, chartContext, config) {
        var dataPointIndex = config.dataPointIndex;
        var dataSeries = config.globals.series.flat();
        var currentDataSeries = dataSeries.find(function (el) {
          return dataSeries.indexOf(el) === dataPointIndex;
        });
        var currentPercent = dataPercent3.find(function (el) {
          return dataPercent3.indexOf(el) === dataPointIndex;
        });

        if (currentDataSeries) {
          units3.textContent = currentDataSeries.toLocaleString('ru-RU');
          percent3.textContent = currentPercent;
        } else {
          units3.textContent = dataSeries3[dataSeries3.length - 1].toLocaleString('ru-RU');
          percent3.textContent = dataPercent3[dataPercent3.length - 1];
        }
      }
    }
  },
  series: [{
    name: '',
    data: [22000, 35000, 38000, 39000],
    percent: [4, 17, 21, 23]
  }]
};
var dataSeries3 = options3.series.map(function (el) {
  return el.data;
}).flat();
var dataPercent3 = options3.series.map(function (el) {
  return el.percent;
}).flat();
var units3 = document.getElementById('units3');
var percent3 = document.getElementById('percent3');
units3.textContent = dataSeries3[dataSeries3.length - 1].toLocaleString('ru-RU');
percent3.textContent = dataPercent3[dataPercent3.length - 1];

/***/ }),

/***/ "./src/blocks/modules/production-charts/production-charts.js":
/*!*******************************************************************!*\
  !*** ./src/blocks/modules/production-charts/production-charts.js ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var apexcharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apexcharts */ "./node_modules/apexcharts/dist/apexcharts.esm.js");
/* harmony import */ var _production_global_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./production-global-charts */ "./src/blocks/modules/production-charts/production-global-charts.js");
/* harmony import */ var _production_chart_1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./production-chart-1 */ "./src/blocks/modules/production-charts/production-chart-1.js");
/* harmony import */ var _production_chart_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./production-chart-2 */ "./src/blocks/modules/production-charts/production-chart-2.js");
/* harmony import */ var _production_chart_3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./production-chart-3 */ "./src/blocks/modules/production-charts/production-chart-3.js");





var chart1 = new apexcharts__WEBPACK_IMPORTED_MODULE_0__["default"](document.querySelector('#chart-1'), _production_chart_1__WEBPACK_IMPORTED_MODULE_2__["options1"]);
var chart2 = new apexcharts__WEBPACK_IMPORTED_MODULE_0__["default"](document.querySelector('#chart-2'), _production_chart_2__WEBPACK_IMPORTED_MODULE_3__["options2"]);
var chart3 = new apexcharts__WEBPACK_IMPORTED_MODULE_0__["default"](document.querySelector('#chart-3'), _production_chart_3__WEBPACK_IMPORTED_MODULE_4__["options3"]);
chart1.render();
chart2.render();
chart3.render();

/***/ }),

/***/ "./src/blocks/modules/production-charts/production-global-charts.js":
/*!**************************************************************************!*\
  !*** ./src/blocks/modules/production-charts/production-global-charts.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (window.Apex = {
  chart: {
    type: 'line',
    height: 96,
    offsetX: 3,
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    }
  },
  stroke: {
    width: 2,
    colors: ['#222730']
  },
  markers: {
    size: 4,
    colors: ['#071FEF']
  },
  xaxis: {
    lines: {
      show: false
    },
    categories: [2017, 2018, 2019, 2020],
    tooltip: {
      enabled: false
    },
    labels: {
      show: false
    },
    axisBorder: {
      show: true,
      color: '#898989'
    }
  },
  yaxis: {
    labels: {
      show: false
    }
  },
  grid: {
    xaxis: {
      lines: {
        show: false
      }
    },
    yaxis: {
      lines: {
        show: false
      }
    }
  },
  tooltip: {
    followCursor: false,
    theme: false,
    style: {
      fontSize: '15px',
      fontFamily: 'PT Root UI, sans-serif'
    },
    marker: {
      show: false
    }
  }
});

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_mobile_menu_mobile_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/mobile-menu/mobile-menu */ "./src/blocks/modules/mobile-menu/mobile-menu.js");
/* harmony import */ var _modules_mobile_menu_mobile_menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_mobile_menu_mobile_menu__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_home_preview_home_preview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/home-preview/home-preview */ "./src/blocks/modules/home-preview/home-preview.js");
/* harmony import */ var _modules_home_preview_home_preview__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_home_preview_home_preview__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_production_charts_production_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/production-charts/production-charts */ "./src/blocks/modules/production-charts/production-charts.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_4__);






/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map