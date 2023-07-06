"use strict";
(() => {
var exports = {};
exports.id = 632;
exports.ids = [632];
exports.modules = {

/***/ 33084:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_common_loginComponents_backLogin_BackLogin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20766);
/* harmony import */ var _components_common_loginComponents_formForgot_FormForgot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47742);
/* harmony import */ var _components_hooks_useWindowDimension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60255);
/* harmony import */ var _components_layouts_gridLogin_GridLogin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9139);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(90396);
/* harmony import */ var _consts_login_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4262);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_common_loginComponents_formForgot_FormForgot__WEBPACK_IMPORTED_MODULE_2__]);
_components_common_loginComponents_formForgot_FormForgot__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const ExpiredPage = ()=>{
    const { width =0  } = (0,_components_hooks_useWindowDimension__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_layouts_gridLogin_GridLogin__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "back_desktop",
                children: width >= _consts_login_ui__WEBPACK_IMPORTED_MODULE_6__/* .TABLET_BREAKPOINT */ .rN && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_loginComponents_backLogin_BackLogin__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_loginComponents_formForgot_FormForgot__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                titleForm: _consts__WEBPACK_IMPORTED_MODULE_5__/* .loginUI.LOGIN_TEXT.title_form_expired */ .Ym.KB.title_form_expired,
                subtitleForm: _consts__WEBPACK_IMPORTED_MODULE_5__/* .loginUI.LOGIN_TEXT.subtitle_form_expired */ .Ym.KB.subtitle_form_expired
            })
        ]
    });
};
const getServerSideProps = async ({ req  })=>{
    if (!req.cookies.token) {
        return {
            props: {}
        };
    }
    return {
        redirect: {
            destination: "/",
            permanent: false
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExpiredPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 45725:
/***/ ((module) => {

module.exports = require("antd");

/***/ }),

/***/ 52167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 16641:
/***/ ((module) => {

module.exports = require("next-seo");

/***/ }),

/***/ 94957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 50744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 35843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 28854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 93297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 59232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 40968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 71853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 16689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 20997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 69915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ }),

/***/ 45641:
/***/ ((module) => {

module.exports = import("react-hook-form");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5675,9235,3019,396,7632,8760,1776,9139,6780,7742], () => (__webpack_exec__(33084)));
module.exports = __webpack_exports__;

})();