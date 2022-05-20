"use strict";
(() => {
var exports = {};
exports.id = 330;
exports.ids = [330,888];
exports.modules = {

/***/ 5552:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ CustomBreadCrumb)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var _Service_CMSAPIHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4742);
/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8484);
/* harmony import */ var _utils_removeFilterSettings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(104);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pages_app__WEBPACK_IMPORTED_MODULE_4__]);
_pages_app__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const CustomBreadCrumb = ({ category , consistency  })=>{
    const filtersValueController = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_pages_app__WEBPACK_IMPORTED_MODULE_4__.FiltersValueContext);
    const categoryAndConsistency = `${_Service_CMSAPIHandler__WEBPACK_IMPORTED_MODULE_3__/* .StrapiHandlerInstance.translateCategory */ .p.translateCategory(category)} 
  ${_Service_CMSAPIHandler__WEBPACK_IMPORTED_MODULE_3__/* .StrapiHandlerInstance.translateConsistency */ .p.translateConsistency(consistency)}`;
    const translatedCategory = _Service_CMSAPIHandler__WEBPACK_IMPORTED_MODULE_3__/* .StrapiHandlerInstance.translateCategory */ .p.translateCategory(category);
    const deleteCategories = ()=>{
        filtersValueController.setFilterValue((0,_utils_removeFilterSettings__WEBPACK_IMPORTED_MODULE_5__/* .removeFilterSettings */ .p)(filtersValueController.filterValue));
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "custom-breadcrumb-wrapper",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                href: "/catalog",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    onClick: deleteCategories,
                    className: "custom-breadcrumb-wrapper__link link-text",
                    children: "\u041A\u0430\u0442\u0430\u043B\u043E\u0433"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "custom-breadcrumb-wrapper__link link-text",
                children: "/"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                href: "/catalog",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    className: "custom-breadcrumb-wrapper__link link-text",
                    children: translatedCategory
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "custom-breadcrumb-wrapper__link link-text",
                children: "/"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                href: "/catalog",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    className: "custom-breadcrumb-wrapper__link_active link-text",
                    children: categoryAndConsistency
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3393:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ CustomAccordion)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


// type accordionList = Array<{title : string, content: string}>
const CustomAccordion = ({ accordionList  })=>{
    const { 0: blockOpenStatus , 1: setBlockOpenStatus  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const { 0: isActive , 1: setIsActive  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const initialBlockStatuses = {};
        accordionList.forEach((_, index)=>{
            initialBlockStatuses[`block${index}`] = false;
        });
        setBlockOpenStatus(initialBlockStatuses);
    }, [
        accordionList
    ]);
    const toggle = (index)=>()=>{
            setBlockOpenStatus({
                ...blockOpenStatus,
                [`block${index}`]: !blockOpenStatus[`block${index}`]
            });
            setIsActive(!isActive);
        }
    ;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "accordions-pure-wrapper",
        children: accordionList.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AccordionTab, {
                index: index,
                title: item.title,
                blockOpenStatus: blockOpenStatus,
                toggle: toggle(index + 1),
                content: item.desc
            }, index)
        )
    });
};
const AccordionTab = ({ index , title , blockOpenStatus , toggle , content  })=>{
    const { 0: isActive , 1: setIsActive  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const toggleCurrentTab = ()=>{
        toggle();
        setIsActive(!isActive);
    };
    const arrow = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        width: "11",
        height: "16",
        viewBox: "0 0 11 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M0.453125 14.1067L6.55979 8L0.453125 1.88L2.33312 0L10.3331 8L2.33312 16L0.453125 14.1067Z"
        })
    });
    const classOfArrow = isActive ? "accordion__arrow-container accordion-arrow_open" : "accordion__arrow-container accordion-arrow_close";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "accordion-wrapper",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "accordion-tab-wrapper",
                onClick: toggleCurrentTab,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                        className: "accordion__title",
                        children: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: classOfArrow,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "arrow-container",
                            children: arrow
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: blockOpenStatus[`block${index + 1}`] ? "accordion-content is-opened" : "accordion-content",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    className: "text-1",
                    children: [
                        " ",
                        content,
                        " "
                    ]
                })
            })
        ]
    }, index);
};


/***/ }),

