"use strict";
exports.id = 115;
exports.ids = [115];
exports.modules = {

/***/ 2011:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/VkLogo.9849a6d0.svg","height":24,"width":24});

/***/ }),

/***/ 77:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/logoLeto.c93c3554.svg","height":60,"width":60});

/***/ }),

/***/ 5206:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/logoSanovo.2ecf356b.svg","height":33,"width":131});

/***/ }),

/***/ 7534:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var _UI_CustomOutlinedButton_CustomOutlinedButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7339);
/* harmony import */ var _UI_ustomLanguageSwitcher_CustomLanguageSwitcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9062);
/* harmony import */ var _public_images_header_logoLeto_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(77);
/* harmony import */ var _public_images_header_logoSanovo_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5206);
/* harmony import */ var _UI_CustomModal_CustomModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2116);
/* harmony import */ var _UI_CustomForm_CustomForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6420);
/* harmony import */ var _utils_removeFilterSettings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(104);
/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8484);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_UI_CustomForm_CustomForm__WEBPACK_IMPORTED_MODULE_8__, _pages_app__WEBPACK_IMPORTED_MODULE_9__]);
([_UI_CustomForm_CustomForm__WEBPACK_IMPORTED_MODULE_8__, _pages_app__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const Header = ()=>{
    const links = [
        {
            label: "\u041F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u044F",
            link: "/catalog"
        },
        {
            label: "\u041E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438",
            link: "/about"
        },
        {
            label: "\u041A\u0430\u0447\u0435\u0441\u0442\u0432\u043E",
            link: "/quality"
        },
        {
            label: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u044F",
            link: "/technologies"
        },
        {
            label: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B",
            link: "/contacts"
        }, 
    ];
    const filtersValueController = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_pages_app__WEBPACK_IMPORTED_MODULE_9__.FiltersValueContext);
    const deleteCategories = ()=>{
        //TODO : this function should be in context
        filtersValueController.setFilterValue((0,_utils_removeFilterSettings__WEBPACK_IMPORTED_MODULE_10__/* .removeFilterSettings */ .p)(filtersValueController.filterValue));
    };
    const removeFiltersOnLinkClick = (link)=>{
        link === "/catalog" && deleteCategories();
    }; //TODO : this function should be in context
    const { 0: scrollAbility , 1: setScrollAbility  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true); //TODO: all this logic should be in custom hook
    const { 0: modalActive , 1: setModalActive  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const toggleBurger = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        setScrollAbility(!scrollAbility);
        scrollAbility ? disableScroll() : enableScroll();
    }, [
        scrollAbility
    ]);
    const openModal = ()=>{
        setScrollAbility(!scrollAbility);
        scrollAbility ? disableScroll() : enableScroll();
        setModalActive(true);
    };
    const openModalDesktop = ()=>{
        setModalActive(true);
    };
    function disableScroll() {
        document.body.style.overflow = "hidden";
    }
    function enableScroll() {
        document.body.style.overflow = "unset";
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "header__outline-wrapper",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                    className: "header__wrapper",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "header-links__wrapper",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                    href: "/",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: _public_images_header_logoLeto_svg__WEBPACK_IMPORTED_MODULE_5__/* ["default"].src */ .Z.src,
                                        className: "header-links__wrapper_logo-leto"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    className: "header__sanovo-label",
                                    src: _public_images_header_logoSanovo_svg__WEBPACK_IMPORTED_MODULE_6__/* ["default"].src */ .Z.src
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                    className: "header__links",
                                    children: links.map((link)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            onClick: ()=>{
                                                removeFiltersOnLinkClick(link.link);
                                            },
                                            className: "link-text header-link-content",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                                href: link.link,
                                                children: link.label
                                            })
                                        }, link.label)
                                    )
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "header__controls-panel",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: "btn-text-2",
                                    href: "tel:+78005553535",
                                    children: "+7 800 555 35 35"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_CustomOutlinedButton_CustomOutlinedButton__WEBPACK_IMPORTED_MODULE_3__/* .CustomOutlinedButton */ .c, {
                                    label: "\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443",
                                    isButtonSmall: true,
                                    onClick: ()=>openModalDesktop()
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_ustomLanguageSwitcher_CustomLanguageSwitcher__WEBPACK_IMPORTED_MODULE_4__/* .CustomLanguageSwitcher */ .k, {})
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "hamburger-menu",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    id: "menu__toggle",
                                    type: "checkbox",
                                    checked: scrollAbility ? false : true,
                                    onChange: ()=>toggleBurger()
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    className: "menu__btn",
                                    htmlFor: "menu__toggle",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {})
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    onClick: ()=>toggleBurger()
                                    ,
                                    className: "menu-box__shadow",
                                    children: [
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            onClick: (e)=>e.stopPropagation()
                                            ,
                                            className: "menu__box ",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "menu__box-nav",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                        className: "menu__box-nav-links",
                                                        children: links.map((link)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                className: "link-text link-text__burger",
                                                                onClick: ()=>{
                                                                    toggleBurger();
                                                                    removeFiltersOnLinkClick(link.link);
                                                                },
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                                                    href: link.link,
                                                                    children: link.label
                                                                })
                                                            }, link.label)
                                                        )
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "menu__box-additional-info",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_CustomOutlinedButton_CustomOutlinedButton__WEBPACK_IMPORTED_MODULE_3__/* .CustomOutlinedButton */ .c, {
                                                                onClick: ()=>openModal()
                                                                ,
                                                                label: "\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443",
                                                                isButtonSmall: true
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                className: "btn-text-2",
                                                                href: "tel:+78005553535",
                                                                children: "+7 800 555 35 35"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_ustomLanguageSwitcher_CustomLanguageSwitcher__WEBPACK_IMPORTED_MODULE_4__/* .CustomLanguageSwitcher */ .k, {})
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_UI_CustomModal_CustomModal__WEBPACK_IMPORTED_MODULE_7__/* .CustomModal */ .P, {
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
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_CustomForm_CustomForm__WEBPACK_IMPORTED_MODULE_8__/* .CustomForm */ .y, {
                        setActive: setModalActive,
                        buttonLabel: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"
                    })
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6420:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ CustomForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5641);
/* harmony import */ var _Service_CMSAPI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2532);
/* harmony import */ var _customButton_CustomButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4310);
/* harmony import */ var _customTextArea_CustomTextArea__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5122);
/* harmony import */ var _customTextField_CustomTextField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2234);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_3__]);
react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const CustomForm = ({ buttonLabel , active , setActive  })=>{
    const { 0: formsData , 1: setFormsData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const { 0: buttonIndicator , 1: setButtonIndicator  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { register , handleSubmit , reset , formState: { errors , isSubmitSuccessful  } ,  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)({
        defaultValues: {
            name: "",
            email: ""
        }
    });
    const submitForm = (data)=>{
        sendEmail(data);
        setButtonIndicator(true);
        setActive && setActive(false);
        setTimeout(()=>setButtonIndicator(false)
        , 3000);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        reset({
            name: "",
            email: "",
            message: ""
        });
    }, [
        isSubmitSuccessful
    ]);
    const sendEmail = (data)=>{
        axios__WEBPACK_IMPORTED_MODULE_2___default().post(`${_Service_CMSAPI__WEBPACK_IMPORTED_MODULE_4__/* .StrapiServiceInstance.baseURL */ .k.baseURL}/api/email`, {
            to: `${_Service_CMSAPI__WEBPACK_IMPORTED_MODULE_4__/* .StrapiServiceInstance._sendAddress */ .k._sendAddress}`,
            from: "leto-group",
            subject: "\u0417\u0430\u044F\u0432\u043A\u0430 \u0441 \u0441\u0430\u0439\u0442\u0430",
            html: `<h1>${data.name}</h1>
        <p><strong>Почта:</strong>: ${data.email}</p>
        <p><strong>Детали:</strong>: ${data.message}</p>
        `,
            text: data.message
        }).catch((error)=>{
            console.log(error);
        });
    };
    const setCurrentFormData = (value, inputName)=>{
        setFormsData({
            ...formsData,
            [inputName]: value
        });
    };
    const buttonText = buttonIndicator ? "\u0417\u0430\u044F\u0432\u043A\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430" : buttonLabel;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        className: "custom-form-wrapper",
        onSubmit: handleSubmit(submitForm),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_customTextField_CustomTextField__WEBPACK_IMPORTED_MODULE_7__/* .CustomTextField */ .y, {
                inputName: "name",
                placeholder: "\u0412\u0430\u0448\u0435 \u0438\u043C\u044F",
                isFullField: !!formsData["name"],
                setCurrentFormData: setCurrentFormData,
                type: "text",
                test: register,
                style: errors.name ? {
                    borderColor: "red"
                } : null
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_customTextField_CustomTextField__WEBPACK_IMPORTED_MODULE_7__/* .CustomTextField */ .y, {
                inputName: "email",
                placeholder: "\u0412\u0430\u0448 email",
                isFullField: !!formsData["email"],
                setCurrentFormData: setCurrentFormData,
                type: "email",
                test: register,
                style: errors.email ? {
                    borderColor: "red"
                } : null
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_customTextArea_CustomTextArea__WEBPACK_IMPORTED_MODULE_6__/* .CustomTextArea */ .K, {
                inputName: "message",
                placeholder: "\u0412\u0430\u0448 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435",
                isFullField: !!formsData["message"],
                setCurrentFormData: setCurrentFormData,
                test: register
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_customButton_CustomButton__WEBPACK_IMPORTED_MODULE_5__/* .CustomButton */ .o, {
                styles: "form-button btn-text",
                label: buttonText,
                type: "sumbit",
                style: buttonIndicator ? {
                    backgroundColor: "#FF6600"
                } : null
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2116:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ CustomModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const CustomModal = ({ active , setActive , children  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: active ? "modal modal__active" : "modal",
        onClick: ()=>setActive(false)
        ,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: active ? "modal__content modal__content-active" : "modal__content",
            onClick: (e)=>e.stopPropagation()
            ,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    onClick: ()=>setActive(false)
                    ,
                    className: "modal__close",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            d: "M13.46 12L19 17.54V19H17.54L12 13.46L6.46 19H5V17.54L10.54 12L5 6.46V5H6.46L12 10.54L17.54 5H19V6.46L13.46 12Z",
                            fill: "#3F3F46"
                        })
                    })
                }),
                children
            ]
        })
    });
};


