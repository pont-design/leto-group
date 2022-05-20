"use strict";
exports.id = 648;
exports.ids = [648];
exports.modules = {

/***/ 2532:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ StrapiServiceInstance)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CMSAPIHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4742);


const qs = __webpack_require__(7104);
const test = qs.stringify({
    populate: "*"
}, {
    encodeValuesOnly: true
});
const baseURL = "http://188.225.45.114:1337";
const sendAddress = "ch69865@868749-ch69865.tmweb.ru";
const timeToRebuild = 10;
const strapiInstance = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
    baseURL
});
class StrapiService {
    constructor(strapiInstance1, sendAddress1, baseURL1, timeToRebuild1){
        this._strapiInstance = strapiInstance1;
        this._sendAddress = sendAddress1;
        this.baseURL = baseURL1;
        this.timeToRebuild = timeToRebuild1;
    }
    async getImages() {
        const imagesResponse = await this._strapiInstance.get("/api/imgs?populate=*");
        return await imagesResponse.data;
    }
    async getProduct(id) {
        const itemResponse = await this._strapiInstance.get(`/api/items/${id}?populate=*`);
        return await itemResponse.data.data;
    }
    async getProducts() {
        const productsResponse = await this._strapiInstance.get(`/api/items?${test}`);
        return await productsResponse.data;
    }
    async getSimilarProducts(query) {
        const filterValue = qs.stringify({
            filters: {
                category: {
                    $eq: query
                }
            },
            populate: [
                "img"
            ]
        }, {
            encodeValuesOnly: true
        });
        const similarProductsResponse = await this._strapiInstance.get(`/api/items?${filterValue}`);
        return similarProductsResponse.data.data;
    }
    async getAllIds(nameOfPage) {
        const productsResponse = await this._strapiInstance.get("/api/items?populate=*");
        return _CMSAPIHandler__WEBPACK_IMPORTED_MODULE_1__/* .StrapiHandlerInstance.getPaths */ .p.getPaths(nameOfPage, productsResponse.data.data);
    }
}
const StrapiServiceInstance = new StrapiService(strapiInstance, sendAddress, baseURL, timeToRebuild);


/***/ }),

/***/ 4742:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ StrapiHandlerInstance)
/* harmony export */ });
/* harmony import */ var _utils_translitGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3319);
/* harmony import */ var _CMSAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2532);


class StrapiHandler {
    handleCatalog(res) {
        return res.map((el)=>({
                id: el.id,
                image: `${_CMSAPI__WEBPACK_IMPORTED_MODULE_0__/* .StrapiServiceInstance.baseURL */ .k.baseURL}${el.attributes.img.data.attributes.formats.medium.url}`,
                name: el.attributes.name,
                gost: el.attributes.document,
                Категория: this.translateCategory(el.attributes.category),
                Консистенция: this.translateConsistency(el.attributes.consistency)
            })
        );
    }
    translateCategory(str) {
        let category = "";
        switch(str){
            case "white":
                category = "\u0411\u0435\u043B\u043E\u043A";
                break;
            case "melange":
                category = "\u041C\u0435\u043B\u0430\u043D\u0436";
                break;
            case "yolk":
                category = "\u0416\u0435\u043B\u0442\u043E\u043A";
                break;
        }
        return category;
    }
    translateConsistency(str) {
        let consistency = "";
        switch(str){
            case "dry":
                consistency = "\u0421\u0443\u0445\u043E\u0439";
                break;
            case "liquid":
                consistency = "\u0416\u0438\u0434\u043A\u0438\u0439";
                break;
        }
        return consistency;
    }
    getPaths(nameOfPage, allItems) {
        const paths = [];
        allItems.forEach((item)=>{
            paths.push({
                params: {
                    [nameOfPage]: `${(0,_utils_translitGenerator__WEBPACK_IMPORTED_MODULE_1__/* .translitRuEn */ .m)(String(item.attributes.name))}-${String(item.id)}`
                }
            });
        });
        return paths;
    }
}
const StrapiHandlerInstance = new StrapiHandler();


/***/ }),

/***/ 6650:
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

/***/ 3319:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ translitRuEn)
/* harmony export */ });
const translitRuEn = (word)=>{
    let answer = "";
    const converter = {
        а: "a",
        б: "b",
        в: "v",
        г: "g",
        д: "d",
        е: "e",
        ё: "e",
        ж: "zh",
        з: "z",
        и: "i",
        й: "y",
        к: "k",
        л: "l",
        м: "m",
        н: "n",
        о: "o",
        п: "p",
        р: "r",
        с: "s",
        т: "t",
        у: "u",
        ф: "f",
        х: "h",
        ц: "c",
        ч: "ch",
        ш: "sh",
        щ: "sch",
        ь: "",
        ы: "y",
        ъ: "",
        э: "e",
        ю: "yu",
        я: "ya",
        А: "A",
        Б: "B",
        В: "V",
        Г: "G",
        Д: "D",
        Е: "E",
        Ё: "E",
        Ж: "Zh",
        З: "Z",
        И: "I",
        Й: "Y",
        К: "K",
        Л: "L",
        М: "M",
        Н: "N",
        О: "O",
        П: "P",
        Р: "R",
        С: "S",
        Т: "T",
        У: "U",
        Ф: "F",
        Х: "H",
        Ц: "C",
        Ч: "Ch",
        Ш: "Sh",
        Щ: "Sch",
        Ь: "",
        Ы: "Y",
        Ъ: "",
        Э: "E",
        Ю: "Yu",
        Я: "Ya"
    };
    for(let i = 0; i < word.length; ++i){
        if (converter[word[i]] == undefined) {
            answer += word[i];
        } else {
            answer += converter[word[i]];
        }
    }
    let reg = new RegExp(" ", "g");
    return answer.replace(reg, "-");
};


/***/ })

};
;