/***/ 9168:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (/* binding */ productCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3015);
/* harmony import */ var _Service_CMSAPI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2532);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6197);
/* harmony import */ var _components_UI_CustomAccordion_CustomAccordion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3393);
/* harmony import */ var _components_UI_customButton_CustomButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6650);
/* harmony import */ var _components_UI_CustomRadioButton_CustomRadioButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9248);
/* harmony import */ var _components_BaseCard_BaseCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6362);
/* harmony import */ var _components_UI_customSlider_CustomSlider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3565);
/* harmony import */ var _components_UI_CustomModal_CustomModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7334);
/* harmony import */ var _components_UI_CustomForm_CustomForm__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2976);
/* harmony import */ var _components_Breadcrumbs_CustomBreadCrumb__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5552);
/* harmony import */ var _utils_deleteAllSymbolsExpectNumbers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5305);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_3__, framer_motion__WEBPACK_IMPORTED_MODULE_5__, _components_UI_customSlider_CustomSlider__WEBPACK_IMPORTED_MODULE_10__, _components_UI_CustomForm_CustomForm__WEBPACK_IMPORTED_MODULE_12__, _components_Breadcrumbs_CustomBreadCrumb__WEBPACK_IMPORTED_MODULE_13__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_3__, framer_motion__WEBPACK_IMPORTED_MODULE_5__, _components_UI_customSlider_CustomSlider__WEBPACK_IMPORTED_MODULE_10__, _components_UI_CustomForm_CustomForm__WEBPACK_IMPORTED_MODULE_12__, _components_Breadcrumbs_CustomBreadCrumb__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















