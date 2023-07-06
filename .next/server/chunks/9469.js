exports.id = 9469;
exports.ids = [9469];
exports.modules = {

/***/ 14679:
/***/ ((module) => {

// Exports
module.exports = {
	"form_subtitle_container": "clearFields_form_subtitle_container__llewC",
	"form_small_title": "clearFields_form_small_title__3PGy_",
	"form_clear_fields": "clearFields_form_clear_fields__ZQjl1",
	"moveToRight": "clearFields_moveToRight__smbs_"
};


/***/ }),

/***/ 28312:
/***/ ((module) => {

// Exports
module.exports = {
	"form_item": "InputStyle_form_item__Rmxin",
	"label": "InputStyle_label__3_hIE",
	"moveToRight": "InputStyle_moveToRight__sIpL_"
};


/***/ }),

/***/ 85414:
/***/ ((module) => {

// Exports
module.exports = {
	"form_create": "AditionalSupplierContacts_form_create__5pxm7",
	"form_subtitle_container": "AditionalSupplierContacts_form_subtitle_container__zEZFH",
	"form_small_title": "AditionalSupplierContacts_form_small_title__Gya9W",
	"form_clear_fields": "AditionalSupplierContacts_form_clear_fields__AOlMY",
	"row": "AditionalSupplierContacts_row__Da_cn",
	"label": "AditionalSupplierContacts_label__X_EV4",
	"info_text": "AditionalSupplierContacts_info_text__n3t9L",
	"container_button": "AditionalSupplierContacts_container_button__LkDVQ",
	"moveToRight": "AditionalSupplierContacts_moveToRight__EQYec"
};


/***/ }),

/***/ 49825:
/***/ ((module) => {

// Exports
module.exports = {
	"form_create": "BuyerInformation_form_create__cvbsv",
	"container_button": "BuyerInformation_container_button__lxjM2",
	"moveToRight": "BuyerInformation_moveToRight__Kj0Gl"
};


/***/ }),

/***/ 85049:
/***/ ((module) => {

// Exports
module.exports = {
	"form_create": "SupplierInformation_form_create__cifIH",
	"form_subtitle_container": "SupplierInformation_form_subtitle_container__qWiLE",
	"form_small_title": "SupplierInformation_form_small_title__MbWOw",
	"form_clear_fields": "SupplierInformation_form_clear_fields__ad9yj",
	"row": "SupplierInformation_row__E1Znl",
	"label": "SupplierInformation_label__8oztx",
	"info_text": "SupplierInformation_info_text__mlOsh",
	"continue_button": "SupplierInformation_continue_button__pyfiG",
	"moveToRight": "SupplierInformation_moveToRight__j_UAY"
};


/***/ }),

/***/ 2224:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



// select multiple items style renderre
const TagRender = (props)=>{
    const { label , closable , onClose  } = props;
    const onPreventMouseDown = (event)=>{
        event.preventDefault();
        event.stopPropagation();
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Tag, {
        color: "#E6F1CB",
        onMouseDown: onPreventMouseDown,
        closable: closable,
        onClose: onClose,
        style: {
            marginRight: 3
        },
        children: label
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TagRender);


/***/ }),

/***/ 24356:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ ClearFields)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _locales_en_en_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89235);
/* harmony import */ var _clearFields_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14679);
/* harmony import */ var _clearFields_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_clearFields_module_scss__WEBPACK_IMPORTED_MODULE_2__);



const ClearFields = ({ title , form  })=>{
    const { formsCommon  } = _locales_en_en_json__WEBPACK_IMPORTED_MODULE_1__;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_clearFields_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form_subtitle_container),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_clearFields_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form_small_title),
                children: [
                    " ",
                    title
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                type: "button",
                className: (_clearFields_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form_clear_fields),
                onClick: ()=>form.resetFields(),
                children: formsCommon.clearFields
            })
        ]
    });
};


/***/ }),

