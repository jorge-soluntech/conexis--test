"use strict";
exports.id = 7498;
exports.ids = [7498];
exports.modules = {

/***/ 47498:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BI": () => (/* binding */ readCostCentersByBuyer),
/* harmony export */   "J7": () => (/* binding */ readCountries),
/* harmony export */   "Jc": () => (/* binding */ setClearProvinces),
/* harmony export */   "Kh": () => (/* binding */ readPossibleApprovers),
/* harmony export */   "LO": () => (/* binding */ readProvinces),
/* harmony export */   "Mu": () => (/* binding */ resetValuesFormPostJob),
/* harmony export */   "OK": () => (/* binding */ createNewJob),
/* harmony export */   "Qx": () => (/* binding */ setSelectedWorkShifts),
/* harmony export */   "Wf": () => (/* binding */ readSuppliersByBuyer),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "hj": () => (/* binding */ readGlCodesByBuyer),
/* harmony export */   "k1": () => (/* binding */ readBusinessUnitsByBuyer),
/* harmony export */   "lI": () => (/* binding */ readWorkShiftsByBuyer),
/* harmony export */   "lb": () => (/* binding */ setValueSubmitStatus),
/* harmony export */   "mS": () => (/* binding */ setValuePositionType),
/* harmony export */   "u5": () => (/* binding */ readPossibleHiringManagers)
/* harmony export */ });
/* unused harmony exports postJobSlice, setValuesFormPostJob */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90396);
/* harmony import */ var _infrastructure_services_PostJobService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15701);
/* harmony import */ var _locales_en_en_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89235);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_infrastructure_services_PostJobService__WEBPACK_IMPORTED_MODULE_2__]);
_infrastructure_services_PostJobService__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const { postNewJob: { optionsPositionType  } ,  } = _locales_en_en_json__WEBPACK_IMPORTED_MODULE_3__;
const { OPTIONS_SAVE_STATUS  } = _consts__WEBPACK_IMPORTED_MODULE_1__/* .postJobsUI */ .dx;
const createNewJob = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("create/job", async (dataCreate, { rejectWithValue  })=>{
    const objJob = new _infrastructure_services_PostJobService__WEBPACK_IMPORTED_MODULE_2__/* .PostJobService */ .d(dataCreate.router);
    try {
        const response = await objJob.createNewJob(dataCreate.body);
        return response;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});
const readPossibleApprovers = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("read/approvers", async (dataRead, { rejectWithValue  })=>{
    const objJob = new _infrastructure_services_PostJobService__WEBPACK_IMPORTED_MODULE_2__/* .PostJobService */ .d(dataRead.router);
    try {
        const response = await objJob.getPossibleApprovers();
        return response?.data.map(({ id , full_name  })=>({
                value: id,
                label: full_name
            }));
    } catch (error) {
        return rejectWithValue(false);
    }
});
const readPossibleHiringManagers = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("read/hiringManagers", async (dataRead, { rejectWithValue  })=>{
    const objJob = new _infrastructure_services_PostJobService__WEBPACK_IMPORTED_MODULE_2__/* .PostJobService */ .d(dataRead.router);
    try {
        const response = await objJob.getPossibleHiringManagers();
        return response?.data.map(({ id , full_name  })=>({
                value: id,
                label: full_name
            }));
    } catch (error) {
        return rejectWithValue(false);
    }
});
const readWorkShiftsByBuyer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("read/workShifts", async (dataRead, { rejectWithValue  })=>{
    const objJob = new _infrastructure_services_PostJobService__WEBPACK_IMPORTED_MODULE_2__/* .PostJobService */ .d(dataRead.router);
    try {
        const response = await objJob.getWorkShiftsByBuyer();
        return response?.data.map(({ id , work_shift_description  })=>({
                value: id,
                label: work_shift_description
            }));
    } catch (error) {
        return rejectWithValue(false);
    }
});
const readCountries = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("read/countries", async (dataRead, { rejectWithValue  })=>{
    const objJob = new _infrastructure_services_PostJobService__WEBPACK_IMPORTED_MODULE_2__/* .PostJobService */ .d(dataRead.router);
    try {
        const response = await objJob.getCountries();
        return response?.data.map(({ id , country_name  })=>({
                value: id,
                label: country_name
            }));
    } catch (error) {
        return rejectWithValue(false);
    }
});
const readProvinces = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("read/provinces", async (dataRead, { rejectWithValue  })=>{
    const objJob = new _infrastructure_services_PostJobService__WEBPACK_IMPORTED_MODULE_2__/* .PostJobService */ .d(dataRead.router);
    try {
        const response = await objJob.getStatesProvinces(dataRead.idCountry);
        return response?.data.map(({ id , state_or_province_name  })=>({
                value: id,
                label: state_or_province_name
            }));
    } catch (error) {
        return rejectWithValue(false);
    }
});
const readBusinessUnitsByBuyer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("read/businessUnits", async (dataRead, { rejectWithValue  })=>{
    const objJob = new _infrastructure_services_PostJobService__WEBPACK_IMPORTED_MODULE_2__/* .PostJobService */ .d(dataRead.router);
    try {
        const response = await objJob.getBusinessUnitsByBuyer();
        return response?.data.map(({ id , business_unit_number  })=>({
                value: id,
                label: business_unit_number
            }));
    } catch (error) {
        return rejectWithValue(false);
    }
});
const readGlCodesByBuyer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("read/glCodes", async (dataRead, { rejectWithValue  })=>{
    const objJob = new _infrastructure_services_PostJobService__WEBPACK_IMPORTED_MODULE_2__/* .PostJobService */ .d(dataRead.router);
    try {
        const response = await objJob.getGlCodesByBuyer();
        return response?.data.map(({ id , gl_code_description  })=>({
                value: id,
                label: gl_code_description
            }));
    } catch (error) {
        return rejectWithValue(false);
    }
});
const readCostCentersByBuyer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("read/costCenters", async (dataRead, { rejectWithValue  })=>{
    const objJob = new _infrastructure_services_PostJobService__WEBPACK_IMPORTED_MODULE_2__/* .PostJobService */ .d(dataRead.router);
    try {
        const response = await objJob.getCostCentersByBuyer();
        return response?.data.map(({ id , cost_center_name  })=>({
                value: id,
                label: cost_center_name
            }));
    } catch (error) {
        return rejectWithValue(false);
    }
});
const readSuppliersByBuyer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("read/suppliers", async (dataRead, { rejectWithValue  })=>{
    const objJob = new _infrastructure_services_PostJobService__WEBPACK_IMPORTED_MODULE_2__/* .PostJobService */ .d(dataRead.router);
    try {
        const response = await objJob.getAllSuppliers();
        return response?.data?.suppliers.map(({ id , supplier_company_name  })=>({
                value: id,
                label: supplier_company_name
            }));
    } catch (error) {
        return rejectWithValue(false);
    }
});
const initialState = {
    valuesFormPostJob: {
        save_status: "",
        job_title: null,
        number_of_positions: null,
        type_of_position: optionsPositionType.temporary,
        primary_hiring_manager: null,
        planned_start_date: null,
        business_unit_id: null,
        gl_code_id: null,
        cost_centers_ids: undefined,
        supplier_distribution_list_ids: undefined,
        skill_category: null,
        job_description_attachment: null,
        job_description: null,
        job_comments: null,
        work_shifts_ids: [
            undefined,
            undefined,
            undefined
        ],
        street_address_line1: null,
        street_address_line2: null,
        country_id: null,
        province_region_id: null,
        city: null,
        postal_code: null,
        approvers_ids: undefined,
        planned_end_date: null,
        target_rate: null
    },
    loading: {
        loadingSave: false,
        loadingSend: false
    },
    loadingDataForm: false,
    isPermanentJob: false,
    possibleApprovers: [],
    possibleHiringManagers: [],
    workShiftsByBuyer: [],
    selectedWorkShifts: [
        undefined,
        undefined,
        undefined
    ],
    listCountries: [],
    listProvinces: [],
    businessUnitsByBuyer: [],
    glCodesByBuyer: [],
    costCentersByBuyer: [],
    suppliersByBuyer: [],
    valueSubmitStatus: null
};
const postJobSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "postJob",
    initialState,
    reducers: {
        setValuesFormPostJob: (state, action)=>{
            state.valuesFormPostJob = action.payload;
        },
        resetValuesFormPostJob: (state)=>{
            state.valuesFormPostJob = initialState.valuesFormPostJob;
        },
        setSelectedWorkShifts: (state, action)=>{
            state.selectedWorkShifts = action.payload;
        },
        setClearProvinces: (state)=>{
            state.listProvinces = [];
        },
        setValuePositionType: (state, action)=>{
            if (action.payload !== optionsPositionType.temporary) {
                state.isPermanentJob = true;
                return;
            }
            state.isPermanentJob = false;
        },
        setValueSubmitStatus: (state, action)=>{
            state.valueSubmitStatus = action.payload;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(createNewJob.pending, (state)=>{
            // While the createNewJob request is pending update loading state to be true but only if is initially false.
            if (state.valueSubmitStatus === OPTIONS_SAVE_STATUS.isSentNow) {
                state.loading.loadingSend = true;
                return;
            }
            state.loading.loadingSave = true;
        }).addCase(createNewJob.fulfilled, (state)=>{
            state.loading.loadingSave = false;
            state.loading.loadingSend = false;
        }).addCase(createNewJob.rejected, (state)=>{
            state.loading.loadingSave = false;
            state.loading.loadingSend = false;
        }).addCase(readPossibleApprovers.fulfilled, (state, action)=>{
            state.possibleApprovers = action.payload;
        }).addCase(readPossibleApprovers.rejected, (state)=>({
                ...state
            })).addCase(readPossibleHiringManagers.pending, (state, _action)=>{
            if (state.loadingDataForm === false) state.loadingDataForm = true;
        }).addCase(readPossibleHiringManagers.fulfilled, (state, action)=>{
            state.possibleHiringManagers = action.payload;
            state.loadingDataForm = false;
        }).addCase(readPossibleHiringManagers.rejected, (state)=>({
                ...state
            })).addCase(readWorkShiftsByBuyer.fulfilled, (state, action)=>{
            state.workShiftsByBuyer = action.payload;
        }).addCase(readWorkShiftsByBuyer.rejected, (state)=>({
                ...state
            })).addCase(readCountries.fulfilled, (state, action)=>{
            state.listCountries = action.payload;
        }).addCase(readCountries.rejected, (state)=>({
                ...state
            })).addCase(readProvinces.fulfilled, (state, action)=>{
            state.listProvinces = action.payload;
        }).addCase(readProvinces.rejected, (state)=>({
                ...state
            })).addCase(readBusinessUnitsByBuyer.fulfilled, (state, action)=>{
            state.businessUnitsByBuyer = action.payload;
        }).addCase(readBusinessUnitsByBuyer.rejected, (state)=>({
                ...state
            })).addCase(readGlCodesByBuyer.fulfilled, (state, action)=>{
            state.glCodesByBuyer = action.payload;
        }).addCase(readGlCodesByBuyer.rejected, (state)=>({
                ...state
            })).addCase(readCostCentersByBuyer.fulfilled, (state, action)=>{
            state.costCentersByBuyer = action.payload;
        }).addCase(readCostCentersByBuyer.rejected, (state)=>({
                ...state
            })).addCase(readSuppliersByBuyer.fulfilled, (state, action)=>{
            state.suppliersByBuyer = action.payload;
            state.loadingDataForm = false;
        }).addCase(readSuppliersByBuyer.rejected, (state)=>({
                ...state
            }));
    }
});
const { setValuesFormPostJob , resetValuesFormPostJob , setSelectedWorkShifts , setClearProvinces , setValuePositionType , setValueSubmitStatus ,  } = postJobSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postJobSlice.reducer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 15701:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ PostJobService)
/* harmony export */ });
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90396);
/* harmony import */ var _api_configFetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51573);
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97237);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43019);
/* harmony import */ var _utilsServices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17632);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_configFetch__WEBPACK_IMPORTED_MODULE_1__, ___WEBPACK_IMPORTED_MODULE_3__, _utilsServices__WEBPACK_IMPORTED_MODULE_4__]);
([_api_configFetch__WEBPACK_IMPORTED_MODULE_1__, ___WEBPACK_IMPORTED_MODULE_3__, _utilsServices__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const { ROUTES_POST_JOBS  } = _consts__WEBPACK_IMPORTED_MODULE_0__/* .routesServices */ .vY;
class PostJobService {
    constructor(router){
        this.router = router;
    }
    /** Create a new job.
   *
   * METHOD: POST
   */ createNewJob = async (dataForm)=>{
        try {
            const response = await (0,_api_index__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)((0,_api_configFetch__WEBPACK_IMPORTED_MODULE_1__/* .configPost */ .DH)([
                (0,___WEBPACK_IMPORTED_MODULE_3__/* .createUrl */ .uJ)(___WEBPACK_IMPORTED_MODULE_3__/* .BASE_URL */ ._n, ROUTES_POST_JOBS.createJob)
            ], dataForm));
            return response.data;
        } catch (error) {
            if (error.response?.status === 404 || error.response?.status === 400) {
                throw error;
            } else {
                _utilsServices__WEBPACK_IMPORTED_MODULE_4__/* .UtilServices.serverIsDown */ .$.serverIsDown(this.router);
                throw error;
            }
        }
    };
    /**
   * get possible approvers
   *
   * Request Method: GET
   * Get possible approvers,
   */ getPossibleApprovers = async ()=>{
        try {
            const response = await (0,_api_index__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)((0,_api_configFetch__WEBPACK_IMPORTED_MODULE_1__/* .configGet */ .zn)((0,___WEBPACK_IMPORTED_MODULE_3__/* .createUrl */ .uJ)(___WEBPACK_IMPORTED_MODULE_3__/* .BASE_URL */ ._n, ROUTES_POST_JOBS.possibleApprovers)));
            return response.data;
        } catch (error) {
            if (error.response?.status === 404 || error.response?.status === 400 || error.response?.status === 403) {
                throw error;
            } else {
                _utilsServices__WEBPACK_IMPORTED_MODULE_4__/* .UtilServices.serverIsDown */ .$.serverIsDown(this.router);
                throw error;
            }
        }
    };
    /**
   * get possible hiring managers
   *
   * Request Method: GET
   * Get possible hiring managers,
   */ getPossibleHiringManagers = async ()=>{
        try {
            const response = await (0,_api_index__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)((0,_api_configFetch__WEBPACK_IMPORTED_MODULE_1__/* .configGet */ .zn)((0,___WEBPACK_IMPORTED_MODULE_3__/* .createUrl */ .uJ)(___WEBPACK_IMPORTED_MODULE_3__/* .BASE_URL */ ._n, ROUTES_POST_JOBS.possibleHiringManagers)));
            return response.data;
        } catch (error) {
            if (error.response?.status === 404 || error.response?.status === 400 || error.response?.status === 403) {
                throw error;
            } else {
                _utilsServices__WEBPACK_IMPORTED_MODULE_4__/* .UtilServices.serverIsDown */ .$.serverIsDown(this.router);
                throw error;
            }
        }
    };
    /**
   * get possible work shifts
   *
   * Request Method: GET
   * Get possible work shifts,
   */ getWorkShiftsByBuyer = async ()=>{
        try {
            const response = await (0,_api_index__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)((0,_api_configFetch__WEBPACK_IMPORTED_MODULE_1__/* .configGet */ .zn)((0,___WEBPACK_IMPORTED_MODULE_3__/* .createUrl */ .uJ)(___WEBPACK_IMPORTED_MODULE_3__/* .BASE_URL */ ._n, ROUTES_POST_JOBS.workShiftsByBuyer)));
            return response.data;
        } catch (error) {
            if (error.response?.status === 404 || error.response?.status === 400 || error.response?.status === 403) {
                throw error;
            } else {
                _utilsServices__WEBPACK_IMPORTED_MODULE_4__/* .UtilServices.serverIsDown */ .$.serverIsDown(this.router);
                throw error;
            }
        }
    };
    /**
   * get possible Countries
   *
   * Request Method: GET
   * Get countries,
   */ getCountries = async ()=>{
        try {
            const response = await (0,_api_index__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)((0,_api_configFetch__WEBPACK_IMPORTED_MODULE_1__/* .configGet */ .zn)((0,___WEBPACK_IMPORTED_MODULE_3__/* .createUrl */ .uJ)(___WEBPACK_IMPORTED_MODULE_3__/* .BASE_URL */ ._n, ROUTES_POST_JOBS.countries)));
            return response.data;
        } catch (error) {
            if (error.response?.status === 404 || error.response?.status === 400 || error.response?.status === 403) {
                throw error;
            } else {
                _utilsServices__WEBPACK_IMPORTED_MODULE_4__/* .UtilServices.serverIsDown */ .$.serverIsDown(this.router);
                throw error;
            }
        }
    };
    /**
   * get provinces by country id
   *
   * Request Method: GET
   * Get provinces,
   */ getStatesProvinces = async (idCountry)=>{
        try {
            const response = await (0,_api_index__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)((0,_api_configFetch__WEBPACK_IMPORTED_MODULE_1__/* .configGet */ .zn)((0,___WEBPACK_IMPORTED_MODULE_3__/* .createUrl */ .uJ)(___WEBPACK_IMPORTED_MODULE_3__/* .BASE_URL */ ._n, `${ROUTES_POST_JOBS.statesProvinces}=${idCountry}`)));
            return response.data;
        } catch (error) {
            if (error.response?.status === 404 || error.response?.status === 400 || error.response?.status === 403) {
                throw error;
            } else {
                _utilsServices__WEBPACK_IMPORTED_MODULE_4__/* .UtilServices.serverIsDown */ .$.serverIsDown(this.router);
                throw error;
            }
        }
    };
    /**
   * get business units
   *
   * Request Method: GET
   * Get all business units by buyer that are allowed for the user.
   *
   */ getBusinessUnitsByBuyer = async ()=>{
        try {
            const response = await (0,_api_index__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)((0,_api_configFetch__WEBPACK_IMPORTED_MODULE_1__/* .configGet */ .zn)((0,___WEBPACK_IMPORTED_MODULE_3__/* .createUrl */ .uJ)(___WEBPACK_IMPORTED_MODULE_3__/* .BASE_URL */ ._n, ROUTES_POST_JOBS.businessUnits)));
            return response.data;
        } catch (error) {
            if (error.response?.status === 404 || error.response?.status === 400) {
                throw error;
            } else {
                _utilsServices__WEBPACK_IMPORTED_MODULE_4__/* .UtilServices.serverIsDown */ .$.serverIsDown(this.router);
                throw error;
            }
        }
    };
    /**
   * get gl codes
   *
   * Request Method: GET
   * Get all business units by buyer that are allowed for the user.
   *
   */ getGlCodesByBuyer = async ()=>{
        try {
            const response = await (0,_api_index__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)((0,_api_configFetch__WEBPACK_IMPORTED_MODULE_1__/* .configGet */ .zn)((0,___WEBPACK_IMPORTED_MODULE_3__/* .createUrl */ .uJ)(___WEBPACK_IMPORTED_MODULE_3__/* .BASE_URL */ ._n, ROUTES_POST_JOBS.glCodes)));
            return response.data;
        } catch (error) {
            if (error.response?.status === 404 || error.response?.status === 400) {
                throw error;
            } else {
                _utilsServices__WEBPACK_IMPORTED_MODULE_4__/* .UtilServices.serverIsDown */ .$.serverIsDown(this.router);
                throw error;
            }
        }
    };
    /**
   * get cost centers
   *
   * Request Method: GET
   * Get all cost centers by buyer that are allowed for the user.
   *
   */ getCostCentersByBuyer = async ()=>{
        try {
            const response = await (0,_api_index__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)((0,_api_configFetch__WEBPACK_IMPORTED_MODULE_1__/* .configGet */ .zn)((0,___WEBPACK_IMPORTED_MODULE_3__/* .createUrl */ .uJ)(___WEBPACK_IMPORTED_MODULE_3__/* .BASE_URL */ ._n, ROUTES_POST_JOBS.costCenters)));
            return response.data;
        } catch (error) {
            if (error.response?.status === 404 || error.response?.status === 400) {
                throw error;
            } else {
                _utilsServices__WEBPACK_IMPORTED_MODULE_4__/* .UtilServices.serverIsDown */ .$.serverIsDown(this.router);
                throw error;
            }
        }
    };
    /**
   * get all suppliers by buyer
   *
   * Request Method: GET
   * Get all suppliers,
   */ getAllSuppliers = async ()=>{
        try {
            const response = await (0,_api_index__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)((0,_api_configFetch__WEBPACK_IMPORTED_MODULE_1__/* .configGet */ .zn)((0,___WEBPACK_IMPORTED_MODULE_3__/* .createUrl */ .uJ)(___WEBPACK_IMPORTED_MODULE_3__/* .BASE_URL */ ._n, ROUTES_POST_JOBS.suppliers)));
            return response.data;
        } catch (error) {
            if (error.response?.status === 404 || error.response?.status === 400 || error.response?.status === 403) {
                throw error;
            } else {
                _utilsServices__WEBPACK_IMPORTED_MODULE_4__/* .UtilServices.serverIsDown */ .$.serverIsDown(this.router);
                throw error;
            }
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;