"use strict";
exports.id = 3019;
exports.ids = [3019];
exports.modules = {

/***/ 51573:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DH": () => (/* binding */ configPost),
/* harmony export */   "FQ": () => (/* binding */ configPut),
/* harmony export */   "ZU": () => (/* binding */ AXIOS_METHODS),
/* harmony export */   "zn": () => (/* binding */ configGet)
/* harmony export */ });
/* unused harmony exports requestConfig, configDelete */
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69915);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_0__]);
js_cookie__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const AXIOS_METHODS = {
    get: "get",
    post: "post",
    put: "put",
    delete: "delete"
};
const requestConfig = ({ method , url , data  })=>{
    const token = js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].get("token");
    return {
        method,
        url,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        data
    };
};
const configGet = (url)=>requestConfig({
        method: "get",
        url
    });
const configPost = (url, databody)=>requestConfig({
        method: "post",
        url,
        data: databody
    });
const configPut = (url, databody)=>requestConfig({
        method: "put",
        url,
        data: databody
    });
const configDelete = (url)=>requestConfig({
        method: "delete",
        url
    });

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 97237:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/**
 * @param config - method to config post, get, put, delete request with headers and parameters
 * @returns the axios instance
 */ const apiClient = (config)=>{
    const axiosInstance = axios__WEBPACK_IMPORTED_MODULE_0___default()(config);
    return axiosInstance;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (apiClient);


/***/ }),

/***/ 43019:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "_n": () => (/* binding */ BASE_URL),
/* harmony export */   "uJ": () => (/* binding */ createUrl)
/* harmony export */ });
/* harmony import */ var _api_configFetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51573);
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97237);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_configFetch__WEBPACK_IMPORTED_MODULE_0__]);
_api_configFetch__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/* eslint-disable class-methods-use-this */ 

/**
 * Create the url path for the request
 * @param base - Receive BASE_URL
 * @param path - Receive your own path example: /data
 * @returns string with the url
 */ const createUrl = (base, path)=>`${base}${path}`;
const BASE_URL = "https://d5ja6jkvsot2v.cloudfront.net"; // Replace by your env variable
/**
 * - Import every config that you need in configFetch, then import the RequestService example:
 * - Using apiClient (axios intance)
 * - const response = await RequestService.getData()
 */ const RequestService = {
    // POST
    loginUser: (dataBody)=>(0,_api_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)((0,_api_configFetch__WEBPACK_IMPORTED_MODULE_0__/* .configPost */ .DH)([
            createUrl(BASE_URL, "/auth/login")
        ], dataBody)),
    // POST
    emailForgotPassword: (data)=>(0,_api_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)((0,_api_configFetch__WEBPACK_IMPORTED_MODULE_0__/* .configPost */ .DH)([
            createUrl(BASE_URL, "/auth/PasswordEmail")
        ], data.dataBody)),
    // PUT
    updateForgotPassword: (data)=>(0,_api_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)((0,_api_configFetch__WEBPACK_IMPORTED_MODULE_0__/* .configPut */ .FQ)([
            createUrl(BASE_URL, "/auth/updateForgotPassword")
        ], data.dataBody)),
    // PUT
    setNewPassword: (data)=>(0,_api_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)((0,_api_configFetch__WEBPACK_IMPORTED_MODULE_0__/* .configPut */ .FQ)([
            createUrl(BASE_URL, "/auth/setPassword")
        ], data.dataBody)),
    // GET
    pingServer: ()=>(0,_api_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)((0,_api_configFetch__WEBPACK_IMPORTED_MODULE_0__/* .configGet */ .zn)(createUrl(BASE_URL, "/utils/serverStatus"))),
    // POST
    userCreate: (data)=>(0,_api_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)((0,_api_configFetch__WEBPACK_IMPORTED_MODULE_0__/* .configPost */ .DH)([
            createUrl(BASE_URL, "/auth/createUser")
        ], data.dataBody)),
    // GET
    getPosibleSelectionsCreateUsers: (userRole = "", id_tenant = "", supplier = "")=>(0,_api_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)((0,_api_configFetch__WEBPACK_IMPORTED_MODULE_0__/* .configGet */ .zn)(createUrl(BASE_URL, `/auth/possibleSelectionsCreateUsers?${userRole ? `user_role=${userRole}` : ""}${id_tenant ? `&id_tenant=${id_tenant}` : ""}${supplier ? `&supplier=${supplier}` : ""}`))),
    // POST
    resendEmail: (data)=>(0,_api_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)((0,_api_configFetch__WEBPACK_IMPORTED_MODULE_0__/* .configPost */ .DH)([
            createUrl(BASE_URL, "/auth/PasswordEmail")
        ], data.dataBody)),
    // GET
    getUserData: ()=>(0,_api_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)((0,_api_configFetch__WEBPACK_IMPORTED_MODULE_0__/* .configGet */ .zn)(createUrl(BASE_URL, "/utils/userData"))),
    // PUT
    updateLoggedBuyerOrSupplier: (data)=>(0,_api_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)((0,_api_configFetch__WEBPACK_IMPORTED_MODULE_0__/* .configPut */ .FQ)([
            createUrl(BASE_URL, "/utils/loggedUser")
        ], data.dataBody)),
    // GET
    getUsers: (user_status = "", user_role = "", openSearch = "")=>(0,_api_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)((0,_api_configFetch__WEBPACK_IMPORTED_MODULE_0__/* .configGet */ .zn)(createUrl(BASE_URL, `/users/readAll?${user_status && `&user_status=${user_status}`}${user_role && `&user_role=${user_role}`}${openSearch && `&openSearch=${openSearch}`}`))),
    /**
   * Active and deactivate user
   *
   * Request Method: PUT
   *
   * @param id - id user string
   * @param data - payload containing the string user_status
   * @returns returns the request response
   */ changeUserStatus: (id, data)=>(0,_api_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)((0,_api_configFetch__WEBPACK_IMPORTED_MODULE_0__/* .configPut */ .FQ)([
            createUrl(BASE_URL, `/auth/update/${id}`)
        ], data)),
    /**
   * Export users
   *
   * Request Method: GET
   * export all the users requested in the table, the result can be filtered with the
   * query parameters, but the filters can not override the restrictions of the user role, so specific
   * user roles may not be able to set some filters. The URL type parameter must be ‘txt’, ‘csv’ or ‘json’
   *
   * @param type - string with the file type
   * @param user_status - payload containing the string user_status
   * @param user_role - payload containing the string user_status
   * @param openSearch - payload containing the string user_status
   * @returns return the file with all the query results (there is a limit of 10000 rows)
   */ exportUsers: (type, userStatus = "", userRole = "", openSearch = "")=>(0,_api_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)((0,_api_configFetch__WEBPACK_IMPORTED_MODULE_0__/* .configGet */ .zn)(createUrl(BASE_URL, `/users/export/${type}?${userStatus && `user_status=${userStatus}`}${userRole && `${userRole}`}${openSearch && `&openSearch=${openSearch}`}`)))
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RequestService);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;