"use strict";
exports.id = 4329;
exports.ids = [4329];
exports.modules = {

/***/ 94329:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ BusinessUnitServices)
/* harmony export */ });
/* harmony import */ var _api_configFetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51573);
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97237);
/* harmony import */ var _utilsServices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17632);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_configFetch__WEBPACK_IMPORTED_MODULE_0__, _utilsServices__WEBPACK_IMPORTED_MODULE_2__]);
([_api_configFetch__WEBPACK_IMPORTED_MODULE_0__, _utilsServices__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable class-methods-use-this */ 


const createUrl = (base, path)=>`${base}${path}`;
const BASE_URL = "https://d5ja6jkvsot2v.cloudfront.net"; // Replace by your env variable
class BusinessUnitServices {
    constructor(router){
        this.router = router;
    }
    createBusinessUnit = async (dataForm)=>{
        try {
            const response = await (0,_api_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)((0,_api_configFetch__WEBPACK_IMPORTED_MODULE_0__/* .configPost */ .DH)([
                createUrl(BASE_URL, "/businessUnits/create")
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
    getBusinessUnit = async (dataForm)=>{
        try {
            const response = await (0,_api_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)((0,_api_configFetch__WEBPACK_IMPORTED_MODULE_0__/* .configPost */ .DH)([
                createUrl(BASE_URL, "/businessUnits/create")
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
   * get business units
   *
   * Request Method: GET
   * Get all business units that are allowed for the user. Depending on the user's role,
   * the user will only have access to the business unit of the same buyer and tenant.
   *
   */ getBusinessUnits = async ()=>{
        try {
            const response = await (0,_api_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)((0,_api_configFetch__WEBPACK_IMPORTED_MODULE_0__/* .configGet */ .zn)(createUrl(BASE_URL, "/businessUnits/readAll")));
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
   * get business unit by id
   *
   * Request Method: GET
   * @param id - id business unit string
   *
   */ getBusinessUnitById = async (id)=>{
        try {
            const response = await (0,_api_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)((0,_api_configFetch__WEBPACK_IMPORTED_MODULE_0__/* .configGet */ .zn)(createUrl(BASE_URL, `/businessUnits/${id}`)));
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
   * Update business unit by id
   *
   * Request Method: PUT
   *
   * @param id - id business unit string
   * @param data - payload with the data to update
   * @returns returns the request response
   */ updateBusinessUnit = async (id, data)=>{
        try {
            const response = await (0,_api_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)((0,_api_configFetch__WEBPACK_IMPORTED_MODULE_0__/* .configPut */ .FQ)([
                createUrl(BASE_URL, `/businessUnits/${id}`)
            ], data));
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
   * toggle business unit status for the field is_active
   *
   * Method: PUT
   *
   * @param id - id id business unit string
   */ toggleBusinessUnit = async (id)=>{
        try {
            const response = await (0,_api_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)((0,_api_configFetch__WEBPACK_IMPORTED_MODULE_0__/* .configPut */ .FQ)([
                createUrl(BASE_URL, `/businessUnits/${id}/isActive/toggle`)
            ], {}));
            return response.data;
        } catch (error) {
            if (error.response?.status === 400) {
                return {
                    statusCode: error.response.data.statusCode,
                    message: error.response.data.message
                };
            }
            if (error.response?.status === 404) {
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