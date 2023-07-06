exports.id = 5823;
exports.ids = [5823];
exports.modules = {

/***/ 61057:
/***/ ((module) => {

// Exports
module.exports = {
	"form_create": "businessUnitCreateForm_form_create__4I4Vv",
	"form_subtitle": "businessUnitCreateForm_form_subtitle__ejvym",
	"form_subtitle_container": "businessUnitCreateForm_form_subtitle_container__kMmgs",
	"form_small_title": "businessUnitCreateForm_form_small_title__nsR4V",
	"form_clear_fields": "businessUnitCreateForm_form_clear_fields__H5eQF",
	"form_user_create_col": "businessUnitCreateForm_form_user_create_col__G29_M",
	"labelRequired": "businessUnitCreateForm_labelRequired__98AsH",
	"label": "businessUnitCreateForm_label__YE22K",
	"info": "businessUnitCreateForm_info__9_2e8",
	"alertSuccess": "businessUnitCreateForm_alertSuccess__tuK_7",
	"text": "businessUnitCreateForm_text__UQH9f",
	"smallInputs": "businessUnitCreateForm_smallInputs__em7fV",
	"inputNumberError": "businessUnitCreateForm_inputNumberError__4hYmx",
	"submit": "businessUnitCreateForm_submit__iw3Jx",
	"moveToRight": "businessUnitCreateForm_moveToRight__x82gX"
};


/***/ }),

/***/ 40699:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "successBUComponent_card__uL6js",
	"alertSuccess": "successBUComponent_alertSuccess__u1UYW",
	"text": "successBUComponent_text__0OsZZ",
	"moveToRight": "successBUComponent_moveToRight__Jc1bR"
};


/***/ }),

/***/ 53478:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_common_alertComponent_AlertMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72017);
/* harmony import */ var _components_hooks_useWindowDimension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60255);
/* harmony import */ var _consts_forms_general__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(48522);
/* harmony import */ var _consts_login_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4262);
/* harmony import */ var _locales_en_en_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89235);
/* harmony import */ var _utils_phoneFormatter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(46833);
/* harmony import */ var _businessUnitCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(61057);
/* harmony import */ var _businessUnitCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_businessUnitCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_6__);









