"use strict";
exports.id = 9227;
exports.ids = [9227];
exports.modules = {

/***/ 49227:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KW": () => (/* binding */ setLoadingDataMetrics),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "jb": () => (/* binding */ getJobsPendingApprove)
/* harmony export */ });
/* unused harmony exports updateUserLogged, dashboardSlice, setCurrentUserRole, setCurrentUserRoleName */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90396);
/* harmony import */ var _infrastructure_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43019);
/* harmony import */ var _infrastructure_services_JobsResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21391);
/* harmony import */ var _locales_en_en_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89235);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_infrastructure_services__WEBPACK_IMPORTED_MODULE_2__, _infrastructure_services_JobsResource__WEBPACK_IMPORTED_MODULE_3__]);
([_infrastructure_services__WEBPACK_IMPORTED_MODULE_2__, _infrastructure_services_JobsResource__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const { consts: { catchError  } ,  } = _locales_en_en_json__WEBPACK_IMPORTED_MODULE_4__;
const updateUserLogged = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("utils/loggedUser", async (idLogged, { rejectWithValue  })=>{
    try {
        await _infrastructure_services__WEBPACK_IMPORTED_MODULE_2__/* ["default"].updateLoggedBuyerOrSupplier */ .ZP.updateLoggedBuyerOrSupplier({
            dataBody: idLogged
        });
        return true;
    } catch (error) {
        return rejectWithValue(false);
    }
});
const getJobsPendingApprove = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("get/jobsApproval", async (_, { rejectWithValue  })=>{
    try {
        const result = await _infrastructure_services_JobsResource__WEBPACK_IMPORTED_MODULE_3__/* ["default"].pendingApproval */ .Z.pendingApproval();
        return result.data.length;
    } catch (error) {
        return rejectWithValue(error?.message ?? catchError);
    }
});
const initialState = {
    /** The current role of user logged Buyer or Supplier */ currentUserRole: "",
    currentUserRoleName: "",
    loadingDataMetrics: false,
    titleDashboardMSP: "Conexis",
    jobsToApprove: 0,
    error: ""
};
const dashboardSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "ui",
    initialState,
    reducers: {
        setCurrentUserRole: (state, action)=>{
            localStorage.setItem(_consts__WEBPACK_IMPORTED_MODULE_1__/* .roles.KEY_ROLE_LOCALSTORAGE */ .uJ.Rt, action.payload);
            state.currentUserRole = action.payload;
        },
        setCurrentUserRoleName: (state, action)=>{
            state.currentUserRoleName = action.payload;
        },
        setLoadingDataMetrics: (state, action)=>{
            state.loadingDataMetrics = action.payload;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(updateUserLogged.fulfilled, (state)=>({
                ...state
            })).addCase(updateUserLogged.rejected, (state)=>({
                ...state
            })).addCase(getJobsPendingApprove.fulfilled, (state, action)=>{
            state.jobsToApprove = action.payload;
        }).addCase(getJobsPendingApprove.rejected, (state, action)=>{
            // TODO:pending validation how the error will be displayed to the user
            state.error = action.payload;
        });
    }
});
const { setCurrentUserRole , setCurrentUserRoleName , setLoadingDataMetrics ,  } = dashboardSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dashboardSlice.reducer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 32435:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ ENDPOINT_JOBS),
/* harmony export */   "E": () => (/* binding */ ENDPOINT_JOBS_APPROVAL_GET)
/* harmony export */ });
const ENDPOINT_JOBS = "/jobs";
const ENDPOINT_JOBS_APPROVAL_GET = "/pendingApproval";


/***/ }),

/***/ 27738:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ axiosCall),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69915);
/* harmony import */ var _services_utilsServices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17632);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_1__, _services_utilsServices__WEBPACK_IMPORTED_MODULE_2__]);
([js_cookie__WEBPACK_IMPORTED_MODULE_1__, _services_utilsServices__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const axiosInstance = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
    baseURL: "https://d5ja6jkvsot2v.cloudfront.net",
    headers: {
        "Content-Type": "application/json"
    }
});
axiosInstance.interceptors.request.use((config)=>{
    const token = js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get("token");
    if (token && config?.headers !== undefined) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error)=>{
    return Promise.reject(error);
});
const axiosCall = async ({ method , endpoint , id , body , router  })=>{
    let url = `${endpoint}`;
    if (id) {
        url = url.concat(`/${id}`);
    }
    try {
        const response = await axiosInstance({
            method,
            url,
            data: body
        });
        return response.data;
    } catch (error) {
        const errorCodes = [
            400,
            403,
            404,
            401
        ];
        if (errorCodes.includes(error.response?.status)) {
            throw error;
        } else {
            _services_utilsServices__WEBPACK_IMPORTED_MODULE_2__/* .UtilServices.serverIsDown */ .$.serverIsDown(router);
            throw error;
        }
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axiosInstance);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 21391:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _consts_endpoints__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32435);
/* harmony import */ var _infrastructure_services_ResourceService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76981);
/* harmony import */ var _api_axiosClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27738);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_axiosClient__WEBPACK_IMPORTED_MODULE_1__]);
_api_axiosClient__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/* eslint-disable class-methods-use-this */ 