/***/ }),

/***/ 7339:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ CustomOutlinedButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);



const CustomOutlinedButton = ({ onClick , label , isButtonSmall  })=>{
    const customOutlinedButtonStyles = isButtonSmall ? "btn-text-2 custom-outlined-button custom-outlined-button_small" : "btn-text custom-outlined-button custom-outlined-button_large";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: customOutlinedButtonStyles,
        onClick: onClick,
        children: label
    });
};
CustomOutlinedButton.propTypes = {
    onClick: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
    label: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
    isButtonSmall: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool.isRequired)
};


/***/ }),

/***/ 4310:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ CustomButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const CustomButton = ({ onClick , label , styles , type , style  })=>{
    const customButtonStyles = `btn-text custom-button ${styles ? styles : ""}`;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        type: type ? type : "button",
        className: customButtonStyles,
        onClick: onClick,
        style: style ? style : null,
        children: label
    });
};


/***/ }),

/***/ 5122:
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

/***/ 2234:
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


/***/ }),

/***/ 9062:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ CustomLanguageSwitcher)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const CustomLanguageSwitcher = ()=>{
    const { 0: isRu , 1: setRu  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "custom-language-switcher link-text",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: ()=>setRu(true)
                ,
                className: `custom-language-switch ${isRu ? "custom-language-switch_active" : "custom-language-switch_disabled"}`,
                children: "Ru"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: ()=>setRu(false)
                ,
                className: `custom-language-switch ${!isRu ? "custom-language-switch_active" : "custom-language-switch_disabled"}`,
                children: "En"
            })
        ]
    });
};


