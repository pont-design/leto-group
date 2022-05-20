"use strict";
exports.id = 248;
exports.ids = [248];
exports.modules = {

/***/ 9248:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ CustomRadioButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const CustomRadioButton = ({ buttonsLabels , handleValue  })=>{
    const { 0: value , 1: setValue  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(buttonsLabels[buttonsLabels.length - 1]);
    function handleClick(currentValue) {
        handleValue(currentValue);
        setValue(currentValue);
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "form-radio-btn tag-text",
            children: buttonsLabels.map((buttonLabel)=>{
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            id: buttonLabel,
                            type: "radio",
                            name: "radio",
                            value: buttonLabel
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            onClick: ()=>{
                                handleClick(buttonLabel);
                            },
                            htmlFor: buttonLabel,
                            children: buttonLabel
                        })
                    ]
                }, buttonLabel);
            })
        })
    });
};


/***/ })

};
;