(() => {
var exports = {};
exports.id = 3950;
exports.ids = [3950];
exports.modules = {

/***/ 1545:
/***/ ((module) => {

// Exports
module.exports = {
	"fallback": "fallbackComponent_fallback__Yuc_e",
	"opacityIn": "fallbackComponent_opacityIn__8TV2Z",
	"moveToRight": "fallbackComponent_moveToRight__7qnxF"
};


/***/ }),

/***/ 56209:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fallbackComponent_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1545);
/* harmony import */ var _fallbackComponent_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fallbackComponent_module_scss__WEBPACK_IMPORTED_MODULE_3__);




const FallbackComponent = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_fallbackComponent_module_scss__WEBPACK_IMPORTED_MODULE_3___default().fallback),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
            src: "/assets/images/load_conexis.svg",
            width: 140,
            height: 117,
            alt: "mask",
            priority: true
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FallbackComponent);


/***/ }),

/***/ 45940:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _application_authContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78760);
/* harmony import */ var _application_workShiftsSlice_workShiftsSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10120);
/* harmony import */ var _components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89480);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_application_authContext__WEBPACK_IMPORTED_MODULE_2__, _application_workShiftsSlice_workShiftsSlice__WEBPACK_IMPORTED_MODULE_3__]);
([_application_authContext__WEBPACK_IMPORTED_MODULE_2__, _application_workShiftsSlice_workShiftsSlice__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const useWorkShifts = ()=>{
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { allWorkShifts  } = (0,_components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_4__/* .useAppSelector */ .C)((state)=>state.workShifts);
    const { dataUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_application_authContext__WEBPACK_IMPORTED_MODULE_2__/* .AuthContext */ .Vo);
    const dispatch = (0,_components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_4__/* .useAppDispatch */ .T)();
    const getWorkShifts = async ()=>{
        dispatch((0,_application_workShiftsSlice_workShiftsSlice__WEBPACK_IMPORTED_MODULE_3__/* .setErrorWorkShifts */ .NT)(false));
        setLoading(true);
        await dispatch((0,_application_workShiftsSlice_workShiftsSlice__WEBPACK_IMPORTED_MODULE_3__/* .getAllWorkShift */ .bi)({
            router: (next_router__WEBPACK_IMPORTED_MODULE_0___default()),
            id: dataUser?.logged_buyer
        }));
        setLoading(false);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        getWorkShifts();
    }, [
        dataUser?.logged_buyer
    ]);
    return {
        allWorkShifts,
        loading
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useWorkShifts);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 37280:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _components_common_workShiftsComponents_useWorkShiftsData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45940);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_common_loaders__WEBPACK_IMPORTED_MODULE_3__, _components_common_workShiftsComponents_useWorkShiftsData__WEBPACK_IMPORTED_MODULE_4__]);
([_components_common_loaders__WEBPACK_IMPORTED_MODULE_3__, _components_common_workShiftsComponents_useWorkShiftsData__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const WorkShiftsComponent = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>Promise.all(/* import() */[__webpack_require__.e(1957), __webpack_require__.e(2758), __webpack_require__.e(5821), __webpack_require__.e(2530), __webpack_require__.e(8786), __webpack_require__.e(3381), __webpack_require__.e(3962)]).then(__webpack_require__.bind(__webpack_require__, 43962)), {
    loadableGenerated: {
        modules: [
            "home/work-shifts/index.tsx -> " + "@/components/common/workShiftsComponents/workShifts/WorkShifts"
        ]
    },
    loading: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_fallbackComponent_FallbackComponent__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
});
/**
 * Represents a component that displays the work shifts.
 * @returns The work shifts page
 */ const WorkShift = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_loaders__WEBPACK_IMPORTED_MODULE_3__/* .TablePageLoader */ .gl, {
        useGetData: _components_common_workShiftsComponents_useWorkShiftsData__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
        children: ({ allWorkShifts , loading  })=>{
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(WorkShiftsComponent, {
                allWorkShifts,
                loading
            });
        }
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WorkShift);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 87066:
/***/ ((module) => {

"use strict";
module.exports = require("@ant-design/icons");

/***/ }),

/***/ 75184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 45725:
/***/ ((module) => {

"use strict";
module.exports = require("antd");

/***/ }),

/***/ 52167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 1635:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs");

/***/ }),

/***/ 94957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 50744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 35843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 95832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 28854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 93297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 59232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 71853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 16689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 99847:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/ai");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 20997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 69915:
/***/ ((module) => {

"use strict";
module.exports = import("js-cookie");;

/***/ }),

/***/ 15941:
/***/ ((module) => {

"use strict";
module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5675,5152,9235,3019,396,7632,8760,7406,9227,8776,5439,120], () => (__webpack_exec__(37280)));
module.exports = __webpack_exports__;

})();