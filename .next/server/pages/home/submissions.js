"use strict";
(() => {
var exports = {};
exports.id = 8082;
exports.ids = [8082];
exports.modules = {

/***/ 94803:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ submissions_query)
});

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(52167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: external "axios-mock-adapter"
const external_axios_mock_adapter_namespaceObject = require("axios-mock-adapter");
var external_axios_mock_adapter_default = /*#__PURE__*/__webpack_require__.n(external_axios_mock_adapter_namespaceObject);
// EXTERNAL MODULE: ./src/infrastructure/services/ResourceService.ts
var ResourceService = __webpack_require__(76981);
;// CONCATENATED MODULE: ./src/infrastructure/services/submissionsResource.ts
/* eslint-disable class-methods-use-this */ // eslint-disable-next-line import/no-extraneous-dependencies


// import axiosInstance from '@/infrastructure/api/axiosClient';

const axiosInstance = external_axios_default().create();
const data = [
    {
        id: "1",
        id_number: "123",
        status: "Rejected",
        resume: "resume.pdf",
        job: {
            id: "job1",
            job_title: "Software Developer",
            skill_category: "Programming"
        },
        candidate: {
            id: "candidate1",
            full_name: "John Doe"
        }
    },
    {
        id: "2",
        id_number: "456",
        status: "Withdrawn",
        resume: "resume.pdf",
        job: {
            id: "job2",
            job_title: "Data Analyst",
            skill_category: "Analytics"
        },
        candidate: {
            id: "candidate2",
            full_name: "Jane Smith"
        }
    },
    {
        id: "3",
        id_number: "789",
        status: "Rejected",
        resume: null,
        job: {
            id: "job3",
            job_title: "UX Designer",
            skill_category: "Design"
        },
        candidate: {
            id: "candidate3",
            full_name: "Emily Johnson"
        }
    },
    {
        id: "4",
        id_number: "987",
        status: "Rejected",
        resume: "resume.pdf",
        job: {
            id: "job4",
            job_title: "Marketing Manager",
            skill_category: "Marketing"
        },
        candidate: {
            id: "candidate4",
            full_name: "Michael Brown"
        }
    },
    {
        id: "5",
        id_number: "654",
        status: "Revision Required",
        resume: "resume.pdf",
        job: {
            id: "job5",
            job_title: "Financial Analyst",
            skill_category: "Finance"
        },
        candidate: {
            id: "candidate5",
            full_name: "Olivia Davis"
        }
    },
    {
        id: "6",
        id_number: "321",
        status: "Completed",
        resume: "resume.pdf",
        job: {
            id: "job6",
            job_title: "Graphic Designer",
            skill_category: "Design"
        },
        candidate: {
            id: "candidate6",
            full_name: "William Johnson"
        }
    },
    {
        id: "7",
        id_number: "987",
        status: "Revision Required",
        resume: "resume.pdf",
        job: {
            id: "job7",
            job_title: "Sales Representative",
            skill_category: "Sales"
        },
        candidate: {
            id: "candidate7",
            full_name: "Sophia Thompson"
        }
    }, 
];
function transformData(data) {
    return data.map((item)=>{
        return {
            id: item.id,
            idNumber: item.id_number,
            status: item.status,
            resume: item.resume,
            jobTitle: item.job.job_title,
            jobId: item.job.id,
            skillCategory: item.job.skill_category,
            candidateName: item.candidate.full_name
        };
    });
}
const mock = new (external_axios_mock_adapter_default())(axiosInstance, {
    delayResponse: 2000
});
mock.onGet("/submissions/readAll").reply(200, {
    data: transformData(data)
});
mock.onPut("/submissions/3/isActive/toggle").reply(400);
// TILL HERE
const service = new ResourceService/* default */.Z(axiosInstance, "submissions");
/* harmony default export */ const submissionsResource = (service);

;// CONCATENATED MODULE: ./src/components/common/submissionsComponents/submissions/query.tsx

const fetcher = async (_url)=>{
    return submissionsResource.getAll();
};
const query = {
    url: "/submissions/readAll",
    fetcher
};
/* harmony default export */ const submissions_query = (query);


/***/ }),

