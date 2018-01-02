webpackJsonp([1],[
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_calculator__ = __webpack_require__(4);



function component() {
  var element = document.createElement('div');
  var total = Object(__WEBPACK_IMPORTED_MODULE_1__helpers_calculator__["a" /* add */])(1,2);

  element.setAttribute("style", "background-color:#151515;color:#fff;font-size:2em;");
  element.innerHTML = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.join(['Hello', 'webpack', total], ' ');

  return element;
}

document.body.appendChild(component());

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = add;
/* unused harmony export multiply */
function add(first, second) {
  return first + second;
}

function multiply(first, second) {
  return first * second;
}

/***/ })
],[1]);