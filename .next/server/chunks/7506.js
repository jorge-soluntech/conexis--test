"use strict";
exports.id = 7506;
exports.ids = [7506];
exports.modules = {

/***/ 47506:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UP": () => (/* binding */ setModalDelete),
/* harmony export */   "Ug": () => (/* binding */ setModalCancelJob),
/* harmony export */   "X6": () => (/* binding */ setModalDuplicateJob),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "iJ": () => (/* binding */ setModalOnHoldJob),
/* harmony export */   "jW": () => (/* binding */ setCloseModals),
/* harmony export */   "m5": () => (/* binding */ setModalFillJob),
/* harmony export */   "qm": () => (/* binding */ setSelectedJobId),
/* harmony export */   "rv": () => (/* binding */ setModalOpenJob),
/* harmony export */   "sQ": () => (/* binding */ getAllJobs)
/* harmony export */ });
/* unused harmony export jobsSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _consts_forms_general__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48522);
/* harmony import */ var _infrastructure_services_JobsServices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73928);
/* harmony import */ var _locales_en_en_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89235);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_infrastructure_services_JobsServices__WEBPACK_IMPORTED_MODULE_2__]);
_infrastructure_services_JobsServices__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const { consts: { emptyLabel  } ,  } = _locales_en_en_json__WEBPACK_IMPORTED_MODULE_3__;
const initialState = {
    allJobs: [],
    selectedJobId: "",
    isModalFillJob: false,
    isModalCancelJob: false,
    isModalDuplicateJob: false,
    isIndividual: false,
    isModalOpenJob: false,
    isModalDelete: false,
    isModalOnHoldJob: false
};
const getAllJobs = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("get/allJobs", async (data, { rejectWithValue  })=>{
    const jobsServices = new _infrastructure_services_JobsServices__WEBPACK_IMPORTED_MODULE_2__/* .JobsServices */ .$(data.router);
    try {
        const response = await jobsServices.getAllJobs(data.currentUserRole);
        return response.data.map((item)=>({
                key: item.id,
                jobId: item.job_id,
                jobTitle: item.job_title,
                typeOfPosition: item.type_of_position,
                status: item.status,
                numberOfPositions: item.number_of_positions,
                filledPositions: item.filled_positions,
                submissionsCount: item.submissions_count,
                postedOn: item?.posted_on ? dayjs__WEBPACK_IMPORTED_MODULE_1___default()(item.posted_on).format(_consts_forms_general__WEBPACK_IMPORTED_MODULE_4__/* .shortDateFormat */ .pz) : emptyLabel,
                plannedStartDate: dayjs__WEBPACK_IMPORTED_MODULE_1___default()(item.planned_start_date).format(_consts_forms_general__WEBPACK_IMPORTED_MODULE_4__/* .shortDateFormat */ .pz),
                plannedEndDate: item?.planned_end_date ? dayjs__WEBPACK_IMPORTED_MODULE_1___default()(item.planned_end_date).format(_consts_forms_general__WEBPACK_IMPORTED_MODULE_4__/* .shortDateFormat */ .pz) : null,
                businessUnit: item.business_unit?.business_unit_number || null
            }));
    } catch (error) {
        return rejectWithValue(false);
    }
});
const jobsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "jobs",
    initialState,
    reducers: {
        setModalFillJob: (state, action)=>{
            state.isModalFillJob = action.payload;
        },
        setModalCancelJob: (state, action)=>{
            state.isModalCancelJob = action.payload;
        },
        setModalDuplicateJob: (state, action)=>{
            state.isModalDuplicateJob = action.payload;
        },
        setModalOpenJob: (state, action)=>{
            state.isModalOpenJob = action.payload;
        },
        setModalDelete: (state, action)=>{
            state.isIndividual = action.payload.isIndividual;
            state.isModalDelete = action.payload.isModalOpened;
        },
        setCloseModals: (state)=>{
            state.isModalDelete = false;
        },
        setModalOnHoldJob: (state, action)=>{
            state.isModalOnHoldJob = action.payload;
        },
        setSelectedJobId: (state, action)=>{
            state.selectedJobId = action.payload;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(getAllJobs.fulfilled, (state, action)=>{
            state.allJobs = action.payload;
        }).addCase(getAllJobs.rejected, (state)=>({
                ...state
            }));
    }
});
const { setModalFillJob , setModalCancelJob , setModalDuplicateJob , setSelectedJobId , setModalOpenJob , setModalDelete , setCloseModals , setModalOnHoldJob ,  } = jobsSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (jobsSlice.reducer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 48522:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EI": () => (/* binding */ PASSWORDS_VALIDATION_REGEX),
/* harmony export */   "HI": () => (/* binding */ INPUT_NUMBER_PARSER_REGEX),
/* harmony export */   "JK": () => (/* binding */ customFormatDate),
/* harmony export */   "bF": () => (/* binding */ EMAIL_VALIDATION_REGEX),
/* harmony export */   "p6": () => (/* binding */ formatDate),
/* harmony export */   "pz": () => (/* binding */ shortDateFormat)
/* harmony export */ });
/* eslint-disable no-useless-escape */ const EMAIL_VALIDATION_REGEX = /^(?!.*\.\.)\w+([\w.'!#$%&*+\/=?^`{|}~-])*\w+@(\w+\.)+\w{2,8}$/;
const INPUT_NUMBER_PARSER_REGEX = /\D/g;
const PASSWORDS_VALIDATION_REGEX = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[\W_]).{3,}$/;
const formatDate = "YYYY-MM-DD";
const customFormatDate = "YYYY-MM-DDTHH:mm:ss.SSSZ";
const shortDateFormat = "MM/DD/YYYY";


/***/ }),

