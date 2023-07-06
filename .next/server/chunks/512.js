"use strict";
exports.id = 512;
exports.ids = [512];
exports.modules = {

/***/ 20512:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/**
 * // useFormAlert.ts
 * * This hook returns the errors to show in reset and set password pages
 */ 
const useFormAlert = ()=>{
    const { 0: showError , 1: setShowError  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const { 0: messageError , 1: setMessageError  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const renderAlert = (dataForm)=>{
        if (dataForm.newPassword === "" && dataForm.confirmationPassword === "") {
            setMessageError("Password doesn’t meet the minimum requirements");
            setShowError(true);
            return true;
        }
        if (// eslint-disable-next-line no-useless-escape
        !/^(?!.*\s)(?=.*[A-Z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{8,}$/.test(dataForm.newPassword)) {
            setMessageError("Password doesn’t meet the minimum requirements");
            setShowError(true);
            return true;
        }
        if (dataForm.confirmationPassword !== dataForm.newPassword) {
            setMessageError("The passwords do not match");
            setShowError(true);
            return true;
        }
        setMessageError(false);
        setShowError(false);
        return false;
    };
    const closeError = ()=>setShowError(false);
    const errorInvalidUser = (msg)=>{
        setMessageError(msg);
        setShowError(true);
        return true;
    };
    return {
        renderAlert,
        messageError,
        showError,
        closeError,
        errorInvalidUser
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useFormAlert);


/***/ })

};
;