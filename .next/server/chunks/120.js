"use strict";
exports.id = 120;
exports.ids = [120];
exports.modules = {

/***/ 10120:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dl": () => (/* binding */ toggleStatusWorkShift),
/* harmony export */   "NT": () => (/* binding */ setErrorWorkShifts),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "bi": () => (/* binding */ getAllWorkShift),
/* harmony export */   "fU": () => (/* binding */ createWorkShift),
/* harmony export */   "r4": () => (/* binding */ exportWorkShifts)
/* harmony export */ });
/* unused harmony exports workShiftSlice, setValuesWorkShift */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _consts_shortDayNames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82037);
/* harmony import */ var _infrastructure_services_WorkShiftsServices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17527);
/* harmony import */ var _locales_en_en_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89235);
/* harmony import */ var _utils_downloadFile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99189);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_infrastructure_services_WorkShiftsServices__WEBPACK_IMPORTED_MODULE_2__]);
_infrastructure_services_WorkShiftsServices__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const activeValue = "Active";
const inactiveValue = "Inactive";
const { workShifts: { errorDeactivated  } ,  } = _locales_en_en_json__WEBPACK_IMPORTED_MODULE_3__;
const createWorkShift = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("create/workShifts", async (dataCreate, { rejectWithValue  })=>{
    const workShift = new _infrastructure_services_WorkShiftsServices__WEBPACK_IMPORTED_MODULE_2__/* .WorkShiftsService */ .C(dataCreate.router);
    try {
        await workShift.createWorkShifts(dataCreate.body);
        return true;
    } catch (error) {
        return rejectWithValue(false);
    }
});
const getAllWorkShift = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("get/workShifts", async (dataCreate, { rejectWithValue  })=>{
    const workShift = new _infrastructure_services_WorkShiftsServices__WEBPACK_IMPORTED_MODULE_2__/* .WorkShiftsService */ .C(dataCreate.router);
    try {
        const response = await workShift.getAllWorkShifts(dataCreate.id);
        return response.data.map(({ id , work_shift_description , start_time , end_time , work_days , status  })=>({
                key: id,
                workShiftDescription: work_shift_description,
                startTime: start_time,
                endTime: end_time,
                workDays: work_days.map((day)=>_consts_shortDayNames__WEBPACK_IMPORTED_MODULE_1__/* .shortDayNames */ .G[day]).join(", "),
                status: status === activeValue
            }));
    } catch (error) {
        return rejectWithValue(false);
    }
});
const toggleStatusWorkShift = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("status/workShifts", async (dataUpdate, { rejectWithValue  })=>{
    const workShift = new _infrastructure_services_WorkShiftsServices__WEBPACK_IMPORTED_MODULE_2__/* .WorkShiftsService */ .C(dataUpdate.router);
    try {
        const response = await workShift.updateWorkShifts(dataUpdate.id, {
            status: dataUpdate.status === true ? activeValue : inactiveValue
        });
        return {
            status: response.status,
            id: dataUpdate.id
        };
    } catch (error) {
        return rejectWithValue(false);
    }
});
const exportWorkShifts = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("export/workShifts", async (dataExport, { rejectWithValue  })=>{
    const workShift = new _infrastructure_services_WorkShiftsServices__WEBPACK_IMPORTED_MODULE_2__/* .WorkShiftsService */ .C(dataExport.router);
    try {
        const response = await workShift.exportWorkShifts(dataExport.type);
        (0,_utils_downloadFile__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)("workShifts", dataExport.type, response);
        return true;
    } catch (error) {
        return rejectWithValue(false);
    }
});
const initialState = {
    errorWorkShifts: "",
    showErrorWorkShifts: false,
    allWorkShifts: [],
    valuesFormCreate: {
        work_shift_description: null,
        start_time: null,
        end_time: null,
        work_days: [],
        id_tenant: 9,
        buyer_id: ""
    }
};
const workShiftSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "workShifts",
    initialState,
    reducers: {
        setValuesWorkShift: (state, action)=>{
            state.valuesFormCreate = action.payload;
        },
        setErrorWorkShifts: (state, action)=>{
            state.showErrorWorkShifts = action.payload;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(createWorkShift.fulfilled, (state)=>({
                ...state
            })).addCase(createWorkShift.rejected, (state)=>({
                ...state
            })).addCase(getAllWorkShift.fulfilled, (state, action)=>{
            state.allWorkShifts = action.payload;
        }).addCase(getAllWorkShift.rejected, (state)=>({
                ...state
            })).addCase(toggleStatusWorkShift.fulfilled, (state, action)=>{
            const toggledWorkShiftId = action.payload.id;
            const allWorkShifts = state.allWorkShifts.map((workShift)=>{
                if (workShift.key === toggledWorkShiftId) {
                    return {
                        ...workShift,
                        status: !workShift.status
                    };
                }
                return workShift;
            });
            state.allWorkShifts = allWorkShifts;
        }).addCase(toggleStatusWorkShift.rejected, (state)=>{
            state.errorWorkShifts = errorDeactivated;
            state.showErrorWorkShifts = true;
        }).addCase(exportWorkShifts.fulfilled, (state)=>({
                ...state
            })).addCase(exportWorkShifts.rejected, (state)=>({
                ...state
            }));
    }
});
const { setValuesWorkShift , setErrorWorkShifts  } = workShiftSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (workShiftSlice.reducer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 82037:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ shortDayNames)
/* harmony export */ });
/* harmony import */ var _locales_en_en_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89235);

