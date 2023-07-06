"use strict";
exports.id = 3850;
exports.ids = [3850];
exports.modules = {

/***/ 61617:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_hooks_useWindowDimension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60255);
/* harmony import */ var _consts_breakpoints__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(58310);
/* harmony import */ var _locales_en_en_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89235);






const { Option  } = antd__WEBPACK_IMPORTED_MODULE_1__.Select;
const SelectWorkerStatus = ({ onStatusChange , isSelectCreate , defaultValueSelect ,  })=>{
    const { candidates  } = _locales_en_en_json__WEBPACK_IMPORTED_MODULE_4__;
    const { width =0  } = (0,_components_hooks_useWindowDimension__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const renderDefaultValue = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        if (isSelectCreate) return null;
        return defaultValueSelect;
    }, [
        isSelectCreate,
        defaultValueSelect
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Select, {
        onChange: onStatusChange,
        placement: width <= _consts_breakpoints__WEBPACK_IMPORTED_MODULE_5__/* .MOBILE_BREAKPOINT */ .Gh ? "topLeft" : "bottomLeft",
        defaultValue: renderDefaultValue,
        placeholder: candidates.create.placeholderStatus,
        children: candidates.create.optionsWorkerStatus.map((option, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Option, {
                value: option,
                children: option
            }, index))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectWorkerStatus);


/***/ }),

/***/ 92575:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _application_authContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78760);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(90396);
/* harmony import */ var _storeHooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89480);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_application_authContext__WEBPACK_IMPORTED_MODULE_1__]);
_application_authContext__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const useRenderTitleLoggedAs = ()=>{
    const { currentUserRoleName  } = (0,_storeHooks__WEBPACK_IMPORTED_MODULE_3__/* .useAppSelector */ .C)((state)=>state.dashboard);
    const { dataUser  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_application_authContext__WEBPACK_IMPORTED_MODULE_1__/* .AuthContext */ .Vo);
    const { userLevel  } = (0,_storeHooks__WEBPACK_IMPORTED_MODULE_3__/* .useAppSelector */ .C)((state)=>state.role);
    const renderTitleLoggedAs = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        if (userLevel === _consts__WEBPACK_IMPORTED_MODULE_2__/* .levels.supplier */ .gr.supplier) {
            return dataUser?.supplier_supplier_company_name;
        }
        return currentUserRoleName;
    }, [
        userLevel,
        currentUserRoleName
    ]);
    return {
        renderTitleLoggedAs
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useRenderTitleLoggedAs);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 89401:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RZ": () => (/* binding */ INACTIVE_COLOR),
/* harmony export */   "UX": () => (/* binding */ GREEN_50),
/* harmony export */   "k7": () => (/* binding */ FILTER_OFF),
/* harmony export */   "t": () => (/* binding */ ACTIVE_COLOR)
/* harmony export */ });
/* unused harmony export H5_COLOR */
const ACTIVE_COLOR = "#303336";
const INACTIVE_COLOR = "#9FA4A9";
const H5_COLOR = "#888e95";
const GREEN_50 = "#96bc33";
const FILTER_OFF = "#BFBFBF";


/***/ })

};
;