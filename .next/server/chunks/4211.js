exports.id = 4211;
exports.ids = [4211];
exports.modules = {

/***/ 33654:
/***/ ((module) => {

// Exports
module.exports = {
	"form_container": "formUserUpdate_form_container__lxzsj",
	"form_user_create": "formUserUpdate_form_user_create__gT4ne",
	"form_user_create_col": "formUserUpdate_form_user_create_col__mFchW",
	"select_user_create": "formUserUpdate_select_user_create__xXR88",
	"select_user_create_multiple": "formUserUpdate_select_user_create_multiple__72OO2",
	"labelRequired": "formUserUpdate_labelRequired__kAMnQ",
	"smallInputs": "formUserUpdate_smallInputs__ZXsXE",
	"alertSuccess": "formUserUpdate_alertSuccess__nkOy_",
	"text": "formUserUpdate_text__N6qpp",
	"moveToRight": "formUserUpdate_moveToRight__pTcd1"
};


/***/ }),

/***/ 84211:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "gridStyle": () => (/* binding */ gridStyle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_designSystem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(88776);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90396);
/* harmony import */ var _consts_forms_general__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(48522);
/* harmony import */ var _formUserUpdate_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(33654);
/* harmony import */ var _formUserUpdate_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_formUserUpdate_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(53242);
/* eslint-disable array-callback-return */ 









const { Title  } = _components_designSystem__WEBPACK_IMPORTED_MODULE_5__/* .Typography */ .ZT;
const gridStyle = {
    width: "100%",
    textAlign: "center",
    alignContent: "center",
    boxShadow: "none",
    padding: "10px"
};
/**
 * Returns the form update component
 *
 * @param
 * @returns The form to update user data
 */ const FormUserUpdate = ({ userInfo , userRole , possibleBuyers , roles , showError , showBuyer , isLoading , messageError , successResult , onSubmit , onSelectRole , setShowError , setMessageError ,  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const [form] = _components_designSystem__WEBPACK_IMPORTED_MODULE_5__/* .Form.useForm */ .l0.useForm();
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (userInfo) {
            form.setFieldsValue((0,_helpers__WEBPACK_IMPORTED_MODULE_7__/* .getFieldValues */ .W6)(userInfo));
        }
    }, [
        userInfo
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if ([
            "Supplier Administrator",
            "Account Manager",
            "Supplier Finance", 
        ].includes(userRole)) {
            form.setFieldValue("buyer", userInfo.legacy_permissioned_buyers);
        } else if ([
            "MSP Administrator",
            "Program Manager",
            "Program Representative",
            "MSP Finance",
            "Super Administrator",
            "Product Support", 
        ].includes(userRole)) {
            form.setFieldValue("buyer", userInfo.legacy_permissioned_buyers ? userInfo.legacy_permissioned_buyers : undefined);
        }
    }, [
        userRole,
        userInfo
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_designSystem__WEBPACK_IMPORTED_MODULE_5__/* .Content */ .VY, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `${(_formUserUpdate_module_scss__WEBPACK_IMPORTED_MODULE_8___default().form_container)}`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_designSystem__WEBPACK_IMPORTED_MODULE_5__/* .Row */ .X2, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_designSystem__WEBPACK_IMPORTED_MODULE_5__/* .Col */ .JX, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                style: {
                                    cursor: "pointer",
                                    color: "#888E95",
                                    width: "fit-content",
                                    fontSize: "16px"
                                },
                                onClick: ()=>{
                                    router.push("/home/users", undefined, {
                                        shallow: true
                                    });
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__.LeftOutlined, {}),
                                    "\xa0 Users"
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
                        style: {
                            marginBottom: "1.2rem",
                            marginTop: "2rem",
                            fontSize: 32
                        },
                        level: 2,
                        children: _consts__WEBPACK_IMPORTED_MODULE_6__/* .userCretaeUI.USER_CREATION_TEXT.title_form_user_edition */ .XI.n4.title_form_user_edition
                    }),
                    successResult ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_designSystem__WEBPACK_IMPORTED_MODULE_5__/* .Card */ .Zb, {
                        style: {
                            paddingTop: "0rem"
                        },
                        className: (_formUserUpdate_module_scss__WEBPACK_IMPORTED_MODULE_8___default().form_create),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_designSystem__WEBPACK_IMPORTED_MODULE_5__/* .Card.Grid */ .Zb.Grid, {
                                hoverable: false,
                                style: gridStyle,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    style: {
                                        marginTop: "55px"
                                    },
                                    className: `${(_formUserUpdate_module_scss__WEBPACK_IMPORTED_MODULE_8___default().alertSuccess)}`,
                                    children: "sucess"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_designSystem__WEBPACK_IMPORTED_MODULE_5__/* .Card.Grid */ .Zb.Grid, {
                                hoverable: false,
                                style: gridStyle,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    className: (_formUserUpdate_module_scss__WEBPACK_IMPORTED_MODULE_8___default().text),
                                    children: [
                                        "User has been",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        " successfully submitted."
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_designSystem__WEBPACK_IMPORTED_MODULE_5__/* .Card.Grid */ .Zb.Grid, {
                                hoverable: false,
                                style: gridStyle,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_designSystem__WEBPACK_IMPORTED_MODULE_5__/* .Button */ .zx, {
                                        style: {
                                            fontSize: 16
                                        },
                                        type: "default",
                                        size: "large",
                                        htmlType: "submit",
                                        onClick: ()=>{
                                            router.push("/home/users", undefined, {
                                                shallow: true
                                            });
                                        },
                                        children: "Go back to users"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        style: {
                                            height: "50px"
                                        }
                                    })
                                ]
                            })
                        ]
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_designSystem__WEBPACK_IMPORTED_MODULE_5__/* .Card */ .Zb, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_formUserUpdate_module_scss__WEBPACK_IMPORTED_MODULE_8___default().form_user_create),
                                children: [
                                    showError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_designSystem__WEBPACK_IMPORTED_MODULE_5__/* .Alert */ .bZ, {
                                        message: messageError,
                                        className: "alert_red",
                                        type: "error",
                                        showIcon: true,
                                        closable: true,
                                        afterClose: ()=>setShowError(false),
                                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            src: "/assets/icons/alert_error.svg",
                                            alt: "logo_conexis",
                                            width: 24,
                                            height: 24
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_designSystem__WEBPACK_IMPORTED_MODULE_5__/* .Form */ .l0, {
                                        form: form,
                                        name: "register",
                                        onFinish: onSubmit,
                                        scrollToFirstError: true,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_designSystem__WEBPACK_IMPORTED_MODULE_5__/* .Row */ .X2, {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_designSystem__WEBPACK_IMPORTED_MODULE_5__/* .Col */ .JX, {
                                                    span: 24,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_designSystem__WEBPACK_IMPORTED_MODULE_5__/* .Form.Item */ .l0.Item, {
                                                            className: (_formUserUpdate_module_scss__WEBPACK_IMPORTED_MODULE_8___default().labelRequired),
                                                            name: "typeUser",
                                                            validateTrigger: "onSubmit",
                                                            label: "Select type of user",
                                                            rules: [
                                                                {
                                                                    required: true,
                                                                    validator: async (_, value)=>{
                                                                        if (!value) {
                                                                            setMessageError("All fields are required. Please make sure all fields are filled before submitting the form.");
                                                                            setShowError(true);
                                                                            return Promise.reject();
                                                                        }
                                                                        return Promise.resolve();
                                                                    }
                                                                }, 
                                                            ],
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_designSystem__WEBPACK_IMPORTED_MODULE_5__/* .Select */ .Ph, {
                                                                className: `${(_formUserUpdate_module_scss__WEBPACK_IMPORTED_MODULE_8___default().select_user_create)} ${"dummyClassCreateFormForBorder"}`,
                                                                style: {
                                                                    width: "100%",
                                                                    borderRight: "white"
                                                                },
                                                                size: "large",
                                                                onSelect: onSelectRole,
                                                                placeholder: "Select type of user here",
                                                                suffixIcon: " ",
                                                                maxTagCount: "responsive",
                                                                showSearch: true,
                                                                optionFilterProp: "children",
                                                                filterOption: (input, option)=>(option?.value ?? "").toLowerCase().includes(input.toLowerCase()),
                                                                options: roles
                                                            })
                                                        })
                                                    })
                                                })
                                            }),
                                            showBuyer && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_designSystem__WEBPACK_IMPORTED_MODULE_5__/* .Row */ .X2, {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_designSystem__WEBPACK_IMPORTED_MODULE_5__/* .Col */ .JX, {
                                                    span: 24,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_designSystem__WEBPACK_IMPORTED_MODULE_5__/* .Form.Item */ .l0.Item, {
                                                            className: (_formUserUpdate_module_scss__WEBPACK_IMPORTED_MODULE_8___default().labelRequired),
                                                            name: "buyer",
                                                            validateTrigger: "onSubmit",
                                                            label: "Select buyers",
                                                            rules: [
                                                                {
                                                                    required: true,
                                                                    validator: async (_, value)=>{
                                                                        if (!value) {
                                                                            setMessageError("All fields are required. Please make sure all fields are filled before submitting the form.");
                                                                            setShowError(true);
                                                                            return Promise.reject();
                                                                        }
                                                                        if (value.length === 0) {
                                                                            setMessageError("All fields are required. Please make sure all fields are filled before submitting the form.");
                                                                            setShowError(true);
                                                                            return Promise.reject();
                                                                        }
                                                                        return Promise.resolve();
                                                                    }
                                                                }, 
                                                            ],
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_designSystem__WEBPACK_IMPORTED_MODULE_5__/* .Select */ .Ph, {
                                                                mode: "multiple",
                                                                size: "large",
                                                                maxTagCount: "responsive",
                                                                placeholder: "Select buyers here",
                                                                // suffixIcon={' '}
                                                                className: `${(_formUserUpdate_module_scss__WEBPACK_IMPORTED_MODULE_8___default().select_user_create_multiple)} ${"dummyClassCreateFormForBorder"}`,
                                                                tagRender: _helpers__WEBPACK_IMPORTED_MODULE_7__/* .tagRender */ .lR,
                                                                style: {
                                                                    width: "100%"
                                                                },
                                                                showSearch: true,
                                                                optionFilterProp: "children",
                                                                filterOption: (input, option)=>(option?.label ?? "").toLowerCase().includes(input.toLowerCase()),
                                                                filterSort: (optionA, optionB)=>(optionA?.label ?? "").toLowerCase().localeCompare((optionB?.label ?? "").toLowerCase()),
                                                                options: possibleBuyers
                                                            })
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_designSystem__WEBPACK_IMPORTED_MODULE_5__/* .Row */ .X2, {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_designSystem__WEBPACK_IMPORTED_MODULE_5__/* .Col */ .JX, {
                                                            lg: 8,
                                                            sm: 24,
                                                            xs: 24,
                                                            md: 8,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_designSystem__WEBPACK_IMPORTED_MODULE_5__/* .Form.Item */ .l0.Item, {
                                                                    className: `${(_formUserUpdate_module_scss__WEBPACK_IMPORTED_MODULE_8___default().labelRequired)} ${(_formUserUpdate_module_scss__WEBPACK_IMPORTED_MODULE_8___default().smallInputs)}`,
                                                                    validateTrigger: "onSubmit",
                                                                    name: "firstName",
                                                                    label: "First name",
                                                                    rules: [
                                                                        {
                                                                            required: true,
                                                                            validator: async (_, value)=>{
                                                                                if (!value) {
                                                                                    setMessageError("All fields are required. Please make sure all fields are filled before submitting the form.");
                                                                                    setShowError(true);
                                                                                    return Promise.reject();
                                                                                }
                                                                                return Promise.resolve();
                                                                            }
                                                                        }, 
                                                                    ],
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_designSystem__WEBPACK_IMPORTED_MODULE_5__/* .Input */ .II, {
                                                                        className: (_formUserUpdate_module_scss__WEBPACK_IMPORTED_MODULE_8___default().inputLabel),
                                                                        size: "large",
                                                                        type: "text",
                                                                        placeholder: "Enter first name here"
                                                                    })
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_designSystem__WEBPACK_IMPORTED_MODULE_5__/* .Col */ .JX, {
                                                            lg: 8,
                                                            sm: 24,
                                                            xs: 24,
                                                            md: 8,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_designSystem__WEBPACK_IMPORTED_MODULE_5__/* .Form.Item */ .l0.Item, {
                                                                    className: `${(_formUserUpdate_module_scss__WEBPACK_IMPORTED_MODULE_8___default().labelRequired)} ${(_formUserUpdate_module_scss__WEBPACK_IMPORTED_MODULE_8___default().smallInputs)}`,
                                                                    name: "lastName",
                                                                    validateTrigger: "onSubmit",
                                                                    label: "Last name",
                                                                    rules: [
                                                                        {
                                                                            required: true,
                                                                            validator: async (_, value)=>{
                                                                                if (!value) {
                                                                                    setMessageError("All fields are required. Please make sure all fields are filled before submitting the form.");
                                                                                    setShowError(true);
                                                                                    return Promise.reject();
                                                                                }
                                                                                return Promise.resolve();
                                                                            }
                                                                        }, 
                                                                    ],
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_designSystem__WEBPACK_IMPORTED_MODULE_5__/* .Input */ .II, {
                                                                        className: (_formUserUpdate_module_scss__WEBPACK_IMPORTED_MODULE_8___default().inputLabel),
                                                                        size: "large",
                                                                        type: "text",
                                                                        placeholder: "Enter last name here"
                                                                    })
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_designSystem__WEBPACK_IMPORTED_MODULE_5__/* .Col */ .JX, {
                                                            lg: 8,
                                                            sm: 24,
                                                            xs: 24,
                                                            md: 8,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_designSystem__WEBPACK_IMPORTED_MODULE_5__/* .Form.Item */ .l0.Item, {
                                                                    className: (_formUserUpdate_module_scss__WEBPACK_IMPORTED_MODULE_8___default().labelRequired),
                                                                    name: "email",
                                                                    label: "Email",
                                                                    validateTrigger: "onSubmit",
                                                                    rules: [
                                                                        {
                                                                            required: true,
                                                                            type: "email",
                                                                            validator: async (_, value)=>{
                                                                                /// ^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/  optional permissive regex based on html5 standarts
                                                                                if (_consts_forms_general__WEBPACK_IMPORTED_MODULE_9__/* .EMAIL_VALIDATION_REGEX.test */ .bF.test(value)) {
                                                                                    return Promise.resolve();
                                                                                }
                                                                                if (!form.getFieldValue("buyer") || form.getFieldValue("buyer").length === 0 || !form.getFieldValue("firstName") || !form.getFieldValue("lastName")) {
                                                                                    return Promise.reject();
                                                                                }
                                                                                setMessageError("Please enter a valid email address.");
                                                                                setShowError(true);
                                                                                return Promise.reject();
                                                                            }
                                                                        }, 
                                                                    ],
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_designSystem__WEBPACK_IMPORTED_MODULE_5__/* .Input */ .II, {
                                                                        className: (_formUserUpdate_module_scss__WEBPACK_IMPORTED_MODULE_8___default().inputLabel),
                                                                        size: "large",
                                                                        placeholder: "example@email.com"
                                                                    })
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                style: {
                                                    marginTop: "24px"
                                                },
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_designSystem__WEBPACK_IMPORTED_MODULE_5__/* .Button */ .zx, {
                                                    type: "primary",
                                                    size: "large",
                                                    htmlType: "submit",
                                                    loading: isLoading,
                                                    children: "Submit"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                style: {
                                    height: "4px"
                                }
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormUserUpdate);


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