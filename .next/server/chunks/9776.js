"use strict";
exports.id = 9776;
exports.ids = [9776];
exports.modules = {

/***/ 29776:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _locales_en_en_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89235);
/* harmony import */ var _utils_isValidEmail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33220);



/**
 * Custom hook to validate form fields.
 *
 * @returns an object containing the following properties:
 * - showError a boolean to indicate whether the error message should be displayed.
 * - setShowError a function to set the showError state.
 * - messageError a string that represents the error message.
 * - emptyFieldValidator a function that receives a string value and a text error and validates if the value is empty.
 * - emailFieldValidator a function that receives a string value and a text error and validates if the value is a valid email.
 * - phoneFieldValidator a function that receives a string value and a text error and validates if the value has a length of at least 10.
 */ const useValidateFields = ()=>{
    const { 0: showError , 1: setShowError  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const { 0: messageError , 1: setMessageError  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const { formsCommon  } = _locales_en_en_json__WEBPACK_IMPORTED_MODULE_1__;
    /**
   * Validates if the value is empty.
   *
   * @param value - The value to validate.
   * @param textError - The error message to display if the value is empty.
   * @returns A promise that resolves if the value is not empty, or rejects with the error message if the value is empty.
   */ const emptyFieldValidator = (value, textError)=>{
        if (!value) {
            setMessageError(textError);
            setShowError(true);
            return Promise.reject(textError);
        }
        return Promise.resolve();
    };
    /**
   * Validates if the multi select value is empty.
   *
   * @param value - The Array of values to validate.
   * @param textError - The error message to display if the value length is 0.
   * @returns A promise that resolves if the value is not empty, or rejects with the error message if the value is empty.
   */ const multiSelectValidator = (value, textError)=>{
        if (!value || value.length === 0) {
            setMessageError(textError);
            setShowError(true);
            return Promise.reject(textError);
        }
        return Promise.resolve();
    };
    /**
   * Validates if the value is a valid email.
   *
   * @param value - The value to validate.
   * @param textError - The error message to display if the value is not a valid email.
   * @returns A promise that resolves if the value is a valid email,
   * or rejects with the error message if the value is not a valid email.
   */ const emailFieldValidator = (value, textError)=>{
        if (value && (0,_utils_isValidEmail__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(value)) {
            return Promise.reject(textError);
        }
        return Promise.resolve();
    };
    /**
   * Validates if the email is empty.
   *
   * @param email - The value of email.
   * @returns null if email is empty otherwise return email,
   */ const checkEmptyEmailField = (email)=>{
        if (email === "" || email === null) return null;
        return email;
    };
    /**
   * Validates if the value has a length of at least 10.
   *
   * @param value - The value to validate.
   * @param textError - The error message to display if the value has a length less than 10.
   * @returns A promise that resolves if the value has a length of at least 10,
   * or rejects with the error message if the value has a length less than 10.
   */ const phoneFieldValidator = (value, textError)=>{
        if (value && value.toString().length < 14) {
            return Promise.reject(textError);
        }
        return Promise.resolve();
    };
    /**
   *This function creates and returns an Ant Design form validation rule object.

   *@param {boolean} required - Flag indicating whether the field is required.
   *@param {string} type - The type of validation rule to use.
   *@param {Function} validator - A validation function to be called when the rule is checked.
   *@param {string} errorMessage - The error message to display if the rule fails.
   *@returns {object} - An Ant Design form validation rule object.
   */ const ruleValidator = (required, type, validator, errorMessage)=>({
            type,
            required,
            validator: async (_rule, value)=>validator(value, errorMessage)
        });
    const activateErrorAlert = (state, textError)=>{
        setMessageError(textError);
        setShowError(state);
    };
    /**
   * Validates if the value has a length of at least 10.
   *
   * @param value - The value to validate.
   * @param textError - The error message to display if the value has a length less than 10.
   * @param emptyFields - The array with the key of mandatory fields.
   * @returns A promise that rejects if the fields are all empty,
   * or if some fields are empty greater than one.
   * or if just one field is empty.
   * or resolves if all is filled correctly.
   */ const validatorEmptyAllFields = (value, textError, emptyFields)=>{
        const hasAllEmptyFields = emptyFields?.every((field)=>!field || field?.length === 0);
        if (hasAllEmptyFields) {
            activateErrorAlert(true, formsCommon.errors.textErrorEmptyFields);
            return Promise.reject();
        }
        const someEmptyFields = (field)=>!field || field?.length === 0;
        const hasSomeEmptyFields = !value && emptyFields.filter(someEmptyFields).length > 1;
        if (hasSomeEmptyFields) {
            activateErrorAlert(true, formsCommon.errors.textErrorEmptyFields);
            return Promise.reject();
        }
        // Verified if some (individual) field is empty
        if (!value) {
            activateErrorAlert(true, textError);
            return Promise.reject();
        }
        return Promise.resolve();
    };
    /**
   * Validates if the mandatories Fields are the same missing when the
   * onFinishFailed functions is executed after a form fails due to required fields
   *
   * @param errorInfo - The param from the onFinishFailed.
   * @param mandatoriesFields - The string array of mandatories fields 

   * @returns an array with the errors messages, the firstone wil be:

   * The fields are mandatory. Please make sure to fill out all mandatory fields before submitting the form.
   */ const validateMandatoryEmptyFields = ({ errorInfo , mandatoriesFields  })=>{
        const errorFields = errorInfo.errorFields;
        const newErrors = [];
        /** Show the mandatoryEmptyfields error when the number of errors and the errors are equal to the missing inputs */ const numberOfMandatoryFields = mandatoriesFields.length;
        if (numberOfMandatoryFields === errorFields.length) {
            const errorFieldNames = errorFields.map((item)=>item.name[0]);
            if (JSON.stringify(mandatoriesFields) === JSON.stringify(errorFieldNames)) {
                newErrors.push(formsCommon.errors.textErrorMandatoryEmptyFields);
            }
        }
        errorFields.forEach(({ name , errors  })=>{
            if (name && errors?.[0]) {
                newErrors.push(errors[0]);
            }
        });
        return newErrors;
    };
    return {
        showError,
        setShowError,
        messageError,
        ruleValidator,
        multiSelectValidator,
        emptyFieldValidator,
        emailFieldValidator,
        phoneFieldValidator,
        validatorEmptyAllFields,
        checkEmptyEmailField,
        activateErrorAlert,
        validateMandatoryEmptyFields
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useValidateFields);


/***/ }),

/***/ 33220:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _consts_forms_general__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48522);

/**
 * Determines if an email address is valid.
 *
 * @param email - The email address to validate.
 * @returns A boolean indicating whether the email address is valid.
 */ const isValidEmail = (email)=>!_consts_forms_general__WEBPACK_IMPORTED_MODULE_0__/* .EMAIL_VALIDATION_REGEX.test */ .bF.test(email);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isValidEmail);


/***/ })

};
;