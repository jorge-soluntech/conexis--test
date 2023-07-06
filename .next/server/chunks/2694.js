exports.id = 2694;
exports.ids = [2694];
exports.modules = {

/***/ 74340:
/***/ ((module) => {

// Exports
module.exports = {
	"form_create": "ApprovalInformation_form_create__gJ3ql",
	"form_subtitle_container": "ApprovalInformation_form_subtitle_container__Tv_hK",
	"form_small_title": "ApprovalInformation_form_small_title__gsnFv",
	"form_clear_fields": "ApprovalInformation_form_clear_fields__ulk2H",
	"row": "ApprovalInformation_row__hMCQD",
	"label": "ApprovalInformation_label__q6XAM",
	"infoIcon": "ApprovalInformation_infoIcon__O37Vf",
	"infoText": "ApprovalInformation_infoText__d_HD_",
	"continue_button": "ApprovalInformation_continue_button__Uek7o",
	"moveToRight": "ApprovalInformation_moveToRight__FEHa1"
};


/***/ }),

/***/ 31885:
/***/ ((module) => {

// Exports
module.exports = {
	"form_create": "BuyerInformation_form_create__qFM5p",
	"form_subtitle_container": "BuyerInformation_form_subtitle_container__gjE2d",
	"form_small_title": "BuyerInformation_form_small_title__UX2HJ",
	"form_clear_fields": "BuyerInformation_form_clear_fields__JVasX",
	"form_user_create_col": "BuyerInformation_form_user_create_col__boXYL",
	"select_user_create": "BuyerInformation_select_user_create__Moai9",
	"row": "BuyerInformation_row__kyXgV",
	"label": "BuyerInformation_label__gJPyC",
	"continue_button": "BuyerInformation_continue_button__C0yJF",
	"moveToRight": "BuyerInformation_moveToRight__MGhZT"
};


/***/ }),

/***/ 17602:
/***/ ((module) => {

// Exports
module.exports = {
	"form_create": "TaxInformation_form_create__okv6y",
	"form_subtitle_container": "TaxInformation_form_subtitle_container__oAywL",
	"form_small_title": "TaxInformation_form_small_title__6scCc",
	"form_clear_fields": "TaxInformation_form_clear_fields__22N5z",
	"row": "TaxInformation_row__6RWXB",
	"label": "TaxInformation_label__j9Ue_",
	"infoIcon": "TaxInformation_infoIcon__hCAXP",
	"infoText": "TaxInformation_infoText__53Gko",
	"continue_button": "TaxInformation_continue_button__kV8ZN",
	"moveToRight": "TaxInformation_moveToRight__SYirR"
};


/***/ }),

/***/ 34835:
/***/ ((module) => {

// Exports
module.exports = {
	"cannot_edited": "WontBeAbleEdit_cannot_edited__jo2wd",
	"info_icon": "WontBeAbleEdit_info_icon__Nkbnc",
	"info_text": "WontBeAbleEdit_info_text__Pwv8x",
	"moveToRight": "WontBeAbleEdit_moveToRight__GFqXd"
};


/***/ }),

/***/ 42694:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _application_buyersSlice_buyersSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94411);
/* harmony import */ var _components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89480);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90396);
/* harmony import */ var _consts_permissions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(62633);
/* harmony import */ var _locales_en_en_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(89235);
/* harmony import */ var _attachmentsComponent_CreateAttachments__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(86570);
/* harmony import */ var _attachmentsComponent_editAttachments_ListAndEditAttachments__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9999);
/* harmony import */ var _multiStepComponent_MultiStepComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(94996);
/* harmony import */ var _formSteps_approvalInformation_ApprovalInformation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3166);
/* harmony import */ var _formSteps_buyerInformation_BuyerInformation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(99470);
/* harmony import */ var _formSteps_taxInformation_TaxInformation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(69892);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_attachmentsComponent_CreateAttachments__WEBPACK_IMPORTED_MODULE_7__, _attachmentsComponent_editAttachments_ListAndEditAttachments__WEBPACK_IMPORTED_MODULE_8__, _formSteps_approvalInformation_ApprovalInformation__WEBPACK_IMPORTED_MODULE_10__, _formSteps_buyerInformation_BuyerInformation__WEBPACK_IMPORTED_MODULE_11__]);
([_attachmentsComponent_CreateAttachments__WEBPACK_IMPORTED_MODULE_7__, _attachmentsComponent_editAttachments_ListAndEditAttachments__WEBPACK_IMPORTED_MODULE_8__, _formSteps_approvalInformation_ApprovalInformation__WEBPACK_IMPORTED_MODULE_10__, _formSteps_buyerInformation_BuyerInformation__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const { buyers  } = _locales_en_en_json__WEBPACK_IMPORTED_MODULE_6__;
const BuyerForm = ({ action , dashboard  })=>{
    const { stepCreateBuyer  } = (0,_components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_3__/* .useAppSelector */ .C)((state)=>state.buyers);
    const stepsComponents = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>[
            {
                step: 0,
                component: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_formSteps_buyerInformation_BuyerInformation__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                    formType: action
                })
            },
            {
                step: 1,
                component: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_formSteps_taxInformation_TaxInformation__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {})
            },
            {
                step: 2,
                component: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_formSteps_approvalInformation_ApprovalInformation__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {})
            },
            {
                step: 3,
                component: action === _consts_permissions__WEBPACK_IMPORTED_MODULE_5__/* .ACTIONS.create */ .aO.create ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_attachmentsComponent_CreateAttachments__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    dashboard: _consts_permissions__WEBPACK_IMPORTED_MODULE_5__/* .DASHBOARDTYPES.buyer */ .j2.buyer
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_attachmentsComponent_editAttachments_ListAndEditAttachments__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    dashboard: _consts_permissions__WEBPACK_IMPORTED_MODULE_5__/* .DASHBOARDTYPES.buyer */ .j2.buyer
                })
            }, 
        ], [
        action
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_multiStepComponent_MultiStepComponent__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        dashboard: dashboard,
        setStep: _application_buyersSlice_buyersSlice__WEBPACK_IMPORTED_MODULE_2__/* .setStepBuyer */ .HQ,
        clearDataState: _application_buyersSlice_buyersSlice__WEBPACK_IMPORTED_MODULE_2__/* .clearDataStateBuyer */ .IG,
        stepProgressComponent: _consts__WEBPACK_IMPORTED_MODULE_4__/* .STEPS_CREATE_BUYER */ .$R,
        titleForm: buyers[action].title,
        currentStep: stepCreateBuyer,
        stepsComponents: stepsComponents
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BuyerForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3166:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_common_alertComponent_AlertMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72017);
/* harmony import */ var _components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89480);
/* harmony import */ var _components_hooks_useValidateFields__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29776);
/* harmony import */ var _consts_selects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(89712);
/* harmony import */ var _locales_en_en_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(89235);
/* harmony import */ var _ApprovalInformation_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(74340);
/* harmony import */ var _ApprovalInformation_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_ApprovalInformation_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _useApprovalInformation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(27446);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useApprovalInformation__WEBPACK_IMPORTED_MODULE_8__]);
_useApprovalInformation__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/* eslint-disable array-callback-return */ 