/***/ }),

/***/ 2901:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var _UI_CustomOutlinedButton_CustomOutlinedButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6437);
/* harmony import */ var _UI_CustomModal_CustomModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7334);
/* harmony import */ var _UI_CustomForm_CustomForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2976);
/* harmony import */ var _public_images_header_logoLeto_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(77);
/* harmony import */ var _public_images_Footer_VkLogo_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2011);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_UI_CustomForm_CustomForm__WEBPACK_IMPORTED_MODULE_5__]);
_UI_CustomForm_CustomForm__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const Footer = ()=>{
    const { 0: modalActive , 1: setModalActive  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const openModal = ()=>{
        setModalActive(true);
    };
    const linksCompany = [
        {
            label: "\u041F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u044F",
            link: "/catalog"
        },
        {
            label: "\u041E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438",
            link: "/about"
        },
        {
            label: "\u041A\u0430\u0447\u0435\u0441\u0442\u0432\u043E",
            link: "/quality"
        },
        {
            label: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u044F",
            link: "/technologies"
        }, 
    ];
    const linksMedia = [
        {
            label: "\u0412\u043A\u043E\u043D\u0442\u0430\u043A\u0442\u0435",
            link: "https://vk.com"
        }, 
    ];
    const helpCompany = [
        {
            label: "\u0412\u0430\u043A\u0430\u043D\u0441\u0438\u0438",
            link: ""
        },
        {
            label: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B",
            link: "/contacts"
        }, 
    ];
    const company = {
        title: "\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F",
        list: linksCompany
    };
    const help = {
        title: "\u041F\u043E\u043C\u043E\u0449\u044C",
        list: helpCompany
    };
    const media = {
        title: "\u041C\u0435\u0434\u0438\u0430",
        list: linksMedia
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "footer__outline-wrapper",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "footer__contacts-wrapper",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                    className: "footer__contacts-list",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            className: "footer__contacts-list_title",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                children: company.title
                                            })
                                        }),
                                        company.list.map((link)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                className: "link-text",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                                    href: link.link,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "footer-link-content",
                                                        children: link.label
                                                    })
                                                })
                                            }, link.link)
                                        )
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                    className: "footer__contacts-list footer__contacts-list_help",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            className: "footer__contacts-list_title",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                children: help.title
                                            })
                                        }),
                                        help.list.map((link, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                className: idx === 0 ? "link-text link-disabled" : "link-text",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                                    href: link.link,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "footer-link-content",
                                                        children: link.label
                                                    })
                                                })
                                            }, link.link)
                                        )
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "footer__request-wrapper_mobile",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h5", {
                                            children: [
                                                "\u0415\u0441\u0442\u044C \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F? ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                " \u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0437\u0430\u044F\u0432\u043A\u0443"
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "footer__request-button",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_CustomOutlinedButton_CustomOutlinedButton__WEBPACK_IMPORTED_MODULE_3__/* .CustomOutlinedButton */ .c, {
                                                label: "\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443",
                                                isButtonSmall: false,
                                                onClick: ()=>openModal()
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                    className: "footer__contacts-list footer__contacts-list_media",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            className: "footer__contacts-list_title",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                children: media.title
                                            })
                                        }),
                                        media.list.map((link)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                className: "link-text",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                    href: link.link,
                                                    className: "footer__vk-logo",
                                                    link: link.link,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            className: "footer__vk-logo_img",
                                                            src: _public_images_Footer_VkLogo_svg__WEBPACK_IMPORTED_MODULE_7__/* ["default"].src */ .Z.src
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "footer-link-content",
                                                            children: link.label
                                                        })
                                                    ]
                                                })
                                            }, link.link)
                                        )
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                    className: "footer__contacts-list footer__contacts-list_contacts",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "caption-2",
                                                    children: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    className: "footer-link-content text-2",
                                                    href: "tel:+7 495 147 01 99",
                                                    children: "+7 495 147 01 99"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "caption-2",
                                                    children: "Email"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    className: "footer-link-content text-2",
                                                    href: "mailto:info@egg-go.ru",
                                                    children: "info@egg-go.ru"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "footer__contacts-list footer__contacts-list_logo",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                        href: "/",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            className: "footer__contacts-list_logo_img",
                                            src: _public_images_header_logoLeto_svg__WEBPACK_IMPORTED_MODULE_6__/* ["default"].src */ .Z.src
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "footer__request-wrapper",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h5", {
                                    children: [
                                        "\u0415\u0441\u0442\u044C \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F? ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        " \u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0437\u0430\u044F\u0432\u043A\u0443"
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "footer__request-button",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_CustomOutlinedButton_CustomOutlinedButton__WEBPACK_IMPORTED_MODULE_3__/* .CustomOutlinedButton */ .c, {
                                        label: "\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443",
                                        isButtonSmall: false,
                                        onClick: ()=>openModal()
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "footer__mark-wrapper link-text",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "#",
                                    children: "\xa9 \u041E\u041E\u041E \xab\u041B\u0435\u0442\u043E \u0413\u0440\u0443\u043F\u043F\xbb 2022"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "#",
                                    children: "\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "#",
                                    children: "\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_UI_CustomModal_CustomModal__WEBPACK_IMPORTED_MODULE_4__/* .CustomModal */ .P, {
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
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_CustomForm_CustomForm__WEBPACK_IMPORTED_MODULE_5__/* .CustomForm */ .y, {
                        buttonLabel: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"
                    })
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2976:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ CustomForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5641);
/* harmony import */ var _Service_CMSAPI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2532);
/* harmony import */ var _customButton_CustomButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6650);
/* harmony import */ var _customTextArea_CustomTextArea__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1783);
/* harmony import */ var _customTextField_CustomTextField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1651);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_3__]);
react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const CustomForm = ({ buttonLabel , active , setActive  })=>{
    const { 0: formsData , 1: setFormsData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const { 0: buttonIndicator , 1: setButtonIndicator  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { register , handleSubmit , reset , formState: { errors , isSubmitSuccessful  } ,  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)({
        defaultValues: {
            name: "",
            email: ""
        }
    });
    const submitForm = (data)=>{
        sendEmail(data);
        setButtonIndicator(true);
        setActive && setActive(false);
        setTimeout(()=>setButtonIndicator(false)
        , 3000);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        reset({
            name: "",
            email: "",
            message: ""
        });
    }, [
        isSubmitSuccessful
    ]);
    const sendEmail = (data)=>{
        axios__WEBPACK_IMPORTED_MODULE_2___default().post(`${_Service_CMSAPI__WEBPACK_IMPORTED_MODULE_4__/* .StrapiServiceInstance.baseURL */ .k.baseURL}/api/email`, {
            to: `${_Service_CMSAPI__WEBPACK_IMPORTED_MODULE_4__/* .StrapiServiceInstance._sendAddress */ .k._sendAddress}`,
            from: "leto-group",
            subject: "\u0417\u0430\u044F\u0432\u043A\u0430 \u0441 \u0441\u0430\u0439\u0442\u0430",
            html: `<h1>${data.name}</h1>
        <p><strong>Почта:</strong>: ${data.email}</p>
        <p><strong>Детали:</strong>: ${data.message}</p>
        `,
            text: data.message
        }).catch((error)=>{
            console.log(error);
        });
    };
    const setCurrentFormData = (value, inputName)=>{
        setFormsData({
            ...formsData,
            [inputName]: value
        });
    };
    const buttonText = buttonIndicator ? "\u0417\u0430\u044F\u0432\u043A\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430" : buttonLabel;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        className: "custom-form-wrapper",
        onSubmit: handleSubmit(submitForm),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_customTextField_CustomTextField__WEBPACK_IMPORTED_MODULE_7__/* .CustomTextField */ .y, {
                inputName: "name",
                placeholder: "\u0412\u0430\u0448\u0435 \u0438\u043C\u044F",
                isFullField: !!formsData["name"],
                setCurrentFormData: setCurrentFormData,
                type: "text",
                test: register,
                style: errors.name ? {
                    borderColor: "red"
                } : null
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_customTextField_CustomTextField__WEBPACK_IMPORTED_MODULE_7__/* .CustomTextField */ .y, {
                inputName: "email",
                placeholder: "\u0412\u0430\u0448 email",
                isFullField: !!formsData["email"],
                setCurrentFormData: setCurrentFormData,
                type: "email",
                test: register,
                style: errors.email ? {
                    borderColor: "red"
                } : null
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_customTextArea_CustomTextArea__WEBPACK_IMPORTED_MODULE_6__/* .CustomTextArea */ .K, {
                inputName: "message",
                placeholder: "\u0412\u0430\u0448 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435",
                isFullField: !!formsData["message"],
                setCurrentFormData: setCurrentFormData,
                test: register
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_customButton_CustomButton__WEBPACK_IMPORTED_MODULE_5__/* .CustomButton */ .o, {
                styles: "form-button btn-text",
                label: buttonText,
                type: "sumbit",
                style: buttonIndicator ? {
                    backgroundColor: "#FF6600"
                } : null
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7334:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ CustomModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const CustomModal = ({ active , setActive , children  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: active ? "modal modal__active" : "modal",
        onClick: ()=>setActive(false)
        ,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: active ? "modal__content modal__content-active" : "modal__content",
            onClick: (e)=>e.stopPropagation()
            ,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    onClick: ()=>setActive(false)
                    ,
                    className: "modal__close",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            d: "M13.46 12L19 17.54V19H17.54L12 13.46L6.46 19H5V17.54L10.54 12L5 6.46V5H6.46L12 10.54L17.54 5H19V6.46L13.46 12Z",
                            fill: "#3F3F46"
                        })
                    })
                }),
                children
            ]
        })
    });
};


