"use strict";
exports.id = 396;
exports.ids = [396];
exports.modules = {

/***/ 72496:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$R": () => (/* binding */ STEPS_CREATE_BUYER),
/* harmony export */   "Fg": () => (/* binding */ BUYERS_TABLE_TEXT),
/* harmony export */   "GZ": () => (/* binding */ FORM_FIELDS),
/* harmony export */   "wD": () => (/* binding */ TYPE)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const BUYERS_TABLE_TEXT = {
    title_buyers_table: "Manage Buyers",
    sub_title_buyers_table: "Here you will find information for all buyers you have access to."
};
const STEPS_CREATE_BUYER = [
    {
        title: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
            style: {
                lineHeight: "16px"
            },
            children: [
                "Buyer ",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                " information"
            ]
        })
    },
    {
        title: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
            style: {
                lineHeight: "16px"
            },
            children: [
                "Tax ",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                " information"
            ]
        })
    },
    {
        title: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
            style: {
                lineHeight: "16px"
            },
            children: [
                "Approval ",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                " information"
            ]
        })
    },
    {
        title: "Attachments"
    }, 
];
const TYPE = [
    {
        label: "Client agreement",
        value: "Client Agreement"
    },
    {
        label: "Other",
        value: "Other"
    }, 
];
const FORM_FIELDS = {
    stepOne: {
        mandatories: {
            clientCompanyName: "clientCompanyName",
            legalNameForInvoicing: "legalNameForInvoicing",
            workWeekDefinition: "workWeekDefinition",
            currency: "currency",
            contractExpiryDate: "contractExpiryDate"
        }
    },
    stepFourth: {
        mandatories: {
            type: "type",
            name: "name"
        },
        optionals: {
            expiry_date: "expiry_date"
        }
    }
};


/***/ }),

/***/ 28519:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ COST_CENTER_TEXT),
/* harmony export */   "t": () => (/* binding */ COST_CENTER_ENDPOINTS)
/* harmony export */ });
const COST_CENTER_TEXT = {
    title_form_cost_center_creation: "Add new cost center",
    title_COST_CENTER: "Cost center"
};
const COST_CENTER_ENDPOINTS = {
    read_all: "/costCenters/readAll",
    active_toggle: "isActive/toggle"
};


/***/ }),

/***/ 29159:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "My": () => (/* binding */ ITEMS_DETAILS_FINANCE),
/* harmony export */   "Np": () => (/* binding */ ITEMS_DETAILS_SUPPLIER_ADMIN),
/* harmony export */   "S5": () => (/* binding */ ITEMS_TOP_SUPPLIER),
/* harmony export */   "Uv": () => (/* binding */ ITEMS_DETAILS_PROGRAM_REPRESENTATIVE),
/* harmony export */   "WR": () => (/* binding */ ITEMS_DETAILS_RECRUITER),
/* harmony export */   "WU": () => (/* binding */ ITEMS_DETAILS_ADMIN),
/* harmony export */   "Wu": () => (/* binding */ ITEMS_DETAILS_BUYER_FINANCE),
/* harmony export */   "ZU": () => (/* binding */ ITEMS_DETAILS_DELEGATE),
/* harmony export */   "_H": () => (/* binding */ ITEMS_DETAILS),
/* harmony export */   "dZ": () => (/* binding */ ITEMS_DETAILS_SUPPLIER_FINANCE),
/* harmony export */   "j8": () => (/* binding */ ACTION_ITEMS_KEYS),
/* harmony export */   "qB": () => (/* binding */ ITEMS_DETAILS_APPROVER)
/* harmony export */ });
/* unused harmony export STATE_SIDER */
/* harmony import */ var _consts_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42144);
/* harmony import */ var _locales_en_en_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89235);


