exports.id = 9139;
exports.ids = [9139];
exports.modules = {

/***/ 43305:
/***/ ((module) => {

// Exports
module.exports = {
	"content_intro": "textIntro_content_intro__tdL62",
	"img_nasa": "textIntro_img_nasa__Gw0SF",
	"content_intro_main": "textIntro_content_intro_main__F1nXB",
	"black_filter": "textIntro_black_filter__e8Dka",
	"content_intro_filter": "textIntro_content_intro_filter__Lrtj2",
	"paragraph": "textIntro_paragraph__FgCmo",
	"container_text_intro": "textIntro_container_text_intro__HafPe",
	"moveToRight": "textIntro_moveToRight__82yOp"
};


/***/ }),

/***/ 58735:
/***/ ((module) => {

// Exports
module.exports = {
	"logo": "logotype_logo__katR2",
	"logo_title": "logotype_logo_title__KJC7d",
	"moveToRight": "logotype_moveToRight__xNgqk"
};


/***/ }),

/***/ 26707:
/***/ ((module) => {

// Exports
module.exports = {
	"container_main": "Main_container_main__ExjgI",
	"moveToRight": "Main_moveToRight__7Av09"
};


/***/ }),

/***/ 87550:
/***/ ((module) => {

// Exports
module.exports = {
	"row_columns_auth": "gridLogin_row_columns_auth__nCFS0",
	"container__form": "gridLogin_container__form__F99HN",
	"container__intro": "gridLogin_container__intro__N_eFG",
	"moveToRight": "gridLogin_moveToRight__I1Wrq"
};


/***/ }),

/***/ 13462:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "n": () => (/* binding */ LogoTypeWithMargin)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _consts_login_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4262);
/* harmony import */ var _hooks_useWindowDimension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60255);
/* harmony import */ var _logotype_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(58735);
/* harmony import */ var _logotype_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_logotype_module_scss__WEBPACK_IMPORTED_MODULE_4__);





/**
 * Returns the logo and title element
 *
 * @param src - The src of icon
 * @param title - The string of title
 * @param colorTitle the color of the title
 * @param widthLogo - The width of the icon
 * @param heightLogo - The height of the icon
 * @returns The the logo and title
 */ const Logotype = ({ src ="/assets/icons/logo_conexis.svg" , widthLogo =63.12 , heightLogo =57.05 ,  })=>{
    const { width =0  } = (0,_hooks_useWindowDimension__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_logotype_module_scss__WEBPACK_IMPORTED_MODULE_4___default().logo),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                src: src,
                alt: "logo",
                width: widthLogo,
                height: heightLogo,
                priority: true
            }),
            width <= _consts_login_ui__WEBPACK_IMPORTED_MODULE_2__/* .MOBILE_BREAKPOINT */ .Gh ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                src: "/assets/icons/conexis_title_phone.svg",
                alt: "logo",
                width: 89.02,
                height: 17.99,
                priority: true
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    marginLeft: "14.82px"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                    src: "/assets/icons/conexis_title.svg",
                    alt: "title",
                    width: 102,
                    height: 20
                })
            })
        ]
    });
};
const LogoTypeWithMargin = ()=>{
    const { width =0  } = (0,_hooks_useWindowDimension__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    return width <= _consts_login_ui__WEBPACK_IMPORTED_MODULE_2__/* .MOBILE_BREAKPOINT */ .Gh ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        style: {
            marginTop: 20,
            marginBottom: 20
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Logotype, {
            src: "/assets/icons/logo_conexis.svg"
        })
    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logotype);


/***/ }),