/***/ 92202:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "t": () => (/* binding */ CustomInput)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(45725);
// EXTERNAL MODULE: external "dayjs"
var external_dayjs_ = __webpack_require__(1635);
var external_dayjs_default = /*#__PURE__*/__webpack_require__.n(external_dayjs_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: ./src/components/common/TagRender/TagRender.tsx
var TagRender = __webpack_require__(2224);
// EXTERNAL MODULE: ./src/components/common/formInput/InputStyle.module.scss
var InputStyle_module = __webpack_require__(28312);
var InputStyle_module_default = /*#__PURE__*/__webpack_require__.n(InputStyle_module);
// EXTERNAL MODULE: ./src/utils/phoneFormatter.ts + 1 modules
var phoneFormatter = __webpack_require__(46833);
;// CONCATENATED MODULE: ./src/components/hooks/usePhoneNumber.tsx

/**
 * Custom hook for handling phone number formatting.
 */ const usePhoneNumber = ()=>{
    const onChangePhoneNumber = (event)=>{
        const { value  } = event.target;
        return (0,phoneFormatter/* default */.Z)(value);
    };
    return {
        onChangePhoneNumber
    };
};
/* harmony default export */ const hooks_usePhoneNumber = (usePhoneNumber);

// EXTERNAL MODULE: ./src/components/hooks/useValidateFields.ts
var useValidateFields = __webpack_require__(29776);
;// CONCATENATED MODULE: ./src/components/common/formInput/useInput.ts


/** Custom hook to handle the logic in the CustomInput component
 * @returns the number of columns, the rules and custom classNames
 */ const useInput = ({ numberOfColumns , type , required , errorMsg  })=>{
    const { onChangePhoneNumber  } = hooks_usePhoneNumber();
    const columnsWidthBySize = {
        lg: numberOfColumns === 1 ? 12 : 24,
        sm: 24,
        xs: 24,
        md: numberOfColumns === 1 ? 12 : 24
    };
    const { ruleValidator , emptyFieldValidator , emailFieldValidator , phoneFieldValidator , multiSelectValidator ,  } = (0,useValidateFields/* default */.Z)();
    let rules;
    let className = "";
    let getValueFromEvent;
    if (type === "email") {
        rules = [
            ruleValidator(false, "email", emailFieldValidator, errorMsg)
        ];
    }
    if ((type === "text" || type === "select") && required) {
        rules = [
            ruleValidator(true, "string", emptyFieldValidator, errorMsg)
        ];
    }
    if (type === "phone") {
        rules = [
            ruleValidator(false, "string", phoneFieldValidator, errorMsg)
        ];
        getValueFromEvent = onChangePhoneNumber;
    }
    if (type === "multiSelect") {
        rules = [
            ruleValidator(true, "string", multiSelectValidator, errorMsg)
        ];
        className = "form_item";
    }
    return {
        rules,
        columnsWidthBySize,
        getValueFromEvent,
        className
    };
};

;// CONCATENATED MODULE: ./src/components/common/formInput/Input.tsx







const { TextArea  } = external_antd_.Input;
/** Custom Form input that handles the aparition in one or two columns
 * and @returns different types of inputs depending the type prop passed,
 * by default the input type is text.
 */ const CustomInput = ({ required , label , errorMsg ="" , placeholder , name , numberOfColumns =1 , type ="text" , options , aditionalInfo  })=>{
    const { columnsWidthBySize , getValueFromEvent , rules , className  } = useInput({
        type,
        required,
        errorMsg,
        numberOfColumns
    });
    const renderInputTypes = (0,external_react_.useCallback)(()=>{
        switch(type){
            case "date":
                return /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.DatePicker, {
                    placeholder: placeholder,
                    format: (value)=>`${external_dayjs_default()(value).format("DD MMM YYYY")}`
                });
            case "select":
                return /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Select, {
                    size: "large",
                    maxTagCount: "responsive",
                    optionFilterProp: "children",
                    placeholder: placeholder,
                    options: options
                });
            case "textArea":
                return /*#__PURE__*/ jsx_runtime_.jsx(TextArea, {
                    size: "large",
                    placeholder: placeholder
                });
            case "multiSelect":
                return /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Select, {
                    mode: "multiple",
                    options: options,
                    size: "large",
                    placeholder: placeholder,
                    tagRender: TagRender/* default */.Z,
                    style: {
                        height: "fit-content"
                    },
                    className: `select_assigned_buyers`,
                    filterOption: (input, option)=>(option?.label ?? "").toLowerCase().includes(input.toLowerCase()),
                    filterSort: (optionA, optionB)=>((optionA?.label) ?? "").toLowerCase().localeCompare(((optionB?.label) ?? "").toLowerCase())
                });
            default:
                return /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                    type: "text",
                    size: "large",
                    placeholder: placeholder
                });
        }
    }, [
        type,
        placeholder,
        options
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Col, {
        ...columnsWidthBySize,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                help: false,
                className: `${(InputStyle_module_default()).label} ${className}`,
                name: name,
                validateTrigger: "onSubmit",
                getValueFromEvent: getValueFromEvent,
                label: label,
                rules: rules,
                children: renderInputTypes()
            }),
            aditionalInfo && aditionalInfo
        ]
    });
};


/***/ }),

/***/ 9536:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ AditionalSupplierContacts_AditionalSupplierContacts)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(45725);
// EXTERNAL MODULE: ./src/components/common/alertComponent/AlertMessage.tsx
var AlertMessage = __webpack_require__(72017);
// EXTERNAL MODULE: ./src/components/common/clearFieldsFromForm/ClearFields.tsx
var ClearFields = __webpack_require__(24356);
// EXTERNAL MODULE: ./src/components/common/formInput/Input.tsx + 2 modules
var Input = __webpack_require__(92202);
// EXTERNAL MODULE: ./src/consts/suppliers.tsx
var suppliers = __webpack_require__(39005);
// EXTERNAL MODULE: ./src/locales/en/en.json
var en = __webpack_require__(89235);
// EXTERNAL MODULE: ./src/components/common/supplierComponents/formSteps/AditionalSupplierContacts/AditionalSupplierContacts.module.scss
var AditionalSupplierContacts_module = __webpack_require__(85414);
var AditionalSupplierContacts_module_default = /*#__PURE__*/__webpack_require__.n(AditionalSupplierContacts_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: ./src/application/supplierSlice/supplierSlice.ts
var supplierSlice = __webpack_require__(22915);
// EXTERNAL MODULE: ./src/components/hooks/storeHooks.ts
var storeHooks = __webpack_require__(89480);
;// CONCATENATED MODULE: ./src/components/common/supplierComponents/formSteps/AditionalSupplierContacts/useAditionalSupplierContacts.ts




/**
 * Custom hook to handle supplier information form logic.
 *
 * @returns Object containing form, error messages, and functions to handle form submission.
 */ const useAditionalSupplierContacts = ()=>{
    const [form] = external_antd_.Form.useForm();
    const dispatch = (0,storeHooks/* useAppDispatch */.T)();
    const { dataSupplier  } = (0,storeHooks/* useAppSelector */.C)((state)=>state.suppliers);
    const { 0: errors , 1: setErrors  } = (0,external_react_.useState)([]);
    const { 0: showError , 1: setShowError  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        form.setFieldsValue(dataSupplier);
    }, []);
    /**
   * Handles the form submission when the user clicks on the continue button.
   *
   * @param values - The form values submitted by the user.
   *
   */ const handleContinue = (values)=>{
        dispatch((0,supplierSlice/* setDataSupplier */.Bq)(values));
        dispatch((0,supplierSlice/* setStepSupplier */.EY)(2));
    };
    const onBack = ()=>{
        dispatch((0,supplierSlice/* setStepSupplier */.EY)(0));
    };
    /** Clears the form fields to an initial value */ const clearFormFields = ()=>{
        form.resetFields();
    };
    /**
   * This function is called when the form fails to submit.
   * It retrieves the error fields and updates the state with
   * the new errors and sets the showError state to true.
   *
   * @param {Store} errorInfo - Object containing the error information returned by the form.
   */ const onFinishFailed = (errorInfo)=>{
        const { errorFields  } = errorInfo;
        const newErrors = [];
        errorFields.forEach((item)=>{
            if (item.name && item.errors) {
                newErrors.push(item.errors[0]);
            }
        });
        setErrors(newErrors);
        setShowError(true);
    };
    return {
        form,
        errors,
        showError,
        clearFormFields,
        onFinishFailed,
        onBack,
        setShowError,
        handleContinue
    };
};
/* harmony default export */ const AditionalSupplierContacts_useAditionalSupplierContacts = (useAditionalSupplierContacts);

