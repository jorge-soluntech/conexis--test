(() => {
var exports = {};
exports.id = 7391;
exports.ids = [7391];
exports.modules = {

/***/ 24703:
/***/ ((module) => {

// Exports
module.exports = {
	"form_set": "formSet_form_set__PqSYn",
	"form_set_alert": "formSet_form_set_alert__Huzg2",
	"form_set_rules": "formSet_form_set_rules__PyWNt",
	"moveToRight": "formSet_moveToRight__DkMqE"
};


/***/ }),

/***/ 25269:
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
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45641);
/* harmony import */ var _application_authContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(78760);
/* harmony import */ var _components_common_input_Input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(31776);
/* harmony import */ var _components_common_loginComponents_backLogin_BackLogin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20766);
/* harmony import */ var _components_hooks_useFormAlert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20512);
/* harmony import */ var _components_hooks_useWindowDimension__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(60255);
/* harmony import */ var _consts_login_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4262);
/* harmony import */ var _logo_logotype__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(13462);
/* harmony import */ var _formSet_module_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(24703);
/* harmony import */ var _formSet_module_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_formSet_module_scss__WEBPACK_IMPORTED_MODULE_13__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_5__, _application_authContext__WEBPACK_IMPORTED_MODULE_6__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_5__, _application_authContext__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable @typescript-eslint/naming-convention */ 













const { Title , Paragraph  } = antd__WEBPACK_IMPORTED_MODULE_1__.Typography;
/**
 * Returns the Alert, Title and Form component
 *
 * @param titleForm - The string of title form
 * @param token - The token from de query url
 * @param email - The email from de query url
 * @returns The form of set-password page
 */ const FormSet = ({ titleForm , token , email  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { setNewPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_application_authContext__WEBPACK_IMPORTED_MODULE_6__/* .AuthContext */ .Vo);
    const { messageError , showError , renderAlert , closeError  } = (0,_components_hooks_useFormAlert__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)();
    const { register , handleSubmit  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm)();
    const { width =0  } = (0,_components_hooks_useWindowDimension__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)();
    const onSubmit = async (data)=>{
        const { password , password_repeat  } = data;
        const dataForm = {
            email,
            tenant: 9,
            token,
            newPassword: password,
            confirmationPassword: password_repeat
        };
        if (renderAlert(dataForm)) {
            return;
        }
        const isSetSuccess = await setNewPassword(dataForm);
        if (!isSetSuccess) {
            router.push("/auth/expired-link", undefined, {
                shallow: true
            });
            return;
        }
        router.push("/auth?setting=true", undefined, {
            shallow: true
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_formSet_module_scss__WEBPACK_IMPORTED_MODULE_13___default().form_set),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_logo_logotype__WEBPACK_IMPORTED_MODULE_12__/* .LogoTypeWithMargin */ .n, {}),
            width <= _consts_login_ui__WEBPACK_IMPORTED_MODULE_11__/* .TABLET_BREAKPOINT */ .rN && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_loginComponents_backLogin_BackLogin__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_formSet_module_scss__WEBPACK_IMPORTED_MODULE_13___default().form_set_alert),
                children: showError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Alert, {
                    message: messageError,
                    className: "alert_red",
                    type: "error",
                    style: {
                        width: "100%"
                    },
                    showIcon: true,
                    closable: true,
                    afterClose: ()=>closeError(),
                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        src: "/assets/icons/alert_error.svg",
                        alt: "logo_conexis",
                        width: 24,
                        height: 24
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                style: {
                    width: "100%"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
                        level: 3,
                        children: titleForm
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                        onSubmit: handleSubmit(onSubmit),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_input_Input__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                inputWidth: "100%",
                                inputHeight: "48px",
                                type: "password",
                                inputLabel: "Password",
                                placeholder: "",
                                id: "password",
                                register: register,
                                rules: {
                                    required: false
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                style: {
                                    marginTop: "24px"
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_input_Input__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                    inputWidth: "100%",
                                    inputHeight: "48px",
                                    type: "password",
                                    inputLabel: "Repeat password",
                                    placeholder: "",
                                    id: "password_repeat",
                                    register: register,
                                    rules: {
                                        required: false
                                    }
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Paragraph, {
                                className: (_formSet_module_scss__WEBPACK_IMPORTED_MODULE_13___default().form_set_rules),
                                children: [
                                    "Your password must contain at least 8 characters, ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    " 1 number, 1 special character, 1 uppercase letter."
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                style: {
                                    marginTop: "24px"
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                    type: "primary",
                                    size: "large",
                                    htmlType: "submit",
                                    children: "Create new password"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormSet);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 58606:
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
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69915);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_common_loginComponents_backLogin_BackLogin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20766);
/* harmony import */ var _components_common_loginComponents_formSet_FormSet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25269);
/* harmony import */ var _components_hooks_useWindowDimension__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60255);
/* harmony import */ var _components_layouts_gridLogin_GridLogin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9139);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(90396);
/* harmony import */ var _consts_login_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4262);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_1__, _components_common_loginComponents_formSet_FormSet__WEBPACK_IMPORTED_MODULE_4__]);
([js_cookie__WEBPACK_IMPORTED_MODULE_1__, _components_common_loginComponents_formSet_FormSet__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const SetPasswordPage = ({ token , email  })=>{
    const { width =0  } = (0,_components_hooks_useWindowDimension__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].remove("token");
        js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].remove("user");
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_layouts_gridLogin_GridLogin__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "back_desktop",
                children: width >= _consts_login_ui__WEBPACK_IMPORTED_MODULE_8__/* .TABLET_BREAKPOINT */ .rN && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_loginComponents_backLogin_BackLogin__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_loginComponents_formSet_FormSet__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                titleForm: _consts__WEBPACK_IMPORTED_MODULE_7__/* .loginUI.LOGIN_TEXT.title_form_set */ .Ym.KB.title_form_set,
                token: token,
                email: email
            })
        ]
    });
};
const getServerSideProps = async ({ query  })=>{
    const { token , email  } = query;
    if (token && email) {
        const emailDecode = encodeURIComponent(email).replace("%20", "+");
        return {
            props: {
                token,
                email: decodeURIComponent(emailDecode)
            }
        };
    }
    return {
        redirect: {
            destination: "/auth",
            permanent: false
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SetPasswordPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5675,9235,3019,396,7632,8760,1776,9139,6780,512], () => (__webpack_exec__(58606)));
module.exports = __webpack_exports__;

})();