/**
 * A component that contains the form to create businessUnits.
 *
 * @param create - The boolean that defines if the businessUnit is being created or not
 * @param showError - The boolean of showing error for  form
 * @param messageError - The string of message error for  form
 * @param setShowError - The function for set showing errors of  form
 * @param onSubmit - The function of title form on submit
 * @param clearInformationFields - The function for clear information fields of  form
 * @param clearOwnerFields - The function for clear owner fields of  form
 * @param phoneError - The boolean of phone error of  form
 * @param emailValidationRules - The array of rules for email of  form
 * @param phoneValidationRules - The array of rules for phone of  form
 * @param numberValidationRules - The array of rules for number of  form
 * @param form - The form intance antd form
 * @param loading - The loading awaiting the response when submiting the form
 * @returns A component with the form to create businessUnits.
 */ const BusinessUnitForm = ({ create , showError , messageError , setShowError , onSubmit , clearInformationFields , clearOwnerFields , phoneError , emailValidationRules , phoneValidationRules , numberValidationRules , form , loading ,  })=>{
    const { width =0  } = (0,_components_hooks_useWindowDimension__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const { TextArea  } = antd__WEBPACK_IMPORTED_MODULE_1__.Input;
    const { businessUnits  } = _locales_en_en_json__WEBPACK_IMPORTED_MODULE_5__;
    const { formsCommon  } = _locales_en_en_json__WEBPACK_IMPORTED_MODULE_5__;
    const clearItemsButton = (clearFunction, size)=>{
        if (size === "small") {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_businessUnitCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_6___default().form_subtitle_container),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: (_businessUnitCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_6___default().form_clear_fields),
                        type: "button",
                        onClick: clearFunction,
                        children: formsCommon.clearFields
                    })
                })
            });
        }
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            className: (_businessUnitCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_6___default().form_clear_fields),
            type: "button",
            onClick: clearFunction,
            children: formsCommon.clearFields
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Card, {
        className: (_businessUnitCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_6___default().form_create),
        children: [
            showError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_alertComponent_AlertMessage__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                message: messageError,
                afterClose: ()=>setShowError(false)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Form, {
                    form: form,
                    name: "register",
                    onFinish: onSubmit,
                    scrollToFirstError: true,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_businessUnitCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_6___default().form_subtitle_container),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_businessUnitCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_6___default().form_small_title),
                                    children: businessUnits.create.businessUnitInformation
                                }),
                                width > _consts_login_ui__WEBPACK_IMPORTED_MODULE_4__/* .SMALL_TABLET_BREAKPOINT */ .IU && clearItemsButton(clearInformationFields, "large")
                            ]
                        }),
                        create && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                    lg: 12,
                                    sm: 24,
                                    xs: 24,
                                    md: 12,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                                            className: `${(_businessUnitCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_6___default().label)} ${(_businessUnitCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_6___default().smallInputs)}`,
                                            validateTrigger: "onSubmit",
                                            name: "businessUnitNumber",
                                            label: businessUnits.create.inputs.number,
                                            rules: numberValidationRules,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Input, {
                                                className: (_businessUnitCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_6___default().inputLabel),
                                                size: "large",
                                                type: "text",
                                                placeholder: businessUnits.create.inputs.numberPlaceholder
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: `${(_businessUnitCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_6___default().info)}`,
                                            children: formsCommon.editFieldAlert
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                    lg: 12,
                                    sm: 24,
                                    xs: 24,
                                    md: 12,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                                            className: `${(_businessUnitCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_6___default().labelRequired)}`,
                                            name: "location",
                                            validateTrigger: "onSubmit",
                                            label: businessUnits.create.inputs.name,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Input, {
                                                className: (_businessUnitCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_6___default().inputLabel),
                                                size: "large",
                                                type: "text",
                                                placeholder: businessUnits.create.inputs.namePlaceholder
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: `${(_businessUnitCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_6___default().info)}`,
                                            children: formsCommon.editFieldAlert
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                            style: {
                                marginTop: "-8px"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                    lg: 12,
                                    sm: 24,
                                    xs: 24,
                                    md: 12,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                                        className: `${(_businessUnitCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_6___default().labelRequired)} ${(_businessUnitCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_6___default().smallInputs)}`,
                                        name: "address",
                                        label: businessUnits.create.inputs.address,
                                        validateTrigger: "onSubmit",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TextArea, {
                                            autoSize: {
                                                minRows: 1,
                                                maxRows: 6
                                            },
                                            size: "large",
                                            placeholder: businessUnits.create.inputs.addressPlaceholder
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                    lg: 12,
                                    sm: 24,
                                    xs: 24,
                                    md: 12,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                                        className: `${(_businessUnitCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_6___default().labelRequired)}`,
                                        name: "primaryPhone",
                                        validateTrigger: "onSubmit",
                                        label: businessUnits.create.inputs.phone,
                                        rules: phoneValidationRules,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.InputNumber, {
                                            size: "large",
                                            className: `${(_businessUnitCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_6___default().inputLabel)} ${phoneError ? (_businessUnitCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_6___default().inputNumberError) : ""}`,
                                            maxLength: 14,
                                            controls: false,
                                            bordered: false,
                                            formatter: _utils_phoneFormatter__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
                                            parser: (value)=>value.replace(_consts_forms_general__WEBPACK_IMPORTED_MODULE_8__/* .INPUT_NUMBER_PARSER_REGEX */ .HI, ""),
                                            placeholder: businessUnits.create.inputs.phonePlaceholder
                                        })
                                    })
                                })
                            ]
                        }),
                        width < _consts_login_ui__WEBPACK_IMPORTED_MODULE_4__/* .SMALL_TABLET_BREAKPOINT */ .IU && clearItemsButton(clearInformationFields, "small"),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Divider, {
                            style: {
                                backgroundColor: "#DBDDE0"
                            }
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_businessUnitCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_6___default().form_subtitle_container),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_businessUnitCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_6___default().form_small_title),
                                    children: businessUnits.create.businessUnitOwner
                                }),
                                width > _consts_login_ui__WEBPACK_IMPORTED_MODULE_4__/* .SMALL_TABLET_BREAKPOINT */ .IU && clearItemsButton(clearOwnerFields, "large")
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                    lg: 8,
                                    sm: 24,
                                    xs: 24,
                                    md: 8,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                                        className: `${(_businessUnitCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_6___default().label)} ${(_businessUnitCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_6___default().smallInputs)}`,
                                        validateTrigger: "onSubmit",
                                        name: "firstName",
                                        label: businessUnits.create.inputs.firstName,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Input, {
                                            className: (_businessUnitCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_6___default().inputLabel),
                                            size: "large",
                                            type: "text",
                                            placeholder: businessUnits.create.inputs.firstNamePlaceholder
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                    lg: 8,
                                    sm: 24,
                                    xs: 24,
                                    md: 8,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                                        className: `${(_businessUnitCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_6___default().labelRequired)} ${(_businessUnitCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_6___default().smallInputs)}`,
                                        name: "lastName",
                                        validateTrigger: "onSubmit",
                                        label: businessUnits.create.inputs.lastName,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Input, {
                                            className: (_businessUnitCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_6___default().inputLabel),
                                            size: "large",
                                            type: "text",
                                            placeholder: businessUnits.create.inputs.lastNamePlaceholder
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                    lg: 8,
                                    sm: 24,
                                    xs: 24,
                                    md: 8,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                                        className: (_businessUnitCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_6___default().labelRequired),
                                        name: "primaryEmail",
                                        label: businessUnits.create.inputs.primaryEmail,
                                        validateTrigger: "onSubmit",
                                        rules: emailValidationRules,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Input, {
                                            className: (_businessUnitCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_6___default().inputLabel),
                                            size: "large",
                                            placeholder: businessUnits.create.inputs.primaryEmailPlaceholder
                                        })
                                    })
                                })
                            ]
                        }),
                        width < _consts_login_ui__WEBPACK_IMPORTED_MODULE_4__/* .SMALL_TABLET_BREAKPOINT */ .IU && clearItemsButton(clearOwnerFields, "small"),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
                            type: "primary",
                            size: "large",
                            htmlType: "submit",
                            className: (_businessUnitCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_6___default().submit),
                            loading: loading,
                            children: formsCommon.submit
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BusinessUnitForm);


