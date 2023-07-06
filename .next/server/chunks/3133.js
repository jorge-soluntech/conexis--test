exports.id = 3133;
exports.ids = [3133];
exports.modules = {

/***/ 28952:
/***/ ((module) => {

// Exports
module.exports = {
	"back": "EditBusinessUnit_back__ObXIn",
	"business_unit": "EditBusinessUnit_business_unit__N9Dxj",
	"business_unit__detail": "EditBusinessUnit_business_unit__detail__6tuLI",
	"business_unit__detail__label": "EditBusinessUnit_business_unit__detail__label__R6Nc1",
	"business_unit__detail__value": "EditBusinessUnit_business_unit__detail__value__b4t5W",
	"form_container": "EditBusinessUnit_form_container__YJdHd",
	"title": "EditBusinessUnit_title__q9Qjr",
	"form_subtitle": "EditBusinessUnit_form_subtitle__6ceqG",
	"text": "EditBusinessUnit_text__xFep1",
	"moveToRight": "EditBusinessUnit_moveToRight__WIxUv"
};


/***/ }),

/***/ 33133:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_designSystem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88776);
/* harmony import */ var _consts_forms_general__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(48522);
/* harmony import */ var _consts_routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(42144);
/* harmony import */ var _infrastructure_services_BusinessUnitsServices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94329);
/* harmony import */ var _locales_en_en_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89235);
/* harmony import */ var _BUForm_businessUnitCreateForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(53478);
/* harmony import */ var _BUsuccessComponent_successBUComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(51898);
/* harmony import */ var _EditBusinessUnit_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(28952);
/* harmony import */ var _EditBusinessUnit_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_EditBusinessUnit_module_scss__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_infrastructure_services_BusinessUnitsServices__WEBPACK_IMPORTED_MODULE_4__]);
_infrastructure_services_BusinessUnitsServices__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











