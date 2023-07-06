exports.id = 6117;
exports.ids = [6117];
exports.modules = {

/***/ 83176:
/***/ ((module) => {

// Exports
module.exports = {
	"form_container": "formUser_form_container__VDYM5",
	"form_user_create": "formUser_form_user_create__sq4ZN",
	"form_user_create_col": "formUser_form_user_create_col__4MqXr",
	"select_user_create": "formUser_select_user_create__PYuwJ",
	"select_user_create_multiple": "formUser_select_user_create_multiple__rI4TD",
	"labelRequired": "formUser_labelRequired__GTi7O",
	"smallInputs": "formUser_smallInputs__zgE16",
	"moveToRight": "formUser_moveToRight__bA8_K"
};


/***/ }),

/***/ 2224:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



// select multiple items style renderre
const TagRender = (props)=>{
    const { label , closable , onClose  } = props;
    const onPreventMouseDown = (event)=>{
        event.preventDefault();
        event.stopPropagation();
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Tag, {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TagRender);


/***/ }),

/***/ 53566:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ formUser)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(87066);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(45725);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(25675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(71853);
// EXTERNAL MODULE: ./src/consts/forms_general.ts
var forms_general = __webpack_require__(48522);
// EXTERNAL MODULE: ./src/components/common/userCreateComponents/formUser/formUser.module.scss
var formUser_module = __webpack_require__(83176);
var formUser_module_default = /*#__PURE__*/__webpack_require__.n(formUser_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: ./src/components/hooks/storeHooks.ts
var storeHooks = __webpack_require__(89480);
// EXTERNAL MODULE: ./src/consts/index.ts + 8 modules
var consts = __webpack_require__(90396);
;// CONCATENATED MODULE: ./src/components/common/userCreateComponents/formUser/useFormUser.tsx



/**
 * Custom hook that handles the form logic for creating users
 *
 * @param form - Ant Design form instance (`FormInstance`).
 * @param possibleBuyers - List of possible buyers. Can be an array of objects, an array of strings, or any other type.
 * @returns `null`.
 *
 * @remarks
 * When creating a buyer-level user, the default buyer should be the first option of the list of possible buyers
 */ const useFormUser = (form, onSelectBuyer, possibleBuyers)=>{
    const { userLevel  } = (0,storeHooks/* useAppSelector */.C)((state)=>state.role);
    (0,external_react_.useEffect)(()=>{
        if (userLevel === consts/* levels.buyer */.gr.buyer && Object.keys(possibleBuyers[0]).length !== 0) {
            form.setFieldValue("buyer", possibleBuyers[0].value);
            onSelectBuyer(possibleBuyers[0].value);
        }
    }, [
        possibleBuyers
    ]);
    return null;
};
/* harmony default export */ const formUser_useFormUser = (useFormUser);

;// CONCATENATED MODULE: ./src/components/common/userCreateComponents/formUser/formUser.tsx
/* eslint-disable array-callback-return */ 







const { Title  } = external_antd_.Typography;
const { Content  } = external_antd_.Layout;
/**
 * Returns the Form component
 *
 * @param titleForm - The string of title form
 * @param showError - The boolean of showing error for  form
 * @param messageError - The string of message error for  form
 * @param setShowError - The function for set showing errors of  form
 * @param onSubmit - The function of title form on submit
 * @param setMessageError - The function for set message errors of  form
 * @param onSelectRole - The function when select a role of  form
 * @param roles - The string array of roles for  form
 * @param showSupplier - The boolean for showing supplier section of  form
 * @param onSelectSupplier - The function when select suppliers of  form
 * @param possibleSupplier - The string array of suppliers of  form
 * @param showBuyer - The boolean for showing buyer section of  form
 * @param multipleBuyer - The boolean for titles related to buyers of the form
 * @param tagRender - The JSX.Element of tag to render in the form
 * @param onSelectBuyer - The function to execute when select a buyer of the form
 * @param possibleBuyers - The string array of buyers for the form
 * @param showUserData - The boolean to show user data section of the form
 * @returns The form of user module
 */ const FormUser = ({ titleForm , showError , messageError , setShowError , onSubmit , setMessageError , onSelectRole , roles , showSupplier , onSelectSupplier , possibleSupplier , showBuyer , multipleBuyer , tagRender , onSelectBuyer , possibleBuyers , showUserData , isLoading ,  })=>{
    const router = (0,router_.useRouter)();
    const [form] = external_antd_.Form.useForm();
    formUser_useFormUser(form, onSelectBuyer, possibleBuyers);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Content, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `${(formUser_module_default()).form_container}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Row, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Col, {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                style: {
                                    cursor: "pointer",
                                    color: "#888E95",
                                    width: "fit-content",
                                    fontSize: "16px"
                                },
                                onClick: ()=>{
                                    router.push("/home/users", undefined, {
                                        shallow: true
                                    });
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(icons_.LeftOutlined, {}),
                                    "\xa0 Users"
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Title, {
                        style: {
                            marginBottom: "1.2rem",
                            marginTop: "2rem",
                            fontSize: 32
                        },
                        level: 2,
                        children: titleForm
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Card, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (formUser_module_default()).form_user_create,
                                children: [
                                    showError && /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Alert, {
                                        message: messageError,
                                        className: "alert_red",
                                        type: "error",
                                        showIcon: true,
                                        closable: true,
                                        afterClose: ()=>setShowError(false),
                                        icon: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "/assets/icons/alert_error.svg",
                                            alt: "logo_conexis",
                                            width: 24,
                                            height: 24
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Form, {
                                        form: form,
                                        name: "register",
                                        onFinish: onSubmit,
                                        scrollToFirstError: true,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Row, {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Col, {
                                                    span: 24,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                                            className: (formUser_module_default()).labelRequired,
                                                            name: "typeUser",
                                                            validateTrigger: "onSubmit",
                                                            label: "Select type of user",
                                                            rules: [
                                                                {
                                                                    required: true,
                                                                    validator: async (_, value)=>{
                                                                        if (!value) {
                                                                            setMessageError("All fields are required. Please make sure all fields are filled before submitting the form.");
                                                                            setShowError(true);
                                                                            return Promise.reject();
                                                                        }
                                                                        return Promise.resolve();
                                                                    }
                                                                }, 
                                                            ],
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Select, {
                                                                className: `${(formUser_module_default()).select_user_create} ${"dummyClassCreateFormForBorder"}`,
                                                                onSelect: onSelectRole,
                                                                style: {
                                                                    width: "100%",
                                                                    borderRight: "white"
                                                                },
                                                                size: "large",
                                                                placeholder: "Select type of user here",
                                                                suffixIcon: " ",
                                                                maxTagCount: "responsive",
                                                                showSearch: true,
                                                                optionFilterProp: "children",
                                                                filterOption: (input, option)=>(option?.value ?? "").toLowerCase().includes(input.toLowerCase()),
                                                                options: roles
                                                            })
                                                        })
                                                    })
                                                })
                                            }),
                                            showSupplier && /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Row, {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Col, {
                                                    span: 24,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                                            className: (formUser_module_default()).labelRequired,
                                                            name: "supplier",
                                                            validateTrigger: "onSubmit",
                                                            label: "Select supplier",
                                                            rules: [
                                                                {
                                                                    required: true,
                                                                    validator: async (_, value)=>{
                                                                        if (!value) {
                                                                            setMessageError("All fields are required. Please make sure all fields are filled before submitting the form.");
                                                                            setShowError(true);
                                                                            return Promise.reject();
                                                                        }
                                                                        return Promise.resolve();
                                                                    }
                                                                }, 
                                                            ],
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Select, {
                                                                className: `${(formUser_module_default()).select_user_create} ${"dummyClassCreateFormForBorder"}`,
                                                                style: {
                                                                    width: "100%",
                                                                    borderRight: "white"
                                                                },
                                                                size: "large",
                                                                placeholder: "Please input your supplier",
                                                                suffixIcon: " ",
                                                                maxTagCount: "responsive",
                                                                showSearch: true,
                                                                optionFilterProp: "children",
                                                                filterOption: (input, option)=>(option?.label ?? "").toLowerCase().includes(input.toLowerCase()),
                                                                filterSort: (optionA, optionB)=>(optionA?.label ?? "").toLowerCase().localeCompare((optionB?.label ?? "").toLowerCase()),
                                                                onSelect: onSelectSupplier,
                                                                options: possibleSupplier
                                                            })
                                                        })
                                                    })
                                                })
                                            }),
                                            showBuyer && /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Row, {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Col, {
                                                    span: 24,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                                            className: (formUser_module_default()).labelRequired,
                                                            name: "buyer",
                                                            validateTrigger: "onSubmit",
                                                            label: multipleBuyer ? "Select buyers" : "Select buyer",
                                                            rules: [
                                                                {
                                                                    required: true,
                                                                    validator: async (_, value)=>{
                                                                        if (!value) {
                                                                            setMessageError("All fields are required. Please make sure all fields are filled before submitting the form.");
                                                                            setShowError(true);
                                                                            return Promise.reject();
                                                                        }
                                                                        if (value.length === 0) {
                                                                            setMessageError("All fields are required. Please make sure all fields are filled before submitting the form.");
                                                                            setShowError(true);
                                                                            return Promise.reject();
                                                                        }
                                                                        return Promise.resolve();
                                                                    }
                                                                }, 
                                                            ],
                                                            children: multipleBuyer === true ? /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Select, {
                                                                mode: "multiple",
                                                                size: "large",
                                                                maxTagCount: "responsive",
                                                                placeholder: "Select buyers here",
                                                                // suffixIcon={' '}
                                                                className: `${(formUser_module_default()).select_user_create_multiple} ${"dummyClassCreateFormForBorder"}`,
                                                                tagRender: tagRender,
                                                                style: {
                                                                    width: "100%"
                                                                },
                                                                showSearch: true,
                                                                optionFilterProp: "children",
                                                                filterOption: (input, option)=>(option?.label ?? "").toLowerCase().includes(input.toLowerCase()),
                                                                filterSort: (optionA, optionB)=>((optionA?.label) ?? "").toLowerCase().localeCompare(((optionB?.label) ?? "").toLowerCase()),
                                                                onSelect: onSelectBuyer,
                                                                options: possibleBuyers
                                                            }) : /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Select, {
                                                                className: `${(formUser_module_default()).select_user_create} ${"dummyClassCreateFormForBorder"}`,
                                                                style: {
                                                                    width: "100%",
                                                                    borderRight: "white"
                                                                },
                                                                size: "large",
                                                                placeholder: "Select buyer here",
                                                                suffixIcon: " ",
                                                                maxTagCount: "responsive",
                                                                showSearch: true,
                                                                optionFilterProp: "children",
                                                                filterOption: (input, option)=>(option?.label ?? "").toLowerCase().includes(input.toLowerCase()),
                                                                filterSort: (optionA, optionB)=>(optionA?.label ?? "").toLowerCase().localeCompare((optionB?.label ?? "").toLowerCase()),
                                                                onSelect: onSelectBuyer,
                                                                options: possibleBuyers
                                                            })
                                                        })
                                                    })
                                                })
                                            }),
                                            showUserData && /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Row, {
                                                    gutter: [
                                                        16,
                                                        0
                                                    ],
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Col, {
                                                            lg: 8,
                                                            sm: 24,
                                                            xs: 24,
                                                            md: 8,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                                                    className: `${(formUser_module_default()).labelRequired} ${(formUser_module_default()).smallInputs}`,
                                                                    validateTrigger: "onSubmit",
                                                                    name: "firstName",
                                                                    label: "First name",
                                                                    rules: [
                                                                        {
                                                                            required: true,
                                                                            validator: async (_, value)=>{
                                                                                if (!value) {
                                                                                    setMessageError("All fields are required. Please make sure all fields are filled before submitting the form.");
                                                                                    setShowError(true);
                                                                                    return Promise.reject();
                                                                                }
                                                                                return Promise.resolve();
                                                                            }
                                                                        }, 
                                                                    ],
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                                                                        className: (formUser_module_default()).inputLabel,
                                                                        size: "large",
                                                                        type: "text",
                                                                        placeholder: "Enter first name here"
                                                                    })
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Col, {
                                                            lg: 8,
                                                            sm: 24,
                                                            xs: 24,
                                                            md: 8,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                                                    className: `${(formUser_module_default()).labelRequired} ${(formUser_module_default()).smallInputs}`,
                                                                    name: "lastName",
                                                                    validateTrigger: "onSubmit",
                                                                    label: "Last name",
                                                                    rules: [
                                                                        {
                                                                            required: true,
                                                                            validator: async (_, value)=>{
                                                                                if (!value) {
                                                                                    setMessageError("All fields are required. Please make sure all fields are filled before submitting the form.");
                                                                                    setShowError(true);
                                                                                    return Promise.reject();
                                                                                }
                                                                                return Promise.resolve();
                                                                            }
                                                                        }, 
                                                                    ],
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                                                                        className: (formUser_module_default()).inputLabel,
                                                                        size: "large",
                                                                        type: "text",
                                                                        placeholder: "Enter last name here"
                                                                    })
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Col, {
                                                            lg: 8,
                                                            sm: 24,
                                                            xs: 24,
                                                            md: 8,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                                                    className: (formUser_module_default()).labelRequired,
                                                                    name: "email",
                                                                    label: "Email",
                                                                    validateTrigger: "onSubmit",
                                                                    rules: [
                                                                        {
                                                                            required: true,
                                                                            type: "email",
                                                                            validator: async (_, value)=>{
                                                                                /// ^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/  optional permissive regex based on html5 standarts
                                                                                if (forms_general/* EMAIL_VALIDATION_REGEX.test */.bF.test(value)) {
                                                                                    return Promise.resolve();
                                                                                }
                                                                                if (!form.getFieldValue("buyer") || form.getFieldValue("buyer").length === 0 || !form.getFieldValue("firstName") || !form.getFieldValue("lastName")) {
                                                                                    return Promise.reject();
                                                                                }
                                                                                setMessageError("Please enter a valid email address.");
                                                                                setShowError(true);
                                                                                return Promise.reject();
                                                                            }
                                                                        }, 
                                                                    ],
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                                                                        className: (formUser_module_default()).inputLabel,
                                                                        size: "large",
                                                                        placeholder: "example@email.com"
                                                                    })
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                style: {
                                                    marginTop: "24px"
                                                },
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Button, {
                                                    type: "primary",
                                                    size: "large",
                                                    htmlType: "submit",
                                                    disabled: !showUserData,
                                                    loading: isLoading,
                                                    children: "Submit"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                style: {
                                    height: "4px"
                                }
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const formUser = (FormUser);


/***/ }),

/***/ 36117:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_hooks_useSetUserForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65065);
/* harmony import */ var _components_hooks_useSetUserRole__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37806);
/* harmony import */ var _infrastructure_services_UserServices__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34613);
/* harmony import */ var _TagRender_TagRender__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2224);
/* harmony import */ var _formUser_formUser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(53566);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_hooks_useSetUserForm__WEBPACK_IMPORTED_MODULE_3__, _components_hooks_useSetUserRole__WEBPACK_IMPORTED_MODULE_4__, _infrastructure_services_UserServices__WEBPACK_IMPORTED_MODULE_5__]);
([_components_hooks_useSetUserForm__WEBPACK_IMPORTED_MODULE_3__, _components_hooks_useSetUserRole__WEBPACK_IMPORTED_MODULE_4__, _infrastructure_services_UserServices__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable array-callback-return */ 







/**
 * Returns the Alert, Title and Form component
 *
 * @param titleForm - The string of title form
 * @returns The form of login page
 */ const FormUserCreate = ({ titleForm  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const { 0: isLoading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    // %%%%%%%%%%  data fetching
    const userServices = new _infrastructure_services_UserServices__WEBPACK_IMPORTED_MODULE_5__/* .UserServices */ .c(router);
    const { roles  } = (0,_components_hooks_useSetUserRole__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    // changes in role, get the posssible buyers and or buyers depending on the role and chang the ui
    const { onSelectRole , onSelectSupplier , setShowError , onSelectBuyer , setMessageError , showError , multipleBuyer , showBuyer , showSupplier , showUserData , messageError , possibleSupplier , possibleBuyers ,  } = (0,_components_hooks_useSetUserForm__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const onSubmit = async (data)=>{
        const { typeUser , buyer , firstName , lastName , email , supplier  } = data;
        const dataFormBuyer = {
            first_name: firstName,
            last_name: lastName,
            user_roles: [
                typeUser
            ],
            email,
            permissioned_buyers: buyer ? buyer.toString().split(",") : [],
            logged_buyer: buyer ? buyer?.toString().split(",")[0] : null
        };
        const dataFormSupplier = {
            permissioned_suppliers: supplier ? [
                supplier.toString()
            ] : "",
            supplier: supplier ? supplier.toString() : null
        };
        const dataForm = {
            ...supplier && showSupplier ? dataFormSupplier : "",
            ...dataFormBuyer
        };
        setLoading(true);
        await userServices.userCreate(dataForm).then((res)=>{
            router.push(res.errors && res.errors.length ? `/home/users/create/error-mail?email=${encodeURIComponent(dataForm.email)}
               ` : "/home/users/create/success-form", undefined, {
                shallow: true
            });
        }).catch((err)=>{
            if (err.request.status === 400) {
                setMessageError(err.response?.data?.message);
                setShowError(true);
                if (err.response?.data?.message && err.response?.data?.message.length && err.response?.data?.message[0] && err.response?.data?.message[0].includes("email must be an ema")) {
                    setMessageError("Please enter a valid email address");
                    setShowError(true);
                }
            } else {
                setMessageError("There's been an error. Please try again later.");
                setShowError(true);
            }
        }).finally(()=>setLoading(false));
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_formUser_formUser__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            titleForm: titleForm,
            showError: showError,
            messageError: messageError,
            setShowError: setShowError,
            onSubmit: onSubmit,
            setMessageError: setMessageError,
            onSelectRole: onSelectRole,
            roles: roles,
            showSupplier: showSupplier,
            onSelectSupplier: onSelectSupplier,
            possibleSupplier: possibleSupplier,
            showBuyer: showBuyer,
            multipleBuyer: multipleBuyer,
            tagRender: _TagRender_TagRender__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
            onSelectBuyer: onSelectBuyer,
            possibleBuyers: possibleBuyers,
            showUserData: showUserData,
            isLoading: isLoading
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormUserCreate);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 65065:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _consts_user_create_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16277);
/* harmony import */ var _infrastructure_services_UserServices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34613);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_infrastructure_services_UserServices__WEBPACK_IMPORTED_MODULE_4__]);
_infrastructure_services_UserServices__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





// fetching user data
const userServices = new _infrastructure_services_UserServices__WEBPACK_IMPORTED_MODULE_4__/* .UserServices */ .c((next_router__WEBPACK_IMPORTED_MODULE_1___default()));
const useSetUserForm = ()=>{
    const [form] = antd__WEBPACK_IMPORTED_MODULE_0__.Form.useForm();
    const { 0: showError , 1: setShowError  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: multipleBuyer , 1: setMultipleBuyer  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: showBuyer , 1: setShowBuyer  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: showUserData , 1: setShowUserData  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: showSupplier , 1: setShowSupplier  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: messageError , 1: setMessageError  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("This field is required");
    const { 0: possibleSupplier , 1: setPossibleSupplier  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([
        {}
    ]);
    const { 0: possibleBuyers , 1: setpossibleBuyers  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([
        {}
    ]);
    const { 0: userRole , 1: setUserRole  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const onSelectRole = async (userRole)=>{
        form.setFieldsValue({
            buyer: undefined
        });
        form.setFieldsValue({
            supplier: undefined
        });
        setShowUserData(false);
        setShowBuyer(false);
        setShowSupplier(false);
        if (_consts_user_create_ui__WEBPACK_IMPORTED_MODULE_3__/* .USER_ROLE_SUPPLIER.includes */ .Dr.includes(userRole)) {
            setShowSupplier(true);
            setShowBuyer(false);
            setMultipleBuyer(true);
            userServices.getPosibleSelectionsCreateUsersSuppliers(userRole, undefined).then((res)=>{
                const supplierOptions = [];
                // eslint-disable-next-line array-callback-return
                res.data.posibleSuppliers.map((fields)=>{
                    supplierOptions.push({
                        label: fields.supplier_company_name,
                        value: fields.id
                    });
                });
                setPossibleSupplier(supplierOptions);
            }).catch((err)=>{
                if (err.request.status === 400) {
                    setMessageError(err.response?.data?.message);
                    setShowError(true);
                }
                if (err.request.status === 500) {
                    setMessageError("There's been an error. Please try again later.");
                    setShowError(true);
                }
            });
        } else if (_consts_user_create_ui__WEBPACK_IMPORTED_MODULE_3__/* .USER_ROLE_MSP.includes */ .Ht.includes(userRole)) {
            setShowSupplier(false);
            setShowBuyer(true);
            setMultipleBuyer(true);
            userServices.getPosibleSelectionsCreateUsersBuyers(userRole, undefined, undefined).then((res)=>{
                const buyerOptions = [];
                // eslint-disable-next-line array-callback-return
                res.data.posibleBuyers.map((fields)=>{
                    buyerOptions.push({
                        label: fields.client_company_name,
                        value: fields.id
                    });
                });
                setpossibleBuyers(buyerOptions);
            }).catch((err)=>{
                if (err.request.status === 400) {
                    setMessageError(err.response?.data?.message);
                    setShowError(true);
                }
                if (err.request.status === 500) {
                    setMessageError("There's been an error. Please try again later.");
                    setShowError(true);
                }
            });
        } else if (_consts_user_create_ui__WEBPACK_IMPORTED_MODULE_3__/* .USER_ROLE_MSP_EXCEPTIONS.includes */ .Qg.includes(userRole)) {
            setShowSupplier(false);
            setShowBuyer(false);
            setMultipleBuyer(false);
            setShowUserData(true);
        } else if (_consts_user_create_ui__WEBPACK_IMPORTED_MODULE_3__/* .USER_ROLE_BUYER.includes */ .aD.includes(userRole)) {
            setShowSupplier(false);
            setShowBuyer(true);
            setMultipleBuyer(false);
            userServices.getPosibleSelectionsCreateUsersBuyers(userRole, undefined, undefined).then((res)=>{
                const buyerOptions = [];
                // eslint-disable-next-line array-callback-return
                res.data.posibleBuyers.map((fields)=>{
                    buyerOptions.push({
                        label: fields.client_company_name,
                        value: fields.id
                    });
                });
                setpossibleBuyers(buyerOptions);
            }).catch((err)=>{
                if (err.request.status === 400) {
                    setMessageError(err.response?.data?.message);
                    setShowError(true);
                }
                if (err.request.status === 500) {
                    setMessageError("There's been an error. Please try again later.");
                    setShowError(true);
                }
            });
        }
        setUserRole(userRole);
    };
    const onSelectSupplier = async (selectedSupplier)=>{
        await userServices.getPosibleSelectionsCreateUsersBuyers(userRole, undefined, selectedSupplier).then((res)=>{
            // setData(res);
            const buyerOptions = [];
            // eslint-disable-next-line array-callback-return
            res.data.posibleBuyers.map((fields)=>{
                buyerOptions.push({
                    label: fields.client_company_name,
                    value: fields.id
                });
            });
            setpossibleBuyers(buyerOptions);
            setShowBuyer(true);
        }).catch((err)=>{
            if (err.request.status === 400) {
                setMessageError(err.response?.data?.message);
                setShowError(true);
            }
            if (err.request.status === 500) {
                setMessageError("There's been an error. Please try again later.");
                setShowError(true);
            }
        });
    };
    const onSelectBuyer = async (selectedBuyer)=>{
        setShowUserData(!!selectedBuyer);
    };
    return {
        onSelectRole,
        onSelectSupplier,
        onSelectBuyer,
        setShowError,
        setMessageError,
        showError,
        multipleBuyer,
        showBuyer,
        showSupplier,
        showUserData,
        messageError,
        possibleSupplier,
        possibleBuyers
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSetUserForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 37806:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _infrastructure_services_UserServices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34613);
/* harmony import */ var _locales_en_en_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89235);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_infrastructure_services_UserServices__WEBPACK_IMPORTED_MODULE_3__]);
_infrastructure_services_UserServices__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





// %%%%%%%%%%  useful functions to render the title and items of the select
const renderItem = (title, id)=>({
        id,
        label: title,
        value: title
    });
const renderTitle = (title)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        children: title
    });
// fetching user data
const userServices = new _infrastructure_services_UserServices__WEBPACK_IMPORTED_MODULE_3__/* .UserServices */ .c((next_router__WEBPACK_IMPORTED_MODULE_1___default()));
const useSetUserRole = ()=>{
    const { 0: dataRoles , 1: setDataRoles  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});
    const { 0: roles , 1: setRoles  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([
        {}
    ]);
    // get the roles to create a user
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        userServices.userRolesToCreate().then((res)=>{
            setDataRoles(res);
        });
    }, []);
    // map roles data into
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (dataRoles) {
            let roleOptions = [];
            if (dataRoles[_locales_en_en_json__WEBPACK_IMPORTED_MODULE_4__.users.data_roles.buyer]) {
                const options = dataRoles[_locales_en_en_json__WEBPACK_IMPORTED_MODULE_4__.users.data_roles.buyer].map((roleItem)=>{
                    return renderItem(roleItem, roleItem);
                });
                roleOptions = [
                    ...roleOptions,
                    {
                        label: renderTitle(_locales_en_en_json__WEBPACK_IMPORTED_MODULE_4__.users.data_roles.buyer),
                        options
                    }, 
                ];
            }
            if (dataRoles[_locales_en_en_json__WEBPACK_IMPORTED_MODULE_4__.users.data_roles.msp]) {
                const options1 = dataRoles[_locales_en_en_json__WEBPACK_IMPORTED_MODULE_4__.users.data_roles.msp].map((roleItem)=>{
                    return renderItem(roleItem, roleItem);
                });
                roleOptions = [
                    ...roleOptions,
                    {
                        label: renderTitle(_locales_en_en_json__WEBPACK_IMPORTED_MODULE_4__.users.data_roles.msp),
                        options: options1
                    }, 
                ];
            }
            if (dataRoles[_locales_en_en_json__WEBPACK_IMPORTED_MODULE_4__.users.data_roles.supplier]) {
                const options2 = dataRoles[_locales_en_en_json__WEBPACK_IMPORTED_MODULE_4__.users.data_roles.supplier].map((roleItem)=>{
                    return renderItem(roleItem, roleItem);
                });
                roleOptions = [
                    ...roleOptions,
                    {
                        label: renderTitle(_locales_en_en_json__WEBPACK_IMPORTED_MODULE_4__.users.data_roles.supplier),
                        options: options2
                    }, 
                ];
            }
            if (dataRoles[_locales_en_en_json__WEBPACK_IMPORTED_MODULE_4__.users.data_roles.global]) {
                const options3 = dataRoles[_locales_en_en_json__WEBPACK_IMPORTED_MODULE_4__.users.data_roles.global].map((roleItem)=>{
                    return renderItem(roleItem, roleItem);
                });
                roleOptions = [
                    ...roleOptions,
                    {
                        label: renderTitle(_locales_en_en_json__WEBPACK_IMPORTED_MODULE_4__.users.data_roles.global),
                        options: options3
                    }, 
                ];
            }
            setRoles(roleOptions);
        }
    }, [
        dataRoles
    ]);
    return {
        roles
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSetUserRole);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 48522:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EI": () => (/* binding */ PASSWORDS_VALIDATION_REGEX),
/* harmony export */   "HI": () => (/* binding */ INPUT_NUMBER_PARSER_REGEX),
/* harmony export */   "JK": () => (/* binding */ customFormatDate),
/* harmony export */   "bF": () => (/* binding */ EMAIL_VALIDATION_REGEX),
/* harmony export */   "p6": () => (/* binding */ formatDate),
/* harmony export */   "pz": () => (/* binding */ shortDateFormat)
/* harmony export */ });
/* eslint-disable no-useless-escape */ const EMAIL_VALIDATION_REGEX = /^(?!.*\.\.)\w+([\w.'!#$%&*+\/=?^`{|}~-])*\w+@(\w+\.)+\w{2,8}$/;
const INPUT_NUMBER_PARSER_REGEX = /\D/g;
const PASSWORDS_VALIDATION_REGEX = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[\W_]).{3,}$/;
const formatDate = "YYYY-MM-DD";
const customFormatDate = "YYYY-MM-DDTHH:mm:ss.SSSZ";
const shortDateFormat = "MM/DD/YYYY";


/***/ })

};
;