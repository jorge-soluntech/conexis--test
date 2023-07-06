"use strict";
exports.id = 3735;
exports.ids = [3735];
exports.modules = {

/***/ 5355:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports roleSlice, permissionsByRole, resetRole, hidePostJobButtonForMSP */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90396);


const initialState = {
    showSelectBuyerOrSupplier: true,
    showSwitchBuyerOrSupplier: true,
    showMainListItemsSider: true,
    showListOtherActionsSider: true,
    showTutorialslink: true,
    showSettingsItem: true,
    showPostJobButton: true,
    showMetrics: true,
    showDashboard: true,
    showSelectNameSideBar: true,
    userLevel: ""
};
const roleSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "role",
    initialState,
    reducers: {
        permissionsByRole: (state, action)=>{
            const SELECT_ROLE = {
                "MSP Administrator": ()=>{
                    state.userLevel = _consts__WEBPACK_IMPORTED_MODULE_1__/* .levels.msp */ .gr.msp;
                },
                "Program Manager": ()=>{
                    state.userLevel = _consts__WEBPACK_IMPORTED_MODULE_1__/* .levels.msp */ .gr.msp;
                },
                "MSP Finance": ()=>{
                    state.showPostJobButton = false;
                    state.userLevel = _consts__WEBPACK_IMPORTED_MODULE_1__/* .levels.msp */ .gr.msp;
                },
                "Program Representative": ()=>{
                    state.userLevel = _consts__WEBPACK_IMPORTED_MODULE_1__/* .levels.msp */ .gr.msp;
                },
                "Buyer Administrator": ()=>{
                    state.showMetrics = false;
                    state.showSelectBuyerOrSupplier = false;
                    state.showSwitchBuyerOrSupplier = false;
                    state.userLevel = _consts__WEBPACK_IMPORTED_MODULE_1__/* .levels.buyer */ .gr.buyer;
                },
                "Hiring Manager": ()=>{
                    state.showMetrics = false;
                    state.showSelectBuyerOrSupplier = false;
                    state.showSwitchBuyerOrSupplier = false;
                    state.userLevel = _consts__WEBPACK_IMPORTED_MODULE_1__/* .levels.buyer */ .gr.buyer;
                },
                "Buyer Finance": ()=>{
                    state.showPostJobButton = false;
                    state.showSelectBuyerOrSupplier = false;
                    state.showSwitchBuyerOrSupplier = false;
                    state.userLevel = _consts__WEBPACK_IMPORTED_MODULE_1__/* .levels.buyer */ .gr.buyer;
                },
                Delegate: ()=>{
                    state.showSwitchBuyerOrSupplier = false;
                    state.showMetrics = false;
                    state.showListOtherActionsSider = false;
                    state.showSelectNameSideBar = false;
                    state.userLevel = _consts__WEBPACK_IMPORTED_MODULE_1__/* .levels.buyer */ .gr.buyer;
                },
                Approver: ()=>{
                    state.showPostJobButton = false;
                    state.showSelectBuyerOrSupplier = false;
                    state.showSwitchBuyerOrSupplier = false;
                    state.showListOtherActionsSider = false;
                    state.showMetrics = false;
                    state.userLevel = _consts__WEBPACK_IMPORTED_MODULE_1__/* .levels.buyer */ .gr.buyer;
                },
                Recruiter: ()=>{
                    state.showSelectBuyerOrSupplier = false;
                    state.showSwitchBuyerOrSupplier = false;
                    state.showMetrics = false;
                    state.userLevel = _consts__WEBPACK_IMPORTED_MODULE_1__/* .levels.buyer */ .gr.buyer;
                },
                "Supplier Administrator": ()=>{
                    state.showSwitchBuyerOrSupplier = false;
                    state.showPostJobButton = false;
                    state.userLevel = _consts__WEBPACK_IMPORTED_MODULE_1__/* .levels.supplier */ .gr.supplier;
                },
                "Account Manager": ()=>{
                    state.showSwitchBuyerOrSupplier = false;
                    state.showPostJobButton = false;
                    state.showMetrics = false;
                    state.userLevel = _consts__WEBPACK_IMPORTED_MODULE_1__/* .levels.supplier */ .gr.supplier;
                },
                "Supplier Finance": ()=>{
                    state.showSwitchBuyerOrSupplier = false;
                    state.showPostJobButton = false;
                    state.showMetrics = false;
                    state.showListOtherActionsSider = false;
                    state.userLevel = _consts__WEBPACK_IMPORTED_MODULE_1__/* .levels.supplier */ .gr.supplier;
                },
                default: ()=>{
                    state.showSelectBuyerOrSupplier = false;
                    state.showSwitchBuyerOrSupplier = false;
                    state.showMainListItemsSider = false;
                    state.showListOtherActionsSider = false;
                    state.showTutorialslink = false;
                    state.showSettingsItem = false;
                    state.showPostJobButton = false;
                    state.showMetrics = false;
                    state.showDashboard = false;
                    state.userLevel = "";
                }
            };
            return SELECT_ROLE[action.payload] ? SELECT_ROLE[action.payload]() : SELECT_ROLE.default();
        },
        resetRole: ()=>initialState,
        hidePostJobButtonForMSP: (state, action)=>{
            if (!action.payload) {
                state.showPostJobButton = false;
                return;
            }
            state.showPostJobButton = true;
        }
    }
});
const { permissionsByRole , resetRole , hidePostJobButtonForMSP  } = roleSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (roleSlice.reducer);


