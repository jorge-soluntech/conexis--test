exports.id = 6690;
exports.ids = [6690];
exports.modules = {

/***/ 60690:
/***/ ((module) => {

// Exports
module.exports = {
	"label": "formOnboardingActivities_label__vMehS",
	"row": "formOnboardingActivities_row__3tgvI",
	"moveToRight": "formOnboardingActivities_moveToRight__DVodq"
};


/***/ }),

/***/ 35868:
/***/ ((module) => {

// Exports
module.exports = {
	"oActivities": "onboardingActivities_oActivities___66CK",
	"oActivities__buyer": "onboardingActivities_oActivities__buyer__gzPy5",
	"oActivities__title": "onboardingActivities_oActivities__title__1uc_3",
	"form_container": "onboardingActivities_form_container__LbWlP",
	"moveToRight": "onboardingActivities_moveToRight__EtjcC"
};


/***/ }),

/***/ 96690:
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _application_authContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78760);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(90396);
/* harmony import */ var _locales_en_en_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(89235);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(93293);
/* harmony import */ var _successComponent_SuccessComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3404);
/* harmony import */ var _formOnboardingActivities_FormOnboardingActivities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(23075);
/* harmony import */ var _onboardingActivities_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(35868);
/* harmony import */ var _onboardingActivities_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_onboardingActivities_module_scss__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_application_authContext__WEBPACK_IMPORTED_MODULE_4__, _utils__WEBPACK_IMPORTED_MODULE_7__, _formOnboardingActivities_FormOnboardingActivities__WEBPACK_IMPORTED_MODULE_9__]);
([_application_authContext__WEBPACK_IMPORTED_MODULE_4__, _utils__WEBPACK_IMPORTED_MODULE_7__, _formOnboardingActivities_FormOnboardingActivities__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const { Title  } = antd__WEBPACK_IMPORTED_MODULE_1__.Typography;
const { Content  } = antd__WEBPACK_IMPORTED_MODULE_1__.Layout;
const OnboardingActivities = ()=>{
    const { dataUser ={
        logged_buyer_client_company_name: ""
    }  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_application_authContext__WEBPACK_IMPORTED_MODULE_4__/* .AuthContext */ .Vo);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { success  } = router.query;
    const nameCompany = _utils__WEBPACK_IMPORTED_MODULE_7__/* .str.capitalizeString */ .Bd.capitalizeString(dataUser.logged_buyer_client_company_name);
    const { onboardingActivities  } = _locales_en_en_json__WEBPACK_IMPORTED_MODULE_6__;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_onboardingActivities_module_scss__WEBPACK_IMPORTED_MODULE_10___default().oActivities),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
                level: 4,
                className: (_onboardingActivities_module_scss__WEBPACK_IMPORTED_MODULE_10___default().oActivities__buyer),
                children: nameCompany
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
                level: 3,
                className: (_onboardingActivities_module_scss__WEBPACK_IMPORTED_MODULE_10___default().oActivities__title),
                children: onboardingActivities.titleForm
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: onboardingActivities.descriptionForm
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Content, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_onboardingActivities_module_scss__WEBPACK_IMPORTED_MODULE_10___default().form_container),
                    children: success ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_successComponent_SuccessComponent__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        title: onboardingActivities.titleSuccess,
                        textButton: onboardingActivities.textButtonSuccess,
                        route: _consts__WEBPACK_IMPORTED_MODULE_5__/* .urls.URL_BACK_FORM_ONBOARDING */ .jk.zh
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_formOnboardingActivities_FormOnboardingActivities__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {})
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OnboardingActivities);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 23075:
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
/* harmony import */ var _application_onboardingSlice_onboardingSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(72823);
/* harmony import */ var _components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(89480);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(90396);
/* harmony import */ var _locales_en_en_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(89235);
/* harmony import */ var _formOnboardingActivities_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(60690);
/* harmony import */ var _formOnboardingActivities_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_formOnboardingActivities_module_scss__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_application_authContext__WEBPACK_IMPORTED_MODULE_4__, _application_onboardingSlice_onboardingSlice__WEBPACK_IMPORTED_MODULE_5__]);
([_application_authContext__WEBPACK_IMPORTED_MODULE_4__, _application_onboardingSlice_onboardingSlice__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const FormOnboardingActivities = ()=>{
    const { valueItems  } = (0,_components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_6__/* .useAppSelector */ .C)((state)=>state.onboarding);
    const { idTenant  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_application_authContext__WEBPACK_IMPORTED_MODULE_4__/* .AuthContext */ .Vo);
    const dispatch = (0,_components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_6__/* .useAppDispatch */ .T)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { dataUser ={
        logged_buyer: ""
    }  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_application_authContext__WEBPACK_IMPORTED_MODULE_4__/* .AuthContext */ .Vo);
    const { 0: isLoading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const form = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    const { onboardingActivities  } = _locales_en_en_json__WEBPACK_IMPORTED_MODULE_8__;
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        dispatch((0,_application_onboardingSlice_onboardingSlice__WEBPACK_IMPORTED_MODULE_5__/* .readOnboardingItems */ .h6)(router));
    }, [
        router,
        dataUser?.logged_buyer
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        form.current?.resetFields();
    }, [
        valueItems
    ]);
    const onFinish = async (values)=>{
        setLoading(true);
        const response = await dispatch((0,_application_onboardingSlice_onboardingSlice__WEBPACK_IMPORTED_MODULE_5__/* .createBuyerOnboardingItem */ .aO)({
            router,
            body: {
                ...values,
                id_tenant: idTenant
            }
        }));
        if (response.payload) {
            router.push(_consts__WEBPACK_IMPORTED_MODULE_7__/* .urls.URL_SUCCESS_ONBOARDING */ .jk.A3, undefined, {
                shallow: true
            });
            setLoading(false);
        }
    };
    const renderInputs = ()=>{
        return _consts__WEBPACK_IMPORTED_MODULE_7__/* .onboardingUI.dataInputs */ .hY.dataInputs?.map((data, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                xs: 24,
                sm: 24,
                md: 12,
                lg: 12,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                    label: data.title,
                    name: data.id,
                    className: (_formOnboardingActivities_module_scss__WEBPACK_IMPORTED_MODULE_9___default().label),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Input, {
                        placeholder: onboardingActivities.placeholderInputs,
                        size: "large"
                    })
                })
            }, index));
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Form, {
        name: "basic",
        initialValues: valueItems,
        onFinish: onFinish,
        layout: "vertical",
        ref: form,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                className: (_formOnboardingActivities_module_scss__WEBPACK_IMPORTED_MODULE_9___default().row),
                gutter: [
                    24,
                    20
                ],
                children: renderInputs()
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
                    type: "primary",
                    htmlType: "submit",
                    style: {
                        marginTop: 24
                    },
                    loading: isLoading,
                    children: onboardingActivities.titleButtonSubmit
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormOnboardingActivities);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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


/***/ }),

/***/ 93293:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bd": () => (/* reexport module object */ _stringUtils__WEBPACK_IMPORTED_MODULE_2__)
/* harmony export */ });
/* harmony import */ var _AppConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1305);
/* harmony import */ var _reduxProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80707);
/* harmony import */ var _stringUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25690);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reduxProvider__WEBPACK_IMPORTED_MODULE_1__]);
_reduxProvider__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 80707:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _application_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33735);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_application_store__WEBPACK_IMPORTED_MODULE_3__]);
_application_store__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const ReduxProvider = ({ children  })=>{
    return /*#__PURE__*/ _jsx(Provider, {
        store: store,
        children: children
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (ReduxProvider)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 25690:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "capitalizeString": () => (/* binding */ capitalizeString),
/* harmony export */   "getInitials": () => (/* binding */ getInitials)
/* harmony export */ });
const getInitials = (name)=>name?.match(/\b(\w)/g)?.join("").substring(0, 3).toUpperCase();
const capitalizeString = (str)=>str?.charAt(0).toUpperCase() + str?.slice(1);


/***/ })

};
;