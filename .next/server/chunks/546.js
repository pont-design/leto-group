"use strict";
exports.id = 546;
exports.ids = [546];
exports.modules = {

/***/ 7166:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ startPageAnimation),
/* harmony export */   "O": () => (/* binding */ startPageAnimationSecond)
/* harmony export */ });
const startPageAnimation = {
    hidden: {
        y: 80,
        opacity: 0
    },
    visible: (custom = 0)=>({
            y: 0,
            opacity: 1,
            transition: {
                delay: custom * 0.1,
                ease: "easeOut",
                duration: 0.8
            }
        })
};
const startPageAnimationSecond = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            ease: "easeOut",
            duration: 1
        }
    }
};


/***/ }),

/***/ 4930:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ StatisticBlock)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const StatisticBlock = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "technologies-statistic",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "technologies-sales_small technologies-sales_small_sales",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "technologies-sales__heading_small text-numbers",
                        children: "5 000 000 +"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "technologies-sales__description_small text-1",
                        children: "\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u044F\u0438\u0446 \u0432 \u0441\u0443\u0442\u043A\u0438"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "technologies-sales_small technologies-sales_small_inovations",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "technologies-sales__heading_small text-numbers",
                        children: "SANOVO"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "technologies-sales__description_small text-1",
                        children: "\u0417\u0430\u0432\u043E\u0434 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u0442\u0435\u0445\u043D\u0438\u043A\u043E\u0439 \u0434\u0430\u0442\u0441\u043A\u043E\u0439 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "technologies-sales_big technologies-sales_big_area",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "technologies-sales__heading_big text-numbers-big",
                        children: "3000 \u0413\u0430"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "technologies-sales__description_big text-1",
                        children: "\u0420\u0430\u0431\u043E\u0447\u0430\u044F \u043F\u043B\u043E\u0449\u0430\u0434\u044C \u043F\u0440\u0435\u043F\u0440\u0438\u044F\u0442\u0438\u044F"
                    })
                ]
            })
        ]
    });
};


/***/ })

};
;