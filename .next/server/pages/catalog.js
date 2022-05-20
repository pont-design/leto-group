"use strict";
(() => {
var exports = {};
exports.id = 65;
exports.ids = [65,888];
exports.modules = {

/***/ 2349:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "n": () => (/* binding */ CustomFilters)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/UI/CustomRadioButton/CustomRadioButton.js
var CustomRadioButton = __webpack_require__(9248);
;// CONCATENATED MODULE: ./components/UI/customDropDown/CustomDropDown.js



const CustomDropDown = ({ label , buttonsLabels , filterValue , setFilterValue , onClickOutside ,  })=>{
    const { 0: isOpen , 1: setIsOpen  } = (0,external_react_.useState)(false);
    const ref = (0,external_react_.useRef)(null);
    const closeDropDown = ()=>{
        setIsOpen(false);
    };
    (0,external_react_.useEffect)(()=>{
        const handleClickOutside = (event)=>{
            if (!ref.current.contains(event.target)) {
                closeDropDown();
            }
        };
        document.addEventListener("click", handleClickOutside, true);
        return ()=>{
            document.removeEventListener("click", handleClickOutside, true);
        };
    }, [
        onClickOutside
    ]);
    const handleRadioValue = (value)=>{
        setFilterValue({
            ...filterValue,
            [label]: value
        });
    };
    const arrowImg = /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        width: "12",
        height: "8",
        viewBox: "0 0 12 8",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M1.42 0.589965L6 5.16997L10.59 0.589966L12 1.99997L6 7.99997L-6.16331e-08 1.99997L1.42 0.589965Z",
            fill: "black"
        })
    });
    const dropDownStatusStyle = isOpen ? "drop-down__button_open" : "drop-down__button_close";
    const arrowClasses = isOpen ? "dropdown__label_up" : "dropdown__label_down";
    const classesDropDownCustomRadioButton = isOpen ? "custom-radio-button_open" : "custom-radio-button_close";
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        ref: ref,
        className: "dropdown__wrapper",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                onClick: ()=>setIsOpen(!isOpen)
                ,
                className: `drop-down__button ${dropDownStatusStyle}`,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: `d-flex dropdown__label ${arrowClasses}`,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "tag-text dropdown__text",
                            children: label
                        }),
                        arrowImg
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "drop-down__custmo-radio-wrapper",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: `drop-down__custom-radio ${classesDropDownCustomRadioButton}`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(CustomRadioButton/* CustomRadioButton */.P, {
                        buttonsLabels: buttonsLabels,
                        handleValue: handleRadioValue
                    })
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./assets/mockFilters.js
const filters = [
    {
        title: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F",
        categories: [
            "\u0411\u0435\u043B\u043E\u043A",
            "\u0416\u0435\u043B\u0442\u043E\u043A",
            "\u041C\u0435\u043B\u0430\u043D\u0436"
        ]
    },
    {
        title: "\u041A\u043E\u043D\u0441\u0438\u0441\u0442\u0435\u043D\u0446\u0438\u044F",
        categories: [
            "\u0421\u0443\u0445\u043E\u0439",
            "\u0416\u0438\u0434\u043A\u0438\u0439"
        ]
    }, 
];

;// CONCATENATED MODULE: ./utils/amountDeclination.js
const amountDeclination = (value, words)=>{
    value = Math.abs(value) % 100;
    const num = value % 10;
    if (value > 10 && value < 20) return words[2];
    if (num > 1 && num < 5) return words[1];
    if (num == 1) return words[0];
    return words[2];
};

;// CONCATENATED MODULE: ./components/UI/customFilters/CustomFilters.js





const CustomFilters = ({ productWordsDeclination , filterValue , setFilterValue , filteredValue ,  })=>{
    const filtersElems = filters.map((el)=>/*#__PURE__*/ jsx_runtime_.jsx(CustomDropDown, {
            label: el.title,
            buttonsLabels: el.categories,
            filterValue: filterValue,
            setFilterValue: setFilterValue
        }, el.title)
    );
    const getAmountDeclination = (words)=>{
        return `${words.length} ${amountDeclination(words.length, productWordsDeclination)}`;
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "filters-container",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "test2",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "test3",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "filter-container__filters",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "tag-text",
                                children: "\u0424\u0438\u043B\u044C\u0442\u0440\u044B"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "filter-container-swiper-quality",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "test1",
                                    children: filtersElems
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "tag-text filter-container__amount",
                children: getAmountDeclination(filteredValue)
            })
        ]
    });
};


/***/ }),