const { dashboard  } = _locales_en_en_json__WEBPACK_IMPORTED_MODULE_0__;
const ACTION_ITEMS_KEYS = {
    jobsToApprove: "jobsToApprove"
};
const ITEMS_DETAILS = [
    {
        key: "0",
        url: "",
        label: "Time & expense cards to approve",
        color: "#DD7812",
        active: true
    },
    {
        key: "1",
        url: "",
        label: "Submissions to review",
        color: "#96BC33",
        active: false
    },
    {
        key: "2",
        url: "",
        label: "Contracts to activate",
        color: "#26A69A",
        active: false
    },
    {
        key: ACTION_ITEMS_KEYS.jobsToApprove,
        url: _consts_routes__WEBPACK_IMPORTED_MODULE_1__/* .URL_JOBS_TO_APPROVE */ .u9,
        label: dashboard.jobsToApprove,
        color: "#FFC107",
        active: false
    },
    {
        key: "4",
        url: "",
        label: "Contracts ending soon",
        color: "#A68BB6",
        active: false
    }, 
];
const ITEMS_DETAILS_PROGRAM_REPRESENTATIVE = [
    {
        key: "0",
        label: "Time & expense cards to approve",
        color: "#DD7812",
        active: true
    },
    {
        key: "1",
        label: "Submissions to review",
        color: "#96BC33",
        active: false
    },
    {
        key: "4",
        label: "Contracts ending soon",
        color: "#A68BB6",
        active: false
    }, 
];
const ITEMS_DETAILS_ADMIN = [
    {
        key: "0",
        url: "",
        label: "Time & expense cards to approve",
        color: "#DD7812",
        active: true
    },
    {
        key: "1",
        url: "",
        label: "Submissions to review",
        color: "#96BC33",
        active: false
    },
    {
        key: ACTION_ITEMS_KEYS.jobsToApprove,
        url: _consts_routes__WEBPACK_IMPORTED_MODULE_1__/* .URL_JOBS_TO_APPROVE */ .u9,
        label: dashboard.jobsToApprove,
        color: "#FFC107",
        active: false
    },
    {
        key: "4",
        url: "",
        label: "Contracts ending soon",
        color: "#A68BB6",
        active: false
    }, 
];
const ITEMS_TOP_SUPPLIER = [
    {
        label: "Je Travail",
        value: "443,082.57"
    },
    {
        label: "Equation Staffing",
        value: "161,095.53"
    },
    {
        label: "Matrix Employment",
        value: "116,147.87"
    },
    {
        label: "Career Connections",
        value: "443,082.57"
    },
    {
        label: "Vertical Staffing",
        value: "443,082.57"
    },
    {
        label: "Arrow Workforce Solutions",
        value: "443,082.57"
    },
    {
        label: "MaxSys (Western Canada)",
        value: "443,082.57"
    },
    {
        label: "KEE Human Resources",
        value: "443,082.57"
    },
    {
        label: "AppleOne",
        value: "443,082.57"
    },
    {
        label: "SLB Staffing Bureau",
        value: "443,082.57"
    }, 
];
const ITEMS_DETAILS_FINANCE = [
    {
        key: "0",
        label: "Time & expense cards awaiting approval",
        color: "#DD7812",
        active: true
    },
    {
        key: "1",
        label: "Uninvoiced time cards",
        color: "#96BC33",
        active: false
    },
    {
        key: "2",
        label: "Invoices in draft status",
        color: "#26A69A",
        active: false
    }, 
];
const ITEMS_DETAILS_BUYER_FINANCE = [
    {
        key: "0",
        label: "Time & expense cards not approved",
        color: "#DD7812",
        active: true
    },
    {
        key: "1",
        label: "Unvoiced time cards",
        color: "#96BC33",
        active: false
    },
    {
        key: "2",
        label: "Invoices in draft status",
        color: "#26A69A",
        active: false
    }, 
];
const ITEMS_DETAILS_DELEGATE = [
    {
        key: "0",
        url: "",
        label: "Time & expense cards to approve",
        color: "#DD7812",
        active: true
    },
    {
        key: "1",
        url: "",
        label: "Submissions to review",
        color: "#96BC33",
        active: false
    },
    {
        key: ACTION_ITEMS_KEYS.jobsToApprove,
        url: _consts_routes__WEBPACK_IMPORTED_MODULE_1__/* .URL_JOBS_TO_APPROVE */ .u9,
        label: dashboard.jobsToApprove,
        color: "#26A69A",
        active: false
    },
    {
        key: "3",
        url: "",
        label: "Contracts ending soon",
        color: "#FFC107",
        active: false
    }, 
];
const ITEMS_DETAILS_APPROVER = [
    {
        key: "0",
        url: "",
        label: "Time & expense cards to approve",
        color: "#DD7812",
        active: true
    },
    {
        key: ACTION_ITEMS_KEYS.jobsToApprove,
        url: _consts_routes__WEBPACK_IMPORTED_MODULE_1__/* .URL_JOBS_TO_APPROVE */ .u9,
        label: dashboard.jobsToApprove,
        color: "#96BC33",
        active: false
    },
    {
        key: "2",
        url: "",
        label: "Contracts to approve",
        color: "#26A69A",
        active: false
    }, 
];
const ITEMS_DETAILS_SUPPLIER_ADMIN = [
    {
        key: "0",
        label: "Open jobs",
        color: "#DD7812",
        active: true
    },
    {
        key: "1",
        label: "Active contracts",
        color: "#96BC33",
        active: false
    },
    {
        key: "2",
        label: "Unapproved T&E",
        color: "#26A69A",
        active: false
    },
    {
        key: "3",
        label: "Open submissions",
        color: "#FFC107",
        active: false
    }, 
];
const ITEMS_DETAILS_SUPPLIER_FINANCE = [
    {
        key: "0",
        label: "Active contracts",
        color: "#DD7812",
        active: true
    },
    {
        key: "1",
        label: "Unapproved time & expense cards",
        color: "#96BC33",
        active: false
    },
    {
        key: "2",
        label: "Supplier invoices past due",
        color: "#26A69A",
        active: false
    }, 
];
const STATE_SIDER = {
    siderActivated: "sider_activated",
    siderFixedHovered: "sider_fixed_hovered"
};
const ITEMS_DETAILS_RECRUITER = [
    {
        key: "0",
        label: "Submissions to review",
        color: "#DD7812",
        active: false
    },
    {
        key: "1",
        label: "Contracts ending soon",
        color: "#96BC33",
        active: false
    }, 
];