/***/ 83288:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ query),
/* harmony export */   "S": () => (/* binding */ useColumns)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_common_tableComponent_Table_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73144);
/* harmony import */ var _components_common_tableComponent_Table_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_common_tableComponent_Table_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _infrastructure_services_utilsServices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17632);
/* harmony import */ var _locales_en_en_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89235);
/* harmony import */ var _query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94803);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_infrastructure_services_utilsServices__WEBPACK_IMPORTED_MODULE_2__]);
_infrastructure_services_utilsServices__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const query = _query__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z;
const { submissions: { table  } ,  } = _locales_en_en_json__WEBPACK_IMPORTED_MODULE_3__;
const downloadS3File = async (file)=>{
    await _infrastructure_services_utilsServices__WEBPACK_IMPORTED_MODULE_2__/* .UtilServices.downloadS3File */ .$.downloadS3File(file, (next_router__WEBPACK_IMPORTED_MODULE_1___default()));
};
const renderResumeLink = (text, props)=>{
    if (props.resume) {
        const file = {
            name: text,
            id: props.resume
        };
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: (_components_common_tableComponent_Table_module_scss__WEBPACK_IMPORTED_MODULE_5___default().iconAttachment),
            onClick: ()=>downloadS3File(file)
        });
    }
    return null;
};
// TODO if show and edit url always follows the same convection
// we can skip the need to defined in this configuration
const useColumns = ()=>{
    return [
        {
            title: table.id,
            dataIndex: "idNumber",
            custom: {
                actionShow: {
                    url: "/home/submissions",
                    dataIndex: "idNumber"
                }
            }
        },
        {
            title: table.status,
            dataIndex: "status",
            custom: {
                filter: "uniqueByValue"
            }
        },
        {
            title: table.jobId,
            dataIndex: "jobId"
        },
        {
            title: table.jobTitle,
            dataIndex: "jobTitle"
        },
        {
            title: table.skillCategory,
            dataIndex: "skillCategory",
            custom: {
                filter: "uniqueByValue"
            }
        },
        {
            title: table.candidate,
            dataIndex: "candidateName"
        },
        {
            title: table.resume,
            dataIndex: "resume",
            render: renderResumeLink
        },
        {
            title: table.actions,
            custom: {
                actionEdit: {
                    url: "/home/submissions/edit"
                },
                sorter: false
            }
        }, 
    ];
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 46656:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_common_crudElemnts_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9215);
/* harmony import */ var _components_common_exportDropdownComponent_ExportDropdownComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28786);
/* harmony import */ var _components_common_loaders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55439);
/* harmony import */ var _components_common_submissionsComponents_submissions_table_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83288);
/* harmony import */ var _locales_en_en_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89235);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_common_loaders__WEBPACK_IMPORTED_MODULE_3__, _components_common_submissionsComponents_submissions_table_config__WEBPACK_IMPORTED_MODULE_4__]);
([_components_common_loaders__WEBPACK_IMPORTED_MODULE_3__, _components_common_submissionsComponents_submissions_table_config__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const { submissions  } = _locales_en_en_json__WEBPACK_IMPORTED_MODULE_5__;
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
const exportAllJobs = (type)=>{
    // Export file request
    return type;
};
const Page = ()=>{
    const columns = (0,_components_common_submissionsComponents_submissions_table_config__WEBPACK_IMPORTED_MODULE_4__/* .useColumns */ .S)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_loaders__WEBPACK_IMPORTED_MODULE_3__/* .TablePageLoaderQuery */ .DA, {
        fetcher: _components_common_submissionsComponents_submissions_table_config__WEBPACK_IMPORTED_MODULE_4__/* .query.fetcher */ .I.fetcher,
        queryString: _components_common_submissionsComponents_submissions_table_config__WEBPACK_IMPORTED_MODULE_4__/* .query.url */ .I.url,
        children: ({ data , error , mutate , isValidating , isLoading  })=>{
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_crudElemnts_index__WEBPACK_IMPORTED_MODULE_1__/* .List */ .a, {
                data,
                error,
                mutate,
                isValidating,
                isLoading,
                columns,
                texts: submissions,
                config: {
                    creatable: false
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_crudElemnts_index__WEBPACK_IMPORTED_MODULE_1__/* .List.Actions */ .a.Actions, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_exportDropdownComponent_ExportDropdownComponent__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        responsive: false,
                        exportData: (type)=>exportAllJobs(type)
                    })
                })
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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5675,676,1664,9235,3019,396,7632,7406,9227,8776,5439,1957,7151,2530,8786,9215], () => (__webpack_exec__(46656)));
module.exports = __webpack_exports__;

})();