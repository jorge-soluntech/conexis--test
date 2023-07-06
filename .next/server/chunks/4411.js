"use strict";
exports.id = 4411;
exports.ids = [4411];
exports.modules = {

/***/ 94411:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$w": () => (/* binding */ setExistingAttachments),
/* harmony export */   "Fr": () => (/* binding */ setIdEditBuyer),
/* harmony export */   "HQ": () => (/* binding */ setStepBuyer),
/* harmony export */   "IG": () => (/* binding */ clearDataStateBuyer),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "x1": () => (/* binding */ setDataBuyer)
/* harmony export */ });
/* unused harmony export buyersSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    stepCreateBuyer: 0,
    idEditBuyer: "",
    // data to create or edit a buyer
    dataBuyer: {
        id: "",
        /** buyer information - step 1 */ clientCompanyName: null,
        legalNameForInvoicing: null,
        streetAddressLine1: null,
        country: null,
        city: null,
        provinceRegion: null,
        postalCode: null,
        primaryContactName: null,
        primaryContactEmail: null,
        primaryContactPhone: null,
        accountsPayableContactName: null,
        accountsPayableContactEmail: null,
        accountOwnerId: null,
        workWeekDefinition: null,
        currency: null,
        paymentTerms: null,
        contractExpiryDate: null,
        isSelfServed: null,
        /** tax information - step 2 */ vatAmount: null,
        salesTaxAmount: null,
        otherTaxAmount: null,
        /** approval information - step 3 */ bypassJobApproval: false,
        bypassSubmissionApproval: false,
        requireContractApproval: false,
        accessToApplicantTracker: false,
        contractApproverId: null,
        /** attachments - step 4 */ attachments: []
    },
    existingAttachments: []
};
const buyersSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "buyers",
    initialState,
    reducers: {
        setDataBuyer: (state, action)=>{
            state.dataBuyer = {
                ...state.dataBuyer,
                ...action.payload
            };
        },
        setStepBuyer: (state, action)=>{
            state.stepCreateBuyer = action.payload;
        },
        clearDataStateBuyer: (state)=>{
            state.dataBuyer = null;
        },
        setExistingAttachments: (state, action)=>{
            state.existingAttachments = action.payload;
        },
        setIdEditBuyer: (state, action)=>{
            state.idEditBuyer = action.payload;
        }
    }
});
const { setDataBuyer , setStepBuyer , setIdEditBuyer , clearDataStateBuyer , setExistingAttachments ,  } = buyersSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buyersSlice.reducer);


/***/ })

};
;