/***/ }),

/***/ 90396:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Fg": () => (/* reexport */ buyers/* BUYERS_TABLE_TEXT */.Fg),
  "$R": () => (/* reexport */ buyers/* STEPS_CREATE_BUYER */.$R),
  "lc": () => (/* reexport */ gutters_namespaceObject),
  "PA": () => (/* reexport */ home_ui),
  "ci": () => (/* reexport */ iconsAssets_namespaceObject),
  "gr": () => (/* reexport */ levels),
  "Ym": () => (/* reexport */ login_ui),
  "hY": () => (/* reexport */ onboarding_ui_namespaceObject),
  "dx": () => (/* reexport */ postJobsUI_namespaceObject),
  "uJ": () => (/* reexport */ roleUsers),
  "vY": () => (/* reexport */ routesServices_namespaceObject),
  "jk": () => (/* reexport */ routes),
  "XI": () => (/* reexport */ user_create_ui),
  "lz": () => (/* reexport */ work_shifts_ui_namespaceObject),
  "CB": () => (/* reexport */ candidates_ui_namespaceObject)
});

// UNUSED EXPORTS: FORM_FIELDS, TYPE, breakpoints, colors, costCenterUI, regex

// NAMESPACE OBJECT: ./src/consts/candidates_ui.ts
var candidates_ui_namespaceObject = {};
__webpack_require__.r(candidates_ui_namespaceObject);
__webpack_require__.d(candidates_ui_namespaceObject, {
  "AY": () => (EXCLUDE_COLUMNS),
  "el": () => (FILTERS_WORKER_STATUS),
  "GZ": () => (FORM_FIELDS),
  "Yv": () => (ROUTES_SUCCESS)
});

// NAMESPACE OBJECT: ./src/consts/gutters.ts
var gutters_namespaceObject = {};
__webpack_require__.r(gutters_namespaceObject);
__webpack_require__.d(gutters_namespaceObject, {
  "GUTTERS": () => (GUTTERS)
});

// NAMESPACE OBJECT: ./src/consts/iconsAssets.ts
var iconsAssets_namespaceObject = {};
__webpack_require__.r(iconsAssets_namespaceObject);
__webpack_require__.d(iconsAssets_namespaceObject, {
  "FI": () => (ARROW_RIGHT_GREEN),
  "hq": () => (EDIT_TABLE)
});

// NAMESPACE OBJECT: ./src/consts/onboarding_ui.ts
var onboarding_ui_namespaceObject = {};
__webpack_require__.r(onboarding_ui_namespaceObject);
__webpack_require__.d(onboarding_ui_namespaceObject, {
  "dataInputs": () => (dataInputs)
});

// NAMESPACE OBJECT: ./src/consts/postJobsUI.ts
var postJobsUI_namespaceObject = {};
__webpack_require__.r(postJobsUI_namespaceObject);
__webpack_require__.d(postJobsUI_namespaceObject, {
  "FORM_FIELDS": () => (postJobsUI_FORM_FIELDS),
  "OPTIONS_SAVE_STATUS": () => (OPTIONS_SAVE_STATUS),
  "POSITION_TYPE_OPTIONS": () => (POSITION_TYPE_OPTIONS),
  "SAVE_OPTIONS": () => (SAVE_OPTIONS),
  "SKILL_CATEGORY_OPTIONS": () => (SKILL_CATEGORY_OPTIONS)
});

// NAMESPACE OBJECT: ./src/consts/routesServices.ts
var routesServices_namespaceObject = {};
__webpack_require__.r(routesServices_namespaceObject);
__webpack_require__.d(routesServices_namespaceObject, {
  "ROUTES_POST_JOBS": () => (ROUTES_POST_JOBS)
});

