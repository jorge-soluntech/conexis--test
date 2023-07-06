exports.id = 6506;
exports.ids = [6506];
exports.modules = {

/***/ 49069:
/***/ ((module) => {

// Exports
module.exports = {
	"form_create": "CreateAttachments_form_create__LM65b",
	"form_subtitle_container": "CreateAttachments_form_subtitle_container__63_rc",
	"form_small_title": "CreateAttachments_form_small_title__pU50U",
	"add_attachment": "CreateAttachments_add_attachment__6fFS4",
	"continue_button": "CreateAttachments_continue_button__1f2_q",
	"moveToRight": "CreateAttachments_moveToRight__owNnF"
};


/***/ }),

/***/ 68767:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "ListAndEditAttachments_card__FONhV",
	"table_wrapper": "ListAndEditAttachments_table_wrapper__4MgxF",
	"table": "ListAndEditAttachments_table__bVLxi",
	"headerTable": "ListAndEditAttachments_headerTable__Pd_Qd",
	"columnTable": "ListAndEditAttachments_columnTable__Gu_dv",
	"attachment": "ListAndEditAttachments_attachment__pRgvc",
	"on_back": "ListAndEditAttachments_on_back__szF2G",
	"form_subtitle_container": "ListAndEditAttachments_form_subtitle_container__tzzQj",
	"form_small_title": "ListAndEditAttachments_form_small_title__QKJnE",
	"column_paragraph": "ListAndEditAttachments_column_paragraph__Nj_jl",
	"add_attachment": "ListAndEditAttachments_add_attachment__vhk29",
	"buttons": "ListAndEditAttachments_buttons__YjETO",
	"back_add_attachment": "ListAndEditAttachments_back_add_attachment__X5qck",
	"moveToRight": "ListAndEditAttachments_moveToRight__9T8ep"
};


/***/ }),

/***/ 24648:
/***/ ((module) => {

// Exports
module.exports = {
	"row": "FormAddAttachment_row__gJ8pV",
	"label": "FormAddAttachment_label__kiq51",
	"show_attachment": "FormAddAttachment_show_attachment__UB98Y",
	"form_clear_fields": "FormAddAttachment_form_clear_fields__SGlWQ",
	"continue_button": "FormAddAttachment_continue_button__ScCWD",
	"attachment_wrapper": "FormAddAttachment_attachment_wrapper__iX7DN",
	"new_attachment": "FormAddAttachment_new_attachment__tGEi8",
	"title_attachment": "FormAddAttachment_title_attachment__IRaTy",
	"text_attachment": "FormAddAttachment_text_attachment__8CGZV",
	"moveToRight": "FormAddAttachment_moveToRight__TONFP"
};


/***/ }),

/***/ 23485:
/***/ ((module) => {

// Exports
module.exports = {
	"form_container": "MultiStep_form_container__DEkT4",
	"form_container__title": "MultiStep_form_container__title__VPMyi",
	"steps": "MultiStep_steps__OYgrn",
	"moveToRight": "MultiStep_moveToRight__3wr1H"
};


/***/ }),

