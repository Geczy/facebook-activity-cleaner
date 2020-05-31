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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/stable/instance/concat */ \"./node_modules/core-js-pure/stable/instance/concat.js\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/entries.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/entries.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/stable/instance/entries */ \"./node_modules/core-js-pure/stable/instance/entries.js\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/core-js-stable/instance/entries.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/stable/instance/find */ \"./node_modules/core-js-pure/stable/instance/find.js\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/stable/instance/for-each */ \"./node_modules/core-js-pure/stable/instance/for-each.js\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/keys.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/keys.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/stable/instance/keys */ \"./node_modules/core-js-pure/stable/instance/keys.js\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/core-js-stable/instance/keys.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js-stable/json/stringify.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/json/stringify.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/stable/json/stringify */ \"./node_modules/core-js-pure/stable/json/stringify.js\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/core-js-stable/json/stringify.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js-stable/map.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/map.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/stable/map */ \"./node_modules/core-js-pure/stable/map/index.js\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/core-js-stable/map.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/assign.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/object/assign.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/stable/object/assign */ \"./node_modules/core-js-pure/stable/object/assign.js\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/core-js-stable/object/assign.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/stable/object/define-property */ \"./node_modules/core-js-pure/stable/object/define-property.js\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/keys.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/object/keys.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/stable/object/keys */ \"./node_modules/core-js-pure/stable/object/keys.js\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/core-js-stable/object/keys.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js-stable/set.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/set.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/stable/set */ \"./node_modules/core-js-pure/stable/set/index.js\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/core-js-stable/set.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js/array/from.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js/array/from.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/features/array/from */ \"./node_modules/core-js-pure/features/array/from.js\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/core-js/array/from.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/features/array/is-array */ \"./node_modules/core-js-pure/features/array/is-array.js\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/core-js/array/is-array.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js/get-iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js/get-iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/features/get-iterator */ \"./node_modules/core-js-pure/features/get-iterator.js\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/core-js/get-iterator.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js/instance/slice.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js/instance/slice.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/features/instance/slice */ \"./node_modules/core-js-pure/features/instance/slice.js\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/core-js/instance/slice.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js/is-iterable.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js/is-iterable.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/features/is-iterable */ \"./node_modules/core-js-pure/features/is-iterable.js\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/core-js/is-iterable.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/features/object/define-property */ \"./node_modules/core-js-pure/features/object/define-property.js\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/core-js/object/define-property.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/features/symbol */ \"./node_modules/core-js-pure/features/symbol/index.js\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/core-js/symbol.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/helpers/arrayLikeToArray.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/helpers/arrayLikeToArray.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _arrayLikeToArray(arr, len) {\n  if (len == null || len > arr.length) len = arr.length;\n\n  for (var i = 0, arr2 = new Array(len); i < len; i++) {\n    arr2[i] = arr[i];\n  }\n\n  return arr2;\n}\n\nmodule.exports = _arrayLikeToArray;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/helpers/arrayLikeToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/helpers/arrayWithHoles.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/helpers/arrayWithHoles.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _Array$isArray = __webpack_require__(/*! ../core-js/array/is-array */ \"./node_modules/@babel/runtime-corejs3/core-js/array/is-array.js\");\n\nfunction _arrayWithHoles(arr) {\n  if (_Array$isArray(arr)) return arr;\n}\n\nmodule.exports = _arrayWithHoles;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/helpers/arrayWithHoles.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/helpers/arrayWithoutHoles.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/helpers/arrayWithoutHoles.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _Array$isArray = __webpack_require__(/*! ../core-js/array/is-array */ \"./node_modules/@babel/runtime-corejs3/core-js/array/is-array.js\");\n\nvar arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ \"./node_modules/@babel/runtime-corejs3/helpers/arrayLikeToArray.js\");\n\nfunction _arrayWithoutHoles(arr) {\n  if (_Array$isArray(arr)) return arrayLikeToArray(arr);\n}\n\nmodule.exports = _arrayWithoutHoles;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/helpers/arrayWithoutHoles.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/helpers/defineProperty.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/helpers/defineProperty.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js/object/define-property.js\");\n\nfunction _defineProperty(obj, key, value) {\n  if (key in obj) {\n    _Object$defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\nmodule.exports = _defineProperty;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/helpers/defineProperty.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : {\n    \"default\": obj\n  };\n}\n\nmodule.exports = _interopRequireDefault;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/helpers/interopRequireDefault.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/helpers/iterableToArray.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/helpers/iterableToArray.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _Array$from = __webpack_require__(/*! ../core-js/array/from */ \"./node_modules/@babel/runtime-corejs3/core-js/array/from.js\");\n\nvar _isIterable = __webpack_require__(/*! ../core-js/is-iterable */ \"./node_modules/@babel/runtime-corejs3/core-js/is-iterable.js\");\n\nvar _Symbol = __webpack_require__(/*! ../core-js/symbol */ \"./node_modules/@babel/runtime-corejs3/core-js/symbol.js\");\n\nfunction _iterableToArray(iter) {\n  if (typeof _Symbol !== \"undefined\" && _isIterable(Object(iter))) return _Array$from(iter);\n}\n\nmodule.exports = _iterableToArray;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/helpers/iterableToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/helpers/iterableToArrayLimit.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/helpers/iterableToArrayLimit.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _getIterator = __webpack_require__(/*! ../core-js/get-iterator */ \"./node_modules/@babel/runtime-corejs3/core-js/get-iterator.js\");\n\nvar _isIterable = __webpack_require__(/*! ../core-js/is-iterable */ \"./node_modules/@babel/runtime-corejs3/core-js/is-iterable.js\");\n\nvar _Symbol = __webpack_require__(/*! ../core-js/symbol */ \"./node_modules/@babel/runtime-corejs3/core-js/symbol.js\");\n\nfunction _iterableToArrayLimit(arr, i) {\n  if (typeof _Symbol === \"undefined\" || !_isIterable(Object(arr))) return;\n  var _arr = [];\n  var _n = true;\n  var _d = false;\n  var _e = undefined;\n\n  try {\n    for (var _i = _getIterator(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {\n      _arr.push(_s.value);\n\n      if (i && _arr.length === i) break;\n    }\n  } catch (err) {\n    _d = true;\n    _e = err;\n  } finally {\n    try {\n      if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n    } finally {\n      if (_d) throw _e;\n    }\n  }\n\n  return _arr;\n}\n\nmodule.exports = _iterableToArrayLimit;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/helpers/iterableToArrayLimit.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/helpers/nonIterableRest.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/helpers/nonIterableRest.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _nonIterableRest() {\n  throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\n\nmodule.exports = _nonIterableRest;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/helpers/nonIterableRest.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/helpers/nonIterableSpread.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/helpers/nonIterableSpread.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _nonIterableSpread() {\n  throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\n\nmodule.exports = _nonIterableSpread;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/helpers/nonIterableSpread.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/helpers/slicedToArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/helpers/slicedToArray.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ \"./node_modules/@babel/runtime-corejs3/helpers/arrayWithHoles.js\");\n\nvar iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ \"./node_modules/@babel/runtime-corejs3/helpers/iterableToArrayLimit.js\");\n\nvar unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ \"./node_modules/@babel/runtime-corejs3/helpers/unsupportedIterableToArray.js\");\n\nvar nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ \"./node_modules/@babel/runtime-corejs3/helpers/nonIterableRest.js\");\n\nfunction _slicedToArray(arr, i) {\n  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();\n}\n\nmodule.exports = _slicedToArray;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/helpers/slicedToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/helpers/toConsumableArray.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/helpers/toConsumableArray.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ \"./node_modules/@babel/runtime-corejs3/helpers/arrayWithoutHoles.js\");\n\nvar iterableToArray = __webpack_require__(/*! ./iterableToArray */ \"./node_modules/@babel/runtime-corejs3/helpers/iterableToArray.js\");\n\nvar unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ \"./node_modules/@babel/runtime-corejs3/helpers/unsupportedIterableToArray.js\");\n\nvar nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ \"./node_modules/@babel/runtime-corejs3/helpers/nonIterableSpread.js\");\n\nfunction _toConsumableArray(arr) {\n  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();\n}\n\nmodule.exports = _toConsumableArray;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/helpers/toConsumableArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/helpers/unsupportedIterableToArray.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/helpers/unsupportedIterableToArray.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _Array$from = __webpack_require__(/*! ../core-js/array/from */ \"./node_modules/@babel/runtime-corejs3/core-js/array/from.js\");\n\nvar _sliceInstanceProperty = __webpack_require__(/*! ../core-js/instance/slice */ \"./node_modules/@babel/runtime-corejs3/core-js/instance/slice.js\");\n\nvar arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ \"./node_modules/@babel/runtime-corejs3/helpers/arrayLikeToArray.js\");\n\nfunction _unsupportedIterableToArray(o, minLen) {\n  var _context;\n\n  if (!o) return;\n  if (typeof o === \"string\") return arrayLikeToArray(o, minLen);\n\n  var n = _sliceInstanceProperty(_context = Object.prototype.toString.call(o)).call(_context, 8, -1);\n\n  if (n === \"Object\" && o.constructor) n = o.constructor.name;\n  if (n === \"Map\" || n === \"Set\") return _Array$from(o);\n  if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);\n}\n\nmodule.exports = _unsupportedIterableToArray;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/helpers/unsupportedIterableToArray.js?");

/***/ }),

/***/ "./node_modules/@testing-library/dom/dist/@testing-library/dom.esm.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@testing-library/dom/dist/@testing-library/dom.esm.js ***!
  \****************************************************************************/
/*! exports provided: buildQueries, configure, createEvent, findAllByAltText, findAllByDisplayValue, findAllByLabelText, findAllByPlaceholderText, findAllByRole, findAllByTestId, findAllByText, findAllByTitle, findByAltText, findByDisplayValue, findByLabelText, findByPlaceholderText, findByRole, findByTestId, findByText, findByTitle, fireEvent, getAllByAltText, getAllByDisplayValue, getAllByLabelText, getAllByPlaceholderText, getAllByRole, getAllByTestId, getAllByText, getAllByTitle, getByAltText, getByDisplayValue, getByLabelText, getByPlaceholderText, getByRole, getByTestId, getByText, getByTitle, getDefaultNormalizer, getElementError, getMultipleElementsFoundError, getNodeText, getQueriesForElement, getRoles, getSuggestedQuery, isInaccessible, logDOM, logRoles, makeFindQuery, makeGetAllQuery, makeSingleQuery, prettyDOM, queries, queryAllByAltText, queryAllByAttribute, queryAllByDisplayValue, queryAllByLabelText, queryAllByPlaceholderText, queryAllByRole, queryAllByTestId, queryAllByText, queryAllByTitle, queryByAltText, queryByAttribute, queryByDisplayValue, queryByLabelText, queryByPlaceholderText, queryByRole, queryByTestId, queryByText, queryByTitle, queryHelpers, screen, wait, waitFor, waitForDomChange, waitForElement, waitForElementToBeRemoved, within, wrapAllByQueryWithSuggestion, wrapSingleQueryWithSuggestion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(global, process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buildQueries\", function() { return buildQueries; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"configure\", function() { return configure; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createEvent\", function() { return createEvent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"findAllByAltText\", function() { return findAllByAltText; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"findAllByDisplayValue\", function() { return findAllByDisplayValue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"findAllByLabelText\", function() { return findAllByLabelText; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"findAllByPlaceholderText\", function() { return findAllByPlaceholderText; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"findAllByRole\", function() { return findAllByRole; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"findAllByTestId\", function() { return findAllByTestId; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"findAllByText\", function() { return findAllByText; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"findAllByTitle\", function() { return findAllByTitle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"findByAltText\", function() { return findByAltText; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"findByDisplayValue\", function() { return findByDisplayValue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"findByLabelText\", function() { return findByLabelText; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"findByPlaceholderText\", function() { return findByPlaceholderText; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"findByRole\", function() { return findByRole; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"findByTestId\", function() { return findByTestId; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"findByText\", function() { return findByText; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"findByTitle\", function() { return findByTitle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fireEvent\", function() { return fireEvent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllByAltText\", function() { return getAllByAltText; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllByDisplayValue\", function() { return getAllByDisplayValue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllByLabelText\", function() { return getAllByLabelTextWithSuggestions; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllByPlaceholderText\", function() { return getAllByPlaceholderText; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllByRole\", function() { return getAllByRole; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllByTestId\", function() { return getAllByTestId; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllByText\", function() { return getAllByText; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllByTitle\", function() { return getAllByTitle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getByAltText\", function() { return getByAltText; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getByDisplayValue\", function() { return getByDisplayValue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getByLabelText\", function() { return getByLabelTextWithSuggestions; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getByPlaceholderText\", function() { return getByPlaceholderText; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getByRole\", function() { return getByRole; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getByTestId\", function() { return getByTestId; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getByText\", function() { return getByText; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getByTitle\", function() { return getByTitle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getDefaultNormalizer\", function() { return getDefaultNormalizer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getElementError\", function() { return getElementError; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMultipleElementsFoundError\", function() { return getMultipleElementsFoundError; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getNodeText\", function() { return getNodeText; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getQueriesForElement\", function() { return getQueriesForElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRoles\", function() { return getRoles; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getSuggestedQuery\", function() { return getSuggestedQuery; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isInaccessible\", function() { return isInaccessible; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logDOM\", function() { return logDOM; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logRoles\", function() { return logRoles; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"makeFindQuery\", function() { return makeFindQuery; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"makeGetAllQuery\", function() { return makeGetAllQuery; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"makeSingleQuery\", function() { return makeSingleQuery; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"prettyDOM\", function() { return prettyDOM; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"queries\", function() { return queries; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"queryAllByAltText\", function() { return queryAllByAltTextWithSuggestions; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"queryAllByAttribute\", function() { return queryAllByAttribute; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"queryAllByDisplayValue\", function() { return queryAllByDisplayValueWithSuggestions; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"queryAllByLabelText\", function() { return queryAllByLabelTextWithSuggestions; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"queryAllByPlaceholderText\", function() { return queryAllByPlaceholderTextWithSuggestions; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"queryAllByRole\", function() { return queryAllByRoleWithSuggestions; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"queryAllByTestId\", function() { return queryAllByTestIdWithSuggestions; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"queryAllByText\", function() { return queryAllByTextWithSuggestions; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"queryAllByTitle\", function() { return queryAllByTitleWithSuggestions; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"queryByAltText\", function() { return queryByAltText; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"queryByAttribute\", function() { return queryByAttribute; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"queryByDisplayValue\", function() { return queryByDisplayValue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"queryByLabelText\", function() { return queryByLabelText; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"queryByPlaceholderText\", function() { return queryByPlaceholderText; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"queryByRole\", function() { return queryByRole; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"queryByTestId\", function() { return queryByTestId; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"queryByText\", function() { return queryByText; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"queryByTitle\", function() { return queryByTitle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"queryHelpers\", function() { return queryHelpers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"screen\", function() { return screen; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"wait\", function() { return wait; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"waitFor\", function() { return waitForWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"waitForDomChange\", function() { return waitForDomChangeWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"waitForElement\", function() { return waitForElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"waitForElementToBeRemoved\", function() { return waitForElementToBeRemoved; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"within\", function() { return getQueriesForElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"wrapAllByQueryWithSuggestion\", function() { return wrapAllByQueryWithSuggestion; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"wrapSingleQueryWithSuggestion\", function() { return wrapSingleQueryWithSuggestion; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@testing-library/dom/node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var pretty_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pretty-format */ \"./node_modules/pretty-format/build-es5/index.js\");\n/* harmony import */ var pretty_format__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pretty_format__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var dom_accessibility_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dom-accessibility-api */ \"./node_modules/dom-accessibility-api/dist/index.mjs\");\n/* harmony import */ var aria_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aria-query */ \"./node_modules/aria-query/lib/index.js\");\n/* harmony import */ var aria_query__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(aria_query__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@testing-library/dom/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@testing-library/dom/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ \"./node_modules/@testing-library/dom/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js\");\n\n\n\n\n\n\n\n\nvar globalObj = typeof window === 'undefined' ? global : window; // Currently this fn only supports jest timers, but it could support other test runners in the future.\n\nfunction runWithRealTimers(callback) {\n  var usingJestFakeTimers = globalObj.setTimeout && globalObj.setTimeout._isMockFunction && typeof jest !== 'undefined';\n\n  if (usingJestFakeTimers) {\n    jest.useRealTimers();\n  }\n\n  var callbackReturnValue = callback();\n\n  if (usingJestFakeTimers) {\n    jest.useFakeTimers();\n  }\n\n  return callbackReturnValue;\n} // we only run our tests in node, and setImmediate is supported in node.\n// istanbul ignore next\n\n\nfunction setImmediatePolyfill(fn) {\n  return globalObj.setTimeout(fn, 0);\n}\n\nfunction getTimeFunctions() {\n  // istanbul ignore next\n  return {\n    clearTimeoutFn: globalObj.clearTimeout,\n    setImmediateFn: globalObj.setImmediate || setImmediatePolyfill,\n    setTimeoutFn: globalObj.setTimeout\n  };\n}\n\nvar _runWithRealTimers = runWithRealTimers(getTimeFunctions),\n    clearTimeoutFn = _runWithRealTimers.clearTimeoutFn,\n    setImmediateFn = _runWithRealTimers.setImmediateFn,\n    setTimeoutFn = _runWithRealTimers.setTimeoutFn;\n\nfunction getDocument() {\n  /* istanbul ignore if */\n  if (typeof window === 'undefined') {\n    throw new Error('Could not find default container');\n  }\n\n  return window.document;\n}\n\nfunction getWindowFromNode(node) {\n  // istanbul ignore next I'm not sure what could cause the final else so we'll leave it uncovered.\n  if (node.defaultView) {\n    // node is document\n    return node.defaultView;\n  } else if (node.ownerDocument && node.ownerDocument.defaultView) {\n    // node is a DOM node\n    return node.ownerDocument.defaultView;\n  } else if (node.window) {\n    // node is window\n    return node.window;\n  } else {\n    // no idea...\n    throw new Error(\"Unable to find the \\\"window\\\" object for the given node. Please file an issue with the code that's causing you to see this error: https://github.com/testing-library/dom-testing-library/issues/new\");\n  }\n}\n\nfunction inCypress(dom) {\n  var window = dom.ownerDocument && dom.ownerDocument.defaultView || undefined;\n  return typeof global !== 'undefined' && global.Cypress || typeof window !== 'undefined' && window.Cypress;\n}\n\nvar inNode = function () {\n  return typeof process !== 'undefined' && process.versions !== undefined && process.versions.node !== undefined;\n};\n\nvar getMaxLength = function (dom) {\n  return inCypress(dom) ? 0 : typeof process !== 'undefined' && process.env.DEBUG_PRINT_LIMIT || 7000;\n};\n\nvar _prettyFormat$plugins = pretty_format__WEBPACK_IMPORTED_MODULE_1___default.a.plugins,\n    DOMElement = _prettyFormat$plugins.DOMElement,\n    DOMCollection = _prettyFormat$plugins.DOMCollection;\n\nfunction prettyDOM(dom, maxLength, options) {\n  if (!dom) {\n    dom = getDocument().body;\n  }\n\n  if (typeof maxLength !== 'number') {\n    maxLength = getMaxLength(dom);\n  }\n\n  if (maxLength === 0) {\n    return '';\n  }\n\n  if (dom.documentElement) {\n    dom = dom.documentElement;\n  }\n\n  var domTypeName = typeof dom;\n\n  if (domTypeName === 'object') {\n    domTypeName = dom.constructor.name;\n  } else {\n    // To don't fall with `in` operator\n    dom = {};\n  }\n\n  if (!('outerHTML' in dom)) {\n    throw new TypeError(\"Expected an element or document but got \" + domTypeName);\n  }\n\n  var debugContent = pretty_format__WEBPACK_IMPORTED_MODULE_1___default()(dom, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    plugins: [DOMElement, DOMCollection],\n    printFunctionName: false,\n    highlight: inNode()\n  }, options));\n  return maxLength !== undefined && dom.outerHTML.length > maxLength ? debugContent.slice(0, maxLength) + \"...\" : debugContent;\n}\n\nvar logDOM = function () {\n  return console.log(prettyDOM.apply(void 0, arguments));\n};\n\n// other parts of the code assume that all exports from\n// './queries' are query functions.\n\nvar config = {\n  testIdAttribute: 'data-testid',\n  asyncUtilTimeout: 1000,\n  // this is to support React's async `act` function.\n  // forcing react-testing-library to wrap all async functions would've been\n  // a total nightmare (consider wrapping every findBy* query and then also\n  // updating `within` so those would be wrapped too. Total nightmare).\n  // so we have this config option that's really only intended for\n  // react-testing-library to use. For that reason, this feature will remain\n  // undocumented.\n  asyncWrapper: function asyncWrapper(cb) {\n    return cb();\n  },\n  // default value for the `hidden` option in `ByRole` queries\n  defaultHidden: false,\n  // showOriginalStackTrace flag to show the full error stack traces for async errors\n  showOriginalStackTrace: false,\n  // throw errors w/ suggestions for better queries. Opt in so off by default.\n  throwSuggestions: false,\n  // called when getBy* queries fail. (message, container) => Error\n  getElementError: function getElementError(message, container) {\n    var error = new Error([message, prettyDOM(container)].filter(Boolean).join('\\n\\n'));\n    error.name = 'TestingLibraryElementError';\n    return error;\n  },\n  _disableExpensiveErrorDiagnostics: false\n};\nvar DEFAULT_IGNORE_TAGS = 'script, style';\nfunction runWithExpensiveErrorDiagnosticsDisabled(callback) {\n  try {\n    config._disableExpensiveErrorDiagnostics = true;\n    return callback();\n  } finally {\n    config._disableExpensiveErrorDiagnostics = false;\n  }\n}\nfunction configure(newConfig) {\n  if (typeof newConfig === 'function') {\n    // Pass the existing config out to the provided function\n    // and accept a delta in return\n    newConfig = newConfig(config);\n  } // Merge the incoming config delta\n\n\n  config = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, config), newConfig);\n}\nfunction getConfig() {\n  return config;\n}\n\nfunction fuzzyMatches(textToMatch, node, matcher, normalizer) {\n  if (typeof textToMatch !== 'string') {\n    return false;\n  }\n\n  var normalizedText = normalizer(textToMatch);\n\n  if (typeof matcher === 'string') {\n    return normalizedText.toLowerCase().includes(matcher.toLowerCase());\n  } else if (typeof matcher === 'function') {\n    return matcher(normalizedText, node);\n  } else {\n    return matcher.test(normalizedText);\n  }\n}\n\nfunction matches(textToMatch, node, matcher, normalizer) {\n  if (typeof textToMatch !== 'string') {\n    return false;\n  }\n\n  var normalizedText = normalizer(textToMatch);\n\n  if (typeof matcher === 'string') {\n    return normalizedText === matcher;\n  } else if (typeof matcher === 'function') {\n    return matcher(normalizedText, node);\n  } else {\n    return matcher.test(normalizedText);\n  }\n}\n\nfunction getDefaultNormalizer(_temp) {\n  var _ref = _temp === void 0 ? {} : _temp,\n      _ref$trim = _ref.trim,\n      trim = _ref$trim === void 0 ? true : _ref$trim,\n      _ref$collapseWhitespa = _ref.collapseWhitespace,\n      collapseWhitespace = _ref$collapseWhitespa === void 0 ? true : _ref$collapseWhitespa;\n\n  return function (text) {\n    var normalizedText = text;\n    normalizedText = trim ? normalizedText.trim() : normalizedText;\n    normalizedText = collapseWhitespace ? normalizedText.replace(/\\s+/g, ' ') : normalizedText;\n    return normalizedText;\n  };\n}\n/**\n * Constructs a normalizer to pass to functions in matches.js\n * @param {boolean|undefined} trim The user-specified value for `trim`, without\n * any defaulting having been applied\n * @param {boolean|undefined} collapseWhitespace The user-specified value for\n * `collapseWhitespace`, without any defaulting having been applied\n * @param {Function|undefined} normalizer The user-specified normalizer\n * @returns {Function} A normalizer\n */\n\n\nfunction makeNormalizer(_ref2) {\n  var trim = _ref2.trim,\n      collapseWhitespace = _ref2.collapseWhitespace,\n      normalizer = _ref2.normalizer;\n\n  if (normalizer) {\n    // User has specified a custom normalizer\n    if (typeof trim !== 'undefined' || typeof collapseWhitespace !== 'undefined') {\n      // They've also specified a value for trim or collapseWhitespace\n      throw new Error('trim and collapseWhitespace are not supported with a normalizer. ' + 'If you want to use the default trim and collapseWhitespace logic in your normalizer, ' + 'use \"getDefaultNormalizer({trim, collapseWhitespace})\" and compose that into your normalizer');\n    }\n\n    return normalizer;\n  } else {\n    // No custom normalizer specified. Just use default.\n    return getDefaultNormalizer({\n      trim: trim,\n      collapseWhitespace: collapseWhitespace\n    });\n  }\n}\n\n// Constant node.nodeType for text nodes, see:\n// https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType#Node_type_constants\nvar TEXT_NODE = 3;\n\nfunction getNodeText(node) {\n  if (node.matches('input[type=submit], input[type=button]')) {\n    return node.value;\n  }\n\n  return Array.from(node.childNodes).filter(function (child) {\n    return child.nodeType === TEXT_NODE && Boolean(child.textContent);\n  }).map(function (c) {\n    return c.textContent;\n  }).join('');\n}\n\nfunction _createForOfIteratorHelperLoose(o) { var i = 0; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } i = o[Symbol.iterator](); return i.next.bind(i); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\nvar elementRoleList = buildElementRoleList(aria_query__WEBPACK_IMPORTED_MODULE_3__[\"elementRoles\"]);\n/**\n * @param {Element} element -\n * @returns {boolean} - `true` if `element` and its subtree are inaccessible\n */\n\nfunction isSubtreeInaccessible(element) {\n  if (element.hidden === true) {\n    return true;\n  }\n\n  if (element.getAttribute('aria-hidden') === 'true') {\n    return true;\n  }\n\n  var window = element.ownerDocument.defaultView;\n\n  if (window.getComputedStyle(element).display === 'none') {\n    return true;\n  }\n\n  return false;\n}\n/**\n * Partial implementation https://www.w3.org/TR/wai-aria-1.2/#tree_exclusion\n * which should only be used for elements with a non-presentational role i.e.\n * `role=\"none\"` and `role=\"presentation\"` will not be excluded.\n *\n * Implements aria-hidden semantics (i.e. parent overrides child)\n * Ignores \"Child Presentational: True\" characteristics\n *\n * @param {Element} element -\n * @param {object} [options] -\n * @param {function (element: Element): boolean} options.isSubtreeInaccessible -\n * can be used to return cached results from previous isSubtreeInaccessible calls\n * @returns {boolean} true if excluded, otherwise false\n */\n\n\nfunction isInaccessible(element, options) {\n  if (options === void 0) {\n    options = {};\n  }\n\n  var _options = options,\n      _options$isSubtreeIna = _options.isSubtreeInaccessible,\n      isSubtreeInaccessibleImpl = _options$isSubtreeIna === void 0 ? isSubtreeInaccessible : _options$isSubtreeIna;\n  var window = element.ownerDocument.defaultView; // since visibility is inherited we can exit early\n\n  if (window.getComputedStyle(element).visibility === 'hidden') {\n    return true;\n  }\n\n  var currentElement = element;\n\n  while (currentElement) {\n    if (isSubtreeInaccessibleImpl(currentElement)) {\n      return true;\n    }\n\n    currentElement = currentElement.parentElement;\n  }\n\n  return false;\n}\n\nfunction getImplicitAriaRoles(currentNode) {\n  // eslint bug here:\n  // eslint-disable-next-line no-unused-vars\n  for (var _iterator = _createForOfIteratorHelperLoose(elementRoleList), _step; !(_step = _iterator()).done;) {\n    var _step$value = _step.value,\n        selector = _step$value.selector,\n        roles = _step$value.roles;\n\n    if (currentNode.matches(selector)) {\n      return [].concat(roles);\n    }\n  }\n\n  return [];\n}\n\nfunction buildElementRoleList(elementRolesMap) {\n  function makeElementSelector(_ref) {\n    var name = _ref.name,\n        _ref$attributes = _ref.attributes,\n        attributes = _ref$attributes === void 0 ? [] : _ref$attributes;\n    return \"\" + name + attributes.map(function (_ref2) {\n      var attributeName = _ref2.name,\n          value = _ref2.value,\n          _ref2$constraints = _ref2.constraints,\n          constraints = _ref2$constraints === void 0 ? [] : _ref2$constraints;\n      var shouldNotExist = constraints.indexOf('undefined') !== -1;\n\n      if (shouldNotExist) {\n        return \":not([\" + attributeName + \"])\";\n      } else if (value) {\n        return \"[\" + attributeName + \"=\\\"\" + value + \"\\\"]\";\n      } else {\n        return \"[\" + attributeName + \"]\";\n      }\n    }).join('');\n  }\n\n  function getSelectorSpecificity(_ref3) {\n    var _ref3$attributes = _ref3.attributes,\n        attributes = _ref3$attributes === void 0 ? [] : _ref3$attributes;\n    return attributes.length;\n  }\n\n  var result = []; // eslint bug here:\n  // eslint-disable-next-line no-unused-vars\n\n  for (var _iterator2 = _createForOfIteratorHelperLoose(elementRolesMap.entries()), _step2; !(_step2 = _iterator2()).done;) {\n    var _step2$value = _step2.value,\n        element = _step2$value[0],\n        roles = _step2$value[1];\n    result = [].concat(result, [{\n      selector: makeElementSelector(element),\n      roles: Array.from(roles),\n      specificity: getSelectorSpecificity(element)\n    }]);\n  }\n\n  return result.sort(function (_ref4, _ref5) {\n    var leftSpecificity = _ref4.specificity;\n    var rightSpecificity = _ref5.specificity;\n    return rightSpecificity - leftSpecificity;\n  });\n}\n\nfunction getRoles(container, _temp) {\n  var _ref6 = _temp === void 0 ? {} : _temp,\n      _ref6$hidden = _ref6.hidden,\n      hidden = _ref6$hidden === void 0 ? false : _ref6$hidden;\n\n  function flattenDOM(node) {\n    return [node].concat(Array.from(node.children).reduce(function (acc, child) {\n      return [].concat(acc, flattenDOM(child));\n    }, []));\n  }\n\n  return flattenDOM(container).filter(function (element) {\n    return hidden === false ? isInaccessible(element) === false : true;\n  }).reduce(function (acc, node) {\n    var roles = []; // TODO: This violates html-aria which does not allow any role on every element\n\n    if (node.hasAttribute('role')) {\n      roles = node.getAttribute('role').split(' ').slice(0, 1);\n    } else {\n      roles = getImplicitAriaRoles(node);\n    }\n\n    return roles.reduce(function (rolesAcc, role) {\n      var _extends2, _extends3;\n\n      return Array.isArray(rolesAcc[role]) ? Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, rolesAcc), {}, (_extends2 = {}, _extends2[role] = [].concat(rolesAcc[role], [node]), _extends2)) : Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, rolesAcc), {}, (_extends3 = {}, _extends3[role] = [node], _extends3));\n    }, acc);\n  }, {});\n}\n\nfunction prettyRoles(dom, _ref7) {\n  var hidden = _ref7.hidden;\n  var roles = getRoles(dom, {\n    hidden: hidden\n  });\n  return Object.entries(roles).map(function (_ref8) {\n    var role = _ref8[0],\n        elements = _ref8[1];\n    var delimiterBar = '-'.repeat(50);\n    var elementsString = elements.map(function (el) {\n      var nameString = \"Name \\\"\" + Object(dom_accessibility_api__WEBPACK_IMPORTED_MODULE_2__[\"computeAccessibleName\"])(el) + \"\\\":\\n\";\n      var domString = prettyDOM(el.cloneNode(false));\n      return \"\" + nameString + domString;\n    }).join('\\n\\n');\n    return role + \":\\n\\n\" + elementsString + \"\\n\\n\" + delimiterBar;\n  }).join('\\n');\n}\n\nvar logRoles = function (dom, _temp2) {\n  var _ref9 = _temp2 === void 0 ? {} : _temp2,\n      _ref9$hidden = _ref9.hidden,\n      hidden = _ref9$hidden === void 0 ? false : _ref9$hidden;\n\n  return console.log(prettyRoles(dom, {\n    hidden: hidden\n  }));\n};\n/**\n * @param {Element} element -\n * @returns {boolean | undefined} - false/true if (not)selected, undefined if not selectable\n */\n\n\nfunction computeAriaSelected(element) {\n  // implicit value from html-aam mappings: https://www.w3.org/TR/html-aam-1.0/#html-attribute-state-and-property-mappings\n  // https://www.w3.org/TR/html-aam-1.0/#details-id-97\n  if (element.tagName === 'OPTION') {\n    return element.selected;\n  } // explicit value\n\n\n  var attributeValue = element.getAttribute('aria-selected');\n\n  if (attributeValue === 'true') {\n    return true;\n  }\n\n  if (attributeValue === 'false') {\n    return false;\n  }\n\n  return undefined;\n}\n\nvar normalize = getDefaultNormalizer();\n\nfunction getLabelTextFor(element) {\n  var label = element.labels && Array.from(element.labels).find(function (el) {\n    return Boolean(normalize(el.textContent));\n  }); // non form elements that are using aria-labelledby won't be included in `element.labels`\n\n  if (!label) {\n    var ariaLabelledBy = element.getAttribute('aria-labelledby');\n\n    if (ariaLabelledBy) {\n      // we're using this notation because with the # selector we would have to escape special characters e.g. user.name\n      // see https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector#Escaping_special_characters\n      label = document.querySelector(\"[id=\" + ariaLabelledBy + \"]\");\n    }\n  }\n\n  if (label) {\n    return label.textContent;\n  }\n\n  return undefined;\n}\n\nfunction makeSuggestion(queryName, content, _ref) {\n  var variant = _ref.variant,\n      name = _ref.name;\n  return {\n    queryName: queryName,\n    toString: function toString() {\n      var options = name ? \", {name: /\" + name.toLowerCase() + \"/i}\" : '';\n      return variant + \"By\" + queryName + \"(\\\"\" + content + \"\\\"\" + options + \")\";\n    }\n  };\n}\n\nfunction getSuggestedQuery(element, variant) {\n  var roles = getRoles(element);\n  var roleNames = Object.keys(roles);\n\n  if (roleNames.length) {\n    var role = roleNames[0];\n    return makeSuggestion('Role', role, {\n      variant: variant,\n      name: Object(dom_accessibility_api__WEBPACK_IMPORTED_MODULE_2__[\"computeAccessibleName\"])(element)\n    });\n  }\n\n  var labelText = getLabelTextFor(element);\n\n  if (labelText) {\n    return makeSuggestion('LabelText', labelText, {\n      variant: variant\n    });\n  }\n\n  var placeholderText = element.getAttribute('placeholder');\n\n  if (placeholderText) {\n    return makeSuggestion('PlaceholderText', placeholderText, {\n      variant: variant\n    });\n  }\n\n  var textContent = normalize(getNodeText(element));\n\n  if (textContent && !element.matches(DEFAULT_IGNORE_TAGS)) {\n    return makeSuggestion('Text', textContent, {\n      variant: variant\n    });\n  }\n\n  if (element.value) {\n    return makeSuggestion('DisplayValue', normalize(element.value), {\n      variant: variant\n    });\n  }\n\n  var alt = element.getAttribute('alt');\n\n  if (alt) {\n    return makeSuggestion('AltText', alt, {\n      variant: variant\n    });\n  }\n\n  var title = element.getAttribute('title');\n\n  if (title) {\n    return makeSuggestion('Title', title, {\n      variant: variant\n    });\n  }\n\n  return undefined;\n}\n\n// closer to their code (because async stack traces are hard to follow).\n\nfunction copyStackTrace(target, source) {\n  target.stack = source.stack.replace(source.message, target.message);\n}\n\nfunction waitFor(callback, _ref) {\n  var _ref$container = _ref.container,\n      container = _ref$container === void 0 ? getDocument() : _ref$container,\n      _ref$timeout = _ref.timeout,\n      timeout = _ref$timeout === void 0 ? getConfig().asyncUtilTimeout : _ref$timeout,\n      _ref$showOriginalStac = _ref.showOriginalStackTrace,\n      showOriginalStackTrace = _ref$showOriginalStac === void 0 ? getConfig().showOriginalStackTrace : _ref$showOriginalStac,\n      stackTraceError = _ref.stackTraceError,\n      _ref$interval = _ref.interval,\n      interval = _ref$interval === void 0 ? 50 : _ref$interval,\n      _ref$mutationObserver = _ref.mutationObserverOptions,\n      mutationObserverOptions = _ref$mutationObserver === void 0 ? {\n    subtree: true,\n    childList: true,\n    attributes: true,\n    characterData: true\n  } : _ref$mutationObserver;\n\n  if (typeof callback !== 'function') {\n    throw new TypeError('Received `callback` arg must be a function');\n  }\n\n  if (interval < 1) interval = 1;\n  return new Promise(function (resolve, reject) {\n    var lastError;\n    var overallTimeoutTimer = setTimeoutFn(onTimeout, timeout);\n    var intervalId = setInterval(checkCallback, interval);\n\n    var _getWindowFromNode = getWindowFromNode(container),\n        MutationObserver = _getWindowFromNode.MutationObserver;\n\n    var observer = new MutationObserver(checkCallback);\n    runWithRealTimers(function () {\n      return observer.observe(container, mutationObserverOptions);\n    });\n    checkCallback();\n\n    function onDone(error, result) {\n      clearTimeoutFn(overallTimeoutTimer);\n      clearInterval(intervalId);\n      setImmediateFn(function () {\n        return observer.disconnect();\n      });\n\n      if (error) {\n        reject(error);\n      } else {\n        resolve(result);\n      }\n    }\n\n    function checkCallback() {\n      try {\n        onDone(null, runWithExpensiveErrorDiagnosticsDisabled(callback)); // If `callback` throws, wait for the next mutation or timeout.\n      } catch (error) {\n        // Save the callback error to reject the promise with it.\n        lastError = error;\n      }\n    }\n\n    function onTimeout() {\n      var error;\n\n      if (lastError) {\n        error = lastError;\n\n        if (!showOriginalStackTrace && error.name === 'TestingLibraryElementError') {\n          copyStackTrace(error, stackTraceError);\n        }\n      } else {\n        error = new Error('Timed out in waitFor.');\n\n        if (!showOriginalStackTrace) {\n          copyStackTrace(error, stackTraceError);\n        }\n      }\n\n      onDone(error, null);\n    }\n  });\n}\n\nfunction waitForWrapper(callback, options) {\n  // create the error here so its stack trace is as close to the\n  // calling code as possible\n  var stackTraceError = new Error('STACK_TRACE_MESSAGE');\n  return getConfig().asyncWrapper(function () {\n    return waitFor(callback, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      stackTraceError: stackTraceError\n    }, options));\n  });\n}\n\nvar hasWarned = false; // deprecated... TODO: remove this method. We renamed this to `waitFor` so the\n// code people write reads more clearly.\n\nfunction wait() {\n  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n    args[_key] = arguments[_key];\n  }\n\n  // istanbul ignore next\n  var _args$ = args[0],\n      first = _args$ === void 0 ? function () {} : _args$,\n      rest = args.slice(1);\n\n  if (!hasWarned) {\n    hasWarned = true;\n    console.warn(\"`wait` has been deprecated and replaced by `waitFor` instead. In most cases you should be able to find/replace `wait` with `waitFor`. Learn more: https://testing-library.com/docs/dom-testing-library/api-async#waitfor.\");\n  }\n\n  return waitForWrapper.apply(void 0, [first].concat(rest));\n}\n\nfunction getElementError(message, container) {\n  return getConfig().getElementError(message, container);\n}\n\nfunction getMultipleElementsFoundError(message, container) {\n  return getElementError(message + \"\\n\\n(If this is intentional, then use the `*AllBy*` variant of the query (like `queryAllByText`, `getAllByText`, or `findAllByText`)).\", container);\n}\n\nfunction queryAllByAttribute(attribute, container, text, _temp) {\n  var _ref = _temp === void 0 ? {} : _temp,\n      _ref$exact = _ref.exact,\n      exact = _ref$exact === void 0 ? true : _ref$exact,\n      collapseWhitespace = _ref.collapseWhitespace,\n      trim = _ref.trim,\n      normalizer = _ref.normalizer;\n\n  var matcher = exact ? matches : fuzzyMatches;\n  var matchNormalizer = makeNormalizer({\n    collapseWhitespace: collapseWhitespace,\n    trim: trim,\n    normalizer: normalizer\n  });\n  return Array.from(container.querySelectorAll(\"[\" + attribute + \"]\")).filter(function (node) {\n    return matcher(node.getAttribute(attribute), node, text, matchNormalizer);\n  });\n}\n\nfunction queryByAttribute(attribute, container, text) {\n  for (var _len = arguments.length, args = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {\n    args[_key - 3] = arguments[_key];\n  }\n\n  var els = queryAllByAttribute.apply(void 0, [attribute, container, text].concat(args));\n\n  if (els.length > 1) {\n    throw getMultipleElementsFoundError(\"Found multiple elements by [\" + attribute + \"=\" + text + \"]\", container);\n  }\n\n  return els[0] || null;\n} // this accepts a query function and returns a function which throws an error\n// if more than one elements is returned, otherwise it returns the first\n// element or null\n\n\nfunction makeSingleQuery(allQuery, getMultipleError) {\n  return function (container) {\n    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {\n      args[_key2 - 1] = arguments[_key2];\n    }\n\n    var els = allQuery.apply(void 0, [container].concat(args));\n\n    if (els.length > 1) {\n      throw getMultipleElementsFoundError(getMultipleError.apply(void 0, [container].concat(args)), container);\n    }\n\n    return els[0] || null;\n  };\n}\n\nfunction getSuggestionError(suggestion, container) {\n  return getConfig().getElementError(\"A better query is available, try this:\\n\" + suggestion.toString() + \"\\n\", container);\n} // this accepts a query function and returns a function which throws an error\n// if an empty list of elements is returned\n\n\nfunction makeGetAllQuery(allQuery, getMissingError) {\n  return function (container) {\n    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {\n      args[_key3 - 1] = arguments[_key3];\n    }\n\n    var els = allQuery.apply(void 0, [container].concat(args));\n\n    if (!els.length) {\n      throw getConfig().getElementError(getMissingError.apply(void 0, [container].concat(args)), container);\n    }\n\n    return els;\n  };\n} // this accepts a getter query function and returns a function which calls\n// waitFor and passing a function which invokes the getter.\n\n\nfunction makeFindQuery(getter) {\n  return function (container, text, options, waitForOptions) {\n    return waitForWrapper(function () {\n      return getter(container, text, options);\n    }, waitForOptions);\n  };\n}\n\nvar wrapSingleQueryWithSuggestion = function (query, queryAllByName, variant) {\n  return function (container) {\n    for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {\n      args[_key4 - 1] = arguments[_key4];\n    }\n\n    var element = query.apply(void 0, [container].concat(args));\n\n    var _args$slice = args.slice(-1),\n        _args$slice$ = _args$slice[0];\n\n    _args$slice$ = _args$slice$ === void 0 ? {} : _args$slice$;\n    var _args$slice$$suggest = _args$slice$.suggest,\n        suggest = _args$slice$$suggest === void 0 ? getConfig().throwSuggestions : _args$slice$$suggest;\n\n    if (element && suggest) {\n      var suggestion = getSuggestedQuery(element, variant);\n\n      if (suggestion && !queryAllByName.endsWith(suggestion.queryName)) {\n        throw getSuggestionError(suggestion.toString(), container);\n      }\n    }\n\n    return element;\n  };\n};\n\nvar wrapAllByQueryWithSuggestion = function (query, queryAllByName, variant) {\n  return function (container) {\n    for (var _len5 = arguments.length, args = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {\n      args[_key5 - 1] = arguments[_key5];\n    }\n\n    var els = query.apply(void 0, [container].concat(args));\n\n    var _args$slice2 = args.slice(-1),\n        _args$slice2$ = _args$slice2[0];\n\n    _args$slice2$ = _args$slice2$ === void 0 ? {} : _args$slice2$;\n    var _args$slice2$$suggest = _args$slice2$.suggest,\n        suggest = _args$slice2$$suggest === void 0 ? getConfig().throwSuggestions : _args$slice2$$suggest;\n\n    if (els.length && suggest) {\n      // get a unique list of all suggestion messages.  We are only going to make a suggestion if\n      // all the suggestions are the same\n      var uniqueSuggestionMessages = [].concat(new Set(els.map(function (element) {\n        var _getSuggestedQuery;\n\n        return (_getSuggestedQuery = getSuggestedQuery(element, variant)) == null ? void 0 : _getSuggestedQuery.toString();\n      })));\n\n      if ( // only want to suggest if all the els have the same suggestion.\n      uniqueSuggestionMessages.length === 1 && !queryAllByName.endsWith(getSuggestedQuery(els[0], variant).queryName)) {\n        throw getSuggestionError(uniqueSuggestionMessages[0], container);\n      }\n    }\n\n    return els;\n  };\n};\n\nfunction buildQueries(queryAllBy, getMultipleError, getMissingError) {\n  var queryBy = wrapSingleQueryWithSuggestion(makeSingleQuery(queryAllBy, getMultipleError), queryAllBy.name, 'query');\n  var getAllBy = makeGetAllQuery(queryAllBy, getMissingError);\n  var getBy = makeSingleQuery(getAllBy, getMultipleError);\n  var getByWithSuggestions = wrapSingleQueryWithSuggestion(getBy, queryAllBy.name, 'get');\n  var getAllWithSuggestions = wrapAllByQueryWithSuggestion(getAllBy, queryAllBy.name.replace('query', 'get'), 'getAll');\n  var findAllBy = makeFindQuery(wrapAllByQueryWithSuggestion(getAllBy, queryAllBy.name, 'findAll'));\n  var findBy = makeFindQuery(wrapSingleQueryWithSuggestion(getBy, queryAllBy.name, 'find'));\n  return [queryBy, getAllWithSuggestions, getByWithSuggestions, findAllBy, findBy];\n}\n\nvar queryHelpers = /*#__PURE__*/Object.freeze({\n  __proto__: null,\n  getElementError: getElementError,\n  wrapAllByQueryWithSuggestion: wrapAllByQueryWithSuggestion,\n  wrapSingleQueryWithSuggestion: wrapSingleQueryWithSuggestion,\n  getMultipleElementsFoundError: getMultipleElementsFoundError,\n  queryAllByAttribute: queryAllByAttribute,\n  queryByAttribute: queryByAttribute,\n  makeSingleQuery: makeSingleQuery,\n  makeGetAllQuery: makeGetAllQuery,\n  makeFindQuery: makeFindQuery,\n  buildQueries: buildQueries\n});\n\nfunction queryAllByText(container, text, _temp) {\n  var _ref = _temp === void 0 ? {} : _temp,\n      _ref$selector = _ref.selector,\n      selector = _ref$selector === void 0 ? '*' : _ref$selector,\n      _ref$exact = _ref.exact,\n      exact = _ref$exact === void 0 ? true : _ref$exact,\n      collapseWhitespace = _ref.collapseWhitespace,\n      trim = _ref.trim,\n      _ref$ignore = _ref.ignore,\n      ignore = _ref$ignore === void 0 ? DEFAULT_IGNORE_TAGS : _ref$ignore,\n      normalizer = _ref.normalizer;\n\n  var matcher = exact ? matches : fuzzyMatches;\n  var matchNormalizer = makeNormalizer({\n    collapseWhitespace: collapseWhitespace,\n    trim: trim,\n    normalizer: normalizer\n  });\n  var baseArray = [];\n\n  if (typeof container.matches === 'function' && container.matches(selector)) {\n    baseArray = [container];\n  }\n\n  return [].concat(baseArray, Array.from(container.querySelectorAll(selector))).filter(function (node) {\n    return !ignore || !node.matches(ignore);\n  }).filter(function (node) {\n    return matcher(getNodeText(node), node, text, matchNormalizer);\n  });\n}\n\nvar getMultipleError = function (c, text) {\n  return \"Found multiple elements with the text: \" + text;\n};\n\nvar getMissingError = function (c, text) {\n  return \"Unable to find an element with the text: \" + text + \". This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.\";\n};\n\nvar queryAllByTextWithSuggestions = wrapAllByQueryWithSuggestion(queryAllByText, queryAllByText.name, 'queryAll');\n\nvar _buildQueries = buildQueries(queryAllByText, getMultipleError, getMissingError),\n    queryByText = _buildQueries[0],\n    getAllByText = _buildQueries[1],\n    getByText = _buildQueries[2],\n    findAllByText = _buildQueries[3],\n    findByText = _buildQueries[4];\n\nfunction queryAllLabelsByText(container, text, _temp) {\n  var _ref = _temp === void 0 ? {} : _temp,\n      _ref$exact = _ref.exact,\n      exact = _ref$exact === void 0 ? true : _ref$exact,\n      trim = _ref.trim,\n      collapseWhitespace = _ref.collapseWhitespace,\n      normalizer = _ref.normalizer;\n\n  var matcher = exact ? matches : fuzzyMatches;\n  var matchNormalizer = makeNormalizer({\n    collapseWhitespace: collapseWhitespace,\n    trim: trim,\n    normalizer: normalizer\n  });\n  return Array.from(container.querySelectorAll('label')).filter(function (label) {\n    var textToMatch = label.textContent; // The children of a textarea are part of `textContent` as well. We\n    // need to remove them from the string so we can match it afterwards.\n\n    Array.from(label.querySelectorAll('textarea')).forEach(function (textarea) {\n      textToMatch = textToMatch.replace(textarea.value, '');\n    }); // The children of a select are also part of `textContent`, so we\n    // need also to remove their text.\n\n    Array.from(label.querySelectorAll('select')).forEach(function (select) {\n      textToMatch = textToMatch.replace(select.textContent, '');\n    });\n    return matcher(textToMatch, label, text, matchNormalizer);\n  });\n}\n\nfunction queryAllByLabelText(container, text, _temp2) {\n  var _ref2 = _temp2 === void 0 ? {} : _temp2,\n      _ref2$selector = _ref2.selector,\n      selector = _ref2$selector === void 0 ? '*' : _ref2$selector,\n      _ref2$exact = _ref2.exact,\n      exact = _ref2$exact === void 0 ? true : _ref2$exact,\n      collapseWhitespace = _ref2.collapseWhitespace,\n      trim = _ref2.trim,\n      normalizer = _ref2.normalizer;\n\n  var matchNormalizer = makeNormalizer({\n    collapseWhitespace: collapseWhitespace,\n    trim: trim,\n    normalizer: normalizer\n  });\n  var labels = queryAllLabelsByText(container, text, {\n    exact: exact,\n    normalizer: matchNormalizer\n  });\n  var labelledElements = labels.reduce(function (matchedElements, label) {\n    var elementsForLabel = [];\n\n    if (label.control) {\n      elementsForLabel.push(label.control);\n    }\n    /* istanbul ignore if */\n\n\n    if (label.getAttribute('for')) {\n      // we're using this notation because with the # selector we would have to escape special characters e.g. user.name\n      // see https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector#Escaping_special_characters\n      // <label for=\"someId\">text</label><input id=\"someId\" />\n      // .control support has landed in jsdom (https://github.com/jsdom/jsdom/issues/2175)\n      elementsForLabel.push(container.querySelector(\"[id=\\\"\" + label.getAttribute('for') + \"\\\"]\"));\n    }\n\n    if (label.getAttribute('id')) {\n      // <label id=\"someId\">text</label><input aria-labelledby=\"someId\" />\n      Array.from(container.querySelectorAll(\"[aria-labelledby~=\\\"\" + label.getAttribute('id') + \"\\\"]\")).forEach(function (element) {\n        return elementsForLabel.push(element);\n      });\n    }\n\n    if (label.childNodes.length) {\n      // <label>text: <input /></label>\n      var labelledFormControl = Array.from(label.querySelectorAll('button, input, meter, output, progress, select, textarea')).filter(function (element) {\n        return element.matches(selector);\n      })[0];\n      if (labelledFormControl) elementsForLabel.push(labelledFormControl);\n    }\n\n    return matchedElements.concat(elementsForLabel);\n  }, []).filter(function (element) {\n    return element !== null;\n  }).concat(queryAllByAttribute('aria-label', container, text, {\n    exact: exact\n  }));\n  var possibleAriaLabelElements = queryAllByTextWithSuggestions(container, text, {\n    exact: exact,\n    normalizer: matchNormalizer\n  });\n  var ariaLabelledElements = possibleAriaLabelElements.reduce(function (allLabelledElements, nextLabelElement) {\n    var labelId = nextLabelElement.getAttribute('id');\n    if (!labelId) return allLabelledElements; // ARIA labels can label multiple elements\n\n    var labelledNodes = Array.from(container.querySelectorAll(\"[aria-labelledby~=\\\"\" + labelId + \"\\\"]\"));\n    return allLabelledElements.concat(labelledNodes);\n  }, []);\n  return Array.from(new Set([].concat(labelledElements, ariaLabelledElements))).filter(function (element) {\n    return element.matches(selector);\n  });\n} // the getAll* query would normally look like this:\n// const getAllByLabelText = makeGetAllQuery(\n//   queryAllByLabelText,\n//   (c, text) => `Unable to find a label with the text of: ${text}`,\n// )\n// however, we can give a more helpful error message than the generic one,\n// so we're writing this one out by hand.\n\n\nvar getAllByLabelText = function (container, text) {\n  for (var _len = arguments.length, rest = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    rest[_key - 2] = arguments[_key];\n  }\n\n  var els = queryAllByLabelText.apply(void 0, [container, text].concat(rest));\n\n  if (!els.length) {\n    var labels = queryAllLabelsByText.apply(void 0, [container, text].concat(rest));\n\n    if (labels.length) {\n      throw getConfig().getElementError(\"Found a label with the text of: \" + text + \", however no form control was found associated to that label. Make sure you're using the \\\"for\\\" attribute or \\\"aria-labelledby\\\" attribute correctly.\", container);\n    } else {\n      throw getConfig().getElementError(\"Unable to find a label with the text of: \" + text, container);\n    }\n  }\n\n  return els;\n}; // the reason mentioned above is the same reason we're not using buildQueries\n\n\nvar getMultipleError$1 = function (c, text) {\n  return \"Found multiple elements with the text of: \" + text;\n};\n\nvar queryByLabelText = wrapSingleQueryWithSuggestion(makeSingleQuery(queryAllByLabelText, getMultipleError$1), queryAllByLabelText.name, 'query');\nvar getByLabelText = makeSingleQuery(getAllByLabelText, getMultipleError$1);\nvar findAllByLabelText = makeFindQuery(wrapAllByQueryWithSuggestion(getAllByLabelText, getAllByLabelText.name, 'findAll'));\nvar findByLabelText = makeFindQuery(wrapSingleQueryWithSuggestion(getByLabelText, getByLabelText.name, 'find'));\nvar getAllByLabelTextWithSuggestions = wrapAllByQueryWithSuggestion(getAllByLabelText, getAllByLabelText.name, 'getAll');\nvar getByLabelTextWithSuggestions = wrapSingleQueryWithSuggestion(getByLabelText, getAllByLabelText.name, 'get');\nvar queryAllByLabelTextWithSuggestions = wrapAllByQueryWithSuggestion(queryAllByLabelText, queryAllByLabelText.name, 'queryAll');\n\nfunction queryAllByPlaceholderText() {\n  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n    args[_key] = arguments[_key];\n  }\n\n  return queryAllByAttribute.apply(void 0, ['placeholder'].concat(args));\n}\n\nvar getMultipleError$2 = function (c, text) {\n  return \"Found multiple elements with the placeholder text of: \" + text;\n};\n\nvar getMissingError$1 = function (c, text) {\n  return \"Unable to find an element with the placeholder text of: \" + text;\n};\n\nvar queryAllByPlaceholderTextWithSuggestions = wrapAllByQueryWithSuggestion(queryAllByPlaceholderText, queryAllByPlaceholderText.name, 'queryAll');\n\nvar _buildQueries$1 = buildQueries(queryAllByPlaceholderText, getMultipleError$2, getMissingError$1),\n    queryByPlaceholderText = _buildQueries$1[0],\n    getAllByPlaceholderText = _buildQueries$1[1],\n    getByPlaceholderText = _buildQueries$1[2],\n    findAllByPlaceholderText = _buildQueries$1[3],\n    findByPlaceholderText = _buildQueries$1[4];\n\nfunction queryAllByDisplayValue(container, value, _temp) {\n  var _ref = _temp === void 0 ? {} : _temp,\n      _ref$exact = _ref.exact,\n      exact = _ref$exact === void 0 ? true : _ref$exact,\n      collapseWhitespace = _ref.collapseWhitespace,\n      trim = _ref.trim,\n      normalizer = _ref.normalizer;\n\n  var matcher = exact ? matches : fuzzyMatches;\n  var matchNormalizer = makeNormalizer({\n    collapseWhitespace: collapseWhitespace,\n    trim: trim,\n    normalizer: normalizer\n  });\n  return Array.from(container.querySelectorAll(\"input,textarea,select\")).filter(function (node) {\n    if (node.tagName === 'SELECT') {\n      var selectedOptions = Array.from(node.options).filter(function (option) {\n        return option.selected;\n      });\n      return selectedOptions.some(function (optionNode) {\n        return matcher(getNodeText(optionNode), optionNode, value, matchNormalizer);\n      });\n    } else {\n      return matcher(node.value, node, value, matchNormalizer);\n    }\n  });\n}\n\nvar getMultipleError$3 = function (c, value) {\n  return \"Found multiple elements with the display value: \" + value + \".\";\n};\n\nvar getMissingError$2 = function (c, value) {\n  return \"Unable to find an element with the display value: \" + value + \".\";\n};\n\nvar queryAllByDisplayValueWithSuggestions = wrapAllByQueryWithSuggestion(queryAllByDisplayValue, queryAllByDisplayValue.name, 'queryAll');\n\nvar _buildQueries$2 = buildQueries(queryAllByDisplayValue, getMultipleError$3, getMissingError$2),\n    queryByDisplayValue = _buildQueries$2[0],\n    getAllByDisplayValue = _buildQueries$2[1],\n    getByDisplayValue = _buildQueries$2[2],\n    findAllByDisplayValue = _buildQueries$2[3],\n    findByDisplayValue = _buildQueries$2[4];\n\nfunction queryAllByAltText(container, alt, _temp) {\n  var _ref = _temp === void 0 ? {} : _temp,\n      _ref$exact = _ref.exact,\n      exact = _ref$exact === void 0 ? true : _ref$exact,\n      collapseWhitespace = _ref.collapseWhitespace,\n      trim = _ref.trim,\n      normalizer = _ref.normalizer;\n\n  var matcher = exact ? matches : fuzzyMatches;\n  var matchNormalizer = makeNormalizer({\n    collapseWhitespace: collapseWhitespace,\n    trim: trim,\n    normalizer: normalizer\n  });\n  return Array.from(container.querySelectorAll('img,input,area')).filter(function (node) {\n    return matcher(node.getAttribute('alt'), node, alt, matchNormalizer);\n  });\n}\n\nvar getMultipleError$4 = function (c, alt) {\n  return \"Found multiple elements with the alt text: \" + alt;\n};\n\nvar getMissingError$3 = function (c, alt) {\n  return \"Unable to find an element with the alt text: \" + alt;\n};\n\nvar queryAllByAltTextWithSuggestions = wrapAllByQueryWithSuggestion(queryAllByAltText, queryAllByAltText.name, 'queryAll');\n\nvar _buildQueries$3 = buildQueries(queryAllByAltText, getMultipleError$4, getMissingError$3),\n    queryByAltText = _buildQueries$3[0],\n    getAllByAltText = _buildQueries$3[1],\n    getByAltText = _buildQueries$3[2],\n    findAllByAltText = _buildQueries$3[3],\n    findByAltText = _buildQueries$3[4];\n\nfunction queryAllByTitle(container, text, _temp) {\n  var _ref = _temp === void 0 ? {} : _temp,\n      _ref$exact = _ref.exact,\n      exact = _ref$exact === void 0 ? true : _ref$exact,\n      collapseWhitespace = _ref.collapseWhitespace,\n      trim = _ref.trim,\n      normalizer = _ref.normalizer;\n\n  var matcher = exact ? matches : fuzzyMatches;\n  var matchNormalizer = makeNormalizer({\n    collapseWhitespace: collapseWhitespace,\n    trim: trim,\n    normalizer: normalizer\n  });\n  return Array.from(container.querySelectorAll('[title], svg > title')).filter(function (node) {\n    return matcher(node.getAttribute('title'), node, text, matchNormalizer) || matcher(getNodeText(node), node, text, matchNormalizer);\n  });\n}\n\nvar getMultipleError$5 = function (c, title) {\n  return \"Found multiple elements with the title: \" + title + \".\";\n};\n\nvar getMissingError$4 = function (c, title) {\n  return \"Unable to find an element with the title: \" + title + \".\";\n};\n\nvar queryAllByTitleWithSuggestions = wrapAllByQueryWithSuggestion(queryAllByTitle, queryAllByTitle.name, 'queryAll');\n\nvar _buildQueries$4 = buildQueries(queryAllByTitle, getMultipleError$5, getMissingError$4),\n    queryByTitle = _buildQueries$4[0],\n    getAllByTitle = _buildQueries$4[1],\n    getByTitle = _buildQueries$4[2],\n    findAllByTitle = _buildQueries$4[3],\n    findByTitle = _buildQueries$4[4];\n\nfunction queryAllByRole(container, role, _temp) {\n  var _ref = _temp === void 0 ? {} : _temp,\n      _ref$exact = _ref.exact,\n      exact = _ref$exact === void 0 ? true : _ref$exact,\n      collapseWhitespace = _ref.collapseWhitespace,\n      _ref$hidden = _ref.hidden,\n      hidden = _ref$hidden === void 0 ? getConfig().defaultHidden : _ref$hidden,\n      name = _ref.name,\n      trim = _ref.trim,\n      normalizer = _ref.normalizer,\n      _ref$queryFallbacks = _ref.queryFallbacks,\n      queryFallbacks = _ref$queryFallbacks === void 0 ? false : _ref$queryFallbacks,\n      selected = _ref.selected;\n\n  var matcher = exact ? matches : fuzzyMatches;\n  var matchNormalizer = makeNormalizer({\n    collapseWhitespace: collapseWhitespace,\n    trim: trim,\n    normalizer: normalizer\n  });\n\n  if (selected !== undefined) {\n    var _allRoles$get;\n\n    // guard against unknown roles\n    if (((_allRoles$get = aria_query__WEBPACK_IMPORTED_MODULE_3__[\"roles\"].get(role)) == null ? void 0 : _allRoles$get.props['aria-selected']) === undefined) {\n      throw new Error(\"\\\"aria-selected\\\" is not supported on role \\\"\" + role + \"\\\".\");\n    }\n  }\n\n  var subtreeIsInaccessibleCache = new WeakMap();\n\n  function cachedIsSubtreeInaccessible(element) {\n    if (!subtreeIsInaccessibleCache.has(element)) {\n      subtreeIsInaccessibleCache.set(element, isSubtreeInaccessible(element));\n    }\n\n    return subtreeIsInaccessibleCache.get(element);\n  }\n\n  return Array.from(container.querySelectorAll('*')).filter(function (node) {\n    var isRoleSpecifiedExplicitly = node.hasAttribute('role');\n\n    if (isRoleSpecifiedExplicitly) {\n      var roleValue = node.getAttribute('role');\n\n      if (queryFallbacks) {\n        return roleValue.split(' ').filter(Boolean).some(function (text) {\n          return matcher(text, node, role, matchNormalizer);\n        });\n      } // if a custom normalizer is passed then let normalizer handle the role value\n\n\n      if (normalizer) {\n        return matcher(roleValue, node, role, matchNormalizer);\n      } // other wise only send the first word to match\n\n\n      var _roleValue$split = roleValue.split(' '),\n          firstWord = _roleValue$split[0];\n\n      return matcher(firstWord, node, role, matchNormalizer);\n    }\n\n    var implicitRoles = getImplicitAriaRoles(node);\n    return implicitRoles.some(function (implicitRole) {\n      return matcher(implicitRole, node, role, matchNormalizer);\n    });\n  }).filter(function (element) {\n    if (selected !== undefined) {\n      return selected === computeAriaSelected(element);\n    } // don't care if aria attributes are unspecified\n\n\n    return true;\n  }).filter(function (element) {\n    return hidden === false ? isInaccessible(element, {\n      isSubtreeInaccessible: cachedIsSubtreeInaccessible\n    }) === false : true;\n  }).filter(function (element) {\n    if (name === undefined) {\n      // Don't care\n      return true;\n    }\n\n    return matches(Object(dom_accessibility_api__WEBPACK_IMPORTED_MODULE_2__[\"computeAccessibleName\"])(element), element, name, function (text) {\n      return text;\n    });\n  });\n}\n\nvar getMultipleError$6 = function (c, role) {\n  return \"Found multiple elements with the role \\\"\" + role + \"\\\"\";\n};\n\nvar getMissingError$5 = function (container, role, _temp2) {\n  var _ref2 = _temp2 === void 0 ? {} : _temp2,\n      _ref2$hidden = _ref2.hidden,\n      hidden = _ref2$hidden === void 0 ? getConfig().defaultHidden : _ref2$hidden,\n      name = _ref2.name;\n\n  if (getConfig()._disableExpensiveErrorDiagnostics) {\n    return \"Unable to find role=\\\"\" + role + \"\\\"\";\n  }\n\n  var roles = '';\n  Array.from(container.children).forEach(function (childElement) {\n    roles += prettyRoles(childElement, {\n      hidden: hidden,\n      includeName: name !== undefined\n    });\n  });\n  var roleMessage;\n\n  if (roles.length === 0) {\n    if (hidden === false) {\n      roleMessage = 'There are no accessible roles. But there might be some inaccessible roles. ' + 'If you wish to access them, then set the `hidden` option to `true`. ' + 'Learn more about this here: https://testing-library.com/docs/dom-testing-library/api-queries#byrole';\n    } else {\n      roleMessage = 'There are no available roles.';\n    }\n  } else {\n    roleMessage = (\"\\nHere are the \" + (hidden === false ? 'accessible' : 'available') + \" roles:\\n\\n  \" + roles.replace(/\\n/g, '\\n  ').replace(/\\n\\s\\s\\n/g, '\\n\\n') + \"\\n\").trim();\n  }\n\n  var nameHint = '';\n\n  if (name === undefined) {\n    nameHint = '';\n  } else if (typeof name === 'string') {\n    nameHint = \" and name \\\"\" + name + \"\\\"\";\n  } else {\n    nameHint = \" and name `\" + name + \"`\";\n  }\n\n  return (\"\\nUnable to find an \" + (hidden === false ? 'accessible ' : '') + \"element with the role \\\"\" + role + \"\\\"\" + nameHint + \"\\n\\n\" + roleMessage).trim();\n};\n\nvar queryAllByRoleWithSuggestions = wrapAllByQueryWithSuggestion(queryAllByRole, queryAllByRole.name, 'queryAll');\n\nvar _buildQueries$5 = buildQueries(queryAllByRole, getMultipleError$6, getMissingError$5),\n    queryByRole = _buildQueries$5[0],\n    getAllByRole = _buildQueries$5[1],\n    getByRole = _buildQueries$5[2],\n    findAllByRole = _buildQueries$5[3],\n    findByRole = _buildQueries$5[4];\n\nvar getTestIdAttribute = function () {\n  return getConfig().testIdAttribute;\n};\n\nfunction queryAllByTestId() {\n  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n    args[_key] = arguments[_key];\n  }\n\n  return queryAllByAttribute.apply(void 0, [getTestIdAttribute()].concat(args));\n}\n\nvar getMultipleError$7 = function (c, id) {\n  return \"Found multiple elements by: [\" + getTestIdAttribute() + \"=\\\"\" + id + \"\\\"]\";\n};\n\nvar getMissingError$6 = function (c, id) {\n  return \"Unable to find an element by: [\" + getTestIdAttribute() + \"=\\\"\" + id + \"\\\"]\";\n};\n\nvar queryAllByTestIdWithSuggestions = wrapAllByQueryWithSuggestion(queryAllByTestId, queryAllByTestId.name, 'queryAll');\n\nvar _buildQueries$6 = buildQueries(queryAllByTestId, getMultipleError$7, getMissingError$6),\n    queryByTestId = _buildQueries$6[0],\n    getAllByTestId = _buildQueries$6[1],\n    getByTestId = _buildQueries$6[2],\n    findAllByTestId = _buildQueries$6[3],\n    findByTestId = _buildQueries$6[4];\n\nvar queries = /*#__PURE__*/Object.freeze({\n  __proto__: null,\n  queryAllByLabelText: queryAllByLabelTextWithSuggestions,\n  queryByLabelText: queryByLabelText,\n  getAllByLabelText: getAllByLabelTextWithSuggestions,\n  getByLabelText: getByLabelTextWithSuggestions,\n  findAllByLabelText: findAllByLabelText,\n  findByLabelText: findByLabelText,\n  queryByPlaceholderText: queryByPlaceholderText,\n  queryAllByPlaceholderText: queryAllByPlaceholderTextWithSuggestions,\n  getByPlaceholderText: getByPlaceholderText,\n  getAllByPlaceholderText: getAllByPlaceholderText,\n  findAllByPlaceholderText: findAllByPlaceholderText,\n  findByPlaceholderText: findByPlaceholderText,\n  queryByText: queryByText,\n  queryAllByText: queryAllByTextWithSuggestions,\n  getByText: getByText,\n  getAllByText: getAllByText,\n  findAllByText: findAllByText,\n  findByText: findByText,\n  queryByDisplayValue: queryByDisplayValue,\n  queryAllByDisplayValue: queryAllByDisplayValueWithSuggestions,\n  getByDisplayValue: getByDisplayValue,\n  getAllByDisplayValue: getAllByDisplayValue,\n  findAllByDisplayValue: findAllByDisplayValue,\n  findByDisplayValue: findByDisplayValue,\n  queryByAltText: queryByAltText,\n  queryAllByAltText: queryAllByAltTextWithSuggestions,\n  getByAltText: getByAltText,\n  getAllByAltText: getAllByAltText,\n  findAllByAltText: findAllByAltText,\n  findByAltText: findByAltText,\n  queryByTitle: queryByTitle,\n  queryAllByTitle: queryAllByTitleWithSuggestions,\n  getByTitle: getByTitle,\n  getAllByTitle: getAllByTitle,\n  findAllByTitle: findAllByTitle,\n  findByTitle: findByTitle,\n  queryByRole: queryByRole,\n  queryAllByRole: queryAllByRoleWithSuggestions,\n  getAllByRole: getAllByRole,\n  getByRole: getByRole,\n  findAllByRole: findAllByRole,\n  findByRole: findByRole,\n  queryByTestId: queryByTestId,\n  queryAllByTestId: queryAllByTestIdWithSuggestions,\n  getByTestId: getByTestId,\n  getAllByTestId: getAllByTestId,\n  findAllByTestId: findAllByTestId,\n  findByTestId: findByTestId\n});\n\n/**\n * @typedef {{[key: string]: Function}} FuncMap\n */\n\n/**\n * @param {HTMLElement} element container\n * @param {FuncMap} queries object of functions\n * @param {Object} initialValue for reducer\n * @returns {FuncMap} returns object of functions bound to container\n */\n\nfunction getQueriesForElement(element, queries$1, initialValue) {\n  if (queries$1 === void 0) {\n    queries$1 = queries;\n  }\n\n  if (initialValue === void 0) {\n    initialValue = {};\n  }\n\n  return Object.keys(queries$1).reduce(function (helpers, key) {\n    var fn = queries$1[key];\n    helpers[key] = fn.bind(null, element);\n    return helpers;\n  }, initialValue);\n}\n\nvar hasWarned$1 = false; // deprecated... TODO: remove this method. People should use a find* query or\n// wait instead the reasoning is that this doesn't really do anything useful\n// that you can't get from using find* or wait.\n\nfunction waitForElement() {\n  return _waitForElement.apply(this, arguments);\n}\n\nfunction _waitForElement() {\n  _waitForElement = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee(callback, options) {\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function (_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            if (!hasWarned$1) {\n              hasWarned$1 = true;\n              console.warn(\"`waitForElement` has been deprecated. Use a `find*` query (preferred: https://testing-library.com/docs/dom-testing-library/api-queries#findby) or use `waitFor` instead: https://testing-library.com/docs/dom-testing-library/api-async#waitfor\");\n            }\n\n            if (callback) {\n              _context.next = 3;\n              break;\n            }\n\n            throw new Error('waitForElement requires a callback as the first parameter');\n\n          case 3:\n            return _context.abrupt(\"return\", waitForWrapper(function () {\n              var result = callback();\n\n              if (!result) {\n                throw new Error('Timed out in waitForElement.');\n              }\n\n              return result;\n            }, options));\n\n          case 4:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _waitForElement.apply(this, arguments);\n}\n/*\neslint\n  require-await: \"off\"\n*/\n\nvar isRemoved = function (result) {\n  return !result || Array.isArray(result) && !result.length;\n}; // Check if the element is not present.\n// As the name implies, waitForElementToBeRemoved should check `present` --> `removed`\n\n\nfunction initialCheck(elements) {\n  if (isRemoved(elements)) {\n    throw new Error('The element(s) given to waitForElementToBeRemoved are already removed. waitForElementToBeRemoved requires that the element(s) exist(s) before waiting for removal.');\n  }\n}\n\nfunction waitForElementToBeRemoved() {\n  return _waitForElementToBeRemoved.apply(this, arguments);\n}\n\nfunction _waitForElementToBeRemoved() {\n  _waitForElementToBeRemoved = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee(callback, options) {\n    var timeoutError, elements, getRemainingElements;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function (_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            // created here so we get a nice stacktrace\n            timeoutError = new Error('Timed out in waitForElementToBeRemoved.');\n\n            if (typeof callback !== 'function') {\n              initialCheck(callback);\n              elements = Array.isArray(callback) ? callback : [callback];\n              getRemainingElements = elements.map(function (element) {\n                var parent = element.parentElement;\n\n                while (parent.parentElement) {\n                  parent = parent.parentElement;\n                }\n\n                return function () {\n                  return parent.contains(element) ? element : null;\n                };\n              });\n\n              callback = function () {\n                return getRemainingElements.map(function (c) {\n                  return c();\n                }).filter(Boolean);\n              };\n            }\n\n            initialCheck(callback());\n            return _context.abrupt(\"return\", waitForWrapper(function () {\n              var result;\n\n              try {\n                result = callback();\n              } catch (error) {\n                if (error.name === 'TestingLibraryElementError') {\n                  return true;\n                }\n\n                throw error;\n              }\n\n              if (!isRemoved(result)) {\n                throw timeoutError;\n              }\n\n              return true;\n            }, options));\n\n          case 4:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _waitForElementToBeRemoved.apply(this, arguments);\n}\n/*\neslint\n  require-await: \"off\"\n*/\n\nvar hasWarned$2 = false; // deprecated... TODO: remove this method. People should use wait instead\n// the reasoning is that waiting for just any DOM change is an implementation\n// detail. People should be waiting for a specific thing to change.\n\nfunction waitForDomChange(_temp) {\n  var _ref = _temp === void 0 ? {} : _temp,\n      _ref$container = _ref.container,\n      container = _ref$container === void 0 ? getDocument() : _ref$container,\n      _ref$timeout = _ref.timeout,\n      timeout = _ref$timeout === void 0 ? getConfig().asyncUtilTimeout : _ref$timeout,\n      _ref$mutationObserver = _ref.mutationObserverOptions,\n      mutationObserverOptions = _ref$mutationObserver === void 0 ? {\n    subtree: true,\n    childList: true,\n    attributes: true,\n    characterData: true\n  } : _ref$mutationObserver;\n\n  if (!hasWarned$2) {\n    hasWarned$2 = true;\n    console.warn(\"`waitForDomChange` has been deprecated. Use `waitFor` instead: https://testing-library.com/docs/dom-testing-library/api-async#waitfor.\");\n  }\n\n  return new Promise(function (resolve, reject) {\n    var timer = setTimeoutFn(function () {\n      onDone(new Error('Timed out in waitForDomChange.'), null);\n    }, timeout);\n\n    var _getWindowFromNode = getWindowFromNode(container),\n        MutationObserver = _getWindowFromNode.MutationObserver;\n\n    var observer = new MutationObserver(function (mutationsList) {\n      onDone(null, mutationsList);\n    });\n    runWithRealTimers(function () {\n      return observer.observe(container, mutationObserverOptions);\n    });\n\n    function onDone(error, result) {\n      clearTimeoutFn(timer);\n      setImmediateFn(function () {\n        return observer.disconnect();\n      });\n\n      if (error) {\n        reject(error);\n      } else {\n        resolve(result);\n      }\n    }\n  });\n}\n\nfunction waitForDomChangeWrapper() {\n  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n    args[_key] = arguments[_key];\n  }\n\n  return getConfig().asyncWrapper(function () {\n    return waitForDomChange.apply(void 0, args);\n  });\n}\n\nvar eventMap = {\n  // Clipboard Events\n  copy: {\n    EventType: 'ClipboardEvent',\n    defaultInit: {\n      bubbles: true,\n      cancelable: true,\n      composed: true\n    }\n  },\n  cut: {\n    EventType: 'ClipboardEvent',\n    defaultInit: {\n      bubbles: true,\n      cancelable: true,\n      composed: true\n    }\n  },\n  paste: {\n    EventType: 'ClipboardEvent',\n    defaultInit: {\n      bubbles: true,\n      cancelable: true,\n      composed: true\n    }\n  },\n  // Composition Events\n  compositionEnd: {\n    EventType: 'CompositionEvent',\n    defaultInit: {\n      bubbles: true,\n      cancelable: true,\n      composed: true\n    }\n  },\n  compositionStart: {\n    EventType: 'CompositionEvent',\n    defaultInit: {\n      bubbles: true,\n      cancelable: true,\n      composed: true\n    }\n  },\n  compositionUpdate: {\n    EventType: 'CompositionEvent',\n    defaultInit: {\n      bubbles: true,\n      cancelable: true,\n      composed: true\n    }\n  },\n  // Keyboard Events\n  keyDown: {\n    EventType: 'KeyboardEvent',\n    defaultInit: {\n      bubbles: true,\n      cancelable: true,\n      charCode: 0,\n      composed: true\n    }\n  },\n  keyPress: {\n    EventType: 'KeyboardEvent',\n    defaultInit: {\n      bubbles: true,\n      cancelable: true,\n      charCode: 0,\n      composed: true\n    }\n  },\n  keyUp: {\n    EventType: 'KeyboardEvent',\n    defaultInit: {\n      bubbles: true,\n      cancelable: true,\n      charCode: 0,\n      composed: true\n    }\n  },\n  // Focus Events\n  focus: {\n    EventType: 'FocusEvent',\n    defaultInit: {\n      bubbles: false,\n      cancelable: false,\n      composed: true\n    }\n  },\n  blur: {\n    EventType: 'FocusEvent',\n    defaultInit: {\n      bubbles: false,\n      cancelable: false,\n      composed: true\n    }\n  },\n  focusIn: {\n    EventType: 'FocusEvent',\n    defaultInit: {\n      bubbles: true,\n      cancelable: false,\n      composed: true\n    }\n  },\n  focusOut: {\n    EventType: 'FocusEvent',\n    defaultInit: {\n      bubbles: true,\n      cancelable: false,\n      composed: true\n    }\n  },\n  // Form Events\n  change: {\n    EventType: 'Event',\n    defaultInit: {\n      bubbles: true,\n      cancelable: false\n    }\n  },\n  input: {\n    EventType: 'InputEvent',\n    defaultInit: {\n      bubbles: true,\n      cancelable: false,\n      composed: true\n    }\n  },\n  invalid: {\n    EventType: 'Event',\n    defaultInit: {\n      bubbles: false,\n      cancelable: true\n    }\n  },\n  submit: {\n    EventType: 'Event',\n    defaultInit: {\n      bubbles: true,\n      cancelable: true\n    }\n  },\n  reset: {\n    EventType: 'Event',\n    defaultInit: {\n      bubbles: true,\n      cancelable: true\n    }\n  },\n  // Mouse Events\n  click: {\n    EventType: 'MouseEvent',\n    defaultInit: {\n      bubbles: true,\n      cancelable: true,\n      button: 0,\n      composed: true\n    }\n  },\n  contextMenu: {\n    EventType: 'MouseEvent',\n    defaultInit: {\n      bubbles: true,\n      cancelable: true,\n      composed: true\n    }\n  },\n  dblClick: {\n    EventType: 'MouseEvent',\n    defaultInit: {\n      bubbles: true,\n      cancelable: true,\n      composed: true\n    }\n  },\n  drag: {\n    EventType: 'DragEvent',\n    defaultInit: {\n      bubbles: true,\n      cancelable: true,\n      composed: true\n    }\n  },\n  dragEnd: {\n    EventType: 'DragEvent',\n    defaultInit: {\n      bubbles: true,\n      cancelable: false,\n      composed: true\n    }\n  },\n  dragEnter: {\n    EventType: 'DragEvent',\n    defaultInit: {\n      bubbles: true,\n      cancelable: true,\n      composed: true\n    }\n  },\n  dragExit: {\n    EventType: 'DragEvent',\n    defaultInit: {\n      bubbles: true,\n      cancelable: false,\n      composed: true\n    }\n  },\n  dragLeave: {\n    EventType: 'DragEvent',\n    defaultInit: {\n      bubbles: true,\n      cancelable: false,\n      composed: true\n    }\n  },\n  dragOver: {\n    EventType: 'DragEvent',\n    defaultInit: {\n      bubbles: true,\n      cancelable: true,\n      composed: true\n    }\n  },\n  dragStart: {\n    EventType: 'DragEvent',\n    defaultInit: {\n      bubbles: true,\n      cancelable: true,\n      composed: true\n    }\n  },\n  drop: {\n    EventType: 'DragEvent',\n    defaultInit: {\n      bubbles: true,\n      cancelable: true,\n      composed: true\n    }\n  },\n  mouseDown: {\n    EventType: 'MouseEvent',\n    defaultInit: {\n      bubbles: true,\n      cancelable: true,\n      composed: true\n    }\n  },\n  mouseEnter: {\n    EventType: 'MouseEvent',\n    defaultInit: {\n      bubbles: false,\n      cancelable: false,\n      composed: true\n    }\n  },\n  mouseLeave: {\n    EventType: 'MouseEvent',\n    defaultInit: {\n      bubbles: false,\n      cancelable: false,\n      composed: true\n    }\n  },\n  mouseMove: {\n    EventType: 'MouseEvent',\n    defaultInit: {\n      bubbles: true,\n      cancelable: true,\n      composed: true\n    }\n  },\n  mouseOut: {\n    EventType: 'MouseEvent',\n    defaultInit: {\n      bubbles: true,\n      cancelable: true,\n      composed: true\n    }\n  },\n  mouseOver: {\n    EventType: 'MouseEvent',\n    defaultInit: {\n      bubbles: true,\n      cancelable: true,\n      composed: true\n    }\n  },\n  mouseUp: {\n    EventType: 'MouseEvent',\n    defaultInit: {\n      bubbles: true,\n      cancelable: true,\n      composed: true\n    }\n  },\n  // Selection Events\n  select: {\n    EventType: 'Event',\n    defaultInit: {\n      bubbles: true,\n      cancelable: false\n    }\n  },\n  // Touch Events\n  touchCancel: {\n    EventType: 'TouchEvent',\n    defaultInit: {\n      bubbles: true,\n      cancelable: false,\n      composed: true\n    }\n  },\n  touchEnd: {\n    EventType: 'TouchEvent',\n    defaultInit: {\n      bubbles: true,\n      cancelable: true,\n      composed: true\n    }\n  },\n  touchMove: {\n    EventType: 'TouchEvent',\n    defaultInit: {\n      bubbles: true,\n      cancelable: true,\n      composed: true\n    }\n  },\n  touchStart: {\n    EventType: 'TouchEvent',\n    defaultInit: {\n      bubbles: true,\n      cancelable: true,\n      composed: true\n    }\n  },\n  // UI Events\n  scroll: {\n    EventType: 'UIEvent',\n    defaultInit: {\n      bubbles: false,\n      cancelable: false\n    }\n  },\n  // Wheel Events\n  wheel: {\n    EventType: 'WheelEvent',\n    defaultInit: {\n      bubbles: true,\n      cancelable: true,\n      composed: true\n    }\n  },\n  // Media Events\n  abort: {\n    EventType: 'Event',\n    defaultInit: {\n      bubbles: false,\n      cancelable: false\n    }\n  },\n  canPlay: {\n    EventType: 'Event',\n    defaultInit: {\n      bubbles: false,\n      cancelable: false\n    }\n  },\n  canPlayThrough: {\n    EventType: 'Event',\n    defaultInit: {\n      bubbles: false,\n      cancelable: false\n    }\n  },\n  durationChange: {\n    EventType: 'Event',\n    defaultInit: {\n      bubbles: false,\n      cancelable: false\n    }\n  },\n  emptied: {\n    EventType: 'Event',\n    defaultInit: {\n      bubbles: false,\n      cancelable: false\n    }\n  },\n  encrypted: {\n    EventType: 'Event',\n    defaultInit: {\n      bubbles: false,\n      cancelable: false\n    }\n  },\n  ended: {\n    EventType: 'Event',\n    defaultInit: {\n      bubbles: false,\n      cancelable: false\n    }\n  },\n  loadedData: {\n    EventType: 'Event',\n    defaultInit: {\n      bubbles: false,\n      cancelable: false\n    }\n  },\n  loadedMetadata: {\n    EventType: 'Event',\n    defaultInit: {\n      bubbles: false,\n      cancelable: false\n    }\n  },\n  loadStart: {\n    EventType: 'ProgressEvent',\n    defaultInit: {\n      bubbles: false,\n      cancelable: false\n    }\n  },\n  pause: {\n    EventType: 'Event',\n    defaultInit: {\n      bubbles: false,\n      cancelable: false\n    }\n  },\n  play: {\n    EventType: 'Event',\n    defaultInit: {\n      bubbles: false,\n      cancelable: false\n    }\n  },\n  playing: {\n    EventType: 'Event',\n    defaultInit: {\n      bubbles: false,\n      cancelable: false\n    }\n  },\n  progress: {\n    EventType: 'ProgressEvent',\n    defaultInit: {\n      bubbles: false,\n      cancelable: false\n    }\n  },\n  rateChange: {\n    EventType: 'Event',\n    defaultInit: {\n      bubbles: false,\n      cancelable: false\n    }\n  },\n  seeked: {\n    EventType: 'Event',\n    defaultInit: {\n      bubbles: false,\n      cancelable: false\n    }\n  },\n  seeking: {\n    EventType: 'Event',\n    defaultInit: {\n      bubbles: false,\n      cancelable: false\n    }\n  },\n  stalled: {\n    EventType: 'Event',\n    defaultInit: {\n      bubbles: false,\n      cancelable: false\n    }\n  },\n  suspend: {\n    EventType: 'Event',\n    defaultInit: {\n      bubbles: false,\n      cancelable: false\n    }\n  },\n  timeUpdate: {\n    EventType: 'Event',\n    defaultInit: {\n      bubbles: false,\n      cancelable: false\n    }\n  },\n  volumeChange: {\n    EventType: 'Event',\n    defaultInit: {\n      bubbles: false,\n      cancelable: false\n    }\n  },\n  waiting: {\n    EventType: 'Event',\n    defaultInit: {\n      bubbles: false,\n      cancelable: false\n    }\n  },\n  // Image Events\n  load: {\n    EventType: 'UIEvent',\n    defaultInit: {\n      bubbles: false,\n      cancelable: false\n    }\n  },\n  error: {\n    EventType: 'Event',\n    defaultInit: {\n      bubbles: false,\n      cancelable: false\n    }\n  },\n  // Animation Events\n  animationStart: {\n    EventType: 'AnimationEvent',\n    defaultInit: {\n      bubbles: true,\n      cancelable: false\n    }\n  },\n  animationEnd: {\n    EventType: 'AnimationEvent',\n    defaultInit: {\n      bubbles: true,\n      cancelable: false\n    }\n  },\n  animationIteration: {\n    EventType: 'AnimationEvent',\n    defaultInit: {\n      bubbles: true,\n      cancelable: false\n    }\n  },\n  // Transition Events\n  transitionEnd: {\n    EventType: 'TransitionEvent',\n    defaultInit: {\n      bubbles: true,\n      cancelable: true\n    }\n  },\n  // pointer events\n  pointerOver: {\n    EventType: 'PointerEvent',\n    defaultInit: {\n      bubbles: true,\n      cancelable: true,\n      composed: true\n    }\n  },\n  pointerEnter: {\n    EventType: 'PointerEvent',\n    defaultInit: {\n      bubbles: false,\n      cancelable: false\n    }\n  },\n  pointerDown: {\n    EventType: 'PointerEvent',\n    defaultInit: {\n      bubbles: true,\n      cancelable: true,\n      composed: true\n    }\n  },\n  pointerMove: {\n    EventType: 'PointerEvent',\n    defaultInit: {\n      bubbles: true,\n      cancelable: true,\n      composed: true\n    }\n  },\n  pointerUp: {\n    EventType: 'PointerEvent',\n    defaultInit: {\n      bubbles: true,\n      cancelable: true,\n      composed: true\n    }\n  },\n  pointerCancel: {\n    EventType: 'PointerEvent',\n    defaultInit: {\n      bubbles: true,\n      cancelable: false,\n      composed: true\n    }\n  },\n  pointerOut: {\n    EventType: 'PointerEvent',\n    defaultInit: {\n      bubbles: true,\n      cancelable: true,\n      composed: true\n    }\n  },\n  pointerLeave: {\n    EventType: 'PointerEvent',\n    defaultInit: {\n      bubbles: false,\n      cancelable: false\n    }\n  },\n  gotPointerCapture: {\n    EventType: 'PointerEvent',\n    defaultInit: {\n      bubbles: false,\n      cancelable: false,\n      composed: true\n    }\n  },\n  lostPointerCapture: {\n    EventType: 'PointerEvent',\n    defaultInit: {\n      bubbles: false,\n      cancelable: false,\n      composed: true\n    }\n  },\n  // history events\n  popState: {\n    EventType: 'PopStateEvent',\n    defaultInit: {\n      bubbles: true,\n      cancelable: false\n    }\n  }\n};\nvar eventAliasMap = {\n  doubleClick: 'dblClick'\n};\n\nfunction fireEvent(element, event) {\n  if (!event) {\n    throw new Error(\"Unable to fire an event - please provide an event object.\");\n  }\n\n  if (!element) {\n    throw new Error(\"Unable to fire a \\\"\" + event.type + \"\\\" event - please provide a DOM element.\");\n  }\n\n  return element.dispatchEvent(event);\n}\n\nvar createEvent = {};\nObject.keys(eventMap).forEach(function (key) {\n  var _eventMap$key = eventMap[key],\n      EventType = _eventMap$key.EventType,\n      defaultInit = _eventMap$key.defaultInit;\n  var eventName = key.toLowerCase();\n\n  createEvent[key] = function (node, init) {\n    if (!node) {\n      throw new Error(\"Unable to fire a \\\"\" + key + \"\\\" event - please provide a DOM element.\");\n    }\n\n    var eventInit = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, defaultInit), init);\n\n    var _eventInit$target = eventInit.target;\n    _eventInit$target = _eventInit$target === void 0 ? {} : _eventInit$target;\n\n    var value = _eventInit$target.value,\n        files = _eventInit$target.files,\n        targetProperties = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_eventInit$target, [\"value\", \"files\"]);\n\n    if (value !== undefined) {\n      setNativeValue(node, value);\n    }\n\n    if (files !== undefined) {\n      // input.files is a read-only property so this is not allowed:\n      // input.files = [file]\n      // so we have to use this workaround to set the property\n      Object.defineProperty(node, 'files', {\n        configurable: true,\n        enumerable: true,\n        writable: true,\n        value: files\n      });\n    }\n\n    Object.assign(node, targetProperties);\n    var window = getWindowFromNode(node);\n    var EventConstructor = window[EventType] || window.Event;\n    var event;\n    /* istanbul ignore else  */\n\n    if (typeof EventConstructor === 'function') {\n      event = new EventConstructor(eventName, eventInit);\n    } else {\n      // IE11 polyfill from https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent#Polyfill\n      event = window.document.createEvent(EventType);\n\n      var bubbles = eventInit.bubbles,\n          cancelable = eventInit.cancelable,\n          detail = eventInit.detail,\n          otherInit = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(eventInit, [\"bubbles\", \"cancelable\", \"detail\"]);\n\n      event.initEvent(eventName, bubbles, cancelable, detail);\n      Object.keys(otherInit).forEach(function (eventKey) {\n        event[eventKey] = otherInit[eventKey];\n      });\n    }\n\n    var dataTransfer = eventInit.dataTransfer;\n\n    if (typeof dataTransfer === 'object') {\n      // DataTransfer is not supported in jsdom: https://github.com/jsdom/jsdom/issues/1568\n\n      /* istanbul ignore if  */\n      if (typeof window.DataTransfer === 'function') {\n        Object.defineProperty(event, 'dataTransfer', {\n          value: Object.assign(new window.DataTransfer(), dataTransfer)\n        });\n      } else {\n        Object.defineProperty(event, 'dataTransfer', {\n          value: dataTransfer\n        });\n      }\n    }\n\n    return event;\n  };\n\n  fireEvent[key] = function (node, init) {\n    return fireEvent(node, createEvent[key](node, init));\n  };\n}); // function written after some investigation here:\n// https://github.com/facebook/react/issues/10135#issuecomment-401496776\n\nfunction setNativeValue(element, value) {\n  var _ref = Object.getOwnPropertyDescriptor(element, 'value') || {},\n      valueSetter = _ref.set;\n\n  var prototype = Object.getPrototypeOf(element);\n\n  var _ref2 = Object.getOwnPropertyDescriptor(prototype, 'value') || {},\n      prototypeValueSetter = _ref2.set;\n\n  if (prototypeValueSetter && valueSetter !== prototypeValueSetter) {\n    prototypeValueSetter.call(element, value);\n  }\n  /* istanbul ignore next (I don't want to bother) */\n  else if (valueSetter) {\n      valueSetter.call(element, value);\n    } else {\n      throw new Error('The given element does not have a value setter');\n    }\n}\n\nObject.keys(eventAliasMap).forEach(function (aliasKey) {\n  var key = eventAliasMap[aliasKey];\n\n  fireEvent[aliasKey] = function () {\n    return fireEvent[key].apply(fireEvent, arguments);\n  };\n});\n/* eslint complexity:[\"error\", 9] */\n\nvar debug = function (element, maxLength, options) {\n  return Array.isArray(element) ? element.forEach(function (el) {\n    return logDOM(el, maxLength, options);\n  }) : logDOM(element, maxLength, options);\n};\n\nvar screen = typeof document !== 'undefined' && document.body ? getQueriesForElement(document.body, queries, {\n  debug: debug\n}) : Object.keys(queries).reduce(function (helpers, key) {\n  helpers[key] = function () {\n    throw new TypeError('For queries bound to document.body a global document has to be available... Learn more: https://testing-library.com/s/screen-global-error');\n  };\n\n  return helpers;\n}, {\n  debug: debug\n});\n\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\"), __webpack_require__(/*! ./../../../../process/browser.js */ \"./node_modules/process/browser.js\")))\n\n//# sourceURL=webpack:///./node_modules/@testing-library/dom/dist/@testing-library/dom.esm.js?");

/***/ }),

/***/ "./node_modules/@testing-library/dom/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@testing-library/dom/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _asyncToGenerator; });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n  try {\n    var info = gen[key](arg);\n    var value = info.value;\n  } catch (error) {\n    reject(error);\n    return;\n  }\n\n  if (info.done) {\n    resolve(value);\n  } else {\n    Promise.resolve(value).then(_next, _throw);\n  }\n}\n\nfunction _asyncToGenerator(fn) {\n  return function () {\n    var self = this,\n        args = arguments;\n    return new Promise(function (resolve, reject) {\n      var gen = fn.apply(self, args);\n\n      function _next(value) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n      }\n\n      function _throw(err) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n      }\n\n      _next(undefined);\n    });\n  };\n}\n\n//# sourceURL=webpack:///./node_modules/@testing-library/dom/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js?");

/***/ }),

/***/ "./node_modules/@testing-library/dom/node_modules/@babel/runtime/helpers/esm/extends.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@testing-library/dom/node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _extends; });\nfunction _extends() {\n  _extends = Object.assign || function (target) {\n    for (var i = 1; i < arguments.length; i++) {\n      var source = arguments[i];\n\n      for (var key in source) {\n        if (Object.prototype.hasOwnProperty.call(source, key)) {\n          target[key] = source[key];\n        }\n      }\n    }\n\n    return target;\n  };\n\n  return _extends.apply(this, arguments);\n}\n\n//# sourceURL=webpack:///./node_modules/@testing-library/dom/node_modules/@babel/runtime/helpers/esm/extends.js?");

/***/ }),

/***/ "./node_modules/@testing-library/dom/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/@testing-library/dom/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _objectWithoutPropertiesLoose; });\nfunction _objectWithoutPropertiesLoose(source, excluded) {\n  if (source == null) return {};\n  var target = {};\n  var sourceKeys = Object.keys(source);\n  var key, i;\n\n  for (i = 0; i < sourceKeys.length; i++) {\n    key = sourceKeys[i];\n    if (excluded.indexOf(key) >= 0) continue;\n    target[key] = source[key];\n  }\n\n  return target;\n}\n\n//# sourceURL=webpack:///./node_modules/@testing-library/dom/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js?");

/***/ }),

/***/ "./node_modules/@testing-library/dom/node_modules/@babel/runtime/regenerator/index.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@testing-library/dom/node_modules/@babel/runtime/regenerator/index.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! regenerator-runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n\n\n//# sourceURL=webpack:///./node_modules/@testing-library/dom/node_modules/@babel/runtime/regenerator/index.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/ariaPropsMap.js":
/*!*****************************************************!*\
  !*** ./node_modules/aria-query/lib/ariaPropsMap.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs3/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime-corejs3/helpers/interopRequireDefault.js\");\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\n\nvar _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/map */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/map.js\"));\n\nvar ariaPropsMap = new _map.default([['aria-activedescendant', {\n  'type': 'id'\n}], ['aria-atomic', {\n  'type': 'boolean'\n}], ['aria-autocomplete', {\n  'type': 'token',\n  'values': ['inline', 'list', 'both', 'none']\n}], ['aria-busy', {\n  'type': 'boolean'\n}], ['aria-checked', {\n  'type': 'tristate'\n}], ['aria-colcount', {\n  type: 'integer'\n}], ['aria-colindex', {\n  type: 'integer'\n}], ['aria-colspan', {\n  type: 'integer'\n}], ['aria-controls', {\n  'type': 'idlist'\n}], ['aria-current', {\n  type: 'token',\n  values: ['page', 'step', 'location', 'date', 'time', true, false]\n}], ['aria-describedby', {\n  'type': 'idlist'\n}], ['aria-details', {\n  'type': 'id'\n}], ['aria-disabled', {\n  'type': 'boolean'\n}], ['aria-dropeffect', {\n  'type': 'tokenlist',\n  'values': ['copy', 'execute', 'link', 'move', 'none', 'popup']\n}], ['aria-errormessage', {\n  'type': 'id'\n}], ['aria-expanded', {\n  'type': 'boolean',\n  'allowundefined': true\n}], ['aria-flowto', {\n  'type': 'idlist'\n}], ['aria-grabbed', {\n  'type': 'boolean',\n  'allowundefined': true\n}], ['aria-haspopup', {\n  'type': 'token',\n  'values': [false, true, 'menu', 'listbox', 'tree', 'grid', 'dialog']\n}], ['aria-hidden', {\n  'type': 'boolean',\n  'allowundefined': true\n}], ['aria-invalid', {\n  'type': 'token',\n  'values': ['grammar', false, 'spelling', true]\n}], ['aria-keyshortcuts', {\n  type: 'string'\n}], ['aria-label', {\n  'type': 'string'\n}], ['aria-labelledby', {\n  'type': 'idlist'\n}], ['aria-level', {\n  'type': 'integer'\n}], ['aria-live', {\n  'type': 'token',\n  'values': ['assertive', 'off', 'polite']\n}], ['aria-modal', {\n  type: 'boolean'\n}], ['aria-multiline', {\n  'type': 'boolean'\n}], ['aria-multiselectable', {\n  'type': 'boolean'\n}], ['aria-orientation', {\n  'type': 'token',\n  'values': ['vertical', 'undefined', 'horizontal']\n}], ['aria-owns', {\n  'type': 'idlist'\n}], ['aria-placeholder', {\n  type: 'string'\n}], ['aria-posinset', {\n  'type': 'integer'\n}], ['aria-pressed', {\n  'type': 'tristate'\n}], ['aria-readonly', {\n  'type': 'boolean'\n}], ['aria-relevant', {\n  'type': 'tokenlist',\n  'values': ['additions', 'all', 'removals', 'text']\n}], ['aria-required', {\n  'type': 'boolean'\n}], ['aria-roledescription', {\n  type: 'string'\n}], ['aria-rowcount', {\n  type: 'integer'\n}], ['aria-rowindex', {\n  type: 'integer'\n}], ['aria-rowspan', {\n  type: 'integer'\n}], ['aria-selected', {\n  'type': 'boolean',\n  'allowundefined': true\n}], ['aria-setsize', {\n  'type': 'integer'\n}], ['aria-sort', {\n  'type': 'token',\n  'values': ['ascending', 'descending', 'none', 'other']\n}], ['aria-valuemax', {\n  'type': 'number'\n}], ['aria-valuemin', {\n  'type': 'number'\n}], ['aria-valuenow', {\n  'type': 'number'\n}], ['aria-valuetext', {\n  'type': 'string'\n}]]);\nvar _default = ariaPropsMap;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/ariaPropsMap.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/domMap.js":
/*!***********************************************!*\
  !*** ./node_modules/aria-query/lib/domMap.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs3/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime-corejs3/helpers/interopRequireDefault.js\");\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\n\nvar _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/map */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/map.js\"));\n\nvar domMap = new _map.default([['a', {\n  reserved: false\n}], ['abbr', {\n  reserved: false\n}], ['acronym', {\n  reserved: false\n}], ['address', {\n  reserved: false\n}], ['applet', {\n  reserved: false\n}], ['area', {\n  reserved: false\n}], ['article', {\n  reserved: false\n}], ['aside', {\n  reserved: false\n}], ['audio', {\n  reserved: false\n}], ['b', {\n  reserved: false\n}], ['base', {\n  reserved: true\n}], ['bdi', {\n  reserved: false\n}], ['bdo', {\n  reserved: false\n}], ['big', {\n  reserved: false\n}], ['blink', {\n  reserved: false\n}], ['blockquote', {\n  reserved: false\n}], ['body', {\n  reserved: false\n}], ['br', {\n  reserved: false\n}], ['button', {\n  reserved: false\n}], ['canvas', {\n  reserved: false\n}], ['caption', {\n  reserved: false\n}], ['center', {\n  reserved: false\n}], ['cite', {\n  reserved: false\n}], ['code', {\n  reserved: false\n}], ['col', {\n  reserved: true\n}], ['colgroup', {\n  reserved: true\n}], ['content', {\n  reserved: false\n}], ['data', {\n  reserved: false\n}], ['datalist', {\n  reserved: false\n}], ['dd', {\n  reserved: false\n}], ['del', {\n  reserved: false\n}], ['details', {\n  reserved: false\n}], ['dfn', {\n  reserved: false\n}], ['dialog', {\n  reserved: false\n}], ['dir', {\n  reserved: false\n}], ['div', {\n  reserved: false\n}], ['dl', {\n  reserved: false\n}], ['dt', {\n  reserved: false\n}], ['em', {\n  reserved: false\n}], ['embed', {\n  reserved: false\n}], ['fieldset', {\n  reserved: false\n}], ['figcaption', {\n  reserved: false\n}], ['figure', {\n  reserved: false\n}], ['font', {\n  reserved: false\n}], ['footer', {\n  reserved: false\n}], ['form', {\n  reserved: false\n}], ['frame', {\n  reserved: false\n}], ['frameset', {\n  reserved: false\n}], ['h1', {\n  reserved: false\n}], ['h2', {\n  reserved: false\n}], ['h3', {\n  reserved: false\n}], ['h4', {\n  reserved: false\n}], ['h5', {\n  reserved: false\n}], ['h6', {\n  reserved: false\n}], ['head', {\n  reserved: true\n}], ['header', {\n  reserved: false\n}], ['hgroup', {\n  reserved: false\n}], ['hr', {\n  reserved: false\n}], ['html', {\n  reserved: true\n}], ['i', {\n  reserved: false\n}], ['iframe', {\n  reserved: false\n}], ['img', {\n  reserved: false\n}], ['input', {\n  reserved: false\n}], ['ins', {\n  reserved: false\n}], ['kbd', {\n  reserved: false\n}], ['keygen', {\n  reserved: false\n}], ['label', {\n  reserved: false\n}], ['legend', {\n  reserved: false\n}], ['li', {\n  reserved: false\n}], ['link', {\n  reserved: true\n}], ['main', {\n  reserved: false\n}], ['map', {\n  reserved: false\n}], ['mark', {\n  reserved: false\n}], ['marquee', {\n  reserved: false\n}], ['menu', {\n  reserved: false\n}], ['menuitem', {\n  reserved: false\n}], ['meta', {\n  reserved: true\n}], ['meter', {\n  reserved: false\n}], ['nav', {\n  reserved: false\n}], ['noembed', {\n  reserved: true\n}], ['noscript', {\n  reserved: true\n}], ['object', {\n  reserved: false\n}], ['ol', {\n  reserved: false\n}], ['optgroup', {\n  reserved: false\n}], ['option', {\n  reserved: false\n}], ['output', {\n  reserved: false\n}], ['p', {\n  reserved: false\n}], ['param', {\n  reserved: true\n}], ['picture', {\n  reserved: true\n}], ['pre', {\n  reserved: false\n}], ['progress', {\n  reserved: false\n}], ['q', {\n  reserved: false\n}], ['rp', {\n  reserved: false\n}], ['rt', {\n  reserved: false\n}], ['rtc', {\n  reserved: false\n}], ['ruby', {\n  reserved: false\n}], ['s', {\n  reserved: false\n}], ['samp', {\n  reserved: false\n}], ['script', {\n  reserved: true\n}], ['section', {\n  reserved: false\n}], ['select', {\n  reserved: false\n}], ['small', {\n  reserved: false\n}], ['source', {\n  reserved: true\n}], ['spacer', {\n  reserved: false\n}], ['span', {\n  reserved: false\n}], ['strike', {\n  reserved: false\n}], ['strong', {\n  reserved: false\n}], ['style', {\n  reserved: true\n}], ['sub', {\n  reserved: false\n}], ['summary', {\n  reserved: false\n}], ['sup', {\n  reserved: false\n}], ['table', {\n  reserved: false\n}], ['tbody', {\n  reserved: false\n}], ['td', {\n  reserved: false\n}], ['textarea', {\n  reserved: false\n}], ['tfoot', {\n  reserved: false\n}], ['th', {\n  reserved: false\n}], ['thead', {\n  reserved: false\n}], ['time', {\n  reserved: false\n}], ['title', {\n  reserved: true\n}], ['tr', {\n  reserved: false\n}], ['track', {\n  reserved: true\n}], ['tt', {\n  reserved: false\n}], ['u', {\n  reserved: false\n}], ['ul', {\n  reserved: false\n}], ['var', {\n  reserved: false\n}], ['video', {\n  reserved: false\n}], ['wbr', {\n  reserved: false\n}], ['xmp', {\n  reserved: false\n}]]);\nvar _default = domMap;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/domMap.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/elementRoleMap.js":
/*!*******************************************************!*\
  !*** ./node_modules/aria-query/lib/elementRoleMap.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs3/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime-corejs3/helpers/interopRequireDefault.js\");\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\n\nvar _set = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/set */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/set.js\"));\n\nvar _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs3/helpers/slicedToArray */ \"./node_modules/@babel/runtime-corejs3/helpers/slicedToArray.js\"));\n\nvar _entries = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/entries */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/instance/entries.js\"));\n\nvar _find = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js\"));\n\nvar _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/json/stringify */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/json/stringify.js\"));\n\nvar _concat = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js\"));\n\nvar _keys = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/keys */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/instance/keys.js\"));\n\nvar _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs3/helpers/toConsumableArray */ \"./node_modules/@babel/runtime-corejs3/helpers/toConsumableArray.js\"));\n\nvar _forEach = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/for-each */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js\"));\n\nvar _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/map */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/map.js\"));\n\nvar _rolesMap = _interopRequireDefault(__webpack_require__(/*! ./rolesMap */ \"./node_modules/aria-query/lib/rolesMap.js\"));\n\nvar _context;\n\nvar elementRoleMap = new _map.default([]);\n(0, _forEach.default)(_context = (0, _toConsumableArray2.default)((0, _keys.default)(_rolesMap.default).call(_rolesMap.default))).call(_context, function (key) {\n  var role = _rolesMap.default.get(key);\n\n  if (role) {\n    var _context2, _context3;\n\n    (0, _forEach.default)(_context2 = (0, _concat.default)(_context3 = []).call(_context3, (0, _toConsumableArray2.default)(role.baseConcepts), (0, _toConsumableArray2.default)(role.relatedConcepts))).call(_context2, function (relation) {\n      if (relation.module === 'HTML') {\n        var concept = relation.concept;\n\n        if (concept) {\n          var _context4;\n\n          var conceptStr = (0, _stringify.default)(concept);\n          var roles = ((0, _find.default)(_context4 = (0, _toConsumableArray2.default)((0, _entries.default)(elementRoleMap).call(elementRoleMap))).call(_context4, function (_ref) {\n            var _ref2 = (0, _slicedToArray2.default)(_ref, 2),\n                key = _ref2[0],\n                value = _ref2[1];\n\n            return (0, _stringify.default)(key) === conceptStr;\n          }) || [])[1];\n\n          if (!roles) {\n            roles = new _set.default([]);\n          }\n\n          roles.add(key);\n          elementRoleMap.set(concept, roles);\n        }\n      }\n    });\n  }\n});\nvar _default = elementRoleMap;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/elementRoleMap.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/abstract/commandRole.js":
/*!***********************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/abstract/commandRole.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar commandRole = {\n  abstract: true,\n  accessibleNameRequired: false,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {},\n  relatedConcepts: [{\n    module: 'HTML',\n    concept: {\n      name: 'menuitem'\n    }\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'widget']]\n};\nvar _default = commandRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/abstract/commandRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/abstract/compositeRole.js":
/*!*************************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/abstract/compositeRole.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar compositeRole = {\n  abstract: true,\n  accessibleNameRequired: false,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {\n    'aria-activedescendant': null\n  },\n  relatedConcepts: [],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'widget']]\n};\nvar _default = compositeRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/abstract/compositeRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/abstract/inputRole.js":
/*!*********************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/abstract/inputRole.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar inputRole = {\n  abstract: true,\n  accessibleNameRequired: false,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {},\n  relatedConcepts: [{\n    module: 'XForms',\n    concept: {\n      name: 'input'\n    }\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'widget']]\n};\nvar _default = inputRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/abstract/inputRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/abstract/landmarkRole.js":
/*!************************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/abstract/landmarkRole.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar landmarkRole = {\n  abstract: true,\n  accessibleNameRequired: false,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {},\n  relatedConcepts: [],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'structure', 'section']]\n};\nvar _default = landmarkRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/abstract/landmarkRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/abstract/rangeRole.js":
/*!*********************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/abstract/rangeRole.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar rangeRole = {\n  abstract: true,\n  accessibleNameRequired: false,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {\n    'aria-valuemax': null,\n    'aria-valuemin': null,\n    'aria-valuenow': null,\n    'aria-valuetext': null\n  },\n  relatedConcepts: [],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'widget']]\n};\nvar _default = rangeRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/abstract/rangeRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/abstract/roletypeRole.js":
/*!************************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/abstract/roletypeRole.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar roletypeRole = {\n  abstract: true,\n  accessibleNameRequired: false,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {\n    'aria-atomic': null,\n    'aria-busy': null,\n    'aria-controls': null,\n    'aria-current': null,\n    'aria-describedby': null,\n    'aria-details': null,\n    'aria-disabled': null,\n    'aria-dropeffect': null,\n    'aria-errormessage': null,\n    'aria-flowto': null,\n    'aria-grabbed': null,\n    'aria-haspopup': null,\n    'aria-hidden': null,\n    'aria-invalid': null,\n    'aria-keyshortcuts': null,\n    'aria-label': null,\n    'aria-labelledby': null,\n    'aria-live': null,\n    'aria-owns': null,\n    'aria-relevant': null,\n    'aria-roledescription': null\n  },\n  relatedConcepts: [{\n    module: 'XHTML',\n    concept: {\n      name: 'role'\n    }\n  }, {\n    module: 'HTML',\n    concept: {\n      name: 'rel'\n    }\n  }, {\n    module: 'Dublin Core',\n    concept: {\n      name: 'type'\n    }\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: []\n};\nvar _default = roletypeRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/abstract/roletypeRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/abstract/sectionRole.js":
/*!***********************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/abstract/sectionRole.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar sectionRole = {\n  abstract: true,\n  accessibleNameRequired: false,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: [],\n  props: {\n    'aria-expanded': null\n  },\n  relatedConcepts: [{\n    module: 'DTB',\n    concept: {\n      name: 'frontmatter'\n    }\n  }, {\n    module: 'DTB',\n    concept: {\n      name: 'level'\n    }\n  }, {\n    module: 'SMIL',\n    concept: {\n      name: 'level'\n    }\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'structure']]\n};\nvar _default = sectionRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/abstract/sectionRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/abstract/sectionheadRole.js":
/*!***************************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/abstract/sectionheadRole.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar sectionheadRole = {\n  abstract: true,\n  accessibleNameRequired: false,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author', 'contents'],\n  props: {\n    'aria-expanded': null\n  },\n  relatedConcepts: [],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'structure']]\n};\nvar _default = sectionheadRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/abstract/sectionheadRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/abstract/selectRole.js":
/*!**********************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/abstract/selectRole.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar selectRole = {\n  abstract: true,\n  accessibleNameRequired: false,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {\n    'aria-orientation': null\n  },\n  relatedConcepts: [],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'widget', 'composite'], ['roletype', 'structure', 'section', 'group']]\n};\nvar _default = selectRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/abstract/selectRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/abstract/structureRole.js":
/*!*************************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/abstract/structureRole.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar structureRole = {\n  abstract: true,\n  accessibleNameRequired: false,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: [],\n  props: {},\n  relatedConcepts: [],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype']]\n};\nvar _default = structureRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/abstract/structureRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/abstract/widgetRole.js":
/*!**********************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/abstract/widgetRole.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar widgetRole = {\n  abstract: true,\n  accessibleNameRequired: false,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: [],\n  props: {},\n  relatedConcepts: [],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype']]\n};\nvar _default = widgetRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/abstract/widgetRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/abstract/windowRole.js":
/*!**********************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/abstract/windowRole.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar windowRole = {\n  abstract: true,\n  accessibleNameRequired: false,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {\n    'aria-expanded': null,\n    'aria-modal': null\n  },\n  relatedConcepts: [],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype']]\n};\nvar _default = windowRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/abstract/windowRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/ariaAbstractRoles.js":
/*!********************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/ariaAbstractRoles.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs3/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime-corejs3/helpers/interopRequireDefault.js\");\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\n\nvar _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/map */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/map.js\"));\n\nvar _commandRole = _interopRequireDefault(__webpack_require__(/*! ./abstract/commandRole */ \"./node_modules/aria-query/lib/etc/roles/abstract/commandRole.js\"));\n\nvar _compositeRole = _interopRequireDefault(__webpack_require__(/*! ./abstract/compositeRole */ \"./node_modules/aria-query/lib/etc/roles/abstract/compositeRole.js\"));\n\nvar _inputRole = _interopRequireDefault(__webpack_require__(/*! ./abstract/inputRole */ \"./node_modules/aria-query/lib/etc/roles/abstract/inputRole.js\"));\n\nvar _landmarkRole = _interopRequireDefault(__webpack_require__(/*! ./abstract/landmarkRole */ \"./node_modules/aria-query/lib/etc/roles/abstract/landmarkRole.js\"));\n\nvar _rangeRole = _interopRequireDefault(__webpack_require__(/*! ./abstract/rangeRole */ \"./node_modules/aria-query/lib/etc/roles/abstract/rangeRole.js\"));\n\nvar _roletypeRole = _interopRequireDefault(__webpack_require__(/*! ./abstract/roletypeRole */ \"./node_modules/aria-query/lib/etc/roles/abstract/roletypeRole.js\"));\n\nvar _sectionRole = _interopRequireDefault(__webpack_require__(/*! ./abstract/sectionRole */ \"./node_modules/aria-query/lib/etc/roles/abstract/sectionRole.js\"));\n\nvar _sectionheadRole = _interopRequireDefault(__webpack_require__(/*! ./abstract/sectionheadRole */ \"./node_modules/aria-query/lib/etc/roles/abstract/sectionheadRole.js\"));\n\nvar _selectRole = _interopRequireDefault(__webpack_require__(/*! ./abstract/selectRole */ \"./node_modules/aria-query/lib/etc/roles/abstract/selectRole.js\"));\n\nvar _structureRole = _interopRequireDefault(__webpack_require__(/*! ./abstract/structureRole */ \"./node_modules/aria-query/lib/etc/roles/abstract/structureRole.js\"));\n\nvar _widgetRole = _interopRequireDefault(__webpack_require__(/*! ./abstract/widgetRole */ \"./node_modules/aria-query/lib/etc/roles/abstract/widgetRole.js\"));\n\nvar _windowRole = _interopRequireDefault(__webpack_require__(/*! ./abstract/windowRole */ \"./node_modules/aria-query/lib/etc/roles/abstract/windowRole.js\"));\n\nvar ariaAbstractRoles = new _map.default([['command', _commandRole.default], ['composite', _compositeRole.default], ['input', _inputRole.default], ['landmark', _landmarkRole.default], ['range', _rangeRole.default], ['roletype', _roletypeRole.default], ['section', _sectionRole.default], ['sectionhead', _sectionheadRole.default], ['select', _selectRole.default], ['structure', _structureRole.default], ['widget', _widgetRole.default], ['window', _windowRole.default]]);\nvar _default = ariaAbstractRoles;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/ariaAbstractRoles.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/ariaDpubRoles.js":
/*!****************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/ariaDpubRoles.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs3/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime-corejs3/helpers/interopRequireDefault.js\");\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\n\nvar _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/map */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/map.js\"));\n\nvar _docAbstractRole = _interopRequireDefault(__webpack_require__(/*! ./dpub/docAbstractRole */ \"./node_modules/aria-query/lib/etc/roles/dpub/docAbstractRole.js\"));\n\nvar _docAcknowledgmentsRole = _interopRequireDefault(__webpack_require__(/*! ./dpub/docAcknowledgmentsRole */ \"./node_modules/aria-query/lib/etc/roles/dpub/docAcknowledgmentsRole.js\"));\n\nvar _docAfterwordRole = _interopRequireDefault(__webpack_require__(/*! ./dpub/docAfterwordRole */ \"./node_modules/aria-query/lib/etc/roles/dpub/docAfterwordRole.js\"));\n\nvar _docAppendixRole = _interopRequireDefault(__webpack_require__(/*! ./dpub/docAppendixRole */ \"./node_modules/aria-query/lib/etc/roles/dpub/docAppendixRole.js\"));\n\nvar _docBacklinkRole = _interopRequireDefault(__webpack_require__(/*! ./dpub/docBacklinkRole */ \"./node_modules/aria-query/lib/etc/roles/dpub/docBacklinkRole.js\"));\n\nvar _docBiblioentryRole = _interopRequireDefault(__webpack_require__(/*! ./dpub/docBiblioentryRole */ \"./node_modules/aria-query/lib/etc/roles/dpub/docBiblioentryRole.js\"));\n\nvar _docBibliographyRole = _interopRequireDefault(__webpack_require__(/*! ./dpub/docBibliographyRole */ \"./node_modules/aria-query/lib/etc/roles/dpub/docBibliographyRole.js\"));\n\nvar _docBibliorefRole = _interopRequireDefault(__webpack_require__(/*! ./dpub/docBibliorefRole */ \"./node_modules/aria-query/lib/etc/roles/dpub/docBibliorefRole.js\"));\n\nvar _docChapterRole = _interopRequireDefault(__webpack_require__(/*! ./dpub/docChapterRole */ \"./node_modules/aria-query/lib/etc/roles/dpub/docChapterRole.js\"));\n\nvar _docColophonRole = _interopRequireDefault(__webpack_require__(/*! ./dpub/docColophonRole */ \"./node_modules/aria-query/lib/etc/roles/dpub/docColophonRole.js\"));\n\nvar _docConclusionRole = _interopRequireDefault(__webpack_require__(/*! ./dpub/docConclusionRole */ \"./node_modules/aria-query/lib/etc/roles/dpub/docConclusionRole.js\"));\n\nvar _docCoverRole = _interopRequireDefault(__webpack_require__(/*! ./dpub/docCoverRole */ \"./node_modules/aria-query/lib/etc/roles/dpub/docCoverRole.js\"));\n\nvar _docCreditRole = _interopRequireDefault(__webpack_require__(/*! ./dpub/docCreditRole */ \"./node_modules/aria-query/lib/etc/roles/dpub/docCreditRole.js\"));\n\nvar _docCreditsRole = _interopRequireDefault(__webpack_require__(/*! ./dpub/docCreditsRole */ \"./node_modules/aria-query/lib/etc/roles/dpub/docCreditsRole.js\"));\n\nvar _docDedicationRole = _interopRequireDefault(__webpack_require__(/*! ./dpub/docDedicationRole */ \"./node_modules/aria-query/lib/etc/roles/dpub/docDedicationRole.js\"));\n\nvar _docEndnoteRole = _interopRequireDefault(__webpack_require__(/*! ./dpub/docEndnoteRole */ \"./node_modules/aria-query/lib/etc/roles/dpub/docEndnoteRole.js\"));\n\nvar _docEndnotesRole = _interopRequireDefault(__webpack_require__(/*! ./dpub/docEndnotesRole */ \"./node_modules/aria-query/lib/etc/roles/dpub/docEndnotesRole.js\"));\n\nvar _docEpigraphRole = _interopRequireDefault(__webpack_require__(/*! ./dpub/docEpigraphRole */ \"./node_modules/aria-query/lib/etc/roles/dpub/docEpigraphRole.js\"));\n\nvar _docEpilogueRole = _interopRequireDefault(__webpack_require__(/*! ./dpub/docEpilogueRole */ \"./node_modules/aria-query/lib/etc/roles/dpub/docEpilogueRole.js\"));\n\nvar _docErrataRole = _interopRequireDefault(__webpack_require__(/*! ./dpub/docErrataRole */ \"./node_modules/aria-query/lib/etc/roles/dpub/docErrataRole.js\"));\n\nvar _docExampleRole = _interopRequireDefault(__webpack_require__(/*! ./dpub/docExampleRole */ \"./node_modules/aria-query/lib/etc/roles/dpub/docExampleRole.js\"));\n\nvar _docFootnoteRole = _interopRequireDefault(__webpack_require__(/*! ./dpub/docFootnoteRole */ \"./node_modules/aria-query/lib/etc/roles/dpub/docFootnoteRole.js\"));\n\nvar _docForewordRole = _interopRequireDefault(__webpack_require__(/*! ./dpub/docForewordRole */ \"./node_modules/aria-query/lib/etc/roles/dpub/docForewordRole.js\"));\n\nvar _docGlossaryRole = _interopRequireDefault(__webpack_require__(/*! ./dpub/docGlossaryRole */ \"./node_modules/aria-query/lib/etc/roles/dpub/docGlossaryRole.js\"));\n\nvar _docGlossrefRole = _interopRequireDefault(__webpack_require__(/*! ./dpub/docGlossrefRole */ \"./node_modules/aria-query/lib/etc/roles/dpub/docGlossrefRole.js\"));\n\nvar _docIndexRole = _interopRequireDefault(__webpack_require__(/*! ./dpub/docIndexRole */ \"./node_modules/aria-query/lib/etc/roles/dpub/docIndexRole.js\"));\n\nvar _docIntroductionRole = _interopRequireDefault(__webpack_require__(/*! ./dpub/docIntroductionRole */ \"./node_modules/aria-query/lib/etc/roles/dpub/docIntroductionRole.js\"));\n\nvar _docNoterefRole = _interopRequireDefault(__webpack_require__(/*! ./dpub/docNoterefRole */ \"./node_modules/aria-query/lib/etc/roles/dpub/docNoterefRole.js\"));\n\nvar _docNoticeRole = _interopRequireDefault(__webpack_require__(/*! ./dpub/docNoticeRole */ \"./node_modules/aria-query/lib/etc/roles/dpub/docNoticeRole.js\"));\n\nvar _docPagebreakRole = _interopRequireDefault(__webpack_require__(/*! ./dpub/docPagebreakRole */ \"./node_modules/aria-query/lib/etc/roles/dpub/docPagebreakRole.js\"));\n\nvar _docPagelistRole = _interopRequireDefault(__webpack_require__(/*! ./dpub/docPagelistRole */ \"./node_modules/aria-query/lib/etc/roles/dpub/docPagelistRole.js\"));\n\nvar _docPartRole = _interopRequireDefault(__webpack_require__(/*! ./dpub/docPartRole */ \"./node_modules/aria-query/lib/etc/roles/dpub/docPartRole.js\"));\n\nvar _docPrefaceRole = _interopRequireDefault(__webpack_require__(/*! ./dpub/docPrefaceRole */ \"./node_modules/aria-query/lib/etc/roles/dpub/docPrefaceRole.js\"));\n\nvar _docPrologueRole = _interopRequireDefault(__webpack_require__(/*! ./dpub/docPrologueRole */ \"./node_modules/aria-query/lib/etc/roles/dpub/docPrologueRole.js\"));\n\nvar _docPullquoteRole = _interopRequireDefault(__webpack_require__(/*! ./dpub/docPullquoteRole */ \"./node_modules/aria-query/lib/etc/roles/dpub/docPullquoteRole.js\"));\n\nvar _docQnaRole = _interopRequireDefault(__webpack_require__(/*! ./dpub/docQnaRole */ \"./node_modules/aria-query/lib/etc/roles/dpub/docQnaRole.js\"));\n\nvar _docSubtitleRole = _interopRequireDefault(__webpack_require__(/*! ./dpub/docSubtitleRole */ \"./node_modules/aria-query/lib/etc/roles/dpub/docSubtitleRole.js\"));\n\nvar _docTipRole = _interopRequireDefault(__webpack_require__(/*! ./dpub/docTipRole */ \"./node_modules/aria-query/lib/etc/roles/dpub/docTipRole.js\"));\n\nvar _docTocRole = _interopRequireDefault(__webpack_require__(/*! ./dpub/docTocRole */ \"./node_modules/aria-query/lib/etc/roles/dpub/docTocRole.js\"));\n\nvar ariaDpubRoles = new _map.default([['doc-abstract', _docAbstractRole.default], ['doc-acknowledgments', _docAcknowledgmentsRole.default], ['doc-afterword', _docAfterwordRole.default], ['doc-appendix', _docAppendixRole.default], ['doc-backlink', _docBacklinkRole.default], ['doc-biblioentry', _docBiblioentryRole.default], ['doc-bibliography', _docBibliographyRole.default], ['doc-biblioref', _docBibliorefRole.default], ['doc-chapter', _docChapterRole.default], ['doc-colophon', _docColophonRole.default], ['doc-conclusion', _docConclusionRole.default], ['doc-cover', _docCoverRole.default], ['doc-credit', _docCreditRole.default], ['doc-credits', _docCreditsRole.default], ['doc-dedication', _docDedicationRole.default], ['doc-endnote', _docEndnoteRole.default], ['doc-endnotes', _docEndnotesRole.default], ['doc-epigraph', _docEpigraphRole.default], ['doc-epilogue', _docEpilogueRole.default], ['doc-errata', _docErrataRole.default], ['doc-example', _docExampleRole.default], ['doc-footnote', _docFootnoteRole.default], ['doc-foreword', _docForewordRole.default], ['doc-glossary', _docGlossaryRole.default], ['doc-glossref', _docGlossrefRole.default], ['doc-index', _docIndexRole.default], ['doc-introduction', _docIntroductionRole.default], ['doc-noteref', _docNoterefRole.default], ['doc-notice', _docNoticeRole.default], ['doc-pagebreak', _docPagebreakRole.default], ['doc-pagelist', _docPagelistRole.default], ['doc-part', _docPartRole.default], ['doc-preface', _docPrefaceRole.default], ['doc-prologue', _docPrologueRole.default], ['doc-pullquote', _docPullquoteRole.default], ['doc-qna', _docQnaRole.default], ['doc-subtitle', _docSubtitleRole.default], ['doc-tip', _docTipRole.default], ['doc-toc', _docTocRole.default]]);\nvar _default = ariaDpubRoles;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/ariaDpubRoles.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/ariaLiteralRoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/ariaLiteralRoles.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs3/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime-corejs3/helpers/interopRequireDefault.js\");\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\n\nvar _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/map */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/map.js\"));\n\nvar _alertRole = _interopRequireDefault(__webpack_require__(/*! ./literal/alertRole */ \"./node_modules/aria-query/lib/etc/roles/literal/alertRole.js\"));\n\nvar _alertdialogRole = _interopRequireDefault(__webpack_require__(/*! ./literal/alertdialogRole */ \"./node_modules/aria-query/lib/etc/roles/literal/alertdialogRole.js\"));\n\nvar _applicationRole = _interopRequireDefault(__webpack_require__(/*! ./literal/applicationRole */ \"./node_modules/aria-query/lib/etc/roles/literal/applicationRole.js\"));\n\nvar _articleRole = _interopRequireDefault(__webpack_require__(/*! ./literal/articleRole */ \"./node_modules/aria-query/lib/etc/roles/literal/articleRole.js\"));\n\nvar _bannerRole = _interopRequireDefault(__webpack_require__(/*! ./literal/bannerRole */ \"./node_modules/aria-query/lib/etc/roles/literal/bannerRole.js\"));\n\nvar _buttonRole = _interopRequireDefault(__webpack_require__(/*! ./literal/buttonRole */ \"./node_modules/aria-query/lib/etc/roles/literal/buttonRole.js\"));\n\nvar _cellRole = _interopRequireDefault(__webpack_require__(/*! ./literal/cellRole */ \"./node_modules/aria-query/lib/etc/roles/literal/cellRole.js\"));\n\nvar _checkboxRole = _interopRequireDefault(__webpack_require__(/*! ./literal/checkboxRole */ \"./node_modules/aria-query/lib/etc/roles/literal/checkboxRole.js\"));\n\nvar _columnheaderRole = _interopRequireDefault(__webpack_require__(/*! ./literal/columnheaderRole */ \"./node_modules/aria-query/lib/etc/roles/literal/columnheaderRole.js\"));\n\nvar _comboboxRole = _interopRequireDefault(__webpack_require__(/*! ./literal/comboboxRole */ \"./node_modules/aria-query/lib/etc/roles/literal/comboboxRole.js\"));\n\nvar _complementaryRole = _interopRequireDefault(__webpack_require__(/*! ./literal/complementaryRole */ \"./node_modules/aria-query/lib/etc/roles/literal/complementaryRole.js\"));\n\nvar _contentinfoRole = _interopRequireDefault(__webpack_require__(/*! ./literal/contentinfoRole */ \"./node_modules/aria-query/lib/etc/roles/literal/contentinfoRole.js\"));\n\nvar _definitionRole = _interopRequireDefault(__webpack_require__(/*! ./literal/definitionRole */ \"./node_modules/aria-query/lib/etc/roles/literal/definitionRole.js\"));\n\nvar _dialogRole = _interopRequireDefault(__webpack_require__(/*! ./literal/dialogRole */ \"./node_modules/aria-query/lib/etc/roles/literal/dialogRole.js\"));\n\nvar _directoryRole = _interopRequireDefault(__webpack_require__(/*! ./literal/directoryRole */ \"./node_modules/aria-query/lib/etc/roles/literal/directoryRole.js\"));\n\nvar _documentRole = _interopRequireDefault(__webpack_require__(/*! ./literal/documentRole */ \"./node_modules/aria-query/lib/etc/roles/literal/documentRole.js\"));\n\nvar _feedRole = _interopRequireDefault(__webpack_require__(/*! ./literal/feedRole */ \"./node_modules/aria-query/lib/etc/roles/literal/feedRole.js\"));\n\nvar _figureRole = _interopRequireDefault(__webpack_require__(/*! ./literal/figureRole */ \"./node_modules/aria-query/lib/etc/roles/literal/figureRole.js\"));\n\nvar _formRole = _interopRequireDefault(__webpack_require__(/*! ./literal/formRole */ \"./node_modules/aria-query/lib/etc/roles/literal/formRole.js\"));\n\nvar _gridRole = _interopRequireDefault(__webpack_require__(/*! ./literal/gridRole */ \"./node_modules/aria-query/lib/etc/roles/literal/gridRole.js\"));\n\nvar _gridcellRole = _interopRequireDefault(__webpack_require__(/*! ./literal/gridcellRole */ \"./node_modules/aria-query/lib/etc/roles/literal/gridcellRole.js\"));\n\nvar _groupRole = _interopRequireDefault(__webpack_require__(/*! ./literal/groupRole */ \"./node_modules/aria-query/lib/etc/roles/literal/groupRole.js\"));\n\nvar _headingRole = _interopRequireDefault(__webpack_require__(/*! ./literal/headingRole */ \"./node_modules/aria-query/lib/etc/roles/literal/headingRole.js\"));\n\nvar _imgRole = _interopRequireDefault(__webpack_require__(/*! ./literal/imgRole */ \"./node_modules/aria-query/lib/etc/roles/literal/imgRole.js\"));\n\nvar _linkRole = _interopRequireDefault(__webpack_require__(/*! ./literal/linkRole */ \"./node_modules/aria-query/lib/etc/roles/literal/linkRole.js\"));\n\nvar _listRole = _interopRequireDefault(__webpack_require__(/*! ./literal/listRole */ \"./node_modules/aria-query/lib/etc/roles/literal/listRole.js\"));\n\nvar _listboxRole = _interopRequireDefault(__webpack_require__(/*! ./literal/listboxRole */ \"./node_modules/aria-query/lib/etc/roles/literal/listboxRole.js\"));\n\nvar _listitemRole = _interopRequireDefault(__webpack_require__(/*! ./literal/listitemRole */ \"./node_modules/aria-query/lib/etc/roles/literal/listitemRole.js\"));\n\nvar _logRole = _interopRequireDefault(__webpack_require__(/*! ./literal/logRole */ \"./node_modules/aria-query/lib/etc/roles/literal/logRole.js\"));\n\nvar _mainRole = _interopRequireDefault(__webpack_require__(/*! ./literal/mainRole */ \"./node_modules/aria-query/lib/etc/roles/literal/mainRole.js\"));\n\nvar _marqueeRole = _interopRequireDefault(__webpack_require__(/*! ./literal/marqueeRole */ \"./node_modules/aria-query/lib/etc/roles/literal/marqueeRole.js\"));\n\nvar _mathRole = _interopRequireDefault(__webpack_require__(/*! ./literal/mathRole */ \"./node_modules/aria-query/lib/etc/roles/literal/mathRole.js\"));\n\nvar _menuRole = _interopRequireDefault(__webpack_require__(/*! ./literal/menuRole */ \"./node_modules/aria-query/lib/etc/roles/literal/menuRole.js\"));\n\nvar _menubarRole = _interopRequireDefault(__webpack_require__(/*! ./literal/menubarRole */ \"./node_modules/aria-query/lib/etc/roles/literal/menubarRole.js\"));\n\nvar _menuitemRole = _interopRequireDefault(__webpack_require__(/*! ./literal/menuitemRole */ \"./node_modules/aria-query/lib/etc/roles/literal/menuitemRole.js\"));\n\nvar _menuitemcheckboxRole = _interopRequireDefault(__webpack_require__(/*! ./literal/menuitemcheckboxRole */ \"./node_modules/aria-query/lib/etc/roles/literal/menuitemcheckboxRole.js\"));\n\nvar _menuitemradioRole = _interopRequireDefault(__webpack_require__(/*! ./literal/menuitemradioRole */ \"./node_modules/aria-query/lib/etc/roles/literal/menuitemradioRole.js\"));\n\nvar _navigationRole = _interopRequireDefault(__webpack_require__(/*! ./literal/navigationRole */ \"./node_modules/aria-query/lib/etc/roles/literal/navigationRole.js\"));\n\nvar _noneRole = _interopRequireDefault(__webpack_require__(/*! ./literal/noneRole */ \"./node_modules/aria-query/lib/etc/roles/literal/noneRole.js\"));\n\nvar _noteRole = _interopRequireDefault(__webpack_require__(/*! ./literal/noteRole */ \"./node_modules/aria-query/lib/etc/roles/literal/noteRole.js\"));\n\nvar _optionRole = _interopRequireDefault(__webpack_require__(/*! ./literal/optionRole */ \"./node_modules/aria-query/lib/etc/roles/literal/optionRole.js\"));\n\nvar _presentationRole = _interopRequireDefault(__webpack_require__(/*! ./literal/presentationRole */ \"./node_modules/aria-query/lib/etc/roles/literal/presentationRole.js\"));\n\nvar _progressbarRole = _interopRequireDefault(__webpack_require__(/*! ./literal/progressbarRole */ \"./node_modules/aria-query/lib/etc/roles/literal/progressbarRole.js\"));\n\nvar _radioRole = _interopRequireDefault(__webpack_require__(/*! ./literal/radioRole */ \"./node_modules/aria-query/lib/etc/roles/literal/radioRole.js\"));\n\nvar _radiogroupRole = _interopRequireDefault(__webpack_require__(/*! ./literal/radiogroupRole */ \"./node_modules/aria-query/lib/etc/roles/literal/radiogroupRole.js\"));\n\nvar _regionRole = _interopRequireDefault(__webpack_require__(/*! ./literal/regionRole */ \"./node_modules/aria-query/lib/etc/roles/literal/regionRole.js\"));\n\nvar _rowRole = _interopRequireDefault(__webpack_require__(/*! ./literal/rowRole */ \"./node_modules/aria-query/lib/etc/roles/literal/rowRole.js\"));\n\nvar _rowgroupRole = _interopRequireDefault(__webpack_require__(/*! ./literal/rowgroupRole */ \"./node_modules/aria-query/lib/etc/roles/literal/rowgroupRole.js\"));\n\nvar _rowheaderRole = _interopRequireDefault(__webpack_require__(/*! ./literal/rowheaderRole */ \"./node_modules/aria-query/lib/etc/roles/literal/rowheaderRole.js\"));\n\nvar _scrollbarRole = _interopRequireDefault(__webpack_require__(/*! ./literal/scrollbarRole */ \"./node_modules/aria-query/lib/etc/roles/literal/scrollbarRole.js\"));\n\nvar _searchRole = _interopRequireDefault(__webpack_require__(/*! ./literal/searchRole */ \"./node_modules/aria-query/lib/etc/roles/literal/searchRole.js\"));\n\nvar _searchboxRole = _interopRequireDefault(__webpack_require__(/*! ./literal/searchboxRole */ \"./node_modules/aria-query/lib/etc/roles/literal/searchboxRole.js\"));\n\nvar _separatorRole = _interopRequireDefault(__webpack_require__(/*! ./literal/separatorRole */ \"./node_modules/aria-query/lib/etc/roles/literal/separatorRole.js\"));\n\nvar _sliderRole = _interopRequireDefault(__webpack_require__(/*! ./literal/sliderRole */ \"./node_modules/aria-query/lib/etc/roles/literal/sliderRole.js\"));\n\nvar _spinbuttonRole = _interopRequireDefault(__webpack_require__(/*! ./literal/spinbuttonRole */ \"./node_modules/aria-query/lib/etc/roles/literal/spinbuttonRole.js\"));\n\nvar _statusRole = _interopRequireDefault(__webpack_require__(/*! ./literal/statusRole */ \"./node_modules/aria-query/lib/etc/roles/literal/statusRole.js\"));\n\nvar _switchRole = _interopRequireDefault(__webpack_require__(/*! ./literal/switchRole */ \"./node_modules/aria-query/lib/etc/roles/literal/switchRole.js\"));\n\nvar _tabRole = _interopRequireDefault(__webpack_require__(/*! ./literal/tabRole */ \"./node_modules/aria-query/lib/etc/roles/literal/tabRole.js\"));\n\nvar _tableRole = _interopRequireDefault(__webpack_require__(/*! ./literal/tableRole */ \"./node_modules/aria-query/lib/etc/roles/literal/tableRole.js\"));\n\nvar _tablistRole = _interopRequireDefault(__webpack_require__(/*! ./literal/tablistRole */ \"./node_modules/aria-query/lib/etc/roles/literal/tablistRole.js\"));\n\nvar _tabpanelRole = _interopRequireDefault(__webpack_require__(/*! ./literal/tabpanelRole */ \"./node_modules/aria-query/lib/etc/roles/literal/tabpanelRole.js\"));\n\nvar _termRole = _interopRequireDefault(__webpack_require__(/*! ./literal/termRole */ \"./node_modules/aria-query/lib/etc/roles/literal/termRole.js\"));\n\nvar _textboxRole = _interopRequireDefault(__webpack_require__(/*! ./literal/textboxRole */ \"./node_modules/aria-query/lib/etc/roles/literal/textboxRole.js\"));\n\nvar _timerRole = _interopRequireDefault(__webpack_require__(/*! ./literal/timerRole */ \"./node_modules/aria-query/lib/etc/roles/literal/timerRole.js\"));\n\nvar _toolbarRole = _interopRequireDefault(__webpack_require__(/*! ./literal/toolbarRole */ \"./node_modules/aria-query/lib/etc/roles/literal/toolbarRole.js\"));\n\nvar _tooltipRole = _interopRequireDefault(__webpack_require__(/*! ./literal/tooltipRole */ \"./node_modules/aria-query/lib/etc/roles/literal/tooltipRole.js\"));\n\nvar _treeRole = _interopRequireDefault(__webpack_require__(/*! ./literal/treeRole */ \"./node_modules/aria-query/lib/etc/roles/literal/treeRole.js\"));\n\nvar _treegridRole = _interopRequireDefault(__webpack_require__(/*! ./literal/treegridRole */ \"./node_modules/aria-query/lib/etc/roles/literal/treegridRole.js\"));\n\nvar _treeitemRole = _interopRequireDefault(__webpack_require__(/*! ./literal/treeitemRole */ \"./node_modules/aria-query/lib/etc/roles/literal/treeitemRole.js\"));\n\nvar ariaLiteralRoles = new _map.default([['alert', _alertRole.default], ['alertdialog', _alertdialogRole.default], ['application', _applicationRole.default], ['article', _articleRole.default], ['banner', _bannerRole.default], ['button', _buttonRole.default], ['cell', _cellRole.default], ['checkbox', _checkboxRole.default], ['columnheader', _columnheaderRole.default], ['combobox', _comboboxRole.default], ['complementary', _complementaryRole.default], ['contentinfo', _contentinfoRole.default], ['definition', _definitionRole.default], ['dialog', _dialogRole.default], ['directory', _directoryRole.default], ['document', _documentRole.default], ['feed', _feedRole.default], ['figure', _figureRole.default], ['form', _formRole.default], ['grid', _gridRole.default], ['gridcell', _gridcellRole.default], ['group', _groupRole.default], ['heading', _headingRole.default], ['img', _imgRole.default], ['link', _linkRole.default], ['list', _listRole.default], ['listbox', _listboxRole.default], ['listitem', _listitemRole.default], ['log', _logRole.default], ['main', _mainRole.default], ['marquee', _marqueeRole.default], ['math', _mathRole.default], ['menu', _menuRole.default], ['menubar', _menubarRole.default], ['menuitem', _menuitemRole.default], ['menuitemcheckbox', _menuitemcheckboxRole.default], ['menuitemradio', _menuitemradioRole.default], ['navigation', _navigationRole.default], ['none', _noneRole.default], ['note', _noteRole.default], ['option', _optionRole.default], ['presentation', _presentationRole.default], ['progressbar', _progressbarRole.default], ['radio', _radioRole.default], ['radiogroup', _radiogroupRole.default], ['region', _regionRole.default], ['row', _rowRole.default], ['rowgroup', _rowgroupRole.default], ['rowheader', _rowheaderRole.default], ['scrollbar', _scrollbarRole.default], ['search', _searchRole.default], ['searchbox', _searchboxRole.default], ['separator', _separatorRole.default], ['slider', _sliderRole.default], ['spinbutton', _spinbuttonRole.default], ['status', _statusRole.default], ['switch', _switchRole.default], ['tab', _tabRole.default], ['table', _tableRole.default], ['tablist', _tablistRole.default], ['tabpanel', _tabpanelRole.default], ['term', _termRole.default], ['textbox', _textboxRole.default], ['timer', _timerRole.default], ['toolbar', _toolbarRole.default], ['tooltip', _tooltipRole.default], ['tree', _treeRole.default], ['treegrid', _treegridRole.default], ['treeitem', _treeitemRole.default]]);\nvar _default = ariaLiteralRoles;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/ariaLiteralRoles.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/dpub/docAbstractRole.js":
/*!***********************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/dpub/docAbstractRole.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar docAbstractRole = {\n  abstract: false,\n  accessibleNameRequired: false,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {},\n  relatedConcepts: [{\n    module: 'EPUB',\n    concept: {\n      name: 'abstract [EPUB-SSV]'\n    }\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'structure', 'section']]\n};\nvar _default = docAbstractRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/dpub/docAbstractRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/dpub/docAcknowledgmentsRole.js":
/*!******************************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/dpub/docAcknowledgmentsRole.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar docAcknowledgmentsRole = {\n  abstract: false,\n  accessibleNameRequired: false,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {},\n  relatedConcepts: [{\n    module: 'EPUB',\n    concept: {\n      name: 'acknowledgments [EPUB-SSV]'\n    }\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'structure', 'section', 'landmark']]\n};\nvar _default = docAcknowledgmentsRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/dpub/docAcknowledgmentsRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/dpub/docAfterwordRole.js":
/*!************************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/dpub/docAfterwordRole.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar docAfterwordRole = {\n  abstract: false,\n  accessibleNameRequired: false,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {},\n  relatedConcepts: [{\n    module: 'EPUB',\n    concept: {\n      name: 'afterword [EPUB-SSV]'\n    }\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'structure', 'section', 'landmark']]\n};\nvar _default = docAfterwordRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/dpub/docAfterwordRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/dpub/docAppendixRole.js":
/*!***********************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/dpub/docAppendixRole.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar docAppendixRole = {\n  abstract: false,\n  accessibleNameRequired: false,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {},\n  relatedConcepts: [{\n    module: 'EPUB',\n    concept: {\n      name: 'appendix [EPUB-SSV]'\n    }\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'structure', 'section', 'landmark']]\n};\nvar _default = docAppendixRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/dpub/docAppendixRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/dpub/docBacklinkRole.js":
/*!***********************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/dpub/docBacklinkRole.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar docBacklinkRole = {\n  abstract: false,\n  accessibleNameRequired: true,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author', 'content'],\n  props: {},\n  relatedConcepts: [{\n    module: 'EPUB',\n    concept: {\n      name: 'referrer [EPUB-SSV]'\n    }\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'widget', 'command', 'link']]\n};\nvar _default = docBacklinkRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/dpub/docBacklinkRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/dpub/docBiblioentryRole.js":
/*!**************************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/dpub/docBiblioentryRole.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar docBiblioentryRole = {\n  abstract: false,\n  accessibleNameRequired: true,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {},\n  relatedConcepts: [{\n    module: 'EPUB',\n    concept: {\n      name: 'EPUB biblioentry [EPUB-SSV]'\n    }\n  }],\n  requireContextRole: ['doc-bibliography'],\n  requiredContextRole: ['doc-bibliography'],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'structure', 'section', 'listitem']]\n};\nvar _default = docBiblioentryRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/dpub/docBiblioentryRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/dpub/docBibliographyRole.js":
/*!***************************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/dpub/docBibliographyRole.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar docBibliographyRole = {\n  abstract: false,\n  accessibleNameRequired: false,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {},\n  relatedConcepts: [{\n    module: 'EPUB',\n    concept: {\n      name: 'bibliography [EPUB-SSV]'\n    }\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [['doc-biblioentry']],\n  requiredProps: {},\n  superClass: [['roletype', 'structure', 'section', 'landmark']]\n};\nvar _default = docBibliographyRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/dpub/docBibliographyRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/dpub/docBibliorefRole.js":
/*!************************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/dpub/docBibliorefRole.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar docBibliorefRole = {\n  abstract: false,\n  accessibleNameRequired: true,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author', 'contents'],\n  props: {},\n  relatedConcepts: [{\n    module: 'EPUB',\n    concept: {\n      name: 'biblioref [EPUB-SSV]'\n    }\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'widget', 'command', 'link']]\n};\nvar _default = docBibliorefRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/dpub/docBibliorefRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/dpub/docChapterRole.js":
/*!**********************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/dpub/docChapterRole.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar docChapterRole = {\n  abstract: false,\n  accessibleNameRequired: false,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {},\n  relatedConcepts: [{\n    module: 'EPUB',\n    concept: {\n      name: 'chapter [EPUB-SSV]'\n    }\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'structure', 'section', 'landmark']]\n};\nvar _default = docChapterRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/dpub/docChapterRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/dpub/docColophonRole.js":
/*!***********************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/dpub/docColophonRole.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar docColophonRole = {\n  abstract: false,\n  accessibleNameRequired: false,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {},\n  relatedConcepts: [{\n    module: 'EPUB',\n    concept: {\n      name: 'colophon [EPUB-SSV]'\n    }\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'structure', 'section']]\n};\nvar _default = docColophonRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/dpub/docColophonRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/dpub/docConclusionRole.js":
/*!*************************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/dpub/docConclusionRole.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar docConclusionRole = {\n  abstract: false,\n  accessibleNameRequired: false,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {},\n  relatedConcepts: [{\n    module: 'EPUB',\n    concept: {\n      name: 'conclusion [EPUB-SSV]'\n    }\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'structure', 'section', 'landmark']]\n};\nvar _default = docConclusionRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/dpub/docConclusionRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/dpub/docCoverRole.js":
/*!********************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/dpub/docCoverRole.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar docCoverRole = {\n  abstract: false,\n  accessibleNameRequired: false,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {},\n  relatedConcepts: [{\n    module: 'EPUB',\n    concept: {\n      name: 'cover [EPUB-SSV]'\n    }\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'structure', 'section', 'img']]\n};\nvar _default = docCoverRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/dpub/docCoverRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/dpub/docCreditRole.js":
/*!*********************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/dpub/docCreditRole.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar docCreditRole = {\n  abstract: false,\n  accessibleNameRequired: false,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {},\n  relatedConcepts: [{\n    module: 'EPUB',\n    concept: {\n      name: 'credit [EPUB-SSV]'\n    }\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'structure', 'section']]\n};\nvar _default = docCreditRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/dpub/docCreditRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/dpub/docCreditsRole.js":
/*!**********************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/dpub/docCreditsRole.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar docCreditsRole = {\n  abstract: false,\n  accessibleNameRequired: false,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {},\n  relatedConcepts: [{\n    module: 'EPUB',\n    concept: {\n      name: 'credits [EPUB-SSV]'\n    }\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'structure', 'section', 'landmark']]\n};\nvar _default = docCreditsRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/dpub/docCreditsRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/dpub/docDedicationRole.js":
/*!*************************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/dpub/docDedicationRole.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar docDedicationRole = {\n  abstract: false,\n  accessibleNameRequired: false,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {},\n  relatedConcepts: [{\n    module: 'EPUB',\n    concept: {\n      name: 'dedication [EPUB-SSV]'\n    }\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'structure', 'section']]\n};\nvar _default = docDedicationRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/dpub/docDedicationRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/dpub/docEndnoteRole.js":
/*!**********************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/dpub/docEndnoteRole.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar docEndnoteRole = {\n  abstract: false,\n  accessibleNameRequired: false,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {},\n  relatedConcepts: [{\n    module: 'EPUB',\n    concept: {\n      name: 'rearnote [EPUB-SSV]'\n    }\n  }],\n  requireContextRole: ['doc-endnotes'],\n  requiredContextRole: ['doc-endnotes'],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'structure', 'section', 'listitem']]\n};\nvar _default = docEndnoteRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/dpub/docEndnoteRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/dpub/docEndnotesRole.js":
/*!***********************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/dpub/docEndnotesRole.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar docEndnotesRole = {\n  abstract: false,\n  accessibleNameRequired: false,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {},\n  relatedConcepts: [{\n    module: 'EPUB',\n    concept: {\n      name: 'rearnotes [EPUB-SSV]'\n    }\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [['doc-endnote']],\n  requiredProps: {},\n  superClass: [['roletype', 'structure', 'section', 'landmark']]\n};\nvar _default = docEndnotesRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/dpub/docEndnotesRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/dpub/docEpigraphRole.js":
/*!***********************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/dpub/docEpigraphRole.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar docEpigraphRole = {\n  abstract: false,\n  accessibleNameRequired: false,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {},\n  relatedConcepts: [{\n    module: 'EPUB',\n    concept: {\n      name: 'epigraph [EPUB-SSV]'\n    }\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'structure', 'section']]\n};\nvar _default = docEpigraphRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/dpub/docEpigraphRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/dpub/docEpilogueRole.js":
/*!***********************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/dpub/docEpilogueRole.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar docEpilogueRole = {\n  abstract: false,\n  accessibleNameRequired: false,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {},\n  relatedConcepts: [{\n    module: 'EPUB',\n    concept: {\n      name: 'epilogue [EPUB-SSV]'\n    }\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'structure', 'section', 'landmark']]\n};\nvar _default = docEpilogueRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/dpub/docEpilogueRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/dpub/docErrataRole.js":
/*!*********************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/dpub/docErrataRole.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar docErrataRole = {\n  abstract: false,\n  accessibleNameRequired: false,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {},\n  relatedConcepts: [{\n    module: 'EPUB',\n    concept: {\n      name: 'errata [EPUB-SSV]'\n    }\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'structure', 'section', 'landmark']]\n};\nvar _default = docErrataRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/dpub/docErrataRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/dpub/docExampleRole.js":
/*!**********************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/dpub/docExampleRole.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar docExampleRole = {\n  abstract: false,\n  accessibleNameRequired: false,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {},\n  relatedConcepts: [],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'structure', 'section']]\n};\nvar _default = docExampleRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/dpub/docExampleRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/dpub/docFootnoteRole.js":
/*!***********************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/dpub/docFootnoteRole.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar docFootnoteRole = {\n  abstract: false,\n  accessibleNameRequired: false,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {},\n  relatedConcepts: [{\n    module: 'EPUB',\n    concept: {\n      name: 'footnote [EPUB-SSV]'\n    }\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'structure', 'section']]\n};\nvar _default = docFootnoteRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/dpub/docFootnoteRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/dpub/docForewordRole.js":
/*!***********************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/dpub/docForewordRole.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar docForewordRole = {\n  abstract: false,\n  accessibleNameRequired: false,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {},\n  relatedConcepts: [{\n    module: 'EPUB',\n    concept: {\n      name: 'foreword [EPUB-SSV]'\n    }\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'structure', 'section', 'landmark']]\n};\nvar _default = docForewordRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/dpub/docForewordRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/dpub/docGlossaryRole.js":
/*!***********************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/dpub/docGlossaryRole.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar docGlossaryRole = {\n  abstract: false,\n  accessibleNameRequired: false,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {},\n  relatedConcepts: [{\n    module: 'EPUB',\n    concept: {\n      name: 'glossary [EPUB-SSV]'\n    }\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [['term'], ['definition']],\n  requiredProps: {},\n  superClass: [['roletype', 'structure', 'section', 'landmark']]\n};\nvar _default = docGlossaryRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/dpub/docGlossaryRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/dpub/docGlossrefRole.js":
/*!***********************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/dpub/docGlossrefRole.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar docGlossrefRole = {\n  abstract: false,\n  accessibleNameRequired: true,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author', 'contents'],\n  props: {},\n  relatedConcepts: [{\n    module: 'EPUB',\n    concept: {\n      name: 'glossref [EPUB-SSV]'\n    }\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'widget', 'command', 'link']]\n};\nvar _default = docGlossrefRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/dpub/docGlossrefRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/dpub/docIndexRole.js":
/*!********************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/dpub/docIndexRole.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar docIndexRole = {\n  abstract: false,\n  accessibleNameRequired: false,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {},\n  relatedConcepts: [{\n    module: 'EPUB',\n    concept: {\n      name: 'index [EPUB-SSV]'\n    }\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'structure', 'section', 'landmark', 'navigation']]\n};\nvar _default = docIndexRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/dpub/docIndexRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/dpub/docIntroductionRole.js":
/*!***************************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/dpub/docIntroductionRole.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar docIntroductionRole = {\n  abstract: false,\n  accessibleNameRequired: false,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {},\n  relatedConcepts: [{\n    module: 'EPUB',\n    concept: {\n      name: 'introduction [EPUB-SSV]'\n    }\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'structure', 'section', 'landmark']]\n};\nvar _default = docIntroductionRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/dpub/docIntroductionRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/dpub/docNoterefRole.js":
/*!**********************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/dpub/docNoterefRole.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar docNoterefRole = {\n  abstract: false,\n  accessibleNameRequired: true,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author', 'contents'],\n  props: {},\n  relatedConcepts: [{\n    module: 'EPUB',\n    concept: {\n      name: 'noteref [EPUB-SSV]'\n    }\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'widget', 'command', 'link']]\n};\nvar _default = docNoterefRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/dpub/docNoterefRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/dpub/docNoticeRole.js":
/*!*********************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/dpub/docNoticeRole.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar docNoticeRole = {\n  abstract: false,\n  accessibleNameRequired: false,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {},\n  relatedConcepts: [{\n    module: 'EPUB',\n    concept: {\n      name: 'notice [EPUB-SSV]'\n    }\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'structure', 'section', 'note']]\n};\nvar _default = docNoticeRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/dpub/docNoticeRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/dpub/docPagebreakRole.js":
/*!************************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/dpub/docPagebreakRole.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar docPagebreakRole = {\n  abstract: false,\n  accessibleNameRequired: true,\n  baseConcepts: [],\n  childrenPresentational: true,\n  nameFrom: ['author'],\n  props: {},\n  relatedConcepts: [{\n    module: 'EPUB',\n    concept: {\n      name: 'pagebreak [EPUB-SSV]'\n    }\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'structure', 'separator']]\n};\nvar _default = docPagebreakRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/dpub/docPagebreakRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/dpub/docPagelistRole.js":
/*!***********************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/dpub/docPagelistRole.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar docPagelistRole = {\n  abstract: false,\n  accessibleNameRequired: false,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {},\n  relatedConcepts: [{\n    module: 'EPUB',\n    concept: {\n      name: 'page-list [EPUB-SSV]'\n    }\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'structure', 'section', 'landmark', 'navigation']]\n};\nvar _default = docPagelistRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/dpub/docPagelistRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/dpub/docPartRole.js":
/*!*******************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/dpub/docPartRole.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar docPartRole = {\n  abstract: false,\n  accessibleNameRequired: true,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {},\n  relatedConcepts: [{\n    module: 'EPUB',\n    concept: {\n      name: 'part [EPUB-SSV]'\n    }\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'structure', 'section', 'landmark']]\n};\nvar _default = docPartRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/dpub/docPartRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/dpub/docPrefaceRole.js":
/*!**********************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/dpub/docPrefaceRole.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar docPrefaceRole = {\n  abstract: false,\n  accessibleNameRequired: false,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {},\n  relatedConcepts: [{\n    module: 'EPUB',\n    concept: {\n      name: 'preface [EPUB-SSV]'\n    }\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'structure', 'section', 'landmark']]\n};\nvar _default = docPrefaceRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/dpub/docPrefaceRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/dpub/docPrologueRole.js":
/*!***********************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/dpub/docPrologueRole.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar docPrologueRole = {\n  abstract: false,\n  accessibleNameRequired: false,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {},\n  relatedConcepts: [{\n    module: 'EPUB',\n    concept: {\n      name: 'prologue [EPUB-SSV]'\n    }\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'structure', 'section', 'landmark']]\n};\nvar _default = docPrologueRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/dpub/docPrologueRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/dpub/docPullquoteRole.js":
/*!************************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/dpub/docPullquoteRole.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar docPullquoteRole = {\n  abstract: false,\n  accessibleNameRequired: false,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {},\n  relatedConcepts: [{\n    module: 'EPUB',\n    concept: {\n      name: 'pullquote [EPUB-SSV]'\n    }\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['none']]\n};\nvar _default = docPullquoteRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/dpub/docPullquoteRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/dpub/docQnaRole.js":
/*!******************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/dpub/docQnaRole.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar docQnaRole = {\n  abstract: false,\n  accessibleNameRequired: false,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {},\n  relatedConcepts: [{\n    module: 'EPUB',\n    concept: {\n      name: 'qna [EPUB-SSV]'\n    }\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'structure', 'section']]\n};\nvar _default = docQnaRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/dpub/docQnaRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/dpub/docSubtitleRole.js":
/*!***********************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/dpub/docSubtitleRole.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar docSubtitleRole = {\n  abstract: false,\n  accessibleNameRequired: false,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {},\n  relatedConcepts: [{\n    module: 'EPUB',\n    concept: {\n      name: 'subtitle [EPUB-SSV]'\n    }\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'structure', 'sectionhead']]\n};\nvar _default = docSubtitleRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/dpub/docSubtitleRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/dpub/docTipRole.js":
/*!******************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/dpub/docTipRole.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar docTipRole = {\n  abstract: false,\n  accessibleNameRequired: false,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {},\n  relatedConcepts: [{\n    module: 'EPUB',\n    concept: {\n      name: 'help [EPUB-SSV]'\n    }\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'structure', 'section', 'note']]\n};\nvar _default = docTipRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/dpub/docTipRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/dpub/docTocRole.js":
/*!******************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/dpub/docTocRole.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar docTocRole = {\n  abstract: false,\n  accessibleNameRequired: false,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {},\n  relatedConcepts: [{\n    module: 'EPUB',\n    concept: {\n      name: 'toc [EPUB-SSV]'\n    }\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'structure', 'section', 'landmark', 'navigation']]\n};\nvar _default = docTocRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/dpub/docTocRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/literal/alertRole.js":
/*!********************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/literal/alertRole.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar alertRole = {\n  abstract: false,\n  accessibleNameRequired: false,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {\n    'aria-atomic': 'true',\n    'aria-live': 'assertive'\n  },\n  relatedConcepts: [{\n    module: 'XForms',\n    concept: {\n      name: 'alert'\n    }\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'structure', 'section']]\n};\nvar _default = alertRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/literal/alertRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/literal/alertdialogRole.js":
/*!**************************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/literal/alertdialogRole.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar alertdialogRole = {\n  abstract: false,\n  accessibleNameRequired: true,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {},\n  relatedConcepts: [{\n    module: 'XForms',\n    concept: {\n      name: 'alert'\n    }\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'structure', 'section', 'alert'], ['roletype', 'window', 'dialog']]\n};\nvar _default = alertdialogRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/literal/alertdialogRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/literal/applicationRole.js":
/*!**************************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/literal/applicationRole.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar applicationRole = {\n  abstract: false,\n  accessibleNameRequired: true,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {\n    'aria-activedescendant': null\n  },\n  relatedConcepts: [{\n    concept: {\n      name: 'Device Independence Delivery Unit'\n    }\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'structure']]\n};\nvar _default = applicationRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/literal/applicationRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/literal/articleRole.js":
/*!**********************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/literal/articleRole.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar articleRole = {\n  abstract: false,\n  accessibleNameRequired: false,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {\n    'aria-posinset': null,\n    'aria-setsize': null\n  },\n  relatedConcepts: [{\n    module: 'HTML',\n    concept: {\n      name: 'article'\n    }\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'structure', 'document']]\n};\nvar _default = articleRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/literal/articleRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/literal/bannerRole.js":
/*!*********************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/literal/bannerRole.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar bannerRole = {\n  abstract: false,\n  accessibleNameRequired: false,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {},\n  relatedConcepts: [{\n    module: 'HTML',\n    concept: {\n      name: 'banner',\n      constraints: ['direct descendant of document']\n    }\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'structure', 'section', 'landmark']]\n};\nvar _default = bannerRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/literal/bannerRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/literal/buttonRole.js":
/*!*********************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/literal/buttonRole.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar buttonRole = {\n  abstract: false,\n  accessibleNameRequired: true,\n  baseConcepts: [],\n  childrenPresentational: true,\n  nameFrom: ['author', 'contents'],\n  props: {\n    'aria-expanded': null,\n    'aria-pressed': null\n  },\n  relatedConcepts: [{\n    module: 'HTML',\n    concept: {\n      name: 'button'\n    }\n  }, {\n    module: 'HTML',\n    concept: {\n      name: 'input',\n      attributes: [{\n        name: 'type',\n        value: 'button'\n      }]\n    }\n  }, {\n    module: 'HTML',\n    concept: {\n      name: 'input',\n      attributes: [{\n        name: 'type',\n        value: 'image'\n      }]\n    }\n  }, {\n    module: 'HTML',\n    concept: {\n      name: 'input',\n      attributes: [{\n        name: 'type',\n        value: 'reset'\n      }]\n    }\n  }, {\n    module: 'HTML',\n    concept: {\n      name: 'input',\n      attributes: [{\n        name: 'type',\n        value: 'submit'\n      }]\n    }\n  }, {\n    module: 'HTML',\n    concept: {\n      name: 'input',\n      attributes: [{\n        name: 'type',\n        value: 'checkbox'\n      }, {\n        name: 'aria-pressed',\n        constraints: ['set']\n      }]\n    }\n  }, {\n    module: 'HTML',\n    concept: {\n      name: 'summary',\n      constraints: ['direct descendant of details element with the open attribute defined'],\n      attributes: [{\n        name: 'aria-expanded',\n        value: 'true'\n      }]\n    }\n  }, {\n    module: 'HTML',\n    concept: {\n      name: 'summary',\n      attributes: [{\n        name: 'aria-expanded',\n        value: 'false'\n      }]\n    }\n  }, {\n    module: 'XForms',\n    concept: {\n      name: 'trigger'\n    }\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'widget', 'command']]\n};\nvar _default = buttonRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/literal/buttonRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/literal/cellRole.js":
/*!*******************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/literal/cellRole.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar cellRole = {\n  abstract: false,\n  accessibleNameRequired: false,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author', 'contents'],\n  props: {\n    'aria-colindex': null,\n    'aria-colspan': null,\n    'aria-rowindex': null,\n    'aria-rowspan': null\n  },\n  relatedConcepts: [{\n    module: 'HTML',\n    concept: {\n      name: 'td',\n      constraints: ['descendant of table']\n    }\n  }],\n  requireContextRole: ['row'],\n  requiredContextRole: ['row'],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'structure', 'section']]\n};\nvar _default = cellRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/literal/cellRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/literal/checkboxRole.js":
/*!***********************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/literal/checkboxRole.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar checkboxRole = {\n  abstract: false,\n  accessibleNameRequired: true,\n  baseConcepts: [],\n  childrenPresentational: true,\n  nameFrom: ['author', 'contents'],\n  props: {\n    'aria-checked': 'false',\n    'aria-readonly': null\n  },\n  relatedConcepts: [{\n    module: 'ARIA',\n    concept: {\n      name: 'option'\n    }\n  }, {\n    module: 'HTML',\n    concept: {\n      name: 'input',\n      attributes: [{\n        name: 'type',\n        value: 'checkbox'\n      }]\n    }\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {\n    'aria-checked': null\n  },\n  superClass: [['roletype', 'widget', 'input']]\n};\nvar _default = checkboxRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/literal/checkboxRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/literal/columnheaderRole.js":
/*!***************************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/literal/columnheaderRole.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar columnheaderRole = {\n  abstract: false,\n  accessibleNameRequired: true,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author', 'contents'],\n  props: {\n    'aria-sort': null\n  },\n  relatedConcepts: [{\n    module: 'HTML',\n    concept: {\n      name: 'th'\n    }\n  }],\n  requireContextRole: ['row'],\n  requiredContextRole: ['row'],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'structure', 'section', 'cell'], ['roletype', 'structure', 'section', 'cell', 'gridcell'], ['roletype', 'widget', 'gridcell'], ['roletype', 'structure', 'sectionhead']]\n};\nvar _default = columnheaderRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/literal/columnheaderRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/literal/comboboxRole.js":
/*!***********************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/literal/comboboxRole.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar comboboxRole = {\n  abstract: false,\n  accessibleNameRequired: true,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {\n    'aria-expanded': 'false',\n    'aria-autocomplete': null,\n    'aria-required': null,\n    'aria-haspopup': 'listbox',\n    'aria-readonly': null\n  },\n  relatedConcepts: [{\n    module: 'HTML',\n    concept: {\n      name: 'select',\n      attributes: [{\n        name: 'multiple',\n        constraints: ['undefined']\n      }, {\n        name: 'size',\n        constraints: ['undefined']\n      }]\n    }\n  }, {\n    module: 'HTML',\n    concept: {\n      name: 'select',\n      attributes: [{\n        name: 'multiple',\n        constraints: ['undefined']\n      }, {\n        name: 'size',\n        value: 1\n      }]\n    }\n  }, {\n    module: 'HTML',\n    concept: {\n      name: 'input',\n      attributes: [{\n        name: 'type',\n        value: 'text'\n      }, {\n        name: 'list',\n        constraints: ['set']\n      }]\n    }\n  }, {\n    module: 'HTML',\n    concept: {\n      name: 'input',\n      attributes: [{\n        name: 'type',\n        value: 'search'\n      }, {\n        name: 'list',\n        constraints: ['set']\n      }]\n    }\n  }, {\n    module: 'HTML',\n    concept: {\n      name: 'input',\n      attributes: [{\n        name: 'type',\n        value: 'url'\n      }, {\n        name: 'list',\n        constraints: ['set']\n      }]\n    }\n  }, {\n    module: 'HTML',\n    concept: {\n      name: 'input',\n      attributes: [{\n        name: 'type',\n        value: 'tel'\n      }, {\n        name: 'list',\n        constraints: ['set']\n      }]\n    }\n  }, {\n    module: 'HTML',\n    concept: {\n      name: 'input',\n      attributes: [{\n        name: 'type',\n        value: 'url'\n      }, {\n        name: 'list',\n        constraints: ['set']\n      }]\n    }\n  }, {\n    module: 'HTML',\n    concept: {\n      name: 'input',\n      attributes: [{\n        name: 'type',\n        value: 'email'\n      }, {\n        name: 'list',\n        constraints: ['set']\n      }]\n    }\n  }, {\n    module: 'XForms',\n    concept: {\n      name: 'select'\n    }\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [['textbox'], ['listbox'], ['tree'], ['grid'], ['dialog']],\n  requiredProps: {\n    'aria-controls': null,\n    'aria-expanded': 'false'\n  },\n  superClass: [['roletype', 'widget', 'composite', 'select'], ['roletype', 'structure', 'section', 'group', 'select']]\n};\nvar _default = comboboxRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/literal/comboboxRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/literal/complementaryRole.js":
/*!****************************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/literal/complementaryRole.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar complementaryRole = {\n  abstract: false,\n  accessibleNameRequired: false,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {},\n  relatedConcepts: [{\n    module: 'HTML',\n    concept: {\n      name: 'aside'\n    }\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'structure', 'section', 'landmark']]\n};\nvar _default = complementaryRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/literal/complementaryRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/literal/contentinfoRole.js":
/*!**************************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/literal/contentinfoRole.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar contentinfoRole = {\n  abstract: false,\n  accessibleNameRequired: false,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {},\n  relatedConcepts: [{\n    module: 'HTML',\n    concept: {\n      name: 'footer',\n      constraints: ['direct descendant of document']\n    }\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'structure', 'section', 'landmark']]\n};\nvar _default = contentinfoRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/literal/contentinfoRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/literal/definitionRole.js":
/*!*************************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/literal/definitionRole.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar definitionRole = {\n  abstract: false,\n  accessibleNameRequired: false,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {},\n  relatedConcepts: [{\n    module: 'HTML',\n    concept: {\n      name: 'dd'\n    }\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'structure', 'section']]\n};\nvar _default = definitionRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/literal/definitionRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/literal/dialogRole.js":
/*!*********************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/literal/dialogRole.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar dialogRole = {\n  abstract: false,\n  accessibleNameRequired: true,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {},\n  relatedConcepts: [{\n    module: 'HTML',\n    concept: {\n      name: 'dialog'\n    }\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'window']]\n};\nvar _default = dialogRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/literal/dialogRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/literal/directoryRole.js":
/*!************************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/literal/directoryRole.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar directoryRole = {\n  abstract: false,\n  accessibleNameRequired: false,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {},\n  relatedConcepts: [{\n    module: 'DAISY Guide'\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'structure', 'section', 'list']]\n};\nvar _default = directoryRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/literal/directoryRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/literal/documentRole.js":
/*!***********************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/literal/documentRole.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar documentRole = {\n  abstract: false,\n  accessibleNameRequired: false,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {\n    'aria-expanded': null\n  },\n  relatedConcepts: [{\n    concept: {\n      name: 'Device Independence Delivery Unit'\n    }\n  }, {\n    module: 'HTML',\n    concept: {\n      name: 'body'\n    }\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'structure']]\n};\nvar _default = documentRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/literal/documentRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/literal/feedRole.js":
/*!*******************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/literal/feedRole.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar feedRole = {\n  abstract: false,\n  accessibleNameRequired: false,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {},\n  relatedConcepts: [],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [['article']],\n  requiredProps: {},\n  superClass: [['roletype', 'structure', 'section', 'list']]\n};\nvar _default = feedRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/literal/feedRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/literal/figureRole.js":
/*!*********************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/literal/figureRole.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar figureRole = {\n  abstract: false,\n  accessibleNameRequired: false,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {},\n  relatedConcepts: [{\n    module: 'HTML',\n    concept: {\n      name: 'figure'\n    }\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'structure', 'section']]\n};\nvar _default = figureRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/literal/figureRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/literal/formRole.js":
/*!*******************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/literal/formRole.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar formRole = {\n  abstract: false,\n  accessibleNameRequired: false,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {},\n  relatedConcepts: [{\n    module: 'HTML',\n    concept: {\n      name: 'form',\n      attributes: [{\n        name: 'name',\n        constraints: ['set']\n      }]\n    }\n  }, {\n    module: 'HTML',\n    concept: {\n      name: 'form',\n      attributes: [{\n        name: 'aria-label',\n        constraints: ['set']\n      }]\n    }\n  }, {\n    module: 'HTML',\n    concept: {\n      name: 'form',\n      attributes: [{\n        name: 'aria-labelledby',\n        constraints: ['set']\n      }]\n    }\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'structure', 'section', 'landmark']]\n};\nvar _default = formRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/literal/formRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/literal/gridRole.js":
/*!*******************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/literal/gridRole.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar gridRole = {\n  abstract: false,\n  accessibleNameRequired: true,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {\n    'aria-level': null,\n    'aria-multiselectable': null,\n    'aria-readonly': null\n  },\n  relatedConcepts: [{\n    module: 'HTML',\n    concept: {\n      name: 'table',\n      attributes: [{\n        name: 'role',\n        value: 'grid'\n      }]\n    }\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [['rowgroup', 'row'], ['row']],\n  requiredProps: {},\n  superClass: [['roletype', 'widget', 'composite'], ['roletype', 'structure', 'section', 'table']]\n};\nvar _default = gridRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/literal/gridRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/literal/gridcellRole.js":
/*!***********************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/literal/gridcellRole.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar gridcellRole = {\n  abstract: false,\n  accessibleNameRequired: true,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author', 'contents'],\n  props: {\n    'aria-readonly': null,\n    'aria-required': null,\n    'aria-selected': null\n  },\n  relatedConcepts: [{\n    module: 'HTML',\n    concept: {\n      name: 'td',\n      attributes: [{\n        name: 'role',\n        value: 'gridcell'\n      }]\n    }\n  }],\n  requireContextRole: ['row'],\n  requiredContextRole: ['row'],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'structure', 'section', 'cell'], ['roletype', 'widget']]\n};\nvar _default = gridcellRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/literal/gridcellRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/literal/groupRole.js":
/*!********************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/literal/groupRole.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar groupRole = {\n  abstract: false,\n  accessibleNameRequired: false,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {\n    'aria-activedescendant': null\n  },\n  relatedConcepts: [{\n    module: 'HTML',\n    concept: {\n      name: 'fieldset'\n    }\n  }, {\n    module: 'HTML',\n    concept: {\n      name: 'details'\n    }\n  }, {\n    module: 'HTML',\n    concept: {\n      name: 'optgroup'\n    }\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'structure', 'section']]\n};\nvar _default = groupRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/literal/groupRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/literal/headingRole.js":
/*!**********************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/literal/headingRole.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar headingRole = {\n  abstract: false,\n  accessibleNameRequired: true,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author', 'contents'],\n  props: {\n    'aria-level': '2'\n  },\n  relatedConcepts: [{\n    module: 'HTML',\n    concept: {\n      name: 'h1'\n    }\n  }, {\n    module: 'HTML',\n    concept: {\n      name: 'h2'\n    }\n  }, {\n    module: 'HTML',\n    concept: {\n      name: 'h3'\n    }\n  }, {\n    module: 'HTML',\n    concept: {\n      name: 'h4'\n    }\n  }, {\n    module: 'HTML',\n    concept: {\n      name: 'h5'\n    }\n  }, {\n    module: 'HTML',\n    concept: {\n      name: 'h6'\n    }\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'structure', 'sectionhead']]\n};\nvar _default = headingRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/literal/headingRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/literal/imgRole.js":
/*!******************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/literal/imgRole.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar imgRole = {\n  abstract: false,\n  accessibleNameRequired: true,\n  baseConcepts: [],\n  childrenPresentational: true,\n  nameFrom: ['author'],\n  props: {},\n  relatedConcepts: [{\n    module: 'HTML',\n    concept: {\n      name: 'img',\n      attributes: [{\n        name: 'alt',\n        constraints: ['set']\n      }]\n    }\n  }, {\n    module: 'HTML',\n    concept: {\n      name: 'img',\n      attributes: [{\n        name: 'alt',\n        constraints: ['undefined']\n      }]\n    }\n  }, {\n    module: 'DTB',\n    concept: {\n      name: 'imggroup'\n    }\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'structure', 'section']]\n};\nvar _default = imgRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/literal/imgRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/literal/linkRole.js":
/*!*******************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/literal/linkRole.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar linkRole = {\n  abstract: false,\n  accessibleNameRequired: true,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author', 'contents'],\n  props: {\n    'aria-expanded': null\n  },\n  relatedConcepts: [{\n    module: 'HTML',\n    concept: {\n      name: 'a',\n      attributes: [{\n        name: 'href'\n      }]\n    }\n  }, {\n    module: 'HTML',\n    concept: {\n      name: 'area',\n      attributes: [{\n        name: 'href'\n      }]\n    }\n  }, {\n    module: 'HTML',\n    concept: {\n      name: 'link',\n      attributes: [{\n        name: 'href'\n      }]\n    }\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'widget', 'command']]\n};\nvar _default = linkRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/literal/linkRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/literal/listRole.js":
/*!*******************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/literal/listRole.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar listRole = {\n  abstract: false,\n  accessibleNameRequired: false,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {},\n  relatedConcepts: [{\n    module: 'HTML',\n    concept: {\n      name: 'ol'\n    }\n  }, {\n    module: 'HTML',\n    concept: {\n      name: 'ul'\n    }\n  }, {\n    module: 'HTML',\n    concept: {\n      name: 'menu'\n    }\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [['group', 'listitem'], ['listitem']],\n  requiredProps: {},\n  superClass: [['roletype', 'structure', 'section']]\n};\nvar _default = listRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/literal/listRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/literal/listboxRole.js":
/*!**********************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/literal/listboxRole.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar listboxRole = {\n  abstract: false,\n  accessibleNameRequired: true,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {\n    'aria-multiselectable': null,\n    'aria-readonly': null,\n    'aria-required': null,\n    'aria-orientation': 'vertical'\n  },\n  relatedConcepts: [{\n    module: 'HTML',\n    concept: {\n      name: 'datalist'\n    }\n  }, {\n    module: 'HTML',\n    concept: {\n      name: 'select',\n      attributes: [{\n        name: 'multiple'\n      }]\n    }\n  }, {\n    module: 'HTML',\n    concept: {\n      name: 'select',\n      attributes: [{\n        name: 'multiple'\n      }, {\n        name: 'size',\n        constraints: ['>1']\n      }]\n    }\n  }, {\n    module: 'HTML',\n    concept: {\n      name: 'select',\n      attributes: [{\n        name: 'size',\n        constraints: ['>1']\n      }]\n    }\n  }, {\n    module: 'ARIA',\n    concept: {\n      name: 'list'\n    }\n  }, {\n    module: 'XForms',\n    concept: {\n      name: 'select'\n    }\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [['option']],\n  requiredProps: {},\n  superClass: [['roletype', 'widget', 'composite', 'select'], ['roletype', 'structure', 'section', 'group', 'select']]\n};\nvar _default = listboxRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/literal/listboxRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/literal/listitemRole.js":
/*!***********************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/literal/listitemRole.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar listitemRole = {\n  abstract: false,\n  accessibleNameRequired: false,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {\n    'aria-level': null,\n    'aria-posinset': null,\n    'aria-setsize': null\n  },\n  relatedConcepts: [{\n    module: 'HTML',\n    concept: {\n      name: 'li',\n      constraints: ['direct descendant of ol, ul or menu']\n    }\n  }, {\n    module: 'XForms',\n    concept: {\n      name: 'item'\n    }\n  }],\n  requireContextRole: ['group', 'list'],\n  requiredContextRole: ['group', 'list'],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'structure', 'section']]\n};\nvar _default = listitemRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/literal/listitemRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/literal/logRole.js":
/*!******************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/literal/logRole.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar logRole = {\n  abstract: false,\n  accessibleNameRequired: true,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {\n    'aria-live': 'polite'\n  },\n  relatedConcepts: [],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'structure', 'section']]\n};\nvar _default = logRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/literal/logRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/literal/mainRole.js":
/*!*******************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/literal/mainRole.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar mainRole = {\n  abstract: false,\n  accessibleNameRequired: false,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {},\n  relatedConcepts: [{\n    module: 'HTML',\n    concept: {\n      name: 'main'\n    }\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'structure', 'section', 'landmark']]\n};\nvar _default = mainRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/literal/mainRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/literal/marqueeRole.js":
/*!**********************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/literal/marqueeRole.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar marqueeRole = {\n  abstract: false,\n  accessibleNameRequired: true,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {},\n  relatedConcepts: [],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'structure', 'section']]\n};\nvar _default = marqueeRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/literal/marqueeRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/literal/mathRole.js":
/*!*******************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/literal/mathRole.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar mathRole = {\n  abstract: false,\n  accessibleNameRequired: false,\n  baseConcepts: [],\n  childrenPresentational: true,\n  nameFrom: ['author'],\n  props: {},\n  relatedConcepts: [{\n    module: 'HTML',\n    concept: {\n      name: 'math'\n    }\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'structure', 'section']]\n};\nvar _default = mathRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/literal/mathRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/literal/menuRole.js":
/*!*******************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/literal/menuRole.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar menuRole = {\n  abstract: false,\n  accessibleNameRequired: false,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {\n    'aria-orientation': 'vertical'\n  },\n  relatedConcepts: [{\n    module: 'ARIA',\n    concept: {\n      name: 'list'\n    }\n  }, {\n    module: 'DTB',\n    concept: {\n      name: 'sidebar'\n    }\n  }, {\n    module: 'XForms',\n    concept: {\n      name: 'select'\n    }\n  }, {\n    module: 'JAPI',\n    concept: {\n      name: 'MENU'\n    }\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [['group', 'menuitemradio'], ['menuitem'], ['menuitemcheckbox'], ['menuitemradio']],\n  requiredProps: {},\n  superClass: [['roletype', 'widget', 'composite', 'select'], ['roletype', 'structure', 'section', 'group', 'select']]\n};\nvar _default = menuRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/literal/menuRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/literal/menubarRole.js":
/*!**********************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/literal/menubarRole.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar menubarRole = {\n  abstract: false,\n  accessibleNameRequired: false,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {\n    'aria-orientation': 'vertical'\n  },\n  relatedConcepts: [{\n    module: 'ARIA',\n    concept: {\n      name: 'toolbar'\n    }\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [['group', 'menuitemradio'], ['menuitem'], ['menuitemcheckbox'], ['menuitemradio']],\n  requiredProps: {},\n  superClass: [['roletype', 'widget', 'composite', 'select', 'menu'], ['roletype', 'structure', 'section', 'group', 'select', 'menu']]\n};\nvar _default = menubarRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/literal/menubarRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/literal/menuitemRole.js":
/*!***********************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/literal/menuitemRole.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar menuitemRole = {\n  abstract: false,\n  accessibleNameRequired: true,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author', 'contents'],\n  props: {\n    'aria-posinset': null,\n    'aria-setsize': null\n  },\n  relatedConcepts: [{\n    module: 'ARIA',\n    concept: {\n      name: 'option'\n    }\n  }, {\n    module: 'ARIA',\n    concept: {\n      name: 'listitem'\n    }\n  }, {\n    module: 'HTML',\n    concept: {\n      name: 'menuitem'\n    }\n  }, {\n    module: 'JAPI',\n    concept: {\n      name: 'MENU_ITEM'\n    }\n  }],\n  requireContextRole: ['group', 'menu', 'menubar'],\n  requiredContextRole: ['group', 'menu', 'menubar'],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'widget', 'command']]\n};\nvar _default = menuitemRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/literal/menuitemRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/literal/menuitemcheckboxRole.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/literal/menuitemcheckboxRole.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar menuitemcheckboxRole = {\n  abstract: false,\n  accessibleNameRequired: true,\n  baseConcepts: [],\n  childrenPresentational: true,\n  nameFrom: ['author', 'contents'],\n  props: {\n    'aria-checked': 'false'\n  },\n  relatedConcepts: [{\n    module: 'ARIA',\n    concept: {\n      name: 'menuitem'\n    }\n  }],\n  requireContextRole: ['menu', 'menubar'],\n  requiredContextRole: ['menu', 'menubar'],\n  requiredOwnedElements: [],\n  requiredProps: {\n    'aria-checked': null\n  },\n  superClass: [['roletype', 'widget', 'command', 'menuitem'], ['roletype', 'widget', 'input', 'checkbox']]\n};\nvar _default = menuitemcheckboxRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/literal/menuitemcheckboxRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/literal/menuitemradioRole.js":
/*!****************************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/literal/menuitemradioRole.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar menuitemradioRole = {\n  abstract: false,\n  accessibleNameRequired: true,\n  baseConcepts: [],\n  childrenPresentational: true,\n  nameFrom: ['author', 'contents'],\n  props: {\n    'aria-checked': 'false'\n  },\n  relatedConcepts: [{\n    module: 'ARIA',\n    concept: {\n      name: 'menuitem'\n    }\n  }],\n  requireContextRole: ['group', 'menu', 'menubar'],\n  requiredContextRole: ['group', 'menu', 'menubar'],\n  requiredOwnedElements: [],\n  requiredProps: {\n    'aria-checked': null\n  },\n  superClass: [['roletype', 'widget', 'command', 'menuitem', 'menuitemcheckbox'], ['roletype', 'widget', 'input', 'checkbox', 'menuitemcheckbox'], ['roletype', 'widget', 'input', 'radio']]\n};\nvar _default = menuitemradioRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/literal/menuitemradioRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/literal/navigationRole.js":
/*!*************************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/literal/navigationRole.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar navigationRole = {\n  abstract: false,\n  accessibleNameRequired: false,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {},\n  relatedConcepts: [{\n    module: 'HTML',\n    concept: {\n      name: 'nav'\n    }\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'structure', 'section', 'landmark']]\n};\nvar _default = navigationRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/literal/navigationRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/literal/noneRole.js":
/*!*******************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/literal/noneRole.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar noneRole = {\n  abstract: false,\n  accessibleNameRequired: false,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: [],\n  props: {},\n  relatedConcepts: [],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: []\n};\nvar _default = noneRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/literal/noneRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/literal/noteRole.js":
/*!*******************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/literal/noteRole.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar noteRole = {\n  abstract: false,\n  accessibleNameRequired: false,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {},\n  relatedConcepts: [],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'structure', 'section']]\n};\nvar _default = noteRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/literal/noteRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/literal/optionRole.js":
/*!*********************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/literal/optionRole.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar optionRole = {\n  abstract: false,\n  accessibleNameRequired: true,\n  baseConcepts: [],\n  childrenPresentational: true,\n  nameFrom: ['author', 'contents'],\n  props: {\n    'aria-checked': null,\n    'aria-posinset': null,\n    'aria-selected': 'false',\n    'aria-setsize': null\n  },\n  relatedConcepts: [{\n    module: 'HTML',\n    concept: {\n      name: 'option'\n    }\n  }, {\n    module: 'ARIA',\n    concept: {\n      name: 'listitem'\n    }\n  }, {\n    module: 'XForms',\n    concept: {\n      name: 'item'\n    }\n  }],\n  requireContextRole: ['listbox'],\n  requiredContextRole: ['listbox'],\n  requiredOwnedElements: [],\n  requiredProps: {\n    'aria-selected': 'false'\n  },\n  superClass: [['roletype', 'widget', 'input']]\n};\nvar _default = optionRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/literal/optionRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/literal/presentationRole.js":
/*!***************************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/literal/presentationRole.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar presentationRole = {\n  abstract: false,\n  accessibleNameRequired: false,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {},\n  relatedConcepts: [],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'structure']]\n};\nvar _default = presentationRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/literal/presentationRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/literal/progressbarRole.js":
/*!**************************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/literal/progressbarRole.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar progressbarRole = {\n  abstract: false,\n  accessibleNameRequired: true,\n  baseConcepts: [],\n  childrenPresentational: true,\n  nameFrom: ['author'],\n  props: {},\n  relatedConcepts: [{\n    module: 'HTML',\n    concept: {\n      name: 'progress'\n    }\n  }, {\n    module: 'ARIA',\n    concept: {\n      name: 'status'\n    }\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'widget', 'range']]\n};\nvar _default = progressbarRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/literal/progressbarRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/literal/radioRole.js":
/*!********************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/literal/radioRole.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar radioRole = {\n  abstract: false,\n  accessibleNameRequired: true,\n  baseConcepts: [],\n  childrenPresentational: true,\n  nameFrom: ['author', 'contents'],\n  props: {\n    'aria-checked': 'false',\n    'aria-posinset': null,\n    'aria-selected': null,\n    'aria-setsize': null\n  },\n  relatedConcepts: [{\n    module: 'HTML',\n    concept: {\n      name: 'input',\n      attributes: [{\n        name: 'type',\n        value: 'radio'\n      }]\n    }\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {\n    'aria-checked': 'false'\n  },\n  superClass: [['roletype', 'widget', 'input']]\n};\nvar _default = radioRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/literal/radioRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/literal/radiogroupRole.js":
/*!*************************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/literal/radiogroupRole.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar radiogroupRole = {\n  abstract: false,\n  accessibleNameRequired: true,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {\n    'aria-readonly': null,\n    'aria-required': null\n  },\n  relatedConcepts: [{\n    module: 'ARIA',\n    concept: {\n      name: 'list'\n    }\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [['radio']],\n  requiredProps: {},\n  superClass: [['roletype', 'widget', 'composite', 'select'], ['roletype', 'structure', 'section', 'group', 'select']]\n};\nvar _default = radiogroupRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/literal/radiogroupRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/literal/regionRole.js":
/*!*********************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/literal/regionRole.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar regionRole = {\n  abstract: false,\n  accessibleNameRequired: true,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {},\n  relatedConcepts: [{\n    module: 'HTML',\n    concept: {\n      name: 'frame'\n    }\n  }, {\n    concept: {\n      name: 'Device Independence Glossart perceivable unit'\n    }\n  }, {\n    module: 'HTML',\n    concept: {\n      name: 'section',\n      attributes: [{\n        name: 'aria-label',\n        constraints: ['set']\n      }]\n    }\n  }, {\n    module: 'HTML',\n    concept: {\n      name: 'section',\n      attributes: [{\n        name: 'aria-labelledby',\n        constraints: ['set']\n      }]\n    }\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'structure', 'section', 'landmark']]\n};\nvar _default = regionRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/literal/regionRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/literal/rowRole.js":
/*!******************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/literal/rowRole.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar rowRole = {\n  abstract: false,\n  accessibleNameRequired: false,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author', 'contents'],\n  props: {\n    'aria-colindex': null,\n    'aria-level': null,\n    'aria-rowindex': null,\n    'aria-selected': null\n  },\n  relatedConcepts: [{\n    module: 'HTML',\n    concept: {\n      name: 'tr'\n    }\n  }],\n  requireContextRole: ['grid', 'rowgroup', 'table', 'treegrid'],\n  requiredContextRole: ['grid', 'rowgroup', 'table', 'treegrid'],\n  requiredOwnedElements: [['cell'], ['columnheader'], ['gridcell'], ['rowheader']],\n  requiredProps: {},\n  superClass: [['roletype', 'structure', 'section', 'group'], ['roletype', 'widget']]\n};\nvar _default = rowRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/literal/rowRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/literal/rowgroupRole.js":
/*!***********************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/literal/rowgroupRole.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar rowgroupRole = {\n  abstract: false,\n  accessibleNameRequired: false,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author', 'contents'],\n  props: {\n    'aria-activedescendant': null,\n    'aria-expanded': null\n  },\n  relatedConcepts: [{\n    module: 'HTML',\n    concept: {\n      name: 'tbody'\n    }\n  }, {\n    module: 'HTML',\n    concept: {\n      name: 'tfoot'\n    }\n  }, {\n    module: 'HTML',\n    concept: {\n      name: 'thead'\n    }\n  }],\n  requireContextRole: ['grid', 'table', 'treegrid'],\n  requiredContextRole: ['grid', 'table', 'treegrid'],\n  requiredOwnedElements: [['row']],\n  requiredProps: {},\n  superClass: [['roletype', 'structure']]\n};\nvar _default = rowgroupRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/literal/rowgroupRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/literal/rowheaderRole.js":
/*!************************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/literal/rowheaderRole.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar rowheaderRole = {\n  abstract: false,\n  accessibleNameRequired: true,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author', 'contents'],\n  props: {\n    'aria-sort': null\n  },\n  relatedConcepts: [{\n    module: 'HTML',\n    concept: {\n      name: 'th',\n      attributes: [{\n        name: 'scope',\n        value: 'row'\n      }]\n    }\n  }],\n  requireContextRole: ['row'],\n  requiredContextRole: ['row'],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'structure', 'section', 'cell'], ['roletype', 'structure', 'section', 'cell', 'gridcell'], ['roletype', 'widget', 'gridcell'], ['roletype', 'structure', 'sectionhead']]\n};\nvar _default = rowheaderRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/literal/rowheaderRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/literal/scrollbarRole.js":
/*!************************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/literal/scrollbarRole.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar scrollbarRole = {\n  abstract: false,\n  accessibleNameRequired: false,\n  baseConcepts: [],\n  childrenPresentational: true,\n  nameFrom: ['author'],\n  props: {\n    'aria-controls': null,\n    'aria-orientation': null,\n    'aria-valuemax': null,\n    'aria-valuemin': null,\n    'aria-valuenow': null,\n    'aria-atomic': null,\n    'aria-busy': null,\n    'aria-describedby': null,\n    'aria-disabled': null,\n    'aria-dropeffect': null,\n    'aria-flowto': null,\n    'aria-grabbed': null,\n    'aria-haspopup': null,\n    'aria-hidden': null,\n    'aria-invalid': null,\n    'aria-label': null,\n    'aria-labelledby': null,\n    'aria-live': null,\n    'aria-owns': null,\n    'aria-relevant': null,\n    'aria-valuetext': null\n  },\n  relatedConcepts: [],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {\n    'aria-controls': null,\n    'aria-orientation': null,\n    'aria-valuemax': null,\n    'aria-valuemin': null,\n    'aria-valuenow': null\n  },\n  superClass: []\n};\nvar _default = scrollbarRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/literal/scrollbarRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/literal/searchRole.js":
/*!*********************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/literal/searchRole.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar searchRole = {\n  abstract: false,\n  accessibleNameRequired: false,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {},\n  relatedConcepts: [],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'structure', 'section', 'landmark']]\n};\nvar _default = searchRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/literal/searchRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/literal/searchboxRole.js":
/*!************************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/literal/searchboxRole.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar searchboxRole = {\n  abstract: false,\n  accessibleNameRequired: true,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {},\n  relatedConcepts: [{\n    module: 'HTML',\n    concept: {\n      name: 'input',\n      attributes: [{\n        name: 'type',\n        value: 'search'\n      }, {\n        name: 'list',\n        constraints: ['undefined']\n      }]\n    }\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'widget', 'input', 'textbox']]\n};\nvar _default = searchboxRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/literal/searchboxRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/literal/separatorRole.js":
/*!************************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/literal/separatorRole.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar separatorRole = {\n  abstract: false,\n  accessibleNameRequired: false,\n  baseConcepts: [],\n  childrenPresentational: true,\n  nameFrom: ['author'],\n  props: {\n    'aria-expanded': null,\n    'aria-orientation': 'horizontal'\n  },\n  relatedConcepts: [{\n    module: 'HTML',\n    concept: {\n      name: 'hr'\n    }\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'structure']]\n};\nvar _default = separatorRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/literal/separatorRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/literal/sliderRole.js":
/*!*********************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/literal/sliderRole.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar sliderRole = {\n  abstract: false,\n  accessibleNameRequired: true,\n  baseConcepts: [],\n  childrenPresentational: true,\n  nameFrom: ['author'],\n  props: {\n    'aria-orientation': 'horizontal',\n    'aria-readonly': null,\n    'aria-valuemax': '100',\n    'aria-valuemin': '0',\n    'aria-valuenow': '50'\n  },\n  relatedConcepts: [{\n    module: 'HTML',\n    concept: {\n      name: 'input',\n      attributes: [{\n        name: 'type',\n        value: 'range'\n      }]\n    }\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {\n    'aria-valuemax': '100',\n    'aria-valuemin': '0',\n    'aria-valuenow': '50'\n  },\n  superClass: [['roletype', 'widget', 'input'], ['roletype', 'widget', 'range']]\n};\nvar _default = sliderRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/literal/sliderRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/literal/spinbuttonRole.js":
/*!*************************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/literal/spinbuttonRole.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar spinbuttonRole = {\n  abstract: false,\n  accessibleNameRequired: true,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {\n    'aria-valuenow': '0',\n    'aria-required': null,\n    'aria-readonly': null\n  },\n  relatedConcepts: [{\n    module: 'HTML',\n    concept: {\n      name: 'input',\n      attributes: [{\n        name: 'type',\n        value: 'number'\n      }]\n    }\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {\n    'aria-valuemax': null,\n    'aria-valuemin': null,\n    'aria-valuenow': '0'\n  },\n  superClass: [['roletype', 'widget', 'composite'], ['roletype', 'widget', 'input'], ['roletype', 'widget', 'range']]\n};\nvar _default = spinbuttonRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/literal/spinbuttonRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/literal/statusRole.js":
/*!*********************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/literal/statusRole.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar statusRole = {\n  abstract: false,\n  accessibleNameRequired: false,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {\n    'aria-atomic': 'true',\n    'aria-live': 'polite'\n  },\n  relatedConcepts: [{\n    module: 'HTML',\n    concept: {\n      name: 'output'\n    }\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'structure', 'section']]\n};\nvar _default = statusRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/literal/statusRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/literal/switchRole.js":
/*!*********************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/literal/switchRole.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar switchRole = {\n  abstract: false,\n  accessibleNameRequired: true,\n  baseConcepts: [],\n  childrenPresentational: true,\n  nameFrom: ['author', 'contents'],\n  props: {\n    'aria-checked': 'false'\n  },\n  relatedConcepts: [{\n    module: 'ARIA',\n    concept: {\n      name: 'button'\n    }\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {\n    'aria-checked': 'false'\n  },\n  superClass: [['roletype', 'widget', 'input', 'checkbox']]\n};\nvar _default = switchRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/literal/switchRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/literal/tabRole.js":
/*!******************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/literal/tabRole.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar tabRole = {\n  abstract: false,\n  accessibleNameRequired: false,\n  baseConcepts: [],\n  childrenPresentational: true,\n  nameFrom: ['author', 'contents'],\n  props: {\n    'aria-posinset': null,\n    'aria-selected': 'false',\n    'aria-setsize': null\n  },\n  relatedConcepts: [],\n  requireContextRole: ['tablist'],\n  requiredContextRole: ['tablist'],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'structure', 'sectionhead'], ['roletype', 'widget']]\n};\nvar _default = tabRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/literal/tabRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/literal/tableRole.js":
/*!********************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/literal/tableRole.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar tableRole = {\n  abstract: false,\n  accessibleNameRequired: true,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {\n    'aria-colcount': null,\n    'aria-rowcount': null\n  },\n  relatedConcepts: [{\n    module: 'HTML',\n    concept: {\n      name: 'table'\n    }\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [['row'], ['rowgroup', 'row']],\n  requiredProps: {},\n  superClass: [['roletype', 'structure', 'section']]\n};\nvar _default = tableRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/literal/tableRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/literal/tablistRole.js":
/*!**********************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/literal/tablistRole.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar tablistRole = {\n  abstract: false,\n  accessibleNameRequired: false,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {\n    'aria-level': null,\n    'aria-multiselectable': null,\n    'aria-orientation': 'horizontal',\n    'aria-expanded': null\n  },\n  relatedConcepts: [{\n    module: 'DAISY',\n    concept: {\n      name: 'guide'\n    }\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [['tab']],\n  requiredProps: {},\n  superClass: [['roletype', 'widget', 'composite']]\n};\nvar _default = tablistRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/literal/tablistRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/literal/tabpanelRole.js":
/*!***********************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/literal/tabpanelRole.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar tabpanelRole = {\n  abstract: false,\n  accessibleNameRequired: true,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {},\n  relatedConcepts: [],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'structure', 'section']]\n};\nvar _default = tabpanelRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/literal/tabpanelRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/literal/termRole.js":
/*!*******************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/literal/termRole.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar termRole = {\n  abstract: false,\n  accessibleNameRequired: false,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {},\n  relatedConcepts: [{\n    module: 'HTML',\n    concept: {\n      name: 'dt'\n    }\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'structure', 'section']]\n};\nvar _default = termRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/literal/termRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/literal/textboxRole.js":
/*!**********************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/literal/textboxRole.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar textboxRole = {\n  abstract: false,\n  accessibleNameRequired: true,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {\n    'aria-activedescendant': null,\n    'aria-autocomplete': null,\n    'aria-multiline': null,\n    'aria-placeholder': null,\n    'aria-readonly': null,\n    'aria-required': null\n  },\n  relatedConcepts: [{\n    module: 'XForms',\n    concept: {\n      name: 'input'\n    }\n  }, {\n    module: 'HTML',\n    concept: {\n      name: 'textarea'\n    }\n  }, {\n    module: 'HTML',\n    concept: {\n      name: 'input',\n      attributes: [{\n        name: 'type',\n        value: 'text'\n      }, {\n        name: 'list',\n        constraints: ['undefined']\n      }]\n    }\n  }, {\n    module: 'HTML',\n    concept: {\n      name: 'input',\n      attributes: [{\n        name: 'type',\n        value: 'email'\n      }, {\n        name: 'list',\n        constraints: ['undefined']\n      }]\n    }\n  }, {\n    module: 'HTML',\n    concept: {\n      name: 'input',\n      attributes: [{\n        name: 'type',\n        value: 'tel'\n      }, {\n        name: 'list',\n        constraints: ['undefined']\n      }]\n    }\n  }, {\n    module: 'HTML',\n    concept: {\n      name: 'input',\n      attributes: [{\n        name: 'type',\n        value: 'url'\n      }, {\n        name: 'list',\n        constraints: ['undefined']\n      }]\n    }\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'widget', 'input']]\n};\nvar _default = textboxRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/literal/textboxRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/literal/timerRole.js":
/*!********************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/literal/timerRole.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar timerRole = {\n  abstract: false,\n  accessibleNameRequired: true,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {},\n  relatedConcepts: [],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'structure', 'section', 'status']]\n};\nvar _default = timerRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/literal/timerRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/literal/toolbarRole.js":
/*!**********************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/literal/toolbarRole.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar toolbarRole = {\n  abstract: false,\n  accessibleNameRequired: false,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {\n    'aria-orientation': 'horizontal'\n  },\n  relatedConcepts: [{\n    module: 'ARIA',\n    concept: {\n      name: 'menubar'\n    }\n  }],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'structure', 'section', 'group']]\n};\nvar _default = toolbarRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/literal/toolbarRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/literal/tooltipRole.js":
/*!**********************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/literal/tooltipRole.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar tooltipRole = {\n  abstract: false,\n  accessibleNameRequired: true,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author', 'contents'],\n  props: {},\n  relatedConcepts: [],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'structure', 'section']]\n};\nvar _default = tooltipRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/literal/tooltipRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/literal/treeRole.js":
/*!*******************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/literal/treeRole.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar treeRole = {\n  abstract: false,\n  accessibleNameRequired: true,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {\n    'aria-multiselectable': null,\n    'aria-required': null,\n    'aria-orientation': 'vertical'\n  },\n  relatedConcepts: [],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [['group', 'treeitem'], ['treeitem']],\n  requiredProps: {},\n  superClass: [['roletype', 'widget', 'composite', 'select'], ['roletype', 'structure', 'section', 'group', 'select']]\n};\nvar _default = treeRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/literal/treeRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/literal/treegridRole.js":
/*!***********************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/literal/treegridRole.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar treegridRole = {\n  abstract: false,\n  accessibleNameRequired: false,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author'],\n  props: {},\n  relatedConcepts: [],\n  requireContextRole: [],\n  requiredContextRole: [],\n  requiredOwnedElements: [['rowgroup', 'row'], ['row']],\n  requiredProps: {},\n  superClass: [['roletype', 'widget', 'composite', 'grid'], ['roletype', 'structure', 'section', 'table', 'grid'], ['roletype', 'widget', 'composite', 'select', 'tree'], ['roletype', 'structure', 'section', 'group', 'select', 'tree']]\n};\nvar _default = treegridRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/literal/treegridRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/etc/roles/literal/treeitemRole.js":
/*!***********************************************************************!*\
  !*** ./node_modules/aria-query/lib/etc/roles/literal/treeitemRole.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\nvar treeitemRole = {\n  abstract: false,\n  accessibleNameRequired: true,\n  baseConcepts: [],\n  childrenPresentational: false,\n  nameFrom: ['author', 'contents'],\n  props: {},\n  relatedConcepts: [],\n  requireContextRole: ['group', 'tree'],\n  requiredContextRole: ['group', 'tree'],\n  requiredOwnedElements: [],\n  requiredProps: {},\n  superClass: [['roletype', 'structure', 'section', 'listitem'], ['roletype', 'widget', 'input', 'option']]\n};\nvar _default = treeitemRole;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/etc/roles/literal/treeitemRole.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/index.js":
/*!**********************************************!*\
  !*** ./node_modules/aria-query/lib/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs3/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime-corejs3/helpers/interopRequireDefault.js\");\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.roleElements = exports.elementRoles = exports.roles = exports.dom = exports.aria = void 0;\n\nvar _ariaPropsMap = _interopRequireDefault(__webpack_require__(/*! ./ariaPropsMap */ \"./node_modules/aria-query/lib/ariaPropsMap.js\"));\n\nvar _domMap = _interopRequireDefault(__webpack_require__(/*! ./domMap */ \"./node_modules/aria-query/lib/domMap.js\"));\n\nvar _rolesMap = _interopRequireDefault(__webpack_require__(/*! ./rolesMap */ \"./node_modules/aria-query/lib/rolesMap.js\"));\n\nvar _elementRoleMap = _interopRequireDefault(__webpack_require__(/*! ./elementRoleMap */ \"./node_modules/aria-query/lib/elementRoleMap.js\"));\n\nvar _roleElementMap = _interopRequireDefault(__webpack_require__(/*! ./roleElementMap */ \"./node_modules/aria-query/lib/roleElementMap.js\"));\n\nvar aria = _ariaPropsMap.default;\nexports.aria = aria;\nvar dom = _domMap.default;\nexports.dom = dom;\nvar roles = _rolesMap.default;\nexports.roles = roles;\nvar elementRoles = _elementRoleMap.default;\nexports.elementRoles = elementRoles;\nvar roleElements = _roleElementMap.default;\nexports.roleElements = roleElements;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/index.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/roleElementMap.js":
/*!*******************************************************!*\
  !*** ./node_modules/aria-query/lib/roleElementMap.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs3/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime-corejs3/helpers/interopRequireDefault.js\");\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\n\nvar _set = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/set */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/set.js\"));\n\nvar _concat = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js\"));\n\nvar _keys = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/keys */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/instance/keys.js\"));\n\nvar _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs3/helpers/toConsumableArray */ \"./node_modules/@babel/runtime-corejs3/helpers/toConsumableArray.js\"));\n\nvar _forEach = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/for-each */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js\"));\n\nvar _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/map */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/map.js\"));\n\nvar _rolesMap = _interopRequireDefault(__webpack_require__(/*! ./rolesMap */ \"./node_modules/aria-query/lib/rolesMap.js\"));\n\nvar _context;\n\nvar roleElementMap = new _map.default([]);\n(0, _forEach.default)(_context = (0, _toConsumableArray2.default)((0, _keys.default)(_rolesMap.default).call(_rolesMap.default))).call(_context, function (key) {\n  var role = _rolesMap.default.get(key);\n\n  if (role) {\n    var _context2, _context3;\n\n    (0, _forEach.default)(_context2 = (0, _concat.default)(_context3 = []).call(_context3, (0, _toConsumableArray2.default)(role.baseConcepts), (0, _toConsumableArray2.default)(role.relatedConcepts))).call(_context2, function (relation) {\n      if (relation.module === 'HTML') {\n        var concept = relation.concept;\n\n        if (concept) {\n          var relationConcepts = roleElementMap.get(key) || new _set.default([]);\n          relationConcepts.add(concept);\n          roleElementMap.set(key, relationConcepts);\n        }\n      }\n    });\n  }\n});\nvar _default = roleElementMap;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/roleElementMap.js?");

/***/ }),

/***/ "./node_modules/aria-query/lib/rolesMap.js":
/*!*************************************************!*\
  !*** ./node_modules/aria-query/lib/rolesMap.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs3/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime-corejs3/helpers/interopRequireDefault.js\");\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = void 0;\n\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ \"./node_modules/@babel/runtime-corejs3/helpers/defineProperty.js\"));\n\nvar _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/assign */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/assign.js\"));\n\nvar _keys = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/keys */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/keys.js\"));\n\nvar _getIterator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs3/core-js/get-iterator */ \"./node_modules/@babel/runtime-corejs3/core-js/get-iterator.js\"));\n\nvar _forEach = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/for-each */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js\"));\n\nvar _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/map */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/map.js\"));\n\nvar _ariaAbstractRoles = _interopRequireDefault(__webpack_require__(/*! ./etc/roles/ariaAbstractRoles */ \"./node_modules/aria-query/lib/etc/roles/ariaAbstractRoles.js\"));\n\nvar _ariaLiteralRoles = _interopRequireDefault(__webpack_require__(/*! ./etc/roles/ariaLiteralRoles */ \"./node_modules/aria-query/lib/etc/roles/ariaLiteralRoles.js\"));\n\nvar _ariaDpubRoles = _interopRequireDefault(__webpack_require__(/*! ./etc/roles/ariaDpubRoles */ \"./node_modules/aria-query/lib/etc/roles/ariaDpubRoles.js\"));\n\nvar _context;\n\nvar rolesMap = new _map.default([]);\n(0, _forEach.default)(_context = [_ariaAbstractRoles.default, _ariaLiteralRoles.default, _ariaDpubRoles.default]).call(_context, function (roleSet) {\n  (0, _forEach.default)(roleSet).call(roleSet, function (roleDefinition, name) {\n    return rolesMap.set(name, roleDefinition);\n  });\n});\n(0, _forEach.default)(rolesMap).call(rolesMap, function (roleDefinition, name) {\n  // Conglomerate the properties\n  var _iteratorNormalCompletion = true;\n  var _didIteratorError = false;\n  var _iteratorError = undefined;\n\n  try {\n    for (var _iterator = (0, _getIterator2.default)(roleDefinition.superClass), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n      var superClassIter = _step.value;\n      var _iteratorNormalCompletion2 = true;\n      var _didIteratorError2 = false;\n      var _iteratorError2 = undefined;\n\n      try {\n        for (var _iterator2 = (0, _getIterator2.default)(superClassIter), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {\n          var superClassName = _step2.value;\n          var superClassDefinition = rolesMap.get(superClassName);\n\n          if (superClassDefinition) {\n            for (var _i = 0, _Object$keys = (0, _keys.default)(superClassDefinition.props); _i < _Object$keys.length; _i++) {\n              var prop = _Object$keys[_i];\n\n              if (!Object.prototype.hasOwnProperty.call(roleDefinition.props, prop)) {\n                (0, _assign.default)(roleDefinition.props, (0, _defineProperty2.default)({}, prop, superClassDefinition.props[prop]));\n              }\n            }\n          }\n        }\n      } catch (err) {\n        _didIteratorError2 = true;\n        _iteratorError2 = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {\n            _iterator2.return();\n          }\n        } finally {\n          if (_didIteratorError2) {\n            throw _iteratorError2;\n          }\n        }\n      }\n    }\n  } catch (err) {\n    _didIteratorError = true;\n    _iteratorError = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion && _iterator.return != null) {\n        _iterator.return();\n      }\n    } finally {\n      if (_didIteratorError) {\n        throw _iteratorError;\n      }\n    }\n  }\n});\nvar _default = rolesMap;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/aria-query/lib/rolesMap.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/array/from.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js-pure/es/array/from.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es.string.iterator */ \"./node_modules/core-js-pure/modules/es.string.iterator.js\");\n__webpack_require__(/*! ../../modules/es.array.from */ \"./node_modules/core-js-pure/modules/es.array.from.js\");\nvar path = __webpack_require__(/*! ../../internals/path */ \"./node_modules/core-js-pure/internals/path.js\");\n\nmodule.exports = path.Array.from;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/es/array/from.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/array/is-array.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js-pure/es/array/is-array.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es.array.is-array */ \"./node_modules/core-js-pure/modules/es.array.is-array.js\");\nvar path = __webpack_require__(/*! ../../internals/path */ \"./node_modules/core-js-pure/internals/path.js\");\n\nmodule.exports = path.Array.isArray;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/es/array/is-array.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/array/virtual/concat.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/es/array/virtual/concat.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../../modules/es.array.concat */ \"./node_modules/core-js-pure/modules/es.array.concat.js\");\nvar entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ \"./node_modules/core-js-pure/internals/entry-virtual.js\");\n\nmodule.exports = entryVirtual('Array').concat;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/es/array/virtual/concat.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/array/virtual/entries.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/es/array/virtual/entries.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../../modules/es.array.iterator */ \"./node_modules/core-js-pure/modules/es.array.iterator.js\");\nvar entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ \"./node_modules/core-js-pure/internals/entry-virtual.js\");\n\nmodule.exports = entryVirtual('Array').entries;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/es/array/virtual/entries.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/array/virtual/find.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/es/array/virtual/find.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../../modules/es.array.find */ \"./node_modules/core-js-pure/modules/es.array.find.js\");\nvar entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ \"./node_modules/core-js-pure/internals/entry-virtual.js\");\n\nmodule.exports = entryVirtual('Array').find;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/es/array/virtual/find.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/array/virtual/for-each.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/es/array/virtual/for-each.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../../modules/es.array.for-each */ \"./node_modules/core-js-pure/modules/es.array.for-each.js\");\nvar entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ \"./node_modules/core-js-pure/internals/entry-virtual.js\");\n\nmodule.exports = entryVirtual('Array').forEach;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/es/array/virtual/for-each.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/array/virtual/keys.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/es/array/virtual/keys.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../../modules/es.array.iterator */ \"./node_modules/core-js-pure/modules/es.array.iterator.js\");\nvar entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ \"./node_modules/core-js-pure/internals/entry-virtual.js\");\n\nmodule.exports = entryVirtual('Array').keys;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/es/array/virtual/keys.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/array/virtual/slice.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/es/array/virtual/slice.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../../modules/es.array.slice */ \"./node_modules/core-js-pure/modules/es.array.slice.js\");\nvar entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ \"./node_modules/core-js-pure/internals/entry-virtual.js\");\n\nmodule.exports = entryVirtual('Array').slice;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/es/array/virtual/slice.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/instance/concat.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js-pure/es/instance/concat.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var concat = __webpack_require__(/*! ../array/virtual/concat */ \"./node_modules/core-js-pure/es/array/virtual/concat.js\");\n\nvar ArrayPrototype = Array.prototype;\n\nmodule.exports = function (it) {\n  var own = it.concat;\n  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.concat) ? concat : own;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/es/instance/concat.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/instance/find.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js-pure/es/instance/find.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var find = __webpack_require__(/*! ../array/virtual/find */ \"./node_modules/core-js-pure/es/array/virtual/find.js\");\n\nvar ArrayPrototype = Array.prototype;\n\nmodule.exports = function (it) {\n  var own = it.find;\n  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.find) ? find : own;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/es/instance/find.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/instance/slice.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js-pure/es/instance/slice.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var slice = __webpack_require__(/*! ../array/virtual/slice */ \"./node_modules/core-js-pure/es/array/virtual/slice.js\");\n\nvar ArrayPrototype = Array.prototype;\n\nmodule.exports = function (it) {\n  var own = it.slice;\n  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.slice) ? slice : own;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/es/instance/slice.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/json/stringify.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js-pure/es/json/stringify.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es.json.stringify */ \"./node_modules/core-js-pure/modules/es.json.stringify.js\");\nvar core = __webpack_require__(/*! ../../internals/path */ \"./node_modules/core-js-pure/internals/path.js\");\n\nif (!core.JSON) core.JSON = { stringify: JSON.stringify };\n\n// eslint-disable-next-line no-unused-vars\nmodule.exports = function stringify(it, replacer, space) {\n  return core.JSON.stringify.apply(null, arguments);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/es/json/stringify.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/map/index.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js-pure/es/map/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es.map */ \"./node_modules/core-js-pure/modules/es.map.js\");\n__webpack_require__(/*! ../../modules/es.object.to-string */ \"./node_modules/core-js-pure/modules/es.object.to-string.js\");\n__webpack_require__(/*! ../../modules/es.string.iterator */ \"./node_modules/core-js-pure/modules/es.string.iterator.js\");\n__webpack_require__(/*! ../../modules/web.dom-collections.iterator */ \"./node_modules/core-js-pure/modules/web.dom-collections.iterator.js\");\nvar path = __webpack_require__(/*! ../../internals/path */ \"./node_modules/core-js-pure/internals/path.js\");\n\nmodule.exports = path.Map;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/es/map/index.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/object/assign.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js-pure/es/object/assign.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es.object.assign */ \"./node_modules/core-js-pure/modules/es.object.assign.js\");\nvar path = __webpack_require__(/*! ../../internals/path */ \"./node_modules/core-js-pure/internals/path.js\");\n\nmodule.exports = path.Object.assign;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/es/object/assign.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/object/define-property.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/es/object/define-property.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es.object.define-property */ \"./node_modules/core-js-pure/modules/es.object.define-property.js\");\nvar path = __webpack_require__(/*! ../../internals/path */ \"./node_modules/core-js-pure/internals/path.js\");\n\nvar Object = path.Object;\n\nvar defineProperty = module.exports = function defineProperty(it, key, desc) {\n  return Object.defineProperty(it, key, desc);\n};\n\nif (Object.defineProperty.sham) defineProperty.sham = true;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/es/object/define-property.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/object/keys.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js-pure/es/object/keys.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es.object.keys */ \"./node_modules/core-js-pure/modules/es.object.keys.js\");\nvar path = __webpack_require__(/*! ../../internals/path */ \"./node_modules/core-js-pure/internals/path.js\");\n\nmodule.exports = path.Object.keys;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/es/object/keys.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/set/index.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js-pure/es/set/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es.set */ \"./node_modules/core-js-pure/modules/es.set.js\");\n__webpack_require__(/*! ../../modules/es.object.to-string */ \"./node_modules/core-js-pure/modules/es.object.to-string.js\");\n__webpack_require__(/*! ../../modules/es.string.iterator */ \"./node_modules/core-js-pure/modules/es.string.iterator.js\");\n__webpack_require__(/*! ../../modules/web.dom-collections.iterator */ \"./node_modules/core-js-pure/modules/web.dom-collections.iterator.js\");\nvar path = __webpack_require__(/*! ../../internals/path */ \"./node_modules/core-js-pure/internals/path.js\");\n\nmodule.exports = path.Set;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/es/set/index.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/symbol/index.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js-pure/es/symbol/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es.array.concat */ \"./node_modules/core-js-pure/modules/es.array.concat.js\");\n__webpack_require__(/*! ../../modules/es.object.to-string */ \"./node_modules/core-js-pure/modules/es.object.to-string.js\");\n__webpack_require__(/*! ../../modules/es.symbol */ \"./node_modules/core-js-pure/modules/es.symbol.js\");\n__webpack_require__(/*! ../../modules/es.symbol.async-iterator */ \"./node_modules/core-js-pure/modules/es.symbol.async-iterator.js\");\n__webpack_require__(/*! ../../modules/es.symbol.description */ \"./node_modules/core-js-pure/modules/es.symbol.description.js\");\n__webpack_require__(/*! ../../modules/es.symbol.has-instance */ \"./node_modules/core-js-pure/modules/es.symbol.has-instance.js\");\n__webpack_require__(/*! ../../modules/es.symbol.is-concat-spreadable */ \"./node_modules/core-js-pure/modules/es.symbol.is-concat-spreadable.js\");\n__webpack_require__(/*! ../../modules/es.symbol.iterator */ \"./node_modules/core-js-pure/modules/es.symbol.iterator.js\");\n__webpack_require__(/*! ../../modules/es.symbol.match */ \"./node_modules/core-js-pure/modules/es.symbol.match.js\");\n__webpack_require__(/*! ../../modules/es.symbol.match-all */ \"./node_modules/core-js-pure/modules/es.symbol.match-all.js\");\n__webpack_require__(/*! ../../modules/es.symbol.replace */ \"./node_modules/core-js-pure/modules/es.symbol.replace.js\");\n__webpack_require__(/*! ../../modules/es.symbol.search */ \"./node_modules/core-js-pure/modules/es.symbol.search.js\");\n__webpack_require__(/*! ../../modules/es.symbol.species */ \"./node_modules/core-js-pure/modules/es.symbol.species.js\");\n__webpack_require__(/*! ../../modules/es.symbol.split */ \"./node_modules/core-js-pure/modules/es.symbol.split.js\");\n__webpack_require__(/*! ../../modules/es.symbol.to-primitive */ \"./node_modules/core-js-pure/modules/es.symbol.to-primitive.js\");\n__webpack_require__(/*! ../../modules/es.symbol.to-string-tag */ \"./node_modules/core-js-pure/modules/es.symbol.to-string-tag.js\");\n__webpack_require__(/*! ../../modules/es.symbol.unscopables */ \"./node_modules/core-js-pure/modules/es.symbol.unscopables.js\");\n__webpack_require__(/*! ../../modules/es.math.to-string-tag */ \"./node_modules/core-js-pure/modules/es.math.to-string-tag.js\");\n__webpack_require__(/*! ../../modules/es.json.to-string-tag */ \"./node_modules/core-js-pure/modules/es.json.to-string-tag.js\");\nvar path = __webpack_require__(/*! ../../internals/path */ \"./node_modules/core-js-pure/internals/path.js\");\n\nmodule.exports = path.Symbol;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/es/symbol/index.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/features/array/from.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/features/array/from.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../es/array/from */ \"./node_modules/core-js-pure/es/array/from.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/features/array/from.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/features/array/is-array.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/features/array/is-array.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../es/array/is-array */ \"./node_modules/core-js-pure/es/array/is-array.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/features/array/is-array.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/features/get-iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/features/get-iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../modules/web.dom-collections.iterator */ \"./node_modules/core-js-pure/modules/web.dom-collections.iterator.js\");\n__webpack_require__(/*! ../modules/es.string.iterator */ \"./node_modules/core-js-pure/modules/es.string.iterator.js\");\nvar getIterator = __webpack_require__(/*! ../internals/get-iterator */ \"./node_modules/core-js-pure/internals/get-iterator.js\");\n\nmodule.exports = getIterator;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/features/get-iterator.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/features/instance/slice.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/features/instance/slice.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../es/instance/slice */ \"./node_modules/core-js-pure/es/instance/slice.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/features/instance/slice.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/features/is-iterable.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/features/is-iterable.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../modules/web.dom-collections.iterator */ \"./node_modules/core-js-pure/modules/web.dom-collections.iterator.js\");\n__webpack_require__(/*! ../modules/es.string.iterator */ \"./node_modules/core-js-pure/modules/es.string.iterator.js\");\nvar isIterable = __webpack_require__(/*! ../internals/is-iterable */ \"./node_modules/core-js-pure/internals/is-iterable.js\");\n\nmodule.exports = isIterable;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/features/is-iterable.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/features/object/define-property.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js-pure/features/object/define-property.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../es/object/define-property */ \"./node_modules/core-js-pure/es/object/define-property.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/features/object/define-property.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/features/symbol/index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/features/symbol/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../es/symbol */ \"./node_modules/core-js-pure/es/symbol/index.js\");\n__webpack_require__(/*! ../../modules/esnext.symbol.async-dispose */ \"./node_modules/core-js-pure/modules/esnext.symbol.async-dispose.js\");\n__webpack_require__(/*! ../../modules/esnext.symbol.dispose */ \"./node_modules/core-js-pure/modules/esnext.symbol.dispose.js\");\n__webpack_require__(/*! ../../modules/esnext.symbol.observable */ \"./node_modules/core-js-pure/modules/esnext.symbol.observable.js\");\n__webpack_require__(/*! ../../modules/esnext.symbol.pattern-match */ \"./node_modules/core-js-pure/modules/esnext.symbol.pattern-match.js\");\n// TODO: Remove from `core-js@4`\n__webpack_require__(/*! ../../modules/esnext.symbol.replace-all */ \"./node_modules/core-js-pure/modules/esnext.symbol.replace-all.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/features/symbol/index.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/a-function.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/a-function.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  if (typeof it != 'function') {\n    throw TypeError(String(it) + ' is not a function');\n  } return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/a-function.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/a-possible-prototype.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/a-possible-prototype.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js-pure/internals/is-object.js\");\n\nmodule.exports = function (it) {\n  if (!isObject(it) && it !== null) {\n    throw TypeError(\"Can't set \" + String(it) + ' as a prototype');\n  } return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/a-possible-prototype.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/add-to-unscopables.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/add-to-unscopables.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function () { /* empty */ };\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/add-to-unscopables.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/an-instance.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/an-instance.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it, Constructor, name) {\n  if (!(it instanceof Constructor)) {\n    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');\n  } return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/an-instance.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/an-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/an-object.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js-pure/internals/is-object.js\");\n\nmodule.exports = function (it) {\n  if (!isObject(it)) {\n    throw TypeError(String(it) + ' is not an object');\n  } return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/an-object.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/array-for-each.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/array-for-each.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $forEach = __webpack_require__(/*! ../internals/array-iteration */ \"./node_modules/core-js-pure/internals/array-iteration.js\").forEach;\nvar arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ \"./node_modules/core-js-pure/internals/array-method-is-strict.js\");\nvar arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ \"./node_modules/core-js-pure/internals/array-method-uses-to-length.js\");\n\nvar STRICT_METHOD = arrayMethodIsStrict('forEach');\nvar USES_TO_LENGTH = arrayMethodUsesToLength('forEach');\n\n// `Array.prototype.forEach` method implementation\n// https://tc39.github.io/ecma262/#sec-array.prototype.foreach\nmodule.exports = (!STRICT_METHOD || !USES_TO_LENGTH) ? function forEach(callbackfn /* , thisArg */) {\n  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n} : [].forEach;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/array-for-each.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/array-from.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/array-from.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar bind = __webpack_require__(/*! ../internals/function-bind-context */ \"./node_modules/core-js-pure/internals/function-bind-context.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js-pure/internals/to-object.js\");\nvar callWithSafeIterationClosing = __webpack_require__(/*! ../internals/call-with-safe-iteration-closing */ \"./node_modules/core-js-pure/internals/call-with-safe-iteration-closing.js\");\nvar isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ \"./node_modules/core-js-pure/internals/is-array-iterator-method.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js-pure/internals/to-length.js\");\nvar createProperty = __webpack_require__(/*! ../internals/create-property */ \"./node_modules/core-js-pure/internals/create-property.js\");\nvar getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ \"./node_modules/core-js-pure/internals/get-iterator-method.js\");\n\n// `Array.from` method implementation\n// https://tc39.github.io/ecma262/#sec-array.from\nmodule.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {\n  var O = toObject(arrayLike);\n  var C = typeof this == 'function' ? this : Array;\n  var argumentsLength = arguments.length;\n  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;\n  var mapping = mapfn !== undefined;\n  var iteratorMethod = getIteratorMethod(O);\n  var index = 0;\n  var length, result, step, iterator, next, value;\n  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);\n  // if the target is not iterable or it's an array with the default iterator - use a simple case\n  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {\n    iterator = iteratorMethod.call(O);\n    next = iterator.next;\n    result = new C();\n    for (;!(step = next.call(iterator)).done; index++) {\n      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;\n      createProperty(result, index, value);\n    }\n  } else {\n    length = toLength(O.length);\n    result = new C(length);\n    for (;length > index; index++) {\n      value = mapping ? mapfn(O[index], index) : O[index];\n      createProperty(result, index, value);\n    }\n  }\n  result.length = index;\n  return result;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/array-from.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/array-includes.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/array-includes.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js-pure/internals/to-indexed-object.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js-pure/internals/to-length.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ \"./node_modules/core-js-pure/internals/to-absolute-index.js\");\n\n// `Array.prototype.{ indexOf, includes }` methods implementation\nvar createMethod = function (IS_INCLUDES) {\n  return function ($this, el, fromIndex) {\n    var O = toIndexedObject($this);\n    var length = toLength(O.length);\n    var index = toAbsoluteIndex(fromIndex, length);\n    var value;\n    // Array#includes uses SameValueZero equality algorithm\n    // eslint-disable-next-line no-self-compare\n    if (IS_INCLUDES && el != el) while (length > index) {\n      value = O[index++];\n      // eslint-disable-next-line no-self-compare\n      if (value != value) return true;\n    // Array#indexOf ignores holes, Array#includes - not\n    } else for (;length > index; index++) {\n      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;\n    } return !IS_INCLUDES && -1;\n  };\n};\n\nmodule.exports = {\n  // `Array.prototype.includes` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.includes\n  includes: createMethod(true),\n  // `Array.prototype.indexOf` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof\n  indexOf: createMethod(false)\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/array-includes.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/array-iteration.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/array-iteration.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var bind = __webpack_require__(/*! ../internals/function-bind-context */ \"./node_modules/core-js-pure/internals/function-bind-context.js\");\nvar IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ \"./node_modules/core-js-pure/internals/indexed-object.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js-pure/internals/to-object.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js-pure/internals/to-length.js\");\nvar arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ \"./node_modules/core-js-pure/internals/array-species-create.js\");\n\nvar push = [].push;\n\n// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation\nvar createMethod = function (TYPE) {\n  var IS_MAP = TYPE == 1;\n  var IS_FILTER = TYPE == 2;\n  var IS_SOME = TYPE == 3;\n  var IS_EVERY = TYPE == 4;\n  var IS_FIND_INDEX = TYPE == 6;\n  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;\n  return function ($this, callbackfn, that, specificCreate) {\n    var O = toObject($this);\n    var self = IndexedObject(O);\n    var boundFunction = bind(callbackfn, that, 3);\n    var length = toLength(self.length);\n    var index = 0;\n    var create = specificCreate || arraySpeciesCreate;\n    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;\n    var value, result;\n    for (;length > index; index++) if (NO_HOLES || index in self) {\n      value = self[index];\n      result = boundFunction(value, index, O);\n      if (TYPE) {\n        if (IS_MAP) target[index] = result; // map\n        else if (result) switch (TYPE) {\n          case 3: return true;              // some\n          case 5: return value;             // find\n          case 6: return index;             // findIndex\n          case 2: push.call(target, value); // filter\n        } else if (IS_EVERY) return false;  // every\n      }\n    }\n    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;\n  };\n};\n\nmodule.exports = {\n  // `Array.prototype.forEach` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach\n  forEach: createMethod(0),\n  // `Array.prototype.map` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.map\n  map: createMethod(1),\n  // `Array.prototype.filter` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.filter\n  filter: createMethod(2),\n  // `Array.prototype.some` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.some\n  some: createMethod(3),\n  // `Array.prototype.every` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.every\n  every: createMethod(4),\n  // `Array.prototype.find` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.find\n  find: createMethod(5),\n  // `Array.prototype.findIndex` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex\n  findIndex: createMethod(6)\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/array-iteration.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/array-method-has-species-support.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/array-method-has-species-support.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\nvar V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ \"./node_modules/core-js-pure/internals/engine-v8-version.js\");\n\nvar SPECIES = wellKnownSymbol('species');\n\nmodule.exports = function (METHOD_NAME) {\n  // We can't use this feature detection in V8 since it causes\n  // deoptimization and serious performance degradation\n  // https://github.com/zloirock/core-js/issues/677\n  return V8_VERSION >= 51 || !fails(function () {\n    var array = [];\n    var constructor = array.constructor = {};\n    constructor[SPECIES] = function () {\n      return { foo: 1 };\n    };\n    return array[METHOD_NAME](Boolean).foo !== 1;\n  });\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/array-method-has-species-support.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/array-method-is-strict.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/array-method-is-strict.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\n\nmodule.exports = function (METHOD_NAME, argument) {\n  var method = [][METHOD_NAME];\n  return !!method && fails(function () {\n    // eslint-disable-next-line no-useless-call,no-throw-literal\n    method.call(null, argument || function () { throw 1; }, 1);\n  });\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/array-method-is-strict.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/array-method-uses-to-length.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/array-method-uses-to-length.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js-pure/internals/descriptors.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js-pure/internals/has.js\");\n\nvar defineProperty = Object.defineProperty;\nvar cache = {};\n\nvar thrower = function (it) { throw it; };\n\nmodule.exports = function (METHOD_NAME, options) {\n  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];\n  if (!options) options = {};\n  var method = [][METHOD_NAME];\n  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;\n  var argument0 = has(options, 0) ? options[0] : thrower;\n  var argument1 = has(options, 1) ? options[1] : undefined;\n\n  return cache[METHOD_NAME] = !!method && !fails(function () {\n    if (ACCESSORS && !DESCRIPTORS) return true;\n    var O = { length: -1 };\n\n    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });\n    else O[1] = 1;\n\n    method.call(O, argument0, argument1);\n  });\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/array-method-uses-to-length.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/array-species-create.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/array-species-create.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js-pure/internals/is-object.js\");\nvar isArray = __webpack_require__(/*! ../internals/is-array */ \"./node_modules/core-js-pure/internals/is-array.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar SPECIES = wellKnownSymbol('species');\n\n// `ArraySpeciesCreate` abstract operation\n// https://tc39.github.io/ecma262/#sec-arrayspeciescreate\nmodule.exports = function (originalArray, length) {\n  var C;\n  if (isArray(originalArray)) {\n    C = originalArray.constructor;\n    // cross-realm fallback\n    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;\n    else if (isObject(C)) {\n      C = C[SPECIES];\n      if (C === null) C = undefined;\n    }\n  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/array-species-create.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/call-with-safe-iteration-closing.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/call-with-safe-iteration-closing.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js-pure/internals/an-object.js\");\n\n// call something on iterator step with safe closing on error\nmodule.exports = function (iterator, fn, value, ENTRIES) {\n  try {\n    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);\n  // 7.4.6 IteratorClose(iterator, completion)\n  } catch (error) {\n    var returnMethod = iterator['return'];\n    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));\n    throw error;\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/call-with-safe-iteration-closing.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/check-correctness-of-iteration.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/check-correctness-of-iteration.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\nvar SAFE_CLOSING = false;\n\ntry {\n  var called = 0;\n  var iteratorWithReturn = {\n    next: function () {\n      return { done: !!called++ };\n    },\n    'return': function () {\n      SAFE_CLOSING = true;\n    }\n  };\n  iteratorWithReturn[ITERATOR] = function () {\n    return this;\n  };\n  // eslint-disable-next-line no-throw-literal\n  Array.from(iteratorWithReturn, function () { throw 2; });\n} catch (error) { /* empty */ }\n\nmodule.exports = function (exec, SKIP_CLOSING) {\n  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;\n  var ITERATION_SUPPORT = false;\n  try {\n    var object = {};\n    object[ITERATOR] = function () {\n      return {\n        next: function () {\n          return { done: ITERATION_SUPPORT = true };\n        }\n      };\n    };\n    exec(object);\n  } catch (error) { /* empty */ }\n  return ITERATION_SUPPORT;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/check-correctness-of-iteration.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/classof-raw.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/classof-raw.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var toString = {}.toString;\n\nmodule.exports = function (it) {\n  return toString.call(it).slice(8, -1);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/classof-raw.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/classof.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/classof.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ \"./node_modules/core-js-pure/internals/to-string-tag-support.js\");\nvar classofRaw = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js-pure/internals/classof-raw.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\n// ES3 wrong here\nvar CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';\n\n// fallback for IE11 Script Access Denied error\nvar tryGet = function (it, key) {\n  try {\n    return it[key];\n  } catch (error) { /* empty */ }\n};\n\n// getting tag from ES6+ `Object.prototype.toString`\nmodule.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {\n  var O, tag, result;\n  return it === undefined ? 'Undefined' : it === null ? 'Null'\n    // @@toStringTag case\n    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag\n    // builtinTag case\n    : CORRECT_ARGUMENTS ? classofRaw(O)\n    // ES3 arguments fallback\n    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/classof.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/collection-strong.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/collection-strong.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar defineProperty = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js-pure/internals/object-define-property.js\").f;\nvar create = __webpack_require__(/*! ../internals/object-create */ \"./node_modules/core-js-pure/internals/object-create.js\");\nvar redefineAll = __webpack_require__(/*! ../internals/redefine-all */ \"./node_modules/core-js-pure/internals/redefine-all.js\");\nvar bind = __webpack_require__(/*! ../internals/function-bind-context */ \"./node_modules/core-js-pure/internals/function-bind-context.js\");\nvar anInstance = __webpack_require__(/*! ../internals/an-instance */ \"./node_modules/core-js-pure/internals/an-instance.js\");\nvar iterate = __webpack_require__(/*! ../internals/iterate */ \"./node_modules/core-js-pure/internals/iterate.js\");\nvar defineIterator = __webpack_require__(/*! ../internals/define-iterator */ \"./node_modules/core-js-pure/internals/define-iterator.js\");\nvar setSpecies = __webpack_require__(/*! ../internals/set-species */ \"./node_modules/core-js-pure/internals/set-species.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js-pure/internals/descriptors.js\");\nvar fastKey = __webpack_require__(/*! ../internals/internal-metadata */ \"./node_modules/core-js-pure/internals/internal-metadata.js\").fastKey;\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js-pure/internals/internal-state.js\");\n\nvar setInternalState = InternalStateModule.set;\nvar internalStateGetterFor = InternalStateModule.getterFor;\n\nmodule.exports = {\n  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {\n    var C = wrapper(function (that, iterable) {\n      anInstance(that, C, CONSTRUCTOR_NAME);\n      setInternalState(that, {\n        type: CONSTRUCTOR_NAME,\n        index: create(null),\n        first: undefined,\n        last: undefined,\n        size: 0\n      });\n      if (!DESCRIPTORS) that.size = 0;\n      if (iterable != undefined) iterate(iterable, that[ADDER], that, IS_MAP);\n    });\n\n    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);\n\n    var define = function (that, key, value) {\n      var state = getInternalState(that);\n      var entry = getEntry(that, key);\n      var previous, index;\n      // change existing entry\n      if (entry) {\n        entry.value = value;\n      // create new entry\n      } else {\n        state.last = entry = {\n          index: index = fastKey(key, true),\n          key: key,\n          value: value,\n          previous: previous = state.last,\n          next: undefined,\n          removed: false\n        };\n        if (!state.first) state.first = entry;\n        if (previous) previous.next = entry;\n        if (DESCRIPTORS) state.size++;\n        else that.size++;\n        // add to index\n        if (index !== 'F') state.index[index] = entry;\n      } return that;\n    };\n\n    var getEntry = function (that, key) {\n      var state = getInternalState(that);\n      // fast case\n      var index = fastKey(key);\n      var entry;\n      if (index !== 'F') return state.index[index];\n      // frozen object case\n      for (entry = state.first; entry; entry = entry.next) {\n        if (entry.key == key) return entry;\n      }\n    };\n\n    redefineAll(C.prototype, {\n      // 23.1.3.1 Map.prototype.clear()\n      // 23.2.3.2 Set.prototype.clear()\n      clear: function clear() {\n        var that = this;\n        var state = getInternalState(that);\n        var data = state.index;\n        var entry = state.first;\n        while (entry) {\n          entry.removed = true;\n          if (entry.previous) entry.previous = entry.previous.next = undefined;\n          delete data[entry.index];\n          entry = entry.next;\n        }\n        state.first = state.last = undefined;\n        if (DESCRIPTORS) state.size = 0;\n        else that.size = 0;\n      },\n      // 23.1.3.3 Map.prototype.delete(key)\n      // 23.2.3.4 Set.prototype.delete(value)\n      'delete': function (key) {\n        var that = this;\n        var state = getInternalState(that);\n        var entry = getEntry(that, key);\n        if (entry) {\n          var next = entry.next;\n          var prev = entry.previous;\n          delete state.index[entry.index];\n          entry.removed = true;\n          if (prev) prev.next = next;\n          if (next) next.previous = prev;\n          if (state.first == entry) state.first = next;\n          if (state.last == entry) state.last = prev;\n          if (DESCRIPTORS) state.size--;\n          else that.size--;\n        } return !!entry;\n      },\n      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)\n      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)\n      forEach: function forEach(callbackfn /* , that = undefined */) {\n        var state = getInternalState(this);\n        var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);\n        var entry;\n        while (entry = entry ? entry.next : state.first) {\n          boundFunction(entry.value, entry.key, this);\n          // revert to the last existing entry\n          while (entry && entry.removed) entry = entry.previous;\n        }\n      },\n      // 23.1.3.7 Map.prototype.has(key)\n      // 23.2.3.7 Set.prototype.has(value)\n      has: function has(key) {\n        return !!getEntry(this, key);\n      }\n    });\n\n    redefineAll(C.prototype, IS_MAP ? {\n      // 23.1.3.6 Map.prototype.get(key)\n      get: function get(key) {\n        var entry = getEntry(this, key);\n        return entry && entry.value;\n      },\n      // 23.1.3.9 Map.prototype.set(key, value)\n      set: function set(key, value) {\n        return define(this, key === 0 ? 0 : key, value);\n      }\n    } : {\n      // 23.2.3.1 Set.prototype.add(value)\n      add: function add(value) {\n        return define(this, value = value === 0 ? 0 : value, value);\n      }\n    });\n    if (DESCRIPTORS) defineProperty(C.prototype, 'size', {\n      get: function () {\n        return getInternalState(this).size;\n      }\n    });\n    return C;\n  },\n  setStrong: function (C, CONSTRUCTOR_NAME, IS_MAP) {\n    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';\n    var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);\n    var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);\n    // add .keys, .values, .entries, [@@iterator]\n    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11\n    defineIterator(C, CONSTRUCTOR_NAME, function (iterated, kind) {\n      setInternalState(this, {\n        type: ITERATOR_NAME,\n        target: iterated,\n        state: getInternalCollectionState(iterated),\n        kind: kind,\n        last: undefined\n      });\n    }, function () {\n      var state = getInternalIteratorState(this);\n      var kind = state.kind;\n      var entry = state.last;\n      // revert to the last existing entry\n      while (entry && entry.removed) entry = entry.previous;\n      // get next entry\n      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {\n        // or finish the iteration\n        state.target = undefined;\n        return { value: undefined, done: true };\n      }\n      // return step by kind\n      if (kind == 'keys') return { value: entry.key, done: false };\n      if (kind == 'values') return { value: entry.value, done: false };\n      return { value: [entry.key, entry.value], done: false };\n    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);\n\n    // add [@@species], 23.1.2.2, 23.2.2.2\n    setSpecies(CONSTRUCTOR_NAME);\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/collection-strong.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/collection.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/collection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ./export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\nvar InternalMetadataModule = __webpack_require__(/*! ../internals/internal-metadata */ \"./node_modules/core-js-pure/internals/internal-metadata.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js-pure/internals/create-non-enumerable-property.js\");\nvar iterate = __webpack_require__(/*! ../internals/iterate */ \"./node_modules/core-js-pure/internals/iterate.js\");\nvar anInstance = __webpack_require__(/*! ../internals/an-instance */ \"./node_modules/core-js-pure/internals/an-instance.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js-pure/internals/is-object.js\");\nvar setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"./node_modules/core-js-pure/internals/set-to-string-tag.js\");\nvar defineProperty = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js-pure/internals/object-define-property.js\").f;\nvar forEach = __webpack_require__(/*! ../internals/array-iteration */ \"./node_modules/core-js-pure/internals/array-iteration.js\").forEach;\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js-pure/internals/descriptors.js\");\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js-pure/internals/internal-state.js\");\n\nvar setInternalState = InternalStateModule.set;\nvar internalStateGetterFor = InternalStateModule.getterFor;\n\nmodule.exports = function (CONSTRUCTOR_NAME, wrapper, common) {\n  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;\n  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;\n  var ADDER = IS_MAP ? 'set' : 'add';\n  var NativeConstructor = global[CONSTRUCTOR_NAME];\n  var NativePrototype = NativeConstructor && NativeConstructor.prototype;\n  var exported = {};\n  var Constructor;\n\n  if (!DESCRIPTORS || typeof NativeConstructor != 'function'\n    || !(IS_WEAK || NativePrototype.forEach && !fails(function () { new NativeConstructor().entries().next(); }))\n  ) {\n    // create collection constructor\n    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);\n    InternalMetadataModule.REQUIRED = true;\n  } else {\n    Constructor = wrapper(function (target, iterable) {\n      setInternalState(anInstance(target, Constructor, CONSTRUCTOR_NAME), {\n        type: CONSTRUCTOR_NAME,\n        collection: new NativeConstructor()\n      });\n      if (iterable != undefined) iterate(iterable, target[ADDER], target, IS_MAP);\n    });\n\n    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);\n\n    forEach(['add', 'clear', 'delete', 'forEach', 'get', 'has', 'set', 'keys', 'values', 'entries'], function (KEY) {\n      var IS_ADDER = KEY == 'add' || KEY == 'set';\n      if (KEY in NativePrototype && !(IS_WEAK && KEY == 'clear')) {\n        createNonEnumerableProperty(Constructor.prototype, KEY, function (a, b) {\n          var collection = getInternalState(this).collection;\n          if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;\n          var result = collection[KEY](a === 0 ? 0 : a, b);\n          return IS_ADDER ? this : result;\n        });\n      }\n    });\n\n    IS_WEAK || defineProperty(Constructor.prototype, 'size', {\n      configurable: true,\n      get: function () {\n        return getInternalState(this).collection.size;\n      }\n    });\n  }\n\n  setToStringTag(Constructor, CONSTRUCTOR_NAME, false, true);\n\n  exported[CONSTRUCTOR_NAME] = Constructor;\n  $({ global: true, forced: true }, exported);\n\n  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);\n\n  return Constructor;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/collection.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/correct-prototype-getter.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/correct-prototype-getter.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\n\nmodule.exports = !fails(function () {\n  function F() { /* empty */ }\n  F.prototype.constructor = null;\n  return Object.getPrototypeOf(new F()) !== F.prototype;\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/correct-prototype-getter.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/create-iterator-constructor.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/create-iterator-constructor.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar IteratorPrototype = __webpack_require__(/*! ../internals/iterators-core */ \"./node_modules/core-js-pure/internals/iterators-core.js\").IteratorPrototype;\nvar create = __webpack_require__(/*! ../internals/object-create */ \"./node_modules/core-js-pure/internals/object-create.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js-pure/internals/create-property-descriptor.js\");\nvar setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"./node_modules/core-js-pure/internals/set-to-string-tag.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"./node_modules/core-js-pure/internals/iterators.js\");\n\nvar returnThis = function () { return this; };\n\nmodule.exports = function (IteratorConstructor, NAME, next) {\n  var TO_STRING_TAG = NAME + ' Iterator';\n  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });\n  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);\n  Iterators[TO_STRING_TAG] = returnThis;\n  return IteratorConstructor;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/create-iterator-constructor.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/create-non-enumerable-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/create-non-enumerable-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js-pure/internals/descriptors.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js-pure/internals/object-define-property.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js-pure/internals/create-property-descriptor.js\");\n\nmodule.exports = DESCRIPTORS ? function (object, key, value) {\n  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/create-non-enumerable-property.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/create-property-descriptor.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/create-property-descriptor.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/create-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/create-property.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/create-property.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"./node_modules/core-js-pure/internals/to-primitive.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js-pure/internals/object-define-property.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js-pure/internals/create-property-descriptor.js\");\n\nmodule.exports = function (object, key, value) {\n  var propertyKey = toPrimitive(key);\n  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));\n  else object[propertyKey] = value;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/create-property.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/define-iterator.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/define-iterator.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ \"./node_modules/core-js-pure/internals/create-iterator-constructor.js\");\nvar getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ \"./node_modules/core-js-pure/internals/object-get-prototype-of.js\");\nvar setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ \"./node_modules/core-js-pure/internals/object-set-prototype-of.js\");\nvar setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"./node_modules/core-js-pure/internals/set-to-string-tag.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js-pure/internals/create-non-enumerable-property.js\");\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/core-js-pure/internals/redefine.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js-pure/internals/is-pure.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"./node_modules/core-js-pure/internals/iterators.js\");\nvar IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ \"./node_modules/core-js-pure/internals/iterators-core.js\");\n\nvar IteratorPrototype = IteratorsCore.IteratorPrototype;\nvar BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;\nvar ITERATOR = wellKnownSymbol('iterator');\nvar KEYS = 'keys';\nvar VALUES = 'values';\nvar ENTRIES = 'entries';\n\nvar returnThis = function () { return this; };\n\nmodule.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {\n  createIteratorConstructor(IteratorConstructor, NAME, next);\n\n  var getIterationMethod = function (KIND) {\n    if (KIND === DEFAULT && defaultIterator) return defaultIterator;\n    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];\n    switch (KIND) {\n      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };\n      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };\n      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };\n    } return function () { return new IteratorConstructor(this); };\n  };\n\n  var TO_STRING_TAG = NAME + ' Iterator';\n  var INCORRECT_VALUES_NAME = false;\n  var IterablePrototype = Iterable.prototype;\n  var nativeIterator = IterablePrototype[ITERATOR]\n    || IterablePrototype['@@iterator']\n    || DEFAULT && IterablePrototype[DEFAULT];\n  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);\n  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;\n  var CurrentIteratorPrototype, methods, KEY;\n\n  // fix native\n  if (anyNativeIterator) {\n    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));\n    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {\n      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {\n        if (setPrototypeOf) {\n          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);\n        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {\n          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);\n        }\n      }\n      // Set @@toStringTag to native iterators\n      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);\n      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;\n    }\n  }\n\n  // fix Array#{values, @@iterator}.name in V8 / FF\n  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {\n    INCORRECT_VALUES_NAME = true;\n    defaultIterator = function values() { return nativeIterator.call(this); };\n  }\n\n  // define iterator\n  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {\n    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);\n  }\n  Iterators[NAME] = defaultIterator;\n\n  // export additional methods\n  if (DEFAULT) {\n    methods = {\n      values: getIterationMethod(VALUES),\n      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),\n      entries: getIterationMethod(ENTRIES)\n    };\n    if (FORCED) for (KEY in methods) {\n      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {\n        redefine(IterablePrototype, KEY, methods[KEY]);\n      }\n    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);\n  }\n\n  return methods;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/define-iterator.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/define-well-known-symbol.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/define-well-known-symbol.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var path = __webpack_require__(/*! ../internals/path */ \"./node_modules/core-js-pure/internals/path.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js-pure/internals/has.js\");\nvar wrappedWellKnownSymbolModule = __webpack_require__(/*! ../internals/well-known-symbol-wrapped */ \"./node_modules/core-js-pure/internals/well-known-symbol-wrapped.js\");\nvar defineProperty = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js-pure/internals/object-define-property.js\").f;\n\nmodule.exports = function (NAME) {\n  var Symbol = path.Symbol || (path.Symbol = {});\n  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {\n    value: wrappedWellKnownSymbolModule.f(NAME)\n  });\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/define-well-known-symbol.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/descriptors.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/descriptors.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\n\n// Thank's IE8 for his funny defineProperty\nmodule.exports = !fails(function () {\n  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/descriptors.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/document-create-element.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/document-create-element.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js-pure/internals/is-object.js\");\n\nvar document = global.document;\n// typeof document.createElement is 'object' in old IE\nvar EXISTS = isObject(document) && isObject(document.createElement);\n\nmodule.exports = function (it) {\n  return EXISTS ? document.createElement(it) : {};\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/document-create-element.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/dom-iterables.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/dom-iterables.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// iterable DOM collections\n// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods\nmodule.exports = {\n  CSSRuleList: 0,\n  CSSStyleDeclaration: 0,\n  CSSValueList: 0,\n  ClientRectList: 0,\n  DOMRectList: 0,\n  DOMStringList: 0,\n  DOMTokenList: 1,\n  DataTransferItemList: 0,\n  FileList: 0,\n  HTMLAllCollection: 0,\n  HTMLCollection: 0,\n  HTMLFormElement: 0,\n  HTMLSelectElement: 0,\n  MediaList: 0,\n  MimeTypeArray: 0,\n  NamedNodeMap: 0,\n  NodeList: 1,\n  PaintRequestList: 0,\n  Plugin: 0,\n  PluginArray: 0,\n  SVGLengthList: 0,\n  SVGNumberList: 0,\n  SVGPathSegList: 0,\n  SVGPointList: 0,\n  SVGStringList: 0,\n  SVGTransformList: 0,\n  SourceBufferList: 0,\n  StyleSheetList: 0,\n  TextTrackCueList: 0,\n  TextTrackList: 0,\n  TouchList: 0\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/dom-iterables.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/engine-user-agent.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/engine-user-agent.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js-pure/internals/get-built-in.js\");\n\nmodule.exports = getBuiltIn('navigator', 'userAgent') || '';\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/engine-user-agent.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/engine-v8-version.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/engine-v8-version.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\nvar userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ \"./node_modules/core-js-pure/internals/engine-user-agent.js\");\n\nvar process = global.process;\nvar versions = process && process.versions;\nvar v8 = versions && versions.v8;\nvar match, version;\n\nif (v8) {\n  match = v8.split('.');\n  version = match[0] + match[1];\n} else if (userAgent) {\n  match = userAgent.match(/Edge\\/(\\d+)/);\n  if (!match || match[1] >= 74) {\n    match = userAgent.match(/Chrome\\/(\\d+)/);\n    if (match) version = match[1];\n  }\n}\n\nmodule.exports = version && +version;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/engine-v8-version.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/entry-virtual.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/entry-virtual.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var path = __webpack_require__(/*! ../internals/path */ \"./node_modules/core-js-pure/internals/path.js\");\n\nmodule.exports = function (CONSTRUCTOR) {\n  return path[CONSTRUCTOR + 'Prototype'];\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/entry-virtual.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/enum-bug-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/enum-bug-keys.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// IE8- don't enum bug keys\nmodule.exports = [\n  'constructor',\n  'hasOwnProperty',\n  'isPrototypeOf',\n  'propertyIsEnumerable',\n  'toLocaleString',\n  'toString',\n  'valueOf'\n];\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/enum-bug-keys.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/export.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js-pure/internals/export.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\nvar getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/core-js-pure/internals/object-get-own-property-descriptor.js\").f;\nvar isForced = __webpack_require__(/*! ../internals/is-forced */ \"./node_modules/core-js-pure/internals/is-forced.js\");\nvar path = __webpack_require__(/*! ../internals/path */ \"./node_modules/core-js-pure/internals/path.js\");\nvar bind = __webpack_require__(/*! ../internals/function-bind-context */ \"./node_modules/core-js-pure/internals/function-bind-context.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js-pure/internals/create-non-enumerable-property.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js-pure/internals/has.js\");\n\nvar wrapConstructor = function (NativeConstructor) {\n  var Wrapper = function (a, b, c) {\n    if (this instanceof NativeConstructor) {\n      switch (arguments.length) {\n        case 0: return new NativeConstructor();\n        case 1: return new NativeConstructor(a);\n        case 2: return new NativeConstructor(a, b);\n      } return new NativeConstructor(a, b, c);\n    } return NativeConstructor.apply(this, arguments);\n  };\n  Wrapper.prototype = NativeConstructor.prototype;\n  return Wrapper;\n};\n\n/*\n  options.target      - name of the target object\n  options.global      - target is the global object\n  options.stat        - export as static methods of target\n  options.proto       - export as prototype methods of target\n  options.real        - real prototype method for the `pure` version\n  options.forced      - export even if the native feature is available\n  options.bind        - bind methods to the target, required for the `pure` version\n  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version\n  options.unsafe      - use the simple assignment of property instead of delete + defineProperty\n  options.sham        - add a flag to not completely full polyfills\n  options.enumerable  - export as enumerable property\n  options.noTargetGet - prevent calling a getter on target\n*/\nmodule.exports = function (options, source) {\n  var TARGET = options.target;\n  var GLOBAL = options.global;\n  var STATIC = options.stat;\n  var PROTO = options.proto;\n\n  var nativeSource = GLOBAL ? global : STATIC ? global[TARGET] : (global[TARGET] || {}).prototype;\n\n  var target = GLOBAL ? path : path[TARGET] || (path[TARGET] = {});\n  var targetPrototype = target.prototype;\n\n  var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;\n  var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;\n\n  for (key in source) {\n    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);\n    // contains in native\n    USE_NATIVE = !FORCED && nativeSource && has(nativeSource, key);\n\n    targetProperty = target[key];\n\n    if (USE_NATIVE) if (options.noTargetGet) {\n      descriptor = getOwnPropertyDescriptor(nativeSource, key);\n      nativeProperty = descriptor && descriptor.value;\n    } else nativeProperty = nativeSource[key];\n\n    // export native or implementation\n    sourceProperty = (USE_NATIVE && nativeProperty) ? nativeProperty : source[key];\n\n    if (USE_NATIVE && typeof targetProperty === typeof sourceProperty) continue;\n\n    // bind timers to global for call from export context\n    if (options.bind && USE_NATIVE) resultProperty = bind(sourceProperty, global);\n    // wrap global constructors for prevent changs in this version\n    else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty);\n    // make static versions for prototype methods\n    else if (PROTO && typeof sourceProperty == 'function') resultProperty = bind(Function.call, sourceProperty);\n    // default case\n    else resultProperty = sourceProperty;\n\n    // add a flag to not completely full polyfills\n    if (options.sham || (sourceProperty && sourceProperty.sham) || (targetProperty && targetProperty.sham)) {\n      createNonEnumerableProperty(resultProperty, 'sham', true);\n    }\n\n    target[key] = resultProperty;\n\n    if (PROTO) {\n      VIRTUAL_PROTOTYPE = TARGET + 'Prototype';\n      if (!has(path, VIRTUAL_PROTOTYPE)) {\n        createNonEnumerableProperty(path, VIRTUAL_PROTOTYPE, {});\n      }\n      // export virtual prototype methods\n      path[VIRTUAL_PROTOTYPE][key] = sourceProperty;\n      // export real prototype methods\n      if (options.real && targetPrototype && !targetPrototype[key]) {\n        createNonEnumerableProperty(targetPrototype, key, sourceProperty);\n      }\n    }\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/export.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/fails.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js-pure/internals/fails.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (error) {\n    return true;\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/fails.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/freezing.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/freezing.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\n\nmodule.exports = !fails(function () {\n  return Object.isExtensible(Object.preventExtensions({}));\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/freezing.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/function-bind-context.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/function-bind-context.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var aFunction = __webpack_require__(/*! ../internals/a-function */ \"./node_modules/core-js-pure/internals/a-function.js\");\n\n// optional / simple context binding\nmodule.exports = function (fn, that, length) {\n  aFunction(fn);\n  if (that === undefined) return fn;\n  switch (length) {\n    case 0: return function () {\n      return fn.call(that);\n    };\n    case 1: return function (a) {\n      return fn.call(that, a);\n    };\n    case 2: return function (a, b) {\n      return fn.call(that, a, b);\n    };\n    case 3: return function (a, b, c) {\n      return fn.call(that, a, b, c);\n    };\n  }\n  return function (/* ...args */) {\n    return fn.apply(that, arguments);\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/function-bind-context.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/get-built-in.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/get-built-in.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var path = __webpack_require__(/*! ../internals/path */ \"./node_modules/core-js-pure/internals/path.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\n\nvar aFunction = function (variable) {\n  return typeof variable == 'function' ? variable : undefined;\n};\n\nmodule.exports = function (namespace, method) {\n  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])\n    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/get-built-in.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/get-iterator-method.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/get-iterator-method.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var classof = __webpack_require__(/*! ../internals/classof */ \"./node_modules/core-js-pure/internals/classof.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"./node_modules/core-js-pure/internals/iterators.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\n\nmodule.exports = function (it) {\n  if (it != undefined) return it[ITERATOR]\n    || it['@@iterator']\n    || Iterators[classof(it)];\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/get-iterator-method.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/get-iterator.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/get-iterator.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js-pure/internals/an-object.js\");\nvar getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ \"./node_modules/core-js-pure/internals/get-iterator-method.js\");\n\nmodule.exports = function (it) {\n  var iteratorMethod = getIteratorMethod(it);\n  if (typeof iteratorMethod != 'function') {\n    throw TypeError(String(it) + ' is not iterable');\n  } return anObject(iteratorMethod.call(it));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/get-iterator.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/global.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js-pure/internals/global.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {\n  return it && it.Math == Math && it;\n};\n\n// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nmodule.exports =\n  // eslint-disable-next-line no-undef\n  check(typeof globalThis == 'object' && globalThis) ||\n  check(typeof window == 'object' && window) ||\n  check(typeof self == 'object' && self) ||\n  check(typeof global == 'object' && global) ||\n  // eslint-disable-next-line no-new-func\n  Function('return this')();\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/global.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/has.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js-pure/internals/has.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var hasOwnProperty = {}.hasOwnProperty;\n\nmodule.exports = function (it, key) {\n  return hasOwnProperty.call(it, key);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/has.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/hidden-keys.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/hidden-keys.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/hidden-keys.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/html.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js-pure/internals/html.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js-pure/internals/get-built-in.js\");\n\nmodule.exports = getBuiltIn('document', 'documentElement');\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/html.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/ie8-dom-define.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/ie8-dom-define.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js-pure/internals/descriptors.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\nvar createElement = __webpack_require__(/*! ../internals/document-create-element */ \"./node_modules/core-js-pure/internals/document-create-element.js\");\n\n// Thank's IE8 for his funny defineProperty\nmodule.exports = !DESCRIPTORS && !fails(function () {\n  return Object.defineProperty(createElement('div'), 'a', {\n    get: function () { return 7; }\n  }).a != 7;\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/ie8-dom-define.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/indexed-object.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/indexed-object.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\nvar classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js-pure/internals/classof-raw.js\");\n\nvar split = ''.split;\n\n// fallback for non-array-like ES3 and non-enumerable old V8 strings\nmodule.exports = fails(function () {\n  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346\n  // eslint-disable-next-line no-prototype-builtins\n  return !Object('z').propertyIsEnumerable(0);\n}) ? function (it) {\n  return classof(it) == 'String' ? split.call(it, '') : Object(it);\n} : Object;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/indexed-object.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/inspect-source.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/inspect-source.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var store = __webpack_require__(/*! ../internals/shared-store */ \"./node_modules/core-js-pure/internals/shared-store.js\");\n\nvar functionToString = Function.toString;\n\n// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper\nif (typeof store.inspectSource != 'function') {\n  store.inspectSource = function (it) {\n    return functionToString.call(it);\n  };\n}\n\nmodule.exports = store.inspectSource;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/inspect-source.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/internal-metadata.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/internal-metadata.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"./node_modules/core-js-pure/internals/hidden-keys.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js-pure/internals/is-object.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js-pure/internals/has.js\");\nvar defineProperty = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js-pure/internals/object-define-property.js\").f;\nvar uid = __webpack_require__(/*! ../internals/uid */ \"./node_modules/core-js-pure/internals/uid.js\");\nvar FREEZING = __webpack_require__(/*! ../internals/freezing */ \"./node_modules/core-js-pure/internals/freezing.js\");\n\nvar METADATA = uid('meta');\nvar id = 0;\n\nvar isExtensible = Object.isExtensible || function () {\n  return true;\n};\n\nvar setMetadata = function (it) {\n  defineProperty(it, METADATA, { value: {\n    objectID: 'O' + ++id, // object ID\n    weakData: {}          // weak collections IDs\n  } });\n};\n\nvar fastKey = function (it, create) {\n  // return a primitive with prefix\n  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;\n  if (!has(it, METADATA)) {\n    // can't set metadata to uncaught frozen object\n    if (!isExtensible(it)) return 'F';\n    // not necessary to add metadata\n    if (!create) return 'E';\n    // add missing metadata\n    setMetadata(it);\n  // return object ID\n  } return it[METADATA].objectID;\n};\n\nvar getWeakData = function (it, create) {\n  if (!has(it, METADATA)) {\n    // can't set metadata to uncaught frozen object\n    if (!isExtensible(it)) return true;\n    // not necessary to add metadata\n    if (!create) return false;\n    // add missing metadata\n    setMetadata(it);\n  // return the store of weak collections IDs\n  } return it[METADATA].weakData;\n};\n\n// add metadata on freeze-family methods calling\nvar onFreeze = function (it) {\n  if (FREEZING && meta.REQUIRED && isExtensible(it) && !has(it, METADATA)) setMetadata(it);\n  return it;\n};\n\nvar meta = module.exports = {\n  REQUIRED: false,\n  fastKey: fastKey,\n  getWeakData: getWeakData,\n  onFreeze: onFreeze\n};\n\nhiddenKeys[METADATA] = true;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/internal-metadata.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/internal-state.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/internal-state.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ \"./node_modules/core-js-pure/internals/native-weak-map.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js-pure/internals/is-object.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js-pure/internals/create-non-enumerable-property.js\");\nvar objectHas = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js-pure/internals/has.js\");\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ \"./node_modules/core-js-pure/internals/shared-key.js\");\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"./node_modules/core-js-pure/internals/hidden-keys.js\");\n\nvar WeakMap = global.WeakMap;\nvar set, get, has;\n\nvar enforce = function (it) {\n  return has(it) ? get(it) : set(it, {});\n};\n\nvar getterFor = function (TYPE) {\n  return function (it) {\n    var state;\n    if (!isObject(it) || (state = get(it)).type !== TYPE) {\n      throw TypeError('Incompatible receiver, ' + TYPE + ' required');\n    } return state;\n  };\n};\n\nif (NATIVE_WEAK_MAP) {\n  var store = new WeakMap();\n  var wmget = store.get;\n  var wmhas = store.has;\n  var wmset = store.set;\n  set = function (it, metadata) {\n    wmset.call(store, it, metadata);\n    return metadata;\n  };\n  get = function (it) {\n    return wmget.call(store, it) || {};\n  };\n  has = function (it) {\n    return wmhas.call(store, it);\n  };\n} else {\n  var STATE = sharedKey('state');\n  hiddenKeys[STATE] = true;\n  set = function (it, metadata) {\n    createNonEnumerableProperty(it, STATE, metadata);\n    return metadata;\n  };\n  get = function (it) {\n    return objectHas(it, STATE) ? it[STATE] : {};\n  };\n  has = function (it) {\n    return objectHas(it, STATE);\n  };\n}\n\nmodule.exports = {\n  set: set,\n  get: get,\n  has: has,\n  enforce: enforce,\n  getterFor: getterFor\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/internal-state.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/is-array-iterator-method.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-array-iterator-method.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"./node_modules/core-js-pure/internals/iterators.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\nvar ArrayPrototype = Array.prototype;\n\n// check on default Array iterator\nmodule.exports = function (it) {\n  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/is-array-iterator-method.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/is-array.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-array.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js-pure/internals/classof-raw.js\");\n\n// `IsArray` abstract operation\n// https://tc39.github.io/ecma262/#sec-isarray\nmodule.exports = Array.isArray || function isArray(arg) {\n  return classof(arg) == 'Array';\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/is-array.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/is-forced.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-forced.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\n\nvar replacement = /#|\\.prototype\\./;\n\nvar isForced = function (feature, detection) {\n  var value = data[normalize(feature)];\n  return value == POLYFILL ? true\n    : value == NATIVE ? false\n    : typeof detection == 'function' ? fails(detection)\n    : !!detection;\n};\n\nvar normalize = isForced.normalize = function (string) {\n  return String(string).replace(replacement, '.').toLowerCase();\n};\n\nvar data = isForced.data = {};\nvar NATIVE = isForced.NATIVE = 'N';\nvar POLYFILL = isForced.POLYFILL = 'P';\n\nmodule.exports = isForced;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/is-forced.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/is-iterable.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-iterable.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var classof = __webpack_require__(/*! ../internals/classof */ \"./node_modules/core-js-pure/internals/classof.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"./node_modules/core-js-pure/internals/iterators.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\n\nmodule.exports = function (it) {\n  var O = Object(it);\n  return O[ITERATOR] !== undefined\n    || '@@iterator' in O\n    // eslint-disable-next-line no-prototype-builtins\n    || Iterators.hasOwnProperty(classof(O));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/is-iterable.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/is-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-object.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  return typeof it === 'object' ? it !== null : typeof it === 'function';\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/is-object.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/is-pure.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-pure.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = true;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/is-pure.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/iterate.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/iterate.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js-pure/internals/an-object.js\");\nvar isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ \"./node_modules/core-js-pure/internals/is-array-iterator-method.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js-pure/internals/to-length.js\");\nvar bind = __webpack_require__(/*! ../internals/function-bind-context */ \"./node_modules/core-js-pure/internals/function-bind-context.js\");\nvar getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ \"./node_modules/core-js-pure/internals/get-iterator-method.js\");\nvar callWithSafeIterationClosing = __webpack_require__(/*! ../internals/call-with-safe-iteration-closing */ \"./node_modules/core-js-pure/internals/call-with-safe-iteration-closing.js\");\n\nvar Result = function (stopped, result) {\n  this.stopped = stopped;\n  this.result = result;\n};\n\nvar iterate = module.exports = function (iterable, fn, that, AS_ENTRIES, IS_ITERATOR) {\n  var boundFunction = bind(fn, that, AS_ENTRIES ? 2 : 1);\n  var iterator, iterFn, index, length, result, next, step;\n\n  if (IS_ITERATOR) {\n    iterator = iterable;\n  } else {\n    iterFn = getIteratorMethod(iterable);\n    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');\n    // optimisation for array iterators\n    if (isArrayIteratorMethod(iterFn)) {\n      for (index = 0, length = toLength(iterable.length); length > index; index++) {\n        result = AS_ENTRIES\n          ? boundFunction(anObject(step = iterable[index])[0], step[1])\n          : boundFunction(iterable[index]);\n        if (result && result instanceof Result) return result;\n      } return new Result(false);\n    }\n    iterator = iterFn.call(iterable);\n  }\n\n  next = iterator.next;\n  while (!(step = next.call(iterator)).done) {\n    result = callWithSafeIterationClosing(iterator, boundFunction, step.value, AS_ENTRIES);\n    if (typeof result == 'object' && result && result instanceof Result) return result;\n  } return new Result(false);\n};\n\niterate.stop = function (result) {\n  return new Result(true, result);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/iterate.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/iterators-core.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/iterators-core.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ \"./node_modules/core-js-pure/internals/object-get-prototype-of.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js-pure/internals/create-non-enumerable-property.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js-pure/internals/has.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js-pure/internals/is-pure.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\nvar BUGGY_SAFARI_ITERATORS = false;\n\nvar returnThis = function () { return this; };\n\n// `%IteratorPrototype%` object\n// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object\nvar IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;\n\nif ([].keys) {\n  arrayIterator = [].keys();\n  // Safari 8 has buggy iterators w/o `next`\n  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;\n  else {\n    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));\n    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;\n  }\n}\n\nif (IteratorPrototype == undefined) IteratorPrototype = {};\n\n// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()\nif (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {\n  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);\n}\n\nmodule.exports = {\n  IteratorPrototype: IteratorPrototype,\n  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/iterators-core.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/iterators.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/iterators.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/iterators.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/native-symbol.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/native-symbol.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\n\nmodule.exports = !!Object.getOwnPropertySymbols && !fails(function () {\n  // Chrome 38 Symbol has incorrect toString conversion\n  // eslint-disable-next-line no-undef\n  return !String(Symbol());\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/native-symbol.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/native-weak-map.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/native-weak-map.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\nvar inspectSource = __webpack_require__(/*! ../internals/inspect-source */ \"./node_modules/core-js-pure/internals/inspect-source.js\");\n\nvar WeakMap = global.WeakMap;\n\nmodule.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/native-weak-map.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-assign.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-assign.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js-pure/internals/descriptors.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\nvar objectKeys = __webpack_require__(/*! ../internals/object-keys */ \"./node_modules/core-js-pure/internals/object-keys.js\");\nvar getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ \"./node_modules/core-js-pure/internals/object-get-own-property-symbols.js\");\nvar propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ \"./node_modules/core-js-pure/internals/object-property-is-enumerable.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js-pure/internals/to-object.js\");\nvar IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ \"./node_modules/core-js-pure/internals/indexed-object.js\");\n\nvar nativeAssign = Object.assign;\nvar defineProperty = Object.defineProperty;\n\n// `Object.assign` method\n// https://tc39.github.io/ecma262/#sec-object.assign\nmodule.exports = !nativeAssign || fails(function () {\n  // should have correct order of operations (Edge bug)\n  if (DESCRIPTORS && nativeAssign({ b: 1 }, nativeAssign(defineProperty({}, 'a', {\n    enumerable: true,\n    get: function () {\n      defineProperty(this, 'b', {\n        value: 3,\n        enumerable: false\n      });\n    }\n  }), { b: 2 })).b !== 1) return true;\n  // should work with symbols and should have deterministic property order (V8 bug)\n  var A = {};\n  var B = {};\n  // eslint-disable-next-line no-undef\n  var symbol = Symbol();\n  var alphabet = 'abcdefghijklmnopqrst';\n  A[symbol] = 7;\n  alphabet.split('').forEach(function (chr) { B[chr] = chr; });\n  return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;\n}) ? function assign(target, source) { // eslint-disable-line no-unused-vars\n  var T = toObject(target);\n  var argumentsLength = arguments.length;\n  var index = 1;\n  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;\n  var propertyIsEnumerable = propertyIsEnumerableModule.f;\n  while (argumentsLength > index) {\n    var S = IndexedObject(arguments[index++]);\n    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);\n    var length = keys.length;\n    var j = 0;\n    var key;\n    while (length > j) {\n      key = keys[j++];\n      if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];\n    }\n  } return T;\n} : nativeAssign;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/object-assign.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-create.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-create.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js-pure/internals/an-object.js\");\nvar defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ \"./node_modules/core-js-pure/internals/object-define-properties.js\");\nvar enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ \"./node_modules/core-js-pure/internals/enum-bug-keys.js\");\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"./node_modules/core-js-pure/internals/hidden-keys.js\");\nvar html = __webpack_require__(/*! ../internals/html */ \"./node_modules/core-js-pure/internals/html.js\");\nvar documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ \"./node_modules/core-js-pure/internals/document-create-element.js\");\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ \"./node_modules/core-js-pure/internals/shared-key.js\");\n\nvar GT = '>';\nvar LT = '<';\nvar PROTOTYPE = 'prototype';\nvar SCRIPT = 'script';\nvar IE_PROTO = sharedKey('IE_PROTO');\n\nvar EmptyConstructor = function () { /* empty */ };\n\nvar scriptTag = function (content) {\n  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;\n};\n\n// Create object with fake `null` prototype: use ActiveX Object with cleared prototype\nvar NullProtoObjectViaActiveX = function (activeXDocument) {\n  activeXDocument.write(scriptTag(''));\n  activeXDocument.close();\n  var temp = activeXDocument.parentWindow.Object;\n  activeXDocument = null; // avoid memory leak\n  return temp;\n};\n\n// Create object with fake `null` prototype: use iframe Object with cleared prototype\nvar NullProtoObjectViaIFrame = function () {\n  // Thrash, waste and sodomy: IE GC bug\n  var iframe = documentCreateElement('iframe');\n  var JS = 'java' + SCRIPT + ':';\n  var iframeDocument;\n  iframe.style.display = 'none';\n  html.appendChild(iframe);\n  // https://github.com/zloirock/core-js/issues/475\n  iframe.src = String(JS);\n  iframeDocument = iframe.contentWindow.document;\n  iframeDocument.open();\n  iframeDocument.write(scriptTag('document.F=Object'));\n  iframeDocument.close();\n  return iframeDocument.F;\n};\n\n// Check for document.domain and active x support\n// No need to use active x approach when document.domain is not set\n// see https://github.com/es-shims/es5-shim/issues/150\n// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346\n// avoid IE GC bug\nvar activeXDocument;\nvar NullProtoObject = function () {\n  try {\n    /* global ActiveXObject */\n    activeXDocument = document.domain && new ActiveXObject('htmlfile');\n  } catch (error) { /* ignore */ }\n  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();\n  var length = enumBugKeys.length;\n  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];\n  return NullProtoObject();\n};\n\nhiddenKeys[IE_PROTO] = true;\n\n// `Object.create` method\n// https://tc39.github.io/ecma262/#sec-object.create\nmodule.exports = Object.create || function create(O, Properties) {\n  var result;\n  if (O !== null) {\n    EmptyConstructor[PROTOTYPE] = anObject(O);\n    result = new EmptyConstructor();\n    EmptyConstructor[PROTOTYPE] = null;\n    // add \"__proto__\" for Object.getPrototypeOf polyfill\n    result[IE_PROTO] = O;\n  } else result = NullProtoObject();\n  return Properties === undefined ? result : defineProperties(result, Properties);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/object-create.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-define-properties.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-define-properties.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js-pure/internals/descriptors.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js-pure/internals/object-define-property.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js-pure/internals/an-object.js\");\nvar objectKeys = __webpack_require__(/*! ../internals/object-keys */ \"./node_modules/core-js-pure/internals/object-keys.js\");\n\n// `Object.defineProperties` method\n// https://tc39.github.io/ecma262/#sec-object.defineproperties\nmodule.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {\n  anObject(O);\n  var keys = objectKeys(Properties);\n  var length = keys.length;\n  var index = 0;\n  var key;\n  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);\n  return O;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/object-define-properties.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-define-property.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-define-property.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js-pure/internals/descriptors.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ \"./node_modules/core-js-pure/internals/ie8-dom-define.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js-pure/internals/an-object.js\");\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"./node_modules/core-js-pure/internals/to-primitive.js\");\n\nvar nativeDefineProperty = Object.defineProperty;\n\n// `Object.defineProperty` method\n// https://tc39.github.io/ecma262/#sec-object.defineproperty\nexports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPrimitive(P, true);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return nativeDefineProperty(O, P, Attributes);\n  } catch (error) { /* empty */ }\n  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/object-define-property.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-get-own-property-descriptor.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-get-own-property-descriptor.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js-pure/internals/descriptors.js\");\nvar propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ \"./node_modules/core-js-pure/internals/object-property-is-enumerable.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js-pure/internals/create-property-descriptor.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js-pure/internals/to-indexed-object.js\");\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"./node_modules/core-js-pure/internals/to-primitive.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js-pure/internals/has.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ \"./node_modules/core-js-pure/internals/ie8-dom-define.js\");\n\nvar nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\n\n// `Object.getOwnPropertyDescriptor` method\n// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor\nexports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {\n  O = toIndexedObject(O);\n  P = toPrimitive(P, true);\n  if (IE8_DOM_DEFINE) try {\n    return nativeGetOwnPropertyDescriptor(O, P);\n  } catch (error) { /* empty */ }\n  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/object-get-own-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-get-own-property-names-external.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-get-own-property-names-external.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js-pure/internals/to-indexed-object.js\");\nvar nativeGetOwnPropertyNames = __webpack_require__(/*! ../internals/object-get-own-property-names */ \"./node_modules/core-js-pure/internals/object-get-own-property-names.js\").f;\n\nvar toString = {}.toString;\n\nvar windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames\n  ? Object.getOwnPropertyNames(window) : [];\n\nvar getWindowNames = function (it) {\n  try {\n    return nativeGetOwnPropertyNames(it);\n  } catch (error) {\n    return windowNames.slice();\n  }\n};\n\n// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window\nmodule.exports.f = function getOwnPropertyNames(it) {\n  return windowNames && toString.call(it) == '[object Window]'\n    ? getWindowNames(it)\n    : nativeGetOwnPropertyNames(toIndexedObject(it));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/object-get-own-property-names-external.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-get-own-property-names.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-get-own-property-names.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ \"./node_modules/core-js-pure/internals/object-keys-internal.js\");\nvar enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ \"./node_modules/core-js-pure/internals/enum-bug-keys.js\");\n\nvar hiddenKeys = enumBugKeys.concat('length', 'prototype');\n\n// `Object.getOwnPropertyNames` method\n// https://tc39.github.io/ecma262/#sec-object.getownpropertynames\nexports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {\n  return internalObjectKeys(O, hiddenKeys);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/object-get-own-property-names.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-get-own-property-symbols.js":
/*!********************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-get-own-property-symbols.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("exports.f = Object.getOwnPropertySymbols;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/object-get-own-property-symbols.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-get-prototype-of.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-get-prototype-of.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js-pure/internals/has.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js-pure/internals/to-object.js\");\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ \"./node_modules/core-js-pure/internals/shared-key.js\");\nvar CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ \"./node_modules/core-js-pure/internals/correct-prototype-getter.js\");\n\nvar IE_PROTO = sharedKey('IE_PROTO');\nvar ObjectPrototype = Object.prototype;\n\n// `Object.getPrototypeOf` method\n// https://tc39.github.io/ecma262/#sec-object.getprototypeof\nmodule.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {\n  O = toObject(O);\n  if (has(O, IE_PROTO)) return O[IE_PROTO];\n  if (typeof O.constructor == 'function' && O instanceof O.constructor) {\n    return O.constructor.prototype;\n  } return O instanceof Object ? ObjectPrototype : null;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/object-get-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-keys-internal.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-keys-internal.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js-pure/internals/has.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js-pure/internals/to-indexed-object.js\");\nvar indexOf = __webpack_require__(/*! ../internals/array-includes */ \"./node_modules/core-js-pure/internals/array-includes.js\").indexOf;\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"./node_modules/core-js-pure/internals/hidden-keys.js\");\n\nmodule.exports = function (object, names) {\n  var O = toIndexedObject(object);\n  var i = 0;\n  var result = [];\n  var key;\n  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);\n  // Don't enum bug & hidden keys\n  while (names.length > i) if (has(O, key = names[i++])) {\n    ~indexOf(result, key) || result.push(key);\n  }\n  return result;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/object-keys-internal.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-keys.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-keys.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ \"./node_modules/core-js-pure/internals/object-keys-internal.js\");\nvar enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ \"./node_modules/core-js-pure/internals/enum-bug-keys.js\");\n\n// `Object.keys` method\n// https://tc39.github.io/ecma262/#sec-object.keys\nmodule.exports = Object.keys || function keys(O) {\n  return internalObjectKeys(O, enumBugKeys);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/object-keys.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-property-is-enumerable.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-property-is-enumerable.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar nativePropertyIsEnumerable = {}.propertyIsEnumerable;\nvar getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\n\n// Nashorn ~ JDK8 bug\nvar NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);\n\n// `Object.prototype.propertyIsEnumerable` method implementation\n// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable\nexports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {\n  var descriptor = getOwnPropertyDescriptor(this, V);\n  return !!descriptor && descriptor.enumerable;\n} : nativePropertyIsEnumerable;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/object-property-is-enumerable.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-set-prototype-of.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-set-prototype-of.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js-pure/internals/an-object.js\");\nvar aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ \"./node_modules/core-js-pure/internals/a-possible-prototype.js\");\n\n// `Object.setPrototypeOf` method\n// https://tc39.github.io/ecma262/#sec-object.setprototypeof\n// Works with __proto__ only. Old v8 can't work with null proto objects.\n/* eslint-disable no-proto */\nmodule.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {\n  var CORRECT_SETTER = false;\n  var test = {};\n  var setter;\n  try {\n    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;\n    setter.call(test, []);\n    CORRECT_SETTER = test instanceof Array;\n  } catch (error) { /* empty */ }\n  return function setPrototypeOf(O, proto) {\n    anObject(O);\n    aPossiblePrototype(proto);\n    if (CORRECT_SETTER) setter.call(O, proto);\n    else O.__proto__ = proto;\n    return O;\n  };\n}() : undefined);\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/object-set-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-to-string.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-to-string.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ \"./node_modules/core-js-pure/internals/to-string-tag-support.js\");\nvar classof = __webpack_require__(/*! ../internals/classof */ \"./node_modules/core-js-pure/internals/classof.js\");\n\n// `Object.prototype.toString` method implementation\n// https://tc39.github.io/ecma262/#sec-object.prototype.tostring\nmodule.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {\n  return '[object ' + classof(this) + ']';\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/object-to-string.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/path.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js-pure/internals/path.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/path.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/redefine-all.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/redefine-all.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/core-js-pure/internals/redefine.js\");\n\nmodule.exports = function (target, src, options) {\n  for (var key in src) {\n    if (options && options.unsafe && target[key]) target[key] = src[key];\n    else redefine(target, key, src[key], options);\n  } return target;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/redefine-all.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/redefine.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/redefine.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js-pure/internals/create-non-enumerable-property.js\");\n\nmodule.exports = function (target, key, value, options) {\n  if (options && options.enumerable) target[key] = value;\n  else createNonEnumerableProperty(target, key, value);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/redefine.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/require-object-coercible.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/require-object-coercible.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// `RequireObjectCoercible` abstract operation\n// https://tc39.github.io/ecma262/#sec-requireobjectcoercible\nmodule.exports = function (it) {\n  if (it == undefined) throw TypeError(\"Can't call method on \" + it);\n  return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/require-object-coercible.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/set-global.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/set-global.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js-pure/internals/create-non-enumerable-property.js\");\n\nmodule.exports = function (key, value) {\n  try {\n    createNonEnumerableProperty(global, key, value);\n  } catch (error) {\n    global[key] = value;\n  } return value;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/set-global.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/set-species.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/set-species.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js-pure/internals/get-built-in.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js-pure/internals/object-define-property.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js-pure/internals/descriptors.js\");\n\nvar SPECIES = wellKnownSymbol('species');\n\nmodule.exports = function (CONSTRUCTOR_NAME) {\n  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);\n  var defineProperty = definePropertyModule.f;\n\n  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {\n    defineProperty(Constructor, SPECIES, {\n      configurable: true,\n      get: function () { return this; }\n    });\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/set-species.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/set-to-string-tag.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/set-to-string-tag.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ \"./node_modules/core-js-pure/internals/to-string-tag-support.js\");\nvar defineProperty = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js-pure/internals/object-define-property.js\").f;\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js-pure/internals/create-non-enumerable-property.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js-pure/internals/has.js\");\nvar toString = __webpack_require__(/*! ../internals/object-to-string */ \"./node_modules/core-js-pure/internals/object-to-string.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\n\nmodule.exports = function (it, TAG, STATIC, SET_METHOD) {\n  if (it) {\n    var target = STATIC ? it : it.prototype;\n    if (!has(target, TO_STRING_TAG)) {\n      defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });\n    }\n    if (SET_METHOD && !TO_STRING_TAG_SUPPORT) {\n      createNonEnumerableProperty(target, 'toString', toString);\n    }\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/set-to-string-tag.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/shared-key.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/shared-key.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var shared = __webpack_require__(/*! ../internals/shared */ \"./node_modules/core-js-pure/internals/shared.js\");\nvar uid = __webpack_require__(/*! ../internals/uid */ \"./node_modules/core-js-pure/internals/uid.js\");\n\nvar keys = shared('keys');\n\nmodule.exports = function (key) {\n  return keys[key] || (keys[key] = uid(key));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/shared-key.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/shared-store.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/shared-store.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\nvar setGlobal = __webpack_require__(/*! ../internals/set-global */ \"./node_modules/core-js-pure/internals/set-global.js\");\n\nvar SHARED = '__core-js_shared__';\nvar store = global[SHARED] || setGlobal(SHARED, {});\n\nmodule.exports = store;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/shared-store.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/shared.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js-pure/internals/shared.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js-pure/internals/is-pure.js\");\nvar store = __webpack_require__(/*! ../internals/shared-store */ \"./node_modules/core-js-pure/internals/shared-store.js\");\n\n(module.exports = function (key, value) {\n  return store[key] || (store[key] = value !== undefined ? value : {});\n})('versions', []).push({\n  version: '3.6.4',\n  mode: IS_PURE ? 'pure' : 'global',\n  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/shared.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/string-multibyte.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/string-multibyte.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ../internals/to-integer */ \"./node_modules/core-js-pure/internals/to-integer.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js-pure/internals/require-object-coercible.js\");\n\n// `String.prototype.{ codePointAt, at }` methods implementation\nvar createMethod = function (CONVERT_TO_STRING) {\n  return function ($this, pos) {\n    var S = String(requireObjectCoercible($this));\n    var position = toInteger(pos);\n    var size = S.length;\n    var first, second;\n    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;\n    first = S.charCodeAt(position);\n    return first < 0xD800 || first > 0xDBFF || position + 1 === size\n      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF\n        ? CONVERT_TO_STRING ? S.charAt(position) : first\n        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;\n  };\n};\n\nmodule.exports = {\n  // `String.prototype.codePointAt` method\n  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat\n  codeAt: createMethod(false),\n  // `String.prototype.at` method\n  // https://github.com/mathiasbynens/String.prototype.at\n  charAt: createMethod(true)\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/string-multibyte.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-absolute-index.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-absolute-index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ../internals/to-integer */ \"./node_modules/core-js-pure/internals/to-integer.js\");\n\nvar max = Math.max;\nvar min = Math.min;\n\n// Helper for a popular repeating case of the spec:\n// Let integer be ? ToInteger(index).\n// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).\nmodule.exports = function (index, length) {\n  var integer = toInteger(index);\n  return integer < 0 ? max(integer + length, 0) : min(integer, length);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/to-absolute-index.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-indexed-object.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-indexed-object.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// toObject with fallback for non-array-like ES3 strings\nvar IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ \"./node_modules/core-js-pure/internals/indexed-object.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js-pure/internals/require-object-coercible.js\");\n\nmodule.exports = function (it) {\n  return IndexedObject(requireObjectCoercible(it));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/to-indexed-object.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-integer.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-integer.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var ceil = Math.ceil;\nvar floor = Math.floor;\n\n// `ToInteger` abstract operation\n// https://tc39.github.io/ecma262/#sec-tointeger\nmodule.exports = function (argument) {\n  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/to-integer.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-length.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-length.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ../internals/to-integer */ \"./node_modules/core-js-pure/internals/to-integer.js\");\n\nvar min = Math.min;\n\n// `ToLength` abstract operation\n// https://tc39.github.io/ecma262/#sec-tolength\nmodule.exports = function (argument) {\n  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/to-length.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-object.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js-pure/internals/require-object-coercible.js\");\n\n// `ToObject` abstract operation\n// https://tc39.github.io/ecma262/#sec-toobject\nmodule.exports = function (argument) {\n  return Object(requireObjectCoercible(argument));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/to-object.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-primitive.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-primitive.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js-pure/internals/is-object.js\");\n\n// `ToPrimitive` abstract operation\n// https://tc39.github.io/ecma262/#sec-toprimitive\n// instead of the ES6 spec version, we didn't implement @@toPrimitive case\n// and the second argument - flag - preferred type is a string\nmodule.exports = function (input, PREFERRED_STRING) {\n  if (!isObject(input)) return input;\n  var fn, val;\n  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;\n  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;\n  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;\n  throw TypeError(\"Can't convert object to primitive value\");\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-string-tag-support.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-string-tag-support.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\nvar test = {};\n\ntest[TO_STRING_TAG] = 'z';\n\nmodule.exports = String(test) === '[object z]';\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/to-string-tag-support.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/uid.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js-pure/internals/uid.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var id = 0;\nvar postfix = Math.random();\n\nmodule.exports = function (key) {\n  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/uid.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/use-symbol-as-uid.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/use-symbol-as-uid.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ \"./node_modules/core-js-pure/internals/native-symbol.js\");\n\nmodule.exports = NATIVE_SYMBOL\n  // eslint-disable-next-line no-undef\n  && !Symbol.sham\n  // eslint-disable-next-line no-undef\n  && typeof Symbol.iterator == 'symbol';\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/use-symbol-as-uid.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/well-known-symbol-wrapped.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/well-known-symbol-wrapped.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nexports.f = wellKnownSymbol;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/well-known-symbol-wrapped.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/well-known-symbol.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/well-known-symbol.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\nvar shared = __webpack_require__(/*! ../internals/shared */ \"./node_modules/core-js-pure/internals/shared.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js-pure/internals/has.js\");\nvar uid = __webpack_require__(/*! ../internals/uid */ \"./node_modules/core-js-pure/internals/uid.js\");\nvar NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ \"./node_modules/core-js-pure/internals/native-symbol.js\");\nvar USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ \"./node_modules/core-js-pure/internals/use-symbol-as-uid.js\");\n\nvar WellKnownSymbolsStore = shared('wks');\nvar Symbol = global.Symbol;\nvar createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;\n\nmodule.exports = function (name) {\n  if (!has(WellKnownSymbolsStore, name)) {\n    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];\n    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);\n  } return WellKnownSymbolsStore[name];\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/well-known-symbol.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.array.concat.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.array.concat.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\nvar isArray = __webpack_require__(/*! ../internals/is-array */ \"./node_modules/core-js-pure/internals/is-array.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js-pure/internals/is-object.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js-pure/internals/to-object.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js-pure/internals/to-length.js\");\nvar createProperty = __webpack_require__(/*! ../internals/create-property */ \"./node_modules/core-js-pure/internals/create-property.js\");\nvar arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ \"./node_modules/core-js-pure/internals/array-species-create.js\");\nvar arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ \"./node_modules/core-js-pure/internals/array-method-has-species-support.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\nvar V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ \"./node_modules/core-js-pure/internals/engine-v8-version.js\");\n\nvar IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');\nvar MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;\nvar MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';\n\n// We can't use this feature detection in V8 since it causes\n// deoptimization and serious performance degradation\n// https://github.com/zloirock/core-js/issues/679\nvar IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {\n  var array = [];\n  array[IS_CONCAT_SPREADABLE] = false;\n  return array.concat()[0] !== array;\n});\n\nvar SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');\n\nvar isConcatSpreadable = function (O) {\n  if (!isObject(O)) return false;\n  var spreadable = O[IS_CONCAT_SPREADABLE];\n  return spreadable !== undefined ? !!spreadable : isArray(O);\n};\n\nvar FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;\n\n// `Array.prototype.concat` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.concat\n// with adding support of @@isConcatSpreadable and @@species\n$({ target: 'Array', proto: true, forced: FORCED }, {\n  concat: function concat(arg) { // eslint-disable-line no-unused-vars\n    var O = toObject(this);\n    var A = arraySpeciesCreate(O, 0);\n    var n = 0;\n    var i, k, length, len, E;\n    for (i = -1, length = arguments.length; i < length; i++) {\n      E = i === -1 ? O : arguments[i];\n      if (isConcatSpreadable(E)) {\n        len = toLength(E.length);\n        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);\n        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);\n      } else {\n        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);\n        createProperty(A, n++, E);\n      }\n    }\n    A.length = n;\n    return A;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.array.concat.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.array.find.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.array.find.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar $find = __webpack_require__(/*! ../internals/array-iteration */ \"./node_modules/core-js-pure/internals/array-iteration.js\").find;\nvar addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ \"./node_modules/core-js-pure/internals/add-to-unscopables.js\");\nvar arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ \"./node_modules/core-js-pure/internals/array-method-uses-to-length.js\");\n\nvar FIND = 'find';\nvar SKIPS_HOLES = true;\n\nvar USES_TO_LENGTH = arrayMethodUsesToLength(FIND);\n\n// Shouldn't skip holes\nif (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });\n\n// `Array.prototype.find` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.find\n$({ target: 'Array', proto: true, forced: SKIPS_HOLES || !USES_TO_LENGTH }, {\n  find: function find(callbackfn /* , that = undefined */) {\n    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n\n// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables\naddToUnscopables(FIND);\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.array.find.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.array.for-each.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.array.for-each.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar forEach = __webpack_require__(/*! ../internals/array-for-each */ \"./node_modules/core-js-pure/internals/array-for-each.js\");\n\n// `Array.prototype.forEach` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.foreach\n$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {\n  forEach: forEach\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.array.for-each.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.array.from.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.array.from.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar from = __webpack_require__(/*! ../internals/array-from */ \"./node_modules/core-js-pure/internals/array-from.js\");\nvar checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ \"./node_modules/core-js-pure/internals/check-correctness-of-iteration.js\");\n\nvar INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {\n  Array.from(iterable);\n});\n\n// `Array.from` method\n// https://tc39.github.io/ecma262/#sec-array.from\n$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {\n  from: from\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.array.from.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.array.is-array.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.array.is-array.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar isArray = __webpack_require__(/*! ../internals/is-array */ \"./node_modules/core-js-pure/internals/is-array.js\");\n\n// `Array.isArray` method\n// https://tc39.github.io/ecma262/#sec-array.isarray\n$({ target: 'Array', stat: true }, {\n  isArray: isArray\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.array.is-array.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.array.iterator.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.array.iterator.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js-pure/internals/to-indexed-object.js\");\nvar addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ \"./node_modules/core-js-pure/internals/add-to-unscopables.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"./node_modules/core-js-pure/internals/iterators.js\");\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js-pure/internals/internal-state.js\");\nvar defineIterator = __webpack_require__(/*! ../internals/define-iterator */ \"./node_modules/core-js-pure/internals/define-iterator.js\");\n\nvar ARRAY_ITERATOR = 'Array Iterator';\nvar setInternalState = InternalStateModule.set;\nvar getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);\n\n// `Array.prototype.entries` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.entries\n// `Array.prototype.keys` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.keys\n// `Array.prototype.values` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.values\n// `Array.prototype[@@iterator]` method\n// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator\n// `CreateArrayIterator` internal method\n// https://tc39.github.io/ecma262/#sec-createarrayiterator\nmodule.exports = defineIterator(Array, 'Array', function (iterated, kind) {\n  setInternalState(this, {\n    type: ARRAY_ITERATOR,\n    target: toIndexedObject(iterated), // target\n    index: 0,                          // next index\n    kind: kind                         // kind\n  });\n// `%ArrayIteratorPrototype%.next` method\n// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next\n}, function () {\n  var state = getInternalState(this);\n  var target = state.target;\n  var kind = state.kind;\n  var index = state.index++;\n  if (!target || index >= target.length) {\n    state.target = undefined;\n    return { value: undefined, done: true };\n  }\n  if (kind == 'keys') return { value: index, done: false };\n  if (kind == 'values') return { value: target[index], done: false };\n  return { value: [index, target[index]], done: false };\n}, 'values');\n\n// argumentsList[@@iterator] is %ArrayProto_values%\n// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject\n// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject\nIterators.Arguments = Iterators.Array;\n\n// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables\naddToUnscopables('keys');\naddToUnscopables('values');\naddToUnscopables('entries');\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.array.iterator.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.array.slice.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.array.slice.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js-pure/internals/is-object.js\");\nvar isArray = __webpack_require__(/*! ../internals/is-array */ \"./node_modules/core-js-pure/internals/is-array.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ \"./node_modules/core-js-pure/internals/to-absolute-index.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js-pure/internals/to-length.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js-pure/internals/to-indexed-object.js\");\nvar createProperty = __webpack_require__(/*! ../internals/create-property */ \"./node_modules/core-js-pure/internals/create-property.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\nvar arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ \"./node_modules/core-js-pure/internals/array-method-has-species-support.js\");\nvar arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ \"./node_modules/core-js-pure/internals/array-method-uses-to-length.js\");\n\nvar HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');\nvar USES_TO_LENGTH = arrayMethodUsesToLength('slice', { ACCESSORS: true, 0: 0, 1: 2 });\n\nvar SPECIES = wellKnownSymbol('species');\nvar nativeSlice = [].slice;\nvar max = Math.max;\n\n// `Array.prototype.slice` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.slice\n// fallback for not array-like ES3 strings and DOM objects\n$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {\n  slice: function slice(start, end) {\n    var O = toIndexedObject(this);\n    var length = toLength(O.length);\n    var k = toAbsoluteIndex(start, length);\n    var fin = toAbsoluteIndex(end === undefined ? length : end, length);\n    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible\n    var Constructor, result, n;\n    if (isArray(O)) {\n      Constructor = O.constructor;\n      // cross-realm fallback\n      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {\n        Constructor = undefined;\n      } else if (isObject(Constructor)) {\n        Constructor = Constructor[SPECIES];\n        if (Constructor === null) Constructor = undefined;\n      }\n      if (Constructor === Array || Constructor === undefined) {\n        return nativeSlice.call(O, k, fin);\n      }\n    }\n    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));\n    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);\n    result.length = n;\n    return result;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.array.slice.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.json.stringify.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.json.stringify.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js-pure/internals/get-built-in.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\n\nvar $stringify = getBuiltIn('JSON', 'stringify');\nvar re = /[\\uD800-\\uDFFF]/g;\nvar low = /^[\\uD800-\\uDBFF]$/;\nvar hi = /^[\\uDC00-\\uDFFF]$/;\n\nvar fix = function (match, offset, string) {\n  var prev = string.charAt(offset - 1);\n  var next = string.charAt(offset + 1);\n  if ((low.test(match) && !hi.test(next)) || (hi.test(match) && !low.test(prev))) {\n    return '\\\\u' + match.charCodeAt(0).toString(16);\n  } return match;\n};\n\nvar FORCED = fails(function () {\n  return $stringify('\\uDF06\\uD834') !== '\"\\\\udf06\\\\ud834\"'\n    || $stringify('\\uDEAD') !== '\"\\\\udead\"';\n});\n\nif ($stringify) {\n  // https://github.com/tc39/proposal-well-formed-stringify\n  $({ target: 'JSON', stat: true, forced: FORCED }, {\n    // eslint-disable-next-line no-unused-vars\n    stringify: function stringify(it, replacer, space) {\n      var result = $stringify.apply(null, arguments);\n      return typeof result == 'string' ? result.replace(re, fix) : result;\n    }\n  });\n}\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.json.stringify.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.json.to-string-tag.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.json.to-string-tag.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\nvar setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"./node_modules/core-js-pure/internals/set-to-string-tag.js\");\n\n// JSON[@@toStringTag] property\n// https://tc39.github.io/ecma262/#sec-json-@@tostringtag\nsetToStringTag(global.JSON, 'JSON', true);\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.json.to-string-tag.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.map.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.map.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar collection = __webpack_require__(/*! ../internals/collection */ \"./node_modules/core-js-pure/internals/collection.js\");\nvar collectionStrong = __webpack_require__(/*! ../internals/collection-strong */ \"./node_modules/core-js-pure/internals/collection-strong.js\");\n\n// `Map` constructor\n// https://tc39.github.io/ecma262/#sec-map-objects\nmodule.exports = collection('Map', function (init) {\n  return function Map() { return init(this, arguments.length ? arguments[0] : undefined); };\n}, collectionStrong);\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.map.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.math.to-string-tag.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.math.to-string-tag.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"./node_modules/core-js-pure/internals/set-to-string-tag.js\");\n\n// Math[@@toStringTag] property\n// https://tc39.github.io/ecma262/#sec-math-@@tostringtag\nsetToStringTag(Math, 'Math', true);\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.math.to-string-tag.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.object.assign.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.object.assign.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar assign = __webpack_require__(/*! ../internals/object-assign */ \"./node_modules/core-js-pure/internals/object-assign.js\");\n\n// `Object.assign` method\n// https://tc39.github.io/ecma262/#sec-object.assign\n$({ target: 'Object', stat: true, forced: Object.assign !== assign }, {\n  assign: assign\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.object.assign.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.object.define-property.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.object.define-property.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js-pure/internals/descriptors.js\");\nvar objectDefinePropertyModile = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js-pure/internals/object-define-property.js\");\n\n// `Object.defineProperty` method\n// https://tc39.github.io/ecma262/#sec-object.defineproperty\n$({ target: 'Object', stat: true, forced: !DESCRIPTORS, sham: !DESCRIPTORS }, {\n  defineProperty: objectDefinePropertyModile.f\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.object.define-property.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.object.keys.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.object.keys.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js-pure/internals/to-object.js\");\nvar nativeKeys = __webpack_require__(/*! ../internals/object-keys */ \"./node_modules/core-js-pure/internals/object-keys.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\n\nvar FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });\n\n// `Object.keys` method\n// https://tc39.github.io/ecma262/#sec-object.keys\n$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {\n  keys: function keys(it) {\n    return nativeKeys(toObject(it));\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.object.keys.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.object.to-string.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.object.to-string.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// empty\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.object.to-string.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.set.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.set.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar collection = __webpack_require__(/*! ../internals/collection */ \"./node_modules/core-js-pure/internals/collection.js\");\nvar collectionStrong = __webpack_require__(/*! ../internals/collection-strong */ \"./node_modules/core-js-pure/internals/collection-strong.js\");\n\n// `Set` constructor\n// https://tc39.github.io/ecma262/#sec-set-objects\nmodule.exports = collection('Set', function (init) {\n  return function Set() { return init(this, arguments.length ? arguments[0] : undefined); };\n}, collectionStrong);\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.set.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.string.iterator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.string.iterator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar charAt = __webpack_require__(/*! ../internals/string-multibyte */ \"./node_modules/core-js-pure/internals/string-multibyte.js\").charAt;\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js-pure/internals/internal-state.js\");\nvar defineIterator = __webpack_require__(/*! ../internals/define-iterator */ \"./node_modules/core-js-pure/internals/define-iterator.js\");\n\nvar STRING_ITERATOR = 'String Iterator';\nvar setInternalState = InternalStateModule.set;\nvar getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);\n\n// `String.prototype[@@iterator]` method\n// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator\ndefineIterator(String, 'String', function (iterated) {\n  setInternalState(this, {\n    type: STRING_ITERATOR,\n    string: String(iterated),\n    index: 0\n  });\n// `%StringIteratorPrototype%.next` method\n// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next\n}, function next() {\n  var state = getInternalState(this);\n  var string = state.string;\n  var index = state.index;\n  var point;\n  if (index >= string.length) return { value: undefined, done: true };\n  point = charAt(string, index);\n  state.index += point.length;\n  return { value: point, done: false };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.string.iterator.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.symbol.async-iterator.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.symbol.async-iterator.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"./node_modules/core-js-pure/internals/define-well-known-symbol.js\");\n\n// `Symbol.asyncIterator` well-known symbol\n// https://tc39.github.io/ecma262/#sec-symbol.asynciterator\ndefineWellKnownSymbol('asyncIterator');\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.symbol.async-iterator.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.symbol.description.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.symbol.description.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// empty\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.symbol.description.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.symbol.has-instance.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.symbol.has-instance.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"./node_modules/core-js-pure/internals/define-well-known-symbol.js\");\n\n// `Symbol.hasInstance` well-known symbol\n// https://tc39.github.io/ecma262/#sec-symbol.hasinstance\ndefineWellKnownSymbol('hasInstance');\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.symbol.has-instance.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.symbol.is-concat-spreadable.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.symbol.is-concat-spreadable.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"./node_modules/core-js-pure/internals/define-well-known-symbol.js\");\n\n// `Symbol.isConcatSpreadable` well-known symbol\n// https://tc39.github.io/ecma262/#sec-symbol.isconcatspreadable\ndefineWellKnownSymbol('isConcatSpreadable');\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.symbol.is-concat-spreadable.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.symbol.iterator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.symbol.iterator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"./node_modules/core-js-pure/internals/define-well-known-symbol.js\");\n\n// `Symbol.iterator` well-known symbol\n// https://tc39.github.io/ecma262/#sec-symbol.iterator\ndefineWellKnownSymbol('iterator');\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.symbol.iterator.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.symbol.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.symbol.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\nvar getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js-pure/internals/get-built-in.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js-pure/internals/is-pure.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js-pure/internals/descriptors.js\");\nvar NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ \"./node_modules/core-js-pure/internals/native-symbol.js\");\nvar USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ \"./node_modules/core-js-pure/internals/use-symbol-as-uid.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js-pure/internals/has.js\");\nvar isArray = __webpack_require__(/*! ../internals/is-array */ \"./node_modules/core-js-pure/internals/is-array.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js-pure/internals/is-object.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js-pure/internals/an-object.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js-pure/internals/to-object.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js-pure/internals/to-indexed-object.js\");\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"./node_modules/core-js-pure/internals/to-primitive.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js-pure/internals/create-property-descriptor.js\");\nvar nativeObjectCreate = __webpack_require__(/*! ../internals/object-create */ \"./node_modules/core-js-pure/internals/object-create.js\");\nvar objectKeys = __webpack_require__(/*! ../internals/object-keys */ \"./node_modules/core-js-pure/internals/object-keys.js\");\nvar getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ \"./node_modules/core-js-pure/internals/object-get-own-property-names.js\");\nvar getOwnPropertyNamesExternal = __webpack_require__(/*! ../internals/object-get-own-property-names-external */ \"./node_modules/core-js-pure/internals/object-get-own-property-names-external.js\");\nvar getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ \"./node_modules/core-js-pure/internals/object-get-own-property-symbols.js\");\nvar getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/core-js-pure/internals/object-get-own-property-descriptor.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js-pure/internals/object-define-property.js\");\nvar propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ \"./node_modules/core-js-pure/internals/object-property-is-enumerable.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js-pure/internals/create-non-enumerable-property.js\");\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/core-js-pure/internals/redefine.js\");\nvar shared = __webpack_require__(/*! ../internals/shared */ \"./node_modules/core-js-pure/internals/shared.js\");\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ \"./node_modules/core-js-pure/internals/shared-key.js\");\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"./node_modules/core-js-pure/internals/hidden-keys.js\");\nvar uid = __webpack_require__(/*! ../internals/uid */ \"./node_modules/core-js-pure/internals/uid.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\nvar wrappedWellKnownSymbolModule = __webpack_require__(/*! ../internals/well-known-symbol-wrapped */ \"./node_modules/core-js-pure/internals/well-known-symbol-wrapped.js\");\nvar defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"./node_modules/core-js-pure/internals/define-well-known-symbol.js\");\nvar setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"./node_modules/core-js-pure/internals/set-to-string-tag.js\");\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js-pure/internals/internal-state.js\");\nvar $forEach = __webpack_require__(/*! ../internals/array-iteration */ \"./node_modules/core-js-pure/internals/array-iteration.js\").forEach;\n\nvar HIDDEN = sharedKey('hidden');\nvar SYMBOL = 'Symbol';\nvar PROTOTYPE = 'prototype';\nvar TO_PRIMITIVE = wellKnownSymbol('toPrimitive');\nvar setInternalState = InternalStateModule.set;\nvar getInternalState = InternalStateModule.getterFor(SYMBOL);\nvar ObjectPrototype = Object[PROTOTYPE];\nvar $Symbol = global.Symbol;\nvar $stringify = getBuiltIn('JSON', 'stringify');\nvar nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;\nvar nativeDefineProperty = definePropertyModule.f;\nvar nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;\nvar nativePropertyIsEnumerable = propertyIsEnumerableModule.f;\nvar AllSymbols = shared('symbols');\nvar ObjectPrototypeSymbols = shared('op-symbols');\nvar StringToSymbolRegistry = shared('string-to-symbol-registry');\nvar SymbolToStringRegistry = shared('symbol-to-string-registry');\nvar WellKnownSymbolsStore = shared('wks');\nvar QObject = global.QObject;\n// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173\nvar USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;\n\n// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687\nvar setSymbolDescriptor = DESCRIPTORS && fails(function () {\n  return nativeObjectCreate(nativeDefineProperty({}, 'a', {\n    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }\n  })).a != 7;\n}) ? function (O, P, Attributes) {\n  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);\n  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];\n  nativeDefineProperty(O, P, Attributes);\n  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {\n    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);\n  }\n} : nativeDefineProperty;\n\nvar wrap = function (tag, description) {\n  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);\n  setInternalState(symbol, {\n    type: SYMBOL,\n    tag: tag,\n    description: description\n  });\n  if (!DESCRIPTORS) symbol.description = description;\n  return symbol;\n};\n\nvar isSymbol = USE_SYMBOL_AS_UID ? function (it) {\n  return typeof it == 'symbol';\n} : function (it) {\n  return Object(it) instanceof $Symbol;\n};\n\nvar $defineProperty = function defineProperty(O, P, Attributes) {\n  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);\n  anObject(O);\n  var key = toPrimitive(P, true);\n  anObject(Attributes);\n  if (has(AllSymbols, key)) {\n    if (!Attributes.enumerable) {\n      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));\n      O[HIDDEN][key] = true;\n    } else {\n      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;\n      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });\n    } return setSymbolDescriptor(O, key, Attributes);\n  } return nativeDefineProperty(O, key, Attributes);\n};\n\nvar $defineProperties = function defineProperties(O, Properties) {\n  anObject(O);\n  var properties = toIndexedObject(Properties);\n  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));\n  $forEach(keys, function (key) {\n    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);\n  });\n  return O;\n};\n\nvar $create = function create(O, Properties) {\n  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);\n};\n\nvar $propertyIsEnumerable = function propertyIsEnumerable(V) {\n  var P = toPrimitive(V, true);\n  var enumerable = nativePropertyIsEnumerable.call(this, P);\n  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;\n  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;\n};\n\nvar $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {\n  var it = toIndexedObject(O);\n  var key = toPrimitive(P, true);\n  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;\n  var descriptor = nativeGetOwnPropertyDescriptor(it, key);\n  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {\n    descriptor.enumerable = true;\n  }\n  return descriptor;\n};\n\nvar $getOwnPropertyNames = function getOwnPropertyNames(O) {\n  var names = nativeGetOwnPropertyNames(toIndexedObject(O));\n  var result = [];\n  $forEach(names, function (key) {\n    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);\n  });\n  return result;\n};\n\nvar $getOwnPropertySymbols = function getOwnPropertySymbols(O) {\n  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;\n  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));\n  var result = [];\n  $forEach(names, function (key) {\n    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {\n      result.push(AllSymbols[key]);\n    }\n  });\n  return result;\n};\n\n// `Symbol` constructor\n// https://tc39.github.io/ecma262/#sec-symbol-constructor\nif (!NATIVE_SYMBOL) {\n  $Symbol = function Symbol() {\n    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');\n    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);\n    var tag = uid(description);\n    var setter = function (value) {\n      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);\n      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;\n      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));\n    };\n    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });\n    return wrap(tag, description);\n  };\n\n  redefine($Symbol[PROTOTYPE], 'toString', function toString() {\n    return getInternalState(this).tag;\n  });\n\n  redefine($Symbol, 'withoutSetter', function (description) {\n    return wrap(uid(description), description);\n  });\n\n  propertyIsEnumerableModule.f = $propertyIsEnumerable;\n  definePropertyModule.f = $defineProperty;\n  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;\n  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;\n  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;\n\n  wrappedWellKnownSymbolModule.f = function (name) {\n    return wrap(wellKnownSymbol(name), name);\n  };\n\n  if (DESCRIPTORS) {\n    // https://github.com/tc39/proposal-Symbol-description\n    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {\n      configurable: true,\n      get: function description() {\n        return getInternalState(this).description;\n      }\n    });\n    if (!IS_PURE) {\n      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });\n    }\n  }\n}\n\n$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {\n  Symbol: $Symbol\n});\n\n$forEach(objectKeys(WellKnownSymbolsStore), function (name) {\n  defineWellKnownSymbol(name);\n});\n\n$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {\n  // `Symbol.for` method\n  // https://tc39.github.io/ecma262/#sec-symbol.for\n  'for': function (key) {\n    var string = String(key);\n    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];\n    var symbol = $Symbol(string);\n    StringToSymbolRegistry[string] = symbol;\n    SymbolToStringRegistry[symbol] = string;\n    return symbol;\n  },\n  // `Symbol.keyFor` method\n  // https://tc39.github.io/ecma262/#sec-symbol.keyfor\n  keyFor: function keyFor(sym) {\n    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');\n    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];\n  },\n  useSetter: function () { USE_SETTER = true; },\n  useSimple: function () { USE_SETTER = false; }\n});\n\n$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {\n  // `Object.create` method\n  // https://tc39.github.io/ecma262/#sec-object.create\n  create: $create,\n  // `Object.defineProperty` method\n  // https://tc39.github.io/ecma262/#sec-object.defineproperty\n  defineProperty: $defineProperty,\n  // `Object.defineProperties` method\n  // https://tc39.github.io/ecma262/#sec-object.defineproperties\n  defineProperties: $defineProperties,\n  // `Object.getOwnPropertyDescriptor` method\n  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors\n  getOwnPropertyDescriptor: $getOwnPropertyDescriptor\n});\n\n$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {\n  // `Object.getOwnPropertyNames` method\n  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames\n  getOwnPropertyNames: $getOwnPropertyNames,\n  // `Object.getOwnPropertySymbols` method\n  // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols\n  getOwnPropertySymbols: $getOwnPropertySymbols\n});\n\n// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives\n// https://bugs.chromium.org/p/v8/issues/detail?id=3443\n$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {\n  getOwnPropertySymbols: function getOwnPropertySymbols(it) {\n    return getOwnPropertySymbolsModule.f(toObject(it));\n  }\n});\n\n// `JSON.stringify` method behavior with symbols\n// https://tc39.github.io/ecma262/#sec-json.stringify\nif ($stringify) {\n  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {\n    var symbol = $Symbol();\n    // MS Edge converts symbol values to JSON as {}\n    return $stringify([symbol]) != '[null]'\n      // WebKit converts symbol values to JSON as null\n      || $stringify({ a: symbol }) != '{}'\n      // V8 throws on boxed symbols\n      || $stringify(Object(symbol)) != '{}';\n  });\n\n  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {\n    // eslint-disable-next-line no-unused-vars\n    stringify: function stringify(it, replacer, space) {\n      var args = [it];\n      var index = 1;\n      var $replacer;\n      while (arguments.length > index) args.push(arguments[index++]);\n      $replacer = replacer;\n      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined\n      if (!isArray(replacer)) replacer = function (key, value) {\n        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);\n        if (!isSymbol(value)) return value;\n      };\n      args[1] = replacer;\n      return $stringify.apply(null, args);\n    }\n  });\n}\n\n// `Symbol.prototype[@@toPrimitive]` method\n// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive\nif (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {\n  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);\n}\n// `Symbol.prototype[@@toStringTag]` property\n// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag\nsetToStringTag($Symbol, SYMBOL);\n\nhiddenKeys[HIDDEN] = true;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.symbol.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.symbol.match-all.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.symbol.match-all.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"./node_modules/core-js-pure/internals/define-well-known-symbol.js\");\n\n// `Symbol.matchAll` well-known symbol\ndefineWellKnownSymbol('matchAll');\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.symbol.match-all.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.symbol.match.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.symbol.match.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"./node_modules/core-js-pure/internals/define-well-known-symbol.js\");\n\n// `Symbol.match` well-known symbol\n// https://tc39.github.io/ecma262/#sec-symbol.match\ndefineWellKnownSymbol('match');\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.symbol.match.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.symbol.replace.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.symbol.replace.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"./node_modules/core-js-pure/internals/define-well-known-symbol.js\");\n\n// `Symbol.replace` well-known symbol\n// https://tc39.github.io/ecma262/#sec-symbol.replace\ndefineWellKnownSymbol('replace');\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.symbol.replace.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.symbol.search.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.symbol.search.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"./node_modules/core-js-pure/internals/define-well-known-symbol.js\");\n\n// `Symbol.search` well-known symbol\n// https://tc39.github.io/ecma262/#sec-symbol.search\ndefineWellKnownSymbol('search');\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.symbol.search.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.symbol.species.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.symbol.species.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"./node_modules/core-js-pure/internals/define-well-known-symbol.js\");\n\n// `Symbol.species` well-known symbol\n// https://tc39.github.io/ecma262/#sec-symbol.species\ndefineWellKnownSymbol('species');\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.symbol.species.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.symbol.split.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.symbol.split.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"./node_modules/core-js-pure/internals/define-well-known-symbol.js\");\n\n// `Symbol.split` well-known symbol\n// https://tc39.github.io/ecma262/#sec-symbol.split\ndefineWellKnownSymbol('split');\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.symbol.split.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.symbol.to-primitive.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.symbol.to-primitive.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"./node_modules/core-js-pure/internals/define-well-known-symbol.js\");\n\n// `Symbol.toPrimitive` well-known symbol\n// https://tc39.github.io/ecma262/#sec-symbol.toprimitive\ndefineWellKnownSymbol('toPrimitive');\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.symbol.to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.symbol.to-string-tag.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.symbol.to-string-tag.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"./node_modules/core-js-pure/internals/define-well-known-symbol.js\");\n\n// `Symbol.toStringTag` well-known symbol\n// https://tc39.github.io/ecma262/#sec-symbol.tostringtag\ndefineWellKnownSymbol('toStringTag');\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.symbol.to-string-tag.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.symbol.unscopables.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.symbol.unscopables.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"./node_modules/core-js-pure/internals/define-well-known-symbol.js\");\n\n// `Symbol.unscopables` well-known symbol\n// https://tc39.github.io/ecma262/#sec-symbol.unscopables\ndefineWellKnownSymbol('unscopables');\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.symbol.unscopables.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/esnext.symbol.async-dispose.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/esnext.symbol.async-dispose.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"./node_modules/core-js-pure/internals/define-well-known-symbol.js\");\n\n// `Symbol.asyncDispose` well-known symbol\n// https://github.com/tc39/proposal-using-statement\ndefineWellKnownSymbol('asyncDispose');\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/esnext.symbol.async-dispose.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/esnext.symbol.dispose.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/esnext.symbol.dispose.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"./node_modules/core-js-pure/internals/define-well-known-symbol.js\");\n\n// `Symbol.dispose` well-known symbol\n// https://github.com/tc39/proposal-using-statement\ndefineWellKnownSymbol('dispose');\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/esnext.symbol.dispose.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/esnext.symbol.observable.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/esnext.symbol.observable.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"./node_modules/core-js-pure/internals/define-well-known-symbol.js\");\n\n// `Symbol.observable` well-known symbol\n// https://github.com/tc39/proposal-observable\ndefineWellKnownSymbol('observable');\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/esnext.symbol.observable.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/esnext.symbol.pattern-match.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/esnext.symbol.pattern-match.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"./node_modules/core-js-pure/internals/define-well-known-symbol.js\");\n\n// `Symbol.patternMatch` well-known symbol\n// https://github.com/tc39/proposal-pattern-matching\ndefineWellKnownSymbol('patternMatch');\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/esnext.symbol.pattern-match.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/esnext.symbol.replace-all.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/esnext.symbol.replace-all.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// TODO: remove from `core-js@4`\nvar defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"./node_modules/core-js-pure/internals/define-well-known-symbol.js\");\n\ndefineWellKnownSymbol('replaceAll');\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/esnext.symbol.replace-all.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/web.dom-collections.iterator.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/web.dom-collections.iterator.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./es.array.iterator */ \"./node_modules/core-js-pure/modules/es.array.iterator.js\");\nvar DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ \"./node_modules/core-js-pure/internals/dom-iterables.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\nvar classof = __webpack_require__(/*! ../internals/classof */ \"./node_modules/core-js-pure/internals/classof.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js-pure/internals/create-non-enumerable-property.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"./node_modules/core-js-pure/internals/iterators.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\n\nfor (var COLLECTION_NAME in DOMIterables) {\n  var Collection = global[COLLECTION_NAME];\n  var CollectionPrototype = Collection && Collection.prototype;\n  if (CollectionPrototype && classof(CollectionPrototype) !== TO_STRING_TAG) {\n    createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);\n  }\n  Iterators[COLLECTION_NAME] = Iterators.Array;\n}\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/web.dom-collections.iterator.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/array/virtual/entries.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js-pure/stable/array/virtual/entries.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../../es/array/virtual/entries */ \"./node_modules/core-js-pure/es/array/virtual/entries.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/stable/array/virtual/entries.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/array/virtual/for-each.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js-pure/stable/array/virtual/for-each.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../../es/array/virtual/for-each */ \"./node_modules/core-js-pure/es/array/virtual/for-each.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/stable/array/virtual/for-each.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/array/virtual/keys.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/stable/array/virtual/keys.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../../es/array/virtual/keys */ \"./node_modules/core-js-pure/es/array/virtual/keys.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/stable/array/virtual/keys.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/instance/concat.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/stable/instance/concat.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../es/instance/concat */ \"./node_modules/core-js-pure/es/instance/concat.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/stable/instance/concat.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/instance/entries.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/stable/instance/entries.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/web.dom-collections.iterator */ \"./node_modules/core-js-pure/modules/web.dom-collections.iterator.js\");\nvar entries = __webpack_require__(/*! ../array/virtual/entries */ \"./node_modules/core-js-pure/stable/array/virtual/entries.js\");\nvar classof = __webpack_require__(/*! ../../internals/classof */ \"./node_modules/core-js-pure/internals/classof.js\");\nvar ArrayPrototype = Array.prototype;\n\nvar DOMIterables = {\n  DOMTokenList: true,\n  NodeList: true\n};\n\nmodule.exports = function (it) {\n  var own = it.entries;\n  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.entries)\n    // eslint-disable-next-line no-prototype-builtins\n    || DOMIterables.hasOwnProperty(classof(it)) ? entries : own;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/stable/instance/entries.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/instance/find.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/stable/instance/find.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../es/instance/find */ \"./node_modules/core-js-pure/es/instance/find.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/stable/instance/find.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/instance/for-each.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/stable/instance/for-each.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/web.dom-collections.iterator */ \"./node_modules/core-js-pure/modules/web.dom-collections.iterator.js\");\nvar forEach = __webpack_require__(/*! ../array/virtual/for-each */ \"./node_modules/core-js-pure/stable/array/virtual/for-each.js\");\nvar classof = __webpack_require__(/*! ../../internals/classof */ \"./node_modules/core-js-pure/internals/classof.js\");\nvar ArrayPrototype = Array.prototype;\n\nvar DOMIterables = {\n  DOMTokenList: true,\n  NodeList: true\n};\n\nmodule.exports = function (it) {\n  var own = it.forEach;\n  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.forEach)\n    // eslint-disable-next-line no-prototype-builtins\n    || DOMIterables.hasOwnProperty(classof(it)) ? forEach : own;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/stable/instance/for-each.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/instance/keys.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/stable/instance/keys.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/web.dom-collections.iterator */ \"./node_modules/core-js-pure/modules/web.dom-collections.iterator.js\");\nvar keys = __webpack_require__(/*! ../array/virtual/keys */ \"./node_modules/core-js-pure/stable/array/virtual/keys.js\");\nvar classof = __webpack_require__(/*! ../../internals/classof */ \"./node_modules/core-js-pure/internals/classof.js\");\nvar ArrayPrototype = Array.prototype;\n\nvar DOMIterables = {\n  DOMTokenList: true,\n  NodeList: true\n};\n\nmodule.exports = function (it) {\n  var own = it.keys;\n  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.keys)\n    // eslint-disable-next-line no-prototype-builtins\n    || DOMIterables.hasOwnProperty(classof(it)) ? keys : own;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/stable/instance/keys.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/json/stringify.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/stable/json/stringify.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../es/json/stringify */ \"./node_modules/core-js-pure/es/json/stringify.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/stable/json/stringify.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/map/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js-pure/stable/map/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../es/map */ \"./node_modules/core-js-pure/es/map/index.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/stable/map/index.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/object/assign.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/stable/object/assign.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../es/object/assign */ \"./node_modules/core-js-pure/es/object/assign.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/stable/object/assign.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/object/define-property.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js-pure/stable/object/define-property.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../es/object/define-property */ \"./node_modules/core-js-pure/es/object/define-property.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/stable/object/define-property.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/object/keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js-pure/stable/object/keys.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../es/object/keys */ \"./node_modules/core-js-pure/es/object/keys.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/stable/object/keys.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/set/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js-pure/stable/set/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../es/set */ \"./node_modules/core-js-pure/es/set/index.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/stable/set/index.js?");

/***/ }),

/***/ "./node_modules/dom-accessibility-api/dist/accessible-name.mjs":
/*!*********************************************************************!*\
  !*** ./node_modules/dom-accessibility-api/dist/accessible-name.mjs ***!
  \*********************************************************************/
/*! exports provided: computeAccessibleName */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"computeAccessibleName\", function() { return computeAccessibleName; });\n/* harmony import */ var _polyfills_array_from_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfills/array.from.mjs */ \"./node_modules/dom-accessibility-api/dist/polyfills/array.from.mjs\");\n/* harmony import */ var _polyfills_SetLike_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./polyfills/SetLike.mjs */ \"./node_modules/dom-accessibility-api/dist/polyfills/SetLike.mjs\");\n/* harmony import */ var _getRole_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getRole.mjs */ \"./node_modules/dom-accessibility-api/dist/getRole.mjs\");\n/* harmony import */ var _util_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util.mjs */ \"./node_modules/dom-accessibility-api/dist/util.mjs\");\n/**\n * implements https://w3c.github.io/accname/\n */\n\n\n\n\n/**\n *  A string of characters where all carriage returns, newlines, tabs, and form-feeds are replaced with a single space, and multiple spaces are reduced to a single space. The string contains only character data; it does not contain any markup.\n */\n\n/**\n * Small utility that handles all the JS quirks with `this` which is important\n * if no mock is provided.\n * @param element\n * @param options - These are not optional to prevent accidentally calling it without options in `computeAccessibleName`\n */\nfunction createGetComputedStyle(element, options) {\n  var window = Object(_util_mjs__WEBPACK_IMPORTED_MODULE_3__[\"safeWindow\"])(element);\n  var _options$getComputedS = options.getComputedStyle,\n      getComputedStyle = _options$getComputedS === void 0 ? window.getComputedStyle.bind(window) : _options$getComputedS;\n  return getComputedStyle;\n}\n/**\n *\n * @param {string} string -\n * @returns {FlatString} -\n */\n\n\nfunction asFlatString(s) {\n  return s.trim().replace(/\\s\\s+/g, \" \");\n}\n/**\n * https://w3c.github.io/aria/#namefromprohibited\n */\n\n\nfunction prohibitsNaming(node) {\n  return hasAnyConcreteRoles(node, [\"caption\", \"code\", \"deletion\", \"emphasis\", \"generic\", \"insertion\", \"paragraph\", \"presentation\", \"strong\", \"subscript\", \"superscript\"]);\n}\n/**\n *\n * @param node -\n * @param options - These are not optional to prevent accidentally calling it without options in `computeAccessibleName`\n * @returns {boolean} -\n */\n\n\nfunction isHidden(node, options) {\n  if (!Object(_util_mjs__WEBPACK_IMPORTED_MODULE_3__[\"isElement\"])(node)) {\n    return false;\n  }\n\n  if (node.hasAttribute(\"hidden\") || node.getAttribute(\"aria-hidden\") === \"true\") {\n    return true;\n  }\n\n  var style = createGetComputedStyle(node, options)(node);\n  return style.getPropertyValue(\"display\") === \"none\" || style.getPropertyValue(\"visibility\") === \"hidden\";\n}\n/**\n *\n * @param {Node} node -\n * @param {string} attributeName -\n * @returns {Element[]} -\n */\n\n\nfunction idRefs(node, attributeName) {\n  if (Object(_util_mjs__WEBPACK_IMPORTED_MODULE_3__[\"isElement\"])(node) && node.hasAttribute(attributeName)) {\n    // safe due to hasAttribute check\n    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion\n    var ids = node.getAttribute(attributeName).split(\" \");\n    return ids // safe since it can't be null for an Element\n    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion\n    .map(function (id) {\n      return node.ownerDocument.getElementById(id);\n    }).filter(function (element) {\n      return element !== null;\n    } // TODO: why does this not narrow?\n    );\n  }\n\n  return [];\n}\n/**\n * @param {Node} node -\n * @returns {boolean} - As defined in step 2E of https://w3c.github.io/accname/#mapping_additional_nd_te\n */\n\n\nfunction isControl(node) {\n  return hasAnyConcreteRoles(node, [\"button\", \"combobox\", \"listbox\", \"textbox\"]) || hasAbstractRole(node, \"range\");\n}\n\nfunction hasAbstractRole(node, role) {\n  if (!Object(_util_mjs__WEBPACK_IMPORTED_MODULE_3__[\"isElement\"])(node)) {\n    return false;\n  }\n\n  switch (role) {\n    case \"range\":\n      return hasAnyConcreteRoles(node, [\"meter\", \"progressbar\", \"scrollbar\", \"slider\", \"spinbutton\"]);\n\n    default:\n      throw new TypeError(\"No knowledge about abstract role '\".concat(role, \"'. This is likely a bug :(\"));\n  }\n}\n\nfunction hasAnyConcreteRoles(node, roles) {\n  if (Object(_util_mjs__WEBPACK_IMPORTED_MODULE_3__[\"isElement\"])(node)) {\n    return roles.indexOf(Object(_getRole_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(node)) !== -1;\n  }\n\n  return false;\n}\n/**\n * element.querySelectorAll but also considers owned tree\n * @param element\n * @param selectors\n */\n\n\nfunction querySelectorAllSubtree(element, selectors) {\n  var elements = Object(_polyfills_array_from_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(element.querySelectorAll(selectors));\n  idRefs(element, \"aria-owns\").forEach(function (root) {\n    // babel transpiles this assuming an iterator\n    elements.push.apply(elements, Object(_polyfills_array_from_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(root.querySelectorAll(selectors)));\n  });\n  return elements;\n}\n\nfunction querySelectedOptions(listbox) {\n  if (Object(_util_mjs__WEBPACK_IMPORTED_MODULE_3__[\"isHTMLSelectElement\"])(listbox)) {\n    // IE11 polyfill\n    return listbox.selectedOptions || querySelectorAllSubtree(listbox, \"[selected]\");\n  }\n\n  return querySelectorAllSubtree(listbox, '[aria-selected=\"true\"]');\n}\n\nfunction isMarkedPresentational(node) {\n  return hasAnyConcreteRoles(node, [\"none\", \"presentation\"]);\n}\n/**\n * Elements specifically listed in html-aam\n *\n * We don't need this for `label` or `legend` elements.\n * Their implicit roles already allow \"naming from content\".\n *\n * sources:\n *\n * - https://w3c.github.io/html-aam/#table-element\n */\n\n\nfunction isNativeHostLanguageTextAlternativeElement(node) {\n  return Object(_util_mjs__WEBPACK_IMPORTED_MODULE_3__[\"isHTMLTableCaptionElement\"])(node);\n}\n/**\n * https://w3c.github.io/aria/#namefromcontent\n */\n\n\nfunction allowsNameFromContent(node) {\n  return hasAnyConcreteRoles(node, [\"button\", \"cell\", \"checkbox\", \"columnheader\", \"gridcell\", \"heading\", \"label\", \"legend\", \"link\", \"menuitem\", \"menuitemcheckbox\", \"menuitemradio\", \"option\", \"radio\", \"row\", \"rowheader\", \"switch\", \"tab\", \"tooltip\", \"treeitem\"]);\n}\n/**\n * TODO https://github.com/eps1lon/dom-accessibility-api/issues/100\n */\n\n\nfunction isDescendantOfNativeHostLanguageTextAlternativeElement( // eslint-disable-next-line @typescript-eslint/no-unused-vars -- not implemented yet\nnode) {\n  return false;\n}\n/**\n * TODO https://github.com/eps1lon/dom-accessibility-api/issues/101\n */\n// eslint-disable-next-line @typescript-eslint/no-unused-vars -- not implemented yet\n\n\nfunction computeTooltipAttributeValue(node) {\n  return null;\n}\n\nfunction getValueOfTextbox(element) {\n  if (Object(_util_mjs__WEBPACK_IMPORTED_MODULE_3__[\"isHTMLInputElement\"])(element) || Object(_util_mjs__WEBPACK_IMPORTED_MODULE_3__[\"isHTMLTextAreaElement\"])(element)) {\n    return element.value;\n  } // https://github.com/eps1lon/dom-accessibility-api/issues/4\n\n\n  return element.textContent || \"\";\n}\n\nfunction getTextualContent(declaration) {\n  var content = declaration.getPropertyValue(\"content\");\n\n  if (/^[\"'].*[\"']$/.test(content)) {\n    return content.slice(1, -1);\n  }\n\n  return \"\";\n}\n/**\n * implements https://w3c.github.io/accname/#mapping_additional_nd_te\n * @param root\n * @param [options]\n * @parma [options.getComputedStyle] - mock window.getComputedStyle. Needs `content`, `display` and `visibility`\n */\n\n\nfunction computeAccessibleName(root) {\n  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  var consultedNodes = new _polyfills_SetLike_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\n  if (prohibitsNaming(root)) {\n    return \"\";\n  } // 2F.i\n\n\n  function computeMiscTextAlternative(node, context) {\n    var accumulatedText = \"\";\n\n    if (Object(_util_mjs__WEBPACK_IMPORTED_MODULE_3__[\"isElement\"])(node)) {\n      var pseudoBefore = createGetComputedStyle(node, options)(node, \"::before\");\n      var beforeContent = getTextualContent(pseudoBefore);\n      accumulatedText = \"\".concat(beforeContent, \" \").concat(accumulatedText);\n    } // FIXME: This is not defined in the spec\n    // But it is required in the web-platform-test\n\n\n    var childNodes = Object(_polyfills_array_from_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(node.childNodes).concat(idRefs(node, \"aria-owns\"));\n    childNodes.forEach(function (child) {\n      var result = computeTextAlternative(child, {\n        isEmbeddedInLabel: context.isEmbeddedInLabel,\n        isReferenced: false,\n        recursion: true\n      }); // TODO: Unclear why display affects delimiter\n\n      var display = Object(_util_mjs__WEBPACK_IMPORTED_MODULE_3__[\"isElement\"])(node) && createGetComputedStyle(node, options)(node).getPropertyValue(\"display\");\n      var separator = display !== \"inline\" ? \" \" : \"\";\n      accumulatedText += \"\".concat(separator).concat(result);\n    });\n\n    if (Object(_util_mjs__WEBPACK_IMPORTED_MODULE_3__[\"isElement\"])(node)) {\n      var pseudoAfter = createGetComputedStyle(node, options)(node, \":after\");\n      var afterContent = getTextualContent(pseudoAfter);\n      accumulatedText = \"\".concat(accumulatedText, \" \").concat(afterContent);\n    }\n\n    return accumulatedText;\n  }\n\n  function computeAttributeTextAlternative(node) {\n    if (!Object(_util_mjs__WEBPACK_IMPORTED_MODULE_3__[\"isElement\"])(node)) {\n      return null;\n    }\n\n    var titleAttribute = node.getAttributeNode(\"title\");\n\n    if (titleAttribute !== null && !consultedNodes.has(titleAttribute)) {\n      consultedNodes.add(titleAttribute);\n      return titleAttribute.value;\n    }\n\n    var altAttribute = node.getAttributeNode(\"alt\");\n\n    if (altAttribute !== null && !consultedNodes.has(altAttribute)) {\n      consultedNodes.add(altAttribute);\n      return altAttribute.value;\n    }\n\n    if (Object(_util_mjs__WEBPACK_IMPORTED_MODULE_3__[\"isHTMLInputElement\"])(node) && node.type === \"button\") {\n      consultedNodes.add(node);\n      return node.getAttribute(\"value\") || \"\";\n    }\n\n    return null;\n  }\n\n  function computeElementTextAlternative(node) {\n    // https://w3c.github.io/html-aam/#fieldset-and-legend-elements\n    if (Object(_util_mjs__WEBPACK_IMPORTED_MODULE_3__[\"isHTMLFieldSetElement\"])(node)) {\n      consultedNodes.add(node);\n      var children = Object(_polyfills_array_from_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(node.childNodes);\n\n      for (var i = 0; i < children.length; i += 1) {\n        var child = children[i];\n\n        if (Object(_util_mjs__WEBPACK_IMPORTED_MODULE_3__[\"isHTMLLegendElement\"])(child)) {\n          return computeTextAlternative(child, {\n            isEmbeddedInLabel: false,\n            isReferenced: false,\n            recursion: false\n          });\n        }\n      }\n\n      return null;\n    } // https://w3c.github.io/html-aam/#table-element\n\n\n    if (Object(_util_mjs__WEBPACK_IMPORTED_MODULE_3__[\"isHTMLTableElement\"])(node)) {\n      consultedNodes.add(node);\n\n      var _children = Object(_polyfills_array_from_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(node.childNodes);\n\n      for (var _i = 0; _i < _children.length; _i += 1) {\n        var _child = _children[_i];\n\n        if (Object(_util_mjs__WEBPACK_IMPORTED_MODULE_3__[\"isHTMLTableCaptionElement\"])(_child)) {\n          return computeTextAlternative(_child, {\n            isEmbeddedInLabel: false,\n            isReferenced: false,\n            recursion: false\n          });\n        }\n      }\n\n      return null;\n    }\n\n    if (!(Object(_util_mjs__WEBPACK_IMPORTED_MODULE_3__[\"isHTMLInputElement\"])(node) || Object(_util_mjs__WEBPACK_IMPORTED_MODULE_3__[\"isHTMLSelectElement\"])(node) || Object(_util_mjs__WEBPACK_IMPORTED_MODULE_3__[\"isHTMLTextAreaElement\"])(node))) {\n      return null;\n    }\n\n    var input = node; // https://w3c.github.io/html-aam/#input-type-text-input-type-password-input-type-search-input-type-tel-input-type-email-input-type-url-and-textarea-element-accessible-description-computation\n\n    if (input.type === \"submit\") {\n      return \"Submit\";\n    }\n\n    if (input.type === \"reset\") {\n      return \"Reset\";\n    }\n\n    var labels = input.labels; // IE11 does not implement labels, TODO: verify with caniuse instead of mdn\n\n    if (labels === null || labels === undefined || labels.length === 0) {\n      return null;\n    }\n\n    consultedNodes.add(input);\n    return Object(_polyfills_array_from_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(labels).map(function (element) {\n      return computeTextAlternative(element, {\n        isEmbeddedInLabel: true,\n        isReferenced: false,\n        recursion: true\n      });\n    }).filter(function (label) {\n      return label.length > 0;\n    }).join(\" \");\n  }\n\n  function computeTextAlternative(current, context) {\n    if (consultedNodes.has(current)) {\n      return \"\";\n    } // special casing, cheating to make tests pass\n    // https://github.com/w3c/accname/issues/67\n\n\n    if (hasAnyConcreteRoles(current, [\"menu\"])) {\n      consultedNodes.add(current);\n      return \"\";\n    } // 2A\n\n\n    if (isHidden(current, options) && !context.isReferenced) {\n      consultedNodes.add(current);\n      return \"\";\n    } // 2B\n\n\n    var labelElements = idRefs(current, \"aria-labelledby\");\n\n    if (!context.isReferenced && labelElements.length > 0) {\n      return labelElements.map(function (element) {\n        return computeTextAlternative(element, {\n          isEmbeddedInLabel: context.isEmbeddedInLabel,\n          isReferenced: true,\n          // thais isn't recursion as specified, otherwise we would skip\n          // `aria-label` in\n          // <input id=\"myself\" aria-label=\"foo\" aria-labelledby=\"myself\"\n          recursion: false\n        });\n      }).join(\" \");\n    } // 2C\n    // Changed from the spec in anticipation of https://github.com/w3c/accname/issues/64\n    // spec says we should only consider skipping if we have a non-empty label\n\n\n    var skipToStep2E = context.recursion && isControl(current);\n\n    if (!skipToStep2E) {\n      var ariaLabel = (Object(_util_mjs__WEBPACK_IMPORTED_MODULE_3__[\"isElement\"])(current) && current.getAttribute(\"aria-label\") || \"\").trim();\n\n      if (ariaLabel !== \"\") {\n        consultedNodes.add(current);\n        return ariaLabel;\n      } // 2D\n\n\n      if (!isMarkedPresentational(current)) {\n        var elementTextAlternative = computeElementTextAlternative(current);\n\n        if (elementTextAlternative !== null) {\n          consultedNodes.add(current);\n          return elementTextAlternative;\n        }\n\n        var attributeTextAlternative = computeAttributeTextAlternative(current);\n\n        if (attributeTextAlternative !== null) {\n          consultedNodes.add(current);\n          return attributeTextAlternative;\n        }\n      }\n    } // 2E\n\n\n    if (skipToStep2E || context.isEmbeddedInLabel || context.isReferenced) {\n      if (hasAnyConcreteRoles(current, [\"combobox\", \"listbox\"])) {\n        consultedNodes.add(current);\n        var selectedOptions = querySelectedOptions(current);\n\n        if (selectedOptions.length === 0) {\n          // defined per test `name_heading_combobox`\n          return Object(_util_mjs__WEBPACK_IMPORTED_MODULE_3__[\"isHTMLInputElement\"])(current) ? current.value : \"\";\n        }\n\n        return Object(_polyfills_array_from_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(selectedOptions).map(function (selectedOption) {\n          return computeTextAlternative(selectedOption, {\n            isEmbeddedInLabel: context.isEmbeddedInLabel,\n            isReferenced: false,\n            recursion: true\n          });\n        }).join(\" \");\n      }\n\n      if (hasAbstractRole(current, \"range\")) {\n        consultedNodes.add(current);\n\n        if (current.hasAttribute(\"aria-valuetext\")) {\n          // safe due to hasAttribute guard\n          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion\n          return current.getAttribute(\"aria-valuetext\");\n        }\n\n        if (current.hasAttribute(\"aria-valuenow\")) {\n          // safe due to hasAttribute guard\n          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion\n          return current.getAttribute(\"aria-valuenow\");\n        } // Otherwise, use the value as specified by a host language attribute.\n\n\n        return current.getAttribute(\"value\") || \"\";\n      }\n\n      if (hasAnyConcreteRoles(current, [\"textbox\"])) {\n        consultedNodes.add(current);\n        return getValueOfTextbox(current);\n      }\n    } // 2F: https://w3c.github.io/accname/#step2F\n\n\n    if (allowsNameFromContent(current) || Object(_util_mjs__WEBPACK_IMPORTED_MODULE_3__[\"isElement\"])(current) && context.isReferenced || isNativeHostLanguageTextAlternativeElement(current) || isDescendantOfNativeHostLanguageTextAlternativeElement(current)) {\n      consultedNodes.add(current);\n      return computeMiscTextAlternative(current, {\n        isEmbeddedInLabel: context.isEmbeddedInLabel,\n        isReferenced: false\n      });\n    }\n\n    if (current.nodeType === current.TEXT_NODE) {\n      consultedNodes.add(current);\n      return current.textContent || \"\";\n    }\n\n    if (context.recursion) {\n      consultedNodes.add(current);\n      return computeMiscTextAlternative(current, {\n        isEmbeddedInLabel: context.isEmbeddedInLabel,\n        isReferenced: false\n      });\n    }\n\n    var tooltipAttributeValue = computeTooltipAttributeValue(current);\n\n    if (tooltipAttributeValue !== null) {\n      consultedNodes.add(current);\n      return tooltipAttributeValue;\n    } // TODO should this be reachable?\n\n\n    consultedNodes.add(current);\n    return \"\";\n  }\n\n  return asFlatString(computeTextAlternative(root, {\n    isEmbeddedInLabel: false,\n    isReferenced: false,\n    recursion: false\n  }));\n}\n//# sourceMappingURL=accessible-name.mjs.map\n\n//# sourceURL=webpack:///./node_modules/dom-accessibility-api/dist/accessible-name.mjs?");

/***/ }),

/***/ "./node_modules/dom-accessibility-api/dist/getRole.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/dom-accessibility-api/dist/getRole.mjs ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getRole; });\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n// https://w3c.github.io/html-aria/#document-conformance-requirements-for-use-of-aria-attributes-in-html\nfunction getRole(element) {\n  var explicitRole = getExplicitRole(element);\n\n  if (explicitRole !== null) {\n    return explicitRole;\n  }\n\n  return getImplicitRole(element);\n}\nvar tagToRoleMappings = {\n  ARTICLE: \"article\",\n  ASIDE: \"complementary\",\n  BODY: \"document\",\n  BUTTON: \"button\",\n  DATALIST: \"listbox\",\n  DD: \"definition\",\n  DETAILS: \"group\",\n  DIALOG: \"dialog\",\n  DT: \"term\",\n  FIELDSET: \"group\",\n  FIGURE: \"figure\",\n  // WARNING: Only with an accessible name\n  FORM: \"form\",\n  FOOTER: \"contentinfo\",\n  H1: \"heading\",\n  H2: \"heading\",\n  H3: \"heading\",\n  H4: \"heading\",\n  H5: \"heading\",\n  H6: \"heading\",\n  HEADER: \"banner\",\n  HR: \"separator\",\n  LEGEND: \"legend\",\n  LI: \"listitem\",\n  MATH: \"math\",\n  MAIN: \"main\",\n  MENU: \"list\",\n  NAV: \"navigation\",\n  OL: \"list\",\n  OPTGROUP: \"group\",\n  // WARNING: Only in certain context\n  OPTION: \"option\",\n  OUTPUT: \"status\",\n  PROGRESS: \"progressbar\",\n  // WARNING: Only with an accessible name\n  SECTION: \"region\",\n  SUMMARY: \"button\",\n  TABLE: \"table\",\n  TBODY: \"rowgroup\",\n  TEXTAREA: \"textbox\",\n  TFOOT: \"rowgroup\",\n  // WARNING: Only in certain context\n  TD: \"cell\",\n  TH: \"columnheader\",\n  THEAD: \"rowgroup\",\n  TR: \"row\",\n  UL: \"list\"\n};\n\nfunction getImplicitRole(element) {\n  var mappedByTag = tagToRoleMappings[element.tagName];\n\n  if (mappedByTag !== undefined) {\n    return mappedByTag;\n  }\n\n  switch (element.tagName) {\n    case \"A\":\n    case \"AREA\":\n    case \"LINK\":\n      if (element.hasAttribute(\"href\")) {\n        return \"link\";\n      }\n\n      break;\n\n    case \"IMG\":\n      if ((element.getAttribute(\"alt\") || \"\").length > 0) {\n        return \"img\";\n      }\n\n      break;\n\n    case \"INPUT\":\n      {\n        var _ref = element,\n            type = _ref.type;\n\n        switch (type) {\n          case \"button\":\n          case \"image\":\n          case \"reset\":\n          case \"submit\":\n            return \"button\";\n\n          case \"checkbox\":\n          case \"radio\":\n            return type;\n\n          case \"range\":\n            return \"slider\";\n\n          case \"email\":\n          case \"tel\":\n          case \"text\":\n          case \"url\":\n            if (element.hasAttribute(\"list\")) {\n              return \"combobox\";\n            }\n\n            return \"textbox\";\n\n          case \"search\":\n            if (element.hasAttribute(\"list\")) {\n              return \"combobox\";\n            }\n\n            return \"searchbox\";\n\n          default:\n            return null;\n        }\n      }\n\n    case \"SELECT\":\n      if (element.hasAttribute(\"multiple\") || element.size > 1) {\n        return \"listbox\";\n      }\n\n      return \"combobox\";\n  }\n\n  return null;\n}\n\nfunction getExplicitRole(element) {\n  if (element.hasAttribute(\"role\")) {\n    // safe due to hasAttribute check\n    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion\n    var _trim$split = element.getAttribute(\"role\").trim().split(\" \"),\n        _trim$split2 = _slicedToArray(_trim$split, 1),\n        explicitRole = _trim$split2[0];\n\n    if (explicitRole !== undefined && explicitRole.length > 0) {\n      return explicitRole;\n    }\n  }\n\n  return null;\n}\n//# sourceMappingURL=getRole.mjs.map\n\n//# sourceURL=webpack:///./node_modules/dom-accessibility-api/dist/getRole.mjs?");

/***/ }),

/***/ "./node_modules/dom-accessibility-api/dist/index.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/dom-accessibility-api/dist/index.mjs ***!
  \***********************************************************/
/*! exports provided: computeAccessibleName, getRole */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _accessible_name_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accessible-name.mjs */ \"./node_modules/dom-accessibility-api/dist/accessible-name.mjs\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"computeAccessibleName\", function() { return _accessible_name_mjs__WEBPACK_IMPORTED_MODULE_0__[\"computeAccessibleName\"]; });\n\n/* harmony import */ var _getRole_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getRole.mjs */ \"./node_modules/dom-accessibility-api/dist/getRole.mjs\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getRole\", function() { return _getRole_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n//# sourceMappingURL=index.mjs.map\n\n//# sourceURL=webpack:///./node_modules/dom-accessibility-api/dist/index.mjs?");

/***/ }),

/***/ "./node_modules/dom-accessibility-api/dist/polyfills/SetLike.mjs":
/*!***********************************************************************!*\
  !*** ./node_modules/dom-accessibility-api/dist/polyfills/SetLike.mjs ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n// for environments without Set we fallback to arrays with unique members\nvar SetLike = /*#__PURE__*/function (_Set) {\n  _inherits(SetLike, _Set);\n\n  var _super = _createSuper(SetLike);\n\n  function SetLike() {\n    var _this;\n\n    _classCallCheck(this, SetLike);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    _defineProperty(_assertThisInitialized(_this), \"items\", []);\n\n    return _this;\n  }\n\n  _createClass(SetLike, [{\n    key: \"add\",\n    value: function add(value) {\n      if (this.has(value) === false) {\n        this.items.push(value);\n      }\n\n      return this;\n    }\n  }, {\n    key: \"clear\",\n    value: function clear() {\n      this.items = [];\n    }\n  }, {\n    key: \"delete\",\n    value: function _delete(value) {\n      var previousLength = this.items.length;\n      this.items = this.items.filter(function (item) {\n        return item !== value;\n      });\n      return previousLength !== this.items.length;\n    }\n  }, {\n    key: \"forEach\",\n    value: function forEach(callbackfn) {\n      var _this2 = this;\n\n      this.items.forEach(function (item) {\n        callbackfn(item, item, _this2);\n      });\n    }\n  }, {\n    key: \"has\",\n    value: function has(value) {\n      return this.items.indexOf(value) !== -1;\n    }\n  }, {\n    key: \"size\",\n    get: function get() {\n      return this.items.length;\n    }\n  }]);\n\n  return SetLike;\n}( /*#__PURE__*/_wrapNativeSuper(Set));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (typeof Set === \"undefined\" ? Set : SetLike);\n//# sourceMappingURL=SetLike.mjs.map\n\n//# sourceURL=webpack:///./node_modules/dom-accessibility-api/dist/polyfills/SetLike.mjs?");

/***/ }),

/***/ "./node_modules/dom-accessibility-api/dist/polyfills/array.from.mjs":
/*!**************************************************************************!*\
  !*** ./node_modules/dom-accessibility-api/dist/polyfills/array.from.mjs ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return arrayFrom; });\n/**\n * @source {https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#Polyfill}\n * but without thisArg (too hard to type, no need to `this`)\n */\nvar toStr = Object.prototype.toString;\n\nfunction isCallable(fn) {\n  return typeof fn === \"function\" || toStr.call(fn) === \"[object Function]\";\n}\n\nfunction toInteger(value) {\n  var number = Number(value);\n\n  if (isNaN(number)) {\n    return 0;\n  }\n\n  if (number === 0 || !isFinite(number)) {\n    return number;\n  }\n\n  return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));\n}\n\nvar maxSafeInteger = Math.pow(2, 53) - 1;\n\nfunction toLength(value) {\n  var len = toInteger(value);\n  return Math.min(Math.max(len, 0), maxSafeInteger);\n}\n/**\n * Creates an array from an iterable object.\n * @param iterable An iterable object to convert to an array.\n */\n\n\n/**\n * Creates an array from an iterable object.\n * @param iterable An iterable object to convert to an array.\n * @param mapfn A mapping function to call on every element of the array.\n * @param thisArg Value of 'this' used to invoke the mapfn.\n */\nfunction arrayFrom(arrayLike, mapFn) {\n  // 1. Let C be the this value.\n  // edit(@eps1lon): we're not calling it as Array.from\n  var C = Array; // 2. Let items be ToObject(arrayLike).\n\n  var items = Object(arrayLike); // 3. ReturnIfAbrupt(items).\n\n  if (arrayLike == null) {\n    throw new TypeError(\"Array.from requires an array-like object - not null or undefined\");\n  } // 4. If mapfn is undefined, then let mapping be false.\n  // const mapFn = arguments.length > 1 ? arguments[1] : void undefined;\n\n\n  if (typeof mapFn !== \"undefined\") {\n    // 5. else\n    // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.\n    if (!isCallable(mapFn)) {\n      throw new TypeError(\"Array.from: when provided, the second argument must be a function\");\n    }\n  } // 10. Let lenValue be Get(items, \"length\").\n  // 11. Let len be ToLength(lenValue).\n\n\n  var len = toLength(items.length); // 13. If IsConstructor(C) is true, then\n  // 13. a. Let A be the result of calling the [[Construct]] internal method\n  // of C with an argument list containing the single item len.\n  // 14. a. Else, Let A be ArrayCreate(len).\n\n  var A = isCallable(C) ? Object(new C(len)) : new Array(len); // 16. Let k be 0.\n\n  var k = 0; // 17. Repeat, while k < len… (also steps a - h)\n\n  var kValue;\n\n  while (k < len) {\n    kValue = items[k];\n\n    if (mapFn) {\n      A[k] = mapFn(kValue, k);\n    } else {\n      A[k] = kValue;\n    }\n\n    k += 1;\n  } // 18. Let putStatus be Put(A, \"length\", len, true).\n\n\n  A.length = len; // 20. Return A.\n\n  return A;\n}\n//# sourceMappingURL=array.from.mjs.map\n\n//# sourceURL=webpack:///./node_modules/dom-accessibility-api/dist/polyfills/array.from.mjs?");

/***/ }),

/***/ "./node_modules/dom-accessibility-api/dist/util.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/dom-accessibility-api/dist/util.mjs ***!
  \**********************************************************/
/*! exports provided: isElement, isHTMLTableCaptionElement, isHTMLInputElement, isHTMLSelectElement, isHTMLTableElement, isHTMLTextAreaElement, safeWindow, isHTMLFieldSetElement, isHTMLLegendElement */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isElement\", function() { return isElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isHTMLTableCaptionElement\", function() { return isHTMLTableCaptionElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isHTMLInputElement\", function() { return isHTMLInputElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isHTMLSelectElement\", function() { return isHTMLSelectElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isHTMLTableElement\", function() { return isHTMLTableElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isHTMLTextAreaElement\", function() { return isHTMLTextAreaElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"safeWindow\", function() { return safeWindow; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isHTMLFieldSetElement\", function() { return isHTMLFieldSetElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isHTMLLegendElement\", function() { return isHTMLLegendElement; });\nfunction isElement(node) {\n  return node !== null && node.nodeType === node.ELEMENT_NODE;\n}\nfunction isHTMLTableCaptionElement(node) {\n  return isElement(node) && node.tagName === \"CAPTION\";\n}\nfunction isHTMLInputElement(node) {\n  return isElement(node) && node.tagName === \"INPUT\";\n}\nfunction isHTMLSelectElement(node) {\n  return isElement(node) && node.tagName === \"SELECT\";\n}\nfunction isHTMLTableElement(node) {\n  return isElement(node) && node.tagName === \"TABLE\";\n}\nfunction isHTMLTextAreaElement(node) {\n  return isElement(node) && node.tagName === \"TEXTAREA\";\n}\nfunction safeWindow(node) {\n  var _ref = node.ownerDocument === null ? node : node.ownerDocument,\n      defaultView = _ref.defaultView;\n\n  if (defaultView === null) {\n    throw new TypeError(\"no window available\");\n  }\n\n  return defaultView;\n}\nfunction isHTMLFieldSetElement(node) {\n  return isElement(node) && node.tagName === \"FIELDSET\";\n}\nfunction isHTMLLegendElement(node) {\n  return isElement(node) && node.tagName === \"LEGEND\";\n}\n//# sourceMappingURL=util.mjs.map\n\n//# sourceURL=webpack:///./node_modules/dom-accessibility-api/dist/util.mjs?");

/***/ }),

/***/ "./node_modules/pretty-format/build-es5/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/pretty-format/build-es5/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("(function webpackUniversalModuleDefinition(root, factory) {\n\tif(true)\n\t\tmodule.exports = factory();\n\telse {}\n})(window, function() {\nreturn /******/ (function(modules) { // webpackBootstrap\n/******/ \t// The module cache\n/******/ \tvar installedModules = {};\n/******/\n/******/ \t// The require function\n/******/ \tfunction __webpack_require__(moduleId) {\n/******/\n/******/ \t\t// Check if module is in cache\n/******/ \t\tif(installedModules[moduleId]) {\n/******/ \t\t\treturn installedModules[moduleId].exports;\n/******/ \t\t}\n/******/ \t\t// Create a new module (and put it into the cache)\n/******/ \t\tvar module = installedModules[moduleId] = {\n/******/ \t\t\ti: moduleId,\n/******/ \t\t\tl: false,\n/******/ \t\t\texports: {}\n/******/ \t\t};\n/******/\n/******/ \t\t// Execute the module function\n/******/ \t\tmodules[moduleId].call(module.exports, module, module.exports, __webpack_require__);\n/******/\n/******/ \t\t// Flag the module as loaded\n/******/ \t\tmodule.l = true;\n/******/\n/******/ \t\t// Return the exports of the module\n/******/ \t\treturn module.exports;\n/******/ \t}\n/******/\n/******/\n/******/ \t// expose the modules object (__webpack_modules__)\n/******/ \t__webpack_require__.m = modules;\n/******/\n/******/ \t// expose the module cache\n/******/ \t__webpack_require__.c = installedModules;\n/******/\n/******/ \t// define getter function for harmony exports\n/******/ \t__webpack_require__.d = function(exports, name, getter) {\n/******/ \t\tif(!__webpack_require__.o(exports, name)) {\n/******/ \t\t\tObject.defineProperty(exports, name, { enumerable: true, get: getter });\n/******/ \t\t}\n/******/ \t};\n/******/\n/******/ \t// define __esModule on exports\n/******/ \t__webpack_require__.r = function(exports) {\n/******/ \t\tif(typeof Symbol !== 'undefined' && Symbol.toStringTag) {\n/******/ \t\t\tObject.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });\n/******/ \t\t}\n/******/ \t\tObject.defineProperty(exports, '__esModule', { value: true });\n/******/ \t};\n/******/\n/******/ \t// create a fake namespace object\n/******/ \t// mode & 1: value is a module id, require it\n/******/ \t// mode & 2: merge all properties of value into the ns\n/******/ \t// mode & 4: return value when already ns object\n/******/ \t// mode & 8|1: behave like require\n/******/ \t__webpack_require__.t = function(value, mode) {\n/******/ \t\tif(mode & 1) value = __webpack_require__(value);\n/******/ \t\tif(mode & 8) return value;\n/******/ \t\tif((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;\n/******/ \t\tvar ns = Object.create(null);\n/******/ \t\t__webpack_require__.r(ns);\n/******/ \t\tObject.defineProperty(ns, 'default', { enumerable: true, value: value });\n/******/ \t\tif(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));\n/******/ \t\treturn ns;\n/******/ \t};\n/******/\n/******/ \t// getDefaultExport function for compatibility with non-harmony modules\n/******/ \t__webpack_require__.n = function(module) {\n/******/ \t\tvar getter = module && module.__esModule ?\n/******/ \t\t\tfunction getDefault() { return module['default']; } :\n/******/ \t\t\tfunction getModuleExports() { return module; };\n/******/ \t\t__webpack_require__.d(getter, 'a', getter);\n/******/ \t\treturn getter;\n/******/ \t};\n/******/\n/******/ \t// Object.prototype.hasOwnProperty.call\n/******/ \t__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };\n/******/\n/******/ \t// __webpack_public_path__\n/******/ \t__webpack_require__.p = \"\";\n/******/\n/******/\n/******/ \t// Load entry module and return exports\n/******/ \treturn __webpack_require__(__webpack_require__.s = \"./packages/pretty-format/src/index.ts\");\n/******/ })\n/************************************************************************/\n/******/ ({\n\n/***/ \"./node_modules/ansi-regex/index.js\":\n/*!******************************************!*\\\n  !*** ./node_modules/ansi-regex/index.js ***!\n  \\******************************************/\n/*! no static exports found */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nmodule.exports = function () {\n  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},\n      _ref$onlyFirst = _ref.onlyFirst,\n      onlyFirst = _ref$onlyFirst === void 0 ? false : _ref$onlyFirst;\n\n  var pattern = [\"[\\\\u001B\\\\u009B][[\\\\]()#;?]*(?:(?:(?:[a-zA-Z\\\\d]*(?:;[-a-zA-Z\\\\d\\\\/#&.:=?%@~_]*)*)?\\\\u0007)\", '(?:(?:\\\\d{1,4}(?:;\\\\d{0,4})*)?[\\\\dA-PR-TZcf-ntqry=><~]))'].join('|');\n  return new RegExp(pattern, onlyFirst ? undefined : 'g');\n};\n\n/***/ }),\n\n/***/ \"./node_modules/ansi-styles/index.js\":\n/*!*******************************************!*\\\n  !*** ./node_modules/ansi-styles/index.js ***!\n  \\*******************************************/\n/*! no static exports found */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n/* WEBPACK VAR INJECTION */(function(module) {\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(n); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nvar wrapAnsi16 = function wrapAnsi16(fn, offset) {\n  return function () {\n    var code = fn.apply(void 0, arguments);\n    return \"\\x1B[\".concat(code + offset, \"m\");\n  };\n};\n\nvar wrapAnsi256 = function wrapAnsi256(fn, offset) {\n  return function () {\n    var code = fn.apply(void 0, arguments);\n    return \"\\x1B[\".concat(38 + offset, \";5;\").concat(code, \"m\");\n  };\n};\n\nvar wrapAnsi16m = function wrapAnsi16m(fn, offset) {\n  return function () {\n    var rgb = fn.apply(void 0, arguments);\n    return \"\\x1B[\".concat(38 + offset, \";2;\").concat(rgb[0], \";\").concat(rgb[1], \";\").concat(rgb[2], \"m\");\n  };\n};\n\nvar ansi2ansi = function ansi2ansi(n) {\n  return n;\n};\n\nvar rgb2rgb = function rgb2rgb(r, g, b) {\n  return [r, g, b];\n};\n\nvar setLazyProperty = function setLazyProperty(object, property, _get) {\n  Object.defineProperty(object, property, {\n    get: function get() {\n      var value = _get();\n\n      Object.defineProperty(object, property, {\n        value: value,\n        enumerable: true,\n        configurable: true\n      });\n      return value;\n    },\n    enumerable: true,\n    configurable: true\n  });\n};\n/** @type {typeof import('color-convert')} */\n\n\nvar colorConvert;\n\nvar makeDynamicStyles = function makeDynamicStyles(wrap, targetSpace, identity, isBackground) {\n  if (colorConvert === undefined) {\n    colorConvert = __webpack_require__(/*! color-convert */ \"./node_modules/ansi-styles/node_modules/color-convert/index.js\");\n  }\n\n  var offset = isBackground ? 10 : 0;\n  var styles = {};\n\n  for (var _i = 0, _Object$entries = Object.entries(colorConvert); _i < _Object$entries.length; _i++) {\n    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),\n        sourceSpace = _Object$entries$_i[0],\n        suite = _Object$entries$_i[1];\n\n    var name = sourceSpace === 'ansi16' ? 'ansi' : sourceSpace;\n\n    if (sourceSpace === targetSpace) {\n      styles[name] = wrap(identity, offset);\n    } else if (_typeof(suite) === 'object') {\n      styles[name] = wrap(suite[targetSpace], offset);\n    }\n  }\n\n  return styles;\n};\n\nfunction assembleStyles() {\n  var codes = new Map();\n  var styles = {\n    modifier: {\n      reset: [0, 0],\n      // 21 isn't widely supported and 22 does the same thing\n      bold: [1, 22],\n      dim: [2, 22],\n      italic: [3, 23],\n      underline: [4, 24],\n      inverse: [7, 27],\n      hidden: [8, 28],\n      strikethrough: [9, 29]\n    },\n    color: {\n      black: [30, 39],\n      red: [31, 39],\n      green: [32, 39],\n      yellow: [33, 39],\n      blue: [34, 39],\n      magenta: [35, 39],\n      cyan: [36, 39],\n      white: [37, 39],\n      // Bright color\n      blackBright: [90, 39],\n      redBright: [91, 39],\n      greenBright: [92, 39],\n      yellowBright: [93, 39],\n      blueBright: [94, 39],\n      magentaBright: [95, 39],\n      cyanBright: [96, 39],\n      whiteBright: [97, 39]\n    },\n    bgColor: {\n      bgBlack: [40, 49],\n      bgRed: [41, 49],\n      bgGreen: [42, 49],\n      bgYellow: [43, 49],\n      bgBlue: [44, 49],\n      bgMagenta: [45, 49],\n      bgCyan: [46, 49],\n      bgWhite: [47, 49],\n      // Bright color\n      bgBlackBright: [100, 49],\n      bgRedBright: [101, 49],\n      bgGreenBright: [102, 49],\n      bgYellowBright: [103, 49],\n      bgBlueBright: [104, 49],\n      bgMagentaBright: [105, 49],\n      bgCyanBright: [106, 49],\n      bgWhiteBright: [107, 49]\n    }\n  }; // Alias bright black as gray (and grey)\n\n  styles.color.gray = styles.color.blackBright;\n  styles.bgColor.bgGray = styles.bgColor.bgBlackBright;\n  styles.color.grey = styles.color.blackBright;\n  styles.bgColor.bgGrey = styles.bgColor.bgBlackBright;\n\n  for (var _i2 = 0, _Object$entries2 = Object.entries(styles); _i2 < _Object$entries2.length; _i2++) {\n    var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),\n        groupName = _Object$entries2$_i[0],\n        group = _Object$entries2$_i[1];\n\n    for (var _i3 = 0, _Object$entries3 = Object.entries(group); _i3 < _Object$entries3.length; _i3++) {\n      var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i3], 2),\n          styleName = _Object$entries3$_i[0],\n          style = _Object$entries3$_i[1];\n\n      styles[styleName] = {\n        open: \"\\x1B[\".concat(style[0], \"m\"),\n        close: \"\\x1B[\".concat(style[1], \"m\")\n      };\n      group[styleName] = styles[styleName];\n      codes.set(style[0], style[1]);\n    }\n\n    Object.defineProperty(styles, groupName, {\n      value: group,\n      enumerable: false\n    });\n  }\n\n  Object.defineProperty(styles, 'codes', {\n    value: codes,\n    enumerable: false\n  });\n  styles.color.close = \"\\x1B[39m\";\n  styles.bgColor.close = \"\\x1B[49m\";\n  setLazyProperty(styles.color, 'ansi', function () {\n    return makeDynamicStyles(wrapAnsi16, 'ansi16', ansi2ansi, false);\n  });\n  setLazyProperty(styles.color, 'ansi256', function () {\n    return makeDynamicStyles(wrapAnsi256, 'ansi256', ansi2ansi, false);\n  });\n  setLazyProperty(styles.color, 'ansi16m', function () {\n    return makeDynamicStyles(wrapAnsi16m, 'rgb', rgb2rgb, false);\n  });\n  setLazyProperty(styles.bgColor, 'ansi', function () {\n    return makeDynamicStyles(wrapAnsi16, 'ansi16', ansi2ansi, true);\n  });\n  setLazyProperty(styles.bgColor, 'ansi256', function () {\n    return makeDynamicStyles(wrapAnsi256, 'ansi256', ansi2ansi, true);\n  });\n  setLazyProperty(styles.bgColor, 'ansi16m', function () {\n    return makeDynamicStyles(wrapAnsi16m, 'rgb', rgb2rgb, true);\n  });\n  return styles;\n} // Make the export immutable\n\n\nObject.defineProperty(module, 'exports', {\n  enumerable: true,\n  get: assembleStyles\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n/***/ }),\n\n/***/ \"./node_modules/ansi-styles/node_modules/color-convert/conversions.js\":\n/*!****************************************************************************!*\\\n  !*** ./node_modules/ansi-styles/node_modules/color-convert/conversions.js ***!\n  \\****************************************************************************/\n/*! no static exports found */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(n); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n/* MIT license */\n\n/* eslint-disable no-mixed-operators */\nvar cssKeywords = __webpack_require__(/*! color-name */ \"./node_modules/color-name/index.js\"); // NOTE: conversions should only return primitive values (i.e. arrays, or\n//       values that give correct `typeof` results).\n//       do not use box values types (i.e. Number(), String(), etc.)\n\n\nvar reverseKeywords = {};\n\nfor (var _i = 0, _Object$keys = Object.keys(cssKeywords); _i < _Object$keys.length; _i++) {\n  var key = _Object$keys[_i];\n  reverseKeywords[cssKeywords[key]] = key;\n}\n\nvar convert = {\n  rgb: {\n    channels: 3,\n    labels: 'rgb'\n  },\n  hsl: {\n    channels: 3,\n    labels: 'hsl'\n  },\n  hsv: {\n    channels: 3,\n    labels: 'hsv'\n  },\n  hwb: {\n    channels: 3,\n    labels: 'hwb'\n  },\n  cmyk: {\n    channels: 4,\n    labels: 'cmyk'\n  },\n  xyz: {\n    channels: 3,\n    labels: 'xyz'\n  },\n  lab: {\n    channels: 3,\n    labels: 'lab'\n  },\n  lch: {\n    channels: 3,\n    labels: 'lch'\n  },\n  hex: {\n    channels: 1,\n    labels: ['hex']\n  },\n  keyword: {\n    channels: 1,\n    labels: ['keyword']\n  },\n  ansi16: {\n    channels: 1,\n    labels: ['ansi16']\n  },\n  ansi256: {\n    channels: 1,\n    labels: ['ansi256']\n  },\n  hcg: {\n    channels: 3,\n    labels: ['h', 'c', 'g']\n  },\n  apple: {\n    channels: 3,\n    labels: ['r16', 'g16', 'b16']\n  },\n  gray: {\n    channels: 1,\n    labels: ['gray']\n  }\n};\nmodule.exports = convert; // Hide .channels and .labels properties\n\nfor (var _i2 = 0, _Object$keys2 = Object.keys(convert); _i2 < _Object$keys2.length; _i2++) {\n  var model = _Object$keys2[_i2];\n\n  if (!('channels' in convert[model])) {\n    throw new Error('missing channels property: ' + model);\n  }\n\n  if (!('labels' in convert[model])) {\n    throw new Error('missing channel labels property: ' + model);\n  }\n\n  if (convert[model].labels.length !== convert[model].channels) {\n    throw new Error('channel and label counts mismatch: ' + model);\n  }\n\n  var _convert$model = convert[model],\n      channels = _convert$model.channels,\n      labels = _convert$model.labels;\n  delete convert[model].channels;\n  delete convert[model].labels;\n  Object.defineProperty(convert[model], 'channels', {\n    value: channels\n  });\n  Object.defineProperty(convert[model], 'labels', {\n    value: labels\n  });\n}\n\nconvert.rgb.hsl = function (rgb) {\n  var r = rgb[0] / 255;\n  var g = rgb[1] / 255;\n  var b = rgb[2] / 255;\n  var min = Math.min(r, g, b);\n  var max = Math.max(r, g, b);\n  var delta = max - min;\n  var h;\n  var s;\n\n  if (max === min) {\n    h = 0;\n  } else if (r === max) {\n    h = (g - b) / delta;\n  } else if (g === max) {\n    h = 2 + (b - r) / delta;\n  } else if (b === max) {\n    h = 4 + (r - g) / delta;\n  }\n\n  h = Math.min(h * 60, 360);\n\n  if (h < 0) {\n    h += 360;\n  }\n\n  var l = (min + max) / 2;\n\n  if (max === min) {\n    s = 0;\n  } else if (l <= 0.5) {\n    s = delta / (max + min);\n  } else {\n    s = delta / (2 - max - min);\n  }\n\n  return [h, s * 100, l * 100];\n};\n\nconvert.rgb.hsv = function (rgb) {\n  var rdif;\n  var gdif;\n  var bdif;\n  var h;\n  var s;\n  var r = rgb[0] / 255;\n  var g = rgb[1] / 255;\n  var b = rgb[2] / 255;\n  var v = Math.max(r, g, b);\n  var diff = v - Math.min(r, g, b);\n\n  var diffc = function diffc(c) {\n    return (v - c) / 6 / diff + 1 / 2;\n  };\n\n  if (diff === 0) {\n    h = 0;\n    s = 0;\n  } else {\n    s = diff / v;\n    rdif = diffc(r);\n    gdif = diffc(g);\n    bdif = diffc(b);\n\n    if (r === v) {\n      h = bdif - gdif;\n    } else if (g === v) {\n      h = 1 / 3 + rdif - bdif;\n    } else if (b === v) {\n      h = 2 / 3 + gdif - rdif;\n    }\n\n    if (h < 0) {\n      h += 1;\n    } else if (h > 1) {\n      h -= 1;\n    }\n  }\n\n  return [h * 360, s * 100, v * 100];\n};\n\nconvert.rgb.hwb = function (rgb) {\n  var r = rgb[0];\n  var g = rgb[1];\n  var b = rgb[2];\n  var h = convert.rgb.hsl(rgb)[0];\n  var w = 1 / 255 * Math.min(r, Math.min(g, b));\n  b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));\n  return [h, w * 100, b * 100];\n};\n\nconvert.rgb.cmyk = function (rgb) {\n  var r = rgb[0] / 255;\n  var g = rgb[1] / 255;\n  var b = rgb[2] / 255;\n  var k = Math.min(1 - r, 1 - g, 1 - b);\n  var c = (1 - r - k) / (1 - k) || 0;\n  var m = (1 - g - k) / (1 - k) || 0;\n  var y = (1 - b - k) / (1 - k) || 0;\n  return [c * 100, m * 100, y * 100, k * 100];\n};\n\nfunction comparativeDistance(x, y) {\n  /*\n  \tSee https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance\n  */\n  return Math.pow(x[0] - y[0], 2) + Math.pow(x[1] - y[1], 2) + Math.pow(x[2] - y[2], 2);\n}\n\nconvert.rgb.keyword = function (rgb) {\n  var reversed = reverseKeywords[rgb];\n\n  if (reversed) {\n    return reversed;\n  }\n\n  var currentClosestDistance = Infinity;\n  var currentClosestKeyword;\n\n  for (var _i3 = 0, _Object$keys3 = Object.keys(cssKeywords); _i3 < _Object$keys3.length; _i3++) {\n    var keyword = _Object$keys3[_i3];\n    var value = cssKeywords[keyword]; // Compute comparative distance\n\n    var distance = comparativeDistance(rgb, value); // Check if its less, if so set as closest\n\n    if (distance < currentClosestDistance) {\n      currentClosestDistance = distance;\n      currentClosestKeyword = keyword;\n    }\n  }\n\n  return currentClosestKeyword;\n};\n\nconvert.keyword.rgb = function (keyword) {\n  return cssKeywords[keyword];\n};\n\nconvert.rgb.xyz = function (rgb) {\n  var r = rgb[0] / 255;\n  var g = rgb[1] / 255;\n  var b = rgb[2] / 255; // Assume sRGB\n\n  r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;\n  g = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;\n  b = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;\n  var x = r * 0.4124 + g * 0.3576 + b * 0.1805;\n  var y = r * 0.2126 + g * 0.7152 + b * 0.0722;\n  var z = r * 0.0193 + g * 0.1192 + b * 0.9505;\n  return [x * 100, y * 100, z * 100];\n};\n\nconvert.rgb.lab = function (rgb) {\n  var xyz = convert.rgb.xyz(rgb);\n  var x = xyz[0];\n  var y = xyz[1];\n  var z = xyz[2];\n  x /= 95.047;\n  y /= 100;\n  z /= 108.883;\n  x = x > 0.008856 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;\n  y = y > 0.008856 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;\n  z = z > 0.008856 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;\n  var l = 116 * y - 16;\n  var a = 500 * (x - y);\n  var b = 200 * (y - z);\n  return [l, a, b];\n};\n\nconvert.hsl.rgb = function (hsl) {\n  var h = hsl[0] / 360;\n  var s = hsl[1] / 100;\n  var l = hsl[2] / 100;\n  var t2;\n  var t3;\n  var val;\n\n  if (s === 0) {\n    val = l * 255;\n    return [val, val, val];\n  }\n\n  if (l < 0.5) {\n    t2 = l * (1 + s);\n  } else {\n    t2 = l + s - l * s;\n  }\n\n  var t1 = 2 * l - t2;\n  var rgb = [0, 0, 0];\n\n  for (var i = 0; i < 3; i++) {\n    t3 = h + 1 / 3 * -(i - 1);\n\n    if (t3 < 0) {\n      t3++;\n    }\n\n    if (t3 > 1) {\n      t3--;\n    }\n\n    if (6 * t3 < 1) {\n      val = t1 + (t2 - t1) * 6 * t3;\n    } else if (2 * t3 < 1) {\n      val = t2;\n    } else if (3 * t3 < 2) {\n      val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;\n    } else {\n      val = t1;\n    }\n\n    rgb[i] = val * 255;\n  }\n\n  return rgb;\n};\n\nconvert.hsl.hsv = function (hsl) {\n  var h = hsl[0];\n  var s = hsl[1] / 100;\n  var l = hsl[2] / 100;\n  var smin = s;\n  var lmin = Math.max(l, 0.01);\n  l *= 2;\n  s *= l <= 1 ? l : 2 - l;\n  smin *= lmin <= 1 ? lmin : 2 - lmin;\n  var v = (l + s) / 2;\n  var sv = l === 0 ? 2 * smin / (lmin + smin) : 2 * s / (l + s);\n  return [h, sv * 100, v * 100];\n};\n\nconvert.hsv.rgb = function (hsv) {\n  var h = hsv[0] / 60;\n  var s = hsv[1] / 100;\n  var v = hsv[2] / 100;\n  var hi = Math.floor(h) % 6;\n  var f = h - Math.floor(h);\n  var p = 255 * v * (1 - s);\n  var q = 255 * v * (1 - s * f);\n  var t = 255 * v * (1 - s * (1 - f));\n  v *= 255;\n\n  switch (hi) {\n    case 0:\n      return [v, t, p];\n\n    case 1:\n      return [q, v, p];\n\n    case 2:\n      return [p, v, t];\n\n    case 3:\n      return [p, q, v];\n\n    case 4:\n      return [t, p, v];\n\n    case 5:\n      return [v, p, q];\n  }\n};\n\nconvert.hsv.hsl = function (hsv) {\n  var h = hsv[0];\n  var s = hsv[1] / 100;\n  var v = hsv[2] / 100;\n  var vmin = Math.max(v, 0.01);\n  var sl;\n  var l;\n  l = (2 - s) * v;\n  var lmin = (2 - s) * vmin;\n  sl = s * vmin;\n  sl /= lmin <= 1 ? lmin : 2 - lmin;\n  sl = sl || 0;\n  l /= 2;\n  return [h, sl * 100, l * 100];\n}; // http://dev.w3.org/csswg/css-color/#hwb-to-rgb\n\n\nconvert.hwb.rgb = function (hwb) {\n  var h = hwb[0] / 360;\n  var wh = hwb[1] / 100;\n  var bl = hwb[2] / 100;\n  var ratio = wh + bl;\n  var f; // Wh + bl cant be > 1\n\n  if (ratio > 1) {\n    wh /= ratio;\n    bl /= ratio;\n  }\n\n  var i = Math.floor(6 * h);\n  var v = 1 - bl;\n  f = 6 * h - i;\n\n  if ((i & 0x01) !== 0) {\n    f = 1 - f;\n  }\n\n  var n = wh + f * (v - wh); // Linear interpolation\n\n  var r;\n  var g;\n  var b;\n  /* eslint-disable max-statements-per-line,no-multi-spaces */\n\n  switch (i) {\n    default:\n    case 6:\n    case 0:\n      r = v;\n      g = n;\n      b = wh;\n      break;\n\n    case 1:\n      r = n;\n      g = v;\n      b = wh;\n      break;\n\n    case 2:\n      r = wh;\n      g = v;\n      b = n;\n      break;\n\n    case 3:\n      r = wh;\n      g = n;\n      b = v;\n      break;\n\n    case 4:\n      r = n;\n      g = wh;\n      b = v;\n      break;\n\n    case 5:\n      r = v;\n      g = wh;\n      b = n;\n      break;\n  }\n  /* eslint-enable max-statements-per-line,no-multi-spaces */\n\n\n  return [r * 255, g * 255, b * 255];\n};\n\nconvert.cmyk.rgb = function (cmyk) {\n  var c = cmyk[0] / 100;\n  var m = cmyk[1] / 100;\n  var y = cmyk[2] / 100;\n  var k = cmyk[3] / 100;\n  var r = 1 - Math.min(1, c * (1 - k) + k);\n  var g = 1 - Math.min(1, m * (1 - k) + k);\n  var b = 1 - Math.min(1, y * (1 - k) + k);\n  return [r * 255, g * 255, b * 255];\n};\n\nconvert.xyz.rgb = function (xyz) {\n  var x = xyz[0] / 100;\n  var y = xyz[1] / 100;\n  var z = xyz[2] / 100;\n  var r;\n  var g;\n  var b;\n  r = x * 3.2406 + y * -1.5372 + z * -0.4986;\n  g = x * -0.9689 + y * 1.8758 + z * 0.0415;\n  b = x * 0.0557 + y * -0.2040 + z * 1.0570; // Assume sRGB\n\n  r = r > 0.0031308 ? 1.055 * Math.pow(r, 1.0 / 2.4) - 0.055 : r * 12.92;\n  g = g > 0.0031308 ? 1.055 * Math.pow(g, 1.0 / 2.4) - 0.055 : g * 12.92;\n  b = b > 0.0031308 ? 1.055 * Math.pow(b, 1.0 / 2.4) - 0.055 : b * 12.92;\n  r = Math.min(Math.max(0, r), 1);\n  g = Math.min(Math.max(0, g), 1);\n  b = Math.min(Math.max(0, b), 1);\n  return [r * 255, g * 255, b * 255];\n};\n\nconvert.xyz.lab = function (xyz) {\n  var x = xyz[0];\n  var y = xyz[1];\n  var z = xyz[2];\n  x /= 95.047;\n  y /= 100;\n  z /= 108.883;\n  x = x > 0.008856 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;\n  y = y > 0.008856 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;\n  z = z > 0.008856 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;\n  var l = 116 * y - 16;\n  var a = 500 * (x - y);\n  var b = 200 * (y - z);\n  return [l, a, b];\n};\n\nconvert.lab.xyz = function (lab) {\n  var l = lab[0];\n  var a = lab[1];\n  var b = lab[2];\n  var x;\n  var y;\n  var z;\n  y = (l + 16) / 116;\n  x = a / 500 + y;\n  z = y - b / 200;\n  var y2 = Math.pow(y, 3);\n  var x2 = Math.pow(x, 3);\n  var z2 = Math.pow(z, 3);\n  y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;\n  x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;\n  z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;\n  x *= 95.047;\n  y *= 100;\n  z *= 108.883;\n  return [x, y, z];\n};\n\nconvert.lab.lch = function (lab) {\n  var l = lab[0];\n  var a = lab[1];\n  var b = lab[2];\n  var h;\n  var hr = Math.atan2(b, a);\n  h = hr * 360 / 2 / Math.PI;\n\n  if (h < 0) {\n    h += 360;\n  }\n\n  var c = Math.sqrt(a * a + b * b);\n  return [l, c, h];\n};\n\nconvert.lch.lab = function (lch) {\n  var l = lch[0];\n  var c = lch[1];\n  var h = lch[2];\n  var hr = h / 360 * 2 * Math.PI;\n  var a = c * Math.cos(hr);\n  var b = c * Math.sin(hr);\n  return [l, a, b];\n};\n\nconvert.rgb.ansi16 = function (args) {\n  var saturation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n\n  var _args = _slicedToArray(args, 3),\n      r = _args[0],\n      g = _args[1],\n      b = _args[2];\n\n  var value = saturation === null ? convert.rgb.hsv(args)[2] : saturation; // Hsv -> ansi16 optimization\n\n  value = Math.round(value / 50);\n\n  if (value === 0) {\n    return 30;\n  }\n\n  var ansi = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(r / 255));\n\n  if (value === 2) {\n    ansi += 60;\n  }\n\n  return ansi;\n};\n\nconvert.hsv.ansi16 = function (args) {\n  // Optimization here; we already know the value and don't need to get\n  // it converted for us.\n  return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);\n};\n\nconvert.rgb.ansi256 = function (args) {\n  var r = args[0];\n  var g = args[1];\n  var b = args[2]; // We use the extended greyscale palette here, with the exception of\n  // black and white. normal palette only has 4 greyscale shades.\n\n  if (r === g && g === b) {\n    if (r < 8) {\n      return 16;\n    }\n\n    if (r > 248) {\n      return 231;\n    }\n\n    return Math.round((r - 8) / 247 * 24) + 232;\n  }\n\n  var ansi = 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(g / 255 * 5) + Math.round(b / 255 * 5);\n  return ansi;\n};\n\nconvert.ansi16.rgb = function (args) {\n  var color = args % 10; // Handle greyscale\n\n  if (color === 0 || color === 7) {\n    if (args > 50) {\n      color += 3.5;\n    }\n\n    color = color / 10.5 * 255;\n    return [color, color, color];\n  }\n\n  var mult = (~~(args > 50) + 1) * 0.5;\n  var r = (color & 1) * mult * 255;\n  var g = (color >> 1 & 1) * mult * 255;\n  var b = (color >> 2 & 1) * mult * 255;\n  return [r, g, b];\n};\n\nconvert.ansi256.rgb = function (args) {\n  // Handle greyscale\n  if (args >= 232) {\n    var c = (args - 232) * 10 + 8;\n    return [c, c, c];\n  }\n\n  args -= 16;\n  var rem;\n  var r = Math.floor(args / 36) / 5 * 255;\n  var g = Math.floor((rem = args % 36) / 6) / 5 * 255;\n  var b = rem % 6 / 5 * 255;\n  return [r, g, b];\n};\n\nconvert.rgb.hex = function (args) {\n  var integer = ((Math.round(args[0]) & 0xFF) << 16) + ((Math.round(args[1]) & 0xFF) << 8) + (Math.round(args[2]) & 0xFF);\n  var string = integer.toString(16).toUpperCase();\n  return '000000'.substring(string.length) + string;\n};\n\nconvert.hex.rgb = function (args) {\n  var match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);\n\n  if (!match) {\n    return [0, 0, 0];\n  }\n\n  var colorString = match[0];\n\n  if (match[0].length === 3) {\n    colorString = colorString.split('').map(function (char) {\n      return char + char;\n    }).join('');\n  }\n\n  var integer = parseInt(colorString, 16);\n  var r = integer >> 16 & 0xFF;\n  var g = integer >> 8 & 0xFF;\n  var b = integer & 0xFF;\n  return [r, g, b];\n};\n\nconvert.rgb.hcg = function (rgb) {\n  var r = rgb[0] / 255;\n  var g = rgb[1] / 255;\n  var b = rgb[2] / 255;\n  var max = Math.max(Math.max(r, g), b);\n  var min = Math.min(Math.min(r, g), b);\n  var chroma = max - min;\n  var grayscale;\n  var hue;\n\n  if (chroma < 1) {\n    grayscale = min / (1 - chroma);\n  } else {\n    grayscale = 0;\n  }\n\n  if (chroma <= 0) {\n    hue = 0;\n  } else if (max === r) {\n    hue = (g - b) / chroma % 6;\n  } else if (max === g) {\n    hue = 2 + (b - r) / chroma;\n  } else {\n    hue = 4 + (r - g) / chroma;\n  }\n\n  hue /= 6;\n  hue %= 1;\n  return [hue * 360, chroma * 100, grayscale * 100];\n};\n\nconvert.hsl.hcg = function (hsl) {\n  var s = hsl[1] / 100;\n  var l = hsl[2] / 100;\n  var c = l < 0.5 ? 2.0 * s * l : 2.0 * s * (1.0 - l);\n  var f = 0;\n\n  if (c < 1.0) {\n    f = (l - 0.5 * c) / (1.0 - c);\n  }\n\n  return [hsl[0], c * 100, f * 100];\n};\n\nconvert.hsv.hcg = function (hsv) {\n  var s = hsv[1] / 100;\n  var v = hsv[2] / 100;\n  var c = s * v;\n  var f = 0;\n\n  if (c < 1.0) {\n    f = (v - c) / (1 - c);\n  }\n\n  return [hsv[0], c * 100, f * 100];\n};\n\nconvert.hcg.rgb = function (hcg) {\n  var h = hcg[0] / 360;\n  var c = hcg[1] / 100;\n  var g = hcg[2] / 100;\n\n  if (c === 0.0) {\n    return [g * 255, g * 255, g * 255];\n  }\n\n  var pure = [0, 0, 0];\n  var hi = h % 1 * 6;\n  var v = hi % 1;\n  var w = 1 - v;\n  var mg = 0;\n  /* eslint-disable max-statements-per-line */\n\n  switch (Math.floor(hi)) {\n    case 0:\n      pure[0] = 1;\n      pure[1] = v;\n      pure[2] = 0;\n      break;\n\n    case 1:\n      pure[0] = w;\n      pure[1] = 1;\n      pure[2] = 0;\n      break;\n\n    case 2:\n      pure[0] = 0;\n      pure[1] = 1;\n      pure[2] = v;\n      break;\n\n    case 3:\n      pure[0] = 0;\n      pure[1] = w;\n      pure[2] = 1;\n      break;\n\n    case 4:\n      pure[0] = v;\n      pure[1] = 0;\n      pure[2] = 1;\n      break;\n\n    default:\n      pure[0] = 1;\n      pure[1] = 0;\n      pure[2] = w;\n  }\n  /* eslint-enable max-statements-per-line */\n\n\n  mg = (1.0 - c) * g;\n  return [(c * pure[0] + mg) * 255, (c * pure[1] + mg) * 255, (c * pure[2] + mg) * 255];\n};\n\nconvert.hcg.hsv = function (hcg) {\n  var c = hcg[1] / 100;\n  var g = hcg[2] / 100;\n  var v = c + g * (1.0 - c);\n  var f = 0;\n\n  if (v > 0.0) {\n    f = c / v;\n  }\n\n  return [hcg[0], f * 100, v * 100];\n};\n\nconvert.hcg.hsl = function (hcg) {\n  var c = hcg[1] / 100;\n  var g = hcg[2] / 100;\n  var l = g * (1.0 - c) + 0.5 * c;\n  var s = 0;\n\n  if (l > 0.0 && l < 0.5) {\n    s = c / (2 * l);\n  } else if (l >= 0.5 && l < 1.0) {\n    s = c / (2 * (1 - l));\n  }\n\n  return [hcg[0], s * 100, l * 100];\n};\n\nconvert.hcg.hwb = function (hcg) {\n  var c = hcg[1] / 100;\n  var g = hcg[2] / 100;\n  var v = c + g * (1.0 - c);\n  return [hcg[0], (v - c) * 100, (1 - v) * 100];\n};\n\nconvert.hwb.hcg = function (hwb) {\n  var w = hwb[1] / 100;\n  var b = hwb[2] / 100;\n  var v = 1 - b;\n  var c = v - w;\n  var g = 0;\n\n  if (c < 1) {\n    g = (v - c) / (1 - c);\n  }\n\n  return [hwb[0], c * 100, g * 100];\n};\n\nconvert.apple.rgb = function (apple) {\n  return [apple[0] / 65535 * 255, apple[1] / 65535 * 255, apple[2] / 65535 * 255];\n};\n\nconvert.rgb.apple = function (rgb) {\n  return [rgb[0] / 255 * 65535, rgb[1] / 255 * 65535, rgb[2] / 255 * 65535];\n};\n\nconvert.gray.rgb = function (args) {\n  return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];\n};\n\nconvert.gray.hsl = function (args) {\n  return [0, 0, args[0]];\n};\n\nconvert.gray.hsv = convert.gray.hsl;\n\nconvert.gray.hwb = function (gray) {\n  return [0, 100, gray[0]];\n};\n\nconvert.gray.cmyk = function (gray) {\n  return [0, 0, 0, gray[0]];\n};\n\nconvert.gray.lab = function (gray) {\n  return [gray[0], 0, 0];\n};\n\nconvert.gray.hex = function (gray) {\n  var val = Math.round(gray[0] / 100 * 255) & 0xFF;\n  var integer = (val << 16) + (val << 8) + val;\n  var string = integer.toString(16).toUpperCase();\n  return '000000'.substring(string.length) + string;\n};\n\nconvert.rgb.gray = function (rgb) {\n  var val = (rgb[0] + rgb[1] + rgb[2]) / 3;\n  return [val / 255 * 100];\n};\n\n/***/ }),\n\n/***/ \"./node_modules/ansi-styles/node_modules/color-convert/index.js\":\n/*!**********************************************************************!*\\\n  !*** ./node_modules/ansi-styles/node_modules/color-convert/index.js ***!\n  \\**********************************************************************/\n/*! no static exports found */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar conversions = __webpack_require__(/*! ./conversions */ \"./node_modules/ansi-styles/node_modules/color-convert/conversions.js\");\n\nvar route = __webpack_require__(/*! ./route */ \"./node_modules/ansi-styles/node_modules/color-convert/route.js\");\n\nvar convert = {};\nvar models = Object.keys(conversions);\n\nfunction wrapRaw(fn) {\n  var wrappedFn = function wrappedFn() {\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    var arg0 = args[0];\n\n    if (arg0 === undefined || arg0 === null) {\n      return arg0;\n    }\n\n    if (arg0.length > 1) {\n      args = arg0;\n    }\n\n    return fn(args);\n  }; // Preserve .conversion property if there is one\n\n\n  if ('conversion' in fn) {\n    wrappedFn.conversion = fn.conversion;\n  }\n\n  return wrappedFn;\n}\n\nfunction wrapRounded(fn) {\n  var wrappedFn = function wrappedFn() {\n    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n      args[_key2] = arguments[_key2];\n    }\n\n    var arg0 = args[0];\n\n    if (arg0 === undefined || arg0 === null) {\n      return arg0;\n    }\n\n    if (arg0.length > 1) {\n      args = arg0;\n    }\n\n    var result = fn(args); // We're assuming the result is an array here.\n    // see notice in conversions.js; don't use box types\n    // in conversion functions.\n\n    if (_typeof(result) === 'object') {\n      for (var len = result.length, i = 0; i < len; i++) {\n        result[i] = Math.round(result[i]);\n      }\n    }\n\n    return result;\n  }; // Preserve .conversion property if there is one\n\n\n  if ('conversion' in fn) {\n    wrappedFn.conversion = fn.conversion;\n  }\n\n  return wrappedFn;\n}\n\nmodels.forEach(function (fromModel) {\n  convert[fromModel] = {};\n  Object.defineProperty(convert[fromModel], 'channels', {\n    value: conversions[fromModel].channels\n  });\n  Object.defineProperty(convert[fromModel], 'labels', {\n    value: conversions[fromModel].labels\n  });\n  var routes = route(fromModel);\n  var routeModels = Object.keys(routes);\n  routeModels.forEach(function (toModel) {\n    var fn = routes[toModel];\n    convert[fromModel][toModel] = wrapRounded(fn);\n    convert[fromModel][toModel].raw = wrapRaw(fn);\n  });\n});\nmodule.exports = convert;\n\n/***/ }),\n\n/***/ \"./node_modules/ansi-styles/node_modules/color-convert/route.js\":\n/*!**********************************************************************!*\\\n  !*** ./node_modules/ansi-styles/node_modules/color-convert/route.js ***!\n  \\**********************************************************************/\n/*! no static exports found */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar conversions = __webpack_require__(/*! ./conversions */ \"./node_modules/ansi-styles/node_modules/color-convert/conversions.js\");\n/*\n\tThis function routes a model to all other models.\n\n\tall functions that are routed have a property `.conversion` attached\n\tto the returned synthetic function. This property is an array\n\tof strings, each with the steps in between the 'from' and 'to'\n\tcolor models (inclusive).\n\n\tconversions that are not possible simply are not included.\n*/\n\n\nfunction buildGraph() {\n  var graph = {}; // https://jsperf.com/object-keys-vs-for-in-with-closure/3\n\n  var models = Object.keys(conversions);\n\n  for (var len = models.length, i = 0; i < len; i++) {\n    graph[models[i]] = {\n      // http://jsperf.com/1-vs-infinity\n      // micro-opt, but this is simple.\n      distance: -1,\n      parent: null\n    };\n  }\n\n  return graph;\n} // https://en.wikipedia.org/wiki/Breadth-first_search\n\n\nfunction deriveBFS(fromModel) {\n  var graph = buildGraph();\n  var queue = [fromModel]; // Unshift -> queue -> pop\n\n  graph[fromModel].distance = 0;\n\n  while (queue.length) {\n    var current = queue.pop();\n    var adjacents = Object.keys(conversions[current]);\n\n    for (var len = adjacents.length, i = 0; i < len; i++) {\n      var adjacent = adjacents[i];\n      var node = graph[adjacent];\n\n      if (node.distance === -1) {\n        node.distance = graph[current].distance + 1;\n        node.parent = current;\n        queue.unshift(adjacent);\n      }\n    }\n  }\n\n  return graph;\n}\n\nfunction link(from, to) {\n  return function (args) {\n    return to(from(args));\n  };\n}\n\nfunction wrapConversion(toModel, graph) {\n  var path = [graph[toModel].parent, toModel];\n  var fn = conversions[graph[toModel].parent][toModel];\n  var cur = graph[toModel].parent;\n\n  while (graph[cur].parent) {\n    path.unshift(graph[cur].parent);\n    fn = link(conversions[graph[cur].parent][cur], fn);\n    cur = graph[cur].parent;\n  }\n\n  fn.conversion = path;\n  return fn;\n}\n\nmodule.exports = function (fromModel) {\n  var graph = deriveBFS(fromModel);\n  var conversion = {};\n  var models = Object.keys(graph);\n\n  for (var len = models.length, i = 0; i < len; i++) {\n    var toModel = models[i];\n    var node = graph[toModel];\n\n    if (node.parent === null) {\n      // No possible conversion, or this node is the source model.\n      continue;\n    }\n\n    conversion[toModel] = wrapConversion(toModel, graph);\n  }\n\n  return conversion;\n};\n\n/***/ }),\n\n/***/ \"./node_modules/color-name/index.js\":\n/*!******************************************!*\\\n  !*** ./node_modules/color-name/index.js ***!\n  \\******************************************/\n/*! no static exports found */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nmodule.exports = {\n  \"aliceblue\": [240, 248, 255],\n  \"antiquewhite\": [250, 235, 215],\n  \"aqua\": [0, 255, 255],\n  \"aquamarine\": [127, 255, 212],\n  \"azure\": [240, 255, 255],\n  \"beige\": [245, 245, 220],\n  \"bisque\": [255, 228, 196],\n  \"black\": [0, 0, 0],\n  \"blanchedalmond\": [255, 235, 205],\n  \"blue\": [0, 0, 255],\n  \"blueviolet\": [138, 43, 226],\n  \"brown\": [165, 42, 42],\n  \"burlywood\": [222, 184, 135],\n  \"cadetblue\": [95, 158, 160],\n  \"chartreuse\": [127, 255, 0],\n  \"chocolate\": [210, 105, 30],\n  \"coral\": [255, 127, 80],\n  \"cornflowerblue\": [100, 149, 237],\n  \"cornsilk\": [255, 248, 220],\n  \"crimson\": [220, 20, 60],\n  \"cyan\": [0, 255, 255],\n  \"darkblue\": [0, 0, 139],\n  \"darkcyan\": [0, 139, 139],\n  \"darkgoldenrod\": [184, 134, 11],\n  \"darkgray\": [169, 169, 169],\n  \"darkgreen\": [0, 100, 0],\n  \"darkgrey\": [169, 169, 169],\n  \"darkkhaki\": [189, 183, 107],\n  \"darkmagenta\": [139, 0, 139],\n  \"darkolivegreen\": [85, 107, 47],\n  \"darkorange\": [255, 140, 0],\n  \"darkorchid\": [153, 50, 204],\n  \"darkred\": [139, 0, 0],\n  \"darksalmon\": [233, 150, 122],\n  \"darkseagreen\": [143, 188, 143],\n  \"darkslateblue\": [72, 61, 139],\n  \"darkslategray\": [47, 79, 79],\n  \"darkslategrey\": [47, 79, 79],\n  \"darkturquoise\": [0, 206, 209],\n  \"darkviolet\": [148, 0, 211],\n  \"deeppink\": [255, 20, 147],\n  \"deepskyblue\": [0, 191, 255],\n  \"dimgray\": [105, 105, 105],\n  \"dimgrey\": [105, 105, 105],\n  \"dodgerblue\": [30, 144, 255],\n  \"firebrick\": [178, 34, 34],\n  \"floralwhite\": [255, 250, 240],\n  \"forestgreen\": [34, 139, 34],\n  \"fuchsia\": [255, 0, 255],\n  \"gainsboro\": [220, 220, 220],\n  \"ghostwhite\": [248, 248, 255],\n  \"gold\": [255, 215, 0],\n  \"goldenrod\": [218, 165, 32],\n  \"gray\": [128, 128, 128],\n  \"green\": [0, 128, 0],\n  \"greenyellow\": [173, 255, 47],\n  \"grey\": [128, 128, 128],\n  \"honeydew\": [240, 255, 240],\n  \"hotpink\": [255, 105, 180],\n  \"indianred\": [205, 92, 92],\n  \"indigo\": [75, 0, 130],\n  \"ivory\": [255, 255, 240],\n  \"khaki\": [240, 230, 140],\n  \"lavender\": [230, 230, 250],\n  \"lavenderblush\": [255, 240, 245],\n  \"lawngreen\": [124, 252, 0],\n  \"lemonchiffon\": [255, 250, 205],\n  \"lightblue\": [173, 216, 230],\n  \"lightcoral\": [240, 128, 128],\n  \"lightcyan\": [224, 255, 255],\n  \"lightgoldenrodyellow\": [250, 250, 210],\n  \"lightgray\": [211, 211, 211],\n  \"lightgreen\": [144, 238, 144],\n  \"lightgrey\": [211, 211, 211],\n  \"lightpink\": [255, 182, 193],\n  \"lightsalmon\": [255, 160, 122],\n  \"lightseagreen\": [32, 178, 170],\n  \"lightskyblue\": [135, 206, 250],\n  \"lightslategray\": [119, 136, 153],\n  \"lightslategrey\": [119, 136, 153],\n  \"lightsteelblue\": [176, 196, 222],\n  \"lightyellow\": [255, 255, 224],\n  \"lime\": [0, 255, 0],\n  \"limegreen\": [50, 205, 50],\n  \"linen\": [250, 240, 230],\n  \"magenta\": [255, 0, 255],\n  \"maroon\": [128, 0, 0],\n  \"mediumaquamarine\": [102, 205, 170],\n  \"mediumblue\": [0, 0, 205],\n  \"mediumorchid\": [186, 85, 211],\n  \"mediumpurple\": [147, 112, 219],\n  \"mediumseagreen\": [60, 179, 113],\n  \"mediumslateblue\": [123, 104, 238],\n  \"mediumspringgreen\": [0, 250, 154],\n  \"mediumturquoise\": [72, 209, 204],\n  \"mediumvioletred\": [199, 21, 133],\n  \"midnightblue\": [25, 25, 112],\n  \"mintcream\": [245, 255, 250],\n  \"mistyrose\": [255, 228, 225],\n  \"moccasin\": [255, 228, 181],\n  \"navajowhite\": [255, 222, 173],\n  \"navy\": [0, 0, 128],\n  \"oldlace\": [253, 245, 230],\n  \"olive\": [128, 128, 0],\n  \"olivedrab\": [107, 142, 35],\n  \"orange\": [255, 165, 0],\n  \"orangered\": [255, 69, 0],\n  \"orchid\": [218, 112, 214],\n  \"palegoldenrod\": [238, 232, 170],\n  \"palegreen\": [152, 251, 152],\n  \"paleturquoise\": [175, 238, 238],\n  \"palevioletred\": [219, 112, 147],\n  \"papayawhip\": [255, 239, 213],\n  \"peachpuff\": [255, 218, 185],\n  \"peru\": [205, 133, 63],\n  \"pink\": [255, 192, 203],\n  \"plum\": [221, 160, 221],\n  \"powderblue\": [176, 224, 230],\n  \"purple\": [128, 0, 128],\n  \"rebeccapurple\": [102, 51, 153],\n  \"red\": [255, 0, 0],\n  \"rosybrown\": [188, 143, 143],\n  \"royalblue\": [65, 105, 225],\n  \"saddlebrown\": [139, 69, 19],\n  \"salmon\": [250, 128, 114],\n  \"sandybrown\": [244, 164, 96],\n  \"seagreen\": [46, 139, 87],\n  \"seashell\": [255, 245, 238],\n  \"sienna\": [160, 82, 45],\n  \"silver\": [192, 192, 192],\n  \"skyblue\": [135, 206, 235],\n  \"slateblue\": [106, 90, 205],\n  \"slategray\": [112, 128, 144],\n  \"slategrey\": [112, 128, 144],\n  \"snow\": [255, 250, 250],\n  \"springgreen\": [0, 255, 127],\n  \"steelblue\": [70, 130, 180],\n  \"tan\": [210, 180, 140],\n  \"teal\": [0, 128, 128],\n  \"thistle\": [216, 191, 216],\n  \"tomato\": [255, 99, 71],\n  \"turquoise\": [64, 224, 208],\n  \"violet\": [238, 130, 238],\n  \"wheat\": [245, 222, 179],\n  \"white\": [255, 255, 255],\n  \"whitesmoke\": [245, 245, 245],\n  \"yellow\": [255, 255, 0],\n  \"yellowgreen\": [154, 205, 50]\n};\n\n/***/ }),\n\n/***/ \"./node_modules/react-is/cjs/react-is.development.js\":\n/*!***********************************************************!*\\\n  !*** ./node_modules/react-is/cjs/react-is.development.js ***!\n  \\***********************************************************/\n/*! no static exports found */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n/** @license React v16.13.1\n * react-is.development.js\n *\n * Copyright (c) Facebook, Inc. and its affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nif (true) {\n  (function () {\n    'use strict'; // The Symbol used to tag the ReactElement-like types. If there is no native Symbol\n    // nor polyfill, then a plain number is used for performance.\n\n    var hasSymbol = typeof Symbol === 'function' && Symbol.for;\n    var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;\n    var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;\n    var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;\n    var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;\n    var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;\n    var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;\n    var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary\n    // (unstable) APIs that have been removed. Can we remove the symbols?\n\n    var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;\n    var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;\n    var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;\n    var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;\n    var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;\n    var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;\n    var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;\n    var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;\n    var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;\n    var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;\n    var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;\n\n    function isValidElementType(type) {\n      return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.\n      type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || _typeof(type) === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);\n    }\n\n    function typeOf(object) {\n      if (_typeof(object) === 'object' && object !== null) {\n        var $$typeof = object.$$typeof;\n\n        switch ($$typeof) {\n          case REACT_ELEMENT_TYPE:\n            var type = object.type;\n\n            switch (type) {\n              case REACT_ASYNC_MODE_TYPE:\n              case REACT_CONCURRENT_MODE_TYPE:\n              case REACT_FRAGMENT_TYPE:\n              case REACT_PROFILER_TYPE:\n              case REACT_STRICT_MODE_TYPE:\n              case REACT_SUSPENSE_TYPE:\n                return type;\n\n              default:\n                var $$typeofType = type && type.$$typeof;\n\n                switch ($$typeofType) {\n                  case REACT_CONTEXT_TYPE:\n                  case REACT_FORWARD_REF_TYPE:\n                  case REACT_LAZY_TYPE:\n                  case REACT_MEMO_TYPE:\n                  case REACT_PROVIDER_TYPE:\n                    return $$typeofType;\n\n                  default:\n                    return $$typeof;\n                }\n\n            }\n\n          case REACT_PORTAL_TYPE:\n            return $$typeof;\n        }\n      }\n\n      return undefined;\n    } // AsyncMode is deprecated along with isAsyncMode\n\n\n    var AsyncMode = REACT_ASYNC_MODE_TYPE;\n    var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;\n    var ContextConsumer = REACT_CONTEXT_TYPE;\n    var ContextProvider = REACT_PROVIDER_TYPE;\n    var Element = REACT_ELEMENT_TYPE;\n    var ForwardRef = REACT_FORWARD_REF_TYPE;\n    var Fragment = REACT_FRAGMENT_TYPE;\n    var Lazy = REACT_LAZY_TYPE;\n    var Memo = REACT_MEMO_TYPE;\n    var Portal = REACT_PORTAL_TYPE;\n    var Profiler = REACT_PROFILER_TYPE;\n    var StrictMode = REACT_STRICT_MODE_TYPE;\n    var Suspense = REACT_SUSPENSE_TYPE;\n    var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated\n\n    function isAsyncMode(object) {\n      {\n        if (!hasWarnedAboutDeprecatedIsAsyncMode) {\n          hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint\n\n          console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');\n        }\n      }\n      return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;\n    }\n\n    function isConcurrentMode(object) {\n      return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;\n    }\n\n    function isContextConsumer(object) {\n      return typeOf(object) === REACT_CONTEXT_TYPE;\n    }\n\n    function isContextProvider(object) {\n      return typeOf(object) === REACT_PROVIDER_TYPE;\n    }\n\n    function isElement(object) {\n      return _typeof(object) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;\n    }\n\n    function isForwardRef(object) {\n      return typeOf(object) === REACT_FORWARD_REF_TYPE;\n    }\n\n    function isFragment(object) {\n      return typeOf(object) === REACT_FRAGMENT_TYPE;\n    }\n\n    function isLazy(object) {\n      return typeOf(object) === REACT_LAZY_TYPE;\n    }\n\n    function isMemo(object) {\n      return typeOf(object) === REACT_MEMO_TYPE;\n    }\n\n    function isPortal(object) {\n      return typeOf(object) === REACT_PORTAL_TYPE;\n    }\n\n    function isProfiler(object) {\n      return typeOf(object) === REACT_PROFILER_TYPE;\n    }\n\n    function isStrictMode(object) {\n      return typeOf(object) === REACT_STRICT_MODE_TYPE;\n    }\n\n    function isSuspense(object) {\n      return typeOf(object) === REACT_SUSPENSE_TYPE;\n    }\n\n    exports.AsyncMode = AsyncMode;\n    exports.ConcurrentMode = ConcurrentMode;\n    exports.ContextConsumer = ContextConsumer;\n    exports.ContextProvider = ContextProvider;\n    exports.Element = Element;\n    exports.ForwardRef = ForwardRef;\n    exports.Fragment = Fragment;\n    exports.Lazy = Lazy;\n    exports.Memo = Memo;\n    exports.Portal = Portal;\n    exports.Profiler = Profiler;\n    exports.StrictMode = StrictMode;\n    exports.Suspense = Suspense;\n    exports.isAsyncMode = isAsyncMode;\n    exports.isConcurrentMode = isConcurrentMode;\n    exports.isContextConsumer = isContextConsumer;\n    exports.isContextProvider = isContextProvider;\n    exports.isElement = isElement;\n    exports.isForwardRef = isForwardRef;\n    exports.isFragment = isFragment;\n    exports.isLazy = isLazy;\n    exports.isMemo = isMemo;\n    exports.isPortal = isPortal;\n    exports.isProfiler = isProfiler;\n    exports.isStrictMode = isStrictMode;\n    exports.isSuspense = isSuspense;\n    exports.isValidElementType = isValidElementType;\n    exports.typeOf = typeOf;\n  })();\n}\n\n/***/ }),\n\n/***/ \"./node_modules/react-is/index.js\":\n/*!****************************************!*\\\n  !*** ./node_modules/react-is/index.js ***!\n  \\****************************************/\n/*! no static exports found */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nif (false) {} else {\n  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ \"./node_modules/react-is/cjs/react-is.development.js\");\n}\n\n/***/ }),\n\n/***/ \"./node_modules/webpack/buildin/module.js\":\n/*!***********************************!*\\\n  !*** (webpack)/buildin/module.js ***!\n  \\***********************************/\n/*! no static exports found */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nmodule.exports = function (module) {\n  if (!module.webpackPolyfill) {\n    module.deprecate = function () {};\n\n    module.paths = []; // module.parent = undefined by default\n\n    if (!module.children) module.children = [];\n    Object.defineProperty(module, \"loaded\", {\n      enumerable: true,\n      get: function get() {\n        return module.l;\n      }\n    });\n    Object.defineProperty(module, \"id\", {\n      enumerable: true,\n      get: function get() {\n        return module.i;\n      }\n    });\n    module.webpackPolyfill = 1;\n  }\n\n  return module;\n};\n\n/***/ }),\n\n/***/ \"./packages/pretty-format/src/collections.ts\":\n/*!***************************************************!*\\\n  !*** ./packages/pretty-format/src/collections.ts ***!\n  \\***************************************************/\n/*! no static exports found */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.printIteratorEntries = printIteratorEntries;\nexports.printIteratorValues = printIteratorValues;\nexports.printListItems = printListItems;\nexports.printObjectProperties = printObjectProperties;\n\n/**\n * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n *\n */\nvar getKeysOfEnumerableProperties = function getKeysOfEnumerableProperties(object) {\n  var keys = Object.keys(object).sort();\n\n  if (Object.getOwnPropertySymbols) {\n    Object.getOwnPropertySymbols(object).forEach(function (symbol) {\n      if (Object.getOwnPropertyDescriptor(object, symbol).enumerable) {\n        keys.push(symbol);\n      }\n    });\n  }\n\n  return keys;\n};\n/**\n * Return entries (for example, of a map)\n * with spacing, indentation, and comma\n * without surrounding punctuation (for example, braces)\n */\n\n\nfunction printIteratorEntries(iterator, config, indentation, depth, refs, printer) {\n  var separator = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : ': ';\n  var result = '';\n  var current = iterator.next();\n\n  if (!current.done) {\n    result += config.spacingOuter;\n    var indentationNext = indentation + config.indent;\n\n    while (!current.done) {\n      var name = printer(current.value[0], config, indentationNext, depth, refs);\n      var value = printer(current.value[1], config, indentationNext, depth, refs);\n      result += indentationNext + name + separator + value;\n      current = iterator.next();\n\n      if (!current.done) {\n        result += ',' + config.spacingInner;\n      } else if (!config.min) {\n        result += ',';\n      }\n    }\n\n    result += config.spacingOuter + indentation;\n  }\n\n  return result;\n}\n/**\n * Return values (for example, of a set)\n * with spacing, indentation, and comma\n * without surrounding punctuation (braces or brackets)\n */\n\n\nfunction printIteratorValues(iterator, config, indentation, depth, refs, printer) {\n  var result = '';\n  var current = iterator.next();\n\n  if (!current.done) {\n    result += config.spacingOuter;\n    var indentationNext = indentation + config.indent;\n\n    while (!current.done) {\n      result += indentationNext + printer(current.value, config, indentationNext, depth, refs);\n      current = iterator.next();\n\n      if (!current.done) {\n        result += ',' + config.spacingInner;\n      } else if (!config.min) {\n        result += ',';\n      }\n    }\n\n    result += config.spacingOuter + indentation;\n  }\n\n  return result;\n}\n/**\n * Return items (for example, of an array)\n * with spacing, indentation, and comma\n * without surrounding punctuation (for example, brackets)\n **/\n\n\nfunction printListItems(list, config, indentation, depth, refs, printer) {\n  var result = '';\n\n  if (list.length) {\n    result += config.spacingOuter;\n    var indentationNext = indentation + config.indent;\n\n    for (var i = 0; i < list.length; i++) {\n      result += indentationNext + printer(list[i], config, indentationNext, depth, refs);\n\n      if (i < list.length - 1) {\n        result += ',' + config.spacingInner;\n      } else if (!config.min) {\n        result += ',';\n      }\n    }\n\n    result += config.spacingOuter + indentation;\n  }\n\n  return result;\n}\n/**\n * Return properties of an object\n * with spacing, indentation, and comma\n * without surrounding punctuation (for example, braces)\n */\n\n\nfunction printObjectProperties(val, config, indentation, depth, refs, printer) {\n  var result = '';\n  var keys = getKeysOfEnumerableProperties(val);\n\n  if (keys.length) {\n    result += config.spacingOuter;\n    var indentationNext = indentation + config.indent;\n\n    for (var i = 0; i < keys.length; i++) {\n      var key = keys[i];\n      var name = printer(key, config, indentationNext, depth, refs);\n      var value = printer(val[key], config, indentationNext, depth, refs);\n      result += indentationNext + name + ': ' + value;\n\n      if (i < keys.length - 1) {\n        result += ',' + config.spacingInner;\n      } else if (!config.min) {\n        result += ',';\n      }\n    }\n\n    result += config.spacingOuter + indentation;\n  }\n\n  return result;\n}\n\n/***/ }),\n\n/***/ \"./packages/pretty-format/src/index.ts\":\n/*!*********************************************!*\\\n  !*** ./packages/pretty-format/src/index.ts ***!\n  \\*********************************************/\n/*! no static exports found */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar _ansiStyles = _interopRequireDefault(__webpack_require__(/*! ansi-styles */ \"./node_modules/ansi-styles/index.js\"));\n\nvar _collections = __webpack_require__(/*! ./collections */ \"./packages/pretty-format/src/collections.ts\");\n\nvar _AsymmetricMatcher = _interopRequireDefault(__webpack_require__(/*! ./plugins/AsymmetricMatcher */ \"./packages/pretty-format/src/plugins/AsymmetricMatcher.ts\"));\n\nvar _ConvertAnsi = _interopRequireDefault(__webpack_require__(/*! ./plugins/ConvertAnsi */ \"./packages/pretty-format/src/plugins/ConvertAnsi.ts\"));\n\nvar _DOMCollection = _interopRequireDefault(__webpack_require__(/*! ./plugins/DOMCollection */ \"./packages/pretty-format/src/plugins/DOMCollection.ts\"));\n\nvar _DOMElement = _interopRequireDefault(__webpack_require__(/*! ./plugins/DOMElement */ \"./packages/pretty-format/src/plugins/DOMElement.ts\"));\n\nvar _Immutable = _interopRequireDefault(__webpack_require__(/*! ./plugins/Immutable */ \"./packages/pretty-format/src/plugins/Immutable.ts\"));\n\nvar _ReactElement = _interopRequireDefault(__webpack_require__(/*! ./plugins/ReactElement */ \"./packages/pretty-format/src/plugins/ReactElement.ts\"));\n\nvar _ReactTestComponent = _interopRequireDefault(__webpack_require__(/*! ./plugins/ReactTestComponent */ \"./packages/pretty-format/src/plugins/ReactTestComponent.ts\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar toString = Object.prototype.toString;\nvar toISOString = Date.prototype.toISOString;\nvar errorToString = Error.prototype.toString;\nvar regExpToString = RegExp.prototype.toString;\n/**\n * Explicitly comparing typeof constructor to function avoids undefined as name\n * when mock identity-obj-proxy returns the key as the value for any key.\n */\n\nvar getConstructorName = function getConstructorName(val) {\n  return typeof val.constructor === 'function' && val.constructor.name || 'Object';\n};\n/* global window */\n\n/** Is val is equal to global window object? Works even if it does not exist :) */\n\n\nvar isWindow = function isWindow(val) {\n  return typeof window !== 'undefined' && val === window;\n};\n\nvar SYMBOL_REGEXP = /^Symbol\\((.*)\\)(.*)$/;\nvar NEWLINE_REGEXP = /\\n/gi;\n\nvar PrettyFormatPluginError = /*#__PURE__*/function (_Error) {\n  _inherits(PrettyFormatPluginError, _Error);\n\n  var _super = _createSuper(PrettyFormatPluginError);\n\n  function PrettyFormatPluginError(message, stack) {\n    var _this;\n\n    _classCallCheck(this, PrettyFormatPluginError);\n\n    _this = _super.call(this, message);\n    _this.stack = stack;\n    _this.name = _this.constructor.name;\n    return _this;\n  }\n\n  return PrettyFormatPluginError;\n}( /*#__PURE__*/_wrapNativeSuper(Error));\n\nfunction isToStringedArrayType(toStringed) {\n  return toStringed === '[object Array]' || toStringed === '[object ArrayBuffer]' || toStringed === '[object DataView]' || toStringed === '[object Float32Array]' || toStringed === '[object Float64Array]' || toStringed === '[object Int8Array]' || toStringed === '[object Int16Array]' || toStringed === '[object Int32Array]' || toStringed === '[object Uint8Array]' || toStringed === '[object Uint8ClampedArray]' || toStringed === '[object Uint16Array]' || toStringed === '[object Uint32Array]';\n}\n\nfunction printNumber(val) {\n  return Object.is(val, -0) ? '-0' : String(val);\n}\n\nfunction printBigInt(val) {\n  return String(\"\".concat(val, \"n\"));\n}\n\nfunction printFunction(val, printFunctionName) {\n  if (!printFunctionName) {\n    return '[Function]';\n  }\n\n  return '[Function ' + (val.name || 'anonymous') + ']';\n}\n\nfunction printSymbol(val) {\n  return String(val).replace(SYMBOL_REGEXP, 'Symbol($1)');\n}\n\nfunction printError(val) {\n  return '[' + errorToString.call(val) + ']';\n}\n/**\n * The first port of call for printing an object, handles most of the\n * data-types in JS.\n */\n\n\nfunction printBasicValue(val, printFunctionName, escapeRegex, escapeString) {\n  if (val === true || val === false) {\n    return '' + val;\n  }\n\n  if (val === undefined) {\n    return 'undefined';\n  }\n\n  if (val === null) {\n    return 'null';\n  }\n\n  var typeOf = _typeof(val);\n\n  if (typeOf === 'number') {\n    return printNumber(val);\n  }\n\n  if (typeOf === 'bigint') {\n    return printBigInt(val);\n  }\n\n  if (typeOf === 'string') {\n    if (escapeString) {\n      return '\"' + val.replace(/\"|\\\\/g, '\\\\$&') + '\"';\n    }\n\n    return '\"' + val + '\"';\n  }\n\n  if (typeOf === 'function') {\n    return printFunction(val, printFunctionName);\n  }\n\n  if (typeOf === 'symbol') {\n    return printSymbol(val);\n  }\n\n  var toStringed = toString.call(val);\n\n  if (toStringed === '[object WeakMap]') {\n    return 'WeakMap {}';\n  }\n\n  if (toStringed === '[object WeakSet]') {\n    return 'WeakSet {}';\n  }\n\n  if (toStringed === '[object Function]' || toStringed === '[object GeneratorFunction]') {\n    return printFunction(val, printFunctionName);\n  }\n\n  if (toStringed === '[object Symbol]') {\n    return printSymbol(val);\n  }\n\n  if (toStringed === '[object Date]') {\n    return isNaN(+val) ? 'Date { NaN }' : toISOString.call(val);\n  }\n\n  if (toStringed === '[object Error]') {\n    return printError(val);\n  }\n\n  if (toStringed === '[object RegExp]') {\n    if (escapeRegex) {\n      // https://github.com/benjamingr/RegExp.escape/blob/master/polyfill.js\n      return regExpToString.call(val).replace(/[\\\\^$*+?.()|[\\]{}]/g, '\\\\$&');\n    }\n\n    return regExpToString.call(val);\n  }\n\n  if (val instanceof Error) {\n    return printError(val);\n  }\n\n  return null;\n}\n/**\n * Handles more complex objects ( such as objects with circular references.\n * maps and sets etc )\n */\n\n\nfunction printComplexValue(val, config, indentation, depth, refs, hasCalledToJSON) {\n  if (refs.indexOf(val) !== -1) {\n    return '[Circular]';\n  }\n\n  refs = refs.slice();\n  refs.push(val);\n  var hitMaxDepth = ++depth > config.maxDepth;\n  var min = config.min;\n\n  if (config.callToJSON && !hitMaxDepth && val.toJSON && typeof val.toJSON === 'function' && !hasCalledToJSON) {\n    return printer(val.toJSON(), config, indentation, depth, refs, true);\n  }\n\n  var toStringed = toString.call(val);\n\n  if (toStringed === '[object Arguments]') {\n    return hitMaxDepth ? '[Arguments]' : (min ? '' : 'Arguments ') + '[' + (0, _collections.printListItems)(val, config, indentation, depth, refs, printer) + ']';\n  }\n\n  if (isToStringedArrayType(toStringed)) {\n    return hitMaxDepth ? '[' + val.constructor.name + ']' : (min ? '' : val.constructor.name + ' ') + '[' + (0, _collections.printListItems)(val, config, indentation, depth, refs, printer) + ']';\n  }\n\n  if (toStringed === '[object Map]') {\n    return hitMaxDepth ? '[Map]' : 'Map {' + (0, _collections.printIteratorEntries)(val.entries(), config, indentation, depth, refs, printer, ' => ') + '}';\n  }\n\n  if (toStringed === '[object Set]') {\n    return hitMaxDepth ? '[Set]' : 'Set {' + (0, _collections.printIteratorValues)(val.values(), config, indentation, depth, refs, printer) + '}';\n  } // Avoid failure to serialize global window object in jsdom test environment.\n  // For example, not even relevant if window is prop of React element.\n\n\n  return hitMaxDepth || isWindow(val) ? '[' + getConstructorName(val) + ']' : (min ? '' : getConstructorName(val) + ' ') + '{' + (0, _collections.printObjectProperties)(val, config, indentation, depth, refs, printer) + '}';\n}\n\nfunction isNewPlugin(plugin) {\n  return plugin.serialize != null;\n}\n\nfunction printPlugin(plugin, val, config, indentation, depth, refs) {\n  var printed;\n\n  try {\n    printed = isNewPlugin(plugin) ? plugin.serialize(val, config, indentation, depth, refs, printer) : plugin.print(val, function (valChild) {\n      return printer(valChild, config, indentation, depth, refs);\n    }, function (str) {\n      var indentationNext = indentation + config.indent;\n      return indentationNext + str.replace(NEWLINE_REGEXP, '\\n' + indentationNext);\n    }, {\n      edgeSpacing: config.spacingOuter,\n      min: config.min,\n      spacing: config.spacingInner\n    }, config.colors);\n  } catch (error) {\n    throw new PrettyFormatPluginError(error.message, error.stack);\n  }\n\n  if (typeof printed !== 'string') {\n    throw new Error(\"pretty-format: Plugin must return type \\\"string\\\" but instead returned \\\"\".concat(_typeof(printed), \"\\\".\"));\n  }\n\n  return printed;\n}\n\nfunction findPlugin(plugins, val) {\n  for (var p = 0; p < plugins.length; p++) {\n    try {\n      if (plugins[p].test(val)) {\n        return plugins[p];\n      }\n    } catch (error) {\n      throw new PrettyFormatPluginError(error.message, error.stack);\n    }\n  }\n\n  return null;\n}\n\nfunction printer(val, config, indentation, depth, refs, hasCalledToJSON) {\n  var plugin = findPlugin(config.plugins, val);\n\n  if (plugin !== null) {\n    return printPlugin(plugin, val, config, indentation, depth, refs);\n  }\n\n  var basicResult = printBasicValue(val, config.printFunctionName, config.escapeRegex, config.escapeString);\n\n  if (basicResult !== null) {\n    return basicResult;\n  }\n\n  return printComplexValue(val, config, indentation, depth, refs, hasCalledToJSON);\n}\n\nvar DEFAULT_THEME = {\n  comment: 'gray',\n  content: 'reset',\n  prop: 'yellow',\n  tag: 'cyan',\n  value: 'green'\n};\nvar DEFAULT_THEME_KEYS = Object.keys(DEFAULT_THEME);\nvar DEFAULT_OPTIONS = {\n  callToJSON: true,\n  escapeRegex: false,\n  escapeString: true,\n  highlight: false,\n  indent: 2,\n  maxDepth: Infinity,\n  min: false,\n  plugins: [],\n  printFunctionName: true,\n  theme: DEFAULT_THEME\n};\n\nfunction validateOptions(options) {\n  Object.keys(options).forEach(function (key) {\n    if (!DEFAULT_OPTIONS.hasOwnProperty(key)) {\n      throw new Error(\"pretty-format: Unknown option \\\"\".concat(key, \"\\\".\"));\n    }\n  });\n\n  if (options.min && options.indent !== undefined && options.indent !== 0) {\n    throw new Error('pretty-format: Options \"min\" and \"indent\" cannot be used together.');\n  }\n\n  if (options.theme !== undefined) {\n    if (options.theme === null) {\n      throw new Error(\"pretty-format: Option \\\"theme\\\" must not be null.\");\n    }\n\n    if (_typeof(options.theme) !== 'object') {\n      throw new Error(\"pretty-format: Option \\\"theme\\\" must be of type \\\"object\\\" but instead received \\\"\".concat(_typeof(options.theme), \"\\\".\"));\n    }\n  }\n}\n\nvar getColorsHighlight = function getColorsHighlight(options) {\n  return DEFAULT_THEME_KEYS.reduce(function (colors, key) {\n    var value = options.theme && options.theme[key] !== undefined ? options.theme[key] : DEFAULT_THEME[key];\n    var color = value && _ansiStyles.default[value];\n\n    if (color && typeof color.close === 'string' && typeof color.open === 'string') {\n      colors[key] = color;\n    } else {\n      throw new Error(\"pretty-format: Option \\\"theme\\\" has a key \\\"\".concat(key, \"\\\" whose value \\\"\").concat(value, \"\\\" is undefined in ansi-styles.\"));\n    }\n\n    return colors;\n  }, Object.create(null));\n};\n\nvar getColorsEmpty = function getColorsEmpty() {\n  return DEFAULT_THEME_KEYS.reduce(function (colors, key) {\n    colors[key] = {\n      close: '',\n      open: ''\n    };\n    return colors;\n  }, Object.create(null));\n};\n\nvar getPrintFunctionName = function getPrintFunctionName(options) {\n  return options && options.printFunctionName !== undefined ? options.printFunctionName : DEFAULT_OPTIONS.printFunctionName;\n};\n\nvar getEscapeRegex = function getEscapeRegex(options) {\n  return options && options.escapeRegex !== undefined ? options.escapeRegex : DEFAULT_OPTIONS.escapeRegex;\n};\n\nvar getEscapeString = function getEscapeString(options) {\n  return options && options.escapeString !== undefined ? options.escapeString : DEFAULT_OPTIONS.escapeString;\n};\n\nvar getConfig = function getConfig(options) {\n  return {\n    callToJSON: options && options.callToJSON !== undefined ? options.callToJSON : DEFAULT_OPTIONS.callToJSON,\n    colors: options && options.highlight ? getColorsHighlight(options) : getColorsEmpty(),\n    escapeRegex: getEscapeRegex(options),\n    escapeString: getEscapeString(options),\n    indent: options && options.min ? '' : createIndent(options && options.indent !== undefined ? options.indent : DEFAULT_OPTIONS.indent),\n    maxDepth: options && options.maxDepth !== undefined ? options.maxDepth : DEFAULT_OPTIONS.maxDepth,\n    min: options && options.min !== undefined ? options.min : DEFAULT_OPTIONS.min,\n    plugins: options && options.plugins !== undefined ? options.plugins : DEFAULT_OPTIONS.plugins,\n    printFunctionName: getPrintFunctionName(options),\n    spacingInner: options && options.min ? ' ' : '\\n',\n    spacingOuter: options && options.min ? '' : '\\n'\n  };\n};\n\nfunction createIndent(indent) {\n  return new Array(indent + 1).join(' ');\n}\n/**\n * Returns a presentation string of your `val` object\n * @param val any potential JavaScript object\n * @param options Custom settings\n */\n\n\nfunction prettyFormat(val, options) {\n  if (options) {\n    validateOptions(options);\n\n    if (options.plugins) {\n      var plugin = findPlugin(options.plugins, val);\n\n      if (plugin !== null) {\n        return printPlugin(plugin, val, getConfig(options), '', 0, []);\n      }\n    }\n  }\n\n  var basicResult = printBasicValue(val, getPrintFunctionName(options), getEscapeRegex(options), getEscapeString(options));\n\n  if (basicResult !== null) {\n    return basicResult;\n  }\n\n  return printComplexValue(val, getConfig(options), '', 0, []);\n}\n\nprettyFormat.plugins = {\n  AsymmetricMatcher: _AsymmetricMatcher.default,\n  ConvertAnsi: _ConvertAnsi.default,\n  DOMCollection: _DOMCollection.default,\n  DOMElement: _DOMElement.default,\n  Immutable: _Immutable.default,\n  ReactElement: _ReactElement.default,\n  ReactTestComponent: _ReactTestComponent.default\n}; // eslint-disable-next-line no-redeclare\n\nmodule.exports = prettyFormat;\n\n/***/ }),\n\n/***/ \"./packages/pretty-format/src/plugins/AsymmetricMatcher.ts\":\n/*!*****************************************************************!*\\\n  !*** ./packages/pretty-format/src/plugins/AsymmetricMatcher.ts ***!\n  \\*****************************************************************/\n/*! no static exports found */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = exports.test = exports.serialize = void 0;\n\nvar _collections = __webpack_require__(/*! ../collections */ \"./packages/pretty-format/src/collections.ts\");\n\n/**\n * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\nvar asymmetricMatcher = typeof Symbol === 'function' && Symbol.for ? Symbol.for('jest.asymmetricMatcher') : 0x1357a5;\nvar SPACE = ' ';\n\nvar serialize = function serialize(val, config, indentation, depth, refs, printer) {\n  var stringedValue = val.toString();\n\n  if (stringedValue === 'ArrayContaining' || stringedValue === 'ArrayNotContaining') {\n    if (++depth > config.maxDepth) {\n      return '[' + stringedValue + ']';\n    }\n\n    return stringedValue + SPACE + '[' + (0, _collections.printListItems)(val.sample, config, indentation, depth, refs, printer) + ']';\n  }\n\n  if (stringedValue === 'ObjectContaining' || stringedValue === 'ObjectNotContaining') {\n    if (++depth > config.maxDepth) {\n      return '[' + stringedValue + ']';\n    }\n\n    return stringedValue + SPACE + '{' + (0, _collections.printObjectProperties)(val.sample, config, indentation, depth, refs, printer) + '}';\n  }\n\n  if (stringedValue === 'StringMatching' || stringedValue === 'StringNotMatching') {\n    return stringedValue + SPACE + printer(val.sample, config, indentation, depth, refs);\n  }\n\n  if (stringedValue === 'StringContaining' || stringedValue === 'StringNotContaining') {\n    return stringedValue + SPACE + printer(val.sample, config, indentation, depth, refs);\n  }\n\n  return val.toAsymmetricMatcher();\n};\n\nexports.serialize = serialize;\n\nvar test = function test(val) {\n  return val && val.$$typeof === asymmetricMatcher;\n};\n\nexports.test = test;\nvar plugin = {\n  serialize: serialize,\n  test: test\n};\nvar _default = plugin;\nexports.default = _default;\n\n/***/ }),\n\n/***/ \"./packages/pretty-format/src/plugins/ConvertAnsi.ts\":\n/*!***********************************************************!*\\\n  !*** ./packages/pretty-format/src/plugins/ConvertAnsi.ts ***!\n  \\***********************************************************/\n/*! no static exports found */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = exports.serialize = exports.test = void 0;\n\nvar _ansiRegex = _interopRequireDefault(__webpack_require__(/*! ansi-regex */ \"./node_modules/ansi-regex/index.js\"));\n\nvar _ansiStyles = _interopRequireDefault(__webpack_require__(/*! ansi-styles */ \"./node_modules/ansi-styles/index.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\nvar toHumanReadableAnsi = function toHumanReadableAnsi(text) {\n  return text.replace((0, _ansiRegex.default)(), function (match) {\n    switch (match) {\n      case _ansiStyles.default.red.close:\n      case _ansiStyles.default.green.close:\n      case _ansiStyles.default.cyan.close:\n      case _ansiStyles.default.gray.close:\n      case _ansiStyles.default.white.close:\n      case _ansiStyles.default.yellow.close:\n      case _ansiStyles.default.bgRed.close:\n      case _ansiStyles.default.bgGreen.close:\n      case _ansiStyles.default.bgYellow.close:\n      case _ansiStyles.default.inverse.close:\n      case _ansiStyles.default.dim.close:\n      case _ansiStyles.default.bold.close:\n      case _ansiStyles.default.reset.open:\n      case _ansiStyles.default.reset.close:\n        return '</>';\n\n      case _ansiStyles.default.red.open:\n        return '<red>';\n\n      case _ansiStyles.default.green.open:\n        return '<green>';\n\n      case _ansiStyles.default.cyan.open:\n        return '<cyan>';\n\n      case _ansiStyles.default.gray.open:\n        return '<gray>';\n\n      case _ansiStyles.default.white.open:\n        return '<white>';\n\n      case _ansiStyles.default.yellow.open:\n        return '<yellow>';\n\n      case _ansiStyles.default.bgRed.open:\n        return '<bgRed>';\n\n      case _ansiStyles.default.bgGreen.open:\n        return '<bgGreen>';\n\n      case _ansiStyles.default.bgYellow.open:\n        return '<bgYellow>';\n\n      case _ansiStyles.default.inverse.open:\n        return '<inverse>';\n\n      case _ansiStyles.default.dim.open:\n        return '<dim>';\n\n      case _ansiStyles.default.bold.open:\n        return '<bold>';\n\n      default:\n        return '';\n    }\n  });\n};\n\nvar test = function test(val) {\n  return typeof val === 'string' && !!val.match((0, _ansiRegex.default)());\n};\n\nexports.test = test;\n\nvar serialize = function serialize(val, config, indentation, depth, refs, printer) {\n  return printer(toHumanReadableAnsi(val), config, indentation, depth, refs);\n};\n\nexports.serialize = serialize;\nvar plugin = {\n  serialize: serialize,\n  test: test\n};\nvar _default = plugin;\nexports.default = _default;\n\n/***/ }),\n\n/***/ \"./packages/pretty-format/src/plugins/DOMCollection.ts\":\n/*!*************************************************************!*\\\n  !*** ./packages/pretty-format/src/plugins/DOMCollection.ts ***!\n  \\*************************************************************/\n/*! no static exports found */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = exports.serialize = exports.test = void 0;\n\nvar _collections = __webpack_require__(/*! ../collections */ \"./packages/pretty-format/src/collections.ts\");\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar SPACE = ' ';\nvar OBJECT_NAMES = ['DOMStringMap', 'NamedNodeMap'];\nvar ARRAY_REGEXP = /^(HTML\\w*Collection|NodeList)$/;\n\nvar testName = function testName(name) {\n  return OBJECT_NAMES.indexOf(name) !== -1 || ARRAY_REGEXP.test(name);\n};\n\nvar test = function test(val) {\n  return val && val.constructor && !!val.constructor.name && testName(val.constructor.name);\n};\n\nexports.test = test;\n\nvar isNamedNodeMap = function isNamedNodeMap(collection) {\n  return collection.constructor.name === 'NamedNodeMap';\n};\n\nvar serialize = function serialize(collection, config, indentation, depth, refs, printer) {\n  var name = collection.constructor.name;\n\n  if (++depth > config.maxDepth) {\n    return '[' + name + ']';\n  }\n\n  return (config.min ? '' : name + SPACE) + (OBJECT_NAMES.indexOf(name) !== -1 ? '{' + (0, _collections.printObjectProperties)(isNamedNodeMap(collection) ? Array.from(collection).reduce(function (props, attribute) {\n    props[attribute.name] = attribute.value;\n    return props;\n  }, {}) : _objectSpread({}, collection), config, indentation, depth, refs, printer) + '}' : '[' + (0, _collections.printListItems)(Array.from(collection), config, indentation, depth, refs, printer) + ']');\n};\n\nexports.serialize = serialize;\nvar plugin = {\n  serialize: serialize,\n  test: test\n};\nvar _default = plugin;\nexports.default = _default;\n\n/***/ }),\n\n/***/ \"./packages/pretty-format/src/plugins/DOMElement.ts\":\n/*!**********************************************************!*\\\n  !*** ./packages/pretty-format/src/plugins/DOMElement.ts ***!\n  \\**********************************************************/\n/*! no static exports found */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = exports.serialize = exports.test = void 0;\n\nvar _markup = __webpack_require__(/*! ./lib/markup */ \"./packages/pretty-format/src/plugins/lib/markup.ts\");\n\n/**\n * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\nvar ELEMENT_NODE = 1;\nvar TEXT_NODE = 3;\nvar COMMENT_NODE = 8;\nvar FRAGMENT_NODE = 11;\nvar ELEMENT_REGEXP = /^((HTML|SVG)\\w*)?Element$/;\n\nvar testNode = function testNode(nodeType, name) {\n  return nodeType === ELEMENT_NODE && ELEMENT_REGEXP.test(name) || nodeType === TEXT_NODE && name === 'Text' || nodeType === COMMENT_NODE && name === 'Comment' || nodeType === FRAGMENT_NODE && name === 'DocumentFragment';\n};\n\nvar test = function test(val) {\n  return val && val.constructor && val.constructor.name && testNode(val.nodeType, val.constructor.name);\n};\n\nexports.test = test;\n\nfunction nodeIsText(node) {\n  return node.nodeType === TEXT_NODE;\n}\n\nfunction nodeIsComment(node) {\n  return node.nodeType === COMMENT_NODE;\n}\n\nfunction nodeIsFragment(node) {\n  return node.nodeType === FRAGMENT_NODE;\n}\n\nvar serialize = function serialize(node, config, indentation, depth, refs, printer) {\n  if (nodeIsText(node)) {\n    return (0, _markup.printText)(node.data, config);\n  }\n\n  if (nodeIsComment(node)) {\n    return (0, _markup.printComment)(node.data, config);\n  }\n\n  var type = nodeIsFragment(node) ? \"DocumentFragment\" : node.tagName.toLowerCase();\n\n  if (++depth > config.maxDepth) {\n    return (0, _markup.printElementAsLeaf)(type, config);\n  }\n\n  return (0, _markup.printElement)(type, (0, _markup.printProps)(nodeIsFragment(node) ? [] : Array.from(node.attributes).map(function (attr) {\n    return attr.name;\n  }).sort(), nodeIsFragment(node) ? {} : Array.from(node.attributes).reduce(function (props, attribute) {\n    props[attribute.name] = attribute.value;\n    return props;\n  }, {}), config, indentation + config.indent, depth, refs, printer), (0, _markup.printChildren)(Array.prototype.slice.call(node.childNodes || node.children), config, indentation + config.indent, depth, refs, printer), config, indentation);\n};\n\nexports.serialize = serialize;\nvar plugin = {\n  serialize: serialize,\n  test: test\n};\nvar _default = plugin;\nexports.default = _default;\n\n/***/ }),\n\n/***/ \"./packages/pretty-format/src/plugins/Immutable.ts\":\n/*!*********************************************************!*\\\n  !*** ./packages/pretty-format/src/plugins/Immutable.ts ***!\n  \\*********************************************************/\n/*! no static exports found */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = exports.test = exports.serialize = void 0;\n\nvar _collections = __webpack_require__(/*! ../collections */ \"./packages/pretty-format/src/collections.ts\");\n\n/**\n * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n// SENTINEL constants are from https://github.com/facebook/immutable-js\nvar IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';\nvar IS_LIST_SENTINEL = '@@__IMMUTABLE_LIST__@@';\nvar IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';\nvar IS_MAP_SENTINEL = '@@__IMMUTABLE_MAP__@@';\nvar IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';\nvar IS_RECORD_SENTINEL = '@@__IMMUTABLE_RECORD__@@'; // immutable v4\n\nvar IS_SEQ_SENTINEL = '@@__IMMUTABLE_SEQ__@@';\nvar IS_SET_SENTINEL = '@@__IMMUTABLE_SET__@@';\nvar IS_STACK_SENTINEL = '@@__IMMUTABLE_STACK__@@';\n\nvar getImmutableName = function getImmutableName(name) {\n  return 'Immutable.' + name;\n};\n\nvar printAsLeaf = function printAsLeaf(name) {\n  return '[' + name + ']';\n};\n\nvar SPACE = ' ';\nvar LAZY = '…'; // Seq is lazy if it calls a method like filter\n\nvar printImmutableEntries = function printImmutableEntries(val, config, indentation, depth, refs, printer, type) {\n  return ++depth > config.maxDepth ? printAsLeaf(getImmutableName(type)) : getImmutableName(type) + SPACE + '{' + (0, _collections.printIteratorEntries)(val.entries(), config, indentation, depth, refs, printer) + '}';\n}; // Record has an entries method because it is a collection in immutable v3.\n// Return an iterator for Immutable Record from version v3 or v4.\n\n\nfunction getRecordEntries(val) {\n  var i = 0;\n  return {\n    next: function next() {\n      if (i < val._keys.length) {\n        var key = val._keys[i++];\n        return {\n          done: false,\n          value: [key, val.get(key)]\n        };\n      }\n\n      return {\n        done: true,\n        value: undefined\n      };\n    }\n  };\n}\n\nvar printImmutableRecord = function printImmutableRecord(val, config, indentation, depth, refs, printer) {\n  // _name property is defined only for an Immutable Record instance\n  // which was constructed with a second optional descriptive name arg\n  var name = getImmutableName(val._name || 'Record');\n  return ++depth > config.maxDepth ? printAsLeaf(name) : name + SPACE + '{' + (0, _collections.printIteratorEntries)(getRecordEntries(val), config, indentation, depth, refs, printer) + '}';\n};\n\nvar printImmutableSeq = function printImmutableSeq(val, config, indentation, depth, refs, printer) {\n  var name = getImmutableName('Seq');\n\n  if (++depth > config.maxDepth) {\n    return printAsLeaf(name);\n  }\n\n  if (val[IS_KEYED_SENTINEL]) {\n    return name + SPACE + '{' + ( // from Immutable collection of entries or from ECMAScript object\n    val._iter || val._object ? (0, _collections.printIteratorEntries)(val.entries(), config, indentation, depth, refs, printer) : LAZY) + '}';\n  }\n\n  return name + SPACE + '[' + (val._iter || // from Immutable collection of values\n  val._array || // from ECMAScript array\n  val._collection || // from ECMAScript collection in immutable v4\n  val._iterable // from ECMAScript collection in immutable v3\n  ? (0, _collections.printIteratorValues)(val.values(), config, indentation, depth, refs, printer) : LAZY) + ']';\n};\n\nvar printImmutableValues = function printImmutableValues(val, config, indentation, depth, refs, printer, type) {\n  return ++depth > config.maxDepth ? printAsLeaf(getImmutableName(type)) : getImmutableName(type) + SPACE + '[' + (0, _collections.printIteratorValues)(val.values(), config, indentation, depth, refs, printer) + ']';\n};\n\nvar serialize = function serialize(val, config, indentation, depth, refs, printer) {\n  if (val[IS_MAP_SENTINEL]) {\n    return printImmutableEntries(val, config, indentation, depth, refs, printer, val[IS_ORDERED_SENTINEL] ? 'OrderedMap' : 'Map');\n  }\n\n  if (val[IS_LIST_SENTINEL]) {\n    return printImmutableValues(val, config, indentation, depth, refs, printer, 'List');\n  }\n\n  if (val[IS_SET_SENTINEL]) {\n    return printImmutableValues(val, config, indentation, depth, refs, printer, val[IS_ORDERED_SENTINEL] ? 'OrderedSet' : 'Set');\n  }\n\n  if (val[IS_STACK_SENTINEL]) {\n    return printImmutableValues(val, config, indentation, depth, refs, printer, 'Stack');\n  }\n\n  if (val[IS_SEQ_SENTINEL]) {\n    return printImmutableSeq(val, config, indentation, depth, refs, printer);\n  } // For compatibility with immutable v3 and v4, let record be the default.\n\n\n  return printImmutableRecord(val, config, indentation, depth, refs, printer);\n}; // Explicitly comparing sentinel properties to true avoids false positive\n// when mock identity-obj-proxy returns the key as the value for any key.\n\n\nexports.serialize = serialize;\n\nvar test = function test(val) {\n  return val && (val[IS_ITERABLE_SENTINEL] === true || val[IS_RECORD_SENTINEL] === true);\n};\n\nexports.test = test;\nvar plugin = {\n  serialize: serialize,\n  test: test\n};\nvar _default = plugin;\nexports.default = _default;\n\n/***/ }),\n\n/***/ \"./packages/pretty-format/src/plugins/ReactElement.ts\":\n/*!************************************************************!*\\\n  !*** ./packages/pretty-format/src/plugins/ReactElement.ts ***!\n  \\************************************************************/\n/*! no static exports found */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = exports.test = exports.serialize = void 0;\n\nvar ReactIs = _interopRequireWildcard(__webpack_require__(/*! react-is */ \"./node_modules/react-is/index.js\"));\n\nvar _markup = __webpack_require__(/*! ./lib/markup */ \"./packages/pretty-format/src/plugins/lib/markup.ts\");\n\nfunction _getRequireWildcardCache() { if (typeof WeakMap !== \"function\") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== \"object\" && typeof obj !== \"function\") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n// Given element.props.children, or subtree during recursive traversal,\n// return flattened array of children.\nvar getChildren = function getChildren(arg) {\n  var children = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];\n\n  if (Array.isArray(arg)) {\n    arg.forEach(function (item) {\n      getChildren(item, children);\n    });\n  } else if (arg != null && arg !== false) {\n    children.push(arg);\n  }\n\n  return children;\n};\n\nvar getType = function getType(element) {\n  var type = element.type;\n\n  if (typeof type === 'string') {\n    return type;\n  }\n\n  if (typeof type === 'function') {\n    return type.displayName || type.name || 'Unknown';\n  }\n\n  if (ReactIs.isFragment(element)) {\n    return 'React.Fragment';\n  }\n\n  if (ReactIs.isSuspense(element)) {\n    return 'React.Suspense';\n  }\n\n  if (_typeof(type) === 'object' && type !== null) {\n    if (ReactIs.isContextProvider(element)) {\n      return 'Context.Provider';\n    }\n\n    if (ReactIs.isContextConsumer(element)) {\n      return 'Context.Consumer';\n    }\n\n    if (ReactIs.isForwardRef(element)) {\n      if (type.displayName) {\n        return type.displayName;\n      }\n\n      var functionName = type.render.displayName || type.render.name || '';\n      return functionName !== '' ? 'ForwardRef(' + functionName + ')' : 'ForwardRef';\n    }\n\n    if (ReactIs.isMemo(element)) {\n      var _functionName = type.displayName || type.type.displayName || type.type.name || '';\n\n      return _functionName !== '' ? 'Memo(' + _functionName + ')' : 'Memo';\n    }\n  }\n\n  return 'UNDEFINED';\n};\n\nvar getPropKeys = function getPropKeys(element) {\n  var props = element.props;\n  return Object.keys(props).filter(function (key) {\n    return key !== 'children' && props[key] !== undefined;\n  }).sort();\n};\n\nvar serialize = function serialize(element, config, indentation, depth, refs, printer) {\n  return ++depth > config.maxDepth ? (0, _markup.printElementAsLeaf)(getType(element), config) : (0, _markup.printElement)(getType(element), (0, _markup.printProps)(getPropKeys(element), element.props, config, indentation + config.indent, depth, refs, printer), (0, _markup.printChildren)(getChildren(element.props.children), config, indentation + config.indent, depth, refs, printer), config, indentation);\n};\n\nexports.serialize = serialize;\n\nvar test = function test(val) {\n  return val && ReactIs.isElement(val);\n};\n\nexports.test = test;\nvar plugin = {\n  serialize: serialize,\n  test: test\n};\nvar _default = plugin;\nexports.default = _default;\n\n/***/ }),\n\n/***/ \"./packages/pretty-format/src/plugins/ReactTestComponent.ts\":\n/*!******************************************************************!*\\\n  !*** ./packages/pretty-format/src/plugins/ReactTestComponent.ts ***!\n  \\******************************************************************/\n/*! no static exports found */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = exports.test = exports.serialize = void 0;\n\nvar _markup = __webpack_require__(/*! ./lib/markup */ \"./packages/pretty-format/src/plugins/lib/markup.ts\");\n\n/**\n * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n// Child can be `number` in Stack renderer but not in Fiber renderer.\nvar testSymbol = typeof Symbol === 'function' && Symbol.for ? Symbol.for('react.test.json') : 0xea71357;\n\nvar getPropKeys = function getPropKeys(object) {\n  var props = object.props;\n  return props ? Object.keys(props).filter(function (key) {\n    return props[key] !== undefined;\n  }).sort() : [];\n};\n\nvar serialize = function serialize(object, config, indentation, depth, refs, printer) {\n  return ++depth > config.maxDepth ? (0, _markup.printElementAsLeaf)(object.type, config) : (0, _markup.printElement)(object.type, object.props ? (0, _markup.printProps)(getPropKeys(object), object.props, config, indentation + config.indent, depth, refs, printer) : '', object.children ? (0, _markup.printChildren)(object.children, config, indentation + config.indent, depth, refs, printer) : '', config, indentation);\n};\n\nexports.serialize = serialize;\n\nvar test = function test(val) {\n  return val && val.$$typeof === testSymbol;\n};\n\nexports.test = test;\nvar plugin = {\n  serialize: serialize,\n  test: test\n};\nvar _default = plugin;\nexports.default = _default;\n\n/***/ }),\n\n/***/ \"./packages/pretty-format/src/plugins/lib/escapeHTML.ts\":\n/*!**************************************************************!*\\\n  !*** ./packages/pretty-format/src/plugins/lib/escapeHTML.ts ***!\n  \\**************************************************************/\n/*! no static exports found */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = escapeHTML;\n\n/**\n * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\nfunction escapeHTML(str) {\n  return str.replace(/</g, '&lt;').replace(/>/g, '&gt;');\n}\n\n/***/ }),\n\n/***/ \"./packages/pretty-format/src/plugins/lib/markup.ts\":\n/*!**********************************************************!*\\\n  !*** ./packages/pretty-format/src/plugins/lib/markup.ts ***!\n  \\**********************************************************/\n/*! no static exports found */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.printElementAsLeaf = exports.printElement = exports.printComment = exports.printText = exports.printChildren = exports.printProps = void 0;\n\nvar _escapeHTML = _interopRequireDefault(__webpack_require__(/*! ./escapeHTML */ \"./packages/pretty-format/src/plugins/lib/escapeHTML.ts\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n// Return empty string if keys is empty.\nvar printProps = function printProps(keys, props, config, indentation, depth, refs, printer) {\n  var indentationNext = indentation + config.indent;\n  var colors = config.colors;\n  return keys.map(function (key) {\n    var value = props[key];\n    var printed = printer(value, config, indentationNext, depth, refs);\n\n    if (typeof value !== 'string') {\n      if (printed.indexOf('\\n') !== -1) {\n        printed = config.spacingOuter + indentationNext + printed + config.spacingOuter + indentation;\n      }\n\n      printed = '{' + printed + '}';\n    }\n\n    return config.spacingInner + indentation + colors.prop.open + key + colors.prop.close + '=' + colors.value.open + printed + colors.value.close;\n  }).join('');\n}; // Return empty string if children is empty.\n\n\nexports.printProps = printProps;\n\nvar printChildren = function printChildren(children, config, indentation, depth, refs, printer) {\n  return children.map(function (child) {\n    return config.spacingOuter + indentation + (typeof child === 'string' ? printText(child, config) : printer(child, config, indentation, depth, refs));\n  }).join('');\n};\n\nexports.printChildren = printChildren;\n\nvar printText = function printText(text, config) {\n  var contentColor = config.colors.content;\n  return contentColor.open + (0, _escapeHTML.default)(text) + contentColor.close;\n};\n\nexports.printText = printText;\n\nvar printComment = function printComment(comment, config) {\n  var commentColor = config.colors.comment;\n  return commentColor.open + '<!--' + (0, _escapeHTML.default)(comment) + '-->' + commentColor.close;\n}; // Separate the functions to format props, children, and element,\n// so a plugin could override a particular function, if needed.\n// Too bad, so sad: the traditional (but unnecessary) space\n// in a self-closing tagColor requires a second test of printedProps.\n\n\nexports.printComment = printComment;\n\nvar printElement = function printElement(type, printedProps, printedChildren, config, indentation) {\n  var tagColor = config.colors.tag;\n  return tagColor.open + '<' + type + (printedProps && tagColor.close + printedProps + config.spacingOuter + indentation + tagColor.open) + (printedChildren ? '>' + tagColor.close + printedChildren + config.spacingOuter + indentation + tagColor.open + '</' + type : (printedProps && !config.min ? '' : ' ') + '/') + '>' + tagColor.close;\n};\n\nexports.printElement = printElement;\n\nvar printElementAsLeaf = function printElementAsLeaf(type, config) {\n  var tagColor = config.colors.tag;\n  return tagColor.open + '<' + type + tagColor.close + ' …' + tagColor.open + ' />' + tagColor.close;\n};\n\nexports.printElementAsLeaf = printElementAsLeaf;\n\n/***/ })\n\n/******/ });\n});\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///./node_modules/pretty-format/build-es5/index.js?");

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// shim for using process in browser\nvar process = module.exports = {};\n\n// cached from whatever global is present so that test runners that stub it\n// don't break things.  But we need to wrap it in a try catch in case it is\n// wrapped in strict mode code which doesn't define any globals.  It's inside a\n// function because try/catches deoptimize in certain engines.\n\nvar cachedSetTimeout;\nvar cachedClearTimeout;\n\nfunction defaultSetTimout() {\n    throw new Error('setTimeout has not been defined');\n}\nfunction defaultClearTimeout () {\n    throw new Error('clearTimeout has not been defined');\n}\n(function () {\n    try {\n        if (typeof setTimeout === 'function') {\n            cachedSetTimeout = setTimeout;\n        } else {\n            cachedSetTimeout = defaultSetTimout;\n        }\n    } catch (e) {\n        cachedSetTimeout = defaultSetTimout;\n    }\n    try {\n        if (typeof clearTimeout === 'function') {\n            cachedClearTimeout = clearTimeout;\n        } else {\n            cachedClearTimeout = defaultClearTimeout;\n        }\n    } catch (e) {\n        cachedClearTimeout = defaultClearTimeout;\n    }\n} ())\nfunction runTimeout(fun) {\n    if (cachedSetTimeout === setTimeout) {\n        //normal enviroments in sane situations\n        return setTimeout(fun, 0);\n    }\n    // if setTimeout wasn't available but was latter defined\n    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {\n        cachedSetTimeout = setTimeout;\n        return setTimeout(fun, 0);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedSetTimeout(fun, 0);\n    } catch(e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally\n            return cachedSetTimeout.call(null, fun, 0);\n        } catch(e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error\n            return cachedSetTimeout.call(this, fun, 0);\n        }\n    }\n\n\n}\nfunction runClearTimeout(marker) {\n    if (cachedClearTimeout === clearTimeout) {\n        //normal enviroments in sane situations\n        return clearTimeout(marker);\n    }\n    // if clearTimeout wasn't available but was latter defined\n    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {\n        cachedClearTimeout = clearTimeout;\n        return clearTimeout(marker);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedClearTimeout(marker);\n    } catch (e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally\n            return cachedClearTimeout.call(null, marker);\n        } catch (e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.\n            // Some versions of I.E. have different rules for clearTimeout vs setTimeout\n            return cachedClearTimeout.call(this, marker);\n        }\n    }\n\n\n\n}\nvar queue = [];\nvar draining = false;\nvar currentQueue;\nvar queueIndex = -1;\n\nfunction cleanUpNextTick() {\n    if (!draining || !currentQueue) {\n        return;\n    }\n    draining = false;\n    if (currentQueue.length) {\n        queue = currentQueue.concat(queue);\n    } else {\n        queueIndex = -1;\n    }\n    if (queue.length) {\n        drainQueue();\n    }\n}\n\nfunction drainQueue() {\n    if (draining) {\n        return;\n    }\n    var timeout = runTimeout(cleanUpNextTick);\n    draining = true;\n\n    var len = queue.length;\n    while(len) {\n        currentQueue = queue;\n        queue = [];\n        while (++queueIndex < len) {\n            if (currentQueue) {\n                currentQueue[queueIndex].run();\n            }\n        }\n        queueIndex = -1;\n        len = queue.length;\n    }\n    currentQueue = null;\n    draining = false;\n    runClearTimeout(timeout);\n}\n\nprocess.nextTick = function (fun) {\n    var args = new Array(arguments.length - 1);\n    if (arguments.length > 1) {\n        for (var i = 1; i < arguments.length; i++) {\n            args[i - 1] = arguments[i];\n        }\n    }\n    queue.push(new Item(fun, args));\n    if (queue.length === 1 && !draining) {\n        runTimeout(drainQueue);\n    }\n};\n\n// v8 likes predictible objects\nfunction Item(fun, array) {\n    this.fun = fun;\n    this.array = array;\n}\nItem.prototype.run = function () {\n    this.fun.apply(null, this.array);\n};\nprocess.title = 'browser';\nprocess.browser = true;\nprocess.env = {};\nprocess.argv = [];\nprocess.version = ''; // empty string to avoid regexp issues\nprocess.versions = {};\n\nfunction noop() {}\n\nprocess.on = noop;\nprocess.addListener = noop;\nprocess.once = noop;\nprocess.off = noop;\nprocess.removeListener = noop;\nprocess.removeAllListeners = noop;\nprocess.emit = noop;\nprocess.prependListener = noop;\nprocess.prependOnceListener = noop;\n\nprocess.listeners = function (name) { return [] }\n\nprocess.binding = function (name) {\n    throw new Error('process.binding is not supported');\n};\n\nprocess.cwd = function () { return '/' };\nprocess.chdir = function (dir) {\n    throw new Error('process.chdir is not supported');\n};\nprocess.umask = function() { return 0; };\n\n\n//# sourceURL=webpack:///./node_modules/process/browser.js?");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/**\n * Copyright (c) 2014-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nvar runtime = (function (exports) {\n  \"use strict\";\n\n  var Op = Object.prototype;\n  var hasOwn = Op.hasOwnProperty;\n  var undefined; // More compressible than void 0.\n  var $Symbol = typeof Symbol === \"function\" ? Symbol : {};\n  var iteratorSymbol = $Symbol.iterator || \"@@iterator\";\n  var asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\";\n  var toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\";\n\n  function wrap(innerFn, outerFn, self, tryLocsList) {\n    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.\n    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;\n    var generator = Object.create(protoGenerator.prototype);\n    var context = new Context(tryLocsList || []);\n\n    // The ._invoke method unifies the implementations of the .next,\n    // .throw, and .return methods.\n    generator._invoke = makeInvokeMethod(innerFn, self, context);\n\n    return generator;\n  }\n  exports.wrap = wrap;\n\n  // Try/catch helper to minimize deoptimizations. Returns a completion\n  // record like context.tryEntries[i].completion. This interface could\n  // have been (and was previously) designed to take a closure to be\n  // invoked without arguments, but in all the cases we care about we\n  // already have an existing method we want to call, so there's no need\n  // to create a new function object. We can even get away with assuming\n  // the method takes exactly one argument, since that happens to be true\n  // in every case, so we don't have to touch the arguments object. The\n  // only additional allocation required is the completion record, which\n  // has a stable shape and so hopefully should be cheap to allocate.\n  function tryCatch(fn, obj, arg) {\n    try {\n      return { type: \"normal\", arg: fn.call(obj, arg) };\n    } catch (err) {\n      return { type: \"throw\", arg: err };\n    }\n  }\n\n  var GenStateSuspendedStart = \"suspendedStart\";\n  var GenStateSuspendedYield = \"suspendedYield\";\n  var GenStateExecuting = \"executing\";\n  var GenStateCompleted = \"completed\";\n\n  // Returning this object from the innerFn has the same effect as\n  // breaking out of the dispatch switch statement.\n  var ContinueSentinel = {};\n\n  // Dummy constructor functions that we use as the .constructor and\n  // .constructor.prototype properties for functions that return Generator\n  // objects. For full spec compliance, you may wish to configure your\n  // minifier not to mangle the names of these two functions.\n  function Generator() {}\n  function GeneratorFunction() {}\n  function GeneratorFunctionPrototype() {}\n\n  // This is a polyfill for %IteratorPrototype% for environments that\n  // don't natively support it.\n  var IteratorPrototype = {};\n  IteratorPrototype[iteratorSymbol] = function () {\n    return this;\n  };\n\n  var getProto = Object.getPrototypeOf;\n  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));\n  if (NativeIteratorPrototype &&\n      NativeIteratorPrototype !== Op &&\n      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {\n    // This environment has a native %IteratorPrototype%; use it instead\n    // of the polyfill.\n    IteratorPrototype = NativeIteratorPrototype;\n  }\n\n  var Gp = GeneratorFunctionPrototype.prototype =\n    Generator.prototype = Object.create(IteratorPrototype);\n  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;\n  GeneratorFunctionPrototype.constructor = GeneratorFunction;\n  GeneratorFunctionPrototype[toStringTagSymbol] =\n    GeneratorFunction.displayName = \"GeneratorFunction\";\n\n  // Helper for defining the .next, .throw, and .return methods of the\n  // Iterator interface in terms of a single ._invoke method.\n  function defineIteratorMethods(prototype) {\n    [\"next\", \"throw\", \"return\"].forEach(function(method) {\n      prototype[method] = function(arg) {\n        return this._invoke(method, arg);\n      };\n    });\n  }\n\n  exports.isGeneratorFunction = function(genFun) {\n    var ctor = typeof genFun === \"function\" && genFun.constructor;\n    return ctor\n      ? ctor === GeneratorFunction ||\n        // For the native GeneratorFunction constructor, the best we can\n        // do is to check its .name property.\n        (ctor.displayName || ctor.name) === \"GeneratorFunction\"\n      : false;\n  };\n\n  exports.mark = function(genFun) {\n    if (Object.setPrototypeOf) {\n      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);\n    } else {\n      genFun.__proto__ = GeneratorFunctionPrototype;\n      if (!(toStringTagSymbol in genFun)) {\n        genFun[toStringTagSymbol] = \"GeneratorFunction\";\n      }\n    }\n    genFun.prototype = Object.create(Gp);\n    return genFun;\n  };\n\n  // Within the body of any async function, `await x` is transformed to\n  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test\n  // `hasOwn.call(value, \"__await\")` to determine if the yielded value is\n  // meant to be awaited.\n  exports.awrap = function(arg) {\n    return { __await: arg };\n  };\n\n  function AsyncIterator(generator, PromiseImpl) {\n    function invoke(method, arg, resolve, reject) {\n      var record = tryCatch(generator[method], generator, arg);\n      if (record.type === \"throw\") {\n        reject(record.arg);\n      } else {\n        var result = record.arg;\n        var value = result.value;\n        if (value &&\n            typeof value === \"object\" &&\n            hasOwn.call(value, \"__await\")) {\n          return PromiseImpl.resolve(value.__await).then(function(value) {\n            invoke(\"next\", value, resolve, reject);\n          }, function(err) {\n            invoke(\"throw\", err, resolve, reject);\n          });\n        }\n\n        return PromiseImpl.resolve(value).then(function(unwrapped) {\n          // When a yielded Promise is resolved, its final value becomes\n          // the .value of the Promise<{value,done}> result for the\n          // current iteration.\n          result.value = unwrapped;\n          resolve(result);\n        }, function(error) {\n          // If a rejected Promise was yielded, throw the rejection back\n          // into the async generator function so it can be handled there.\n          return invoke(\"throw\", error, resolve, reject);\n        });\n      }\n    }\n\n    var previousPromise;\n\n    function enqueue(method, arg) {\n      function callInvokeWithMethodAndArg() {\n        return new PromiseImpl(function(resolve, reject) {\n          invoke(method, arg, resolve, reject);\n        });\n      }\n\n      return previousPromise =\n        // If enqueue has been called before, then we want to wait until\n        // all previous Promises have been resolved before calling invoke,\n        // so that results are always delivered in the correct order. If\n        // enqueue has not been called before, then it is important to\n        // call invoke immediately, without waiting on a callback to fire,\n        // so that the async generator function has the opportunity to do\n        // any necessary setup in a predictable way. This predictability\n        // is why the Promise constructor synchronously invokes its\n        // executor callback, and why async functions synchronously\n        // execute code before the first await. Since we implement simple\n        // async functions in terms of async generators, it is especially\n        // important to get this right, even though it requires care.\n        previousPromise ? previousPromise.then(\n          callInvokeWithMethodAndArg,\n          // Avoid propagating failures to Promises returned by later\n          // invocations of the iterator.\n          callInvokeWithMethodAndArg\n        ) : callInvokeWithMethodAndArg();\n    }\n\n    // Define the unified helper method that is used to implement .next,\n    // .throw, and .return (see defineIteratorMethods).\n    this._invoke = enqueue;\n  }\n\n  defineIteratorMethods(AsyncIterator.prototype);\n  AsyncIterator.prototype[asyncIteratorSymbol] = function () {\n    return this;\n  };\n  exports.AsyncIterator = AsyncIterator;\n\n  // Note that simple async functions are implemented on top of\n  // AsyncIterator objects; they just return a Promise for the value of\n  // the final result produced by the iterator.\n  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {\n    if (PromiseImpl === void 0) PromiseImpl = Promise;\n\n    var iter = new AsyncIterator(\n      wrap(innerFn, outerFn, self, tryLocsList),\n      PromiseImpl\n    );\n\n    return exports.isGeneratorFunction(outerFn)\n      ? iter // If outerFn is a generator, return the full iterator.\n      : iter.next().then(function(result) {\n          return result.done ? result.value : iter.next();\n        });\n  };\n\n  function makeInvokeMethod(innerFn, self, context) {\n    var state = GenStateSuspendedStart;\n\n    return function invoke(method, arg) {\n      if (state === GenStateExecuting) {\n        throw new Error(\"Generator is already running\");\n      }\n\n      if (state === GenStateCompleted) {\n        if (method === \"throw\") {\n          throw arg;\n        }\n\n        // Be forgiving, per 25.3.3.3.3 of the spec:\n        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume\n        return doneResult();\n      }\n\n      context.method = method;\n      context.arg = arg;\n\n      while (true) {\n        var delegate = context.delegate;\n        if (delegate) {\n          var delegateResult = maybeInvokeDelegate(delegate, context);\n          if (delegateResult) {\n            if (delegateResult === ContinueSentinel) continue;\n            return delegateResult;\n          }\n        }\n\n        if (context.method === \"next\") {\n          // Setting context._sent for legacy support of Babel's\n          // function.sent implementation.\n          context.sent = context._sent = context.arg;\n\n        } else if (context.method === \"throw\") {\n          if (state === GenStateSuspendedStart) {\n            state = GenStateCompleted;\n            throw context.arg;\n          }\n\n          context.dispatchException(context.arg);\n\n        } else if (context.method === \"return\") {\n          context.abrupt(\"return\", context.arg);\n        }\n\n        state = GenStateExecuting;\n\n        var record = tryCatch(innerFn, self, context);\n        if (record.type === \"normal\") {\n          // If an exception is thrown from innerFn, we leave state ===\n          // GenStateExecuting and loop back for another invocation.\n          state = context.done\n            ? GenStateCompleted\n            : GenStateSuspendedYield;\n\n          if (record.arg === ContinueSentinel) {\n            continue;\n          }\n\n          return {\n            value: record.arg,\n            done: context.done\n          };\n\n        } else if (record.type === \"throw\") {\n          state = GenStateCompleted;\n          // Dispatch the exception by looping back around to the\n          // context.dispatchException(context.arg) call above.\n          context.method = \"throw\";\n          context.arg = record.arg;\n        }\n      }\n    };\n  }\n\n  // Call delegate.iterator[context.method](context.arg) and handle the\n  // result, either by returning a { value, done } result from the\n  // delegate iterator, or by modifying context.method and context.arg,\n  // setting context.delegate to null, and returning the ContinueSentinel.\n  function maybeInvokeDelegate(delegate, context) {\n    var method = delegate.iterator[context.method];\n    if (method === undefined) {\n      // A .throw or .return when the delegate iterator has no .throw\n      // method always terminates the yield* loop.\n      context.delegate = null;\n\n      if (context.method === \"throw\") {\n        // Note: [\"return\"] must be used for ES3 parsing compatibility.\n        if (delegate.iterator[\"return\"]) {\n          // If the delegate iterator has a return method, give it a\n          // chance to clean up.\n          context.method = \"return\";\n          context.arg = undefined;\n          maybeInvokeDelegate(delegate, context);\n\n          if (context.method === \"throw\") {\n            // If maybeInvokeDelegate(context) changed context.method from\n            // \"return\" to \"throw\", let that override the TypeError below.\n            return ContinueSentinel;\n          }\n        }\n\n        context.method = \"throw\";\n        context.arg = new TypeError(\n          \"The iterator does not provide a 'throw' method\");\n      }\n\n      return ContinueSentinel;\n    }\n\n    var record = tryCatch(method, delegate.iterator, context.arg);\n\n    if (record.type === \"throw\") {\n      context.method = \"throw\";\n      context.arg = record.arg;\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    var info = record.arg;\n\n    if (! info) {\n      context.method = \"throw\";\n      context.arg = new TypeError(\"iterator result is not an object\");\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    if (info.done) {\n      // Assign the result of the finished delegate to the temporary\n      // variable specified by delegate.resultName (see delegateYield).\n      context[delegate.resultName] = info.value;\n\n      // Resume execution at the desired location (see delegateYield).\n      context.next = delegate.nextLoc;\n\n      // If context.method was \"throw\" but the delegate handled the\n      // exception, let the outer generator proceed normally. If\n      // context.method was \"next\", forget context.arg since it has been\n      // \"consumed\" by the delegate iterator. If context.method was\n      // \"return\", allow the original .return call to continue in the\n      // outer generator.\n      if (context.method !== \"return\") {\n        context.method = \"next\";\n        context.arg = undefined;\n      }\n\n    } else {\n      // Re-yield the result returned by the delegate method.\n      return info;\n    }\n\n    // The delegate iterator is finished, so forget it and continue with\n    // the outer generator.\n    context.delegate = null;\n    return ContinueSentinel;\n  }\n\n  // Define Generator.prototype.{next,throw,return} in terms of the\n  // unified ._invoke helper method.\n  defineIteratorMethods(Gp);\n\n  Gp[toStringTagSymbol] = \"Generator\";\n\n  // A Generator should always return itself as the iterator object when the\n  // @@iterator function is called on it. Some browsers' implementations of the\n  // iterator prototype chain incorrectly implement this, causing the Generator\n  // object to not be returned from this call. This ensures that doesn't happen.\n  // See https://github.com/facebook/regenerator/issues/274 for more details.\n  Gp[iteratorSymbol] = function() {\n    return this;\n  };\n\n  Gp.toString = function() {\n    return \"[object Generator]\";\n  };\n\n  function pushTryEntry(locs) {\n    var entry = { tryLoc: locs[0] };\n\n    if (1 in locs) {\n      entry.catchLoc = locs[1];\n    }\n\n    if (2 in locs) {\n      entry.finallyLoc = locs[2];\n      entry.afterLoc = locs[3];\n    }\n\n    this.tryEntries.push(entry);\n  }\n\n  function resetTryEntry(entry) {\n    var record = entry.completion || {};\n    record.type = \"normal\";\n    delete record.arg;\n    entry.completion = record;\n  }\n\n  function Context(tryLocsList) {\n    // The root entry object (effectively a try statement without a catch\n    // or a finally block) gives us a place to store values thrown from\n    // locations where there is no enclosing try statement.\n    this.tryEntries = [{ tryLoc: \"root\" }];\n    tryLocsList.forEach(pushTryEntry, this);\n    this.reset(true);\n  }\n\n  exports.keys = function(object) {\n    var keys = [];\n    for (var key in object) {\n      keys.push(key);\n    }\n    keys.reverse();\n\n    // Rather than returning an object with a next method, we keep\n    // things simple and return the next function itself.\n    return function next() {\n      while (keys.length) {\n        var key = keys.pop();\n        if (key in object) {\n          next.value = key;\n          next.done = false;\n          return next;\n        }\n      }\n\n      // To avoid creating an additional object, we just hang the .value\n      // and .done properties off the next function object itself. This\n      // also ensures that the minifier will not anonymize the function.\n      next.done = true;\n      return next;\n    };\n  };\n\n  function values(iterable) {\n    if (iterable) {\n      var iteratorMethod = iterable[iteratorSymbol];\n      if (iteratorMethod) {\n        return iteratorMethod.call(iterable);\n      }\n\n      if (typeof iterable.next === \"function\") {\n        return iterable;\n      }\n\n      if (!isNaN(iterable.length)) {\n        var i = -1, next = function next() {\n          while (++i < iterable.length) {\n            if (hasOwn.call(iterable, i)) {\n              next.value = iterable[i];\n              next.done = false;\n              return next;\n            }\n          }\n\n          next.value = undefined;\n          next.done = true;\n\n          return next;\n        };\n\n        return next.next = next;\n      }\n    }\n\n    // Return an iterator with no values.\n    return { next: doneResult };\n  }\n  exports.values = values;\n\n  function doneResult() {\n    return { value: undefined, done: true };\n  }\n\n  Context.prototype = {\n    constructor: Context,\n\n    reset: function(skipTempReset) {\n      this.prev = 0;\n      this.next = 0;\n      // Resetting context._sent for legacy support of Babel's\n      // function.sent implementation.\n      this.sent = this._sent = undefined;\n      this.done = false;\n      this.delegate = null;\n\n      this.method = \"next\";\n      this.arg = undefined;\n\n      this.tryEntries.forEach(resetTryEntry);\n\n      if (!skipTempReset) {\n        for (var name in this) {\n          // Not sure about the optimal order of these conditions:\n          if (name.charAt(0) === \"t\" &&\n              hasOwn.call(this, name) &&\n              !isNaN(+name.slice(1))) {\n            this[name] = undefined;\n          }\n        }\n      }\n    },\n\n    stop: function() {\n      this.done = true;\n\n      var rootEntry = this.tryEntries[0];\n      var rootRecord = rootEntry.completion;\n      if (rootRecord.type === \"throw\") {\n        throw rootRecord.arg;\n      }\n\n      return this.rval;\n    },\n\n    dispatchException: function(exception) {\n      if (this.done) {\n        throw exception;\n      }\n\n      var context = this;\n      function handle(loc, caught) {\n        record.type = \"throw\";\n        record.arg = exception;\n        context.next = loc;\n\n        if (caught) {\n          // If the dispatched exception was caught by a catch block,\n          // then let that catch block handle the exception normally.\n          context.method = \"next\";\n          context.arg = undefined;\n        }\n\n        return !! caught;\n      }\n\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        var record = entry.completion;\n\n        if (entry.tryLoc === \"root\") {\n          // Exception thrown outside of any try block that could handle\n          // it, so set the completion value of the entire function to\n          // throw the exception.\n          return handle(\"end\");\n        }\n\n        if (entry.tryLoc <= this.prev) {\n          var hasCatch = hasOwn.call(entry, \"catchLoc\");\n          var hasFinally = hasOwn.call(entry, \"finallyLoc\");\n\n          if (hasCatch && hasFinally) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            } else if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n\n          } else if (hasCatch) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            }\n\n          } else if (hasFinally) {\n            if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n\n          } else {\n            throw new Error(\"try statement without catch or finally\");\n          }\n        }\n      }\n    },\n\n    abrupt: function(type, arg) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc <= this.prev &&\n            hasOwn.call(entry, \"finallyLoc\") &&\n            this.prev < entry.finallyLoc) {\n          var finallyEntry = entry;\n          break;\n        }\n      }\n\n      if (finallyEntry &&\n          (type === \"break\" ||\n           type === \"continue\") &&\n          finallyEntry.tryLoc <= arg &&\n          arg <= finallyEntry.finallyLoc) {\n        // Ignore the finally entry if control is not jumping to a\n        // location outside the try/catch block.\n        finallyEntry = null;\n      }\n\n      var record = finallyEntry ? finallyEntry.completion : {};\n      record.type = type;\n      record.arg = arg;\n\n      if (finallyEntry) {\n        this.method = \"next\";\n        this.next = finallyEntry.finallyLoc;\n        return ContinueSentinel;\n      }\n\n      return this.complete(record);\n    },\n\n    complete: function(record, afterLoc) {\n      if (record.type === \"throw\") {\n        throw record.arg;\n      }\n\n      if (record.type === \"break\" ||\n          record.type === \"continue\") {\n        this.next = record.arg;\n      } else if (record.type === \"return\") {\n        this.rval = this.arg = record.arg;\n        this.method = \"return\";\n        this.next = \"end\";\n      } else if (record.type === \"normal\" && afterLoc) {\n        this.next = afterLoc;\n      }\n\n      return ContinueSentinel;\n    },\n\n    finish: function(finallyLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.finallyLoc === finallyLoc) {\n          this.complete(entry.completion, entry.afterLoc);\n          resetTryEntry(entry);\n          return ContinueSentinel;\n        }\n      }\n    },\n\n    \"catch\": function(tryLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc === tryLoc) {\n          var record = entry.completion;\n          if (record.type === \"throw\") {\n            var thrown = record.arg;\n            resetTryEntry(entry);\n          }\n          return thrown;\n        }\n      }\n\n      // The context.catch method must only be called with a location\n      // argument that corresponds to a known catch block.\n      throw new Error(\"illegal catch attempt\");\n    },\n\n    delegateYield: function(iterable, resultName, nextLoc) {\n      this.delegate = {\n        iterator: values(iterable),\n        resultName: resultName,\n        nextLoc: nextLoc\n      };\n\n      if (this.method === \"next\") {\n        // Deliberately forget the last sent value so that we don't\n        // accidentally pass it on to the delegate.\n        this.arg = undefined;\n      }\n\n      return ContinueSentinel;\n    }\n  };\n\n  // Regardless of whether this script is executing as a CommonJS module\n  // or not, return the runtime object so that we can declare the variable\n  // regeneratorRuntime in the outer scope, which allows this module to be\n  // injected easily by `bin/regenerator --include-runtime script.js`.\n  return exports;\n\n}(\n  // If this script is executing as a CommonJS module, use module.exports\n  // as the regeneratorRuntime namespace. Otherwise create a new empty\n  // object. Either way, the resulting object will be used to initialize\n  // the regeneratorRuntime variable at the top of this file.\n   true ? module.exports : undefined\n));\n\ntry {\n  regeneratorRuntime = runtime;\n} catch (accidentalStrictMode) {\n  // This module should not be running in strict mode, so the above\n  // assignment should always work unless something is misconfigured. Just\n  // in case runtime.js accidentally runs in strict mode, we can escape\n  // strict mode using a global Function call. This could conceivably fail\n  // if a Content Security Policy forbids using Function, but in that case\n  // the proper solution is to fix the accidental strict mode problem. If\n  // you've misconfigured your bundler to force strict mode and applied a\n  // CSP to forbid Function, and you're not willing to fix either of those\n  // problems, please detail your unique predicament in a GitHub issue.\n  Function(\"r\", \"regeneratorRuntime = r\")(runtime);\n}\n\n\n//# sourceURL=webpack:///./node_modules/regenerator-runtime/runtime.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: editButton, editButtonRow, actionElements, reportModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"editButton\", function() { return editButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"editButtonRow\", function() { return editButtonRow; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"actionElements\", function() { return actionElements; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reportModal\", function() { return reportModal; });\nconst editButton = 'a[data-tooltip-content=\"Edit\"]';\nconst editButtonRow = \"ul.uiList\";\nconst actionElements = [\"[ajaxify*=rapid_report]\", // Report/Remove Tag\n'[ajaxify*=\"/delete\"]', // Remove Reaction\n'[ajaxify*=\"action=unlike\"]', // Remove Reaction\n'[ajaxify*=\"action=remove_comment\"]', // Delete\n'[ajaxify*=\"action=hide\"]' // Hidden From Timeline\n];\nconst reportModal = {\n  submitButton: 'button[type=\"submit\"][aria-disabled=\"true\"]'\n};\n\n//# sourceURL=webpack:///./src/constants.js?");

/***/ }),

/***/ "./src/deletePost.js":
/*!***************************!*\
  !*** ./src/deletePost.js ***!
  \***************************/
/*! exports provided: isPost, doDeletePostModalFlow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isPost\", function() { return isPost; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"doDeletePostModalFlow\", function() { return doDeletePostModalFlow; });\n/* harmony import */ var _testing_library_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @testing-library/dom */ \"./node_modules/@testing-library/dom/dist/@testing-library/dom.esm.js\");\n\nconst defaultTimeout = {\n  timeout: 10000\n};\nfunction isPost(action) {\n  return action.getAttribute(\"ajaxify\").indexOf(\"/delete\") !== -1;\n}\nasync function doDeletePostModalFlow() {\n  await Object(_testing_library_dom__WEBPACK_IMPORTED_MODULE_0__[\"waitForElement\"])(() => _testing_library_dom__WEBPACK_IMPORTED_MODULE_0__[\"screen\"].getByText(\"Delete Post?\"), defaultTimeout);\n  const deleteButton = await Object(_testing_library_dom__WEBPACK_IMPORTED_MODULE_0__[\"waitForElement\"])(() => document.querySelector('form[action*=\"delete\"] button[type=\"submit\"]'), defaultTimeout);\n  deleteButton.click();\n  return true;\n}\n\n//# sourceURL=webpack:///./src/deletePost.js?");

/***/ }),

/***/ "./src/deleteTag.js":
/*!**************************!*\
  !*** ./src/deleteTag.js ***!
  \**************************/
/*! exports provided: isTag, doRemoveTagModalFlow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isTag\", function() { return isTag; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"doRemoveTagModalFlow\", function() { return doRemoveTagModalFlow; });\n/* harmony import */ var _testing_library_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @testing-library/dom */ \"./node_modules/@testing-library/dom/dist/@testing-library/dom.esm.js\");\n\nconst defaultTimeout = {\n  timeout: 10000\n};\nfunction isTag() {}\nasync function doRemoveTagModalFlow() {\n  try {\n    await Object(_testing_library_dom__WEBPACK_IMPORTED_MODULE_0__[\"waitForElement\"])(() => _testing_library_dom__WEBPACK_IMPORTED_MODULE_0__[\"screen\"].getByText(\"Find Support or Report Comment\"), defaultTimeout);\n  } catch (e) {\n    await Object(_testing_library_dom__WEBPACK_IMPORTED_MODULE_0__[\"waitForElement\"])(() => _testing_library_dom__WEBPACK_IMPORTED_MODULE_0__[\"screen\"].getByText(\"Please select a problem to continue\"), defaultTimeout);\n  }\n\n  const spamButton = await Object(_testing_library_dom__WEBPACK_IMPORTED_MODULE_0__[\"waitForElement\"])(() => _testing_library_dom__WEBPACK_IMPORTED_MODULE_0__[\"screen\"].getByText(\"Spam\"), defaultTimeout);\n  spamButton.closest(\"button\").click();\n  const nextButton = await Object(_testing_library_dom__WEBPACK_IMPORTED_MODULE_0__[\"waitForElement\"])(() => document.querySelector(\"button[aria-disabled='false']\"), defaultTimeout);\n  nextButton.click();\n  const firstRemoveTagButton = await Object(_testing_library_dom__WEBPACK_IMPORTED_MODULE_0__[\"waitForElement\"])(() => _testing_library_dom__WEBPACK_IMPORTED_MODULE_0__[\"screen\"].getByText(\"Remove tag\"), defaultTimeout);\n  firstRemoveTagButton.closest(\"a\").click();\n  const finalRemoveTagButton = await Object(_testing_library_dom__WEBPACK_IMPORTED_MODULE_0__[\"waitForElement\"])(() => _testing_library_dom__WEBPACK_IMPORTED_MODULE_0__[\"screen\"].getByText(\"Remove tag\"), defaultTimeout);\n  finalRemoveTagButton.closest(\"button\").click();\n\n  try {\n    const successRemoveTag = await Object(_testing_library_dom__WEBPACK_IMPORTED_MODULE_0__[\"waitForElement\"])(() => _testing_library_dom__WEBPACK_IMPORTED_MODULE_0__[\"screen\"].getByText(\"Tag removed\"), defaultTimeout);\n  } catch (e) {}\n\n  const doneButton = await Object(_testing_library_dom__WEBPACK_IMPORTED_MODULE_0__[\"waitForElement\"])(() => _testing_library_dom__WEBPACK_IMPORTED_MODULE_0__[\"screen\"].getByText(\"Done\"), defaultTimeout);\n  doneButton.click();\n  return true;\n}\n\n//# sourceURL=webpack:///./src/deleteTag.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n/* harmony import */ var _deleteTag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deleteTag */ \"./src/deleteTag.js\");\n/* harmony import */ var _deletePost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deletePost */ \"./src/deletePost.js\");\n\n\n\n\nconst timeout = ms => new Promise(resolve => setTimeout(resolve, ms)); // Hide rows which have no available action\n\n\nconst hideCompletedActivities = () => {\n  // Hide useless headings\n  document.querySelectorAll('div[aria-level=\"4\"],div[aria-level=\"3\"]').forEach(heading => heading.remove());\n  document.querySelectorAll(\"div.fbTimelineSectionTransparent > div > div\").forEach(heading => {\n    heading.style[\"background-color\"] = \"transparent\";\n    heading.style[\"border\"] = \"none\";\n    heading.style[\"padding-bottom\"] = \"0px\";\n  });\n  document.querySelectorAll(_constants__WEBPACK_IMPORTED_MODULE_0__[\"editButtonRow\"]).forEach(row => {\n    const button = row.querySelector(_constants__WEBPACK_IMPORTED_MODULE_0__[\"editButton\"]); // .sx_01e1d8 is the icon for \"hidden from timeline\"\n\n    if (!button || button.querySelector(\".sx_01e1d8\")) {\n      row.remove();\n    }\n  });\n};\n\nconst getIncompleteActivities = () => {\n  hideCompletedActivities();\n  const validRows = Array.from(document.querySelectorAll(_constants__WEBPACK_IMPORTED_MODULE_0__[\"editButtonRow\"]));\n  validRows.forEach(row => row.style.border = \"1px solid blue\");\n  return validRows;\n};\n\nconst loadMoreActivities = () => {\n  const clickForMore = document.querySelector(\"a[ajaxify*=scroll]\");\n  if (clickForMore) clickForMore.click();else window.scrollTo(0, document.body.scrollHeight);\n}; // Find action buttons currently on the screen\n\n\nconst findActions = () => {\n  document.querySelectorAll(_constants__WEBPACK_IMPORTED_MODULE_0__[\"editButton\"]).forEach(a => {\n    // 1. Open the hidden menu to get actionable element\n    a.click(); // Since menu is open, we don't need to be seeing this row\n\n    a.closest(_constants__WEBPACK_IMPORTED_MODULE_0__[\"editButtonRow\"]).remove();\n  });\n};\n\nconst takeAction = async () => {\n  // 2. Find the hidden menu for the previous edit buttons\n  const foundActions = Array.from(document.querySelectorAll(_constants__WEBPACK_IMPORTED_MODULE_0__[\"actionElements\"])); // 3. Start taking the actions for the edits found\n\n  for (const action of foundActions) {\n    action.click(); // Remove it from DOM so we don't run it again\n\n    action.remove(); // Report/remove tag\n\n    if (Object(_deleteTag__WEBPACK_IMPORTED_MODULE_1__[\"isTag\"])(action)) {\n      await Object(_deleteTag__WEBPACK_IMPORTED_MODULE_1__[\"doRemoveTagModalFlow\"])();\n    } // Delete post\n    else if (Object(_deletePost__WEBPACK_IMPORTED_MODULE_2__[\"isPost\"])(action)) {\n        await Object(_deletePost__WEBPACK_IMPORTED_MODULE_2__[\"doDeletePostModalFlow\"])();\n      }\n  }\n};\n\nasync function main() {\n  await timeout(1000);\n\n  if (!getIncompleteActivities().length) {\n    loadMoreActivities();\n  } else {\n    console.log(\"Starting actions on visible activities\"); // Action click exists in DOM\n\n    findActions(); // Now that the row is processed, call the hidden action menu\n\n    await takeAction();\n  }\n\n  main();\n}\n\nif (window.location.href.indexOf(\"allactivity\") !== -1) {\n  chrome.extension.sendMessage({}, () => {\n    const readyStateCheckInterval = setInterval(() => {\n      if (document.readyState === \"complete\") {\n        clearInterval(readyStateCheckInterval);\n        main();\n      }\n    }, 10);\n  });\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });