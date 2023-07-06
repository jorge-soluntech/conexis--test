(() => {
var exports = {};
exports.id = 2473;
exports.ids = [2473];
exports.modules = {

/***/ 68440:
/***/ ((module) => {

// Exports
module.exports = {
	"form_auth": "formAuth_form_auth__WBFew",
	"form_auth_forgot": "formAuth_form_auth_forgot__cqKlD",
	"support": "formAuth_support__F9qqH",
	"moveToRight": "formAuth_moveToRight__pS9TK"
};


/***/ }),

/***/ 83941:
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
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69915);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45641);
/* harmony import */ var _application_authContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(78760);
/* harmony import */ var _application_uiSlice_uiSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(72281);
/* harmony import */ var _components_common_input_Input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(31776);
/* harmony import */ var _components_common_logo_logotype__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(13462);
/* harmony import */ var _components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(89480);
/* harmony import */ var _consts_routes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(42144);
/* harmony import */ var _formAuth_module_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(68440);
/* harmony import */ var _formAuth_module_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_formAuth_module_scss__WEBPACK_IMPORTED_MODULE_13__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_2__, react_hook_form__WEBPACK_IMPORTED_MODULE_6__, _application_authContext__WEBPACK_IMPORTED_MODULE_7__]);
([js_cookie__WEBPACK_IMPORTED_MODULE_2__, react_hook_form__WEBPACK_IMPORTED_MODULE_6__, _application_authContext__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const { Title , Paragraph  } = antd__WEBPACK_IMPORTED_MODULE_1__.Typography;
/**
 * Returns the Alert, Title and Form component
 *
 * @param titleForm - The string of title form
 * @returns The form of login page
 */ const FormAuth = ({ titleForm  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const dispatch = (0,_components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_11__/* .useAppDispatch */ .T)();
    const { loginUser , currentAttempts , failedAttempts  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_application_authContext__WEBPACK_IMPORTED_MODULE_7__/* .AuthContext */ .Vo);
    const { 0: showError , 1: setShowError  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const { 0: messageError , 1: setMessageError  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)("This field is required");
    const { register , handleSubmit  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm)();
    // Set failedAttempts to 0 every five minutes
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        const intervalAttempts = setInterval(()=>currentAttempts(0), 300000);
        return ()=>{
            clearInterval(intervalAttempts);
        };
    }, []);
    const onSubmit = async ({ username , password ,  })=>{
        setIsLoading(true);
        try {
            const isValidLogin = await loginUser(username, password, 9);
            if (js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].get("locked")) {
                setMessageError("Too many attempts. Try again in 60 minutes.");
                setShowError(true);
                return;
            }
            if (failedAttempts >= 4 && !isValidLogin) {
                const inFiveMinutes = new Date(new Date().getTime() + 60 * 60 * 1000);
                js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].set("locked", inFiveMinutes.toString(), {
                    expires: inFiveMinutes
                });
                setMessageError("Too many attempts. Try again in 60 minutes.");
                setShowError(true);
                return;
            }
            if (!isValidLogin) {
                currentAttempts(failedAttempts + 1);
                setMessageError("Email or password incorrect.");
                setShowError(true);
                return;
            }
            router.push(_consts_routes__WEBPACK_IMPORTED_MODULE_12__/* .URL_DASHBOARD */ .Zb);
        } finally{
            setIsLoading(false);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_formAuth_module_scss__WEBPACK_IMPORTED_MODULE_13___default().form_auth),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_logo_logotype__WEBPACK_IMPORTED_MODULE_10__/* .LogoTypeWithMargin */ .n, {}),
            showError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Alert, {
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
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                style: {
                    marginTop: 0
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
                        level: 3,
                        children: titleForm
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                        onSubmit: handleSubmit(onSubmit),
                        autoComplete: "off",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_input_Input__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                inputWidth: "100%",
                                inputHeight: "48px",
                                type: "text",
                                inputLabel: "Email",
                                id: "username",
                                register: register
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                style: {
                                    marginTop: "24px"
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_input_Input__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                    inputWidth: "100%",
                                    inputHeight: "48px",
                                    type: "password",
                                    inputLabel: "Password",
                                    placeholder: "8+ characters",
                                    id: "password",
                                    register: register
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_formAuth_module_scss__WEBPACK_IMPORTED_MODULE_13___default().form_auth_forgot),
                                onClick: ()=>{
                                    dispatch((0,_application_uiSlice_uiSlice__WEBPACK_IMPORTED_MODULE_8__/* .setShowSuccessReset */ .sW)());
                                    router.push("/auth/forgot-password", undefined, {
                                        shallow: true
                                    });
                                },
                                children: "Forgot password?"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                style: {
                                    marginTop: "24px"
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                    loading: isLoading,
                                    type: "primary",
                                    size: "large",
                                    htmlType: "submit",
                                    children: "Log in"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Paragraph, {
                                className: (_formAuth_module_scss__WEBPACK_IMPORTED_MODULE_13___default().support),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                        children: "Customer Support"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    " Email: customerhelp@conexis.io ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    "Monday - Friday (9:00 AM to 5:00 PM EST)"
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormAuth);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 46790:
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
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_common_loginComponents_formAuth_FormAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83941);
/* harmony import */ var _components_layouts_gridLogin_GridLogin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9139);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90396);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_common_loginComponents_formAuth_FormAuth__WEBPACK_IMPORTED_MODULE_4__]);
_components_common_loginComponents_formAuth_FormAuth__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const LoginPage = ({ resetting , setting , content  })=>{
    const [messageApi, contextHolder] = antd__WEBPACK_IMPORTED_MODULE_1__.message.useMessage();
    const successReset = ()=>{
        messageApi.open({
            type: "success",
            content: `Password successfully ${content}`,
            duration: 5,
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "icon_success_reset",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                    src: "/assets/icons/alert_success.svg",
                    alt: "check",
                    width: 24,
                    height: 24
                })
            })
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (resetting || setting) {
            successReset();
        }
    }, [
        resetting,
        setting
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            contextHolder,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layouts_gridLogin_GridLogin__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_loginComponents_formAuth_FormAuth__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    titleForm: _consts__WEBPACK_IMPORTED_MODULE_6__/* .loginUI.LOGIN_TEXT.title_form_login */ .Ym.KB.title_form_login
                })
            })
        ]
    });
};
const getServerSideProps = async ({ req , query ,  })=>{
    const { resetting , setting  } = query;
    if (resetting && !req.cookies.token) {
        return {
            props: {
                resetting,
                content: "changed"
            }
        };
    }
    if (setting && !req.cookies.token) {
        return {
            props: {
                setting,
                content: "set"
            }
        };
    }
    if (!req.cookies.token) {
        return {
            props: {
                resetting: false,
                content: ""
            }
        };
    }
    return {
        redirect: {
            destination: "/dashboard",
            permanent: false
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 75184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

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

/***/ 16641:
/***/ ((module) => {

"use strict";
module.exports = require("next-seo");

/***/ }),

/***/ 94957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 50744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 35843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 28854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 93297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 59232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 40968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

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

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

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

/***/ }),

/***/ 45641:
/***/ ((module) => {

"use strict";
module.exports = import("react-hook-form");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5675,9235,3019,396,7632,8760,7406,1776,9139,2281], () => (__webpack_exec__(46790)));
module.exports = __webpack_exports__;

})();