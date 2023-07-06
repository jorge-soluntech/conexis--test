(() => {
var exports = {};
exports.id = 8437;
exports.ids = [8437];
exports.modules = {

/***/ 1545:
/***/ ((module) => {

// Exports
module.exports = {
	"fallback": "fallbackComponent_fallback__Yuc_e",
	"opacityIn": "fallbackComponent_opacityIn__8TV2Z",
	"moveToRight": "fallbackComponent_moveToRight__7qnxF"
};


/***/ }),

/***/ 52752:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _application_authContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78760);
/* harmony import */ var _infrastructure_services_BusinessUnitsServices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94329);
/* harmony import */ var _locales_en_en_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89235);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_application_authContext__WEBPACK_IMPORTED_MODULE_2__, _infrastructure_services_BusinessUnitsServices__WEBPACK_IMPORTED_MODULE_3__]);
([_application_authContext__WEBPACK_IMPORTED_MODULE_2__, _infrastructure_services_BusinessUnitsServices__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const { formsCommon  } = _locales_en_en_json__WEBPACK_IMPORTED_MODULE_4__;
const useEditFormData = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
    const { 0: businessUnitId  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(router.query.businessUnitId);
    const { 0: showError , 1: setShowError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: phoneError , 1: setPhoneError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: successResult , 1: setSuccessResult  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { dataUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_application_authContext__WEBPACK_IMPORTED_MODULE_2__/* .AuthContext */ .Vo);
    const { 0: messageError , 1: setMessageError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(formsCommon.errors.required);
    const { 0: detailsBusinessUnit , 1: setDetailBusinessUnit  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        id: "",
        location: "",
        businessUnitNumber: ""
    });
    const { 0: fieldsValue , 1: setFieldsValue  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: loadingFormData , 1: setLoadingFormData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const businessUnitServices = new _infrastructure_services_BusinessUnitsServices__WEBPACK_IMPORTED_MODULE_3__/* .BusinessUnitServices */ .w(router);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function getEditFormData() {
        setLoadingFormData(true);
        const getBusinessUnitEdit = async ()=>{
            businessUnitServices.getBusinessUnitById(businessUnitId).then((response)=>{
                const { data  } = response;
                setDetailBusinessUnit({
                    id: data.id_number,
                    location: data.location,
                    businessUnitNumber: data.business_unit_number
                });
                setFieldsValue({
                    firstName: data.first_name,
                    lastName: data.last_name,
                    primaryEmail: data.primary_email,
                    region: data.region,
                    address: data.address,
                    primaryPhone: data.primary_phone
                });
                setLoadingFormData(false);
            }).catch((err)=>{
                if (err.request.status === 400) {
                    setMessageError(err.response?.data?.message);
                    setShowError(true);
                }
                if (err.request.status === 500) {
                    setMessageError(formsCommon.errors.main_error);
                    setShowError(true);
                }
            });
        };
        getBusinessUnitEdit();
    }, []);
    return {
        loadingFormData,
        businessUnitId,
        fieldsValue,
        showError,
        phoneError,
        successResult,
        dataUser,
        messageError,
        detailsBusinessUnit,
        setMessageError,
        setShowError,
        setPhoneError,
        setSuccessResult
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useEditFormData);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 56209:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fallbackComponent_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1545);
/* harmony import */ var _fallbackComponent_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fallbackComponent_module_scss__WEBPACK_IMPORTED_MODULE_3__);




const FallbackComponent = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_fallbackComponent_module_scss__WEBPACK_IMPORTED_MODULE_3___default().fallback),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
            src: "/assets/images/load_conexis.svg",
            width: 140,
            height: 117,
            alt: "mask",
            priority: true
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FallbackComponent);


/***/ }),

/***/ 16776:
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
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_common_businessUnitsComponents_editBusinessUnit_useEditFormData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52752);
/* harmony import */ var _components_common_fallbackComponent_FallbackComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56209);
/* harmony import */ var _components_common_loaders__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55439);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_common_businessUnitsComponents_editBusinessUnit_useEditFormData__WEBPACK_IMPORTED_MODULE_2__, _components_common_loaders__WEBPACK_IMPORTED_MODULE_4__]);
([_components_common_businessUnitsComponents_editBusinessUnit_useEditFormData__WEBPACK_IMPORTED_MODULE_2__, _components_common_loaders__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const FormEditBusinessUnit = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>Promise.all(/* import() */[__webpack_require__.e(2633), __webpack_require__.e(5823), __webpack_require__.e(3133)]).then(__webpack_require__.bind(__webpack_require__, 33133)), {
    loadableGenerated: {
        modules: [
            "home/business-units/edit/[businessUnitId].tsx -> " + "@/components/common/businessUnitsComponents/editBusinessUnit/EditBusinessUnit"
        ]
    },
    loading: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_fallbackComponent_FallbackComponent__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
});
/**
 * The MyJobs page, will see Main as a template, use the same template for other pages
 * @returns The MyJobs page ./
 */ const EditBusinessUnit = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_loaders__WEBPACK_IMPORTED_MODULE_4__/* .FormPageLoader */ .pG, {
        useGetData: _components_common_businessUnitsComponents_editBusinessUnit_useEditFormData__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
        hasFormDetailsHeader: true,
        children: ({ businessUnitId , fieldsValue , showError , phoneError , successResult , dataUser , messageError , detailsBusinessUnit , setMessageError , setShowError , setPhoneError , setSuccessResult ,  })=>{
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FormEditBusinessUnit, {
                businessUnitId,
                fieldsValue,
                showError,
                phoneError,
                successResult,
                dataUser,
                messageError,
                detailsBusinessUnit,
                setMessageError,
                setShowError,
                setPhoneError,
                setSuccessResult
            });
        }
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditBusinessUnit);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 87066:
/***/ ((module) => {

"use strict";
module.exports = require("@ant-design/icons");

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

/***/ 1635:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs");

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

/***/ 95832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

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

/***/ 15941:
/***/ ((module) => {

"use strict";
module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5675,5152,9235,3019,396,7632,8760,7406,9227,8776,5439,4329], () => (__webpack_exec__(16776)));
module.exports = __webpack_exports__;

})();