class JobsResource extends _infrastructure_services_ResourceService__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z {
    pendingApproval() {
        const url = `${this.resourceEndpoint}${_consts_endpoints__WEBPACK_IMPORTED_MODULE_3__/* .ENDPOINT_JOBS_APPROVAL_GET */ .E}`;
        return this.axiosInstance.get(url).then((response)=>response.data).catch((error)=>{
            throw new Error(`Failed to get resource: ${error.message}`);
        });
    }
    transform({ job_id , job_title , type_of_position , planned_start_date , planned_end_date , number_of_positions , skill_category , account_primary_hiring_manager , street_address_line1 , province_region , country , postal_code , target_rate , business_unit , job_comments , supplier_distribution_list , salary_low , salary_high , job_description , job_description_attachment , work_shifts  }) {
        return {
            key: job_id,
            jobTitle: job_title,
            positionType: type_of_position,
            plannedStartDate: planned_start_date ? dayjs__WEBPACK_IMPORTED_MODULE_0___default()(planned_start_date).format("DD MMM YYYY") : "-",
            plannedEndDate: planned_end_date ? dayjs__WEBPACK_IMPORTED_MODULE_0___default()(planned_end_date).format("DD MMM YYYY") : "-",
            numberPositions: number_of_positions ?? "-",
            skillCategory: skill_category ?? "-",
            hiringManager: account_primary_hiring_manager,
            workAddress: street_address_line1 ?? "-",
            province: province_region?.state_or_province_name ?? "-",
            country: country?.country_name ?? "-",
            postalCode: postal_code ?? "-",
            targetRate: target_rate ?? "-",
            businessUnit: business_unit.business_unit_number ?? "-",
            jobComments: job_comments ?? "-",
            supplierDistributionList: supplier_distribution_list.length ? supplier_distribution_list.map((item)=>item.supplier_company_name).join(", ") : "-",
            salaryHigh: salary_high ? `$${salary_high}` : "-",
            salaryLow: salary_low ? `$${salary_low}` : "-",
            jobDescription: job_description ?? "-",
            jobDescriptionAttachment: job_description_attachment,
            workShifts: work_shifts
        };
    }
}
const service = new JobsResource(_api_axiosClient__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, _consts_endpoints__WEBPACK_IMPORTED_MODULE_3__/* .ENDPOINT_JOBS */ .D);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (service);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 76981:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ResourceService)
/* harmony export */ });
class ResourceService {
    constructor(axiosInstance, resourceEndpoint){
        this.axiosInstance = axiosInstance;
        this.resourceEndpoint = resourceEndpoint;
    }
    getAll() {
        return this.axiosInstance.get(`${this.resourceEndpoint}/readAll`).then((response)=>{
            // @ts-ignore
            const data = this.transform ? response.data.data.map((item)=>this.transform(item)) : response.data.data;
            return data;
        }).catch((error)=>{
            throw new Error(`Failed to get all resources: ${error.message}`);
        });
    }
    getById(id) {
        const url = `${this.resourceEndpoint}/${id}`;
        return this.axiosInstance.get(url).then((response)=>response.data).catch((error)=>{
            throw new Error(`Failed to get resource with ID ${id}: ${error.message}`);
        });
    }
    create(data) {
        return this.axiosInstance.post(this.resourceEndpoint, data).then((response)=>response.data).catch((error)=>{
            throw new Error(`Failed to create resource: ${error.message}`);
        });
    }
    update(id, data) {
        const url = `${this.resourceEndpoint}/${id}`;
        return this.axiosInstance.put(url, data).then((response)=>response.data).catch((error)=>{
            throw new Error(`Failed to update resource with ID ${id}: ${error.message}`);
        });
    }
    delete(id) {
        const url = `${this.resourceEndpoint}/${id}`;
        return this.axiosInstance.delete(url).then(()=>{}).catch((error)=>{
            throw new Error(`Failed to delete resource with ID ${id}: ${error.message}`);
        });
    }
}


/***/ })

};
;