/***/ 86570:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_common_alertComponent_AlertMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72017);
/* harmony import */ var _components_designSystem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88776);
/* harmony import */ var _CreateAttachments_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(49069);
/* harmony import */ var _CreateAttachments_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_CreateAttachments_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _formAddAttachment_FormAddAttachment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44434);
/* harmony import */ var _useCreateAttachments__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16119);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_formAddAttachment_FormAddAttachment__WEBPACK_IMPORTED_MODULE_4__, _useCreateAttachments__WEBPACK_IMPORTED_MODULE_5__]);
([_formAddAttachment_FormAddAttachment__WEBPACK_IMPORTED_MODULE_4__, _useCreateAttachments__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const PLUS_ICON = "/assets/icons/plus_icon.svg";
/**
 * CreateAttachments component displays a form to input Attachments.
 * This component uses useCreateAttachments hook to manage form data and validation.
 *
 * @returns the CreateAttachments form - step 4 for suppliers or buyers depending the dashboard prop
 */ const CreateAttachments = ({ dashboard  })=>{
    const { onBack , errors , setErrors , isLoading , showError , setShowError , attachments , setAttachments , isNewAttachment , setIsNewAttachment , handleContinue , buyerOptions ,  } = (0,_useCreateAttachments__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({
        dashboard
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_designSystem__WEBPACK_IMPORTED_MODULE_3__/* .Card */ .Zb, {
            className: (_CreateAttachments_module_scss__WEBPACK_IMPORTED_MODULE_6___default().form_create),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    showError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_alertComponent_AlertMessage__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        message: errors[Object.keys(errors)[0]],
                        afterClose: ()=>setShowError(false)
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_designSystem__WEBPACK_IMPORTED_MODULE_3__/* .Form */ .l0, {
                        scrollToFirstError: true,
                        name: "Attachments",
                        onFinish: handleContinue,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_CreateAttachments_module_scss__WEBPACK_IMPORTED_MODULE_6___default().form_subtitle_container),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_CreateAttachments_module_scss__WEBPACK_IMPORTED_MODULE_6___default().form_small_title),
                                    children: [
                                        "Attachments ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: " (optional)"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_formAddAttachment_FormAddAttachment__WEBPACK_IMPORTED_MODULE_4__/* .FormAddAttachment */ .d, {
                                errors: errors,
                                setErrors: setErrors,
                                setShowError: setShowError,
                                attachments: attachments,
                                setAttachments: setAttachments,
                                isNewAttachment: isNewAttachment,
                                setIsNewAttachment: setIsNewAttachment,
                                dashboard: dashboard,
                                buyerOptions: buyerOptions
                            }),
                            attachments.length > 0 && !isNewAttachment && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: (_CreateAttachments_module_scss__WEBPACK_IMPORTED_MODULE_6___default().add_attachment),
                                onClick: ()=>setIsNewAttachment(true),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        alt: "plus",
                                        width: 12,
                                        height: 12,
                                        src: PLUS_ICON
                                    }),
                                    "Add another attachment"
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_CreateAttachments_module_scss__WEBPACK_IMPORTED_MODULE_6___default().continue_button),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_designSystem__WEBPACK_IMPORTED_MODULE_3__/* .Button */ .zx, {
                                        type: "default",
                                        onClick: onBack,
                                        children: "Back"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_designSystem__WEBPACK_IMPORTED_MODULE_3__/* .Button */ .zx, {
                                        size: "large",
                                        type: "primary",
                                        htmlType: "submit",
                                        loading: isLoading,
                                        children: "Submit"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateAttachments);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9999:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_common_alertComponent_AlertMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(72017);
/* harmony import */ var _utils_sorterTable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20720);
/* harmony import */ var _formAddAttachment_FormAddAttachment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(44434);
/* harmony import */ var _ListAndEditAttachments_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(68767);
/* harmony import */ var _ListAndEditAttachments_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ListAndEditAttachments_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _useEditAttachments__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(59766);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_formAddAttachment_FormAddAttachment__WEBPACK_IMPORTED_MODULE_6__, _useEditAttachments__WEBPACK_IMPORTED_MODULE_7__]);
([_formAddAttachment_FormAddAttachment__WEBPACK_IMPORTED_MODULE_6__, _useEditAttachments__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const PLUS_ICON = "/assets/icons/plus_icon.svg";
const ATTACHMENT_ROW_ICON = "/assets/icons/attachmentRow.svg";
/**
 * Displays a table of existing attachments and allows the user to add another attachment.
 *
 * @returns A React component that renders a card containing a table of existing attachments
 * an option to add another attachment, and buttons to go back or submit changes.
 */ const EditAttachments = ({ dashboard  })=>{
    const { onBack , errors , isLoading , setErrors , showError , setShowError , isNewAttachment , setIsNewAttachment , existingAttachments , handleContinue , viewListAttachments , setViewListAttachments , newAttachment , setNewAttachment , validateNewAttachment , buyerOptions , downloadS3File ,  } = (0,_useEditAttachments__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)({
        dashboard
    });
    const columns = [
        {
            title: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: (_ListAndEditAttachments_module_scss__WEBPACK_IMPORTED_MODULE_8___default().headerTable),
                    children: "File"
                }),
            dataIndex: "original_name",
            className: (_ListAndEditAttachments_module_scss__WEBPACK_IMPORTED_MODULE_8___default().columnTable),
            sorter: (a, b, sortOrder)=>(0,_utils_sorterTable__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(a, b, "original_name", sortOrder),
            render: (_value, record)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_ListAndEditAttachments_module_scss__WEBPACK_IMPORTED_MODULE_8___default().attachment),
                    onClick: ()=>downloadS3File(record),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                            width: 40,
                            height: 40,
                            alt: "attachment",
                            src: ATTACHMENT_ROW_ICON
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: record.original_name
                        })
                    ]
                })
        },
        {
            title: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: (_ListAndEditAttachments_module_scss__WEBPACK_IMPORTED_MODULE_8___default().headerTable),
                    children: "Name"
                }),
            dataIndex: "name",
            className: (_ListAndEditAttachments_module_scss__WEBPACK_IMPORTED_MODULE_8___default().columnTable),
            sorter: (a, b, sortOrder)=>(0,_utils_sorterTable__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(a, b, "name", sortOrder),
            render: (_value, record)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: (_ListAndEditAttachments_module_scss__WEBPACK_IMPORTED_MODULE_8___default().column_paragraph),
                    children: record.name
                })
        },
        {
            title: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: (_ListAndEditAttachments_module_scss__WEBPACK_IMPORTED_MODULE_8___default().headerTable),
                    children: "Type of document"
                }),
            dataIndex: "type",
            className: (_ListAndEditAttachments_module_scss__WEBPACK_IMPORTED_MODULE_8___default().columnTable),
            sorter: (a, b, sortOrder)=>(0,_utils_sorterTable__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(a, b, "type", sortOrder),
            render: (_value, record)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: (_ListAndEditAttachments_module_scss__WEBPACK_IMPORTED_MODULE_8___default().column_paragraph),
                    children: record.type
                })
        },
        {
            title: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: (_ListAndEditAttachments_module_scss__WEBPACK_IMPORTED_MODULE_8___default().headerTable),
                    children: "Expiry date"
                }),
            dataIndex: "expiry_date",
            className: (_ListAndEditAttachments_module_scss__WEBPACK_IMPORTED_MODULE_8___default().columnTable),
            sorter: (a, b, sortOrder)=>(0,_utils_sorterTable__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(a, b, "expiry_date", sortOrder),
            render: (_value, record)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: (_ListAndEditAttachments_module_scss__WEBPACK_IMPORTED_MODULE_8___default().column_paragraph),
                    children: record?.expiry_date ? dayjs__WEBPACK_IMPORTED_MODULE_3___default()(record.expiry_date).format("DD MMM YYYY") : ""
                })
        }, 
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Card, {
            className: (_ListAndEditAttachments_module_scss__WEBPACK_IMPORTED_MODULE_8___default().card),
            children: [
                showError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_alertComponent_AlertMessage__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    message: errors[Object.keys(errors)[0]],
                    afterClose: ()=>setShowError(false)
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Form, {
                    scrollToFirstError: true,
                    name: "Attachments",
                    onFinish: handleContinue,
                    children: viewListAttachments ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_ListAndEditAttachments_module_scss__WEBPACK_IMPORTED_MODULE_8___default().table_wrapper),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Table, {
                                    columns: columns,
                                    pagination: false,
                                    className: (_ListAndEditAttachments_module_scss__WEBPACK_IMPORTED_MODULE_8___default().table),
                                    dataSource: existingAttachments
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: (_ListAndEditAttachments_module_scss__WEBPACK_IMPORTED_MODULE_8___default().add_attachment),
                                onClick: ()=>{
                                    setViewListAttachments(false);
                                    setIsNewAttachment(true);
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        alt: "plus",
                                        width: 12,
                                        height: 12,
                                        src: PLUS_ICON
                                    }),
                                    "Add another attachment"
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_ListAndEditAttachments_module_scss__WEBPACK_IMPORTED_MODULE_8___default().buttons),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                        type: "default",
                                        onClick: onBack,
                                        children: "Back"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                        size: "large",
                                        type: "primary",
                                        htmlType: "submit",
                                        loading: isLoading,
                                        children: "Submit"
                                    })
                                ]
                            })
                        ]
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_ListAndEditAttachments_module_scss__WEBPACK_IMPORTED_MODULE_8___default().on_back),
                                onClick: ()=>{
                                    setShowError(false);
                                    setViewListAttachments(true);
                                    setNewAttachment([]);
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__.LeftOutlined, {}),
                                    "\xa0 Go back to attachments"
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_ListAndEditAttachments_module_scss__WEBPACK_IMPORTED_MODULE_8___default().form_subtitle_container),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_ListAndEditAttachments_module_scss__WEBPACK_IMPORTED_MODULE_8___default().form_small_title),
                                    children: "Add new attachment"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_formAddAttachment_FormAddAttachment__WEBPACK_IMPORTED_MODULE_6__/* .FormAddAttachment */ .d, {
                                errors: errors,
                                setErrors: setErrors,
                                setShowError: setShowError,
                                attachments: newAttachment,
                                setAttachments: setNewAttachment,
                                isNewAttachment: isNewAttachment,
                                setIsNewAttachment: setIsNewAttachment,
                                buyerOptions: buyerOptions,
                                dashboard: dashboard
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_ListAndEditAttachments_module_scss__WEBPACK_IMPORTED_MODULE_8___default().back_add_attachment),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                    size: "large",
                                    type: "primary",
                                    loading: isLoading,
                                    onClick: validateNewAttachment,
                                    children: "Submit"
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditAttachments);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 59766:
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
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46555);
/* harmony import */ var _components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89480);
/* harmony import */ var _components_hooks_useAttachments_useAttachments__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62360);
/* harmony import */ var _consts_permissions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(62633);
/* harmony import */ var _consts_suppliers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39005);
/* harmony import */ var _infrastructure_services_utilsServices__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17632);
/* harmony import */ var _formAddAttachment_UseFormAddAttachment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(28916);
/* harmony import */ var _useEdit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(68520);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_2__, _components_hooks_useAttachments_useAttachments__WEBPACK_IMPORTED_MODULE_4__, _infrastructure_services_utilsServices__WEBPACK_IMPORTED_MODULE_7__, _formAddAttachment_UseFormAddAttachment__WEBPACK_IMPORTED_MODULE_8__, _useEdit__WEBPACK_IMPORTED_MODULE_9__]);
([uuid__WEBPACK_IMPORTED_MODULE_2__, _components_hooks_useAttachments_useAttachments__WEBPACK_IMPORTED_MODULE_4__, _infrastructure_services_utilsServices__WEBPACK_IMPORTED_MODULE_7__, _formAddAttachment_UseFormAddAttachment__WEBPACK_IMPORTED_MODULE_8__, _useEdit__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










/** Hook used in the suppliers and buyers dashboard to handle the logic of the fourth step */ const useEditAttachments = ({ dashboard  })=>{
    const dispatch = (0,_components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_3__/* .useAppDispatch */ .T)();
    const { editRecord , setDashboardStep , clearDashboardData , setDataDashboard , buyerOptions , dataAttachments , existingAttachments , setListAttachments , dashboardData , isLoading , setIsLoading ,  } = (0,_useEdit__WEBPACK_IMPORTED_MODULE_9__/* .useEdit */ .A)({
        dashboard
    });
    const { 0: showError , 1: setShowError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: errors , 1: setErrors  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const { 0: isNewAttachment , 1: setIsNewAttachment  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: viewListAttachments , 1: setViewListAttachments  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { 0: attachments , 1: setAttachments  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(dataAttachments);
    const { 0: newAttachment , 1: setNewAttachment  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { validateAttachments  } = (0,_formAddAttachment_UseFormAddAttachment__WEBPACK_IMPORTED_MODULE_8__/* .useFormAddAttachments */ .V)({
        setErrors,
        setShowError,
        attachments: newAttachment,
        setAttachments: setNewAttachment,
        setIsNewAttachment,
        dashboard
    });
    const downloadS3File = async (file)=>{
        try {
            await _infrastructure_services_utilsServices__WEBPACK_IMPORTED_MODULE_7__/* .UtilServices.downloadS3File */ .$.downloadS3File({
                id: file.file,
                name: file.name
            }, (next_router__WEBPACK_IMPORTED_MODULE_0___default()));
        } catch (error) {
            setErrors({
                downloadFile: "There's been an error. Please try again later."
            });
            setShowError(true);
        }
    };
    const onBack = ()=>{
        dispatch(setDashboardStep(_consts_suppliers__WEBPACK_IMPORTED_MODULE_6__/* .DASHBOARD_STEPS.stepThree */ .Lq.stepThree));
        dispatch(setDataDashboard({
            ...dashboardData,
            attachments
        }));
    };
    const { updateS3File  } = (0,_components_hooks_useAttachments_useAttachments__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const uploadAttachment = ()=>{
        setIsLoading(true);
        const uploadAtachmentsInParallel = newAttachment.filter((attachments)=>attachments !== undefined).map(async (attachment)=>{
            await updateS3File({
                url: attachment.url,
                originFileObj: attachment.file.originFileObj,
                type: attachment.file.type
            });
            const uploadedAttachment = {
                name: attachment.name,
                file: attachment.path,
                type: attachment.type,
                original_name: attachment.file.name,
                expiry_date: attachment.expiryDate
            };
            if (dashboard === _consts_permissions__WEBPACK_IMPORTED_MODULE_5__/* .DASHBOARDTYPES.supplier */ .j2.supplier) {
                uploadedAttachment.buyer_id = attachment.buyer;
            }
            return uploadedAttachment;
        });
        return Promise.all(uploadAtachmentsInParallel);
    };
    const validateNewAttachment = async ()=>{
        const hasError = validateAttachments();
        if (hasError) {
            setShowError(true);
            setViewListAttachments(false);
        } else {
            setAttachments((prev)=>[
                    ...prev || [],
                    newAttachment[0], 
                ]);
            const attachmentToAdd = newAttachment.map((attachment)=>({
                    key: (0,uuid__WEBPACK_IMPORTED_MODULE_2__.v4)(),
                    id: attachment.id,
                    file: attachment.path,
                    name: attachment.name,
                    original_name: attachment.file.name,
                    type: attachment.type,
                    expiry_date: attachment.expiryDate,
                    buyer_id: ""
                }));
            await uploadAttachment();
            setIsLoading(false);
            dispatch(setListAttachments(existingAttachments.concat(attachmentToAdd)));
            setViewListAttachments(true);
            setShowError(false);
            setNewAttachment([]);
        }
    };
    const handleContinue = ()=>{
        dispatch(setDataDashboard({
            ...dashboardData,
            attachments
        }));
        const hasError = validateAttachments();
        if (hasError) {
            setShowError(true);
            setViewListAttachments(false);
        } else {
            setShowError(false);
            editRecord({
                attachments
            }).then(()=>{
                dispatch(setDashboardStep(_consts_suppliers__WEBPACK_IMPORTED_MODULE_6__/* .DASHBOARD_STEPS.success */ .Lq.success));
                dispatch(clearDashboardData());
            }).catch((err)=>{
                setIsLoading(false);
                if (err?.request?.status === 400) {
                    setErrors({
                        invalidFile: err.response?.data?.message
                    });
                }
            });
        }
    };
    return {
        onBack,
        errors,
        isLoading,
        setErrors,
        showError,
        setShowError,
        setAttachments,
        isNewAttachment,
        setIsNewAttachment,
        existingAttachments,
        downloadS3File,
        handleContinue,
        viewListAttachments,
        setViewListAttachments,
        newAttachment,
        setNewAttachment,
        validateNewAttachment,
        buyerOptions
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useEditAttachments);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 44434:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ FormAddAttachment)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_common_uploadAttachmentComponent_UploadAttachmentComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2578);
/* harmony import */ var _consts_buyers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72496);
/* harmony import */ var _consts_permissions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(62633);
/* harmony import */ var _consts_suppliers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39005);
/* harmony import */ var _FormAddAttachment_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(24648);
/* harmony import */ var _FormAddAttachment_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_FormAddAttachment_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _UseFormAddAttachment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(28916);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_UseFormAddAttachment__WEBPACK_IMPORTED_MODULE_7__]);
_UseFormAddAttachment__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const ISO_8601_FORMAT_DATE = "YYYY-MM-DDTHH:mm:ss.SSSZ";
const FormAddAttachment = ({ errors , setErrors , setShowError , attachments , setAttachments , isNewAttachment , setIsNewAttachment , buyerOptions , dashboard  })=>{
    const { onChange , addAttachment , updateAttachment , deleteAttachment  } = (0,_UseFormAddAttachment__WEBPACK_IMPORTED_MODULE_7__/* .useFormAddAttachments */ .V)({
        setErrors,
        setShowError,
        attachments,
        setAttachments,
        setIsNewAttachment,
        dashboard
    });
    const TypeOfDocumentField = (attachment)=>{
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
            required: true,
            label: "Type of document",
            className: (_FormAddAttachment_module_scss__WEBPACK_IMPORTED_MODULE_8___default().label),
            initialValue: attachment.type,
            validateStatus: errors[`${attachment.id}_type`] ? "error" : "",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Select, {
                size: "large",
                value: attachment.type,
                maxTagCount: "responsive",
                optionFilterProp: "children",
                placeholder: "Select type of document here",
                className: "dummyClassCreateFormForBorder",
                style: {
                    width: "100%",
                    borderRight: "white"
                },
                onChange: (value)=>onChange(attachment.id, "type", value),
                options: dashboard === _consts_permissions__WEBPACK_IMPORTED_MODULE_5__/* .DASHBOARDTYPES.supplier */ .j2.supplier ? _consts_suppliers__WEBPACK_IMPORTED_MODULE_6__/* .TYPE */ .wD : _consts_buyers__WEBPACK_IMPORTED_MODULE_4__/* .TYPE */ .wD
            })
        });
    };
    const NameField = (attachment)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
            label: "Name",
            required: true,
            className: (_FormAddAttachment_module_scss__WEBPACK_IMPORTED_MODULE_8___default().label),
            initialValue: attachment.name,
            validateStatus: errors[`${attachment.id}_name`] ? "error" : "",
            rules: dashboard === _consts_permissions__WEBPACK_IMPORTED_MODULE_5__/* .DASHBOARDTYPES.supplier */ .j2.supplier ? undefined : [
                {
                    validator: async (_, value)=>{
                        if (value && value.length < 10) {
                            return Promise.reject();
                        }
                        return Promise.resolve();
                    }
                }, 
            ],
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Input, {
                type: "text",
                size: "large",
                placeholder: "Enter name here",
                value: attachment.name,
                onChange: (e)=>onChange(attachment.id, "name", e.target.value)
            })
        });
    const BuyerField = (attachment)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
            label: "Buyer",
            className: (_FormAddAttachment_module_scss__WEBPACK_IMPORTED_MODULE_8___default().label),
            validateStatus: errors[`${attachment.id}_buyer`] ? "error" : "",
            required: true,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Select, {
                size: "large",
                value: attachment.buyer,
                maxTagCount: "responsive",
                optionFilterProp: "children",
                placeholder: "Select buyer here",
                className: "dummyClassCreateFormForBorder",
                style: {
                    width: "100%",
                    borderRight: "white"
                },
                onChange: (value)=>onChange(attachment.id, "buyer", value),
                options: buyerOptions
            })
        });
    const ExpiryDateField = (attachment)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
            label: "Expiry date",
            className: (_FormAddAttachment_module_scss__WEBPACK_IMPORTED_MODULE_8___default().label),
            required: dashboard === _consts_permissions__WEBPACK_IMPORTED_MODULE_5__/* .DASHBOARDTYPES.supplier */ .j2.supplier ? attachment.type === "Supplier Agreements" || attachment.type === "COI" : attachment.type === "Client Agreement",
            validateStatus: errors[`${attachment.id}_expiryDate`] ? "error" : "",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.DatePicker, {
                placeholder: "Select expiry date here",
                defaultValue: attachment.expiryDate ? dayjs__WEBPACK_IMPORTED_MODULE_2___default()(attachment.expiryDate) : undefined,
                format: (value)=>`${dayjs__WEBPACK_IMPORTED_MODULE_2___default()(value).format("DD MMM YYYY")}`,
                onChange: (value)=>onChange(attachment.id, "expiryDate", value ? value.format(ISO_8601_FORMAT_DATE) : undefined)
            })
        });
    const UploadComponentField = (attachment)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
            label: "File",
            className: (_FormAddAttachment_module_scss__WEBPACK_IMPORTED_MODULE_8___default().label),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_uploadAttachmentComponent_UploadAttachmentComponent__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    onChange: (info)=>updateAttachment(attachment.id, info)
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: (_FormAddAttachment_module_scss__WEBPACK_IMPORTED_MODULE_8___default().show_attachment),
                    children: attachment.fileName
                })
            ]
        });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            attachments.length > 0 && attachments.map((attachment, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_FormAddAttachment_module_scss__WEBPACK_IMPORTED_MODULE_8___default().attachment_wrapper),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_FormAddAttachment_module_scss__WEBPACK_IMPORTED_MODULE_8___default().new_attachment),
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    className: (_FormAddAttachment_module_scss__WEBPACK_IMPORTED_MODULE_8___default().title_attachment),
                                    children: [
                                        "Attachment ",
                                        index + 1
                                    ]
                                }),
                                attachments.length > 0 && index !== 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: (_FormAddAttachment_module_scss__WEBPACK_IMPORTED_MODULE_8___default().text_attachment),
                                    onClick: ()=>deleteAttachment(attachment.id),
                                    children: "Delete attachment"
                                })
                            ]
                        }),
                        dashboard === _consts_permissions__WEBPACK_IMPORTED_MODULE_5__/* .DASHBOARDTYPES.supplier */ .j2.supplier && UploadComponentField(attachment),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                            className: (_FormAddAttachment_module_scss__WEBPACK_IMPORTED_MODULE_8___default().row),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                    lg: 12,
                                    sm: 24,
                                    xs: 24,
                                    md: 12,
                                    children: dashboard === _consts_permissions__WEBPACK_IMPORTED_MODULE_5__/* .DASHBOARDTYPES.supplier */ .j2.supplier ? TypeOfDocumentField(attachment) : UploadComponentField(attachment)
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                    lg: 12,
                                    sm: 24,
                                    xs: 24,
                                    md: 12,
                                    children: dashboard === _consts_permissions__WEBPACK_IMPORTED_MODULE_5__/* .DASHBOARDTYPES.supplier */ .j2.supplier ? NameField(attachment) : TypeOfDocumentField(attachment)
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                            className: (_FormAddAttachment_module_scss__WEBPACK_IMPORTED_MODULE_8___default().row),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                    lg: 12,
                                    sm: 24,
                                    xs: 24,
                                    md: 12,
                                    children: dashboard === _consts_permissions__WEBPACK_IMPORTED_MODULE_5__/* .DASHBOARDTYPES.supplier */ .j2.supplier ? BuyerField(attachment) : NameField(attachment)
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                    lg: 12,
                                    sm: 24,
                                    xs: 24,
                                    md: 12,
                                    children: ExpiryDateField(attachment)
                                })
                            ]
                        })
                    ]
                }, `ATT-${attachment.id}`)),
            isNewAttachment && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                className: (_FormAddAttachment_module_scss__WEBPACK_IMPORTED_MODULE_8___default().row),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                    xs: 24,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                        label: "File",
                        className: (_FormAddAttachment_module_scss__WEBPACK_IMPORTED_MODULE_8___default().label),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_uploadAttachmentComponent_UploadAttachmentComponent__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            onChange: addAttachment
                        })
                    })
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 28916:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ useFormAddAttachments)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46555);
/* harmony import */ var _components_hooks_useAttachments_useAttachments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62360);
/* harmony import */ var _consts_buyers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72496);
/* harmony import */ var _consts_permissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62633);
/* harmony import */ var _consts_suppliers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39005);
/* harmony import */ var _locales_en_en_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89235);
/* harmony import */ var _utils_stringUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(25690);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_0__, _components_hooks_useAttachments_useAttachments__WEBPACK_IMPORTED_MODULE_1__]);
([uuid__WEBPACK_IMPORTED_MODULE_0__, _components_hooks_useAttachments_useAttachments__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const { suppliers: { stepFour  } , formsCommon: { errors: { textErrorMandatoryEmptyFields  } ,  } ,  } = _locales_en_en_json__WEBPACK_IMPORTED_MODULE_5__;
const useFormAddAttachments = ({ setErrors , setShowError , attachments , setAttachments , setIsNewAttachment , dashboard  })=>{
    const { uploadS3File  } = (0,_components_hooks_useAttachments_useAttachments__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
    const errorUploadAttachment = (info)=>{
        setErrors({
            file: `${info.file.name} file upload failed.`
        });
        setShowError(true);
    };
    const addAttachment = async (info)=>{
        if (info.file.status === "done") {
            const response = await uploadS3File(info.file.name);
            if (!response.error) {
                setShowError(false);
                setAttachments((prev)=>[
                        ...prev || [],
                        {
                            url: response.url,
                            path: response.path,
                            file: info.file,
                            name: "",
                            type: null,
                            id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)(),
                            expiryDate: undefined,
                            fileName: info.file.name
                        }, 
                    ]);
                setIsNewAttachment(false);
            } else {
                setErrors({
                    file: (0,_utils_stringUtils__WEBPACK_IMPORTED_MODULE_6__.capitalizeString)(response.message)
                });
                setShowError(true);
            }
        } else if (info.file.status === "error") {
            errorUploadAttachment(info);
        }
    };
    const updateAttachment = async (id, info)=>{
        if (info.file.status === "done") {
            const response = await uploadS3File(info.file.name);
            if (!response.error) {
                setShowError(false);
                setAttachments((prevState)=>prevState.map((attachment)=>{
                        if (attachment.id === id) {
                            return {
                                ...attachment,
                                url: response.url,
                                path: response.path,
                                file: info.file,
                                fileName: info.file.name
                            };
                        }
                        return attachment;
                    }));
                setIsNewAttachment(false);
            } else {
                setErrors({
                    file: response.message
                });
                setShowError(true);
            }
        } else if (info.file.status === "error") {
            errorUploadAttachment(info);
        }
    };
    const deleteAttachment = (id)=>{
        const newAttachments = attachments.filter((attachment)=>attachment.id !== id);
        setAttachments(newAttachments);
    };
    const onChange = (id, field, value)=>{
        setAttachments((prevState)=>prevState.map((attachment)=>{
                if (attachment.id === id) {
                    return {
                        ...attachment,
                        [field]: value
                    };
                }
                return attachment;
            }));
    };
    const addError = (id, field, error)=>({
            [`${id}_${field}`]: error
        });
    const validateAttachments = ()=>{
        let updatedErrors = {};
        const mandatoriesFields = Object.keys(dashboard === _consts_permissions__WEBPACK_IMPORTED_MODULE_3__/* .DASHBOARDTYPES.supplier */ .j2.supplier ? _consts_suppliers__WEBPACK_IMPORTED_MODULE_4__/* .FORM_FIELDS.stepFourth.mandatories */ .GZ.stepFourth.mandatories : _consts_buyers__WEBPACK_IMPORTED_MODULE_2__/* .FORM_FIELDS.stepFourth.mandatories */ .GZ.stepFourth.mandatories);
        const numberOfMandatoryFields = mandatoriesFields.length;
        let counter = 0;
        // attachments type can change depending the data to create a supplier
        attachments.forEach((attachment)=>{
            if (!attachment.type) {
                updatedErrors = {
                    ...updatedErrors,
                    ...addError(attachment.id, "type", stepFour.TypeOfDocumentRequired)
                };
                counter += 1;
            }
            if (!attachment.name) {
                updatedErrors = {
                    ...updatedErrors,
                    ...addError(attachment.id, "name", stepFour.nameRequired)
                };
                counter += 1;
            }
            if (dashboard === _consts_permissions__WEBPACK_IMPORTED_MODULE_3__/* .DASHBOARDTYPES.supplier */ .j2.supplier && !attachment.buyer) {
                updatedErrors = {
                    ...updatedErrors,
                    ...addError(attachment.id, "buyer", stepFour.buyerRequired)
                };
                counter += 1;
            }
            /** the expiry date field is only required when the type of document field is client agreement */ if (dashboard === _consts_permissions__WEBPACK_IMPORTED_MODULE_3__/* .DASHBOARDTYPES.supplier */ .j2.supplier && (attachment.type === "Supplier Agreements" || attachment.type === "COI") && !attachment.expiryDate) {
                const attachmentText = attachment.type === "Supplier Agreements" ? attachment.type.toLowerCase() : attachment.type;
                updatedErrors = {
                    ...updatedErrors,
                    ...addError(attachment.id, "expiryDate", `The expiry date field is mandatory for ${attachmentText}. Please make sure to fill it out before submitting the form.`)
                };
            // counter += 1;
            } else if (attachment.type === "Client Agreement" && !attachment.expiryDate) {
                updatedErrors = {
                    ...updatedErrors,
                    ...addError(attachment.id, "expiryDate", stepFour.expiryDateRequired)
                };
            // counter += 1;
            }
        });
        if (attachments.length > 0 && counter === numberOfMandatoryFields * attachments.length) {
            updatedErrors = {
                emptyRequiredFields: textErrorMandatoryEmptyFields,
                ...updatedErrors
            };
        }
        setErrors(updatedErrors);
        return Object.keys(updatedErrors).length > 0;
    };
    return {
        onChange,
        addAttachment,
        updateAttachment,
        deleteAttachment,
        validateAttachments
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7279:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ parseDashboardData)
/* harmony export */ });
/* unused harmony export parseCopyAttachments */
/* harmony import */ var _consts_permissions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62633);
/* harmony import */ var _utils_phoneFormatter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46833);


