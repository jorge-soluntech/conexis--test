"use strict";
exports.id = 8025;
exports.ids = [8025];
exports.modules = {

/***/ 8025:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ SupplierServices)
/* harmony export */ });
/* harmony import */ var _api_configFetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51573);
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97237);
/* harmony import */ var _utilsServices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17632);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_configFetch__WEBPACK_IMPORTED_MODULE_0__, _utilsServices__WEBPACK_IMPORTED_MODULE_2__]);
([_api_configFetch__WEBPACK_IMPORTED_MODULE_0__, _utilsServices__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable class-methods-use-this */ 


const createUrl = (base, path)=>`${base}${path}`;
const BASE_URL = "https://d5ja6jkvsot2v.cloudfront.net"; // Replace by your env variable
class SupplierServices {
    constructor(router){
        this.router = router;
    }
    /**
   * This method create a new supplier
   *
   * @createSupplierData IManageSuppliers.DataCreateSupplier
   *
   * Request Method: POST
   */ createSupplier = async (createSupplierData)=>{
        try {
            const response = await (0,_api_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)((0,_api_configFetch__WEBPACK_IMPORTED_MODULE_0__/* .configPost */ .DH)([
                createUrl(BASE_URL, "/suppliers")
            ], createSupplierData));
            return response.data;
        } catch (error) {
            if (error.response?.status === 404 || error.response?.status === 400 || error.response?.status === 403) {
                throw error;
            } else {
                _utilsServices__WEBPACK_IMPORTED_MODULE_2__/* .UtilServices.serverIsDown */ .$.serverIsDown(this.router);
                throw error;
            }
        }
    };
    /**
   * get suppliers
   *
   * Request Method: GET
   * Get all supplier,
   */ getSuppliers = async (page)=>{
        try {
            const response = await (0,_api_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)((0,_api_configFetch__WEBPACK_IMPORTED_MODULE_0__/* .configGet */ .zn)(createUrl(BASE_URL, `/suppliers/byLoggedBuyer?page=${page}&size=20`)));
            return response.data;
        } catch (error) {
            if (error.response?.status === 404 || error.response?.status === 400 || error.response?.status === 403) {
                throw error;
            } else {
                _utilsServices__WEBPACK_IMPORTED_MODULE_2__/* .UtilServices.serverIsDown */ .$.serverIsDown(this.router);
                throw error;
            }
        }
    };
    /**
   * get supplier by id
   *
   * @idSupplier string
   * Request Method: GET
   * Get data supplier by id,
   */ getSuppliersById = async (idSupplier)=>{
        try {
            const response = await (0,_api_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)((0,_api_configFetch__WEBPACK_IMPORTED_MODULE_0__/* .configGet */ .zn)(createUrl(BASE_URL, `/suppliers/${idSupplier}`)));
            return response.data;
        } catch (error) {
            if (error.response?.status === 404 || error.response?.status === 400 || error.response?.status === 403) {
                throw error;
            } else {
                _utilsServices__WEBPACK_IMPORTED_MODULE_2__/* .UtilServices.serverIsDown */ .$.serverIsDown(this.router);
                throw error;
            }
        }
    };
    /**
   * This method Edit a supplier
   *
   * @createSupplierData IManageSuppliers.DataCreateSupplier
   *
   * Request Method: POST
   */ editSupplier = async (idSupplier, editSupplierData)=>{
        try {
            const response = await (0,_api_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)((0,_api_configFetch__WEBPACK_IMPORTED_MODULE_0__/* .configPut */ .FQ)([
                createUrl(BASE_URL, `/suppliers/${idSupplier}`)
            ], editSupplierData));
            return response.data;
        } catch (error) {
            if (error.response?.status === 404 || error.response?.status === 400 || error.response?.status === 403) {
                throw error;
            } else {
                _utilsServices__WEBPACK_IMPORTED_MODULE_2__/* .UtilServices.serverIsDown */ .$.serverIsDown(this.router);
                throw error;
            }
        }
    };
    /**
   * This method is meant to be called before creating or updating a supplier,
   * to make sure the supplier name is valid.
   *
   * @companyName string
   * @idSupplier string
   *
   * Request Method: GET
   */ validateSupplierCompanyName = async (companyName, supplierId)=>{
        const url = `/suppliers/validateCompanyName/${companyName}${supplierId ? `?supplierId=${supplierId}` : ""}`;
        try {
            const response = await (0,_api_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)((0,_api_configFetch__WEBPACK_IMPORTED_MODULE_0__/* .configGet */ .zn)(createUrl(BASE_URL, url)));
            return response.data;
        } catch (error) {
            if (error.response?.status === 404 || error.response?.status === 400 || error.response?.status === 403) {
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