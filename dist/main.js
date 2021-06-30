/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _validator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validator.js */ \"./src/validator.js\");\n/* harmony import */ var _sudo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sudo.js */ \"./src/sudo.js\");\n\n\n\nconst main=document.getElementById('main');\n\nfor(let i=0; i<9; i++) {\n    let nested=document.createElement('div');\n    nested.setAttribute('id', 'a'+i);\n    main.appendChild(nested);\n}\n\nconst divWithTitle=document.getElementById('a1');\nconst title=document.createElement('p');\ntitle.setAttribute('id', 'title');\ntitle.innerHTML='Sudoku';\ndivWithTitle.appendChild(title);\n\nconst divWithTable=document.getElementById('a4');\nlet count=0;\n\n\nfor(let i=0; i<9;i++) {\n    let div=document.createElement('div');\n    div.setAttribute('class','outer_square');\n    for(let j=0;j<9;j++) {\n        let nestedDiv=document.createElement('div');\n        nestedDiv.setAttribute('class', 'inner_square');\n        let coincidence=parseInt(Math.random()*2);\n        let buf=_sudo_js__WEBPACK_IMPORTED_MODULE_1__.sudo.table[count];\n        if(coincidence===1) {\n            let p=document.createElement('p');\n            p.innerHTML = buf;\n            nestedDiv.appendChild(p);\n        } else {\n            let input=document.createElement('input');\n            input.setAttribute('class', 'num_inp');\n            input.setAttribute('type', 'number');\n            input.setAttribute('min', '1');\n            input.setAttribute('max', '9');\n            nestedDiv.appendChild(input);\n        }\n        count++;\n        div.appendChild(nestedDiv);\n    }\n    divWithTable.appendChild(div);\n};\n\n_sudo_js__WEBPACK_IMPORTED_MODULE_1__.sudo.table.length = 0; /* Make an empty array to check whether table includs incorrect values.\n                          this will be used into submit function. */\n\nconst divWithButton = document.getElementById('a7');\nconst submitButton = document.createElement('button');\nsubmitButton.innerHTML = 'SUBMIT';\ndivWithButton.appendChild(submitButton);\n\nconst innerSquare = document.getElementsByClassName('inner_square');\n\nconst submit = () => {\n    _sudo_js__WEBPACK_IMPORTED_MODULE_1__.sudo.renew(_validator_js__WEBPACK_IMPORTED_MODULE_0__.validator.rows, _validator_js__WEBPACK_IMPORTED_MODULE_0__.validator.columns);\n    _sudo_js__WEBPACK_IMPORTED_MODULE_1__.sudo.renew(_sudo_js__WEBPACK_IMPORTED_MODULE_1__.sudo.table);\n    console.log(_validator_js__WEBPACK_IMPORTED_MODULE_0__.validator.rows, _validator_js__WEBPACK_IMPORTED_MODULE_0__.validator.columns);\n    let cellValue = 0;\n    for(let i = 0; i < 81; i++) {\n        if(innerSquare[i].firstChild.nodeName === 'INPUT') {\n            cellValue = parseInt(innerSquare[i].firstChild.value);\n            if(!cellValue) {\n                alert('Empty cells are not allowed.');\n                return;\n            }\n        } else {\n            cellValue = parseInt(innerSquare[i].firstChild.innerHTML);\n        }\n        if(!_validator_js__WEBPACK_IMPORTED_MODULE_0__.validator.check(_validator_js__WEBPACK_IMPORTED_MODULE_0__.validator.rows, _validator_js__WEBPACK_IMPORTED_MODULE_0__.validator.columns, i, cellValue)) {\n            changeStyle(innerSquare[i].firstChild); console.log('row||col');\n        }\n        if(_sudo_js__WEBPACK_IMPORTED_MODULE_1__.sudo.table.indexOf(cellValue) < 0) {\n            changeStyle(innerSquare[i].firstChild); console.log('table');\n        };\n        _sudo_js__WEBPACK_IMPORTED_MODULE_1__.sudo.table.splice(_sudo_js__WEBPACK_IMPORTED_MODULE_1__.sudo.table.indexOf(cellValue), 1);\n        _sudo_js__WEBPACK_IMPORTED_MODULE_1__.sudo.renew(_sudo_js__WEBPACK_IMPORTED_MODULE_1__.sudo.table);\n    }\n    \n    if(document.getElementsByClassName('changed').length > 0) {\n        alert('Entered incorrect values.');\n        return;\n    }\n    alert('You win!');\n}\n\nconst resetChanges = () => {\n    Array.from(innerSquare).forEach(e => {\n        if(e.firstChild.classList.value === 'changed') {\n            e.firstChild.classList.remove('changed');\n        }\n    });\n}\n\nsubmitButton.addEventListener('click', submit);\ndivWithTable.addEventListener('click', resetChanges);\n\n\nconst changeStyle = (node) => {\n    node.setAttribute('class', 'changed');\n};\n\n//# sourceURL=webpack://web/./src/index.js?");