/** This function parse the logic to upload the attachments
 * and @returns a copy of the attachments
 */ const parseCopyAttachments = ({ attachments , dashboard  })=>{
    const copiedAttachments = attachments.filter((attachments)=>attachments !== undefined).map((attachment)=>{
        const uploadedAttachment = {
            name: attachment.name,
            file: attachment.path,
            type: attachment.type,
            original_name: attachment.file.name,
            expiry_date: attachment.expiryDate
        };
        if (dashboard === _consts_permissions__WEBPACK_IMPORTED_MODULE_0__/* .DASHBOARDTYPES.supplier */ .j2.supplier) {
            uploadedAttachment.buyer_id = attachment.buyer;
        }
        return uploadedAttachment;
    });
    const copyAttachments = copiedAttachments.filter((attachment)=>attachment);
    return copyAttachments;
};
/** This function parse the logic to obtain an object
 *  to edit a supplier or buyer
 */ const parseDashboardData = async ({ dashboardData , idTenant , dashboard , attachments  })=>{
    const copyAttachments = parseCopyAttachments({
        dashboard,
        attachments
    });
    if (dashboard === _consts_permissions__WEBPACK_IMPORTED_MODULE_0__/* .DASHBOARDTYPES.supplier */ .j2.supplier) {
        return {
            ...dashboardData,
            id_tenant: idTenant,
            attachments: copyAttachments,
            secondary_contact_email: dashboardData.secondary_contact_email === "" ? null : dashboardData.secondary_contact_email,
            tertiary_contact_email: dashboardData.tertiary_contact_email === "" ? null : dashboardData.tertiary_contact_email,
            accounts_receivable_contact_email: dashboardData.accounts_receivable_contact_email === "" ? null : dashboardData.accounts_receivable_contact_email,
            primary_contact_phone: (0,_utils_phoneFormatter__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(dashboardData.primary_contact_phone),
            geographic_coverage: [
                dashboardData.geographic_coverage
            ].flat(),
            diversity_certifications: [
                dashboardData.diversity_certifications
            ].flat()
        };
    }
    const dataToSend = {};
    Object.keys(dashboardData).forEach((key)=>{
        const snakeCaseKey = key.replace(/([A-Z])/g, "_$1").toLowerCase();
        dataToSend[snakeCaseKey] = dashboardData[key];
    });
    dataToSend.id_tenant = idTenant;
    dataToSend.primary_contact_email = dashboardData.primaryContactEmail === "" ? null : dashboardData.primaryContactEmail;
    dataToSend.accounts_payable_contact_email = dashboardData.accountsPayableContactEmail === "" ? null : dashboardData.accountsPayableContactEmail;
    /** the value of the bypassJobApproval and bypassSubmissionApproval fields are reversed in the database.
   * This means that if the answer to this field is "no", the database must store a True and vice versa. */ dataToSend.bypass_job_approval = !dashboardData.bypassJobApproval;
    dataToSend.bypass_submission_approval = !dashboardData.bypassSubmissionApproval;
    dataToSend.contract_approver_id = dashboardData.contractApproverId?.value;
    dataToSend.attachments = copyAttachments;
    return dataToSend;
};


/***/ }),