/***/ 9139:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ gridLogin_GridLogin)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(45725);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(25675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/components/hooks/useWindowDimension.ts
var useWindowDimension = __webpack_require__(60255);
// EXTERNAL MODULE: ./src/consts/index.ts + 8 modules
var consts = __webpack_require__(90396);
// EXTERNAL MODULE: ./src/consts/login_ui.ts + 1 modules
var login_ui = __webpack_require__(4262);
// EXTERNAL MODULE: ./src/components/common/logo/logotype.tsx
var logotype = __webpack_require__(13462);
// EXTERNAL MODULE: ./src/components/common/loginComponents/textIntro/textIntro.module.scss
var textIntro_module = __webpack_require__(43305);
var textIntro_module_default = /*#__PURE__*/__webpack_require__.n(textIntro_module);
;// CONCATENATED MODULE: ./src/components/common/loginComponents/textIntro/TextIntro.tsx








const { Title , Paragraph  } = external_antd_.Typography;
const TextIntro = ()=>{
    const { width =0  } = (0,useWindowDimension/* default */.Z)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (textIntro_module_default()).content_intro,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                className: (textIntro_module_default()).img_nasa,
                src: "/assets/images/login_nasa.jpg",
                layout: "fill",
                alt: "nasa"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (textIntro_module_default()).black_filter
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (textIntro_module_default()).content_intro_filter
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (textIntro_module_default()).content_intro_main,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(logotype/* default */.Z, {
                        src: "/assets/icons/logo_conexis_2.svg"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (textIntro_module_default()).container_text_intro,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Title, {
                                style: {
                                    marginTop: 0
                                },
                                level: 3,
                                children: width <= login_ui/* TABLET_BREAKPOINT */.rN ? consts/* loginUI.LOGIN_TEXT.title_intro_tablet */.Ym.KB.title_intro_tablet : consts/* loginUI.LOGIN_TEXT.title_intro */.Ym.KB.title_intro
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Paragraph, {
                                className: (textIntro_module_default()).paragraph,
                                children: consts/* loginUI.LOGIN_TEXT.subtitle_intro */.Ym.KB.subtitle_intro
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const textIntro_TextIntro = (TextIntro);

// EXTERNAL MODULE: ./src/components/common/templates/Main.module.scss
var Main_module = __webpack_require__(26707);
var Main_module_default = /*#__PURE__*/__webpack_require__.n(Main_module);
;// CONCATENATED MODULE: ./src/components/common/templates/Main.tsx


const Main = (props)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Main_module_default()).container_main,
        children: [
            props.meta,
            props.children
        ]
    });


// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(40968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(71853);
// EXTERNAL MODULE: external "next-seo"
var external_next_seo_ = __webpack_require__(16641);
// EXTERNAL MODULE: ./src/utils/AppConfig.ts
var AppConfig = __webpack_require__(1305);
;// CONCATENATED MODULE: ./src/components/layouts/Meta.tsx





/**
 * Returns meta data component with seo.
 *
 * @param title - The string of title head tag
 * @param description - The string of description head tag
 * @param canonical - The string of canonical head tag
 * @returns The head parameters
 */ const Meta = ({ title , description , canonical  })=>{
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        charSet: "UTF-8"
                    }, "charset"),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "initial-scale=1"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "apple-touch-icon",
                        href: `${router.basePath}/apple-touch-icon.png`
                    }, "apple"),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "32x32",
                        href: `${router.basePath}/favicon-32x32.png`
                    }, "icon32"),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "16x16",
                        href: `${router.basePath}/favicon-16x16.png`
                    }, "icon16"),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: `${router.basePath}/favicon.ico`
                    }, "favicon")
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_next_seo_.NextSeo, {
                title: title,
                description: description,
                canonical: canonical,
                openGraph: {
                    title,
                    description,
                    url: canonical,
                    locale: AppConfig/* AppConfig.locale */.X.locale,
                    site_name: AppConfig/* AppConfig.site_name */.X.site_name
                }
            })
        ]
    });
};


// EXTERNAL MODULE: ./src/components/layouts/gridLogin/gridLogin.module.scss
var gridLogin_module = __webpack_require__(87550);
var gridLogin_module_default = /*#__PURE__*/__webpack_require__.n(gridLogin_module);
;// CONCATENATED MODULE: ./src/components/layouts/gridLogin/GridLogin.tsx






const { Content  } = external_antd_.Layout;
const GridLogin = ({ children  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(Main, {
        meta: /*#__PURE__*/ jsx_runtime_.jsx(Meta, {
            title: "Conexis | Login",
            description: "Login page of conexis app"
        }),
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Layout, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(Content, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Row, {
                    className: (gridLogin_module_default()).row_columns_auth,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Col, {
                            xs: 24,
                            lg: 10,
                            className: (gridLogin_module_default()).container__intro,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(textIntro_TextIntro, {})
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Col, {
                            xs: 24,
                            lg: 14,
                            className: (gridLogin_module_default()).container__form,
                            children: children
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const gridLogin_GridLogin = (GridLogin);


/***/ }),

/***/ 1305:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ AppConfig)
/* harmony export */ });
const AppConfig = {
    site_name: "conexis front",
    title: "Conexis | Home",
    description: "Starter code for your Conexis Boilerplate",
    locale: "en"
};


/***/ })

};
;