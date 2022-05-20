"use strict";
exports.id = 565;
exports.ids = [565];
exports.modules = {

/***/ 3565:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ CustomSlider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3015);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_2__]);
swiper_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




// type list = Array<{imgSrc : string, description: JSX}>
const CustomSlider = ({ list , swiperWrapperStyle , swiperItemStyles , slideImgStyle , breakpointsObj , children ,  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "custom-swiper-wrapper ",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
            className: swiperWrapperStyle,
            breakpoints: {
                320: {
                    slidesPerView: breakpointsObj.slidesPerViewXs,
                    spaceBetween: 20
                },
                540: {
                    slidesPerView: breakpointsObj.slidesPerViewSmall ? breakpointsObj.slidesPerViewSmall : breakpointsObj.slidesPerViewXs,
                    spaceBetween: 20
                },
                768: {
                    slidesPerView: breakpointsObj.slidesPerViewMd,
                    spaceBetween: 20
                },
                1280: {
                    slidesPerView: breakpointsObj.slidesPerViewXl,
                    spaceBetween: breakpointsObj.gapxl
                }
            },
            children: children ? children : list.map((slide, idx)=>{
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: swiperItemStyles,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                className: [
                                    "slider-slide-img",
                                    slideImgStyle
                                ].join(" "),
                                src: slide.imgSrc
                            })
                        }),
                        slide.description
                    ]
                }, idx);
            })
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;