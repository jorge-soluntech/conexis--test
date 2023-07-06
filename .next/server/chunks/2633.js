exports.id = 2633;
exports.ids = [2633];
exports.modules = {

/***/ 6566:
/***/ ((module) => {

// Exports
module.exports = {
	"alert": "AlertMessage_alert__5c1UK",
	"success": "AlertMessage_success__p8TfK",
	"moveToRight": "AlertMessage_moveToRight__n3is8"
};


/***/ }),

/***/ 72017:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_designSystem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88776);
/* harmony import */ var _AlertMessage_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6566);
/* harmony import */ var _AlertMessage_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_AlertMessage_module_scss__WEBPACK_IMPORTED_MODULE_3__);




/**
 * A component that displays an error message with an icon.
 * @param {Object} props - The component props.
 * @param {string} props.message - The error message to be displayed.
 * @param {Function} props.afterClose - The function to be called after the alert is closed.
 * @param {number} props.widthIcon - The width of the icon to be displayed.
 * @param {number} props.heightIcon - The height of the icon to be displayed.
 * @param {string} props.srcIcon - The source of the icon to be displayed.
 * @param {success} props.success- The boolean that defines if the alert is a success or or a warning alert.
 * @returns {JSX.Element} - A component that displays an error message with an icon.
 */ const AlertMessage = ({ message , afterClose , widthIcon =24 , heightICon =24 , srcIcon ="/assets/icons/alert_error.svg" , success =false  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_designSystem__WEBPACK_IMPORTED_MODULE_2__/* .Alert */ .bZ, {
        showIcon: true,
        closable: true,
        type: "error",
        message: message,
        className: success ? (_AlertMessage_module_scss__WEBPACK_IMPORTED_MODULE_3___default().success) : (_AlertMessage_module_scss__WEBPACK_IMPORTED_MODULE_3___default().alert),
        afterClose: ()=>afterClose(),
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
            alt: "Alert",
            src: srcIcon,
            width: widthIcon,
            height: heightICon
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AlertMessage);


/***/ }),

/***/ 48522:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EI": () => (/* binding */ PASSWORDS_VALIDATION_REGEX),
/* harmony export */   "HI": () => (/* binding */ INPUT_NUMBER_PARSER_REGEX),
/* harmony export */   "JK": () => (/* binding */ customFormatDate),
/* harmony export */   "bF": () => (/* binding */ EMAIL_VALIDATION_REGEX),
/* harmony export */   "p6": () => (/* binding */ formatDate),
/* harmony export */   "pz": () => (/* binding */ shortDateFormat)
/* harmony export */ });
/* eslint-disable no-useless-escape */ const EMAIL_VALIDATION_REGEX = /^(?!.*\.\.)\w+([\w.'!#$%&*+\/=?^`{|}~-])*\w+@(\w+\.)+\w{2,8}$/;
const INPUT_NUMBER_PARSER_REGEX = /\D/g;
const PASSWORDS_VALIDATION_REGEX = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[\W_]).{3,}$/;
const formatDate = "YYYY-MM-DD";
const customFormatDate = "YYYY-MM-DDTHH:mm:ss.SSSZ";
const shortDateFormat = "MM/DD/YYYY";


/***/ })

};
;