async function getStaticPaths() {
    const paths = await _Service_CMSAPI__WEBPACK_IMPORTED_MODULE_4__/* .StrapiServiceInstance.getAllIds */ .k.getAllIds("productCard");
    return {
        paths,
        fallback: false
    };
}
const getStaticProps = async (context)=>{
    const currentUrl = context.params;
    const currentProduct = await _Service_CMSAPI__WEBPACK_IMPORTED_MODULE_4__/* .StrapiServiceInstance.getProduct */ .k.getProduct((0,_utils_deleteAllSymbolsExpectNumbers__WEBPACK_IMPORTED_MODULE_14__/* .deleteAllSymbolsExpectNumbers */ .A)(currentUrl.productCard));
    let similarProducts = await _Service_CMSAPI__WEBPACK_IMPORTED_MODULE_4__/* .StrapiServiceInstance.getSimilarProducts */ .k.getSimilarProducts(currentProduct.attributes.category);
    const { name , structure , document , description , worth , storage_condition , category , consistency , other_info ,  } = currentProduct.attributes;
    const mediumImageUrl = currentProduct.attributes.img.data.attributes.url;
    similarProducts = similarProducts.filter((similarProduct)=>similarProduct.attributes.name !== name
    );
    similarProducts = similarProducts.map((similarProduct)=>{
        return {
            id: similarProduct.id,
            gost: similarProduct.attributes.document,
            name: similarProduct.attributes.name,
            src: similarProduct.attributes.img.data.attributes.url
        };
    });
    return {
        props: {
            name,
            structure,
            description,
            worth,
            storage_condition,
            mediumImageUrl,
            document,
            similarProducts,
            category,
            consistency,
            other_info
        },
        revalidate: _Service_CMSAPI__WEBPACK_IMPORTED_MODULE_4__/* .StrapiServiceInstance.timeToRebuild */ .k.timeToRebuild
    };
};
function productCard({ name , document , structure , description , worth , storage_condition , mediumImageUrl , similarProducts , category , consistency , other_info ,  }) {
    const { 0: modalActive , 1: setModalActive  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: volumeValue , 1: setVolumeValue  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    similarProducts = similarProducts.slice(0, 3);
    function addParametrs() {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "product-card__parametrs-table",
            children: other_info.map((el)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "product-card__parametrs-item",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "product-card__parametr-name text-1",
                            children: el.name
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "product-card__parametr-desc text-1",
                            children: el.value
                        })
                    ]
                }, el.name)
            )
        });
    }
    const similarSliderBreakPoint = {
        gapxl: 20,
        slidesPerViewXl: 3.5,
        slidesPerViewMd: 2.5,
        slidesPerViewXs: 1.2
    };
    const productCardAccordionContent = [
        {
            title: "\u0421\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430",
            desc: structure
        },
        {
            title: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",
            desc: description
        },
        {
            title: "\u0425\u0440\u0430\u043D\u0435\u043D\u0438\u0435",
            desc: storage_condition
        }, 
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
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
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "product-card-breadcrumbs-container",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Breadcrumbs_CustomBreadCrumb__WEBPACK_IMPORTED_MODULE_13__/* .CustomBreadCrumb */ .u, {
                        category: category,
                        consistency: consistency
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: "product-card container",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "product-card__main-info",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "product-card__image-block",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    className: "product-card__image",
                                    src: `${_Service_CMSAPI__WEBPACK_IMPORTED_MODULE_4__/* .StrapiServiceInstance.baseURL */ .k.baseURL}${mediumImageUrl}`,
                                    alt: name
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "product-card__text-info",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "product-card__gost card-caption",
                                        children: document
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                        className: "product-card__product-name",
                                        children: name
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "product-card__product-desc text-1",
                                        children: worth
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "product-card__voluem-options",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "caption-2 product-card__voluem-text",
                                                children: "\u041E\u0431\u044A\u0451\u043C"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_UI_CustomRadioButton_CustomRadioButton__WEBPACK_IMPORTED_MODULE_8__/* .CustomRadioButton */ .P, {
                                                handleValue: setVolumeValue,
                                                buttonsLabels: [
                                                    "5 \u043B.",
                                                    "10 \u043B.",
                                                    "25 \u043B."
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_UI_customButton_CustomButton__WEBPACK_IMPORTED_MODULE_7__/* .CustomButton */ .o, {
                                        onClick: ()=>{
                                            setModalActive(true);
                                        },
                                        label: "\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "product-card__accordion",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_UI_CustomAccordion_CustomAccordion__WEBPACK_IMPORTED_MODULE_6__/* .CustomAccordion */ .G, {
                                            accordionList: productCardAccordionContent
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "product-card__parametrs",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                children: "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u0438"
                            }),
                            addParametrs()
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "product-card__similar",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                children: "\u041F\u043E\u0445\u043E\u0436\u0438\u0435 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u044B"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "product-card__similar-list",
                                children: similarProducts.map((el)=>{
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                            href: `/productCard/${el.id}`,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_BaseCard_BaseCard__WEBPACK_IMPORTED_MODULE_9__/* .BaseCard */ .b, {
                                                    img: `${_Service_CMSAPI__WEBPACK_IMPORTED_MODULE_4__/* .StrapiServiceInstance.baseURL */ .k.baseURL}${el.src}`,
                                                    name: el.name,
                                                    gost: el.gost,
                                                    imgStyles: "product-card__similar-item-img"
                                                }, el.id)
                                            })
                                        })
                                    });
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "product-card__similar-slider",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_UI_customSlider_CustomSlider__WEBPACK_IMPORTED_MODULE_10__/* .CustomSlider */ .a, {
                    swiperWrapperStyle: "",
                    swiperItemStyles: "",
                    slideImgStyle: "",
                    breakpointsObj: similarSliderBreakPoint,
                    children: similarProducts.map((el)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                href: `/productCard/${el.id}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_BaseCard_BaseCard__WEBPACK_IMPORTED_MODULE_9__/* .BaseCard */ .b, {
                                        img: `${_Service_CMSAPI__WEBPACK_IMPORTED_MODULE_4__/* .StrapiServiceInstance.baseURL */ .k.baseURL}${el.src}`,
                                        name: el.name,
                                        gost: el.gost,
                                        imgStyles: "product-card__similar-item-img"
                                    })
                                })
                            })
                        }, el.id)
                    )
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_UI_CustomModal_CustomModal__WEBPACK_IMPORTED_MODULE_11__/* .CustomModal */ .P, {
                active: modalActive,
                setActive: setModalActive,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        children: "\u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0437\u0430\u044F\u0432\u043A\u0443"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-1",
                        children: "\u0412 \u0431\u043B\u0438\u0436\u0430\u0439\u0449\u0435\u0435 \u0432\u0440\u0435\u043C\u044F \u043D\u0430\u0448 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u0441\u0432\u044F\u0436\u0435\u0442\u0441\u044F \u0441 \u0412\u0430\u043C\u0438"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_UI_CustomForm_CustomForm__WEBPACK_IMPORTED_MODULE_12__/* .CustomForm */ .y, {
                        buttonLabel: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C",
                        setActive: setModalActive
                    })
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5305:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ deleteAllSymbolsExpectNumbers)
/* harmony export */ });
const deleteAllSymbolsExpectNumbers = (str)=>{
    return String(str).replace(/[\D]/g, "");
};


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

/***/ }),

/***/ 3015:
/***/ ((module) => {

module.exports = import("swiper/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [895,664,648,565,29,115,362,248], () => (__webpack_exec__(9168)));
module.exports = __webpack_exports__;

})();