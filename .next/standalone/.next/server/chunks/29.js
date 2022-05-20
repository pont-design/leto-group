"use strict";
exports.id = 29;
exports.ids = [29];
exports.modules = {

/***/ 1783:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ CustomTextArea)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const CustomTextArea = ({ inputName , placeholder , isFullField , setCurrentFormData , test ,  })=>{
    const textAreaStyles = `${isFullField && "custom-text-area__full-field"} custom-text-area custom-text-area__text ' }`;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
        placeholder: placeholder,
        className: textAreaStyles,
        onChange: (e)=>{
            setCurrentFormData(e.target.value, inputName);
        },
        ...test(inputName)
    });
};


/***/ }),

/***/ 1651:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ CustomTextField)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const CustomTextField = ({ inputName , placeholder , isFullField , setCurrentFormData , type , test , style ,  })=>{
    const customTextFieldStyles = `custom-text-field custom-text-field__text ${isFullField && "custom-text-field__full-field"}`;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
        type: type,
        placeholder: placeholder,
        className: customTextFieldStyles,
        onChange: (e)=>{
            setCurrentFormData(e.target.value, inputName);
        },
        ...test(inputName, {
            required: true
        }),
        style: style
    });
};


/***/ })

};
;