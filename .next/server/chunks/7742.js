exports.id = 7742;
exports.ids = [7742];
exports.modules = {

/***/ 37972:
/***/ ((module) => {

// Exports
module.exports = {
	"form_forgot": "formForgot_form_forgot__s0cAf",
	"form_forgot_subtitle": "formForgot_form_forgot_subtitle__YXJOq",
	"moveToRight": "formForgot_moveToRight__MzwK0"
};


/***/ }),

/***/ 47742:
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
/* harmony import */ var _components_hooks_useWindowDimension__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(60255);
/* harmony import */ var _consts_login_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4262);
/* harmony import */ var _logo_logotype__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(13462);
/* harmony import */ var _formForgot_module_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(37972);
/* harmony import */ var _formForgot_module_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_formForgot_module_scss__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_5__, _application_authContext__WEBPACK_IMPORTED_MODULE_6__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_5__, _application_authContext__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












// import BackLogin from '../backLogin/backLogin';

const { Title , Paragraph  } = antd__WEBPACK_IMPORTED_MODULE_1__.Typography;
/**
 * Returns the Alert, Title and Form component
 *
 * @param titleForm - The string of title form
 * @param subtitleForm - The string of subtitle form
 * @returns The form of forgot-password page
 */ const FormForgot = ({ titleForm , subtitleForm  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { emailCheckToSend  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_application_authContext__WEBPACK_IMPORTED_MODULE_6__/* .AuthContext */ .Vo);
    const { register , handleSubmit  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm)();
    const { width =0  } = (0,_components_hooks_useWindowDimension__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)();
    const { 0: showError , 1: setShowError  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const { 0: messageError , 1: setMessageError  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("");
    const onSubmit = async (data)=>{
        const { status , message  } = await emailCheckToSend(data.email, 9);
        if (!status) {
            setShowError(true);
            setMessageError(message);
            return;
        }
        router.push("/auth/email-sent", undefined, {
            shallow: true
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_formForgot_module_scss__WEBPACK_IMPORTED_MODULE_12___default().form_forgot),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_logo_logotype__WEBPACK_IMPORTED_MODULE_11__/* .LogoTypeWithMargin */ .n, {}),
            width <= _consts_login_ui__WEBPACK_IMPORTED_MODULE_10__/* .TABLET_BREAKPOINT */ .rN && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_loginComponents_backLogin_BackLogin__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
            showError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Alert, {
                message: messageError,
                className: "alert_red",
                style: {
                    marginBottom: 24
                },
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
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container_form",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
                        level: 3,
                        children: titleForm
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Paragraph, {
                        className: (_formForgot_module_scss__WEBPACK_IMPORTED_MODULE_12___default().form_forgot_subtitle),
                        children: subtitleForm
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                        onSubmit: handleSubmit(onSubmit),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_input_Input__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                inputWidth: "100%",
                                inputHeight: "48px",
                                type: "email",
                                id: "email",
                                register: register,
                                inputLabel: "Email"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                style: {
                                    marginTop: "24px"
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                    type: "primary",
                                    size: "large",
                                    htmlType: "submit",
                                    children: "Send email"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormForgot);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;