// NAMESPACE OBJECT: ./src/consts/work_shifts_ui.ts
var work_shifts_ui_namespaceObject = {};
__webpack_require__.r(work_shifts_ui_namespaceObject);
__webpack_require__.d(work_shifts_ui_namespaceObject, {
  "FORM_FIELDS": () => (work_shifts_ui_FORM_FIELDS),
  "SORTER_MAP_DAYS": () => (SORTER_MAP_DAYS)
});

// EXTERNAL MODULE: ./src/consts/buyers.tsx
var buyers = __webpack_require__(72496);
;// CONCATENATED MODULE: ./src/consts/candidates_ui.ts
const FORM_FIELDS = {
    mandatories: [
        "first_name",
        "last_name",
        "worker_status"
    ],
    optionals: [
        "email"
    ]
};
const ROUTES_SUCCESS = {
    emailSent: "created",
    emailNotSent: "created-no-sent-email"
};
const EXCLUDE_COLUMNS = {
    workerStatus: "workerStatus"
};
const FILTERS_WORKER_STATUS = [
    {
        text: "T4",
        value: "T4"
    },
    {
        text: "W2/With Ben",
        value: "W2/With Ben"
    },
    {
        text: "1099",
        value: "1099"
    },
    {
        text: "Incorporated",
        value: "Incorporated"
    },
    {
        text: "C2C",
        value: "C2C"
    },
    {
        text: "W2/Without Ben",
        value: "W2/Without Ben"
    },
    {
        text: "H1B Visa Enabled",
        value: "H1B Visa Enabled"
    }, 
];

// EXTERNAL MODULE: ./src/consts/cost_centers_ui.ts
var cost_centers_ui = __webpack_require__(28519);
;// CONCATENATED MODULE: ./src/consts/gutters.ts
const GUTTERS = {
    formField: [
        24,
        10
    ]
};

// EXTERNAL MODULE: ./src/consts/home_ui.ts
var home_ui = __webpack_require__(29159);
;// CONCATENATED MODULE: ./src/consts/iconsAssets.ts
const LOGO_CONEXIS = "/assets/icons/logo_conexis.svg";
const OTHER_ACTIONS = "/assets/icons/other_actions.svg";
const ARROW_SELECT = "/assets/icons/arrow_select.svg";
const ARROW_RIGHT_GREEN = "/assets/icons/arrow_right_green.svg";
const ALERT_ERROR = "/assets/icons/alert_error.svg";
const EDIT_TABLE = "/assets/icons/edit.svg";

// EXTERNAL MODULE: ./src/consts/login_ui.ts + 1 modules
var login_ui = __webpack_require__(4262);
;// CONCATENATED MODULE: ./src/consts/onboarding_ui.ts
const dataInputs = [
    {
        id: "onboarding_item_1",
        title: "Onboarding activity 1"
    },
    {
        id: "onboarding_item_2",
        title: "Onboarding activity 2"
    },
    {
        id: "onboarding_item_3",
        title: "Onboarding activity 3"
    },
    {
        id: "onboarding_item_4",
        title: "Onboarding activity 4"
    },
    {
        id: "onboarding_item_5",
        title: "Onboarding activity 5"
    },
    {
        id: "onboarding_item_6",
        title: "Onboarding activity 6"
    },
    {
        id: "onboarding_item_7",
        title: "Onboarding activity 7"
    },
    {
        id: "onboarding_item_8",
        title: "Onboarding activity 8"
    },
    {
        id: "onboarding_item_9",
        title: "Onboarding activity 9"
    }, 
];

// EXTERNAL MODULE: ./src/locales/en/en.json
var en = __webpack_require__(89235);
;// CONCATENATED MODULE: ./src/consts/postJobsUI.ts

