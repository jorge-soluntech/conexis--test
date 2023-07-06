(() => {
var exports = {};
exports.id = 6999;
exports.ids = [6999];
exports.modules = {

/***/ 1545:
/***/ ((module) => {

// Exports
module.exports = {
	"fallback": "fallbackComponent_fallback__Yuc_e",
	"opacityIn": "fallbackComponent_opacityIn__8TV2Z",
	"moveToRight": "fallbackComponent_moveToRight__7qnxF"
};


/***/ }),

/***/ 56209:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fallbackComponent_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1545);
/* harmony import */ var _fallbackComponent_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fallbackComponent_module_scss__WEBPACK_IMPORTED_MODULE_3__);




const FallbackComponent = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_fallbackComponent_module_scss__WEBPACK_IMPORTED_MODULE_3___default().fallback),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
            src: "/assets/images/load_conexis.svg",
            width: 140,
            height: 117,
            alt: "mask",
            priority: true
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FallbackComponent);


/***/ }),

/***/ 53242:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W6": () => (/* binding */ getFieldValues),
/* harmony export */   "lR": () => (/* binding */ tagRender),
/* harmony export */   "ud": () => (/* binding */ renderTitle),
/* harmony export */   "x1": () => (/* binding */ renderItem)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_designSystem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88776);


// %%%%%%%%%%  useful functions to render the title and items of the select
const renderTitle = (title)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        children: title
    });
const renderItem = (title, id)=>({
        id,
        label: title,
        value: title
    });
// select multiple items style renderre
const tagRender = (props)=>{
    const { label , closable , onClose  } = props;
    const onPreventMouseDown = (event)=>{
        event.preventDefault();
        event.stopPropagation();
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_designSystem__WEBPACK_IMPORTED_MODULE_1__/* .Tag */ .Vp, {
        color: "#E6F1CB",
        onMouseDown: onPreventMouseDown,
        closable: closable,
        onClose: onClose,
        style: {
            marginRight: 3
        },
        children: label
    });
};
// "typeUser" is conditionally chained because values is passed to the component
// as a prop and is not available on the first render but when the data si ready it becomes available.
const getFieldValues = (values)=>({
        firstName: values.first_name,
        lastName: values.last_name,
        email: values.email,
        typeUser: values.user_roles?.[0],
        buyer: values.legacy_permissioned_buyers ? values.legacy_permissioned_buyers : undefined
    });


/***/ }),