const { buyers: { thirdStep  } ,  } = _locales_en_en_json__WEBPACK_IMPORTED_MODULE_7__;
/**
 * ApprovalInformation component displays a form to input approval information.
 * This component uses useApprovalInformationForm hook to manage form data and validation.
 *
 * @returns the approval information form - step 3
 *
 * @remarks
 * If the selected value for the field “self serve?” is “Yes”,
 * the following fields should be non-editable (the default value is sent to the backend):
 * bypassSubmissionApproval, accessToApplicantTracker and requireContractApproval
 */ const ApprovalInformation = ()=>{
    const { emptyFieldValidator , ruleValidator  } = (0,_components_hooks_useValidateFields__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const { dataBuyer: { isSelfServed =false , requireContractApproval  } ,  } = (0,_components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_4__/* .useAppSelector */ .C)((state)=>state.buyers);
    const { form , onBack , errors , showError , setShowError , handleContinue , onFinishFailed , approversForContractsList , handleContractApproverChange , handleRequireContractApprovalChange ,  } = (0,_useApprovalInformation__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Card, {
            className: (_ApprovalInformation_module_scss__WEBPACK_IMPORTED_MODULE_9___default().form_create),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    showError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_alertComponent_AlertMessage__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        message: errors[0],
                        afterClose: ()=>setShowError(false)
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Form, {
                        form: form,
                        scrollToFirstError: true,
                        name: "approvalInformation",
                        onFinish: handleContinue,
                        onFinishFailed: onFinishFailed,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_ApprovalInformation_module_scss__WEBPACK_IMPORTED_MODULE_9___default().form_subtitle_container),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_ApprovalInformation_module_scss__WEBPACK_IMPORTED_MODULE_9___default().form_small_title),
                                    children: "Approval information"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                                className: (_ApprovalInformation_module_scss__WEBPACK_IMPORTED_MODULE_9___default().row),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                        xs: 24,
                                        sm: 12,
                                        md: 12,
                                        lg: 12,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                                            help: false,
                                            initialValue: false,
                                            name: "bypassJobApproval",
                                            label: "Jobs require approval?",
                                            className: (_ApprovalInformation_module_scss__WEBPACK_IMPORTED_MODULE_9___default().label),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Select, {
                                                size: "large",
                                                maxTagCount: "responsive",
                                                optionFilterProp: "children",
                                                options: _consts_selects__WEBPACK_IMPORTED_MODULE_6__/* .BOOLEAN_SELECT_OPTIONS */ .N
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                        xs: 24,
                                        sm: 12,
                                        md: 12,
                                        lg: 12,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                                            help: false,
                                            initialValue: false,
                                            name: "bypassSubmissionApproval",
                                            label: "Submissions require approval?",
                                            className: (_ApprovalInformation_module_scss__WEBPACK_IMPORTED_MODULE_9___default().label),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Select, {
                                                size: "large",
                                                maxTagCount: "responsive",
                                                optionFilterProp: "children",
                                                disabled: isSelfServed ?? false,
                                                options: _consts_selects__WEBPACK_IMPORTED_MODULE_6__/* .BOOLEAN_SELECT_OPTIONS */ .N
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                                className: (_ApprovalInformation_module_scss__WEBPACK_IMPORTED_MODULE_9___default().row),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                        xs: 24,
                                        sm: 12,
                                        md: 12,
                                        lg: 12,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                                            help: false,
                                            initialValue: false,
                                            className: (_ApprovalInformation_module_scss__WEBPACK_IMPORTED_MODULE_9___default().label),
                                            name: "accessToApplicantTracker",
                                            label: thirdStep.accessToApplicantTracker,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Select, {
                                                size: "large",
                                                maxTagCount: "responsive",
                                                optionFilterProp: "children",
                                                disabled: isSelfServed ?? false,
                                                options: _consts_selects__WEBPACK_IMPORTED_MODULE_6__/* .BOOLEAN_SELECT_OPTIONS */ .N
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                        xs: 24,
                                        sm: 12,
                                        md: 12,
                                        lg: 12,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                                            help: false,
                                            initialValue: false,
                                            name: "requireContractApproval",
                                            label: thirdStep.requireContractApproval,
                                            className: (_ApprovalInformation_module_scss__WEBPACK_IMPORTED_MODULE_9___default().label),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Select, {
                                                size: "large",
                                                maxTagCount: "responsive",
                                                optionFilterProp: "children",
                                                disabled: isSelfServed ?? false,
                                                options: _consts_selects__WEBPACK_IMPORTED_MODULE_6__/* .BOOLEAN_SELECT_OPTIONS */ .N,
                                                onChange: handleRequireContractApprovalChange
                                            })
                                        })
                                    })
                                ]
                            }),
                            requireContractApproval && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                                className: (_ApprovalInformation_module_scss__WEBPACK_IMPORTED_MODULE_9___default().row),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                    xs: 24,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                                        help: false,
                                        className: (_ApprovalInformation_module_scss__WEBPACK_IMPORTED_MODULE_9___default().label),
                                        name: "contractApproverId",
                                        label: thirdStep.contractApproverId,
                                        rules: [
                                            ruleValidator(true, "string", emptyFieldValidator, thirdStep.contractApproverIdError), 
                                        ],
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Select, {
                                            size: "large",
                                            optionLabelProp: "label",
                                            maxTagCount: "responsive",
                                            optionFilterProp: "children",
                                            options: approversForContractsList,
                                            onChange: handleContractApproverChange,
                                            placeholder: thirdStep.contractApproverIdPlaceholder
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_ApprovalInformation_module_scss__WEBPACK_IMPORTED_MODULE_9___default().continue_button),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                        type: "default",
                                        onClick: onBack,
                                        children: "Back"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                        size: "large",
                                        type: "primary",
                                        htmlType: "submit",
                                        children: "Continue"
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApprovalInformation);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 27446:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _application_buyersSlice_buyersSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94411);
/* harmony import */ var _components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89480);
/* harmony import */ var _infrastructure_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43019);
/* harmony import */ var _locales_en_en_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89235);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_infrastructure_services__WEBPACK_IMPORTED_MODULE_4__]);
_infrastructure_services__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const { consts: { catchError  } ,  } = _locales_en_en_json__WEBPACK_IMPORTED_MODULE_5__;
/**
 * Hook for managing the approval information form.
 *
 * @returns Object with the properties and functions of the form.
 *
 * @remarks
 * The contractApproverId field is only visible if requireContractApproval is true
 */ const useApprovalInformationForm = ()=>{
    const [form] = antd__WEBPACK_IMPORTED_MODULE_0__.Form.useForm();
    const dispatch = (0,_components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_3__/* .useAppDispatch */ .T)();
    const { dataBuyer  } = (0,_components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_3__/* .useAppSelector */ .C)((state)=>state.buyers);
    const { 0: errors , 1: setErrors  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: showError , 1: setShowError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: approversForContractsList , 1: setApproversForContractsList  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const getUsersData = async ()=>{
        try {
            const response = await _infrastructure_services__WEBPACK_IMPORTED_MODULE_4__/* ["default"].getUsers */ .ZP.getUsers("", "MSP Administrator&user_role=Program Manager");
            const approversList = response.data.data.users.map(({ id , first_name , last_name  })=>({
                    label: `${first_name} ${last_name}`,
                    value: id
                }));
            setApproversForContractsList(approversList);
        } catch (error) {
            setErrors([
                catchError
            ]);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        getUsersData();
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        form.setFieldsValue(dataBuyer);
    }, []);
    const handleRequireContractApprovalChange = (value)=>{
        dispatch((0,_application_buyersSlice_buyersSlice__WEBPACK_IMPORTED_MODULE_2__/* .setDataBuyer */ .x1)({
            requireContractApproval: value
        }));
        if (!value) {
            dispatch((0,_application_buyersSlice_buyersSlice__WEBPACK_IMPORTED_MODULE_2__/* .setDataBuyer */ .x1)({
                contractApproverId: null
            }));
        }
    };
    const handleContractApproverChange = (value)=>{
        const selectedApprover = approversForContractsList.find((approver)=>approver.value === value);
        if (selectedApprover) {
            form.setFieldsValue({
                contractApproverId: selectedApprover
            });
        }
    };
    const handleContinue = (values)=>{
        dispatch((0,_application_buyersSlice_buyersSlice__WEBPACK_IMPORTED_MODULE_2__/* .setDataBuyer */ .x1)(values));
        dispatch((0,_application_buyersSlice_buyersSlice__WEBPACK_IMPORTED_MODULE_2__/* .setStepBuyer */ .HQ)(3));
    };
    const onFinishFailed = (errorInfo)=>{
        const { errorFields  } = errorInfo;
        const newErrors = [];
        errorFields.forEach((item)=>{
            if (item.name && item.errors) newErrors.push(item.errors[0]);
        });
        setErrors(newErrors);
        setShowError(true);
    };
    const onBack = ()=>{
        dispatch((0,_application_buyersSlice_buyersSlice__WEBPACK_IMPORTED_MODULE_2__/* .setStepBuyer */ .HQ)(1));
        dispatch((0,_application_buyersSlice_buyersSlice__WEBPACK_IMPORTED_MODULE_2__/* .setDataBuyer */ .x1)(form.getFieldsValue()));
    };
    return {
        form,
        onBack,
        errors,
        showError,
        setShowError,
        handleContinue,
        onFinishFailed,
        approversForContractsList,
        handleContractApproverChange,
        handleRequireContractApprovalChange
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useApprovalInformationForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 99470:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_common_alertComponent_AlertMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72017);
/* harmony import */ var _components_hooks_useWindowDimension__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60255);
/* harmony import */ var _consts_login_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4262);
/* harmony import */ var _consts_selects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(89712);
/* harmony import */ var _locales_en_en_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(89235);
/* harmony import */ var _utils_phoneFormatter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(46833);
/* harmony import */ var _wontBeAbleEdit_WontBeAbleEdit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(27133);
/* harmony import */ var _BuyerInformation_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(31885);
/* harmony import */ var _BuyerInformation_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_BuyerInformation_module_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _useBuyerInformationForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(53598);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useBuyerInformationForm__WEBPACK_IMPORTED_MODULE_9__]);
_useBuyerInformationForm__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/* eslint-disable prefer-promise-reject-errors */ 











