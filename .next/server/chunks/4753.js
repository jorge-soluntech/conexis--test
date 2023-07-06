exports.id = 4753;
exports.ids = [4753];
exports.modules = {

/***/ 45691:
/***/ ((module) => {

// Exports
module.exports = {
	"form_container": "formGlCodesCreate_form_container__0VilF",
	"form_create": "formGlCodesCreate_form_create__sPJdH",
	"form_subtitle": "formGlCodesCreate_form_subtitle__BNUNj",
	"form_user_create_col": "formGlCodesCreate_form_user_create_col__pT1bW",
	"labelRequired": "formGlCodesCreate_labelRequired__fg8oK",
	"infoIcon": "formGlCodesCreate_infoIcon__9Bxo9",
	"infoText": "formGlCodesCreate_infoText__FYZPG",
	"alertSuccess": "formGlCodesCreate_alertSuccess__sfx3d",
	"text": "formGlCodesCreate_text__t1oEb",
	"moveToRight": "formGlCodesCreate_moveToRight__QUYnK"
};


/***/ }),

/***/ 34753:
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
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _application_authContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(78760);
/* harmony import */ var _infrastructure_services_GLCodesServices__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17173);
/* harmony import */ var _locales_en_en_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(89235);
/* harmony import */ var _formGlCodesCreate_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(45691);
/* harmony import */ var _formGlCodesCreate_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_formGlCodesCreate_module_scss__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_application_authContext__WEBPACK_IMPORTED_MODULE_6__, _infrastructure_services_GLCodesServices__WEBPACK_IMPORTED_MODULE_7__]);
([_application_authContext__WEBPACK_IMPORTED_MODULE_6__, _infrastructure_services_GLCodesServices__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable array-callback-return */ 









const { Title  } = antd__WEBPACK_IMPORTED_MODULE_2__.Typography;
const { Content  } = antd__WEBPACK_IMPORTED_MODULE_2__.Layout;
/**
 * A form that is used to create a gl code.
 *
 * @param titleForm - The string of title form
 * @returns The form of gl codes
 */ const FormGlCodesCreate = ({ titleForm  })=>{
    const [form] = antd__WEBPACK_IMPORTED_MODULE_2__.Form.useForm();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const { 0: showError , 1: setShowError  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const { 0: successResult , 1: setSuccessResult  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const { dataUser  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_application_authContext__WEBPACK_IMPORTED_MODULE_6__/* .AuthContext */ .Vo);
    const { glCodes  } = _locales_en_en_json__WEBPACK_IMPORTED_MODULE_8__;
    const { 0: messageError , 1: setMessageError  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(glCodes.create.defaultErrorMessage);
    const glCodesServices = new _infrastructure_services_GLCodesServices__WEBPACK_IMPORTED_MODULE_7__/* .GLCodesServices */ .m(router);
    const onSubmit = async (data)=>{
        setLoading(true);
        const dataForm = {
            id_tenant: undefined,
            gl_code: data.gl_code,
            description: data.description
        };
        await glCodesServices.createGlCode(dataForm).then(()=>{
            setSuccessResult(true);
        }).catch((err)=>{
            if (err.request.status === 400) {
                setMessageError(err.response?.data?.message);
                setShowError(true);
            }
            if (err.request.status === 500) {
                setMessageError("There's been an error. Please try again later.");
                setShowError(true);
            }
        }).finally(()=>{
            setLoading(false);
        });
    };
    const gridStyle = {
        width: "100%",
        textAlign: "center",
        alignContent: "center",
        boxShadow: "none",
        padding: "10px"
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Content, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `${(_formGlCodesCreate_module_scss__WEBPACK_IMPORTED_MODULE_9___default().form_container)}`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Row, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Col, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                style: {
                                    cursor: "pointer",
                                    color: "#888E95",
                                    width: "fit-content",
                                    fontSize: "16px"
                                },
                                onClick: ()=>{
                                    router.push("/home/gl-codes", undefined, {
                                        shallow: true
                                    });
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__.LeftOutlined, {}),
                                    "\xa0 GL codes"
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_formGlCodesCreate_module_scss__WEBPACK_IMPORTED_MODULE_9___default().form_subtitle),
                        children: dataUser ? dataUser.logged_buyer_client_company_name : ""
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
                        style: {
                            marginBottom: "1.2rem",
                            marginTop: "0rem",
                            fontSize: 32
                        },
                        level: 2,
                        children: titleForm
                    }),
                    successResult ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Card, {
                        style: {
                            paddingTop: "0rem"
                        },
                        className: (_formGlCodesCreate_module_scss__WEBPACK_IMPORTED_MODULE_9___default().form_create),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Card.Grid, {
                                hoverable: false,
                                style: gridStyle,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    style: {
                                        marginTop: "55px"
                                    },
                                    className: `${(_formGlCodesCreate_module_scss__WEBPACK_IMPORTED_MODULE_9___default().alertSuccess)}`,
                                    children: "sucess"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Card.Grid, {
                                hoverable: false,
                                style: gridStyle,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    className: (_formGlCodesCreate_module_scss__WEBPACK_IMPORTED_MODULE_9___default().text),
                                    children: [
                                        "Your GL code has been",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        " successfully submitted."
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Card.Grid, {
                                hoverable: false,
                                style: gridStyle,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                        style: {
                                            fontSize: 16
                                        },
                                        type: "default",
                                        size: "large",
                                        htmlType: "submit",
                                        onClick: ()=>{
                                            router.push("/home/gl-codes", undefined, {
                                                shallow: true
                                            });
                                        },
                                        children: glCodes.create.buttonBack
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        style: {
                                            height: "50px"
                                        }
                                    })
                                ]
                            })
                        ]
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Card, {
                        style: {
                            paddingTop: "0rem"
                        },
                        className: (_formGlCodesCreate_module_scss__WEBPACK_IMPORTED_MODULE_9___default().form_create),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                showError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Alert, {
                                    style: {
                                        marginBottom: "1rem"
                                    },
                                    message: messageError,
                                    className: "alert_red",
                                    type: "error",
                                    showIcon: true,
                                    closable: true,
                                    afterClose: ()=>setShowError(false),
                                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        src: "/assets/icons/alert_error.svg",
                                        alt: "logo_conexis",
                                        width: 24,
                                        height: 24
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Form, {
                                    form: form,
                                    name: "register",
                                    onFinish: onSubmit,
                                    scrollToFirstError: true,
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Row, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Col, {
                                                    lg: 24,
                                                    sm: 24,
                                                    xs: 24,
                                                    style: {
                                                        paddingBottom: "10px"
                                                    },
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {
                                                                className: `${(_formGlCodesCreate_module_scss__WEBPACK_IMPORTED_MODULE_9___default().labelRequired)}`,
                                                                name: "gl_code",
                                                                validateTrigger: "onSubmit",
                                                                label: "GL code",
                                                                rules: [
                                                                    {
                                                                        required: true,
                                                                        validator: async (_, value)=>{
                                                                            if (!form.getFieldValue("gl_code") && !form.getFieldValue("description")) {
                                                                                setMessageError("The fields are mandatory. Please make sure to fill it out before submitting the form.");
                                                                                setShowError(true);
                                                                                return Promise.reject();
                                                                            }
                                                                            if (!value) {
                                                                                setMessageError("The GL code field is mandatory. Please make sure to fill it out before submitting the form.");
                                                                                setShowError(true);
                                                                                return Promise.reject();
                                                                            }
                                                                            return Promise.resolve();
                                                                        }
                                                                    }, 
                                                                ],
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Input, {
                                                                    size: "large",
                                                                    type: "text",
                                                                    placeholder: "Enter GL code here"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                style: {
                                                                    padding: 0,
                                                                    lineHeight: "16px"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: `${(_formGlCodesCreate_module_scss__WEBPACK_IMPORTED_MODULE_9___default().infoIcon)}`,
                                                                        children: "."
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: `${(_formGlCodesCreate_module_scss__WEBPACK_IMPORTED_MODULE_9___default().infoText)}`,
                                                                        children: "You won’t be able to edit this field later on."
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Col, {
                                                    lg: 24,
                                                    sm: 24,
                                                    xs: 24,
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {
                                                                className: `${(_formGlCodesCreate_module_scss__WEBPACK_IMPORTED_MODULE_9___default().labelRequired)}`,
                                                                name: "description",
                                                                validateTrigger: "onSubmit",
                                                                label: "Description",
                                                                rules: [
                                                                    {
                                                                        required: true,
                                                                        validator: async (_, value)=>{
                                                                            if (!form.getFieldValue("gl_code") && !form.getFieldValue("description")) {
                                                                                setMessageError("The fields are mandatory. Please make sure to fill it out before submitting the form.");
                                                                                setShowError(true);
                                                                                return Promise.reject();
                                                                            }
                                                                            if (!value) {
                                                                                setMessageError("The description field is mandatory. Please make sure to fill it out before submitting the form.");
                                                                                setShowError(true);
                                                                                return Promise.reject();
                                                                            }
                                                                            return Promise.resolve();
                                                                        }
                                                                    }, 
                                                                ],
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Input, {
                                                                    size: "large",
                                                                    type: "text",
                                                                    placeholder: "Enter description here"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                style: {
                                                                    padding: 0,
                                                                    lineHeight: "16px"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: `${(_formGlCodesCreate_module_scss__WEBPACK_IMPORTED_MODULE_9___default().infoIcon)}`,
                                                                        children: "."
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: `${(_formGlCodesCreate_module_scss__WEBPACK_IMPORTED_MODULE_9___default().infoText)}`,
                                                                        children: "You won’t be able to edit this field later on."
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            style: {
                                                marginTop: "24px"
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                                type: "primary",
                                                size: "large",
                                                htmlType: "submit",
                                                loading: loading,
                                                children: "Submit"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormGlCodesCreate);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;