/***/ }),

/***/ 51898:
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
/* harmony import */ var _consts_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(42144);
/* harmony import */ var _locales_en_en_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89235);
/* harmony import */ var _successBUComponent_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40699);
/* harmony import */ var _successBUComponent_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_successBUComponent_module_scss__WEBPACK_IMPORTED_MODULE_4__);






const gridStyle = {
    width: "100%",
    textAlign: "center",
    alignContent: "center",
    boxShadow: "none",
    padding: "10px"
};
/**
 * A component that is shown for sucessfull states in businessUnit form.
 * @param successMessage - The form intance antd form
 * @returns A component for successfull states in businessUnit form.
 */ const SucessComponent = ({ successMessage  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { businessUnits  } = _locales_en_en_json__WEBPACK_IMPORTED_MODULE_3__;
    const { formsCommon  } = _locales_en_en_json__WEBPACK_IMPORTED_MODULE_3__;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Card, {
        className: (_successBUComponent_module_scss__WEBPACK_IMPORTED_MODULE_4___default().card),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Card.Grid, {
                hoverable: false,
                style: gridStyle,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `${(_successBUComponent_module_scss__WEBPACK_IMPORTED_MODULE_4___default().alertSuccess)}`,
                    children: formsCommon.success
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Card.Grid, {
                hoverable: false,
                style: gridStyle,
                className: ` ${(_successBUComponent_module_scss__WEBPACK_IMPORTED_MODULE_4___default().text)}`,
                children: successMessage
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Card.Grid, {
                hoverable: false,
                style: gridStyle,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
                    type: "default",
                    size: "large",
                    htmlType: "submit",
                    onClick: ()=>{
                        router.push(_consts_routes__WEBPACK_IMPORTED_MODULE_5__/* .businessUnitsHomeUrl */ .zN, undefined, {
                            shallow: true
                        });
                    },
                    children: businessUnits.goBackHome
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SucessComponent);


/***/ }),

/***/ 46833:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ utils_phoneFormatter)
});

;// CONCATENATED MODULE: ./src/consts/regex.ts
/** returns the string with only the numbers */ const ONLY_NUMBER_REGEX = /\D/g;

;// CONCATENATED MODULE: ./src/utils/phoneFormatter.ts

const phoneFormatter = (value)=>{
    const phoneNumber = value?.toString().replace(ONLY_NUMBER_REGEX, ""); // Remove any character that is not a number
    let formattedPhoneNumber = "";
    if (!phoneNumber) {
        return "";
    }
    if (phoneNumber.length < 4) {
        formattedPhoneNumber = `(${phoneNumber}`;
    } else if (phoneNumber.length < 7) {
        formattedPhoneNumber = `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    } else {
        formattedPhoneNumber = `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
    }
    return formattedPhoneNumber;
};
/* harmony default export */ const utils_phoneFormatter = (phoneFormatter);


/***/ })

};
;