const { postNewJob: { optionsSkillCategory , optionsPositionType , optionsMenuSave  } ,  } = en;
const postJobsUI_FORM_FIELDS = {
    mandatory: [
        "approvers_ids",
        "job_title",
        "number_of_positions",
        "type_of_position",
        "primary_hiring_manager",
        "planned_start_date",
        "planned_end_date",
        "target_rate",
        "salary_low",
        "salary_high", 
    ],
    optionals: [
        "skill_category",
        "work_shifts_ids",
        "job_description_attachment",
        "job_description",
        "job_comments",
        "street_address_line1",
        "street_address_line2",
        "country_id",
        "province_region_id",
        "city",
        "postal_code",
        "business_unit_id",
        "gl_code_id",
        "cost_centers_ids",
        "supplier_distribution_list_ids", 
    ]
};
const SKILL_CATEGORY_OPTIONS = [
    {
        label: optionsSkillCategory.it,
        value: optionsSkillCategory.it
    },
    {
        label: optionsSkillCategory.lightIndustrial,
        value: optionsSkillCategory.lightIndustrial
    },
    {
        label: optionsSkillCategory.administrative,
        value: optionsSkillCategory.administrative
    },
    {
        label: optionsSkillCategory.professional,
        value: optionsSkillCategory.professional
    },
    {
        label: optionsSkillCategory.engineering,
        value: optionsSkillCategory.engineering
    },
    {
        label: optionsSkillCategory.healthcare,
        value: optionsSkillCategory.healthcare
    }, 
];
const POSITION_TYPE_OPTIONS = [
    {
        label: optionsPositionType.temporary,
        value: optionsPositionType.temporary
    },
    {
        label: optionsPositionType.permanent,
        value: optionsPositionType.permanent
    }, 
];
const OPTIONS_SAVE_STATUS = {
    isSaveLater: "Save For Later",
    isSaveTemplate: "Save as Template",
    isSentNow: "Send Now"
};
const SAVE_OPTIONS = [
    {
        label: optionsMenuSave.saveForLater,
        key: OPTIONS_SAVE_STATUS.isSaveLater
    },
    {
        label: optionsMenuSave.saveAsTemplate,
        key: OPTIONS_SAVE_STATUS.isSaveTemplate
    }, 
];

// EXTERNAL MODULE: ./src/consts/roleUsers.ts
var roleUsers = __webpack_require__(76477);
// EXTERNAL MODULE: ./src/consts/routes.ts
var routes = __webpack_require__(42144);
;// CONCATENATED MODULE: ./src/consts/routesServices.ts
const ROUTES_POST_JOBS = {
    createJob: "/jobs/create",
    possibleApprovers: "/jobs/possibleApprovers",
    possibleHiringManagers: "/jobs/possibleHiringManagers",
    workShiftsByBuyer: "/workShifts/byBuyer",
    countries: "/countries",
    statesProvinces: "/statesProvinces?countryId",
    businessUnits: "/businessUnits/readAll/byBuyer",
    glCodes: "/glCodes/findAll/byBuyer",
    costCenters: "/costCenters/findAll/byBuyer",
    suppliers: "/suppliers/byLoggedBuyer"
};

// EXTERNAL MODULE: ./src/consts/user_create_ui.ts
var user_create_ui = __webpack_require__(16277);
;// CONCATENATED MODULE: ./src/consts/userLevels.ts
const levels = {
    msp: "MSP Level",
    buyer: "BUYER Level",
    supplier: "SUPPLIER Level",
    worker: "WORKER Level"
};

;// CONCATENATED MODULE: ./src/consts/work_shifts_ui.ts
const work_shifts_ui_FORM_FIELDS = {
    mandatories: [
        "work_shift_description",
        "start_time",
        "end_time"
    ],
    optionals: [
        "work_days"
    ]
};
const SORTER_MAP_DAYS = {
    Sunday: 1,
    Monday: 2,
    Tuesday: 3,
    Wednesday: 4,
    Thursday: 5,
    Friday: 6,
    Saturday: 7
};

;// CONCATENATED MODULE: ./src/consts/index.ts




















/***/ }),

/***/ 4262:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "KB": () => (/* binding */ LOGIN_TEXT),
  "Gh": () => (/* binding */ MOBILE_BREAKPOINT),
  "IU": () => (/* binding */ SMALL_TABLET_BREAKPOINT),
  "rN": () => (/* binding */ TABLET_BREAKPOINT)
});

// UNUSED EXPORTS: ITEMS_LINKS_NAVBAR, ITEMS_SIDER, ITEMS_SIDER_ACCOUNT, ITEMS_SIDER_OTHERS, LINKS_ERRORS, TITLE_LOGO, USER_CREATION_TEXT

// EXTERNAL MODULE: ./src/consts/routes.ts
var routes = __webpack_require__(42144);
// EXTERNAL MODULE: ./src/locales/en/en.json
var en = __webpack_require__(89235);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
;// CONCATENATED MODULE: ./src/consts/iconsSider.tsx

