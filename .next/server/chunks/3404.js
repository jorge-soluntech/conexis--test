exports.id = 3404;
exports.ids = [3404];
exports.modules = {

/***/ 36189:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "SuccessComponent_card___yV_E",
	"alert_success": "SuccessComponent_alert_success__G_iyF",
	"text": "SuccessComponent_text__QyYQz",
	"sub_text": "SuccessComponent_sub_text__100xp",
	"button": "SuccessComponent_button__CD5KS",
	"moveToRight": "SuccessComponent_moveToRight__e16RT"
};


/***/ }),

/***/ 3404:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SuccessComponent_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36189);
/* harmony import */ var _SuccessComponent_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_SuccessComponent_module_scss__WEBPACK_IMPORTED_MODULE_3__);




const gridStyle = {
    width: "100%",
    textAlign: "center",
    alignContent: "center",
    boxShadow: "none",
    padding: "10px"
};
/**
 * SuccessComponent is a component that renders a success message with a button that navigates to a specific route.
 * @param title - The title to be displayed in the success message.
 * @param textButton - The text to be displayed in the button.
 * @param route - The route to navigate to when the button is clicked.
 * @returns A React component that renders a success message with a button.
 */ const SuccessComponent = ({ title , subtitle , textButton , route ,  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Card, {
        className: (_SuccessComponent_module_scss__WEBPACK_IMPORTED_MODULE_3___default().card),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Card.Grid, {
                hoverable: false,
                style: gridStyle,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_SuccessComponent_module_scss__WEBPACK_IMPORTED_MODULE_3___default().alert_success),
                    children: "sucess"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Card.Grid, {
                hoverable: false,
                style: gridStyle,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: (_SuccessComponent_module_scss__WEBPACK_IMPORTED_MODULE_3___default().text),
                    children: title
                })
            }),
            subtitle && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Card.Grid, {
                hoverable: false,
                style: gridStyle,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: (_SuccessComponent_module_scss__WEBPACK_IMPORTED_MODULE_3___default().sub_text),
                    children: subtitle
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Card.Grid, {
                hoverable: false,
                style: gridStyle,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
                    type: "default",
                    size: "large",
                    htmlType: "submit",
                    className: (_SuccessComponent_module_scss__WEBPACK_IMPORTED_MODULE_3___default().button),
                    onClick: ()=>{
                        next_router__WEBPACK_IMPORTED_MODULE_2___default().push(route);
                    },
                    children: textButton
                })
            })
        ]
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SuccessComponent);


/***/ })

};
;