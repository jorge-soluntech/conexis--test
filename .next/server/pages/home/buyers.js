(() => {
var exports = {};
exports.id = 7713;
exports.ids = [7713];
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

/***/ 6583:
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
/* harmony import */ var _infrastructure_services_BuyerServices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70092);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_infrastructure_services_BuyerServices__WEBPACK_IMPORTED_MODULE_2__]);
_infrastructure_services_BuyerServices__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/* eslint-disable no-nested-ternary */ 


const useGetBuyerData = ()=>{
    const { 0: loading , 1: setLoader  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: dataTable , 1: setDataTable  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: showError , 1: setShowError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: messageError , 1: setMessageError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("There's been an error. Please try again later.");
    const buyerServices = new _infrastructure_services_BuyerServices__WEBPACK_IMPORTED_MODULE_2__/* .BuyerServices */ .i((next_router__WEBPACK_IMPORTED_MODULE_0___default()));
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setLoader(true);
        buyerServices.getAllBuyers().then((response)=>{
            const result = response.data.buyers.map((buyer)=>({
                    key: buyer.id,
                    clientCompanyName: buyer.client_company_name ? buyer.client_company_name : "-",
                    clientContactName: buyer.primary_contact_name ? buyer.primary_contact_name : "-",
                    clientContactEmail: buyer.primary_contact_email ? buyer.primary_contact_email : "-",
                    clientContactPhone: buyer.primary_contact_phone ? buyer.primary_contact_phone : "-",
                    accountOwner: buyer.account_owner ? buyer.account_owner : "-",
                    contractExpirationDate: buyer.contract_expiry_date ? `${buyer.contract_expiry_date.slice(5, 7)}/${buyer.contract_expiry_date.slice(8, 10)}/${buyer.contract_expiry_date.slice(0, 4)}` : "-",
                    details: {
                        aditionalInfo: {
                            legalNameInvoicing: buyer.legal_name_for_invoicing ? buyer.legal_name_for_invoicing : "-",
                            clientMailingAddress: buyer.street_address_line1 ? buyer.street_address_line1 : "-",
                            clientMailingAddress2: buyer.street_address_line2 ? buyer.street_address_line2 : "-",
                            workWeekDefinition: buyer.work_week_definition ? buyer.work_week_definition : "-",
                            currency: buyer.currency ? buyer.currency : "-"
                        },
                        taxes: {
                            vatFederalTax: buyer.vat_amount ? `${buyer.vat_amount}%` : "-",
                            provincialTax: buyer.sales_tax_amount ? `${buyer.sales_tax_amount}%` : "-",
                            otherTax: buyer.other_tax_amount ? `${buyer.other_tax_amount}%` : "-"
                        },
                        approvals: {
                            jobsRequireApproval: buyer.bypass_job_approval !== undefined ? buyer.bypass_job_approval ? "Yes" : "No" : "-",
                            submissionsRequireApproval: buyer.bypass_submission_approval !== undefined ? buyer.bypass_submission_approval ? "Yes" : "No" : "-",
                            accesToApplicantTrackingModule: buyer.access_to_applicant_tracker !== undefined ? buyer.access_to_applicant_tracker ? "Yes" : "No" : "-",
                            contractRequiresApproval: buyer.require_contract_approval !== undefined ? buyer.require_contract_approval ? "Yes" : "No" : "-",
                            accountsPayableContactName: buyer.accounts_payable_contact_name ? buyer.accounts_payable_contact_name : "-",
                            accountsPayableContactEmail: buyer.accounts_payable_contact_email ? buyer.accounts_payable_contact_email : "-"
                        },
                        documents: {
                            clientAgreement: buyer.attachments?.map((attachment)=>{
                                if (attachment.type === "Client agreement") {
                                    const file = {
                                        name: attachment.name,
                                        id: attachment.file
                                    };
                                    return file;
                                }
                                return [];
                            }),
                            others: buyer.attachments?.map((attachment)=>{
                                if (attachment.type !== "Client agreement") {
                                    const file = {
                                        name: attachment.name,
                                        id: attachment.file
                                    };
                                    return file;
                                }
                                return [];
                            })
                        }
                    }
                }));
            setDataTable(result);
            setLoader(false);
        }).catch(()=>{
            setMessageError("There's been an error. Please try again later.");
            setShowError(true);
        });
    }, []);
    return {
        loading,
        dataTable,
        showError,
        setShowError,
        messageError
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useGetBuyerData);

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

/***/ 35059:
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
/* harmony import */ var _components_common_buyersComponents_useGetBuyerData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6583);
/* harmony import */ var _components_common_fallbackComponent_FallbackComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56209);
/* harmony import */ var _components_common_loaders__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55439);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_common_buyersComponents_useGetBuyerData__WEBPACK_IMPORTED_MODULE_2__, _components_common_loaders__WEBPACK_IMPORTED_MODULE_4__]);
([_components_common_buyersComponents_useGetBuyerData__WEBPACK_IMPORTED_MODULE_2__, _components_common_loaders__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const BuyerComponent = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>Promise.all(/* import() */[__webpack_require__.e(8760), __webpack_require__.e(1957), __webpack_require__.e(2758), __webpack_require__.e(1776), __webpack_require__.e(5821), __webpack_require__.e(217)]).then(__webpack_require__.bind(__webpack_require__, 217)), {
    loadableGenerated: {
        modules: [
            "home/buyers/index.tsx -> " + "@/components/common/buyersComponents/BuyerComponent"
        ]
    },
    loading: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_fallbackComponent_FallbackComponent__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
    ssr: true
});
/**
 * Buyersmain page
 *
 * @returns The Buyers main page
 */ const Buyers = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_loaders__WEBPACK_IMPORTED_MODULE_4__/* .TablePageLoader */ .gl, {
        useGetData: _components_common_buyersComponents_useGetBuyerData__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
        children: ({ loading , dataTable , showError , setShowError , messageError  })=>{
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BuyerComponent, {
                loading,
                dataTable,
                showError,
                setShowError,
                messageError
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Buyers);

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
var __webpack_exports__ = __webpack_require__.X(0, [5675,5152,9235,3019,396,7632,7406,9227,8776,5439,92], () => (__webpack_exec__(35059)));
module.exports = __webpack_exports__;

})();