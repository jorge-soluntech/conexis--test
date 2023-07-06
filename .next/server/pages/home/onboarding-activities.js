"use strict";
(() => {
var exports = {};
exports.id = 389;
exports.ids = [389];
exports.modules = {

/***/ 22256:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_common_fallbackComponent_FallbackComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56209);
/* harmony import */ var _components_common_loaders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55439);
/* harmony import */ var _components_common_loaders_FormPageLoader_useCreateFormLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42220);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_common_loaders__WEBPACK_IMPORTED_MODULE_3__]);
_components_common_loaders__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const OnboardingActivities = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>Promise.all(/* import() */[__webpack_require__.e(8760), __webpack_require__.e(3404), __webpack_require__.e(2915), __webpack_require__.e(4411), __webpack_require__.e(9397), __webpack_require__.e(120), __webpack_require__.e(7498), __webpack_require__.e(7506), __webpack_require__.e(2281), __webpack_require__.e(3735), __webpack_require__.e(6690)]).then(__webpack_require__.bind(__webpack_require__, 96690)), {
    loadableGenerated: {
        modules: [
            "home/onboarding-activities.tsx -> " + "@/components/common/onboardingActivitiesComponents/OnboardingActivities"
        ]
    },
    loading: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_fallbackComponent_FallbackComponent__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
});
/**
 * OnboardingActivities page
 *
 * @returns The OnboardingActivities page
 */ const OnboardingActivitiesPage = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_loaders__WEBPACK_IMPORTED_MODULE_3__/* .FormPageLoader */ .pG, {
        useGetData: _components_common_loaders_FormPageLoader_useCreateFormLoader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(OnboardingActivities, {})
    });
};
const getServerSideProps = async ({ req  })=>{
    if (req.cookies.token) {
        return {
            props: {}
        };
    }
    return {
        redirect: {
            destination: "/auth",
            permanent: false
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OnboardingActivitiesPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 87066:
/***/ ((module) => {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ 75184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 45725:
/***/ ((module) => {

module.exports = require("antd");

/***/ }),

/***/ 52167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 1635:
/***/ ((module) => {

module.exports = require("dayjs");

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

/***/ 95832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

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

/***/ 71853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 16689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 20997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 69915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ }),

/***/ 15941:
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5675,5152,9235,3019,396,7632,7406,9227,8776,5439,4366], () => (__webpack_exec__(22256)));
module.exports = __webpack_exports__;

})();