const { buyers: { firstStep  } ,  } = _locales_en_en_json__WEBPACK_IMPORTED_MODULE_7__;
/**
 * BuyerInformation component renders a form for creating/editing buyer information.
 *
 * @remarks This component receives the formType props to determine whether the form is for creating or editing buyer information.
 * formType is used to disable the currency and workWeekDefinition fields since they are the only ones that are not editable
 *
 * @param  formType - The type of the form ('create' or 'edit')
 * @returns The BuyerInformation form
 */ const BuyerInformation = ({ formType ="create"  })=>{
    const { width =0  } = (0,_components_hooks_useWindowDimension__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const { form , errors , phoneError , showError , setShowError , clearOwnerFields , handleContinue , onFinishFailed , optionsAccountOwner , validateField , isLoading , handleSelfServeChange ,  } = (0,_useBuyerInformationForm__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(formType);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Card, {
            className: (_BuyerInformation_module_scss__WEBPACK_IMPORTED_MODULE_10___default().form_create),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    showError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_alertComponent_AlertMessage__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        message: errors[0],
                        afterClose: ()=>setShowError(false)
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Form, {
                        form: form,
                        scrollToFirstError: true,
                        name: "buyerInformation",
                        onFinish: handleContinue,
                        onFinishFailed: onFinishFailed,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_BuyerInformation_module_scss__WEBPACK_IMPORTED_MODULE_10___default().form_subtitle_container),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_BuyerInformation_module_scss__WEBPACK_IMPORTED_MODULE_10___default().form_small_title),
                                        children: "Buyer information"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: (_BuyerInformation_module_scss__WEBPACK_IMPORTED_MODULE_10___default().form_clear_fields),
                                        type: "button",
                                        onClick: clearOwnerFields,
                                        children: "Clear fields"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                                className: (_BuyerInformation_module_scss__WEBPACK_IMPORTED_MODULE_10___default().row),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                        lg: 12,
                                        sm: 24,
                                        xs: 24,
                                        md: 12,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                                            help: false,
                                            className: (_BuyerInformation_module_scss__WEBPACK_IMPORTED_MODULE_10___default().label),
                                            name: "clientCompanyName",
                                            validateTrigger: "onSubmit",
                                            label: "Client company name",
                                            rules: [
                                                {
                                                    required: true,
                                                    validator: async (_, value)=>validateField(value, "required", "The client company name field is mandatory. Please make sure to fill it out before submitting the form.")
                                                }, 
                                            ],
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Input, {
                                                size: "large",
                                                type: "text",
                                                placeholder: "Enter company name here"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                        lg: 12,
                                        sm: 24,
                                        xs: 24,
                                        md: 12,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                                            help: false,
                                            className: (_BuyerInformation_module_scss__WEBPACK_IMPORTED_MODULE_10___default().label),
                                            validateTrigger: "onSubmit",
                                            name: "legalNameForInvoicing",
                                            label: "Legal name for invoicing",
                                            rules: [
                                                {
                                                    required: true,
                                                    validator: async (_, value)=>validateField(value, "required", "The legal name for invoicing field is mandatory. Please make sure to fill it out before submitting the form.")
                                                }, 
                                            ],
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Input, {
                                                size: "large",
                                                type: "text",
                                                placeholder: "Enter legal name here"
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                                className: (_BuyerInformation_module_scss__WEBPACK_IMPORTED_MODULE_10___default().row),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                        lg: 12,
                                        sm: 24,
                                        xs: 24,
                                        md: 12,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                                            className: (_BuyerInformation_module_scss__WEBPACK_IMPORTED_MODULE_10___default().label),
                                            name: "streetAddressLine1",
                                            label: "Client mailing address",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Input, {
                                                size: "large",
                                                type: "text",
                                                placeholder: "Enter mailing address here"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                        lg: 12,
                                        sm: 24,
                                        xs: 24,
                                        md: 12,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                                            name: "country",
                                            label: "Country",
                                            className: (_BuyerInformation_module_scss__WEBPACK_IMPORTED_MODULE_10___default().label),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Input, {
                                                size: "large",
                                                type: "text",
                                                placeholder: "Enter country here"
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                                className: (_BuyerInformation_module_scss__WEBPACK_IMPORTED_MODULE_10___default().row),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                        lg: 12,
                                        sm: 24,
                                        xs: 24,
                                        md: 12,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                                            name: "city",
                                            label: "City",
                                            className: (_BuyerInformation_module_scss__WEBPACK_IMPORTED_MODULE_10___default().label),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Input, {
                                                size: "large",
                                                type: "text",
                                                placeholder: "Enter city here"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                        lg: 6,
                                        sm: 12,
                                        xs: 12,
                                        md: 6,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                                            name: "provinceRegion",
                                            label: "State",
                                            style: {
                                                marginRight: width < _consts_login_ui__WEBPACK_IMPORTED_MODULE_5__/* .SMALL_TABLET_BREAKPOINT */ .IU ? "15px" : "0"
                                            },
                                            className: (_BuyerInformation_module_scss__WEBPACK_IMPORTED_MODULE_10___default().label),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Input, {
                                                size: "large",
                                                type: "text",
                                                placeholder: "Enter state here"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                        lg: 6,
                                        sm: 12,
                                        xs: 12,
                                        md: 6,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                                            name: "postalCode",
                                            label: "Zip code",
                                            className: (_BuyerInformation_module_scss__WEBPACK_IMPORTED_MODULE_10___default().label),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Input, {
                                                size: "large",
                                                type: "text",
                                                placeholder: "Enter zip code here"
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                    lg: 24,
                                    sm: 24,
                                    xs: 24,
                                    md: 24,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                                        name: "primaryContactName",
                                        label: "Client contact name",
                                        className: (_BuyerInformation_module_scss__WEBPACK_IMPORTED_MODULE_10___default().label),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Input, {
                                            size: "large",
                                            type: "text",
                                            placeholder: "Enter client contact name here"
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                                className: (_BuyerInformation_module_scss__WEBPACK_IMPORTED_MODULE_10___default().row),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                        lg: 12,
                                        sm: 24,
                                        xs: 24,
                                        md: 12,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                                            help: false,
                                            name: "primaryContactEmail",
                                            label: "Client contact email",
                                            validateTrigger: "onSubmit",
                                            className: (_BuyerInformation_module_scss__WEBPACK_IMPORTED_MODULE_10___default().label),
                                            required: false,
                                            rules: [
                                                {
                                                    type: "email",
                                                    validator: async (_, value)=>validateField(value, "email", "Client contact email should be a valid email address.")
                                                }, 
                                            ],
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Input, {
                                                size: "large",
                                                type: "text",
                                                placeholder: "Enter client contact email here"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                        lg: 12,
                                        sm: 24,
                                        xs: 24,
                                        md: 12,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                                            help: false,
                                            validateTrigger: "onSubmit",
                                            name: "primaryContactPhone",
                                            label: "Client contact phone",
                                            className: (_BuyerInformation_module_scss__WEBPACK_IMPORTED_MODULE_10___default().label),
                                            required: false,
                                            rules: [
                                                {
                                                    validator: async (_, value)=>validateField(value, "phone", "Client contact phone should be a valid phone number.")
                                                }, 
                                            ],
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.InputNumber, {
                                                maxLength: 14,
                                                controls: false,
                                                bordered: false,
                                                formatter: _utils_phoneFormatter__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,
                                                className: `${phoneError ? "input_number_error" : ""}`,
                                                placeholder: "Enter client contact phone here",
                                                parser: (value)=>value.replace(/\D/g, ""),
                                                onChange: (value)=>form.setFieldValue("primaryContactPhone", value?.toString() ?? null)
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                                className: (_BuyerInformation_module_scss__WEBPACK_IMPORTED_MODULE_10___default().row),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                        lg: 12,
                                        sm: 24,
                                        xs: 24,
                                        md: 12,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                                            name: "accountsPayableContactName",
                                            label: "Accounts payable contact name",
                                            className: (_BuyerInformation_module_scss__WEBPACK_IMPORTED_MODULE_10___default().label),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Input, {
                                                size: "large",
                                                type: "text",
                                                placeholder: "Enter accounts payable contact name here"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                        lg: 12,
                                        sm: 24,
                                        xs: 24,
                                        md: 12,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                                            help: false,
                                            name: "accountsPayableContactEmail",
                                            label: "Accounts payable contact email",
                                            validateTrigger: "onSubmit",
                                            className: (_BuyerInformation_module_scss__WEBPACK_IMPORTED_MODULE_10___default().label),
                                            required: false,
                                            rules: [
                                                {
                                                    type: "email",
                                                    validator: async (_, value)=>validateField(value, "email", "Accounts payable contact email should be a valid email address.")
                                                }, 
                                            ],
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Input, {
                                                size: "large",
                                                type: "text",
                                                placeholder: "Enter accounts payable contact email here"
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                                className: (_BuyerInformation_module_scss__WEBPACK_IMPORTED_MODULE_10___default().row),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                        lg: 12,
                                        sm: 24,
                                        xs: 24,
                                        md: 12,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                                            name: "accountOwnerId",
                                            label: "Account owner",
                                            className: (_BuyerInformation_module_scss__WEBPACK_IMPORTED_MODULE_10___default().label),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Select, {
                                                className: `${(_BuyerInformation_module_scss__WEBPACK_IMPORTED_MODULE_10___default().select_user_create)} ${"dummyClassCreateFormForBorder"}`,
                                                size: "large",
                                                placeholder: "Select account owner here",
                                                maxTagCount: "responsive",
                                                optionFilterProp: "children",
                                                options: optionsAccountOwner
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                        lg: 12,
                                        sm: 24,
                                        xs: 24,
                                        md: 12,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                                                help: false,
                                                name: "workWeekDefinition",
                                                label: "Work week definition",
                                                className: (_BuyerInformation_module_scss__WEBPACK_IMPORTED_MODULE_10___default().label),
                                                rules: [
                                                    {
                                                        required: true,
                                                        validator: async (_, value)=>validateField(value, "required", "The work week definition field is mandatory. Please make sure to fill it out before submitting the form.")
                                                    }, 
                                                ],
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Select, {
                                                    size: "large",
                                                    maxTagCount: "responsive",
                                                    optionFilterProp: "children",
                                                    disabled: formType !== "create",
                                                    placeholder: "Select work week definition here",
                                                    className: `${(_BuyerInformation_module_scss__WEBPACK_IMPORTED_MODULE_10___default().select_user_create)} ${"dummyClassCreateFormForBorder"}`,
                                                    options: [
                                                        {
                                                            label: "M-S",
                                                            value: "M-S"
                                                        },
                                                        {
                                                            label: "S-S",
                                                            value: "S-S"
                                                        }, 
                                                    ]
                                                })
                                            }),
                                            formType === "create" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_wontBeAbleEdit_WontBeAbleEdit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                                className: (_BuyerInformation_module_scss__WEBPACK_IMPORTED_MODULE_10___default().row),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                        lg: 12,
                                        sm: 24,
                                        xs: 24,
                                        md: 12,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                                                help: false,
                                                name: "currency",
                                                label: "Currency",
                                                className: (_BuyerInformation_module_scss__WEBPACK_IMPORTED_MODULE_10___default().label),
                                                rules: [
                                                    {
                                                        required: true,
                                                        validator: async (_, value)=>validateField(value, "required", "The currency field is mandatory. Please make sure to fill it out before submitting the form.")
                                                    }, 
                                                ],
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Select, {
                                                    size: "large",
                                                    maxTagCount: "responsive",
                                                    optionFilterProp: "children",
                                                    disabled: formType !== "create",
                                                    placeholder: "Select currency here",
                                                    className: `${(_BuyerInformation_module_scss__WEBPACK_IMPORTED_MODULE_10___default().select_user_create)} ${"dummyClassCreateFormForBorder"}`,
                                                    options: [
                                                        {
                                                            label: "CAD",
                                                            value: "CAD"
                                                        },
                                                        {
                                                            label: "USD",
                                                            value: "USD"
                                                        },
                                                        {
                                                            label: "AUD",
                                                            value: "AUD"
                                                        }, 
                                                    ]
                                                })
                                            }),
                                            formType === "create" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_wontBeAbleEdit_WontBeAbleEdit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                        lg: 12,
                                        sm: 24,
                                        xs: 24,
                                        md: 12,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                                            help: false,
                                            name: "paymentTerms",
                                            label: "Payment terms",
                                            className: (_BuyerInformation_module_scss__WEBPACK_IMPORTED_MODULE_10___default().label),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Select, {
                                                className: `${(_BuyerInformation_module_scss__WEBPACK_IMPORTED_MODULE_10___default().select_user_create)} ${"dummyClassCreateFormForBorder"}`,
                                                size: "large",
                                                placeholder: "Select payment terms here",
                                                maxTagCount: "responsive",
                                                optionFilterProp: "children",
                                                options: [
                                                    {
                                                        label: "Net 7",
                                                        value: "Net 7"
                                                    },
                                                    {
                                                        label: "Net 15",
                                                        value: "Net 15"
                                                    },
                                                    {
                                                        label: "Net 30",
                                                        value: "Net 30"
                                                    },
                                                    {
                                                        label: "Net 45",
                                                        value: "Net 45"
                                                    },
                                                    {
                                                        label: "Net 60",
                                                        value: "Net 60"
                                                    },
                                                    {
                                                        label: "Free Form",
                                                        value: "Free Form"
                                                    }, 
                                                ]
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                                className: (_BuyerInformation_module_scss__WEBPACK_IMPORTED_MODULE_10___default().row),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                        lg: 12,
                                        sm: 24,
                                        xs: 24,
                                        md: 12,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                                            help: false,
                                            className: (_BuyerInformation_module_scss__WEBPACK_IMPORTED_MODULE_10___default().label),
                                            name: "contractExpiryDate",
                                            label: "Contract expiry date",
                                            rules: [
                                                {
                                                    required: true,
                                                    validator: async (_, value)=>validateField(value, "required", "The contract expiry date field is mandatory. Please make sure to fill it out before submitting the form.")
                                                }, 
                                            ],
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.DatePicker, {
                                                placeholder: dayjs__WEBPACK_IMPORTED_MODULE_2___default()().format("DD MMM YYYY"),
                                                format: (value)=>`${dayjs__WEBPACK_IMPORTED_MODULE_2___default()(value).format("DD MMM YYYY")}`
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                        lg: 12,
                                        sm: 24,
                                        xs: 24,
                                        md: 12,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                                                help: false,
                                                name: "isSelfServed",
                                                label: firstStep.SelfServe,
                                                className: (_BuyerInformation_module_scss__WEBPACK_IMPORTED_MODULE_10___default().label),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Select, {
                                                    size: "large",
                                                    maxTagCount: "responsive",
                                                    optionFilterProp: "children",
                                                    disabled: formType !== "create",
                                                    placeholder: firstStep.SelfServePlaceholder,
                                                    className: (_BuyerInformation_module_scss__WEBPACK_IMPORTED_MODULE_10___default().select_user_create),
                                                    options: _consts_selects__WEBPACK_IMPORTED_MODULE_6__/* .BOOLEAN_SELECT_OPTIONS */ .N,
                                                    onChange: handleSelfServeChange
                                                })
                                            }),
                                            formType === "create" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_wontBeAbleEdit_WontBeAbleEdit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_BuyerInformation_module_scss__WEBPACK_IMPORTED_MODULE_10___default().continue_button),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                    size: "large",
                                    type: "primary",
                                    htmlType: "submit",
                                    loading: isLoading,
                                    children: "Continue"
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BuyerInformation);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 53598:
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
/* harmony import */ var _application_buyersSlice_buyersSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94411);
/* harmony import */ var _components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89480);
/* harmony import */ var _components_hooks_useValidateFields__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29776);
/* harmony import */ var _consts_buyers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72496);
/* harmony import */ var _infrastructure_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(43019);
/* harmony import */ var _infrastructure_services_BuyerServices__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(70092);
/* harmony import */ var _utils_isValidEmail__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(33220);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_infrastructure_services__WEBPACK_IMPORTED_MODULE_7__, _infrastructure_services_BuyerServices__WEBPACK_IMPORTED_MODULE_8__]);
([_infrastructure_services__WEBPACK_IMPORTED_MODULE_7__, _infrastructure_services_BuyerServices__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable prefer-promise-reject-errors */ /* eslint-disable prefer-destructuring */ 









const useBuyerInformationForm = (formType)=>{
    const [form] = antd__WEBPACK_IMPORTED_MODULE_0__.Form.useForm();
    const dispatch = (0,_components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_4__/* .useAppDispatch */ .T)();
    const buyerServices = new _infrastructure_services_BuyerServices__WEBPACK_IMPORTED_MODULE_8__/* .BuyerServices */ .i((next_router__WEBPACK_IMPORTED_MODULE_1___default()));
    const { dataBuyer  } = (0,_components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_4__/* .useAppSelector */ .C)((state)=>state.buyers);
    const { 0: errors , 1: setErrors  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const { 0: phoneError , 1: setPhoneError  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: showError , 1: setShowError  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: optionsAccountOwner , 1: setOptionsAccountOwner  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const { 0: isLoading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { validateMandatoryEmptyFields  } = (0,_components_hooks_useValidateFields__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        form.setFieldsValue(dataBuyer);
        function getUsersData() {
            _infrastructure_services__WEBPACK_IMPORTED_MODULE_7__/* ["default"].getUsers */ .ZP.getUsers("", "MSP Administrator&user_role=Program Manager").then((response)=>{
                const result = response.data.data.users.map(({ id , first_name , last_name  })=>({
                        value: id,
                        label: `${first_name} ${last_name}`
                    }));
                setOptionsAccountOwner(result);
            });
        }
        getUsersData();
    }, []);
    const handleSelfServeChange = (value)=>{
        dispatch((0,_application_buyersSlice_buyersSlice__WEBPACK_IMPORTED_MODULE_3__/* .setDataBuyer */ .x1)({
            isSelfServed: value
        }));
        if (value) {
            dispatch((0,_application_buyersSlice_buyersSlice__WEBPACK_IMPORTED_MODULE_3__/* .setDataBuyer */ .x1)({
                bypassJobApproval: false,
                bypassSubmissionApproval: false,
                requireContractApproval: false,
                accessToApplicantTracker: false,
                contractApproverId: null
            }));
        }
    };
    const clearOwnerFields = ()=>{
        const { currency , workWeekDefinition  } = form.getFieldsValue();
        /* It must be validated if it is being edited to prevent the currency and
    workWeekDefinition fields from being removed when cleaning the form */ form.setFieldsValue({
            clientCompanyName: null,
            legalNameForInvoicing: null,
            streetAddressLine1: null,
            country: null,
            city: null,
            provinceRegion: null,
            postalCode: null,
            primaryContactName: null,
            primaryContactEmail: null,
            primaryContactPhone: null,
            accountsPayableContactName: null,
            accountsPayableContactEmail: null,
            accountOwnerId: null,
            workWeekDefinition: formType === "create" ? null : workWeekDefinition,
            currency: formType === "create" ? null : currency,
            paymentTerms: null,
            contractExpiryDate: null,
            isSelfServed: null
        });
    };
    const handleContinue = (values)=>{
        setShowError(false);
        let validateNameBuyerInputs = [
            values.clientCompanyName,
            undefined, 
        ];
        if (formType !== "create") {
            validateNameBuyerInputs = [
                values.clientCompanyName,
                dataBuyer?.id
            ];
        }
        setLoading(true);
        buyerServices.validateNameBuyer(...validateNameBuyerInputs).then((response)=>{
            const { valid  } = response.data;
            if (valid) {
                dispatch((0,_application_buyersSlice_buyersSlice__WEBPACK_IMPORTED_MODULE_3__/* .setDataBuyer */ .x1)(values));
                dispatch((0,_application_buyersSlice_buyersSlice__WEBPACK_IMPORTED_MODULE_3__/* .setStepBuyer */ .HQ)(1));
                setLoading(false);
            } else {
                setErrors([
                    "This buyer already exists. Please use a different name.", 
                ]);
                setShowError(true);
                setLoading(false);
            }
        });
    };
    const validateField = async (value, type, error)=>{
        if (type === "required" && !value) {
            return Promise.reject(error);
        }
        if (type === "email" && value && (0,_utils_isValidEmail__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(value)) {
            return Promise.reject(error);
        }
        if (type === "phone") {
            if (value && value.length < 10) {
                setPhoneError(true);
                return Promise.reject(error);
            }
            setPhoneError(false);
        }
        return Promise.resolve();
    };
    const onFinishFailed = (errorInfo)=>{
        const mandatoriesFields = Object.keys(_consts_buyers__WEBPACK_IMPORTED_MODULE_6__/* .FORM_FIELDS.stepOne.mandatories */ .GZ.stepOne.mandatories);
        const newErrors = validateMandatoryEmptyFields({
            errorInfo,
            mandatoriesFields
        });
        setErrors(newErrors);
        setShowError(true);
    };
    return {
        form,
        errors,
        phoneError,
        showError,
        setShowError,
        clearOwnerFields,
        handleContinue,
        onFinishFailed,
        optionsAccountOwner,
        validateField,
        isLoading,
        handleSelfServeChange
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useBuyerInformationForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 69892:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ taxInformation_TaxInformation)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(45725);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(25675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/components/common/buyersComponents/formSteps/taxInformation/TaxInformation.module.scss
var TaxInformation_module = __webpack_require__(17602);
var TaxInformation_module_default = /*#__PURE__*/__webpack_require__.n(TaxInformation_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: ./src/application/buyersSlice/buyersSlice.ts
var buyersSlice = __webpack_require__(94411);
// EXTERNAL MODULE: ./src/components/hooks/storeHooks.ts
var storeHooks = __webpack_require__(89480);
;// CONCATENATED MODULE: ./src/components/common/buyersComponents/formSteps/taxInformation/useTaxInformationForm.tsx




const useTaxInformationForm = ()=>{
    const [form] = external_antd_.Form.useForm();
    const dispatch = (0,storeHooks/* useAppDispatch */.T)();
    const { dataBuyer  } = (0,storeHooks/* useAppSelector */.C)((state)=>state.buyers);
    const { 0: showError , 1: setShowError  } = (0,external_react_.useState)(false);
    const { 0: messageError , 1: setMessageError  } = (0,external_react_.useState)("");
    (0,external_react_.useEffect)(()=>{
        form.setFieldsValue(dataBuyer);
    }, []);
    const onChange = (value, field)=>{
        form.setFieldValue(field, parseInt(value, 10));
    };
    const clearOwnerFields = ()=>{
        form.setFieldsValue({
            vatAmount: null,
            salesTaxAmount: null,
            otherTaxAmount: null
        });
    };
    const isWithinRange = (value)=>{
        if (value >= 0 && value <= 100) {
            return true;
        }
        return false;
    };
    const validateFields = (values)=>{
        if (values.vatAmount && !isWithinRange(values.vatAmount)) {
            setMessageError("The VAT/Federal field must be between 0 and 100");
        } else if (values.salesTaxAmount && !isWithinRange(values.salesTaxAmount)) {
            setMessageError("The Provincial/State sales tax field must be between 0 and 100");
        } else if (values.otherTaxAmount && !isWithinRange(values.otherTaxAmount)) {
            setMessageError("The Other field must be between 0 and 100");
        }
        setShowError(true);
    };
    const onBack = ()=>{
        dispatch((0,buyersSlice/* setStepBuyer */.HQ)(0));
        dispatch((0,buyersSlice/* setDataBuyer */.x1)(form.getFieldsValue()));
    };
    const handleContinue = (values)=>{
        setShowError(false);
        dispatch((0,buyersSlice/* setDataBuyer */.x1)(values));
        dispatch((0,buyersSlice/* setStepBuyer */.HQ)(2));
    };
    const onFinishFailed = (values)=>{
        validateFields(values.values);
    };
    return {
        form,
        onChange,
        showError,
        setShowError,
        messageError,
        clearOwnerFields,
        handleContinue,
        onFinishFailed,
        isWithinRange,
        onBack
    };
};
/* harmony default export */ const taxInformation_useTaxInformationForm = (useTaxInformationForm);

;// CONCATENATED MODULE: ./src/components/common/buyersComponents/formSteps/taxInformation/TaxInformation.tsx
/* eslint-disable array-callback-return */ 




/**
 * TaxInformation component displays a form to input tax information.
 * This component uses useTaxInformationForm hook to manage form data and validation.
 *
 * @returns the tax information form - step 2
 */ const TaxInformation = ()=>{
    const { form , onChange , showError , setShowError , messageError , clearOwnerFields , handleContinue , onFinishFailed , isWithinRange , onBack ,  } = taxInformation_useTaxInformationForm();
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Card, {
            className: (TaxInformation_module_default()).form_create,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    showError && /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Alert, {
                        showIcon: true,
                        closable: true,
                        type: "error",
                        className: "alert_red",
                        message: messageError,
                        style: {
                            marginBottom: "1rem"
                        },
                        afterClose: ()=>setShowError(false),
                        icon: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            width: 24,
                            height: 24,
                            alt: "logo_conexis",
                            src: "/assets/icons/alert_error.svg"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Form, {
                        form: form,
                        scrollToFirstError: true,
                        name: "taxInformation",
                        onFinish: handleContinue,
                        onFinishFailed: onFinishFailed,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (TaxInformation_module_default()).form_subtitle_container,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (TaxInformation_module_default()).form_small_title,
                                        children: "Tax information"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: (TaxInformation_module_default()).form_clear_fields,
                                        type: "button",
                                        onClick: clearOwnerFields,
                                        children: "Clear fields"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Row, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Col, {
                                        lg: 24,
                                        sm: 24,
                                        xs: 24,
                                        md: 24,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                            name: "vatAmount",
                                            label: "VAT/Federal",
                                            className: (TaxInformation_module_default()).label,
                                            validateTrigger: "onSubmit",
                                            required: false,
                                            rules: [
                                                {
                                                    validator: async (_, value)=>{
                                                        if (value && !isWithinRange(value)) {
                                                            return Promise.reject();
                                                        }
                                                        return Promise.resolve();
                                                    }
                                                }, 
                                            ],
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                                                size: "large",
                                                type: "number",
                                                placeholder: "Enter VAT/federal here",
                                                onChange: (e)=>onChange(e.target.value, "vatAmount")
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Col, {
                                        lg: 24,
                                        sm: 24,
                                        xs: 24,
                                        md: 24,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                            name: "salesTaxAmount",
                                            className: (TaxInformation_module_default()).label,
                                            label: "Provincial/State sales tax",
                                            validateTrigger: "onSubmit",
                                            required: false,
                                            rules: [
                                                {
                                                    validator: async (_, value)=>{
                                                        if (value && !isWithinRange(value)) {
                                                            return Promise.reject();
                                                        }
                                                        return Promise.resolve();
                                                    }
                                                }, 
                                            ],
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                                                size: "large",
                                                type: "number",
                                                placeholder: "Enter provincial/state sales tax here",
                                                onChange: (e)=>onChange(e.target.value, "salesTaxAmount")
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Col, {
                                        lg: 24,
                                        sm: 24,
                                        xs: 24,
                                        md: 24,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                            name: "otherTaxAmount",
                                            label: "Other",
                                            className: (TaxInformation_module_default()).label,
                                            validateTrigger: "onSubmit",
                                            required: false,
                                            rules: [
                                                {
                                                    validator: async (_, value)=>{
                                                        if (value && !isWithinRange(value)) {
                                                            return Promise.reject();
                                                        }
                                                        return Promise.resolve();
                                                    }
                                                }, 
                                            ],
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                                                size: "large",
                                                type: "number",
                                                placeholder: "Enter other here",
                                                onChange: (e)=>onChange(e.target.value, "otherTaxAmount")
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (TaxInformation_module_default()).continue_button,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Button, {
                                        type: "default",
                                        onClick: onBack,
                                        children: "Back"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Button, {
                                        size: "large",
                                        type: "primary",
                                        htmlType: "submit",
                                        children: "Continue"
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
/* harmony default export */ const taxInformation_TaxInformation = (TaxInformation);


/***/ }),

/***/ 27133:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _locales_en_en_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89235);
/* harmony import */ var _WontBeAbleEdit_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34835);
/* harmony import */ var _WontBeAbleEdit_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_WontBeAbleEdit_module_scss__WEBPACK_IMPORTED_MODULE_2__);



const { buyers: { firstStep  } ,  } = _locales_en_en_json__WEBPACK_IMPORTED_MODULE_1__;
const WontBeAbleEdit = ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_WontBeAbleEdit_module_scss__WEBPACK_IMPORTED_MODULE_2___default().cannot_edited),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `${(_WontBeAbleEdit_module_scss__WEBPACK_IMPORTED_MODULE_2___default().info_icon)}`,
                children: "."
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `${(_WontBeAbleEdit_module_scss__WEBPACK_IMPORTED_MODULE_2___default().info_text)}`,
                children: firstStep.wontBeAbleEdit
            })
        ]
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WontBeAbleEdit);


/***/ }),

/***/ 89712:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ BOOLEAN_SELECT_OPTIONS)
/* harmony export */ });
/* harmony import */ var _locales_en_en_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89235);

const { consts: { selects: { booleanSelectOptions  } ,  } ,  } = _locales_en_en_json__WEBPACK_IMPORTED_MODULE_0__;
const BOOLEAN_SELECT_OPTIONS = [
    {
        label: booleanSelectOptions.no,
        value: false
    },
    {
        label: booleanSelectOptions.yes,
        value: true
    }, 
];


/***/ })

};
;