/***/ 73928:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ JobsServices)
/* harmony export */ });
/* harmony import */ var _api_axiosClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27738);
/* harmony import */ var _api_configFetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51573);
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97237);
/* harmony import */ var _utilsServices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17632);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_axiosClient__WEBPACK_IMPORTED_MODULE_0__, _api_configFetch__WEBPACK_IMPORTED_MODULE_1__, _utilsServices__WEBPACK_IMPORTED_MODULE_3__]);
([_api_axiosClient__WEBPACK_IMPORTED_MODULE_0__, _api_configFetch__WEBPACK_IMPORTED_MODULE_1__, _utilsServices__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const createUrl = (base, path)=>`${base}${path}`;
const BASE_URL = "https://d5ja6jkvsot2v.cloudfront.net";
class JobsServices {
    constructor(router){
        this.router = router;
    }
    /**
   * This endpoint returns all the jobs that a user can read depending on his role,
   * the returned columns also depend on the user's role.
   */ getAllJobs = async (msp)=>{
        return (0,_api_axiosClient__WEBPACK_IMPORTED_MODULE_0__/* .axiosCall */ .F)({
            method: _api_configFetch__WEBPACK_IMPORTED_MODULE_1__/* .AXIOS_METHODS.get */ .ZU.get,
            endpoint: `/jobs/readAll?msp=${msp}`,
            router: this.router
        });
    };
    /**
   * This endpoint will export all the results obtained from the readAll endpoint without pagination.
   */ exportAllJobs = async (msp, type)=>{
        try {
            const response = await (0,_api_index__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)((0,_api_configFetch__WEBPACK_IMPORTED_MODULE_1__/* .configGet */ .zn)(createUrl(BASE_URL, `/jobs/exportAll?msp=${msp}&type=${type}`)));
            return response.data;
        } catch (error) {
            if (error.response?.status === 404 || error.response?.status === 400) {
                throw error;
            } else {
                _utilsServices__WEBPACK_IMPORTED_MODULE_3__/* .UtilServices.serverIsDown */ .$.serverIsDown(this.router);
                throw error;
            }
        }
    };
    /**
   * This endpoint will mark a job as filled.
   */ markAsFilled = async (dataForm, id)=>{
        try {
            const response = await (0,_api_index__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)((0,_api_configFetch__WEBPACK_IMPORTED_MODULE_1__/* .configPost */ .DH)([
                createUrl(BASE_URL, `/jobs/markAsFilled/${id}`)
            ], dataForm));
            return response.data;
        } catch (error) {
            if (error.response?.status === 404 || error.response?.status === 400) {
                throw error;
            } else {
                _utilsServices__WEBPACK_IMPORTED_MODULE_3__/* .UtilServices.serverIsDown */ .$.serverIsDown(this.router);
                throw error;
            }
        }
    };
    /**
   * This endpoint will mark a job as canceled.
   */ markAsCanceled = async (dataForm, id)=>{
        try {
            const response = await (0,_api_index__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)((0,_api_configFetch__WEBPACK_IMPORTED_MODULE_1__/* .configPost */ .DH)([
                createUrl(BASE_URL, `/jobs/markAsCanceled/${id}`)
            ], dataForm));
            return response.data;
        } catch (error) {
            if (error.response?.status === 404 || error.response?.status === 400) {
                throw error;
            } else {
                _utilsServices__WEBPACK_IMPORTED_MODULE_3__/* .UtilServices.serverIsDown */ .$.serverIsDown(this.router);
                throw error;
            }
        }
    };
    /**
   * This endpoint will duplicate a job as a template.
   */ duplicateAsTemplate = async (id)=>{
        try {
            const response = await (0,_api_index__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)((0,_api_configFetch__WEBPACK_IMPORTED_MODULE_1__/* .configGet */ .zn)(createUrl(BASE_URL, `/jobs/duplicateAsTemplate/${id}`)));
            return response.data;
        } catch (error) {
            if (error.response?.status === 404 || error.response?.status === 400) {
                throw error;
            } else {
                _utilsServices__WEBPACK_IMPORTED_MODULE_3__/* .UtilServices.serverIsDown */ .$.serverIsDown(this.router);
                throw error;
            }
        }
    };
    /**
   * delete one or multiple jobs job
   */ deleteJobs = (jobsIDs)=>{
        return (0,_api_axiosClient__WEBPACK_IMPORTED_MODULE_0__/* .axiosCall */ .F)({
            method: _api_configFetch__WEBPACK_IMPORTED_MODULE_1__/* .AXIOS_METHODS["delete"] */ .ZU["delete"],
            endpoint: `/jobs/deleteJobs`,
            router: this.router,
            body: jobsIDs
        });
    };
    /**
   * Update the status of one job
   */ updateStatus = (jobID)=>{
        return (0,_api_axiosClient__WEBPACK_IMPORTED_MODULE_0__/* .axiosCall */ .F)({
            method: _api_configFetch__WEBPACK_IMPORTED_MODULE_1__/* .AXIOS_METHODS.put */ .ZU.put,
            endpoint: `/jobs/updateStatus`,
            router: this.router,
            id: jobID
        });
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;