/***/ }),

/***/ "./src/sudo.js":
/*!*********************!*\
  !*** ./src/sudo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sudo\": () => (/* binding */ sudo)\n/* harmony export */ });\nconst table=[1, 2, 3, 4, 5, 6, 7, 8, 9,\r\n    4, 5, 6, 7, 8, 9, 1, 2, 3,\r\n    7, 8, 9, 1, 2, 3, 4, 5, 6,\r\n    2, 3, 1, 5, 6, 4, 8, 9, 7,\r\n    5, 6, 4, 8, 9, 7, 2, 3, 1,\r\n    8, 9, 7, 2, 3, 1, 5, 6, 4,\r\n    3, 1, 2, 6, 4, 5, 9, 7, 8,\r\n    6, 4, 5, 9, 7, 8, 3, 1, 2,\r\n    9, 7, 8, 3, 1, 2, 6, 4, 5];\r\n\r\n\r\n    const renew = (arr, arr1 = undefined) => {\r\n        if(arr instanceof Array) {\r\n            if(arr.length < 1) {\r\n                for(let i=0; i<9; i++) {\r\n                    arr.push(i+1);\r\n                }\r\n            }\r\n            return;\r\n        }\r\n        for(let i of Object.keys(arr)) {\r\n            arr[i].length = 0;\r\n        }\r\n        for(let i of Object.keys(arr1)) {\r\n            arr1[i].length = 0;\r\n        }\r\n    }\r\n\r\n    const sudo = {\r\n        table: table,\r\n        renew: renew\r\n    }\r\n\r\n\n\n//# sourceURL=webpack://web/./src/sudo.js?");

/***/ }),

