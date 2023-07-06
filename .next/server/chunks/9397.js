"use strict";
exports.id = 9397;
exports.ids = [9397];
exports.modules = {

/***/ 89397:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$P": () => (/* binding */ clearInfoCandidate),
/* harmony export */   "DP": () => (/* binding */ resetValuesFormCandidates),
/* harmony export */   "EE": () => (/* binding */ readCandidates),
/* harmony export */   "K4": () => (/* binding */ showModal),
/* harmony export */   "YA": () => (/* binding */ setPage),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "b$": () => (/* binding */ setConfirmLoading),
/* harmony export */   "fs": () => (/* binding */ updateWorkerStatus),
/* harmony export */   "i3": () => (/* binding */ setOpenModal),
/* harmony export */   "l0": () => (/* binding */ createCandidate),
/* harmony export */   "l5": () => (/* binding */ setModalWarningEmail),
/* harmony export */   "qw": () => (/* binding */ setValuesCandidate),
/* harmony export */   "rr": () => (/* binding */ setFilters),
/* harmony export */   "vU": () => (/* binding */ setErrorCandidates)
/* harmony export */ });
/* unused harmony export candidateSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90396);
/* harmony import */ var _infrastructure_services_CandidatesServices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73135);
/* harmony import */ var _onboardingSlice_onboardingSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72823);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_infrastructure_services_CandidatesServices__WEBPACK_IMPORTED_MODULE_2__, _onboardingSlice_onboardingSlice__WEBPACK_IMPORTED_MODULE_3__]);
([_infrastructure_services_CandidatesServices__WEBPACK_IMPORTED_MODULE_2__, _onboardingSlice_onboardingSlice__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const readCandidates = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("read/candidates", async (dataRead, { rejectWithValue  })=>{
    const candidate = new _infrastructure_services_CandidatesServices__WEBPACK_IMPORTED_MODULE_2__/* .CandidatesService */ .o(dataRead.router);
    try {
        const response = await candidate.getCandidates(localStorage.getItem(_consts__WEBPACK_IMPORTED_MODULE_1__/* .roles.KEY_ROLE_LOCALSTORAGE */ .uJ.Rt));
        return {
            totalRecords: response.data.total_records,
            listData: response.data?.workers.map(({ id , full_name , email , worker_status  })=>{
                return {
                    key: id,
                    fullName: full_name,
                    email,
                    workerStatus: worker_status
                };
            })
        };
    } catch (error) {
        return rejectWithValue(false);
    }
});
const createCandidate = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("create/candidate", async (dataCreate, { rejectWithValue  })=>{
    const objWorker = new _infrastructure_services_CandidatesServices__WEBPACK_IMPORTED_MODULE_2__/* .CandidatesService */ .o(dataCreate.router);
    try {
        const response = await objWorker.createCandidate(dataCreate.body, localStorage.getItem(_consts__WEBPACK_IMPORTED_MODULE_1__/* .roles.KEY_ROLE_LOCALSTORAGE */ .uJ.Rt));
        return response;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});
const updateWorkerStatus = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("update/candidate", async (dataCreate, { rejectWithValue , dispatch  })=>{
    const objWorker = new _infrastructure_services_CandidatesServices__WEBPACK_IMPORTED_MODULE_2__/* .CandidatesService */ .o(dataCreate.router);
    try {
        const response = await objWorker.updateCandidate(dataCreate.body, dataCreate.idCandidate);
        dispatch(readCandidates({
            router: dataCreate.router
        }));
        return response;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});
const initialState = {
    valuesFormCreate: {
        id_tenant: 9,
        first_name: null,
        last_name: null,
        email: null,
        worker_status: null
    },
    page: 1,
    errorCandidates: "",
    showErrorCandidates: false,
    allCandidates: [],
    loading: false,
    openModal: false,
    confirmLoading: false,
    infoCandidate: {},
    totalRecords: 0,
    filters: {
        status: []
    },
    isModalWarningEmail: false
};
const candidateSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "candidate",
    initialState,
    reducers: {
        setPage: (state, action)=>{
            state.page = action.payload;
        },
        setValuesCandidate: (state, action)=>{
            state.valuesFormCreate = action.payload;
        },
        setErrorCandidates: (state, action)=>{
            state.showErrorCandidates = action.payload;
        },
        showModal: (state, action)=>{
            state.openModal = true;
            state.infoCandidate = action.payload;
        },
        setOpenModal: (state, action)=>{
            state.openModal = action.payload;
        },
        clearInfoCandidate: (state)=>{
            state.infoCandidate = {};
        },
        setConfirmLoading: (state, action)=>{
            state.confirmLoading = action.payload;
        },
        setFilters: (state, action)=>{
            state.filters.status = action.payload ? action.payload : [];
        },
        setModalWarningEmail: (state, action)=>{
            state.isModalWarningEmail = action.payload;
        },
        resetValuesFormCandidates: (state)=>{
            state.valuesFormCreate = initialState.valuesFormCreate;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(createCandidate.fulfilled, (state)=>({
                ...state
            })).addCase(createCandidate.rejected, (state)=>{
            state.loading = false;
        }).addCase(createCandidate.pending, (state, _action)=>{
            if (state.loading === false) state.loading = true;
        }).addCase(readCandidates.pending, (state, _action)=>{
            if (state.loading === false) state.loading = true;
        }).addCase(readCandidates.fulfilled, (state, action)=>{
            state.totalRecords = action.payload.totalRecords;
            state.allCandidates = action.payload.listData;
            state.loading = false;
        }).addCase(_onboardingSlice_onboardingSlice__WEBPACK_IMPORTED_MODULE_3__/* .readOnboardingItems.rejected */ .h6.rejected, (state)=>({
                ...state
            })).addCase(updateWorkerStatus.fulfilled, (state, _action)=>{
            state.openModal = false;
            state.confirmLoading = false;
        }).addCase(updateWorkerStatus.rejected, (state)=>({
                ...state
            })).addCase(updateWorkerStatus.pending, (state, _action)=>{
            if (state.confirmLoading === false) state.confirmLoading = true;
        });
    }
});
const { setValuesCandidate , setPage , setErrorCandidates , showModal , setOpenModal , setConfirmLoading , setFilters , setModalWarningEmail , resetValuesFormCandidates , clearInfoCandidate ,  } = candidateSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (candidateSlice.reducer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 72823:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "aO": () => (/* binding */ createBuyerOnboardingItem),
/* harmony export */   "h6": () => (/* binding */ readOnboardingItems)
/* harmony export */ });
/* unused harmony exports onboardingSlice, setCurrentUserRole */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _infrastructure_services_OnboardingServices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15693);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_infrastructure_services_OnboardingServices__WEBPACK_IMPORTED_MODULE_1__]);
_infrastructure_services_OnboardingServices__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const readOnboardingItems = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("read/buyerOnboardingItemss", async (router, { rejectWithValue  })=>{
    const onboardingItem = new _infrastructure_services_OnboardingServices__WEBPACK_IMPORTED_MODULE_1__/* .OnboardingItemsService */ .j(router);
    try {
        const response = await onboardingItem.getOnboardingItems();
        return response.data;
    } catch (error) {
        return rejectWithValue(false);
    }
});
const createBuyerOnboardingItem = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("buyerOnboardingItems", async (dataCreate, { rejectWithValue  })=>{
    const onboardingItem = new _infrastructure_services_OnboardingServices__WEBPACK_IMPORTED_MODULE_1__/* .OnboardingItemsService */ .j(dataCreate.router);
    try {
        await onboardingItem.createOnboardingItems(dataCreate.body);
        return true;
    } catch (error) {
        return rejectWithValue(false);
    }
});
const initialState = {
    /** The current role of user logged Buyer or Supplier */ valueItems: {
        id_tenant: 9,
        onboarding_item_1: "",
        onboarding_item_2: "",
        onboarding_item_3: "",
        onboarding_item_4: "",
        onboarding_item_5: "",
        onboarding_item_6: "",
        onboarding_item_7: "",
        onboarding_item_8: "",
        onboarding_item_9: ""
    }
};
const onboardingSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "onboarding",
    initialState,
    reducers: {
        setCurrentUserRole: (state, action)=>{
            state.valueItems = action.payload;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(createBuyerOnboardingItem.fulfilled, (state)=>({
                ...state
            })).addCase(createBuyerOnboardingItem.rejected, (state)=>({
                ...state
            })).addCase(readOnboardingItems.fulfilled, (state, action)=>{
            state.valueItems = action.payload;
        }).addCase(readOnboardingItems.rejected, (state)=>({
                ...state
            }));
    }
});
const { setCurrentUserRole  } = onboardingSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (onboardingSlice.reducer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 73135:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ CandidatesService)
/* harmony export */ });
/* harmony import */ var _api_configFetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51573);
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97237);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43019);
/* harmony import */ var _utilsServices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17632);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_configFetch__WEBPACK_IMPORTED_MODULE_0__, ___WEBPACK_IMPORTED_MODULE_2__, _utilsServices__WEBPACK_IMPORTED_MODULE_3__]);
([_api_configFetch__WEBPACK_IMPORTED_MODULE_0__, ___WEBPACK_IMPORTED_MODULE_2__, _utilsServices__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




class CandidatesService {
    constructor(router){
        this.router = router;
    }
    /** Create a worker (candidate) linked to the buyer or supplier logged.
   *
   * METHOD: POST
   */ createCandidate = async (dataForm, mspRole)=>{
        try {
            const response = await (0,_api_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)((0,_api_configFetch__WEBPACK_IMPORTED_MODULE_0__/* .configPost */ .DH)([
                (0,___WEBPACK_IMPORTED_MODULE_2__/* .createUrl */ .uJ)(___WEBPACK_IMPORTED_MODULE_2__/* .BASE_URL */ ._n, `/auth/createWorker?msp=${mspRole}`)
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
   * get candidates
   *
   * Request Method: GET
   * Get all candidates,
   */ getCandidates = async (mspRole)=>{
        try {
            const response = await (0,_api_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)((0,_api_configFetch__WEBPACK_IMPORTED_MODULE_0__/* .configGet */ .zn)((0,___WEBPACK_IMPORTED_MODULE_2__/* .createUrl */ .uJ)(___WEBPACK_IMPORTED_MODULE_2__/* .BASE_URL */ ._n, `/users/workers?msp=${mspRole}`)));
            return response.data;
        } catch (error) {
            if (error.response?.status === 404 || error.response?.status === 400 || error.response?.status === 403) {
                throw error;
            } else {
                _utilsServices__WEBPACK_IMPORTED_MODULE_3__/* .UtilServices.serverIsDown */ .$.serverIsDown(this.router);
                throw error;
            }
        }
    };
    /** Update worker status (candidate) linked to the buyer or supplier logged.
   *
   * METHOD: PUT
   */ updateCandidate = async (dataForm, idCandidate)=>{
        try {
            const response = await (0,_api_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)((0,_api_configFetch__WEBPACK_IMPORTED_MODULE_0__/* .configPut */ .FQ)([
                (0,___WEBPACK_IMPORTED_MODULE_2__/* .createUrl */ .uJ)(___WEBPACK_IMPORTED_MODULE_2__/* .BASE_URL */ ._n, `/users/updateWorker/${idCandidate}`)
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
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 15693:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ OnboardingItemsService)
/* harmony export */ });
/* harmony import */ var _api_configFetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51573);
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97237);
/* harmony import */ var _utilsServices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17632);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_configFetch__WEBPACK_IMPORTED_MODULE_0__, _utilsServices__WEBPACK_IMPORTED_MODULE_2__]);
([_api_configFetch__WEBPACK_IMPORTED_MODULE_0__, _utilsServices__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const createUrl = (base, path)=>`${base}${path}`;
const BASE_URL = "https://d5ja6jkvsot2v.cloudfront.net";
class OnboardingItemsService {
    constructor(router){
        this.router = router;
    }
    /**
   * Get all onboarding activies that the user has permission to see, based on the logged buyer
   *
   * METHOD: GET
   */ getOnboardingItems = async ()=>{
        try {
            const response = await (0,_api_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)((0,_api_configFetch__WEBPACK_IMPORTED_MODULE_0__/* .configGet */ .zn)(createUrl(BASE_URL, "/buyerOnboardingItems")));
            return response.data;
        } catch (error) {
            if (error.response?.status === 404 || error.response?.status === 400) {
                throw error;
            } else {
                _utilsServices__WEBPACK_IMPORTED_MODULE_2__/* .UtilServices.serverIsDown */ .$.serverIsDown(this.router);
                throw error;
            }
        }
    };
    /** Create a onboarding item by the buyer logged.
   *
   * METHOD: POST
   */ createOnboardingItems = async (dataForm)=>{
        try {
            const response = await (0,_api_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)((0,_api_configFetch__WEBPACK_IMPORTED_MODULE_0__/* .configPost */ .DH)([
                createUrl(BASE_URL, "/buyerOnboardingItems")
            ], dataForm));
            return response.data;
        } catch (error) {
            if (error.response?.status === 404 || error.response?.status === 400) {
                throw error;
            } else {
                _utilsServices__WEBPACK_IMPORTED_MODULE_2__/* .UtilServices.serverIsDown */ .$.serverIsDown(this.router);
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