/***/ 71276:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ useCreate)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _application_authContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78760);
/* harmony import */ var _application_buyersSlice_buyersSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94411);
/* harmony import */ var _application_supplierSlice_supplierSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22915);
/* harmony import */ var _components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89480);
/* harmony import */ var _components_hooks_useAttachments_useAttachments__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(62360);
/* harmony import */ var _consts_permissions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(62633);
/* harmony import */ var _infrastructure_services_BuyerServices__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(70092);
/* harmony import */ var _infrastructure_services_SupplierServices__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8025);
/* harmony import */ var _utils_phoneFormatter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(46833);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_application_authContext__WEBPACK_IMPORTED_MODULE_2__, _components_hooks_useAttachments_useAttachments__WEBPACK_IMPORTED_MODULE_6__, _infrastructure_services_BuyerServices__WEBPACK_IMPORTED_MODULE_8__, _infrastructure_services_SupplierServices__WEBPACK_IMPORTED_MODULE_9__]);
([_application_authContext__WEBPACK_IMPORTED_MODULE_2__, _components_hooks_useAttachments_useAttachments__WEBPACK_IMPORTED_MODULE_6__, _infrastructure_services_BuyerServices__WEBPACK_IMPORTED_MODULE_8__, _infrastructure_services_SupplierServices__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const useCreate = ({ dashboard , attachments , setIsNewAttachment , setAttachments , setIsLoading  })=>{
    // const [form] = Form.useForm();
    const { updateS3File  } = (0,_components_hooks_useAttachments_useAttachments__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    const { idTenant , dataUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_application_authContext__WEBPACK_IMPORTED_MODULE_2__/* .AuthContext */ .Vo);
    const { dataBuyer  } = (0,_components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_5__/* .useAppSelector */ .C)((state)=>state.buyers);
    const { dataSupplier  } = (0,_components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_5__/* .useAppSelector */ .C)((state)=>state.suppliers);
    const buyerServices = new _infrastructure_services_BuyerServices__WEBPACK_IMPORTED_MODULE_8__/* .BuyerServices */ .i((next_router__WEBPACK_IMPORTED_MODULE_0___default()));
    const supplierService = new _infrastructure_services_SupplierServices__WEBPACK_IMPORTED_MODULE_9__/* .SupplierServices */ .S((next_router__WEBPACK_IMPORTED_MODULE_0___default()));
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (dataBuyer?.attachments?.length > 0) {
            setIsNewAttachment(false);
            setAttachments(dataBuyer.attachments);
        }
    }, [
        dataBuyer?.attachments,
        setAttachments,
        setIsNewAttachment
    ]);
    // useEffect(() => {
    //   form.setFieldsValue(dataSupplier);
    // }, [dataSupplier, form]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (dataSupplier?.attachments?.length > 0) {
            setIsNewAttachment(false);
            setAttachments(dataSupplier.attachments);
        }
    }, [
        dataSupplier?.attachments,
        setAttachments,
        setIsNewAttachment
    ]);
    const handleCopyAttachments = async ()=>{
        const uploadAtachmentsInParallel = attachments.map(async (attachment)=>{
            await updateS3File({
                url: attachment.url,
                originFileObj: attachment.file.originFileObj,
                type: attachment.file.type
            });
            const attachmentObj = {
                name: attachment.name,
                file: attachment.path,
                type: attachment.type,
                original_name: attachment.file.name,
                expiry_date: attachment.expiryDate
            };
            if (dashboard === _consts_permissions__WEBPACK_IMPORTED_MODULE_7__/* .DASHBOARDTYPES.supplier */ .j2.supplier) {
                attachmentObj.buyer_id = dataUser.logged_buyer;
            }
            return attachmentObj;
        });
        const copiedAttachments = await Promise.all(uploadAtachmentsInParallel);
        return copiedAttachments.filter((attachment)=>attachment);
    };
    /**
   *
   * @returns The object to send to the backend to  create buyer
   */ const handleData = async ()=>{
        const dataToSend = {};
        Object.keys(dataBuyer).forEach((key)=>{
            const snakeCaseKey = key.replace(/([A-Z])/g, "_$1").toLowerCase();
            dataToSend[snakeCaseKey] = dataBuyer[key];
        });
        dataToSend.id_tenant = idTenant;
        dataToSend.primary_contact_email = dataBuyer.primaryContactEmail === "" ? null : dataBuyer.primaryContactEmail;
        dataToSend.accounts_payable_contact_email = dataBuyer.accountsPayableContactEmail === "" ? null : dataBuyer.accountsPayableContactEmail;
        /** the value of the bypassJobApproval and bypassSubmissionApproval fields are reversed in the database.
     * This means that if the answer to this field is "no", the database must store a True and vice versa. */ dataToSend.bypass_job_approval = !dataBuyer.bypassJobApproval;
        dataToSend.bypass_submission_approval = !dataBuyer.bypassSubmissionApproval;
        dataToSend.contract_approver_id = dataBuyer.contractApproverId?.value;
        const copyAttachments = await handleCopyAttachments();
        dataToSend.attachments = copyAttachments;
        dataToSend.is_self_served = dataBuyer.isSelfServed ?? false;
        return dataToSend;
    };
    const createBuyer = async ()=>{
        setIsLoading(true);
        const dataToSend = await handleData();
        return buyerServices.createBuyer(dataToSend);
    };
    const createSupplier = async ()=>{
        setIsLoading(true);
        const copyAttachments = await handleCopyAttachments();
        return supplierService.createSupplier({
            ...dataSupplier,
            id_tenant: idTenant,
            primary_contact_email: dataSupplier.primary_contact_email === "" ? null : dataSupplier.primary_contact_email,
            attachments: copyAttachments,
            secondary_contact_email: dataSupplier.secondary_contact_email === "" ? null : dataSupplier.secondary_contact_email,
            tertiary_contact_email: dataSupplier.tertiary_contact_email === "" ? null : dataSupplier.tertiary_contact_email,
            accounts_receivable_contact_email: dataSupplier.accounts_receivable_contact_email === "" ? null : dataSupplier.accounts_receivable_contact_email,
            primary_contact_phone: (0,_utils_phoneFormatter__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(dataSupplier.primary_contact_phone),
            geographic_coverage: [
                dataSupplier.geographic_coverage
            ].flat(),
            diversity_certifications: [
                dataSupplier.diversity_certifications
            ].flat()
        });
    };
    /**
   * The buyers options depending the previus selection in the buyers information step.
   */ const buyerOptions = dataUser.permissioned_buyers.filter(({ buyer  })=>{
        return dataSupplier.associated_buyers?.includes(buyer) ?? [];
    }).map((data)=>({
            value: data.buyer,
            label: data.buyerName
        }));
    return {
        createRecord: dashboard === _consts_permissions__WEBPACK_IMPORTED_MODULE_7__/* .DASHBOARDTYPES.supplier */ .j2.supplier ? createSupplier : createBuyer,
        dataDashboard: dashboard === _consts_permissions__WEBPACK_IMPORTED_MODULE_7__/* .DASHBOARDTYPES.supplier */ .j2.supplier ? dataSupplier : dataBuyer,
        setDataDashboard: dashboard === _consts_permissions__WEBPACK_IMPORTED_MODULE_7__/* .DASHBOARDTYPES.supplier */ .j2.supplier ? _application_supplierSlice_supplierSlice__WEBPACK_IMPORTED_MODULE_4__/* .setDataSupplier */ .Bq : _application_buyersSlice_buyersSlice__WEBPACK_IMPORTED_MODULE_3__/* .setDataBuyer */ .x1,
        setDashboardStep: dashboard === _consts_permissions__WEBPACK_IMPORTED_MODULE_7__/* .DASHBOARDTYPES.supplier */ .j2.supplier ? _application_supplierSlice_supplierSlice__WEBPACK_IMPORTED_MODULE_4__/* .setStepSupplier */ .EY : _application_buyersSlice_buyersSlice__WEBPACK_IMPORTED_MODULE_3__/* .setStepBuyer */ .HQ,
        clearDashboardData: dashboard === _consts_permissions__WEBPACK_IMPORTED_MODULE_7__/* .DASHBOARDTYPES.supplier */ .j2.supplier ? _application_supplierSlice_supplierSlice__WEBPACK_IMPORTED_MODULE_4__/* .clearDataStateSupplier */ .qS : _application_buyersSlice_buyersSlice__WEBPACK_IMPORTED_MODULE_3__/* .clearDataStateBuyer */ .IG,
        dataUser,
        buyerOptions: dashboard === _consts_permissions__WEBPACK_IMPORTED_MODULE_7__/* .DASHBOARDTYPES.supplier */ .j2.supplier ? buyerOptions : []
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 16119:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89480);
/* harmony import */ var _formAddAttachment_UseFormAddAttachment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28916);
/* harmony import */ var _useCreate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71276);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_formAddAttachment_UseFormAddAttachment__WEBPACK_IMPORTED_MODULE_2__, _useCreate__WEBPACK_IMPORTED_MODULE_3__]);
([_formAddAttachment_UseFormAddAttachment__WEBPACK_IMPORTED_MODULE_2__, _useCreate__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable no-plusplus */ /* eslint-disable no-await-in-loop */ 



const useCreateAttachments = ({ dashboard  })=>{
    const dispatch = (0,_components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_1__/* .useAppDispatch */ .T)();
    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const { 0: showError , 1: setShowError  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const { 0: errors , 1: setErrors  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
    const { 0: isNewAttachment , 1: setIsNewAttachment  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
    const { 0: attachments , 1: setAttachments  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const { validateAttachments  } = (0,_formAddAttachment_UseFormAddAttachment__WEBPACK_IMPORTED_MODULE_2__/* .useFormAddAttachments */ .V)({
        setErrors,
        setShowError,
        attachments,
        setAttachments,
        setIsNewAttachment,
        dashboard
    });
    const { createRecord , dataDashboard , setDataDashboard , setDashboardStep , clearDashboardData , buyerOptions ,  } = (0,_useCreate__WEBPACK_IMPORTED_MODULE_3__/* .useCreate */ .R)({
        dashboard,
        attachments,
        setAttachments,
        setIsLoading,
        setIsNewAttachment
    });
    const onBack = ()=>{
        dispatch(setDashboardStep(2));
        dispatch(setDataDashboard({
            ...dataDashboard,
            attachments
        }));
    };
    const handleContinue = ()=>{
        dispatch(setDataDashboard({
            ...dataDashboard,
            attachments
        }));
        const hasErrors = validateAttachments();
        if (hasErrors) {
            setShowError(true);
        } else {
            setShowError(false);
            createRecord().then(()=>{
                dispatch(setDashboardStep(4));
                dispatch(clearDashboardData());
            }).catch((err)=>{
                setIsLoading(false);
                if (err?.request?.status === 400) {
                    setErrors({
                        invalidFile: err.response?.data?.message
                    });
                }
            });
        }
    };
    return {
        onBack,
        errors,
        setErrors,
        isLoading,
        showError,
        setShowError,
        attachments,
        setAttachments,
        isNewAttachment,
        setIsNewAttachment,
        handleContinue,
        buyerOptions
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useCreateAttachments);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 68520:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ useEdit)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _application_authContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78760);
/* harmony import */ var _application_buyersSlice_buyersSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94411);
/* harmony import */ var _application_supplierSlice_supplierSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22915);
/* harmony import */ var _components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89480);
/* harmony import */ var _consts_permissions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(62633);
/* harmony import */ var _infrastructure_services_BuyerServices__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(70092);
/* harmony import */ var _infrastructure_services_SupplierServices__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8025);
/* harmony import */ var _parseDashboardData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7279);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_application_authContext__WEBPACK_IMPORTED_MODULE_2__, _infrastructure_services_BuyerServices__WEBPACK_IMPORTED_MODULE_7__, _infrastructure_services_SupplierServices__WEBPACK_IMPORTED_MODULE_8__]);
([_application_authContext__WEBPACK_IMPORTED_MODULE_2__, _infrastructure_services_BuyerServices__WEBPACK_IMPORTED_MODULE_7__, _infrastructure_services_SupplierServices__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










/** This hook handle the logic to Edit buyers or suppliers and returns
 * @returns a object with the required actions depending the given dashboard
 */ const useEdit = ({ dashboard  })=>{
    const supplierServices = new _infrastructure_services_SupplierServices__WEBPACK_IMPORTED_MODULE_8__/* .SupplierServices */ .S((next_router__WEBPACK_IMPORTED_MODULE_0___default()));
    const buyerServices = new _infrastructure_services_BuyerServices__WEBPACK_IMPORTED_MODULE_7__/* .BuyerServices */ .i((next_router__WEBPACK_IMPORTED_MODULE_0___default()));
    const { idTenant , dataUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_application_authContext__WEBPACK_IMPORTED_MODULE_2__/* .AuthContext */ .Vo);
    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { supplierId , dataSupplier , listAttachments  } = (0,_components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_5__/* .useAppSelector */ .C)((state)=>state.suppliers);
    const { idEditBuyer , dataBuyer , existingAttachments  } = (0,_components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_5__/* .useAppSelector */ .C)((state)=>state.buyers);
    const dashboardData = dashboard === _consts_permissions__WEBPACK_IMPORTED_MODULE_6__/* .DASHBOARDTYPES.supplier */ .j2.supplier ? dataSupplier : dataBuyer;
    /** This function call the service to edit a supplier or a buyer */ const editRecord = async ({ attachments  })=>{
        setIsLoading(true);
        const dataToSend = await (0,_parseDashboardData__WEBPACK_IMPORTED_MODULE_9__/* .parseDashboardData */ .r)({
            dashboard,
            dashboardData,
            idTenant,
            attachments
        });
        if (dashboard === _consts_permissions__WEBPACK_IMPORTED_MODULE_6__/* .DASHBOARDTYPES.supplier */ .j2.supplier) {
            return supplierServices.editSupplier(supplierId, dataToSend);
        }
        return buyerServices.editBuyer(idEditBuyer, dataToSend);
    };
    /**
   * The buyers options depending the previus selection in the buyers information step.
   */ const buyerOptions = dataUser.permissioned_buyers.filter(({ buyer  })=>{
        return dataSupplier.associated_buyers?.includes(buyer) ?? [];
    }).map((data)=>({
            value: data.buyer,
            label: data.buyerName
        }));
    return {
        editRecord,
        isLoading,
        setIsLoading,
        setDashboardStep: dashboard === _consts_permissions__WEBPACK_IMPORTED_MODULE_6__/* .DASHBOARDTYPES.supplier */ .j2.supplier ? _application_supplierSlice_supplierSlice__WEBPACK_IMPORTED_MODULE_4__/* .setStepSupplier */ .EY : _application_buyersSlice_buyersSlice__WEBPACK_IMPORTED_MODULE_3__/* .setStepBuyer */ .HQ,
        clearDashboardData: _application_supplierSlice_supplierSlice__WEBPACK_IMPORTED_MODULE_4__/* .clearDataStateSupplier */ .qS,
        setDataDashboard: dashboard === _consts_permissions__WEBPACK_IMPORTED_MODULE_6__/* .DASHBOARDTYPES.supplier */ .j2.supplier ? _application_supplierSlice_supplierSlice__WEBPACK_IMPORTED_MODULE_4__/* .setDataSupplier */ .Bq : _application_buyersSlice_buyersSlice__WEBPACK_IMPORTED_MODULE_3__/* .setDataBuyer */ .x1,
        dataAttachments: dashboard === _consts_permissions__WEBPACK_IMPORTED_MODULE_6__/* .DASHBOARDTYPES.supplier */ .j2.supplier ? dataSupplier.attachments : dataBuyer.attachments,
        existingAttachments: dashboard === _consts_permissions__WEBPACK_IMPORTED_MODULE_6__/* .DASHBOARDTYPES.supplier */ .j2.supplier ? listAttachments : existingAttachments,
        buyerOptions: dashboard === _consts_permissions__WEBPACK_IMPORTED_MODULE_6__/* .DASHBOARDTYPES.supplier */ .j2.supplier ? buyerOptions : [],
        setListAttachments: dashboard === _consts_permissions__WEBPACK_IMPORTED_MODULE_6__/* .DASHBOARDTYPES.supplier */ .j2.supplier ? _application_supplierSlice_supplierSlice__WEBPACK_IMPORTED_MODULE_4__/* .setListAttachments */ .Ld : _application_buyersSlice_buyersSlice__WEBPACK_IMPORTED_MODULE_3__/* .setExistingAttachments */ .$w,
        dashboardData
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 94996:
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
/* harmony import */ var _components_common_successComponent_SuccessComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3404);
/* harmony import */ var _components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89480);
/* harmony import */ var _consts_permissions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(62633);
/* harmony import */ var _MultiStep_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23485);
/* harmony import */ var _MultiStep_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_MultiStep_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* eslint-disable array-callback-return */ 






const { Title  } = antd__WEBPACK_IMPORTED_MODULE_1__.Typography;
const { Content  } = antd__WEBPACK_IMPORTED_MODULE_1__.Layout;
/**
 * A form used to create a buyer.
 *
 * @param titleForm - The string of title form
 * @param setStep,
 * @param clearDataState,
 * @param dashboard,
 * @param stepProgressComponent,
 * @param stepsComponents,
 * @param currentStep,
 * @returns The form to create buyers
 */ const MultiStepComponent = ({ titleForm , setStep , clearDataState , dashboard , stepProgressComponent , stepsComponents , currentStep ,  })=>{
    const dispatch = (0,_components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_4__/* .useAppDispatch */ .T)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        dispatch(setStep(0));
        return ()=>{
            dispatch(clearDataState());
        };
    }, [
        clearDataState,
        dispatch,
        setStep
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Content, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_MultiStep_module_scss__WEBPACK_IMPORTED_MODULE_6___default().form_container),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
                    className: (_MultiStep_module_scss__WEBPACK_IMPORTED_MODULE_6___default().form_container__title),
                    level: 2,
                    children: titleForm
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Steps, {
                    responsive: false,
                    current: currentStep,
                    className: `${(_MultiStep_module_scss__WEBPACK_IMPORTED_MODULE_6___default().steps)} ${dashboard === _consts_permissions__WEBPACK_IMPORTED_MODULE_5__/* .DASHBOARDTYPES.supplier */ .j2.supplier ? "supplier_steps" : ""}`,
                    items: stepProgressComponent
                }),
                stepsComponents.length > 0 && stepsComponents.map((step)=>step.step === currentStep && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
                        children: step.component
                    }, `${dashboard}_step_${step.step}`)),
                currentStep === stepsComponents.length && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_successComponent_SuccessComponent__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    textButton: `Go back to ${dashboard}`,
                    route: `/home/${dashboard}`,
                    title: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            dashboard.charAt(0).toUpperCase() + dashboard.slice(1),
                            " has been successfully ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            " submitted."
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MultiStepComponent);