/***/ }),

/***/ 6437:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ CustomOutlinedButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);



const CustomOutlinedButton = ({ onClick , label , isButtonSmall  })=>{
    const customOutlinedButtonStyles = isButtonSmall ? "btn-text-2 custom-outlined-button custom-outlined-button_small" : "btn-text custom-outlined-button custom-outlined-button_large";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: customOutlinedButtonStyles,
        onClick: onClick,
        children: label
    });
};
CustomOutlinedButton.propTypes = {
    onClick: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
    label: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
    isButtonSmall: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool.isRequired)
};


/***/ }),

/***/ 8484:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FiltersValueContext": () => (/* binding */ FiltersValueContext),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Components_Common_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7534);
/* harmony import */ var _components_Common_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2901);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Components_Common_Header__WEBPACK_IMPORTED_MODULE_2__, _components_Common_Footer__WEBPACK_IMPORTED_MODULE_3__, framer_motion__WEBPACK_IMPORTED_MODULE_4__]);
([_Components_Common_Header__WEBPACK_IMPORTED_MODULE_2__, _components_Common_Footer__WEBPACK_IMPORTED_MODULE_3__, framer_motion__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




































const FiltersValueContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext(null); //TODO: context should be in separate file
function MyApp({ Component , pageProps  }) {
    const { 0: filterValue , 1: setFilterValue  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        Категория: "",
        Консистенция: ""
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(FiltersValueContext.Provider, {
        value: {
            filterValue,
            setFilterValue
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_Common_Header__WEBPACK_IMPORTED_MODULE_2__/* .Header */ .h, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.LazyMotion, {
                features: framer_motion__WEBPACK_IMPORTED_MODULE_4__.domAnimation,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.AnimatePresence, {
                    exitBeforeEnter: false,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.m.div, {
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
                            duration: 0.7
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                            ...pageProps
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Common_Footer__WEBPACK_IMPORTED_MODULE_3__/* .Footer */ .$, {})
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 104:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ removeFilterSettings)
/* harmony export */ });
const removeFilterSettings = (filterSettingObj)=>{
    const filterSettingObjRemovedSettings = JSON.parse(JSON.stringify(filterSettingObj));
    for(let filterSetting in filterSettingObj){
        filterSettingObjRemovedSettings[filterSetting] = "";
    }
    return filterSettingObjRemovedSettings;
};


/***/ })

};
;