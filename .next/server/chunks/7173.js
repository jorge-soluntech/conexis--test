"use strict";
exports.id = 7173;
exports.ids = [7173];
exports.modules = {

/***/ 17173:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ GLCodesServices)
/* harmony export */ });
/* harmony import */ var _api_configFetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51573);
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97237);
/* harmony import */ var _utilsServices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17632);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_configFetch__WEBPACK_IMPORTED_MODULE_0__, _utilsServices__WEBPACK_IMPORTED_MODULE_2__]);
([_api_configFetch__WEBPACK_IMPORTED_MODULE_0__, _utilsServices__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const createUrl = (base, path)=>`${base}${path}`;
const BASE_URL = "https://d5ja6jkvsot2v.cloudfront.net";
class GLCodesServices {
    constructor(router){
        this.router = router;
    }
    /**
   * Get all gl codes that the user has permission to see, based on the role and logged buyer
   *
   * METHOD: GET
   */ getGLCodes = async ()=>{
        try {
            const response = await (0,_api_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)((0,_api_configFetch__WEBPACK_IMPORTED_MODULE_0__/* .configGet */ .zn)(createUrl(BASE_URL, "/glCodes/findAll")));
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
   * toggle gl code status for the field is_active
   *
   * Method: PUT
   *
   * @param {string} id - id gl code
   */ toggleGLCode = async (id)=>{
        try {
            const response = await (0,_api_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)((0,_api_configFetch__WEBPACK_IMPORTED_MODULE_0__/* .configPut */ .FQ)([
                createUrl(BASE_URL, `/glCodes/${id}/isActive/toggle`)
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
    /* creates a gl code. */ createGlCode = async (dataForm)=>{
        try {
            const response = await (0,_api_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)((0,_api_configFetch__WEBPACK_IMPORTED_MODULE_0__/* .configPost */ .DH)([
                createUrl(BASE_URL, "/glCodes/create")
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