/***/ }),

/***/ 33735:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _infrastructure_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43019);
/* harmony import */ var _buyersSlice_buyersSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94411);
/* harmony import */ var _candidatesSlice_candidatesSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89397);
/* harmony import */ var _dashboardSlice_dashboardSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49227);
/* harmony import */ var _jobsSlice_jobsSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47506);
/* harmony import */ var _onboardingSlice_onboardingSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72823);
/* harmony import */ var _postJobsSlice_postJobsSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(47498);
/* harmony import */ var _roleSlice_roleSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5355);
/* harmony import */ var _supplierSlice_supplierSlice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(22915);
/* harmony import */ var _uiSlice_uiSlice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(72281);
/* harmony import */ var _workShiftsSlice_workShiftsSlice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(10120);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_infrastructure_services__WEBPACK_IMPORTED_MODULE_1__, _candidatesSlice_candidatesSlice__WEBPACK_IMPORTED_MODULE_3__, _dashboardSlice_dashboardSlice__WEBPACK_IMPORTED_MODULE_4__, _jobsSlice_jobsSlice__WEBPACK_IMPORTED_MODULE_5__, _onboardingSlice_onboardingSlice__WEBPACK_IMPORTED_MODULE_6__, _postJobsSlice_postJobsSlice__WEBPACK_IMPORTED_MODULE_7__, _workShiftsSlice_workShiftsSlice__WEBPACK_IMPORTED_MODULE_11__]);
([_infrastructure_services__WEBPACK_IMPORTED_MODULE_1__, _candidatesSlice_candidatesSlice__WEBPACK_IMPORTED_MODULE_3__, _dashboardSlice_dashboardSlice__WEBPACK_IMPORTED_MODULE_4__, _jobsSlice_jobsSlice__WEBPACK_IMPORTED_MODULE_5__, _onboardingSlice_onboardingSlice__WEBPACK_IMPORTED_MODULE_6__, _postJobsSlice_postJobsSlice__WEBPACK_IMPORTED_MODULE_7__, _workShiftsSlice_workShiftsSlice__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// Here there is the store or your global state management
// redux - zustand - recoil - context api etc
// In this folder you will create all logic about your entities and reducers to management the state












const store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
    reducer: {
        ui: _uiSlice_uiSlice__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .ZP,
        dashboard: _dashboardSlice_dashboardSlice__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP,
        role: _roleSlice_roleSlice__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP,
        buyers: _buyersSlice_buyersSlice__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP,
        suppliers: _supplierSlice_supplierSlice__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP,
        onboarding: _onboardingSlice_onboardingSlice__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP,
        workShifts: _workShiftsSlice_workShiftsSlice__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP,
        candidates: _candidatesSlice_candidatesSlice__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP,
        jobs: _jobsSlice_jobsSlice__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP,
        postJobs: _postJobsSlice_postJobsSlice__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({
            thunk: {
                extraArgument: _infrastructure_services__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP
            },
            serializableCheck: false
        })
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;