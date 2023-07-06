"use strict";
(() => {
var exports = {};
exports.id = 9766;
exports.ids = [9766];
exports.modules = {

/***/ 37357:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _application_authContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78760);
/* harmony import */ var _infrastructure_services_GLCodesServices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17173);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_application_authContext__WEBPACK_IMPORTED_MODULE_2__, _infrastructure_services_GLCodesServices__WEBPACK_IMPORTED_MODULE_3__]);
([_application_authContext__WEBPACK_IMPORTED_MODULE_2__, _infrastructure_services_GLCodesServices__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const useGLCodes = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
    const glCodesServices = new _infrastructure_services_GLCodesServices__WEBPACK_IMPORTED_MODULE_3__/* .GLCodesServices */ .m(router);
    const { 0: searchText , 1: setSearchText  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: loading , 1: setLoader  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { 0: dataGLCodes , 1: setDataGLCodes  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: filteredData , 1: setFilteredData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { dataUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_application_authContext__WEBPACK_IMPORTED_MODULE_2__/* .AuthContext */ .Vo);
    const getGlCodes = async ()=>{
        await glCodesServices.getGLCodes().then((response)=>{
            const result = response.data.map(({ id , gl_code , description , is_active  })=>{
                return {
                    key: id,
                    description,
                    glCode: gl_code,
                    isActive: is_active
                };
            });
            setDataGLCodes(result);
            setLoader(false);
        });
    };
    const handleSearchChange = (value)=>{
        if (value.toLowerCase() !== "") {
            setSearchText(true);
            const filterData = dataGLCodes.filter((item)=>item.glCode?.toLowerCase().includes(value.toLowerCase()) || item.description?.toLowerCase().includes(value.toLowerCase()));
            setFilteredData(filterData);
        } else {
            setSearchText(false);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        getGlCodes();
    }, [
        dataUser?.logged_buyer
    ]);
    return {
        dataGLCodes,
        filteredData,
        handleSearchChange,
        loading,
        setDataGLCodes,
        setFilteredData,
        searchText
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useGLCodes);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 25786:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _components_common_glCodesComponents_useGLCodesData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37357);
/* harmony import */ var _components_common_loaders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55439);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_common_glCodesComponents_useGLCodesData__WEBPACK_IMPORTED_MODULE_2__, _components_common_loaders__WEBPACK_IMPORTED_MODULE_3__]);
([_components_common_glCodesComponents_useGLCodesData__WEBPACK_IMPORTED_MODULE_2__, _components_common_loaders__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const GLCodes = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>Promise.all(/* import() */[__webpack_require__.e(1957), __webpack_require__.e(2758), __webpack_require__.e(1776), __webpack_require__.e(5821), __webpack_require__.e(5027)]).then(__webpack_require__.bind(__webpack_require__, 65027)), {
    loadableGenerated: {
        modules: [
            "home/gl-codes/index.tsx -> " + "@/components/common/glCodesComponents/glCodes/GLCodes"
        ]
    }
});
/**
 * GL codes main page
 *
 * @returns The GL codes page
 */ const GLCodesPage = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_loaders__WEBPACK_IMPORTED_MODULE_3__/* .TablePageLoader */ .gl, {
        useGetData: _components_common_glCodesComponents_useGLCodesData__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
        children: ({ dataGLCodes , filteredData , handleSearchChange , loading , setDataGLCodes , setFilteredData , searchText ,  })=>{
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(GLCodes, {
                dataGLCodes,
                filteredData,
                handleSearchChange,
                loading,
                setDataGLCodes,
                setFilteredData,
                searchText
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GLCodesPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 87066:
/***/ ((module) => {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ 75184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 45725:
/***/ ((module) => {

module.exports = require("antd");

/***/ }),

/***/ 52167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 1635:
/***/ ((module) => {

module.exports = require("dayjs");

/***/ }),

/***/ 94957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 50744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 35843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 95832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 28854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 93297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 59232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 71853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 16689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 99847:
/***/ ((module) => {

module.exports = require("react-icons/ai");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 20997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 69915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ }),

/***/ 15941:
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5675,5152,9235,3019,396,7632,8760,7406,9227,8776,5439,7173], () => (__webpack_exec__(25786)));
module.exports = __webpack_exports__;

})();