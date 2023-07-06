exports.id = 9282;
exports.ids = [9282];
exports.modules = {

/***/ 51500:
/***/ ((module) => {

// Exports
module.exports = {
	"form_container": "formCostCenterCreate_form_container__D9dtT",
	"form_create": "formCostCenterCreate_form_create__Qu4Vh",
	"form_subtitle": "formCostCenterCreate_form_subtitle__wDZPu",
	"form_user_create_col": "formCostCenterCreate_form_user_create_col__EVzCu",
	"labelRequired": "formCostCenterCreate_labelRequired__Zv5QG",
	"infoIcon": "formCostCenterCreate_infoIcon__0wm8r",
	"infoText": "formCostCenterCreate_infoText__YXv3A",
	"alertSuccess": "formCostCenterCreate_alertSuccess__pjV9M",
	"text": "formCostCenterCreate_text__eETcv",
	"moveToRight": "formCostCenterCreate_moveToRight__g052J"
};


/***/ }),

/***/ 49282:
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
/* harmony import */ var _infrastructure_services_CostCenterServices__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(38426);
/* harmony import */ var _formCostCenterCreate_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(51500);
/* harmony import */ var _formCostCenterCreate_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_formCostCenterCreate_module_scss__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_application_authContext__WEBPACK_IMPORTED_MODULE_6__, _infrastructure_services_CostCenterServices__WEBPACK_IMPORTED_MODULE_7__]);
([_application_authContext__WEBPACK_IMPORTED_MODULE_6__, _infrastructure_services_CostCenterServices__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable array-callback-return */ 








const { Title  } = antd__WEBPACK_IMPORTED_MODULE_2__.Typography;
const { Content  } = antd__WEBPACK_IMPORTED_MODULE_2__.Layout;
/**
 * A form that is used to create a cost center.
 *
 * @param titleForm - The string of title form
 * @returns The form of costCenters
 */ const FormCostCenterCreate = ({ titleForm ,  })=>{
    const [form] = antd__WEBPACK_IMPORTED_MODULE_2__.Form.useForm();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const { 0: showError , 1: setShowError  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const { 0: successResult , 1: setSuccessResult  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const { dataUser  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_application_authContext__WEBPACK_IMPORTED_MODULE_6__/* .AuthContext */ .Vo);
    const { 0: isLoading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const { 0: messageError , 1: setMessageError  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)("This field is required");
    const costCenterServices = new _infrastructure_services_CostCenterServices__WEBPACK_IMPORTED_MODULE_7__/* .CostCenterServices */ .u(router);
    const onSubmit = async (data)=>{
        const dataForm = {
            id_tenant: undefined,
            cost_center: data.number.toString(),
            cost_center_name: data.name,
            buyer: undefined
        };
        setLoading(true);
        await costCenterServices.createCostCenter(dataForm).then(()=>{
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
        }).finally(()=>setLoading(false));
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
                className: `${(_formCostCenterCreate_module_scss__WEBPACK_IMPORTED_MODULE_8___default().form_container)}`,
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
                                    router.push("/home/cost-centers", undefined, {
                                        shallow: true
                                    });
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__.LeftOutlined, {}),
                                    "\xa0 Cost centers"
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_formCostCenterCreate_module_scss__WEBPACK_IMPORTED_MODULE_8___default().form_subtitle),
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
                        className: (_formCostCenterCreate_module_scss__WEBPACK_IMPORTED_MODULE_8___default().form_create),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Card.Grid, {
                                hoverable: false,
                                style: gridStyle,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    style: {
                                        marginTop: "55px"
                                    },
                                    className: `${(_formCostCenterCreate_module_scss__WEBPACK_IMPORTED_MODULE_8___default().alertSuccess)}`,
                                    children: "sucess"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Card.Grid, {
                                hoverable: false,
                                style: gridStyle,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    className: (_formCostCenterCreate_module_scss__WEBPACK_IMPORTED_MODULE_8___default().text),
                                    children: [
                                        "Your cost center has been",
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
                                            router.push("/home/cost-centers", undefined, {
                                                shallow: true
                                            });
                                        },
                                        children: "Go back to cost centers"
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
                        className: (_formCostCenterCreate_module_scss__WEBPACK_IMPORTED_MODULE_8___default().form_create),
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
                                                                className: `${(_formCostCenterCreate_module_scss__WEBPACK_IMPORTED_MODULE_8___default().labelRequired)}`,
                                                                name: "number",
                                                                validateTrigger: "onSubmit",
                                                                label: "Number",
                                                                rules: [
                                                                    {
                                                                        required: true,
                                                                        validator: async (_, value)=>{
                                                                            if (!form.getFieldValue("number") && !form.getFieldValue("name")) {
                                                                                setMessageError("The fields are mandatory. Please make sure to fill it out before submitting the form.");
                                                                                setShowError(true);
                                                                                return Promise.reject();
                                                                            }
                                                                            if (!value) {
                                                                                setMessageError("The number field is mandatory. Please make sure to fill it out before submitting the form.");
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
                                                                    placeholder: "Enter number here"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                style: {
                                                                    padding: 0,
                                                                    lineHeight: "16px"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: `${(_formCostCenterCreate_module_scss__WEBPACK_IMPORTED_MODULE_8___default().infoIcon)}`,
                                                                        children: "."
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: `${(_formCostCenterCreate_module_scss__WEBPACK_IMPORTED_MODULE_8___default().infoText)}`,
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
                                                                className: `${(_formCostCenterCreate_module_scss__WEBPACK_IMPORTED_MODULE_8___default().labelRequired)}`,
                                                                name: "name",
                                                                validateTrigger: "onSubmit",
                                                                label: "Name",
                                                                rules: [
                                                                    {
                                                                        required: true,
                                                                        validator: async (_, value)=>{
                                                                            if (!form.getFieldValue("number") && !form.getFieldValue("name")) {
                                                                                setMessageError("The fields are mandatory. Please make sure to fill it out before submitting the form.");
                                                                                setShowError(true);
                                                                                return Promise.reject();
                                                                            }
                                                                            if (!value) {
                                                                                setMessageError("The name field is mandatory. Please make sure to fill it out before submitting the form.");
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
                                                                    placeholder: "Enter cost center name here"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                style: {
                                                                    padding: 0,
                                                                    lineHeight: "16px"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: `${(_formCostCenterCreate_module_scss__WEBPACK_IMPORTED_MODULE_8___default().infoIcon)}`,
                                                                        children: "."
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: `${(_formCostCenterCreate_module_scss__WEBPACK_IMPORTED_MODULE_8___default().infoText)}`,
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
                                                loading: isLoading,
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormCostCenterCreate);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 38426:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ CostCenterServices)
/* harmony export */ });
/* harmony import */ var _api_configFetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51573);
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97237);
/* harmony import */ var _utilsServices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17632);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_configFetch__WEBPACK_IMPORTED_MODULE_0__, _utilsServices__WEBPACK_IMPORTED_MODULE_2__]);
([_api_configFetch__WEBPACK_IMPORTED_MODULE_0__, _utilsServices__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable class-methods-use-this */ 


const createUrl = (base, path)=>`${base}${path}`;
const BASE_URL = "https://d5ja6jkvsot2v.cloudfront.net"; // Replace by your env variable
class CostCenterServices {
    constructor(router){
        this.router = router;
    }
    createCostCenter = async (dataForm)=>{
        try {
            const response = await (0,_api_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)((0,_api_configFetch__WEBPACK_IMPORTED_MODULE_0__/* .configPost */ .DH)([
                createUrl(BASE_URL, "/costCenters/create")
            ], dataForm));
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
   * toggle cost center status for the field is_active
   *
   * Method: PUT
   *
   * @param id - id cost center string
   */ toggleCostCentersStatus = async (id)=>{
        try {
            const response = await (0,_api_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)((0,_api_configFetch__WEBPACK_IMPORTED_MODULE_0__/* .configPut */ .FQ)([
                createUrl(BASE_URL, `/costCenters/${id}/isActive/toggle`)
            ], {}));
            return response.data;
        } catch (error) {
            if (error.response?.status === 400) {
                return {
                    statusCode: error.response.data.statusCode,
                    message: error.response.data.message
                };
            }
            if (error.response?.status === 404) {
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

/***/ })

};
;