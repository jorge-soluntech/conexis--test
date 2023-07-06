"use strict";
exports.id = 8760;
exports.ids = [8760];
exports.modules = {

/***/ 69800:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ AuthContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});


/***/ }),

/***/ 27290:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ AuthProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69915);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _infrastructure_services_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43019);
/* harmony import */ var _infrastructure_services_utilsServices__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17632);
/* harmony import */ var _AuthContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(69800);
/* harmony import */ var _authReducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(42715);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_1__, _infrastructure_services_index__WEBPACK_IMPORTED_MODULE_4__, _infrastructure_services_utilsServices__WEBPACK_IMPORTED_MODULE_5__]);
([js_cookie__WEBPACK_IMPORTED_MODULE_1__, _infrastructure_services_index__WEBPACK_IMPORTED_MODULE_4__, _infrastructure_services_utilsServices__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const AUTH_INITIAL_STATE = {
    isLoggedIn: false,
    user: undefined,
    emailSent: undefined,
    failedAttempts: 0,
    dataUser: undefined,
    idTenant: 9
};
const AuthProvider = ({ children  })=>{
    const { 0: state , 1: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useReducer)(_authReducer__WEBPACK_IMPORTED_MODULE_7__/* .authReducer */ .d, AUTH_INITIAL_STATE);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get("user")) {
            const infoUser = js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get("user");
            dispatch({
                type: "[Auth] - Login",
                payload: JSON.parse(infoUser)
            });
        }
    }, []);
    const fechtDataUser = async ()=>{
        try {
            const response = await _infrastructure_services_index__WEBPACK_IMPORTED_MODULE_4__/* ["default"].getUserData */ .ZP.getUserData();
            dispatch({
                type: "[Auth] - Get Data User",
                payload: response.data.data
            });
        } catch (error) {
            dispatch({
                type: "[Auth] - Get Data User",
                payload: undefined
            });
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (state.user) {
            fechtDataUser();
        }
    }, [
        state.user
    ]);
    const currentAttempts = (value)=>{
        dispatch({
            type: "[Auth] - Failed Attempt",
            payload: value
        });
    };
    const checkSeverDown = (err)=>{
        if (err.response) {
            // La respuesta fue hecha y el servidor respondió con un código de estado
            if (err.response.status !== 500 && err.response.status !== 0 && err.response.status !== 423) {
                return false;
            }
        }
        _infrastructure_services_utilsServices__WEBPACK_IMPORTED_MODULE_5__/* .UtilServices.serverIsDown */ .$.serverIsDown(router);
        return false;
    };
    const loginUser = async (username, password, tenant)=>{
        if (js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get("locked")) {
            return false;
        }
        try {
            const { data  } = await _infrastructure_services_index__WEBPACK_IMPORTED_MODULE_4__/* ["default"].loginUser */ .ZP.loginUser({
                username,
                password,
                tenant
            });
            const { token  } = data;
            currentAttempts(0);
            const user = {
                email: data.email,
                username: data.name,
                tenant: data.tenant,
                role: data.roles[0]
            };
            js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].set("token", token);
            js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].set("user", JSON.stringify(user));
            dispatch({
                type: "[Auth] - Login",
                payload: user
            });
            return true;
        } catch (error) {
            return checkSeverDown(error);
        }
    };
    const logout = ()=>{
        dispatch({
            type: "[Auth] - Logout"
        });
        js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].remove("token");
        js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].remove("user");
        router.push("/auth");
    };
    const emailCheckToSend = async (email, tenant)=>{
        try {
            await _infrastructure_services_index__WEBPACK_IMPORTED_MODULE_4__/* ["default"].emailForgotPassword */ .ZP.emailForgotPassword({
                dataBody: {
                    email,
                    tenant
                }
            });
            dispatch({
                type: "[Auth] - Email Sent",
                payload: email
            });
            return {
                status: true,
                message: ""
            };
        } catch (error) {
            if (error.response?.status === 404) {
                return {
                    status: false,
                    message: error.response.data?.message
                };
            }
            return {
                status: checkSeverDown(error),
                message: "Something went wrong, try again later"
            };
        }
    };
    const updateForgotPassword = async (dataForm)=>{
        try {
            await _infrastructure_services_index__WEBPACK_IMPORTED_MODULE_4__/* ["default"].updateForgotPassword */ .ZP.updateForgotPassword({
                dataBody: {
                    ...dataForm
                }
            });
            dispatch({
                type: "[Auth] - Reset Password"
            });
            return {
                status: true,
                message: ""
            };
        } catch (error) {
            if (error.response.data?.message === "Invalid token") {
                router.push("/auth/expired-link", undefined, {
                    shallow: true
                });
                return {
                    status: false,
                    message: "Expired link"
                };
            }
            if (error.response.data?.message === "no previous password has been assigned for this user") {
                return {
                    status: false,
                    message: "No previous password has been assigned for this user"
                };
            }
            return {
                status: checkSeverDown(error),
                message: "Something went wrong, try again later"
            };
        }
    };
    const setNewPassword = async (dataForm)=>{
        try {
            await _infrastructure_services_index__WEBPACK_IMPORTED_MODULE_4__/* ["default"].setNewPassword */ .ZP.setNewPassword({
                dataBody: {
                    ...dataForm
                }
            });
            dispatch({
                type: "[Auth] - Set Password"
            });
            return true;
        } catch (error) {
            return checkSeverDown(error);
        }
    };
    const userCreate = async (dataForm)=>{
        try {
            const response = await _infrastructure_services_index__WEBPACK_IMPORTED_MODULE_4__/* ["default"].userCreate */ .ZP.userCreate({
                dataBody: {
                    ...dataForm
                }
            });
            dispatch({
                type: "[Auth] - User create"
            });
            return response;
        } catch (error) {
            return checkSeverDown(error) ? true : error;
        }
    };
    const getPosibleSelectionsCreateUsers = async (user_role, id_tenant, supplier)=>{
        try {
            const response = await _infrastructure_services_index__WEBPACK_IMPORTED_MODULE_4__/* ["default"].getPosibleSelectionsCreateUsers */ .ZP.getPosibleSelectionsCreateUsers(user_role, id_tenant, supplier);
            dispatch({
                type: "[Auth] - Get Posible Selections Create Users"
            });
            return response;
        } catch (error) {
            return checkSeverDown(error);
        }
    };
    const resendEmail = async (email, tenant, messageType)=>{
        try {
            await _infrastructure_services_index__WEBPACK_IMPORTED_MODULE_4__/* ["default"].resendEmail */ .ZP.resendEmail({
                dataBody: {
                    email,
                    tenant,
                    messageType
                }
            });
            dispatch({
                type: "[Auth] - Email Sent",
                payload: email
            });
            return true;
        } catch (error) {
            return checkSeverDown(error);
        }
    };
    const getUsers = async (user_status, user_role, openSearch)=>{
        try {
            const response = await _infrastructure_services_index__WEBPACK_IMPORTED_MODULE_4__/* ["default"].getUsers */ .ZP.getUsers(user_status, user_role, openSearch);
            dispatch({
                type: "[Users] - Get all users"
            });
            return response;
        } catch (error) {
            return checkSeverDown(error);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AuthContext__WEBPACK_IMPORTED_MODULE_6__/* .AuthContext.Provider */ .V.Provider, {
        value: {
            ...state,
            // Methods
            fechtDataUser,
            loginUser,
            logout,
            emailCheckToSend,
            updateForgotPassword,
            setNewPassword,
            currentAttempts,
            userCreate,
            getPosibleSelectionsCreateUsers,
            resendEmail,
            getUsers
        },
        children: children
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 42715:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ authReducer)
/* harmony export */ });
const authReducer = (state, action)=>{
    switch(action.type){
        case "[Auth] - Login":
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload,
                emailSent: undefined
            };
        case "[Auth] - Logout":
            return {
                ...state,
                isLoggedIn: false,
                user: undefined,
                emailSent: undefined
            };
        case "[Auth] - Email Sent":
            return {
                ...state,
                emailSent: action.payload
            };
        case "[Auth] - Reset Password":
            return {
                ...state
            };
        case "[Auth] - Set Password":
            return {
                ...state
            };
        case "[Auth] - User create":
            return {
                ...state
            };
        case "[Auth] - Get Posible Selections Create Users":
            return {
                ...state
            };
        case "[Auth] - Failed Attempt":
            return {
                ...state,
                failedAttempts: action.payload
            };
        case "[Auth] - Get Data User":
            return {
                ...state,
                dataUser: action.payload
            };
        case "[Users] - Get all users":
            return {
                ...state
            };
        default:
            return state;
    }
};


/***/ }),

/***/ 78760:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ho": () => (/* reexport safe */ _AuthProvider__WEBPACK_IMPORTED_MODULE_1__.H),
/* harmony export */   "Vo": () => (/* reexport safe */ _AuthContext__WEBPACK_IMPORTED_MODULE_0__.V)
/* harmony export */ });
/* harmony import */ var _AuthContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69800);
/* harmony import */ var _AuthProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27290);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_AuthProvider__WEBPACK_IMPORTED_MODULE_1__]);
_AuthProvider__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

// eslint-disable-next-line import/no-cycle



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;