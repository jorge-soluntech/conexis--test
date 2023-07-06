exports.id = 2700;
exports.ids = [2700];
exports.modules = {

/***/ 23353:
/***/ ((module) => {

// Exports
module.exports = {
	"form_container": "BUForm_form_container__JvI8E",
	"form_subtitle": "BUForm_form_subtitle__hvNos",
	"back_arrow": "BUForm_back_arrow__390jl",
	"moveToRight": "BUForm_moveToRight__rBIzT"
};


/***/ }),

/***/ 62700:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _application_authContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(78760);
/* harmony import */ var _consts_forms_general__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(48522);
/* harmony import */ var _consts_routes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(42144);
/* harmony import */ var _infrastructure_services_BusinessUnitsServices__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(94329);
/* harmony import */ var _locales_en_en_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(89235);
/* harmony import */ var _BUForm_businessUnitCreateForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(53478);
/* harmony import */ var _BUsuccessComponent_successBUComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(51898);
/* harmony import */ var _BUForm_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(23353);
/* harmony import */ var _BUForm_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_BUForm_module_scss__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_application_authContext__WEBPACK_IMPORTED_MODULE_5__, _infrastructure_services_BusinessUnitsServices__WEBPACK_IMPORTED_MODULE_6__]);
([_application_authContext__WEBPACK_IMPORTED_MODULE_5__, _infrastructure_services_BusinessUnitsServices__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable array-callback-return */ 












const { Title  } = antd__WEBPACK_IMPORTED_MODULE_2__.Typography;
const { Content  } = antd__WEBPACK_IMPORTED_MODULE_2__.Layout;
/**
 * A form that is used to create a business unit.
 *
 * @param titleForm - The string title of the business unit creation form.
 * @returns The form of creating a business unit with the titles and creation form
 */ const BUForm = ({ titleForm  })=>{
    const [form] = antd__WEBPACK_IMPORTED_MODULE_2__.Form.useForm();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { 0: showError , 1: setShowError  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const { 0: phoneError , 1: setPhoneError  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const { 0: successResult , 1: setSuccessResult  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const { dataUser  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_application_authContext__WEBPACK_IMPORTED_MODULE_5__/* .AuthContext */ .Vo);
    const { businessUnits  } = _locales_en_en_json__WEBPACK_IMPORTED_MODULE_7__;
    const { formsCommon  } = _locales_en_en_json__WEBPACK_IMPORTED_MODULE_7__;
    const { 0: messageError , 1: setMessageError  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(formsCommon.errors.required);
    const businessUnitServices = new _infrastructure_services_BusinessUnitsServices__WEBPACK_IMPORTED_MODULE_6__/* .BusinessUnitServices */ .w(router);
    const clearOwnerFields = ()=>{
        form.setFieldsValue({
            firstName: undefined,
            lastName: undefined,
            primaryEmail: undefined
        });
    };
    const clearInformationFields = ()=>{
        form.setFieldsValue({
            businessUnitNumber: undefined,
            address: undefined,
            location: undefined,
            primaryPhone: undefined
        });
    };
    const numberValidationRules = [
        {
            required: true,
            validator: async (_, value)=>{
                if (!value) {
                    setMessageError(businessUnits.create.errors.number);
                    setShowError(true);
                    return Promise.reject();
                }
                return Promise.resolve();
            }
        }, 
    ];
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
                    if (_consts_forms_general__WEBPACK_IMPORTED_MODULE_10__/* .EMAIL_VALIDATION_REGEX.test */ .bF.test(value)) {
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
            id_tenant: undefined,
            business_unit_number: data.businessUnitNumber.toString(),
            first_name: data.firstName,
            last_name: data.lastName,
            primary_email: data.primaryEmail ? data.primaryEmail.toLowerCase() : undefined,
            primary_phone: data.primaryPhone ? data.primaryPhone.toString() : undefined,
            address: data.address,
            location: data.location
        };
        setLoading(true);
        await businessUnitServices.createBusinessUnit(dataForm).then(()=>{
            setSuccessResult(true);
        }).catch((err)=>{
            if (err.request.status === 400) {
                setMessageError(err.response?.data?.message?.toString());
                setShowError(true);
                if (err.response?.data?.message && Array.isArray(err.response?.data?.message) && err.response?.data?.message[0] && err.response?.data?.message[0].includes("must be an email")) {
                    setMessageError(formsCommon.errors.email);
                    setShowError(true);
                }
            }
            if (err.request.status === 500) {
                setMessageError(formsCommon.errors.main_error);
                setShowError(true);
            }
        });
        setLoading(false);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Content, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `${(_BUForm_module_scss__WEBPACK_IMPORTED_MODULE_11___default().form_container)}`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Row, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Col, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_BUForm_module_scss__WEBPACK_IMPORTED_MODULE_11___default().back_arrow),
                                onClick: ()=>{
                                    router.push(_consts_routes__WEBPACK_IMPORTED_MODULE_12__/* .businessUnitsHomeUrl */ .zN, undefined, {
                                        shallow: true
                                    });
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__.LeftOutlined, {}),
                                    "\xa0 ",
                                    businessUnits.title
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_BUForm_module_scss__WEBPACK_IMPORTED_MODULE_11___default().form_subtitle),
                        children: dataUser ? dataUser.logged_buyer_client_company_name : ""
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
                        style: {
                            marginBottom: "20px",
                            marginTop: "0",
                            fontSize: 32
                        },
                        level: 2,
                        children: titleForm
                    }),
                    successResult ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BUsuccessComponent_successBUComponent__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        successMessage: businessUnits.create.sucessfullCreation
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BUForm_businessUnitCreateForm__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        create: true,
                        showError: showError,
                        messageError: messageError,
                        setShowError: setShowError,
                        onSubmit: onSubmit,
                        clearInformationFields: clearInformationFields,
                        clearOwnerFields: clearOwnerFields,
                        loading: loading,
                        numberValidationRules: numberValidationRules,
                        phoneValidationRules: phoneValidationRules,
                        emailValidationRules: emailValidationRules,
                        phoneError: phoneError,
                        form: form
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BUForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;