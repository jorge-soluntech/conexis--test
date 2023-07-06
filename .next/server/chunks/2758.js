"use strict";
exports.id = 2758;
exports.ids = [2758];
exports.modules = {

/***/ 62633:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_I": () => (/* binding */ PERMISSIONS),
/* harmony export */   "aO": () => (/* binding */ ACTIONS),
/* harmony export */   "j2": () => (/* binding */ DASHBOARDTYPES)
/* harmony export */ });
/* unused harmony export ROLES */
const ACTIONS = {
    create: "create",
    edit: "edit",
    view: "view"
};
const DASHBOARDTYPES = {
    buyer: "buyers",
    supplier: "suppliers"
};
const ROLES = {
    BuyerAdministrator: "Buyer Administrator",
    Recruiter: "Recruiter",
    HiringManager: "Hiring Manager",
    Approver: "Approver",
    BuyerFinance: "Buyer Finance",
    MSPAdministrator: "MSP Administrator",
    Delegate: "Delegate",
    ProgramManager: "Program Manager",
    ProgramRepresentative: "Program Representative",
    MSPFinance: "MSP Finance",
    SupplierAdministrator: "  Supplier Administrator",
    AccountManager: "Account Manager",
    SupplierFinance: "Supplier Finance",
    SuperAdministrator: "Super Administrator",
    ProductSupport: "Product Support",
    Worker: "Worker"
};
const PERMISSIONS = {
    [DASHBOARDTYPES.buyer]: {
        [ACTIONS.view]: [
            ROLES.MSPAdministrator,
            ROLES.ProgramManager
        ],
        [ACTIONS.create]: [
            ROLES.MSPAdministrator
        ],
        [ACTIONS.edit]: [
            ROLES.MSPAdministrator
        ]
    },
    [DASHBOARDTYPES.supplier]: {
        [ACTIONS.view]: [
            ROLES.MSPAdministrator,
            ROLES.ProgramManager
        ],
        [ACTIONS.create]: [
            ROLES.MSPAdministrator
        ],
        [ACTIONS.edit]: [
            ROLES.MSPAdministrator
        ]
    }
};


/***/ })

};
;