/***/ }),

/***/ 39005:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ft": () => (/* binding */ SUPPLIER_STATUS),
/* harmony export */   "G1": () => (/* binding */ NON_RESIDENT_SUPPLIER),
/* harmony export */   "GZ": () => (/* binding */ FORM_FIELDS),
/* harmony export */   "Lq": () => (/* binding */ DASHBOARD_STEPS),
/* harmony export */   "Oc": () => (/* binding */ DIVERSITY_CERTIFICATIONS),
/* harmony export */   "ay": () => (/* binding */ WORK_CATEGORIES_COVERED),
/* harmony export */   "p2": () => (/* binding */ GEOGRAPHIC_COVERAGE),
/* harmony export */   "rj": () => (/* binding */ STEPS_CREATE_SUPPLIER),
/* harmony export */   "wD": () => (/* binding */ TYPE)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _locales_en_en_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89235);


const { suppliers: { stepOne , stepTwo , stepThree , stepFour  } , consts: { supplierStatus , workCategoriesCovered , nonResidentSupplier  } ,  } = _locales_en_en_json__WEBPACK_IMPORTED_MODULE_1__;
const STEPS_CREATE_SUPPLIER = [
    {
        title: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            style: {
                lineHeight: "16px",
                width: "67px"
            },
            children: stepOne.title
        })
    },
    {
        title: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            style: {
                lineHeight: "16px",
                width: "58px"
            },
            children: stepTwo.title
        })
    },
    {
        title: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            style: {
                lineHeight: "16px",
                width: "67px"
            },
            children: stepThree.title
        })
    },
    {
        title: stepFour.title
    }, 
];
const GEOGRAPHIC_COVERAGE = [
    {
        label: "Ontario",
        value: "Ontario"
    },
    {
        label: "Quebec",
        value: "Quebec"
    },
    {
        label: "Maritimes",
        value: "Maritimes"
    },
    {
        label: "Manitoba",
        value: "Manitoba"
    },
    {
        label: "Saskatchewan",
        value: "Saskatchewan"
    },
    {
        label: "Alberta",
        value: "Alberta"
    },
    {
        label: "BC",
        value: "BC"
    },
    {
        label: "Yukon",
        value: "Yukon"
    },
    {
        label: "NWT",
        value: "NWT"
    },
    {
        label: "Nunuvat",
        value: "Nunuvat"
    },
    {
        label: "Canada",
        value: "Canada"
    },
    {
        label: "US North East",
        value: "US North East"
    },
    {
        label: "US South East",
        value: "US South East"
    },
    {
        label: "US Midwest",
        value: "US Midwest"
    },
    {
        label: "US South West",
        value: "US South West"
    }, 
];
const WORK_CATEGORIES_COVERED = [
    {
        label: workCategoriesCovered.itGeneralist,
        value: "Information Technology - Generalist"
    },
    {
        label: workCategoriesCovered.itDigital,
        value: "IT - Digital"
    },
    {
        label: workCategoriesCovered.itDataScience,
        value: "IT - Data Science (AI/Machine Learning)"
    },
    {
        label: workCategoriesCovered.administrative,
        value: "Administrative"
    },
    {
        label: workCategoriesCovered.lightIndustrial,
        value: "Light Industrial"
    },
    {
        label: workCategoriesCovered.engineering,
        value: "Engineering"
    },
    {
        label: workCategoriesCovered.financial,
        value: "Financial"
    },
    {
        label: workCategoriesCovered.salesMarketing,
        value: "Sales/Marketing"
    },
    {
        label: workCategoriesCovered.scientific,
        value: "Scientific"
    },
    {
        label: workCategoriesCovered.other,
        value: "Other"
    }, 
];
const SUPPLIER_STATUS = [
    {
        label: supplierStatus.supplierAdvised,
        value: "1. Supplier Advised & Reviewing Documents"
    },
    {
        label: supplierStatus.negotiation,
        value: "2.Negotiation - Redlines Received from Supplier"
    },
    {
        label: supplierStatus.contracting,
        value: "3. Contracting - Awaiting signed contract back"
    },
    {
        label: supplierStatus.contractSigned,
        value: "4. Contract Signed - Awaiting Compliance Docs"
    },
    {
        label: supplierStatus.signedActive,
        value: "5. Signed - Active"
    },
    {
        label: supplierStatus.signedInactive,
        value: "6. Signed - Inactive"
    },
    {
        label: supplierStatus.cancelled,
        value: "7. Cancelled"
    },
    {
        label: supplierStatus.onHold,
        value: "8. On Hold"
    }, 
];
const NON_RESIDENT_SUPPLIER = [
    {
        label: nonResidentSupplier.yes,
        value: true
    },
    {
        label: nonResidentSupplier.no,
        value: false
    }, 
];
const DIVERSITY_CERTIFICATIONS = [
    {
        label: "WBE Canada",
        value: "WBE Canada"
    },
    {
        label: "(CAB) Canadian Aboriginal Business",
        value: "(CAB) Canadian Aboriginal Business"
    },
    {
        label: "CAMSC",
        value: "CAMSC"
    },
    {
        label: "Supplier Diversity Canada",
        value: "Supplier Diversity Canada"
    },
    {
        label: "WeConnect",
        value: "WeConnect"
    },
    {
        label: "WBENC",
        value: "WBENC"
    },
    {
        label: "SBA",
        value: "SBA"
    },
    {
        label: "DBE",
        value: "DBE"
    },
    {
        label: "Veteran Owned Certified Business",
        value: "Veteran Owned Certified Business"
    },
    {
        label: "NMSDC",
        value: "NMSDC"
    }, 
];
const TYPE = [
    {
        label: "Supplier Agreements",
        value: "Supplier Agreements"
    },
    {
        label: "COI",
        value: "COI"
    },
    {
        label: "Proof of Inc.",
        value: "Proof of Inc."
    },
    {
        label: "Banking Info",
        value: "Banking Info"
    },
    {
        label: "Amendments",
        value: "Amendments"
    },
    {
        label: "Other",
        value: "Other"
    }, 
];
const FORM_FIELDS = {
    stepOne: {
        mandatories: {
            supplier_company_name: "supplier_company_name",
            legal_name_for_invoicing: "legal_name_for_invoicing",
            work_categories_covered: "work_categories_covered"
        },
        optionals: {
            primary_contact_name: "primary_contact_name",
            supplier_code: "supplier_code",
            primary_contact_email: "primary_contact_email",
            street_address_line1: "street_address_line1",
            primary_contact_phone: "primary_contact_phone",
            agreement_expiry_date: "agreement_expiry_date",
            country: "country",
            province_region: "province_region",
            city: "city",
            postal_code: "postal_code",
            tax_id: "tax_id",
            geographic_coverage: "geographic_coverage",
            dunn_and_bradstreet_number: "dunn_and_bradstreet_number",
            supplier_status: "supplier_status",
            is_non_resident_supplier: "is_non_resident_supplier",
            diversity_certifications: "diversity_certifications",
            comments: "comments"
        }
    },
    stepTwo: {
        optionals: {
            secondary_contact_name: "secondary_contact_name",
            secondary_contact_email: "secondary_contact_email",
            tertiary_contact_name: "tertiary_contact_name",
            tertiary_contact_email: "tertiary_contact_email",
            accounts_receivable_contact_name: "accounts_receivable_contact_name",
            accounts_receivable_contact_email: "accounts_receivable_contact_email"
        }
    },
    stepThree: {
        mandatories: {
            associated_buyers: "associated_buyers"
        }
    },
    stepFourth: {
        mandatories: {
            type: "type",
            buyer_id: "buyer_id",
            name: "name"
        },
        optionals: {
            expiry_date: "expiry_date"
        }
    }
};
const DASHBOARD_STEPS = {
    stepOne: 0,
    stepTwo: 1,
    stepThree: 2,
    stepFour: 3,
    success: 4
};