const iconDashboard = /*#__PURE__*/ jsx_runtime_.jsx("span", {
    style: {
        backgroundImage: "url(/assets/icons/dashboard.svg)"
    }
});
const iconJobs = /*#__PURE__*/ jsx_runtime_.jsx("span", {
    style: {
        backgroundImage: "url(/assets/icons/jobs.svg)"
    }
});
const iconSubmissions = /*#__PURE__*/ jsx_runtime_.jsx("span", {
    style: {
        backgroundImage: "url(/assets/icons/submissions.svg)"
    }
});
const iconContracts = /*#__PURE__*/ jsx_runtime_.jsx("span", {
    style: {
        backgroundImage: "url(/assets/icons/contracts.svg)"
    }
});
const iconTYE = /*#__PURE__*/ jsx_runtime_.jsx("span", {
    style: {
        backgroundImage: "url(/assets/icons/t&e.svg)"
    }
});
const iconInvoices = /*#__PURE__*/ jsx_runtime_.jsx("span", {
    style: {
        backgroundImage: "url(/assets/icons/invoices.svg)"
    }
});
const iconReports = /*#__PURE__*/ jsx_runtime_.jsx("span", {
    style: {
        backgroundImage: "url(/assets/icons/reports.svg)"
    }
});
const iconApprovals = /*#__PURE__*/ jsx_runtime_.jsx("span", {
    style: {
        backgroundImage: "url(/assets/icons/approvals.svg)"
    }
});

;// CONCATENATED MODULE: ./src/consts/login_ui.ts



const { sidebar: { labelItems  } ,  } = en;
const LOGIN_TEXT = {
    title_intro: "The World's Easiest VMS",
    title_intro_tablet: "The World's\nEasiest VMS",
    subtitle_intro: `Built on the latest technology and\ndesigned with the user in mind.`,
    title_form_login: "Conexis VMS Login",
    title_form_forgot: "Forgot your password?",
    subtitle_form_forgot: `Enter your email address below and we will send\nyou a link to reset your password.`,
    title_email_sent: "Email sent",
    subtitle_email_sent: "We sent an email to your account",
    title_form_expired: "Expired link",
    subtitle_form_expired: "The link you’re trying to access has already been\nused. Please enter your email below to request a\nnew link.",
    title_form_reset: "Reset your password",
    title_form_set: "Set your password",
    title_server_down: "Our server is down",
    subtitle_server_down: "Our server is down, please try again in a\nfew minutes. If you still need help, contact\nus at "
};
const USER_CREATION_TEXT = {
    title_form_user_creation: "Create new user"
};
const TITLE_LOGO = "Conexis";
const MOBILE_BREAKPOINT = 576;
const TABLET_BREAKPOINT = 992;
const SMALL_TABLET_BREAKPOINT = 768;
const ITEMS_SIDER = [
    {
        key: routes/* URL_DASHBOARD */.Zb,
        label: labelItems.dashboard,
        icon: iconDashboard
    },
    {
        key: routes/* URL_MY_JOBS */.dP,
        label: labelItems.myJobs,
        icon: iconJobs
    },
    {
        key: routes/* URL_SUBMISSIONS */.SU,
        label: labelItems.submissions,
        icon: iconSubmissions
    },
    {
        key: routes/* URL_CONTRACTS */.nm,
        label: labelItems.contracts,
        icon: iconContracts
    },
    {
        key: routes/* URL_TYE */.hi,
        label: labelItems["t&e"],
        icon: iconTYE
    },
    {
        key: routes/* URL_INVOICES */.me,
        label: labelItems.invoices,
        icon: iconInvoices
    },
    {
        key: routes/* URL_REPORTS */.Qh,
        label: labelItems.reports,
        icon: iconReports
    }, 
];
const ITEMS_SIDER_OTHERS = [
    {
        key: routes/* URL_SUPPLIERS */.AQ,
        label: labelItems.suppliers
    },
    {
        key: routes/* URL_BUYERS */._L,
        label: labelItems.buyers
    },
    {
        key: routes/* URL_CANDIDATES */.nL,
        label: labelItems.candidates
    },
    {
        key: routes/* URL_APPROVALS */.A0,
        label: labelItems.approvals
    },
    {
        key: routes/* URL_USERS */.CU,
        label: labelItems.users
    },
    {
        key: routes/* URL_ONBOARDING_ITEMS */.Uy,
        label: labelItems.onboardingActivities
    },
    {
        key: routes/* URL_WORK_SHIFTS */.wI,
        label: labelItems.workShifts
    },
    {
        key: routes/* URL_BUSINESS_UNITS */.F1,
        label: labelItems.businessUnits
    },
    {
        key: routes/* URL_GL_CODES */.gU,
        label: labelItems.glCodes
    },
    {
        key: routes/* URL_COST_CENTER */.IH,
        label: labelItems.costCenters
    },
    {
        key: routes/* URL_IMPORTS */.sZ,
        label: labelItems.imports
    }, 
];
const ITEMS_SIDER_ACCOUNT = [
    {
        key: routes/* URL_TUTORIALS */.Ot,
        label: labelItems.tutorials
    },
    {
        key: routes/* URL_SETTINGS */.uW,
        label: labelItems.settings
    },
    {
        key: routes/* URL_LOG_OUT */.O9,
        label: labelItems.logOut
    }, 
];
const ITEMS_LINKS_NAVBAR = [
    ...ITEMS_SIDER_ACCOUNT,
    {
        key: routes/* URL_POST_JOB */.Ae,
        label: labelItems.postJob
    }, 
];
const LINKS_ERRORS = [
    {
        key: routes/* URL_ERROR_404 */.t0,
        label: routes/* URL_ERROR_404 */.t0
    },
    {
        key: routes/* URL_ERROR_500 */.k4,
        label: routes/* URL_ERROR_500 */.k4
    }, 
];