/***/ 78323:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(90396);
/* harmony import */ var _infrastructure_services_UserServices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34613);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53242);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_infrastructure_services_UserServices__WEBPACK_IMPORTED_MODULE_3__]);
_infrastructure_services_UserServices__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const useUpdateUserForm = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
    const { 0: idToUpdate  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(router.query.id);
    const { 0: dataRoles , 1: setDataRoles  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}); // mapped data
    const { 0: userInfo , 1: setUserInfo  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}); // raw data from backend
    const { 0: possibleBuyers , 1: setpossibleBuyers  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([
        {}
    ]);
    const { 0: roles , 1: setRoles  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([
        {}
    ]);
    const { 0: showError , 1: setShowError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: showBuyer , 1: setShowBuyer  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: isLoading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: loadingFormData , 1: setLoadingFormData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: messageError , 1: setMessageError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("This field is required");
    const { 0: successResult , 1: setSuccessResult  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: userRole , 1: setUserRole  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const userServices = new _infrastructure_services_UserServices__WEBPACK_IMPORTED_MODULE_3__/* .UserServices */ .c(router);
    // %%%%%%%%%%  data fetching
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setLoadingFormData(true);
        userServices.getUser(idToUpdate?.toString()).then((res)=>{
            if (!res) {
                setMessageError("There's been an error. Please try again later.");
                setShowError(true);
            }
            if (res.user_roles?.length) {
                userServices.userRolesToUpdate(res.user_roles[0]).then((response)=>{
                    setDataRoles(response);
                });
                setUserRole(res.user_roles[0]);
            }
            setUserInfo(res);
            setLoadingFormData(false);
        }).catch((_error)=>{
            setMessageError("There's been an error. Please try again later.");
            setShowError(true);
        });
    }, []);
    // get the roles to create a user and set the data to the select
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (userInfo.user_roles?.length) {
            userServices.userRolesToUpdate(userInfo.user_roles[0]).then((res)=>{
                setDataRoles(res);
            });
            setUserRole(userInfo.user_roles[0]);
        }
    }, [
        userInfo
    ]);
    const onSelectRole = async (userRole)=>{
        setUserRole(userRole);
    };
    // map data to the select of userRole
    // map data to the select of userRole
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (dataRoles) {
            if (dataRoles["BUYER USER"]) {
                const options = dataRoles["BUYER USER"].map((roleItem)=>{
                    return (0,_helpers__WEBPACK_IMPORTED_MODULE_4__/* .renderItem */ .x1)(roleItem, roleItem);
                });
                setRoles((prevState)=>[
                        ...prevState,
                        {
                            label: (0,_helpers__WEBPACK_IMPORTED_MODULE_4__/* .renderTitle */ .ud)("BUYER USER"),
                            options
                        }, 
                    ]);
            }
            if (dataRoles["MSP USER"]) {
                const options1 = dataRoles["MSP USER"].map((roleItem)=>{
                    return (0,_helpers__WEBPACK_IMPORTED_MODULE_4__/* .renderItem */ .x1)(roleItem, roleItem);
                });
                setRoles((prevState)=>[
                        ...prevState,
                        {
                            label: (0,_helpers__WEBPACK_IMPORTED_MODULE_4__/* .renderTitle */ .ud)("MSP USER"),
                            options: options1
                        }, 
                    ]);
            }
            if (dataRoles["SUPPLIER USER"]) {
                const options2 = dataRoles["SUPPLIER USER"].map((roleItem)=>{
                    return (0,_helpers__WEBPACK_IMPORTED_MODULE_4__/* .renderItem */ .x1)(roleItem, roleItem);
                });
                setRoles((prevState)=>[
                        ...prevState,
                        {
                            label: (0,_helpers__WEBPACK_IMPORTED_MODULE_4__/* .renderTitle */ .ud)("SUPPLIER USER"),
                            options: options2
                        }, 
                    ]);
            }
            if (dataRoles["GLOBAL USER"]) {
                const options3 = dataRoles["GLOBAL USER"].map((roleItem)=>{
                    return (0,_helpers__WEBPACK_IMPORTED_MODULE_4__/* .renderItem */ .x1)(roleItem, roleItem);
                });
                setRoles((prevState)=>[
                        ...prevState,
                        {
                            label: (0,_helpers__WEBPACK_IMPORTED_MODULE_4__/* .renderTitle */ .ud)("GLOBAL USER"),
                            options: options3
                        }, 
                    ]);
            }
        }
    }, [
        dataRoles
    ]);
    // get the posible buyers to create a user and set the data to the select
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (userRole) {
            // select menu options that will be shown
            if ([
                "Supplier Administrator",
                "Account Manager",
                "Supplier Finance", 
            ].includes(userRole)) {
                setShowBuyer(true);
                userServices.getPosibleSelectionsUpdateUsersBuyers(userRole, undefined, userInfo.supplier, idToUpdate?.toString()).then((res)=>{
                    const buyerOptions = [];
                    res.data.posibleBuyers.forEach((fields)=>{
                        buyerOptions.push({
                            label: fields.client_company_name,
                            value: fields.id
                        });
                    });
                    setpossibleBuyers(buyerOptions);
                    setShowBuyer(true);
                }).catch(()=>{
                    setMessageError("There's been an error. Please try again later.");
                    setShowError(true);
                });
            } else if ([
                "MSP Administrator",
                "Program Manager",
                "Program Representative",
                "MSP Finance",
                "Super Administrator",
                "Product Support", 
            ].includes(userRole)) {
                setShowBuyer(true);
                userServices.getPosibleSelectionsUpdateUsersBuyers(userRole, undefined, undefined, idToUpdate?.toString()).then((res)=>{
                    const buyerOptions = [];
                    res.data.posibleBuyers.forEach((fields)=>{
                        buyerOptions.push({
                            label: fields.client_company_name,
                            value: fields.id
                        });
                    });
                    setpossibleBuyers(buyerOptions);
                }).catch(()=>{
                    setMessageError("There's been an error. Please try again later.");
                    setShowError(true);
                });
            } else if ([
                "Buyer Administrator",
                "Approver",
                "Hiring Manager",
                "Buyer Finance",
                "Delegate", 
            ].includes(userRole)) {
                setShowBuyer(false);
            }
        }
    }, [
        userRole
    ]);
    const onSubmit = async (data)=>{
        const { typeUser , buyer , firstName , lastName , email  } = data;
        const dataForm = {
            first_name: firstName,
            last_name: lastName,
            user_roles: [
                typeUser
            ],
            email
        };
        if (buyer) {
            dataForm.legacy_permissioned_buyers = buyer.toString().split(",");
        }
        setLoading(true);
        await userServices.userUpdate(idToUpdate?.toString(), dataForm).then(()=>{
            setSuccessResult(true);
        }).catch((err)=>{
            if (err.request.status === 400) {
                if (err.response?.data?.message && typeof err.response?.data?.message === "string" && err.response?.data?.message.includes("already being used")) {
                    setMessageError("Email address is already being used by another user.");
                    setShowError(true);
                } else {
                    setMessageError(err.response?.data?.message?.toString());
                    setShowError(true);
                }
            } else {
                setMessageError("There's been an error. Please try again later.");
                setShowError(true);
            }
        }).finally(()=>setLoading(false));
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (_consts__WEBPACK_IMPORTED_MODULE_2__/* .userCretaeUI.USER_ROLE_MSP_EXCEPTIONS.includes */ .XI.Qg.includes(userRole)) {
            setShowBuyer(false);
        }
    }, [
        userRole
    ]);
    return {
        userInfo,
        userRole,
        possibleBuyers,
        roles,
        showError,
        showBuyer,
        isLoading,
        messageError,
        successResult,
        loadingFormData,
        onSubmit,
        onSelectRole,
        setShowError,
        setMessageError
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useUpdateUserForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 60156:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_common_fallbackComponent_FallbackComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56209);
/* harmony import */ var _components_common_loaders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55439);
/* harmony import */ var _components_common_userCreateComponents_formUserUpdate_useUpdateUserForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78323);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_common_loaders__WEBPACK_IMPORTED_MODULE_3__, _components_common_userCreateComponents_formUserUpdate_useUpdateUserForm__WEBPACK_IMPORTED_MODULE_4__]);
([_components_common_loaders__WEBPACK_IMPORTED_MODULE_3__, _components_common_userCreateComponents_formUserUpdate_useUpdateUserForm__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const FormUserUpdate = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>__webpack_require__.e(/* import() */ 4211).then(__webpack_require__.bind(__webpack_require__, 84211)), {
    loadableGenerated: {
        modules: [
            "home/users/update/[id].tsx -> " + "@/components/common/userCreateComponents/formUserUpdate/FormUserUpdate"
        ]
    },
    loading: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_fallbackComponent_FallbackComponent__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
});
/**
 * The FormUserUpdate page, will see Main as a template, use the same template for other pages
 * @returns The FormUserUpdate page ./
 */ const UserUpdate = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_loaders__WEBPACK_IMPORTED_MODULE_3__/* .FormPageLoader */ .pG, {
        useGetData: _components_common_userCreateComponents_formUserUpdate_useUpdateUserForm__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
        children: ({ userInfo , userRole , possibleBuyers , roles , showError , showBuyer , isLoading , messageError , successResult , onSubmit , onSelectRole , setShowError , setMessageError ,  })=>{
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FormUserUpdate, {
                userInfo,
                userRole,
                possibleBuyers,
                roles,
                showError,
                showBuyer,
                isLoading,
                messageError,
                successResult,
                onSubmit,
                onSelectRole,
                setShowError,
                setMessageError
            });
        }
    });
};
const getServerSideProps = async ({ req  })=>{
    if (req.cookies.token) {
        return {
            props: {}
        };
    }
    return {
        redirect: {
            destination: "/auth",
            permanent: false
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserUpdate);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 87066:
/***/ ((module) => {

"use strict";
module.exports = require("@ant-design/icons");

/***/ }),

/***/ 75184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 45725:
/***/ ((module) => {

"use strict";
module.exports = require("antd");

/***/ }),

/***/ 52167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 1635:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs");

/***/ }),

/***/ 94957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 50744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 35843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 95832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 28854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 93297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 59232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 71853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 16689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 20997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 69915:
/***/ ((module) => {

"use strict";
module.exports = import("js-cookie");;

/***/ }),

/***/ 15941:
/***/ ((module) => {

"use strict";
module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5675,5152,9235,3019,396,7632,7406,9227,8776,5439,4613], () => (__webpack_exec__(60156)));
module.exports = __webpack_exports__;

})();