"use strict";
exports.id = 2915;
exports.ids = [2915];
exports.modules = {

/***/ 22915:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bq": () => (/* binding */ setDataSupplier),
/* harmony export */   "EY": () => (/* binding */ setStepSupplier),
/* harmony export */   "Ld": () => (/* binding */ setListAttachments),
/* harmony export */   "Rn": () => (/* binding */ setIdSupplier),
/* harmony export */   "YA": () => (/* binding */ setPage),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "qS": () => (/* binding */ clearDataStateSupplier)
/* harmony export */ });
/* unused harmony export supplierSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    page: 1,
    currentStepSupplier: 0,
    // data to create or edit a supplier
    dataSupplier: {
        // Supplier information - step 1
        id_tenant: 0,
        supplier_company_name: "",
        legal_name_for_invoicing: "",
        primary_contact_name: "",
        primary_contact_phone: "",
        supplier_code: "",
        primary_contact_email: "",
        street_address_line1: "",
        country: "",
        province_region: "",
        city: "",
        postal_code: "",
        tax_id: "",
        geographic_coverage: [],
        agreement_expiry_date: null,
        work_categories_covered: null,
        dunn_and_bradstreet_number: "",
        supplier_status: null,
        is_non_resident_supplier: null,
        diversity_certifications: [],
        comments: "",
        // Additional supplier contacts - step 2
        secondary_contact_name: "",
        secondary_contact_email: "",
        tertiary_contact_name: "",
        tertiary_contact_email: "",
        accounts_receivable_contact_name: "",
        accounts_receivable_contact_email: "",
        // Buyer information - step 3
        associated_buyers: [],
        attachments: []
    },
    supplierId: "",
    listAttachments: []
};
const supplierSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "suppliers",
    initialState,
    reducers: {
        setPage: (state, action)=>{
            state.page = action.payload;
        },
        setStepSupplier: (state, action)=>{
            state.currentStepSupplier = action.payload;
        },
        setDataSupplier: (state, action)=>{
            state.dataSupplier = {
                ...state.dataSupplier,
                ...action.payload
            };
        },
        setIdSupplier: (state, action)=>{
            state.supplierId = action.payload;
        },
        clearDataStateSupplier: (state)=>{
            state.dataSupplier = initialState.dataSupplier;
        },
        setListAttachments: (state, action)=>{
            state.listAttachments = action.payload;
        }
    }
});
const { setPage , setStepSupplier , setDataSupplier , clearDataStateSupplier , setIdSupplier , setListAttachments ,  } = supplierSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (supplierSlice.reducer);


/***/ })

};
;