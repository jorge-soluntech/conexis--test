"use strict";
exports.id = 2281;
exports.ids = [2281];
exports.modules = {

/***/ 72281:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "sW": () => (/* binding */ setShowSuccessReset)
/* harmony export */ });
/* unused harmony exports uiSlice, setCollapseSider, setClassNameSider, closeSider */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _consts_login_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4262);


const wSizeSider = ()=>{
    if (true) {
        return "";
    }
    if (window.innerWidth >= _consts_login_ui__WEBPACK_IMPORTED_MODULE_1__/* .TABLET_BREAKPOINT */ .rN) {
        return "sider_activated";
    }
    return "";
};
const initialState = {
    /** The state of reset alert in auth pages */ showSuccessReset: false,
    widthCollapseSider: 364,
    /** The state of collapse sidebar */ collapseSider: undefined,
    /** The className of sidebar */ classNameSider: wSizeSider()
};
const uiSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "ui",
    initialState,
    reducers: {
        setShowSuccessReset: (state)=>{
            state.showSuccessReset = !state.showSuccessReset;
        },
        setCollapseSider: (state, action)=>{
            state.collapseSider = action.payload;
        },
        setClassNameSider: (state, action)=>{
            state.classNameSider = action.payload;
        },
        closeSider: (state)=>{
            state.collapseSider = true;
            state.classNameSider = "";
        }
    }
});
const { setShowSuccessReset , setCollapseSider , setClassNameSider , closeSider ,  } = uiSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (uiSlice.reducer);


/***/ })

};
;