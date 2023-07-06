"use strict";
exports.id = 4613;
exports.ids = [4613];
exports.modules = {

/***/ 34613:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ UserServices)
/* harmony export */ });
/* harmony import */ var _api_configFetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51573);
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97237);
/* harmony import */ var _utilsServices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17632);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_configFetch__WEBPACK_IMPORTED_MODULE_0__, _utilsServices__WEBPACK_IMPORTED_MODULE_2__]);
([_api_configFetch__WEBPACK_IMPORTED_MODULE_0__, _utilsServices__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable class-methods-use-this */ 


const createUrl = (base, path)=>`${base}${path}`;
const BASE_URL = "https://d5ja6jkvsot2v.cloudfront.net"; // Replace by your env variable
class UserServices {
    constructor(router){
        this.router = router;
    }
    // async method to get the possible selections to create users\
    getPosibleSelectionsCreateUsersSuppliers = async (user_role, id_tenant)=>{
        try {
            const response = await (0,_api_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)((0,_api_configFetch__WEBPACK_IMPORTED_MODULE_0__/* .configGet */ .zn)(createUrl(BASE_URL, `/auth/possibleSelectionsCreateUsers?${user_role ? `user_role=${user_role}` : ""}${id_tenant ? `&id_tenant=${id_tenant}` : ""}`)));
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
    // async method to get the possible buyer selections to create the users with
    getPosibleSelectionsCreateUsersBuyers = async (user_role, id_tenant, supplier)=>{
        try {
            const response = await (0,_api_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)((0,_api_configFetch__WEBPACK_IMPORTED_MODULE_0__/* .configGet */ .zn)(createUrl(BASE_URL, `/auth/possibleSelectionsCreateUsers?${user_role ? `user_role=${user_role}` : ""}${id_tenant ? `&id_tenant=${id_tenant}` : ""}${supplier ? `&supplier=${supplier}` : ""}`)));
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
    // async method to get the possible buyer selections to update the users with
    getPosibleSelectionsUpdateUsersBuyers = async (user_role, id_tenant, supplier, id)=>{
        try {
            if (!id) {
                throw new Error("Id of user to update in the url is required");
            }
            const response = await (0,_api_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)((0,_api_configFetch__WEBPACK_IMPORTED_MODULE_0__/* .configGet */ .zn)(createUrl(BASE_URL, `/auth/possibleSelectionsUpdateUsers/${id}?${user_role ? `user_role=${user_role}` : ""}${id_tenant ? `&id_tenant=${id_tenant}` : ""}${supplier ? `&supplier=${supplier}` : ""}`)));
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
    userCreate = async (dataForm)=>{
        try {
            const response = await (0,_api_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)((0,_api_configFetch__WEBPACK_IMPORTED_MODULE_0__/* .configPost */ .DH)([
                createUrl(BASE_URL, "/auth/createUser")
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
    userRolesToCreate = async ()=>{
        try {
            const res = await (0,_api_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)((0,_api_configFetch__WEBPACK_IMPORTED_MODULE_0__/* .configGet */ .zn)(createUrl(BASE_URL, `/auth/rolesCreateUser`)));
            // store resopnse inside an object with the following format
            const classes = {
                "BUYER USER": [
                    "Approver",
                    "Buyer Administrator",
                    "Buyer Finance",
                    "Delegate",
                    "Hiring Manager",
                    "Recruiter", 
                ],
                "MSP USER": [
                    "MSP Administrator",
                    "Program Manager",
                    "Program Representative",
                    "MSP Finance", 
                ],
                "SUPPLIER USER": [
                    "Supplier Administrator",
                    "Account Manager",
                    "Supplier Finance", 
                ],
                "GLOBAL USER": [
                    "Super Administrator",
                    "Product Support"
                ]
            };
            const response = {};
            res.data.data.forEach((element)=>{
                if (classes["BUYER USER"]?.includes(element)) {
                    response["BUYER USER"] = [
                        ...response["BUYER USER"] ? response["BUYER USER"] : [],
                        element, 
                    ];
                } else if (classes["MSP USER"].includes(element)) {
                    response["MSP USER"] = [
                        ...response["MSP USER"] ? response["MSP USER"] : [],
                        element, 
                    ];
                } else if (classes["SUPPLIER USER"].includes(element)) {
                    response["SUPPLIER USER"] = [
                        ...response["SUPPLIER USER"] ? response["SUPPLIER USER"] : [],
                        element, 
                    ];
                } else if (classes["GLOBAL USER"].includes(element)) {
                    response["GLOBAL USER"] = [
                        ...response["GLOBAL USER"] ? response["GLOBAL USER"] : [],
                        element, 
                    ];
                }
            });
            return response;
        } catch (error) {
            if (error.response?.status === 404 || error.response?.status === 400) {
                throw error;
            } else {
                _utilsServices__WEBPACK_IMPORTED_MODULE_2__/* .UtilServices.serverIsDown */ .$.serverIsDown(this.router);
                throw error;
            }
        }
    };
    resendEmail = async (dataBody)=>{
        try {
            const response = await (0,_api_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)((0,_api_configFetch__WEBPACK_IMPORTED_MODULE_0__/* .configPost */ .DH)([
                createUrl(BASE_URL, "/auth/PasswordEmail")
            ], dataBody));
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
   * get user roles that a given user with a current user role can update to
   *
   * Request Method: GET
   *
   */ userRolesToUpdate = async (RoleUpdated)=>{
        try {
            const res = await (0,_api_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)((0,_api_configFetch__WEBPACK_IMPORTED_MODULE_0__/* .configGet */ .zn)(createUrl(BASE_URL, `/auth/rolesCreateUser?${RoleUpdated ? `RoleUpdated=${RoleUpdated}` : ""}`)));
            // store resopnse inside an object with the following format
            const classes = {
                "BUYER USER": [
                    "Approver",
                    "Buyer Administrator",
                    "Buyer Finance",
                    "Delegate",
                    "Hiring Manager",
                    "Recruiter", 
                ],
                "MSP USER": [
                    "MSP Administrator",
                    "Program Manager",
                    "Program Representative",
                    "MSP Finance", 
                ],
                "SUPPLIER USER": [
                    "Supplier Administrator",
                    "Account Manager",
                    "Supplier Finance", 
                ],
                "GLOBAL USER": [
                    "Super Administrator",
                    "Product Support"
                ]
            };
            const response = {};
            res.data.data.forEach((element)=>{
                if (classes["BUYER USER"]?.includes(element)) {
                    response["BUYER USER"] = [
                        ...response["BUYER USER"] ? response["BUYER USER"] : [],
                        element, 
                    ];
                } else if (classes["MSP USER"].includes(element)) {
                    response["MSP USER"] = [
                        ...response["MSP USER"] ? response["MSP USER"] : [],
                        element, 
                    ];
                } else if (classes["SUPPLIER USER"].includes(element)) {
                    response["SUPPLIER USER"] = [
                        ...response["SUPPLIER USER"] ? response["SUPPLIER USER"] : [],
                        element, 
                    ];
                } else if (classes["GLOBAL USER"].includes(element)) {
                    response["GLOBAL USER"] = [
                        ...response["GLOBAL USER"] ? response["GLOBAL USER"] : [],
                        element, 
                    ];
                }
            });
            return response;
        } catch (error) {
            if (error.response?.status === 404 || error.response?.status === 400) {
                throw error;
            } else {
                _utilsServices__WEBPACK_IMPORTED_MODULE_2__/* .UtilServices.serverIsDown */ .$.serverIsDown(this.router);
                throw error;
            }
        }
    };
    userUpdate = async (id, dataForm)=>{
        try {
            const response = await (0,_api_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)((0,_api_configFetch__WEBPACK_IMPORTED_MODULE_0__/* .configPut */ .FQ)([
                createUrl(BASE_URL, `/auth/update/${id}`)
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
    getUser = async (id)=>{
        try {
            if (!id) {
                return null;
            }
            const response = await (0,_api_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)((0,_api_configFetch__WEBPACK_IMPORTED_MODULE_0__/* .configGet */ .zn)(createUrl(BASE_URL, `/users/findOne/${id}`)));
            return response.data.data;
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