/***/ }),

/***/ 76477:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Rt": () => (/* binding */ KEY_ROLE_LOCALSTORAGE),
/* harmony export */   "dv": () => (/* binding */ LOGGED_AS),
/* harmony export */   "pR": () => (/* binding */ USER_ROLES)
/* harmony export */ });
const KEY_ROLE_LOCALSTORAGE = "current_user_role";
const LOGGED_AS = {
    buyer: "buyer",
    supplier: "supplier"
};
/**
  @readonly

  @enum {string}
  @property {string} AccountManager - Account Manager role.
  @property {string} Approver - Approver role.
  @property {string} BuyerAdministrator - Buyer Administrator role.
  @property {string} BuyerFinance - Buyer Finance role.
  @property {string} Delegate - Delegate role.
  @property {string} HiringManager - Hiring Manager role.
  @property {string} MspAdministrator - MSP Administrator role.
  @property {string} MspFinance - MSP Finance role.
  @property {string} ProgramManager - Program Manager role.
  @property {string} ProgramRepresentative - Program Representative role.
  @property {string} Recruiter - Recruiter role.
  @property {string} SupplierAdministrator - Supplier Administrator role.
  @property {string} SupplierFinance - Supplier Finance role.
  @property {string} Worker - Worker role.
*/ const USER_ROLES = Object.freeze({
    AccountManager: "Account Manager",
    Approver: "Approver",
    BuyerAdministrator: "Buyer Administrator",
    BuyerFinance: "Buyer Finance",
    Delegate: "Delegate",
    HiringManager: "Hiring Manager",
    MspAdministrator: "MSP Administrator",
    MspFinance: "MSP Finance",
    ProgramManager: "Program Manager",
    ProgramRepresentative: "Program Representative",
    Recruiter: "Recruiter",
    SupplierAdministrator: "Supplier Administrator",
    SupplierFinance: "Supplier Finance",
    Worker: "Worker"
});


/***/ }),