const { consts  } = _locales_en_en_json__WEBPACK_IMPORTED_MODULE_0__;
const shortDayNames = {
    Monday: consts.shortDayNames.monday,
    Tuesday: consts.shortDayNames.tuesday,
    Wednesday: consts.shortDayNames.wednesday,
    Thursday: consts.shortDayNames.thursday,
    Friday: consts.shortDayNames.friday,
    Saturday: consts.shortDayNames.saturday,
    Sunday: consts.shortDayNames.sunday
};


/***/ }),

/***/ 17527:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ WorkShiftsService)
/* harmony export */ });
/* harmony import */ var _api_configFetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51573);
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97237);
/* harmony import */ var _utilsServices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17632);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_configFetch__WEBPACK_IMPORTED_MODULE_0__, _utilsServices__WEBPACK_IMPORTED_MODULE_2__]);
([_api_configFetch__WEBPACK_IMPORTED_MODULE_0__, _utilsServices__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const createUrl = (base, path)=>`${base}${path}`;
const BASE_URL = "https://d5ja6jkvsot2v.cloudfront.net";
class WorkShiftsService {
    constructor(router){
        this.router = router;
    }
    /** Create a work shifts by the buyer logged.
   *
   * METHOD: POST
   */ createWorkShifts = async (dataForm)=>{
        try {
            const response = await (0,_api_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)((0,_api_configFetch__WEBPACK_IMPORTED_MODULE_0__/* .configPost */ .DH)([
                createUrl(BASE_URL, "/workShifts")
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
    /**
   * Get all work shifts.
   *
   * METHOD: GET
   */ getAllWorkShifts = async (id)=>{
        try {
            const response = await (0,_api_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)((0,_api_configFetch__WEBPACK_IMPORTED_MODULE_0__/* .configGet */ .zn)(createUrl(BASE_URL, `/workShifts?buyer_id=${id}`)));
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
    /**
   * Update work shifts.
   *
   * Update a work shift by id, the id is placed in the url params.
   * METHOD: PUT
   */ updateWorkShifts = async (id, dataForm)=>{
        try {
            const response = await (0,_api_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)((0,_api_configFetch__WEBPACK_IMPORTED_MODULE_0__/* .configPut */ .FQ)([
                createUrl(BASE_URL, `/workShifts/${id}`)
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
    /**
   * export all work shifts.
   *
   * METHOD: GET
   */ exportWorkShifts = async (type)=>{
        try {
            const response = await (0,_api_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)((0,_api_configFetch__WEBPACK_IMPORTED_MODULE_0__/* .configGet */ .zn)(createUrl(BASE_URL, `/workShifts/export?type=${type}`)));
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

/***/ }),

/***/ 99189:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Downloads a file with the given data and file type.
 *
 * @param {string} name - Name with which the file will be downloaded.
 * @param {string} type - The file type to download, can be 'csv', 'txt' or 'json'.
 * @param {string | object} data - The data to be downloaded in the file.
 */ const downloadFile = (name, type, data)=>{
    const element = document.createElement("a");
    element.id = "download-file";
    if (type === "json") {
        element.setAttribute("href", `data:text/json;charset=utf-8,${JSON.stringify(data)}`);
    } else {
        element.setAttribute("href", `data:text/plain;charset=utf-8,${data}`);
    }
    element.setAttribute("download", `${name}.${type}`);
    document.body.appendChild(element);
    document.querySelector("#download-file").click();
    element.remove();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (downloadFile);


/***/ })

};
;