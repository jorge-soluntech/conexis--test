"use strict";
(() => {
var exports = {};
exports.id = 4345;
exports.ids = [4345];
exports.modules = {

/***/ 95244:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ toggleBusinessUnit),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _infrastructure_services_BusinessUnitsResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32873);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_infrastructure_services_BusinessUnitsResource__WEBPACK_IMPORTED_MODULE_0__]);
_infrastructure_services_BusinessUnitsResource__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const toggleBusinessUnit = async (_url, { arg  })=>{
    const result = await _infrastructure_services_BusinessUnitsResource__WEBPACK_IMPORTED_MODULE_0__/* ["default"].toggle */ .Z.toggle(arg.key);
    return _infrastructure_services_BusinessUnitsResource__WEBPACK_IMPORTED_MODULE_0__/* ["default"].transform */ .Z.transform(result.data);
};
const fetcher = async (_url)=>{
    return _infrastructure_services_BusinessUnitsResource__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getAll */ .Z.getAll();
};
const query = {
    url: "/businessUnits/readAll",
    fetcher
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (query);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 72808:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IO": () => (/* binding */ query),
/* harmony export */   "S_": () => (/* binding */ useColumns)
/* harmony export */ });
/* unused harmony export useUpdateStatus */
/* harmony import */ var swr_mutation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5401);
/* harmony import */ var _components_common_crudElemnts_Events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14844);
/* harmony import */ var _locales_en_en_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89235);
/* harmony import */ var _query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95244);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr_mutation__WEBPACK_IMPORTED_MODULE_0__, _query__WEBPACK_IMPORTED_MODULE_2__]);
([swr_mutation__WEBPACK_IMPORTED_MODULE_0__, _query__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const query = _query__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z;
const { businessUnits: { table  } ,  } = _locales_en_en_json__WEBPACK_IMPORTED_MODULE_1__;
const useUpdateStatus = ()=>{
    const { trigger , ...rest } = (0,swr_mutation__WEBPACK_IMPORTED_MODULE_0__["default"])(`/businessUnits/readAll`, _query__WEBPACK_IMPORTED_MODULE_2__/* .toggleBusinessUnit */ .Q, {
        rollbackOnError: true,
        revalidate: false
    });
    const optimisticUpdateStatus = (key)=>{
        trigger({
            key
        }, {
            onError (_data) {
                (0,_components_common_crudElemnts_Events__WEBPACK_IMPORTED_MODULE_3__/* .publish */ .nY)("showError", "mensaje de error");
            },
            populateCache: (updatedValue, cache)=>{
                return cache?.map((item)=>item.key === updatedValue.key ? updatedValue : item);
            }
        });
    };
    return {
        ...rest,
        optimisticUpdateStatus
    };
};
const statusFilters = [
    {
        text: "Active",
        value: true
    },
    {
        text: "Inactive",
        value: false
    }, 
];
const useColumns = ()=>{
    const { optimisticUpdateStatus  } = useUpdateStatus();
    return [
        {
            title: table.id,
            dataIndex: "idNumber"
        },
        {
            title: table.number,
            dataIndex: "businessUnitNumber",
            custom: {
                sorter: "localeCompare"
            }
        },
        {
            title: table.name,
            dataIndex: "location"
        },
        {
            title: table.buOwner,
            dataIndex: "buOwner",
            custom: {
                filter: "uniqueByValue"
            }
        },
        {
            title: table.status,
            dataIndex: "status",
            filters: statusFilters,
            custom: {
                sorter: "boolean",
                filter: "boolean",
                switch: {
                    callback: optimisticUpdateStatus
                }
            }
        },
        {
            title: table.actions,
            custom: {
                actionEdit: {
                    url: "/home/business-units/edit"
                },
                sorter: false
            }
        }, 
    ];
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 32873:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _infrastructure_services_ResourceService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76981);
/* harmony import */ var _api_axiosClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27738);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_axiosClient__WEBPACK_IMPORTED_MODULE_0__]);
_api_axiosClient__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/* eslint-disable class-methods-use-this */ 

class BusinessUnitResource extends _infrastructure_services_ResourceService__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z {
    toggle(id) {
        const url = `${this.resourceEndpoint}/${id}/isActive/toggle`;
        return this.axiosInstance.put(url).then((response)=>response.data).catch((error)=>{
            throw new Error(`Failed to get resource with ID ${id}: ${error.message}`);
        });
    }
    transform({ id , id_number , region , address , location , last_name , is_active , first_name , primary_email , primary_phone , business_unit_number  }) {
        const nameBuOwner = `${first_name || ""} ${last_name || ""}`;
        return {
            key: id,
            region,
            address,
            location,
            idNumber: id_number,
            status: is_active,
            email: primary_email,
            lastName: last_name,
            buOwner: nameBuOwner,
            phone: primary_phone,
            firstName: first_name,
            businessUnitNumber: business_unit_number
        };
    }
}
const resource = new BusinessUnitResource(_api_axiosClient__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, "/businessUnits");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resource);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5382:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_common_businessUnitsComponents_businessUnits_table_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72808);
/* harmony import */ var _components_common_crudElemnts_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9215);
/* harmony import */ var _components_common_loaders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55439);
/* harmony import */ var _locales_en_en_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89235);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_common_businessUnitsComponents_businessUnits_table_config__WEBPACK_IMPORTED_MODULE_1__, _components_common_loaders__WEBPACK_IMPORTED_MODULE_3__]);
([_components_common_businessUnitsComponents_businessUnits_table_config__WEBPACK_IMPORTED_MODULE_1__, _components_common_loaders__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





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
const Page = ()=>{
    const columns = (0,_components_common_businessUnitsComponents_businessUnits_table_config__WEBPACK_IMPORTED_MODULE_1__/* .useColumns */ .S_)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_loaders__WEBPACK_IMPORTED_MODULE_3__/* .TablePageLoaderQuery */ .DA, {
        fetcher: _components_common_businessUnitsComponents_businessUnits_table_config__WEBPACK_IMPORTED_MODULE_1__/* .query.fetcher */ .IO.fetcher,
        queryString: _components_common_businessUnitsComponents_businessUnits_table_config__WEBPACK_IMPORTED_MODULE_1__/* .query.url */ .IO.url,
        children: ({ data , error , mutate , isValidating , isLoading  })=>{
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_crudElemnts_index__WEBPACK_IMPORTED_MODULE_2__/* .List */ .a, {
                config: {
                    keysToSearchBy: [
                        "idNumber",
                        "location",
                        "businessUnitNumber",
                        "buOwner", 
                    ]
                },
                columns: columns,
                texts: _locales_en_en_json__WEBPACK_IMPORTED_MODULE_4__.businessUnits,
                data: data,
                error: error,
                mutate: mutate,
                isValidating: isValidating,
                isLoading: isLoading
            });
        }
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);

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

/***/ 62733:
/***/ ((module) => {

module.exports = require("fuse.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 92796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 94957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 34014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 50744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 35843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 78524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 78020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 64406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 24964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 11751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 46220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 10299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 23938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 29565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 35789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 28854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 91292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 34567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 80979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 93297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 36052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 84226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 95052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

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

/***/ }),

/***/ 5401:
/***/ ((module) => {

module.exports = import("swr/mutation");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5675,676,1664,9235,3019,396,7632,7406,9227,8776,5439,1957,7151,9215], () => (__webpack_exec__(5382)));
module.exports = __webpack_exports__;

})();