/***/ "./src/validator.js":
/*!**************************!*\
  !*** ./src/validator.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"validator\": () => (/* binding */ validator)\n/* harmony export */ });\nconst rows = {\n    r1: [],\n    r2: [],\n    r3: [],\n    r4: [],\n    r5: [],\n    r6: [],\n    r7: [],\n    r8: [],\n    r9: []\n};\n\nconst columns = {\n    c1: [],\n    c2: [],\n    c3: [],\n    c4: [],\n    c5: [],\n    c6: [],\n    c7: [],\n    c8: [],\n    c9: []\n};\n\nconst check = (rows, columns, num, val) => {\n    let validRow = false;\n    let validColumn = false;\n    if([0, 1, 2, 9, 10, 11, 18, 19, 20].includes(num)) {\n        if(rows.r1.includes(val)) {\n            return false;\n        } else {\n            rows.r1.push(val);\n            validRow = true;\n        }\n    }\n    if([3, 4, 5, 12, 13, 14, 21, 22, 23].includes(num)) {\n        if(rows.r2.includes(val)) {\n            return false;\n        } else {\n            rows.r2.push(val);\n            validRow = true;\n        }\n    }\n    if([6, 7, 8, 15, 16, 17, 24, 25, 26].includes(num)) {\n        if(rows.r3.includes(val)) {\n            return false;\n        } else {\n            rows.r3.push(val);\n            validRow = true;\n        }\n    }\n    if([27, 28, 29, 36, 37, 38, 45, 46, 47].includes(num)) {\n        if(rows.r4.includes(val)) {\n            return false;\n        } else {\n            rows.r4.push(val);\n            validRow = true;\n        }\n    }\n    if([30, 31, 32, 39, 40, 41, 48, 49, 50].includes(num)) {\n        if(rows.r5.includes(val)) {\n            return false;\n        } else {\n            rows.r5.push(val);\n            validRow = true;\n        }\n    }\n    if([33, 34, 35, 42, 43, 44, 51, 52, 53].includes(num)) {\n        if(rows.r6.includes(val)) {\n            return false;\n        } else {\n            rows.r6.push(val);\n            validRow = true;\n        }\n    }\n    if([54, 55, 56, 63, 64, 65, 72, 73, 74].includes(num)) {\n        if(rows.r7.includes(val)) {\n            return false;\n        } else {\n            rows.r7.push(val);\n            validRow = true;\n        }\n    }\n    if([57, 58, 59, 66, 67, 68, 75, 76, 77].includes(num)) {\n        if(rows.r8.includes(val)) {\n            return false;\n        } else {\n            rows.r8.push(val);\n            validRow = true;\n        }\n    }\n    if([60, 61, 62, 69, 70, 71, 78, 79, 80].includes(num)) {\n        if(rows.r9.includes(val)) {\n            return false;\n        } else {\n            rows.r9.push(val);\n            validRow = true;\n        }\n    }\n    if([0, 3, 6, 27, 30, 33, 54, 57, 60].includes(num)) {\n        if(columns.c1.includes(val)) {\n            return false;\n        } else {\n            columns.c1.push(val);\n            validColumn = true;\n        }\n    }\n    if([1, 4, 7, 28, 31, 34, 55, 58, 61].includes(num)) {\n        if(columns.c2.includes(val)) {\n            return false;\n        } else {\n            columns.c2.push(val);\n            validColumn = true;\n        }\n    }\n    if([2, 5, 8, 29, 32, 35, 56, 59, 62].includes(num)) {\n        if(columns.c3.includes(val)) {\n            return false;\n        } else {\n            columns.c3.push(val);\n            validColumn = true;\n        }\n    }\n    if([9, 12, 15, 36, 39, 42, 63, 66, 69].includes(num)) {\n        if(columns.c4.includes(val)) {\n            return false;\n        } else {\n            columns.c4.push(val);\n            validColumn = true;\n        }\n    }\n    if([10, 13, 16, 37, 40, 43, 64, 67, 70].includes(num)) {\n        if(columns.c5.includes(val)) {\n            return false;\n        } else {\n            columns.c5.push(val);\n            validColumn = true;\n        }\n    }\n    if([11, 14, 17, 38, 41, 44, 65, 68, 71].includes(num)) {\n        if(columns.c6.includes(val)) {\n            return false;\n        } else {\n            columns.c6.push(val);\n            validColumn = true;\n        }\n    }\n    if([18, 21, 24, 45, 48, 51, 72, 75, 78].includes(num)) {\n        if(columns.c7.includes(val)) {\n            return false;\n        } else {\n            columns.c7.push(val);\n            validColumn = true;\n        }\n    }\n    if([19, 22, 25, 46, 49, 52, 73, 76, 79].includes(num)) {\n        if(columns.c8.includes(val)) {\n            return false;\n        } else {\n            columns.c8.push(val);\n            validColumn = true;\n        }\n    }\n    if([20, 23, 26, 47, 50, 53, 74, 77, 80].includes(num)) {\n        if(columns.c9.includes(val)) {\n            return false;\n        } else {\n            columns.c9.push(val);\n            validColumn = true;\n        }\n    }\n    return validRow && validColumn;\n}\n\nconst validator = {\n    check: check,\n    rows: rows,\n    columns: columns\n};\n\n\n\n//# sourceURL=webpack://web/./src/validator.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;