/***/ }),

/***/ 46833:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ utils_phoneFormatter)
});

;// CONCATENATED MODULE: ./src/consts/regex.ts
/** returns the string with only the numbers */ const ONLY_NUMBER_REGEX = /\D/g;

;// CONCATENATED MODULE: ./src/utils/phoneFormatter.ts

const phoneFormatter = (value)=>{
    const phoneNumber = value?.toString().replace(ONLY_NUMBER_REGEX, ""); // Remove any character that is not a number
    let formattedPhoneNumber = "";
    if (!phoneNumber) {
        return "";
    }
    if (phoneNumber.length < 4) {
        formattedPhoneNumber = `(${phoneNumber}`;
    } else if (phoneNumber.length < 7) {
        formattedPhoneNumber = `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    } else {
        formattedPhoneNumber = `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
    }
    return formattedPhoneNumber;
};
/* harmony default export */ const utils_phoneFormatter = (phoneFormatter);


/***/ }),

/***/ 20720:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Sort function for a data table.
 *
 * @param {any} parameterA - First comparison parameter.
 * @param {any} parameterB - Second comparison parameter.
 * @param {string} location - The location of the attribute to use for the comparison.
 * @param {string | null | undefined} sortOrder - The sort order can be 'ascend' or 'descend'.
 * @returns {number} A number representing the result of the comparison.
 */ const sorterTable = (parameterA, parameterB, location, sortOrder)=>{
    const attrA = parameterA[`${location}`]?.trim() || "";
    const attrB = parameterB[`${location}`]?.trim() || "";
    if (!attrA && !attrB) return 0;
    if (!attrA) return sortOrder === "ascend" ? 1 : -1;
    if (!attrB) return sortOrder === "ascend" ? -1 : 1;
    return attrA.localeCompare(attrB, undefined, {
        numeric: true
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sorterTable);


/***/ }),

/***/ 25690:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "capitalizeString": () => (/* binding */ capitalizeString),
/* harmony export */   "getInitials": () => (/* binding */ getInitials)
/* harmony export */ });
const getInitials = (name)=>name?.match(/\b(\w)/g)?.join("").substring(0, 3).toUpperCase();
const capitalizeString = (str)=>str?.charAt(0).toUpperCase() + str?.slice(1);


/***/ })

};
;