(() => {
var exports = {};
exports.id = 817;
exports.ids = [817];
exports.modules = {

/***/ 6854:
/***/ ((module) => {

// Exports
module.exports = {
	"text": "errorMail_text__uBGBl",
	"subText": "errorMail_subText__2CfQy",
	"form_container": "errorMail_form_container__bKeK2",
	"alertError": "errorMail_alertError__5tzws",
	"moveToRight": "errorMail_moveToRight__pvMrI"
};


/***/ }),

/***/ 10920:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
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
/* harmony import */ var _infrastructure_services_UserServices__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(34613);
/* harmony import */ var _errorMail_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6854);
/* harmony import */ var _errorMail_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_errorMail_module_scss__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_application_authContext__WEBPACK_IMPORTED_MODULE_5__, _infrastructure_services_UserServices__WEBPACK_IMPORTED_MODULE_6__]);
([_application_authContext__WEBPACK_IMPORTED_MODULE_5__, _infrastructure_services_UserServices__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const { Title  } = antd__WEBPACK_IMPORTED_MODULE_2__.Typography;
const ErrorMailComponent = ({ titleForm  })=>{
    const { 0: available , 1: setAvailable  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true);
    const { 0: countReSend , 1: setCountReSend  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get("email") || "";
    const gridStyle = {
        width: "100%",
        textAlign: "center",
        boxShadow: "none",
        alignContent: "center",
        padding: "10px"
    };
    const userServices = new _infrastructure_services_UserServices__WEBPACK_IMPORTED_MODULE_6__/* .UserServices */ .c(router);
    const { user  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_application_authContext__WEBPACK_IMPORTED_MODULE_5__/* .AuthContext */ .Vo);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: `${(_errorMail_module_scss__WEBPACK_IMPORTED_MODULE_7___default().form_container)}`,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
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
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
                    style: {
                        marginTop: "3rem",
                        fontSize: 32
                    },
                    level: 2,
                    children: titleForm
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Card, {
                    style: {
                        marginTop: "20px",
                        marginLeft: "auto",
                        marginRight: "auto",
                        width: "100%"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Card.Grid, {
                            hoverable: false,
                            style: gridStyle,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                style: {
                                    marginTop: "60px"
                                },
                                className: `${(_errorMail_module_scss__WEBPACK_IMPORTED_MODULE_7___default().alertError)}`,
                                children: "Error"
                            })
                        }),
                        available ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Card.Grid, {
                                    hoverable: false,
                                    style: gridStyle,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: (_errorMail_module_scss__WEBPACK_IMPORTED_MODULE_7___default().text),
                                        children: [
                                            "User has been created but the",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                            " email was not sent."
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Card.Grid, {
                                    hoverable: false,
                                    style: gridStyle,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: (_errorMail_module_scss__WEBPACK_IMPORTED_MODULE_7___default().subText),
                                        children: "Please retry sending the user activation email."
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
                                            onClick: async ()=>{
                                                await userServices.resendEmail({
                                                    email,
                                                    tenant: user?.tenant ? Number(user.tenant) : 1,
                                                    messageType: "ResendEmailVerification"
                                                }).then(()=>{
                                                    router.push("/home/users/create/success-form", undefined, {
                                                        shallow: true
                                                    });
                                                }).catch(()=>{
                                                    setCountReSend(countReSend + 1);
                                                    if (countReSend >= 2) setAvailable(false);
                                                });
                                            },
                                            children: "Send email"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            style: {
                                                height: "50px"
                                            }
                                        })
                                    ]
                                })
                            ]
                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Card.Grid, {
                                    hoverable: false,
                                    style: gridStyle,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: (_errorMail_module_scss__WEBPACK_IMPORTED_MODULE_7___default().text),
                                        children: [
                                            "There have been 3 unsuccesful ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                            "attempts at sending the user ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                            "activation email."
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Card.Grid, {
                                    hoverable: false,
                                    style: gridStyle,
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            className: (_errorMail_module_scss__WEBPACK_IMPORTED_MODULE_7___default().subText),
                                            children: [
                                                "Please contact support at",
                                                " ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    style: {
                                                        color: "#DD7812"
                                                    },
                                                    children: "customerhelp@conexis.io"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            style: {
                                                height: "50px"
                                            }
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorMailComponent);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 55386:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_common_userCreateComponents_formErrorMail_ErrorMailComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10920);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(90396);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_common_userCreateComponents_formErrorMail_ErrorMailComponent__WEBPACK_IMPORTED_MODULE_1__]);
_components_common_userCreateComponents_formErrorMail_ErrorMailComponent__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



/**
 * The MyJobs page, will see Main as a template, use the same template for other pages
 * @returns The MyJobs page ./
 */ const ErrorForm = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_userCreateComponents_formErrorMail_ErrorMailComponent__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            titleForm: _consts__WEBPACK_IMPORTED_MODULE_2__/* .userCretaeUI.USER_CREATION_TEXT.title_form_user_creation */ .XI.n4.title_form_user_creation
        })
    });
};
const getServerSideProps = async ({ req  })=>{
    if (req.cookies.token) {
        return {
            props: {}
        };
    }
    return {
        redirect: {
            destination: "/auth",
            permanent: false
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 87066:
/***/ ((module) => {

"use strict";
module.exports = require("@ant-design/icons");

/***/ }),

/***/ 45725:
/***/ ((module) => {

"use strict";
module.exports = require("antd");

/***/ }),

/***/ 52167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 71853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 16689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 20997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 69915:
/***/ ((module) => {

"use strict";
module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [9235,3019,396,7632,8760,4613], () => (__webpack_exec__(55386)));
module.exports = __webpack_exports__;

})();