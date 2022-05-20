"use strict";
(() => {
var exports = {};
exports.id = 500;
exports.ids = [500];
exports.modules = {

/***/ 8892:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
// I didn't follow the security pattern suggested in the NextJS documentation but you should:
//
// https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration#using-on-demand-revalidation
async function handler(req, res) {
    for (const url of req.body){
        await res.unstable_revalidate(url);
    }
    res.status(200).json({
        revalidate: true
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8892));
module.exports = __webpack_exports__;

})();