/***/ 42144:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$5": () => (/* binding */ URL_CREATE_WORK_SHIFTS),
/* harmony export */   "A0": () => (/* binding */ URL_APPROVALS),
/* harmony export */   "A3": () => (/* binding */ URL_SUCCESS_ONBOARDING),
/* harmony export */   "AQ": () => (/* binding */ URL_SUPPLIERS),
/* harmony export */   "Ae": () => (/* binding */ URL_POST_JOB),
/* harmony export */   "CU": () => (/* binding */ URL_USERS),
/* harmony export */   "F1": () => (/* binding */ URL_BUSINESS_UNITS),
/* harmony export */   "H_": () => (/* binding */ URL_SUCCESS_CREATE_WSHIFTS),
/* harmony export */   "IH": () => (/* binding */ URL_COST_CENTER),
/* harmony export */   "O9": () => (/* binding */ URL_LOG_OUT),
/* harmony export */   "Ot": () => (/* binding */ URL_TUTORIALS),
/* harmony export */   "Q9": () => (/* binding */ URL_BACK_CREATE_CANDIDATE),
/* harmony export */   "Qh": () => (/* binding */ URL_REPORTS),
/* harmony export */   "SU": () => (/* binding */ URL_SUBMISSIONS),
/* harmony export */   "Uy": () => (/* binding */ URL_ONBOARDING_ITEMS),
/* harmony export */   "Zb": () => (/* binding */ URL_DASHBOARD),
/* harmony export */   "_L": () => (/* binding */ URL_BUYERS),
/* harmony export */   "a9": () => (/* binding */ URL_SUCCESS_NO_SENT_EMAIL_CANDIDATE),
/* harmony export */   "dP": () => (/* binding */ URL_MY_JOBS),
/* harmony export */   "gU": () => (/* binding */ URL_GL_CODES),
/* harmony export */   "hi": () => (/* binding */ URL_TYE),
/* harmony export */   "k4": () => (/* binding */ URL_ERROR_500),
/* harmony export */   "me": () => (/* binding */ URL_INVOICES),
/* harmony export */   "nL": () => (/* binding */ URL_CANDIDATES),
/* harmony export */   "nm": () => (/* binding */ URL_CONTRACTS),
/* harmony export */   "sZ": () => (/* binding */ URL_IMPORTS),
/* harmony export */   "t0": () => (/* binding */ URL_ERROR_404),
/* harmony export */   "u8": () => (/* binding */ URL_CREATE_CANDIDATE),
/* harmony export */   "u9": () => (/* binding */ URL_JOBS_TO_APPROVE),
/* harmony export */   "uW": () => (/* binding */ URL_SETTINGS),
/* harmony export */   "wI": () => (/* binding */ URL_WORK_SHIFTS),
/* harmony export */   "zN": () => (/* binding */ businessUnitsHomeUrl),
/* harmony export */   "zh": () => (/* binding */ URL_BACK_FORM_ONBOARDING)
/* harmony export */ });
/* unused harmony export URL_BACK_CREATE_WSHIFTS */
const URL_CREATE_WORK_SHIFTS = "/home/work-shifts/create";
const businessUnitsHomeUrl = "/home/business-units";
const URL_SUCCESS_ONBOARDING = "/home/onboarding-activities?success=true";
const URL_BACK_FORM_ONBOARDING = "/home/onboarding-activities";
const URL_SUCCESS_CREATE_WSHIFTS = "/home/work-shifts/create?success=true";
const URL_BACK_CREATE_WSHIFTS = "/home/work-shifts";
const URL_SUCCESS_NO_SENT_EMAIL_CANDIDATE = "/home/candidates/create?success=created-no-sent-email";
const URL_BACK_CREATE_CANDIDATE = "/home/candidates";
const URL_DASHBOARD = "/dashboard";
const URL_TUTORIALS = "/home/tutorials";
const URL_POST_JOB = "/home/my-jobs/post-new-jobs";
const URL_MY_JOBS = "/home/my-jobs";
const URL_SUBMISSIONS = "/home/submissions";
const URL_CONTRACTS = "/home/contracts";
const URL_TYE = "/home/t&e";
const URL_INVOICES = "/home/invoices";
const URL_REPORTS = "/home/reports";
const URL_SUPPLIERS = "/home/suppliers";
const URL_BUYERS = "/home/buyers";
const URL_CANDIDATES = "/home/candidates";
const URL_APPROVALS = "/home/approvals";
const URL_USERS = "/home/users";
const URL_ONBOARDING_ITEMS = "/home/onboarding-activities";
const URL_WORK_SHIFTS = "/home/work-shifts";
const URL_BUSINESS_UNITS = "/home/business-units";
const URL_GL_CODES = "/home/gl-codes";
const URL_COST_CENTER = "/home/cost-centers";
const URL_IMPORTS = "/home/imports";
const URL_SETTINGS = "/home/settings";
const URL_LOG_OUT = "logout";
const URL_CREATE_CANDIDATE = "/home/candidates/create";
const URL_ERROR_404 = "/404";
const URL_ERROR_500 = "/auth/server-down";
const URL_JOBS_TO_APPROVE = "/home/job-approvals";


/***/ }),

/***/ 16277:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dr": () => (/* binding */ USER_ROLE_SUPPLIER),
/* harmony export */   "Ht": () => (/* binding */ USER_ROLE_MSP),
/* harmony export */   "Qg": () => (/* binding */ USER_ROLE_MSP_EXCEPTIONS),
/* harmony export */   "aD": () => (/* binding */ USER_ROLE_BUYER),
/* harmony export */   "n4": () => (/* binding */ USER_CREATION_TEXT)
/* harmony export */ });
const USER_CREATION_TEXT = {
    title_form_user_creation: "Create new user",
    title_form_user_edition: "Update user",
    title_users: "Users"
};
const USER_ROLE_SUPPLIER = [
    "Supplier Administrator",
    "Account Manager",
    "Supplier Finance", 
];
const USER_ROLE_MSP_EXCEPTIONS = [
    "MSP Administrator",
    "MSP Finance"
];
const USER_ROLE_MSP = [
    "Program Manager",
    "Program Representative",
    "Super Administrator",
    "Product Support", 
];
const USER_ROLE_BUYER = [
    "Buyer Administrator",
    "Approver",
    "Hiring Manager",
    "Buyer Finance",
    "Delegate",
    "Recruiter", 
];


/***/ })

};
;