/***/ 7741:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (/* binding */ Catalog)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4466);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Service_CMSAPI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2532);
/* harmony import */ var _Service_CMSAPIHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4742);
/* harmony import */ var _components_UI_customFilters_CustomFilters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2349);
/* harmony import */ var _components_BaseCard_BaseCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6362);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1664);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8484);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6197);
/* harmony import */ var _utils_translitGenerator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3319);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_app__WEBPACK_IMPORTED_MODULE_8__, framer_motion__WEBPACK_IMPORTED_MODULE_9__]);
([_app__WEBPACK_IMPORTED_MODULE_8__, framer_motion__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const getStaticProps = async ()=>{
    const res = await _Service_CMSAPI__WEBPACK_IMPORTED_MODULE_3__/* .StrapiServiceInstance.getProducts */ .k.getProducts();
    return {
        props: {
            items: res.data
        },
        revalidate: _Service_CMSAPI__WEBPACK_IMPORTED_MODULE_3__/* .StrapiServiceInstance.timeToRebuild */ .k.timeToRebuild
    };
};
function Catalog({ items  }) {
    const filtersValueController = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_app__WEBPACK_IMPORTED_MODULE_8__.FiltersValueContext);
    const productWordsDeclination = [
        "\u043F\u0440\u043E\u0434\u0443\u043A\u0442",
        "\u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430",
        "\u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432"
    ];
    const createdCatalog = _Service_CMSAPIHandler__WEBPACK_IMPORTED_MODULE_4__/* .StrapiHandlerInstance.handleCatalog */ .p.handleCatalog(items);
    const { 0: inProp , 1: setInProp  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const downloadArrow = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        className: "catalog-page__download-arrow",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M5 20H19V18H5V20ZM19 9H15V3H9V9H5L12 16L19 9Z"
        })
    });
    const filterProducts = ()=>{
        const filteredCatalog = [
            ...createdCatalog
        ];
        const appliedFilters = Object.entries(filtersValueController.filterValue);
        for(let i = 0; i < appliedFilters.length; i++){
            const filterKey = [
                appliedFilters[i][0]
            ];
            if (filtersValueController.filterValue[filterKey]) {
                filteredCatalog = filteredCatalog.filter((el)=>el[filterKey] === filtersValueController.filterValue[filterKey]
                );
            }
        }
        return filteredCatalog;
    };
    const filteredValues = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>filterProducts()
    , [
        productWordsDeclination,
        filtersValueController.filterValue
    ]);
    const catalogContent = filterProducts().length !== 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_2__.TransitionGroup, {
        className: "catalog-page__products-list",
        children: filteredValues.map((el)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_2__.CSSTransition, {
                in: inProp,
                timeout: 300,
                classNames: "filter-transition",
                unmountOnExit: true,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_7__["default"], {
                    href: `/productCard/${(0,_utils_translitGenerator__WEBPACK_IMPORTED_MODULE_10__/* .translitRuEn */ .m)(el.name)}-${el.id}`,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_BaseCard_BaseCard__WEBPACK_IMPORTED_MODULE_6__/* .BaseCard */ .b, {
                            img: el.image,
                            name: el.name,
                            gost: el.gost,
                            imgStyles: "catalog-page__products-item-img"
                        })
                    })
                })
            }, el.id)
        )
    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "catalog-page__products-not-found",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
            children: "\u041F\u043E \u0432\u0430\u0448\u0435\u043C\u0443 \u0437\u0430\u043F\u0440\u043E\u0441\u0443 \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E"
        })
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        },
        transition: {
            duration: 0.3
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
            className: "catalog-page container",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "catalog-page__heading",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            children: "\u041F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u044F"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                            className: "catalog-page__download-link btn-link",
                            children: [
                                downloadArrow,
                                " \u0421\u043A\u0430\u0447\u0430\u0442\u044C \u043A\u0430\u0442\u0430\u043B\u043E\u0433"
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_UI_customFilters_CustomFilters__WEBPACK_IMPORTED_MODULE_5__/* .CustomFilters */ .n, {
                    productWordsDeclination: productWordsDeclination,
                    filterValue: filtersValueController.filterValue,
                    filteredValue: filteredValues,
                    setFilterValue: filtersValueController.setFilterValue
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AddChosenFilter, {
                    inProp: inProp,
                    filterValue: filtersValueController.filterValue,
                    setInProp: setInProp,
                    setFilterValue: filtersValueController.setFilterValue
                }),
                catalogContent
            ]
        })
    });
};
const AddChosenFilter = ({ // TODO: separate component
inProp , filterValue , setInProp , setFilterValue ,  })=>{
    const removeFilterImg = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M8.97398 8.00016L12.6673 11.6935V12.6668H11.694L8.00065 8.9735L4.30732 12.6668H3.33398V11.6935L7.02732 8.00016L3.33398 4.30683V3.3335H4.30732L8.00065 7.02683L11.694 3.3335H12.6673V4.30683L8.97398 8.00016Z",
            fill: "#18181B"
        })
    });
    const removeFilter = (label)=>{
        setFilterValue({
            ...filterValue,
            [label]: ""
        });
        setInProp(false);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_2__.TransitionGroup, {
        className: "catalog-page__chosen-filters-list",
        children: Object.entries(filterValue).map((el)=>el[1] && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_2__.CSSTransition, {
                in: inProp,
                timeout: 300,
                classNames: "filter-transition",
                unmountOnExit: true,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    onClick: ()=>removeFilter(el[0])
                    ,
                    className: "catalog-page__chosen-filter",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "tag-text",
                            children: el[1]
                        }),
                        removeFilterImg
                    ]
                })
            }, el[0])
        )
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 4241:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/routing-items.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 580:
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ 7104:
/***/ ((module) => {

module.exports = require("qs");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 4466:
/***/ ((module) => {

module.exports = require("react-transition-group");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ }),

/***/ 5641:
/***/ ((module) => {

module.exports = import("react-hook-form");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [895,664,648,29,115,362,248], () => (__webpack_exec__(7741)));
module.exports = __webpack_exports__;

})();