;// CONCATENATED MODULE: ./src/components/common/supplierComponents/formSteps/AditionalSupplierContacts/AditionalSupplierContacts.tsx









const { suppliers: { stepTwo  } ,  } = en;
const AditionalSupplierContacts = ()=>{
    const { handleContinue , form , onFinishFailed , errors , showError , setShowError , onBack ,  } = AditionalSupplierContacts_useAditionalSupplierContacts();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Card, {
        className: (AditionalSupplierContacts_module_default()).form_create,
        children: [
            showError && /*#__PURE__*/ jsx_runtime_.jsx(AlertMessage/* default */.Z, {
                message: errors[0],
                afterClose: ()=>setShowError(false)
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Form, {
                form: form,
                scrollToFirstError: true,
                onFinish: handleContinue,
                onFinishFailed: onFinishFailed,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(ClearFields/* ClearFields */.V, {
                        title: stepTwo.title,
                        form: form
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Row, {
                        className: (AditionalSupplierContacts_module_default()).row,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Input/* CustomInput */.t, {
                                label: stepTwo.supplierContactName2,
                                placeholder: stepTwo.supplierContactNamePlaceholder,
                                name: suppliers/* FORM_FIELDS.stepTwo.optionals.secondary_contact_name */.GZ.stepTwo.optionals.secondary_contact_name
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Input/* CustomInput */.t, {
                                type: "email",
                                label: stepTwo.supplierContactEmail2,
                                errorMsg: stepTwo.supplierContactEmail2Error,
                                placeholder: stepTwo.supplierContactEmailPlaceholder,
                                name: suppliers/* FORM_FIELDS.stepTwo.optionals.secondary_contact_email */.GZ.stepTwo.optionals.secondary_contact_email
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Row, {
                        className: (AditionalSupplierContacts_module_default()).row,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Input/* CustomInput */.t, {
                                label: stepTwo.supplierContactName3,
                                placeholder: stepTwo.supplierContactNamePlaceholder,
                                name: suppliers/* FORM_FIELDS.stepTwo.optionals.tertiary_contact_name */.GZ.stepTwo.optionals.tertiary_contact_name
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Input/* CustomInput */.t, {
                                type: "email",
                                label: stepTwo.supplierContactEmail3,
                                errorMsg: stepTwo.supplierContactEmail3Error,
                                placeholder: stepTwo.supplierContactEmailPlaceholder,
                                name: suppliers/* FORM_FIELDS.stepTwo.optionals.tertiary_contact_email */.GZ.stepTwo.optionals.tertiary_contact_email
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Row, {
                        className: (AditionalSupplierContacts_module_default()).row,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Input/* CustomInput */.t, {
                                label: stepTwo.AccountsReceivableContactLabel,
                                placeholder: stepTwo.AccountsReceivableContactPlaceHolder,
                                name: suppliers/* FORM_FIELDS.stepTwo.optionals.accounts_receivable_contact_name */.GZ.stepTwo.optionals.accounts_receivable_contact_name
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Input/* CustomInput */.t, {
                                type: "email",
                                label: stepTwo.AccountsReceivableContactEmailLabel,
                                errorMsg: stepTwo.AccountsReceivableContactEmailError,
                                placeholder: stepTwo.AccountsReceivableContactEmailPlaceHolder,
                                name: suppliers/* FORM_FIELDS.stepTwo.optionals.accounts_receivable_contact_email */.GZ.stepTwo.optionals.accounts_receivable_contact_email
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (AditionalSupplierContacts_module_default()).container_button,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Button, {
                                size: "large",
                                type: "default",
                                htmlType: "submit",
                                onClick: onBack,
                                children: stepTwo.backButton
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Button, {
                                size: "large",
                                type: "primary",
                                htmlType: "submit",
                                children: stepTwo.continueButton
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const AditionalSupplierContacts_AditionalSupplierContacts = (AditionalSupplierContacts);


/***/ }),

/***/ 77417:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_common_alertComponent_AlertMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72017);
/* harmony import */ var _components_common_clearFieldsFromForm_ClearFields__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24356);
/* harmony import */ var _components_common_formInput_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92202);
/* harmony import */ var _consts_suppliers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39005);
/* harmony import */ var _locales_en_en_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(89235);
/* harmony import */ var _BuyerInformation_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(49825);
/* harmony import */ var _BuyerInformation_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_BuyerInformation_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _useBuyerInformation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(45936);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useBuyerInformation__WEBPACK_IMPORTED_MODULE_7__]);
_useBuyerInformation__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const BuyerInformation = ()=>{
    const { suppliers: { stepThree  } ,  } = _locales_en_en_json__WEBPACK_IMPORTED_MODULE_6__;
    const { handleContinue , form , onBack , permissionedBuyers , errors , showError , setShowError , onFinishFailed ,  } = (0,_useBuyerInformation__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Card, {
        className: (_BuyerInformation_module_scss__WEBPACK_IMPORTED_MODULE_8___default().form_create),
        children: [
            showError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_alertComponent_AlertMessage__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                message: errors[0],
                afterClose: ()=>setShowError(false)
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Form, {
                form: form,
                scrollToFirstError: true,
                onFinish: handleContinue,
                onFinishFailed: onFinishFailed,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_clearFieldsFromForm_ClearFields__WEBPACK_IMPORTED_MODULE_3__/* .ClearFields */ .V, {
                        title: stepThree.title,
                        form: form
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_formInput_Input__WEBPACK_IMPORTED_MODULE_4__/* .CustomInput */ .t, {
                        type: "multiSelect",
                        label: stepThree.AssignedBuyersLabel,
                        errorMsg: stepThree.AssignedBuyersError,
                        placeholder: stepThree.AssignedBuyersPlaceHolder,
                        name: _consts_suppliers__WEBPACK_IMPORTED_MODULE_5__/* .FORM_FIELDS.stepThree.mandatories.associated_buyers */ .GZ.stepThree.mandatories.associated_buyers,
                        numberOfColumns: 2,
                        options: permissionedBuyers
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_BuyerInformation_module_scss__WEBPACK_IMPORTED_MODULE_8___default().container_button),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                size: "large",
                                type: "default",
                                htmlType: "submit",
                                onClick: onBack,
                                children: stepThree.backButton
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                size: "large",
                                type: "primary",
                                htmlType: "submit",
                                children: stepThree.continueButton
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BuyerInformation);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 45936:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _application_authContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78760);
/* harmony import */ var _application_supplierSlice_supplierSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22915);
/* harmony import */ var _components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89480);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_application_authContext__WEBPACK_IMPORTED_MODULE_2__]);
_application_authContext__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





/**
 * Custom hook to handle supplier information form logic.
 *
 * @returns Object containing form, error messages, and functions to handle form submission.
 */ const useAditionalSupplierContacts = ()=>{
    const [form] = antd__WEBPACK_IMPORTED_MODULE_0__.Form.useForm();
    const dispatch = (0,_components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_4__/* .useAppDispatch */ .T)();
    const { dataSupplier  } = (0,_components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_4__/* .useAppSelector */ .C)((state)=>state.suppliers);
    const { dataUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_application_authContext__WEBPACK_IMPORTED_MODULE_2__/* .AuthContext */ .Vo);
    const { 0: permissionedBuyers , 1: setPermissionedBuyers  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([
        {
            label: "",
            value: ""
        }, 
    ]);
    const { 0: showError , 1: setShowError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: errors , 1: setErrors  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        form.setFieldsValue(dataSupplier);
    }, [
        dataSupplier,
        form
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (dataUser) {
            setPermissionedBuyers(dataUser.permissioned_buyers.map((data)=>({
                    value: data.buyer,
                    label: data.buyerName
                })));
        }
    }, [
        dataUser
    ]);
    /**
   * Handles the form submission when the user clicks on the continue button.
   *
   * @param values - The form values submitted by the user.
   *
   */ const handleContinue = (values)=>{
        dispatch((0,_application_supplierSlice_supplierSlice__WEBPACK_IMPORTED_MODULE_3__/* .setDataSupplier */ .Bq)(values));
        dispatch((0,_application_supplierSlice_supplierSlice__WEBPACK_IMPORTED_MODULE_3__/* .setStepSupplier */ .EY)(3));
    };
    const onBack = ()=>{
        dispatch((0,_application_supplierSlice_supplierSlice__WEBPACK_IMPORTED_MODULE_3__/* .setStepSupplier */ .EY)(1));
    };
    /** Clears the form fields to an initial value */ const clearFormFields = ()=>{
        form.resetFields();
    };
    /**
   * This function is called when the form fails to submit.
   * It retrieves the error fields and updates the state with
   * the new errors and sets the showError state to true.
   *
   * @param {Store} errorInfo - Object containing the error information returned by the form.
   */ const onFinishFailed = (errorInfo)=>{
        const { errorFields  } = errorInfo;
        const newErrors = [];
        errorFields.forEach((item)=>{
            if (item.name && item.errors) {
                newErrors.push(item.errors[0]);
            }
        });
        setErrors(newErrors);
        setShowError(true);
    };
    return {
        form,
        showError,
        errors,
        permissionedBuyers,
        onFinishFailed,
        clearFormFields,
        onBack,
        setShowError,
        handleContinue
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useAditionalSupplierContacts);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 73076:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_common_alertComponent_AlertMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72017);
/* harmony import */ var _components_common_clearFieldsFromForm_ClearFields__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24356);
/* harmony import */ var _components_common_formInput_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92202);
/* harmony import */ var _consts_suppliers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39005);
/* harmony import */ var _locales_en_en_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(89235);
/* harmony import */ var _SupplierInformation_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(85049);
/* harmony import */ var _SupplierInformation_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_SupplierInformation_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _useSupplierInformation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(61892);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useSupplierInformation__WEBPACK_IMPORTED_MODULE_7__]);
_useSupplierInformation__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









/**
 * SupplierInformation component renders a form for creating/editing supplier information.
 *
 * @remarks This component receives the formType props to determine whether the form is for creating or editing buyer information.
 * formType is used to disable the currency and workWeekDefinition fields since they are the only ones that are not editable
 *
 * @param  formType - The type of the form ('create' or 'edit')
 * @returns The SupplierInformation form
 */ const SupplierInformation = ({ action  })=>{
    const { suppliers  } = _locales_en_en_json__WEBPACK_IMPORTED_MODULE_6__;
    const { stepOne  } = suppliers;
    const { form , errors , showError , setShowError , handleContinue , onFinishFailed ,  } = (0,_useSupplierInformation__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)({
        action
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Card, {
            className: (_SupplierInformation_module_scss__WEBPACK_IMPORTED_MODULE_8___default().form_create),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    showError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_alertComponent_AlertMessage__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        message: errors[0],
                        afterClose: ()=>setShowError(false)
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Form, {
                        form: form,
                        scrollToFirstError: true,
                        name: "supplierInformation",
                        onFinish: handleContinue,
                        onFinishFailed: onFinishFailed,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_clearFieldsFromForm_ClearFields__WEBPACK_IMPORTED_MODULE_3__/* .ClearFields */ .V, {
                                form: form,
                                title: stepOne.title
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                                className: (_SupplierInformation_module_scss__WEBPACK_IMPORTED_MODULE_8___default().row),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_formInput_Input__WEBPACK_IMPORTED_MODULE_4__/* .CustomInput */ .t, {
                                        required: true,
                                        label: stepOne.SupplierCompanyName,
                                        errorMsg: stepOne.SupplierCompanyNameError,
                                        placeholder: stepOne.SupplierCompanyNamePlaceholder,
                                        name: _consts_suppliers__WEBPACK_IMPORTED_MODULE_5__/* .FORM_FIELDS.stepOne.mandatories.supplier_company_name */ .GZ.stepOne.mandatories.supplier_company_name
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_formInput_Input__WEBPACK_IMPORTED_MODULE_4__/* .CustomInput */ .t, {
                                        required: true,
                                        label: stepOne.legalNameForInvoicing,
                                        errorMsg: stepOne.legalNameForInvoicingError,
                                        placeholder: stepOne.legalNameForInvoicingPlaceholder,
                                        name: _consts_suppliers__WEBPACK_IMPORTED_MODULE_5__/* .FORM_FIELDS.stepOne.mandatories.legal_name_for_invoicing */ .GZ.stepOne.mandatories.legal_name_for_invoicing
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                                className: (_SupplierInformation_module_scss__WEBPACK_IMPORTED_MODULE_8___default().row),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_formInput_Input__WEBPACK_IMPORTED_MODULE_4__/* .CustomInput */ .t, {
                                        label: stepOne.supplierContactName,
                                        placeholder: stepOne.supplierContactNamePlaceholder,
                                        name: _consts_suppliers__WEBPACK_IMPORTED_MODULE_5__/* .FORM_FIELDS.stepOne.optionals.primary_contact_name */ .GZ.stepOne.optionals.primary_contact_name
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_formInput_Input__WEBPACK_IMPORTED_MODULE_4__/* .CustomInput */ .t, {
                                        label: stepOne.supplierCode,
                                        placeholder: stepOne.supplierCodePlaceholder,
                                        name: _consts_suppliers__WEBPACK_IMPORTED_MODULE_5__/* .FORM_FIELDS.stepOne.optionals.supplier_code */ .GZ.stepOne.optionals.supplier_code
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                                className: (_SupplierInformation_module_scss__WEBPACK_IMPORTED_MODULE_8___default().row),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_formInput_Input__WEBPACK_IMPORTED_MODULE_4__/* .CustomInput */ .t, {
                                        type: "email",
                                        label: stepOne.supplierContactEmail,
                                        errorMsg: stepOne.supplierContactEmailError,
                                        placeholder: stepOne.supplierContactEmailPlaceholder,
                                        name: _consts_suppliers__WEBPACK_IMPORTED_MODULE_5__/* .FORM_FIELDS.stepOne.optionals.primary_contact_email */ .GZ.stepOne.optionals.primary_contact_email
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_formInput_Input__WEBPACK_IMPORTED_MODULE_4__/* .CustomInput */ .t, {
                                        label: stepOne.supplierMailingAddress,
                                        placeholder: stepOne.supplierMailingAddressPlaceholder,
                                        name: _consts_suppliers__WEBPACK_IMPORTED_MODULE_5__/* .FORM_FIELDS.stepOne.optionals.street_address_line1 */ .GZ.stepOne.optionals.street_address_line1
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                                className: (_SupplierInformation_module_scss__WEBPACK_IMPORTED_MODULE_8___default().row),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_formInput_Input__WEBPACK_IMPORTED_MODULE_4__/* .CustomInput */ .t, {
                                        type: "phone",
                                        label: stepOne.supplierContactPhone,
                                        errorMsg: stepOne.supplierContactPhoneError,
                                        placeholder: stepOne.supplierContactPhonePlaceholder,
                                        name: _consts_suppliers__WEBPACK_IMPORTED_MODULE_5__/* .FORM_FIELDS.stepOne.optionals.primary_contact_phone */ .GZ.stepOne.optionals.primary_contact_phone
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_formInput_Input__WEBPACK_IMPORTED_MODULE_4__/* .CustomInput */ .t, {
                                        type: "date",
                                        label: stepOne.contractExpirationDate,
                                        placeholder: stepOne.contractExpirationDatePlaceholder,
                                        name: _consts_suppliers__WEBPACK_IMPORTED_MODULE_5__/* .FORM_FIELDS.stepOne.optionals.agreement_expiry_date */ .GZ.stepOne.optionals.agreement_expiry_date
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                                className: (_SupplierInformation_module_scss__WEBPACK_IMPORTED_MODULE_8___default().row),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_formInput_Input__WEBPACK_IMPORTED_MODULE_4__/* .CustomInput */ .t, {
                                        label: stepOne.country,
                                        placeholder: stepOne.countryPlaceholder,
                                        name: _consts_suppliers__WEBPACK_IMPORTED_MODULE_5__/* .FORM_FIELDS.stepOne.optionals.country */ .GZ.stepOne.optionals.country
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_formInput_Input__WEBPACK_IMPORTED_MODULE_4__/* .CustomInput */ .t, {
                                        label: stepOne.state,
                                        placeholder: stepOne.statePlaceholder,
                                        name: _consts_suppliers__WEBPACK_IMPORTED_MODULE_5__/* .FORM_FIELDS.stepOne.optionals.province_region */ .GZ.stepOne.optionals.province_region
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                                className: (_SupplierInformation_module_scss__WEBPACK_IMPORTED_MODULE_8___default().row),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_formInput_Input__WEBPACK_IMPORTED_MODULE_4__/* .CustomInput */ .t, {
                                        label: stepOne.city,
                                        placeholder: stepOne.cityPlaceholder,
                                        name: _consts_suppliers__WEBPACK_IMPORTED_MODULE_5__/* .FORM_FIELDS.stepOne.optionals.city */ .GZ.stepOne.optionals.city
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_formInput_Input__WEBPACK_IMPORTED_MODULE_4__/* .CustomInput */ .t, {
                                        label: stepOne.zipCode,
                                        placeholder: stepOne.zipCodePlaceholder,
                                        name: _consts_suppliers__WEBPACK_IMPORTED_MODULE_5__/* .FORM_FIELDS.stepOne.optionals.postal_code */ .GZ.stepOne.optionals.postal_code
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                                className: (_SupplierInformation_module_scss__WEBPACK_IMPORTED_MODULE_8___default().row),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_formInput_Input__WEBPACK_IMPORTED_MODULE_4__/* .CustomInput */ .t, {
                                        label: stepOne.taxIdNumber,
                                        placeholder: stepOne.taxIdNumberPlaceholder,
                                        name: _consts_suppliers__WEBPACK_IMPORTED_MODULE_5__/* .FORM_FIELDS.stepOne.optionals.tax_id */ .GZ.stepOne.optionals.tax_id
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_formInput_Input__WEBPACK_IMPORTED_MODULE_4__/* .CustomInput */ .t, {
                                        type: "select",
                                        label: stepOne.geographicCoverage,
                                        placeholder: stepOne.geographicCoveragePlaceholder,
                                        errorMsg: stepOne.workCategoriesCoveredError,
                                        name: _consts_suppliers__WEBPACK_IMPORTED_MODULE_5__/* .FORM_FIELDS.stepOne.optionals.geographic_coverage */ .GZ.stepOne.optionals.geographic_coverage,
                                        options: _consts_suppliers__WEBPACK_IMPORTED_MODULE_5__/* .GEOGRAPHIC_COVERAGE */ .p2
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                                className: (_SupplierInformation_module_scss__WEBPACK_IMPORTED_MODULE_8___default().row),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_formInput_Input__WEBPACK_IMPORTED_MODULE_4__/* .CustomInput */ .t, {
                                        type: "select",
                                        label: stepOne.workCategoriesCovered,
                                        placeholder: stepOne.geographicCoveragePlaceholder,
                                        errorMsg: stepOne.workCategoriesCoveredError,
                                        name: _consts_suppliers__WEBPACK_IMPORTED_MODULE_5__/* .FORM_FIELDS.stepOne.mandatories.work_categories_covered */ .GZ.stepOne.mandatories.work_categories_covered,
                                        options: _consts_suppliers__WEBPACK_IMPORTED_MODULE_5__/* .WORK_CATEGORIES_COVERED */ .ay,
                                        required: true
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_formInput_Input__WEBPACK_IMPORTED_MODULE_4__/* .CustomInput */ .t, {
                                        label: stepOne.dunBradstreetNumber,
                                        placeholder: stepOne.dunBradstreetNumberPlaceholder,
                                        name: _consts_suppliers__WEBPACK_IMPORTED_MODULE_5__/* .FORM_FIELDS.stepOne.optionals.dunn_and_bradstreet_number */ .GZ.stepOne.optionals.dunn_and_bradstreet_number
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                                className: (_SupplierInformation_module_scss__WEBPACK_IMPORTED_MODULE_8___default().row),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_formInput_Input__WEBPACK_IMPORTED_MODULE_4__/* .CustomInput */ .t, {
                                        type: "select",
                                        label: stepOne.supplierStatus,
                                        placeholder: stepOne.supplierStatusPlaceholder,
                                        name: _consts_suppliers__WEBPACK_IMPORTED_MODULE_5__/* .FORM_FIELDS.stepOne.optionals.supplier_status */ .GZ.stepOne.optionals.supplier_status,
                                        options: _consts_suppliers__WEBPACK_IMPORTED_MODULE_5__/* .SUPPLIER_STATUS */ .Ft
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_formInput_Input__WEBPACK_IMPORTED_MODULE_4__/* .CustomInput */ .t, {
                                        type: "select",
                                        label: stepOne.nonResidentSupplier,
                                        placeholder: stepOne.nonResidentSupplierPlaceholder,
                                        name: _consts_suppliers__WEBPACK_IMPORTED_MODULE_5__/* .FORM_FIELDS.stepOne.optionals.is_non_resident_supplier */ .GZ.stepOne.optionals.is_non_resident_supplier,
                                        options: _consts_suppliers__WEBPACK_IMPORTED_MODULE_5__/* .NON_RESIDENT_SUPPLIER */ .G1
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                                className: (_SupplierInformation_module_scss__WEBPACK_IMPORTED_MODULE_8___default().row),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_formInput_Input__WEBPACK_IMPORTED_MODULE_4__/* .CustomInput */ .t, {
                                    type: "select",
                                    label: stepOne.diversityCertifications,
                                    placeholder: stepOne.diversityCertificationsPlaceholder,
                                    name: _consts_suppliers__WEBPACK_IMPORTED_MODULE_5__/* .FORM_FIELDS.stepOne.optionals.diversity_certifications */ .GZ.stepOne.optionals.diversity_certifications,
                                    options: _consts_suppliers__WEBPACK_IMPORTED_MODULE_5__/* .DIVERSITY_CERTIFICATIONS */ .Oc,
                                    numberOfColumns: 2,
                                    aditionalInfo: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_SupplierInformation_module_scss__WEBPACK_IMPORTED_MODULE_8___default().info_text),
                                        children: stepOne.diversityCertificationsInfo
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                                className: (_SupplierInformation_module_scss__WEBPACK_IMPORTED_MODULE_8___default().row),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_formInput_Input__WEBPACK_IMPORTED_MODULE_4__/* .CustomInput */ .t, {
                                    type: "textArea",
                                    label: stepOne.comments,
                                    placeholder: stepOne.commentsPlaceholder,
                                    name: _consts_suppliers__WEBPACK_IMPORTED_MODULE_5__/* .FORM_FIELDS.stepOne.optionals.comments */ .GZ.stepOne.optionals.comments,
                                    options: _consts_suppliers__WEBPACK_IMPORTED_MODULE_5__/* .NON_RESIDENT_SUPPLIER */ .G1,
                                    numberOfColumns: 2
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_SupplierInformation_module_scss__WEBPACK_IMPORTED_MODULE_8___default().continue_button),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                    size: "large",
                                    type: "primary",
                                    htmlType: "submit",
                                    children: stepOne.continueButton
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SupplierInformation);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 61892:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _application_supplierSlice_supplierSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22915);
/* harmony import */ var _components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89480);
/* harmony import */ var _components_hooks_useValidateFields__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29776);
/* harmony import */ var _consts_permissions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(62633);
/* harmony import */ var _consts_suppliers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(39005);
/* harmony import */ var _infrastructure_services_SupplierServices__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8025);
/* harmony import */ var _locales_en_en_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(89235);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_infrastructure_services_SupplierServices__WEBPACK_IMPORTED_MODULE_8__]);
_infrastructure_services_SupplierServices__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const { suppliers: { stepOne  } ,  } = _locales_en_en_json__WEBPACK_IMPORTED_MODULE_9__;
/**
 * Custom hook to handle supplier information form logic.
 *
 * @param formType - Indicates if the form is for creating or editing a supplier.
 * @returns Object containing form, error messages, and functions to handle form submission.
 */ const useSupplierInformation = ({ action  })=>{
    const [form] = antd__WEBPACK_IMPORTED_MODULE_0__.Form.useForm();
    const dispatch = (0,_components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_4__/* .useAppDispatch */ .T)();
    const supplierServices = new _infrastructure_services_SupplierServices__WEBPACK_IMPORTED_MODULE_8__/* .SupplierServices */ .S((next_router__WEBPACK_IMPORTED_MODULE_1___default()));
    const { dataSupplier , supplierId  } = (0,_components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_4__/* .useAppSelector */ .C)((state)=>state.suppliers);
    const { 0: errors , 1: setErrors  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const { 0: showError , 1: setShowError  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { validateMandatoryEmptyFields  } = (0,_components_hooks_useValidateFields__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        form.setFieldsValue(dataSupplier);
    }, [
        dataSupplier,
        form
    ]);
    /**
   * Handles the form submission when the user clicks on the continue button.
   *
   * @param values - The form values submitted by the user.
   *
   */ const handleContinue = (values)=>{
        setShowError(false);
        let validateNameSupplier = [
            values.supplier_company_name,
            "", 
        ];
        /**
     * Code to validate when editing a supplier.
     */ if (action !== _consts_permissions__WEBPACK_IMPORTED_MODULE_6__/* .ACTIONS.create */ .aO.create) {
            validateNameSupplier = [
                values.supplierCompanyName,
                supplierId
            ];
        }
        /**
     * Before continuing, validate that the supplier company name does not exist
     */ supplierServices.validateSupplierCompanyName(...validateNameSupplier).then((response)=>{
            const { valid  } = response.data;
            if (valid) {
                dispatch((0,_application_supplierSlice_supplierSlice__WEBPACK_IMPORTED_MODULE_3__/* .setDataSupplier */ .Bq)({
                    ...values,
                    work_categories_covered: [
                        values.work_categories_covered
                    ].flat()
                }));
                dispatch((0,_application_supplierSlice_supplierSlice__WEBPACK_IMPORTED_MODULE_3__/* .setStepSupplier */ .EY)(1));
            } else {
                setErrors([
                    stepOne.supplierCompanyNameAlreadyExistsError
                ]);
                setShowError(true);
            }
        });
    };
    /**
   * This function is called when the form fails to submit.
   * It retrieves the error fields and updates the state with
   * the new errors and sets the showError state to true.
   *
   * @param {Store} errorInfo - Object containing the error information returned by the form.
   */ const onFinishFailed = (errorInfo)=>{
        const mandatoriesFields = Object.keys(_consts_suppliers__WEBPACK_IMPORTED_MODULE_7__/* .FORM_FIELDS.stepOne.mandatories */ .GZ.stepOne.mandatories);
        const newErrors = validateMandatoryEmptyFields({
            errorInfo,
            mandatoriesFields
        });
        setErrors(newErrors);
        setShowError(true);
    };
    return {
        form,
        errors,
        showError,
        setShowError,
        handleContinue,
        onFinishFailed
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSupplierInformation);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9469:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _application_supplierSlice_supplierSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22915);
/* harmony import */ var _components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89480);
/* harmony import */ var _consts_permissions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62633);
/* harmony import */ var _consts_suppliers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39005);
/* harmony import */ var _locales_en_en_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(89235);
/* harmony import */ var _attachmentsComponent_CreateAttachments__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(86570);
/* harmony import */ var _attachmentsComponent_editAttachments_ListAndEditAttachments__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9999);
/* harmony import */ var _multiStepComponent_MultiStepComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(94996);
/* harmony import */ var _formSteps_AditionalSupplierContacts_AditionalSupplierContacts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9536);
/* harmony import */ var _formSteps_BuyerInformation_BuyerInformation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(77417);
/* harmony import */ var _formSteps_supplierInformation_SupplierInformation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(73076);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_attachmentsComponent_CreateAttachments__WEBPACK_IMPORTED_MODULE_7__, _attachmentsComponent_editAttachments_ListAndEditAttachments__WEBPACK_IMPORTED_MODULE_8__, _formSteps_BuyerInformation_BuyerInformation__WEBPACK_IMPORTED_MODULE_11__, _formSteps_supplierInformation_SupplierInformation__WEBPACK_IMPORTED_MODULE_12__]);
([_attachmentsComponent_CreateAttachments__WEBPACK_IMPORTED_MODULE_7__, _attachmentsComponent_editAttachments_ListAndEditAttachments__WEBPACK_IMPORTED_MODULE_8__, _formSteps_BuyerInformation_BuyerInformation__WEBPACK_IMPORTED_MODULE_11__, _formSteps_supplierInformation_SupplierInformation__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const { suppliers  } = _locales_en_en_json__WEBPACK_IMPORTED_MODULE_6__;
const SupplierForm = ({ action , dashboard  })=>{
    const { currentStepSupplier  } = (0,_components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_3__/* .useAppSelector */ .C)((state)=>state.suppliers);
    const stepsComponents = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>[
            {
                step: 0,
                component: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_formSteps_supplierInformation_SupplierInformation__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                    action: action
                })
            },
            {
                step: 1,
                component: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_formSteps_AditionalSupplierContacts_AditionalSupplierContacts__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {})
            },
            {
                step: 2,
                component: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_formSteps_BuyerInformation_BuyerInformation__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {})
            },
            {
                step: 3,
                component: action === _consts_permissions__WEBPACK_IMPORTED_MODULE_4__/* .ACTIONS.create */ .aO.create ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_attachmentsComponent_CreateAttachments__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    dashboard: _consts_permissions__WEBPACK_IMPORTED_MODULE_4__/* .DASHBOARDTYPES.supplier */ .j2.supplier
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_attachmentsComponent_editAttachments_ListAndEditAttachments__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    dashboard: _consts_permissions__WEBPACK_IMPORTED_MODULE_4__/* .DASHBOARDTYPES.supplier */ .j2.supplier
                })
            }, 
        ], [
        action
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_multiStepComponent_MultiStepComponent__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        dashboard: dashboard,
        setStep: _application_supplierSlice_supplierSlice__WEBPACK_IMPORTED_MODULE_2__/* .setStepSupplier */ .EY,
        clearDataState: _application_supplierSlice_supplierSlice__WEBPACK_IMPORTED_MODULE_2__/* .clearDataStateSupplier */ .qS,
        stepProgressComponent: _consts_suppliers__WEBPACK_IMPORTED_MODULE_5__/* .STEPS_CREATE_SUPPLIER */ .rj,
        titleForm: suppliers[action].title,
        stepsComponents: stepsComponents,
        currentStep: currentStepSupplier
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SupplierForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;