const { Title  } = _components_designSystem__WEBPACK_IMPORTED_MODULE_3__/* .Typography */ .ZT;
const { businessUnits  } = _locales_en_en_json__WEBPACK_IMPORTED_MODULE_5__;
const { formsCommon  } = _locales_en_en_json__WEBPACK_IMPORTED_MODULE_5__;
/**
 * A form that is used to update a business unit.
 *
 * @param
 * @returns The form to update business unit
 */ const FormEditBusinessUnit = ({ businessUnitId , fieldsValue , showError , phoneError , successResult , dataUser , messageError , detailsBusinessUnit , setMessageError , setShowError , setPhoneError , setSuccessResult ,  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const [form] = _components_designSystem__WEBPACK_IMPORTED_MODULE_3__/* .Form.useForm */ .l0.useForm();
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const businessUnitServices = new _infrastructure_services_BusinessUnitsServices__WEBPACK_IMPORTED_MODULE_4__/* .BusinessUnitServices */ .w(router);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        form.setFieldsValue(fieldsValue);
    }, [
        fieldsValue
    ]);
    const clearOwnerFields = ()=>{
        form.setFieldsValue({
            firstName: undefined,
            lastName: undefined,
            primaryEmail: undefined
        });
    };
    const clearInformationFields = ()=>{
        form.setFieldsValue({
            address: undefined,
            primaryPhone: undefined
        });
    };
    const phoneValidationRules = [
        {
            validator: async (_, value)=>{
                if (value && value.toString().length < 10) {
                    setMessageError(businessUnits.create.errors.phone);
                    setPhoneError(true);
                    setShowError(true);
                    return Promise.reject();
                }
                return Promise.resolve();
            }
        }, 
    ];
    const emailValidationRules = [
        {
            type: "email",
            validator: async (_, value)=>{
                if (value) {
                    if (_consts_forms_general__WEBPACK_IMPORTED_MODULE_8__/* .EMAIL_VALIDATION_REGEX.test */ .bF.test(value)) {
                        return Promise.resolve();
                    }
                    setMessageError(businessUnits.create.errors.email);
                    setShowError(true);
                    return Promise.reject();
                }
                return Promise.resolve();
            }
        }, 
    ];
    const onSubmit = async (data)=>{
        const dataForm = {
            region: data.region,
            first_name: data.firstName,
            last_name: data.lastName,
            address: data.address,
            location: data.location,
            primary_phone: data.primaryPhone?.toString(),
            primary_email: data.primaryEmail ? data.primaryEmail : undefined
        };
        setLoading(true);
        await businessUnitServices.updateBusinessUnit(businessUnitId, dataForm).then(()=>{
            setSuccessResult(true);
        }).catch((err)=>{
            if (err.request.status === 400) {
                setMessageError(err.response?.data?.message);
                setShowError(true);
            }
            if (err.request.status === 500) {
                setMessageError(formsCommon.errors.main_error);
                setShowError(true);
            }
        });
        setLoading(false);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_designSystem__WEBPACK_IMPORTED_MODULE_3__/* .Content */ .VY, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_EditBusinessUnit_module_scss__WEBPACK_IMPORTED_MODULE_9___default().form_container),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_designSystem__WEBPACK_IMPORTED_MODULE_3__/* .Row */ .X2, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_designSystem__WEBPACK_IMPORTED_MODULE_3__/* .Col */ .JX, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_EditBusinessUnit_module_scss__WEBPACK_IMPORTED_MODULE_9___default().back),
                                onClick: ()=>{
                                    router.push(_consts_routes__WEBPACK_IMPORTED_MODULE_10__/* .businessUnitsHomeUrl */ .zN, undefined, {
                                        shallow: true
                                    });
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_designSystem__WEBPACK_IMPORTED_MODULE_3__/* .LeftOutlined */ .D5, {}),
                                    "\xa0 ",
                                    businessUnits.title
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_EditBusinessUnit_module_scss__WEBPACK_IMPORTED_MODULE_9___default().form_subtitle),
                        children: dataUser ? dataUser.logged_buyer_client_company_name : ""
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
                        className: (_EditBusinessUnit_module_scss__WEBPACK_IMPORTED_MODULE_9___default().title),
                        level: 2,
                        children: businessUnits.edit.title
                    }),
                    successResult ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BUsuccessComponent_successBUComponent__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        successMessage: businessUnits.edit.success
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_EditBusinessUnit_module_scss__WEBPACK_IMPORTED_MODULE_9___default().business_unit),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_EditBusinessUnit_module_scss__WEBPACK_IMPORTED_MODULE_9___default().business_unit__detail),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: (_EditBusinessUnit_module_scss__WEBPACK_IMPORTED_MODULE_9___default().business_unit__detail__label),
                                                children: businessUnits.edit.id
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: (_EditBusinessUnit_module_scss__WEBPACK_IMPORTED_MODULE_9___default().business_unit__detail__value),
                                                children: detailsBusinessUnit.id
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_EditBusinessUnit_module_scss__WEBPACK_IMPORTED_MODULE_9___default().business_unit__detail),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: (_EditBusinessUnit_module_scss__WEBPACK_IMPORTED_MODULE_9___default().business_unit__detail__label),
                                                children: businessUnits.create.inputs.name
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: (_EditBusinessUnit_module_scss__WEBPACK_IMPORTED_MODULE_9___default().business_unit__detail__value),
                                                children: detailsBusinessUnit.location
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_EditBusinessUnit_module_scss__WEBPACK_IMPORTED_MODULE_9___default().business_unit__detail),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: (_EditBusinessUnit_module_scss__WEBPACK_IMPORTED_MODULE_9___default().business_unit__detail__label),
                                                children: businessUnits.create.inputs.number
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: (_EditBusinessUnit_module_scss__WEBPACK_IMPORTED_MODULE_9___default().business_unit__detail__value),
                                                children: detailsBusinessUnit.businessUnitNumber
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BUForm_businessUnitCreateForm__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                create: false,
                                showError: showError,
                                messageError: messageError,
                                setShowError: setShowError,
                                onSubmit: onSubmit,
                                loading: loading,
                                clearInformationFields: clearInformationFields,
                                clearOwnerFields: clearOwnerFields,
                                numberValidationRules: [],
                                phoneValidationRules: phoneValidationRules,
                                emailValidationRules: emailValidationRules,
                                phoneError: phoneError,
                                form: form
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormEditBusinessUnit);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;