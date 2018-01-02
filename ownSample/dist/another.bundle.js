webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Robot_Robot__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__anotherpage_css__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__anotherpage_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__anotherpage_css__);




console.log(
  __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.join(['Another', 'module', 'loaded!'], ' ')
);

document.write(Object(__WEBPACK_IMPORTED_MODULE_1__Robot_Robot__["a" /* default */])('Affirmative', 'Dave'));

let element = `
    <div class="${__WEBPACK_IMPORTED_MODULE_2__anotherpage_css___default.a.element}">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur laudantium recusandae itaque libero velit minus ex reiciendis veniam. Eligendi modi sint delectus beatae nemo provident ratione maiores, voluptatibus a tempore!</p>
    </div>
`

document.write(element);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const greetings = (text, person) => {
  return `${text}, ${person}. I read you but I', sorry, I'm afraid I can't do that.`;
};

/* harmony default export */ __webpack_exports__["a"] = (greetings);


/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"element":"anotherpage__element__2vKgU"};

/***/ })
],[5]);