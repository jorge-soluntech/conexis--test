(() => {
var exports = {};
exports.id = 4347;
exports.ids = [4347];
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

/***/ 71563:
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
/* harmony import */ var _application_candidatesSlice_candidatesSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89397);
/* harmony import */ var _components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89480);
/* harmony import */ var _components_hooks_useSearchColumns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65221);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(90396);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_application_candidatesSlice_candidatesSlice__WEBPACK_IMPORTED_MODULE_2__]);
_application_candidatesSlice_candidatesSlice__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const useCandidates = ()=>{
    const { 0: inputSearch , 1: setInputSearch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const dispatch = (0,_components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_3__/* .useAppDispatch */ .T)();
    const { allCandidates , infoCandidate , loading  } = (0,_components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_3__/* .useAppSelector */ .C)((state)=>state.candidates);
    const { currentUserRoleName  } = (0,_components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_3__/* .useAppSelector */ .C)((state)=>state.dashboard);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
    const { filteredData , handleSearchChange , searchText  } = (0,_components_hooks_useSearchColumns__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({
        excludeColumns: [
            _consts__WEBPACK_IMPORTED_MODULE_5__/* .workers.EXCLUDE_COLUMNS.workerStatus */ .CB.AY.workerStatus
        ]
    });
    const handleSearch = (input)=>{
        setInputSearch(input);
        handleSearchChange(input, allCandidates);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (inputSearch) {
            handleSearchChange(inputSearch, allCandidates);
        }
    }, [
        allCandidates
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let ignore = false;
        if (!ignore) dispatch((0,_application_candidatesSlice_candidatesSlice__WEBPACK_IMPORTED_MODULE_2__/* .readCandidates */ .EE)({
            router
        }));
        return ()=>{
            ignore = true;
        };
    }, [
        currentUserRoleName
    ]);
    return {
        allCandidates,
        currentUserRoleName,
        filteredData,
        handleSearch,
        infoCandidate,
        loading,
        searchText
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useCandidates);

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

/***/ 65221:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useSearchColumns = ({ excludeColumns  })=>{
    const { 0: filteredData , 1: setFilteredData  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const { 0: searchText , 1: setSearchText  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const handleSearchChange = (value, listData)=>{
        const lowercasedValue = value.toLowerCase().trim();
        if (lowercasedValue === "") {
            setFilteredData(listData);
            setSearchText(false);
        } else {
            setSearchText(true);
            const filteredData = listData?.filter((item)=>{
                return Object.keys(item)?.some((key)=>excludeColumns?.includes(key) || key === "key" ? false : item[key]?.toString().toLowerCase().includes(lowercasedValue));
            });
            setFilteredData(filteredData);
        }
    };
    return {
        handleSearchChange,
        filteredData,
        searchText
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSearchColumns);


/***/ }),

/***/ 5599:
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
/* harmony import */ var _components_common_candidatesComponents_useCandidatesData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71563);
/* harmony import */ var _components_common_fallbackComponent_FallbackComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56209);
/* harmony import */ var _components_common_loaders__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55439);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_common_candidatesComponents_useCandidatesData__WEBPACK_IMPORTED_MODULE_2__, _components_common_loaders__WEBPACK_IMPORTED_MODULE_4__]);
([_components_common_candidatesComponents_useCandidatesData__WEBPACK_IMPORTED_MODULE_2__, _components_common_loaders__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const Candidates = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>Promise.all(/* import() */[__webpack_require__.e(8760), __webpack_require__.e(1957), __webpack_require__.e(2758), __webpack_require__.e(1776), __webpack_require__.e(5821), __webpack_require__.e(7151), __webpack_require__.e(7497), __webpack_require__.e(3850), __webpack_require__.e(8835)]).then(__webpack_require__.bind(__webpack_require__, 58835)), {
    loadableGenerated: {
        modules: [
            "home/candidates/index.tsx -> " + "@/components/common/candidatesComponents/candidates/Candidates"
        ]
    },
    loading: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_fallbackComponent_FallbackComponent__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
    ssr: true
});
/**
 * Represents a component that displays the candidates.
 * @returns The candidates main page
 */ const CandidatesPage = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_loaders__WEBPACK_IMPORTED_MODULE_4__/* .TablePageLoader */ .gl, {
        useGetData: _components_common_candidatesComponents_useCandidatesData__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
        children: ({ currentUserRoleName , allCandidates , filteredData , handleSearch , infoCandidate , loading , searchText ,  })=>{
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Candidates, {
                currentUserRoleName,
                allCandidates,
                filteredData,
                handleSearch,
                infoCandidate,
                loading,
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CandidatesPage);

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

/***/ 99847:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/ai");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5675,5152,9235,3019,396,7632,7406,9227,8776,5439,9397], () => (__webpack_exec__(5599)));
module.exports = __webpack_exports__;

})();