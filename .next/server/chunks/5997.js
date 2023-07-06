exports.id = 5997;
exports.ids = [5997];
exports.modules = {

/***/ 4033:
/***/ ((module) => {

// Exports
module.exports = {
	"settings": "Settings_settings__D3O1Q",
	"settings__title": "Settings_settings__title__g3OfW",
	"form_container": "Settings_form_container__ICs7f",
	"moveToRight": "Settings_moveToRight__sYUW2"
};


/***/ }),

/***/ 62908:
/***/ ((module) => {

// Exports
module.exports = {
	"form": "PersonalInfo_form__z9yNJ",
	"smallInputs": "PersonalInfo_smallInputs__VAhmX",
	"label": "PersonalInfo_label___AH2X",
	"submit": "PersonalInfo_submit__vS2C2",
	"moveToRight": "PersonalInfo_moveToRight__EL2Km"
};


/***/ }),

/***/ 89944:
/***/ ((module) => {

// Exports
module.exports = {
	"form": "ResetPassword_form__OU03U",
	"form__rules": "ResetPassword_form__rules__9jRnb",
	"smallInputs": "ResetPassword_smallInputs__V36iA",
	"label": "ResetPassword_label__4_JrS",
	"submit": "ResetPassword_submit__TmqE0",
	"moveToRight": "ResetPassword_moveToRight__idmJJ"
};


/***/ }),

/***/ 35997:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _locales_en_en_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89235);
/* harmony import */ var _accountComponents_personalInfoComponent_PersonalInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87077);
/* harmony import */ var _accountComponents_resetPassordComponent_ResetPassword__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41202);
/* harmony import */ var _Settings_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4033);
/* harmony import */ var _Settings_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Settings_module_scss__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_accountComponents_personalInfoComponent_PersonalInfo__WEBPACK_IMPORTED_MODULE_3__, _accountComponents_resetPassordComponent_ResetPassword__WEBPACK_IMPORTED_MODULE_4__]);
([_accountComponents_personalInfoComponent_PersonalInfo__WEBPACK_IMPORTED_MODULE_3__, _accountComponents_resetPassordComponent_ResetPassword__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const { Title  } = antd__WEBPACK_IMPORTED_MODULE_1__.Typography;
const { Content  } = antd__WEBPACK_IMPORTED_MODULE_1__.Layout;
/**
 * A component that contains the settings page of users.
 *
 * @returns A component with the settings page of users.
 */ const Settings = ()=>{
    const { settings  } = _locales_en_en_json__WEBPACK_IMPORTED_MODULE_2__;
    const items = [
        {
            key: "1",
            label: settings.information,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_accountComponents_personalInfoComponent_PersonalInfo__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
        },
        {
            key: "2",
            label: settings.resetPassword,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_accountComponents_resetPassordComponent_ResetPassword__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
        }, 
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_Settings_module_scss__WEBPACK_IMPORTED_MODULE_5___default().settings),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
                level: 3,
                className: (_Settings_module_scss__WEBPACK_IMPORTED_MODULE_5___default().settings__title),
                children: settings.title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Content, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_Settings_module_scss__WEBPACK_IMPORTED_MODULE_5___default().form_container),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Tabs, {
                        defaultActiveKey: "1",
                        items: items
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Settings);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 87077:
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _application_authContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78760);
/* harmony import */ var _components_common_alertComponent_AlertMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(72017);
/* harmony import */ var _consts_forms_general__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(48522);
/* harmony import */ var _infrastructure_services_SettingsServices__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(59982);
/* harmony import */ var _locales_en_en_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(89235);
/* harmony import */ var _PersonalInfo_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(62908);
/* harmony import */ var _PersonalInfo_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_PersonalInfo_module_scss__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_application_authContext__WEBPACK_IMPORTED_MODULE_4__, _infrastructure_services_SettingsServices__WEBPACK_IMPORTED_MODULE_6__]);
([_application_authContext__WEBPACK_IMPORTED_MODULE_4__, _infrastructure_services_SettingsServices__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










/**
 * A component that contains the Personal information conponent of settings.
 *
 * @returns A component with the Personal information conponent of settings.
 */ const PersonalInfo = ()=>{
    const { 0: showError , 1: setShowError  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const { 0: showSuccess , 1: setShowSuccess  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const { 0: messageError , 1: setMessageError  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: messageSuccess , 1: setMessageSuccess  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { fechtDataUser  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_application_authContext__WEBPACK_IMPORTED_MODULE_4__/* .AuthContext */ .Vo);
    const [form] = antd__WEBPACK_IMPORTED_MODULE_1__.Form.useForm();
    const { settings , formsCommon  } = _locales_en_en_json__WEBPACK_IMPORTED_MODULE_7__;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const settingServices = new _infrastructure_services_SettingsServices__WEBPACK_IMPORTED_MODULE_6__/* .SettingsServices */ .e(router);
    const myPersonalInfo = ()=>{
        settingServices.getPersonalInfo().then((res)=>{
            form.setFieldsValue({
                firstName: res.data.first_name,
                lastName: res.data.last_name,
                email: res.data.email
            });
        }).catch(()=>{
            setMessageError(formsCommon.errors.main_error);
            setShowError(true);
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        myPersonalInfo();
    }, []);
    const nameValidationFun = (errorMsg)=>{
        return [
            {
                type: "string",
                required: true,
                validator: async (inputRules, value)=>{
                    const formValues = form.getFieldsValue();
                    if (Object.values(formValues).every((val)=>(val === undefined || val === "") && inputRules.required)) {
                        setMessageError(settings.formInfo.errors.emptyFields);
                        setShowError(true);
                        return Promise.reject();
                    }
                    if (!value) {
                        setMessageError(errorMsg);
                        setShowError(true);
                        return Promise.reject();
                    }
                    if (_consts_forms_general__WEBPACK_IMPORTED_MODULE_8__/* .EMAIL_VALIDATION_REGEX.test */ .bF.test(value || "")) {
                        return Promise.resolve();
                    }
                    return Promise.resolve();
                }
            }, 
        ];
    };
    const onSubmit = async (data)=>{
        const dataForm = {
            first_name: data.firstName,
            last_name: data.lastName,
            email: data.email
        };
        await settingServices.updatePersonalInfo(dataForm).then(()=>{
            setShowSuccess(true);
            setShowError(false);
            setMessageSuccess(settings.formInfo.success);
        }).then(()=>{
            fechtDataUser();
        }).catch((err)=>{
            if (err.request.status === 400) {
                setMessageError(err.response?.data?.message?.toString());
                setShowError(true);
                if (err.response?.data?.message?.includes("already being used")) {
                    setMessageError(settings.formInfo.errors.emailUnique);
                    setShowError(true);
                }
            }
            if (err.request.status === 500) {
                setMessageError(formsCommon.errors.main_error);
                setShowError(true);
            }
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Form, {
            name: "basic",
            className: (_PersonalInfo_module_scss__WEBPACK_IMPORTED_MODULE_9___default().form),
            onFinish: onSubmit,
            layout: "vertical",
            form: form,
            children: [
                showError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_alertComponent_AlertMessage__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    message: messageError,
                    afterClose: ()=>setShowError(false)
                }),
                showSuccess && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_alertComponent_AlertMessage__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    message: messageSuccess,
                    srcIcon: "/assets/icons/alert_success_bold.svg",
                    afterClose: ()=>setShowSuccess(false),
                    success: true
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                            lg: 12,
                            md: 12,
                            sm: 24,
                            xs: 24,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                                className: ` ${(_PersonalInfo_module_scss__WEBPACK_IMPORTED_MODULE_9___default().smallInputs)} ${(_PersonalInfo_module_scss__WEBPACK_IMPORTED_MODULE_9___default().label)}`,
                                validateTrigger: "onSubmit",
                                required: true,
                                rules: nameValidationFun(settings.formInfo.errors.firstName),
                                name: "firstName",
                                label: settings.formInfo.FirstName,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Input, {
                                    className: (_PersonalInfo_module_scss__WEBPACK_IMPORTED_MODULE_9___default().inputLabel),
                                    size: "large",
                                    type: "text",
                                    placeholder: settings.formInfo.FirstNamePlaceholder
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                            lg: 12,
                            md: 12,
                            sm: 24,
                            xs: 24,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                                name: "lastName",
                                validateTrigger: "onSubmit",
                                required: true,
                                rules: nameValidationFun(settings.formInfo.errors.lastName),
                                label: settings.formInfo.LastName,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Input, {
                                    className: (_PersonalInfo_module_scss__WEBPACK_IMPORTED_MODULE_9___default().labelRequired),
                                    size: "large",
                                    type: "text",
                                    placeholder: settings.formInfo.LastNamePlaceholder
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                        lg: 24,
                        sm: 24,
                        xs: 24,
                        md: 24,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                            name: "email",
                            label: settings.formInfo.email,
                            required: true,
                            requiredMark: true,
                            validateTrigger: "onSubmit",
                            rules: nameValidationFun(settings.formInfo.errors.email),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Input, {
                                className: `${(_PersonalInfo_module_scss__WEBPACK_IMPORTED_MODULE_9___default().inputLabel)}`,
                                size: "large",
                                placeholder: settings.formInfo.emailPlaceholder
                            })
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
                        type: "primary",
                        htmlType: "submit",
                        className: (_PersonalInfo_module_scss__WEBPACK_IMPORTED_MODULE_9___default().submit),
                        children: formsCommon.submit
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PersonalInfo);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 41202:
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
/* harmony import */ var iconsax_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30990);
/* harmony import */ var iconsax_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(iconsax_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_common_alertComponent_AlertMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(72017);
/* harmony import */ var _consts_forms_general__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(48522);
/* harmony import */ var _infrastructure_services_SettingsServices__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(59982);
/* harmony import */ var _locales_en_en_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(89235);
/* harmony import */ var _ResetPassword_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(89944);
/* harmony import */ var _ResetPassword_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_ResetPassword_module_scss__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_infrastructure_services_SettingsServices__WEBPACK_IMPORTED_MODULE_6__]);
_infrastructure_services_SettingsServices__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










/**
 * A component that lets the user reset the password.
 *
 * @returns A component with a reset password form.
 */ const ResetPassword = ()=>{
    const { 0: showError , 1: setShowError  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const { 0: showSuccess , 1: setShowSuccess  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const { 0: messageError , 1: setMessageError  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("");
    const { 0: messageSuccess , 1: setMessageSuccess  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("");
    const [form] = antd__WEBPACK_IMPORTED_MODULE_1__.Form.useForm();
    const { settings , formsCommon  } = _locales_en_en_json__WEBPACK_IMPORTED_MODULE_7__;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const settingServices = new _infrastructure_services_SettingsServices__WEBPACK_IMPORTED_MODULE_6__/* .SettingsServices */ .e(router);
    const { Paragraph  } = antd__WEBPACK_IMPORTED_MODULE_1__.Typography;
    const passwordValidationFun = (errorMsg)=>{
        return [
            {
                type: "string",
                required: true,
                validator: async (_, value)=>{
                    if (!_consts_forms_general__WEBPACK_IMPORTED_MODULE_8__/* .PASSWORDS_VALIDATION_REGEX.test */ .EI.test(value || "") || value?.length < 8) {
                        setMessageError(errorMsg);
                        setShowError(true);
                        return Promise.reject();
                    }
                    return Promise.resolve();
                }
            }, 
        ];
    };
    const passwordMatchFun = (errorMsg)=>{
        return [
            {
                type: "string",
                required: true,
                validator: async (inputRules, value)=>{
                    const formValues = form.getFieldsValue();
                    if (Object.values(formValues).every((val)=>(val === undefined || val === "") && inputRules.required)) {
                        setTimeout(()=>form.setFields([
                                {
                                    name: "newPassword",
                                    errors: [
                                        ""
                                    ]
                                }
                            ]));
                        setMessageError(settings.formReset.textErrorEmptyFields);
                        setShowError(true);
                        return Promise.reject();
                    }
                    if (form.getFieldValue("newPassword") && value !== form.getFieldValue("newPassword")) {
                        setTimeout(()=>form.setFields([
                                {
                                    name: "newPassword",
                                    errors: [
                                        ""
                                    ]
                                }
                            ]));
                        setMessageError(errorMsg);
                        setShowError(true);
                        return Promise.reject();
                    }
                    return Promise.resolve();
                }
            }, 
        ];
    };
    const passwordIcon = (visible)=>visible ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(iconsax_react__WEBPACK_IMPORTED_MODULE_2__.Eye, {
            size: "20",
            color: "#C1C6CD"
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(iconsax_react__WEBPACK_IMPORTED_MODULE_2__.EyeSlash, {
            size: "20",
            color: "#C1C6CD"
        });
    const onSubmit = async (data)=>{
        const dataForm = {
            oldPassword: data.oldPassword,
            newPassword: data.newPassword,
            confirmationPassword: data.confirmationPassword
        };
        await settingServices.updatePassword(dataForm).then(()=>{
            setShowSuccess(true);
            setShowError(false);
            setMessageSuccess(settings.formReset.success);
        }).catch((err)=>{
            if (err.request.status === 400) {
                setMessageError(err.response?.data?.message?.toString());
                setShowError(true);
                if (err.response?.data?.message?.includes("Incorrect password")) {
                    form.setFields([
                        {
                            name: "oldPassword",
                            errors: [
                                ""
                            ]
                        }
                    ]);
                    setMessageError(settings.formReset.errors.incorrectPassword);
                    setShowError(true);
                }
            }
            if (err.request.status === 500) {
                setMessageError(formsCommon.errors.main_error);
                setShowError(true);
            }
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Form, {
            name: "basic",
            className: (_ResetPassword_module_scss__WEBPACK_IMPORTED_MODULE_9___default().form),
            onFinish: onSubmit,
            layout: "vertical",
            form: form,
            children: [
                showError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_alertComponent_AlertMessage__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    message: messageError,
                    afterClose: ()=>setShowError(false)
                }),
                showSuccess && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_alertComponent_AlertMessage__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    message: messageSuccess,
                    srcIcon: "/assets/icons/alert_success.svg",
                    afterClose: ()=>setShowSuccess(false),
                    success: true
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                        lg: 24,
                        md: 24,
                        sm: 24,
                        xs: 24,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                            name: "oldPassword",
                            className: `${(_ResetPassword_module_scss__WEBPACK_IMPORTED_MODULE_9___default().label)}`,
                            validateTrigger: "onSubmit",
                            required: true,
                            rules: passwordValidationFun(settings.formReset.errors.password),
                            label: settings.formReset.password,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Input.Password, {
                                size: "large",
                                placeholder: settings.formReset.passwordPlaceholder,
                                iconRender: passwordIcon
                            })
                        })
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                            lg: 12,
                            md: 12,
                            sm: 24,
                            xs: 24,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                                    name: "newPassword",
                                    validateTrigger: "onSubmit",
                                    className: ` ${(_ResetPassword_module_scss__WEBPACK_IMPORTED_MODULE_9___default().smallInputs)} ${(_ResetPassword_module_scss__WEBPACK_IMPORTED_MODULE_9___default().label)}`,
                                    required: true,
                                    rules: passwordValidationFun(settings.formReset.errors.password),
                                    label: settings.formReset.newPassword,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Input.Password, {
                                        size: "large",
                                        placeholder: settings.formReset.newPasswordPlaceholder,
                                        iconRender: passwordIcon
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Paragraph, {
                                    className: (_ResetPassword_module_scss__WEBPACK_IMPORTED_MODULE_9___default().form__rules),
                                    children: [
                                        settings.formReset.alert1,
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        settings.formReset.alert2
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                            lg: 12,
                            sm: 24,
                            xs: 24,
                            md: 12,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                                name: "confirmationPassword",
                                label: settings.formReset.confirmPassword,
                                required: true,
                                requiredMark: true,
                                validateTrigger: "onSubmit",
                                rules: passwordMatchFun(settings.formReset.errors.passwordMatch),
                                className: (_ResetPassword_module_scss__WEBPACK_IMPORTED_MODULE_9___default().inputLabel),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Input.Password, {
                                    size: "large",
                                    placeholder: settings.formReset.confirmPasswordPlaceholder,
                                    iconRender: passwordIcon
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
                        type: "primary",
                        htmlType: "submit",
                        className: (_ResetPassword_module_scss__WEBPACK_IMPORTED_MODULE_9___default().submit),
                        children: formsCommon.submit
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResetPassword);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 59982:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ SettingsServices)
/* harmony export */ });
/* harmony import */ var _utils_createUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34411);
/* harmony import */ var _api_configFetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51573);
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97237);
/* harmony import */ var _utilsServices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17632);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_configFetch__WEBPACK_IMPORTED_MODULE_0__, _utilsServices__WEBPACK_IMPORTED_MODULE_2__]);
([_api_configFetch__WEBPACK_IMPORTED_MODULE_0__, _utilsServices__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable class-methods-use-this */ 



const BASE_URL = "https://d5ja6jkvsot2v.cloudfront.net"; // Replace by your env variable
class SettingsServices {
    constructor(router){
        this.router = router;
    }
    /**
   * put request to update my personal info
   */ updatePersonalInfo = async (dataForm)=>{
        try {
            const response = await (0,_api_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)((0,_api_configFetch__WEBPACK_IMPORTED_MODULE_0__/* .configPut */ .FQ)([
                (0,_utils_createUrl__WEBPACK_IMPORTED_MODULE_3__/* .createUrl */ .u)(BASE_URL, "/users/myself")
            ], dataForm));
            return response;
        } catch (error) {
            if (error.response?.status === 404 || error.response?.status === 400) {
                throw error;
            } else {
                _utilsServices__WEBPACK_IMPORTED_MODULE_2__/* .UtilServices.serverIsDown */ .$.serverIsDown(this.router);
                throw error;
            }
        }
    };
    /**
   * get request to get my personal info
   */ getPersonalInfo = async ()=>{
        try {
            const response = await (0,_api_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)((0,_api_configFetch__WEBPACK_IMPORTED_MODULE_0__/* .configGet */ .zn)((0,_utils_createUrl__WEBPACK_IMPORTED_MODULE_3__/* .createUrl */ .u)(BASE_URL, "/users/myself")));
            return response.data;
        } catch (error) {
            if (error.response?.status === 404 || error.response?.status === 400) {
                throw error;
            } else {
                _utilsServices__WEBPACK_IMPORTED_MODULE_2__/* .UtilServices.serverIsDown */ .$.serverIsDown(this.router);
                throw error;
            }
        }
    };
    /**
   * put request to update password
   */ updatePassword = async (dataForm)=>{
        try {
            const response = await (0,_api_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)((0,_api_configFetch__WEBPACK_IMPORTED_MODULE_0__/* .configPut */ .FQ)([
                (0,_utils_createUrl__WEBPACK_IMPORTED_MODULE_3__/* .createUrl */ .u)(BASE_URL, `/auth/resetPassword`)
            ], dataForm));
            return response;
        } catch (error) {
            if (error.response?.status === 404 || error.response?.status === 400) {
                throw error;
            } else {
                _utilsServices__WEBPACK_IMPORTED_MODULE_2__/* .UtilServices.serverIsDown */ .$.serverIsDown(this.router);
                throw error;
            }
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 34411:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ createUrl)
/* harmony export */ });
const createUrl = (base, path)=>`${base}${path}`;


/***/ })

};
;