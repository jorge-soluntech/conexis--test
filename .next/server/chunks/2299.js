exports.id = 2299;
exports.ids = [2299];
exports.modules = {

/***/ 95629:
/***/ ((module) => {

// Exports
module.exports = {
	"actions_form": "actionsPostJob_actions_form__GctjK",
	"col_cancel": "actionsPostJob_col_cancel__iMF5Q",
	"col_save": "actionsPostJob_col_save__xkRwe",
	"col_send": "actionsPostJob_col_send__edogW",
	"dropdown": "actionsPostJob_dropdown__Oq7KH",
	"dropdown__button": "actionsPostJob_dropdown__button__tEi65",
	"dropdown__title": "actionsPostJob_dropdown__title__XuBdJ",
	"dropdown__icon_wrapper": "actionsPostJob_dropdown__icon_wrapper__A4Tlv",
	"moveToRight": "actionsPostJob_moveToRight__fh8hw"
};


/***/ }),

/***/ 73989:
/***/ ((module) => {

// Exports
module.exports = {
	"row": "contentFormPostJob_row__H_Blc",
	"col_item": "contentFormPostJob_col_item__ExwP8",
	"show_attachment": "contentFormPostJob_show_attachment__i2usL",
	"divider_form": "contentFormPostJob_divider_form__nIdg7",
	"title": "contentFormPostJob_title__q2W05",
	"moveToRight": "contentFormPostJob_moveToRight__epgc1"
};


/***/ }),

/***/ 42574:
/***/ ((module) => {

// Exports
module.exports = {
	"post_job": "postNewJobs_post_job__aYg4d",
	"post_job__buyer": "postNewJobs_post_job__buyer__yKWCP",
	"post_job__title": "postNewJobs_post_job__title__nlN9W",
	"form_container": "postNewJobs_form_container__EfPgQ",
	"moveToRight": "postNewJobs_moveToRight__7saxZ"
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

/***/ 98916:
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _application_authContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78760);
/* harmony import */ var _application_postJobsSlice_postJobsSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47498);
/* harmony import */ var _components_hooks_useAttachments_useFileUpload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(54964);
/* harmony import */ var _components_hooks_useValidateFields__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(29776);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(90396);
/* harmony import */ var _consts_forms_general__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(48522);
/* harmony import */ var _locales_en_en_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(89235);
/* harmony import */ var _utils_scrollToRef__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(72909);
/* harmony import */ var _hooks_storeHooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(89480);
/* harmony import */ var _alertComponent_AlertMessage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(72017);
/* harmony import */ var _actionsPostJob_ActionsPostJob__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(48828);
/* harmony import */ var _addressRowFields_AddressRowFields__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(74907);
/* harmony import */ var _bUnitsGLCodesFields_BUnitsGLCodesFields__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(97305);
/* harmony import */ var _cityZipFields_CityZipFields__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(57537);
/* harmony import */ var _contentFormPostJob_module_scss__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(73989);
/* harmony import */ var _contentFormPostJob_module_scss__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_contentFormPostJob_module_scss__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _costCenterSuppliersFields_CostCenterSuppliersFields__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(37182);
/* harmony import */ var _countryStateFields_CountryStateFields__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(89412);
/* harmony import */ var _datesRowFields_DatesRowFields__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(77704);
/* harmony import */ var _fieldApprovers_FieldApprovers__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(68478);
/* harmony import */ var _fieldHiringManager_FieldHiringManager__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(59434);
/* harmony import */ var _jobAttachment_JobAttachment__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(85441);
/* harmony import */ var _salaryRangeFields_SalaryRangeFields__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(55249);
/* harmony import */ var _secondRowFields_SecondRowFields__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(84465);
/* harmony import */ var _summaryCommentsFields_SummaryCommentsFields__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(95765);
/* harmony import */ var _thirdRowFields_ThirdRowFields__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(64162);
/* harmony import */ var _workShiftsRowFields_WorkShiftsRowFields__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(4786);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_application_authContext__WEBPACK_IMPORTED_MODULE_4__, _application_postJobsSlice_postJobsSlice__WEBPACK_IMPORTED_MODULE_5__, _components_hooks_useAttachments_useFileUpload__WEBPACK_IMPORTED_MODULE_6__, _actionsPostJob_ActionsPostJob__WEBPACK_IMPORTED_MODULE_12__, _countryStateFields_CountryStateFields__WEBPACK_IMPORTED_MODULE_17__, _jobAttachment_JobAttachment__WEBPACK_IMPORTED_MODULE_21__, _thirdRowFields_ThirdRowFields__WEBPACK_IMPORTED_MODULE_25__, _workShiftsRowFields_WorkShiftsRowFields__WEBPACK_IMPORTED_MODULE_26__]);
([_application_authContext__WEBPACK_IMPORTED_MODULE_4__, _application_postJobsSlice_postJobsSlice__WEBPACK_IMPORTED_MODULE_5__, _components_hooks_useAttachments_useFileUpload__WEBPACK_IMPORTED_MODULE_6__, _actionsPostJob_ActionsPostJob__WEBPACK_IMPORTED_MODULE_12__, _countryStateFields_CountryStateFields__WEBPACK_IMPORTED_MODULE_17__, _jobAttachment_JobAttachment__WEBPACK_IMPORTED_MODULE_21__, _thirdRowFields_ThirdRowFields__WEBPACK_IMPORTED_MODULE_25__, _workShiftsRowFields_WorkShiftsRowFields__WEBPACK_IMPORTED_MODULE_26__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






























const { Title  } = antd__WEBPACK_IMPORTED_MODULE_1__.Typography;
const fieldsMandatories = _consts__WEBPACK_IMPORTED_MODULE_8__/* .postJobsUI.FORM_FIELDS.mandatory */ .dx.FORM_FIELDS.mandatory;
const fieldsOptionals = _consts__WEBPACK_IMPORTED_MODULE_8__/* .postJobsUI.FORM_FIELDS.optionals */ .dx.FORM_FIELDS.optionals;
const customFormat = (value)=>value?.format(_consts_forms_general__WEBPACK_IMPORTED_MODULE_27__/* .customFormatDate */ .JK);
const { postNewJob: { formCreate  } ,  } = _locales_en_en_json__WEBPACK_IMPORTED_MODULE_9__;
const ContentFormPostJob = ()=>{
    const [form] = antd__WEBPACK_IMPORTED_MODULE_1__.Form.useForm();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const dispatch = (0,_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_10__/* .useAppDispatch */ .T)();
    const { valuesFormPostJob , selectedWorkShifts , isPermanentJob , valueSubmitStatus ,  } = (0,_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_10__/* .useAppSelector */ .C)((state)=>state.postJobs);
    const refContainer = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    const { messageError , showError , activateErrorAlert , validatorEmptyAllFields ,  } = (0,_components_hooks_useValidateFields__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    const { dataUser  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_application_authContext__WEBPACK_IMPORTED_MODULE_4__/* .AuthContext */ .Vo);
    const { updateFileAdded  } = (0,_components_hooks_useAttachments_useFileUpload__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    const onFinishFailed = ()=>(0,_utils_scrollToRef__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z)(refContainer);
    const onFinish = async (values)=>{
        const fileUploaded = form.getFieldValue("job_description_attachment");
        const supplierList = form.getFieldValue("supplier_distribution_list_ids");
        const costCenterList = form.getFieldValue("cost_centers_ids");
        const workShiftsList = selectedWorkShifts.filter((workKey)=>workKey);
        if (fileUploaded) {
            await updateFileAdded(fileUploaded);
        }
        const valuesFormToSend = {
            ...values,
            planned_start_date: customFormat(values.planned_start_date),
            planned_end_date: customFormat(values.planned_end_date),
            work_shifts_ids: workShiftsList?.length > 0 ? workShiftsList : null,
            job_description_attachment: fileUploaded ? fileUploaded.path : null,
            save_status: valueSubmitStatus,
            supplier_distribution_list_ids: supplierList || null,
            cost_centers_ids: costCenterList || null
        };
        const response = await dispatch((0,_application_postJobsSlice_postJobsSlice__WEBPACK_IMPORTED_MODULE_5__/* .createNewJob */ .OK)({
            router,
            body: valuesFormToSend
        }));
        if (response.payload.statusCode === 400) {
            activateErrorAlert(true, Array.isArray(response.payload?.message) ? response.payload?.message?.[0] : response.payload?.message);
            (0,_utils_scrollToRef__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z)(refContainer);
            return;
        }
        if (response.payload.statusCode === 201) {
            router.push({
                pathname: _consts__WEBPACK_IMPORTED_MODULE_8__/* .urls.URL_POST_JOB */ .jk.Ae,
                query: {
                    success: valueSubmitStatus
                }
            });
            dispatch((0,_application_postJobsSlice_postJobsSlice__WEBPACK_IMPORTED_MODULE_5__/* .resetValuesFormPostJob */ .Mu)());
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        ref: refContainer,
        children: [
            showError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_alertComponent_AlertMessage__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                afterClose: ()=>activateErrorAlert(false),
                message: messageError
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Form, {
                name: "content-form-post-job",
                initialValues: valuesFormPostJob,
                onFinish: onFinish,
                layout: "vertical",
                validateTrigger: "onSubmit",
                form: form,
                onFinishFailed: onFinishFailed,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
                        level: 5,
                        className: (_contentFormPostJob_module_scss__WEBPACK_IMPORTED_MODULE_29___default().title),
                        children: formCreate.titleInformation
                    }),
                    !dataUser?.bypass_job_approval && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fieldApprovers_FieldApprovers__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                        className: (_contentFormPostJob_module_scss__WEBPACK_IMPORTED_MODULE_29___default().row),
                        name: fieldsMandatories[0] ?? "",
                        form: form,
                        validatorFields: validatorEmptyAllFields
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_secondRowFields_SecondRowFields__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                        className: (_contentFormPostJob_module_scss__WEBPACK_IMPORTED_MODULE_29___default().row),
                        name: fieldsMandatories[1] ?? "",
                        secondName: fieldsOptionals[0] ?? "",
                        form: form,
                        validatorFields: validatorEmptyAllFields
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_thirdRowFields_ThirdRowFields__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
                        className: (_contentFormPostJob_module_scss__WEBPACK_IMPORTED_MODULE_29___default().row),
                        name: fieldsMandatories[2] ?? "",
                        secondName: fieldsMandatories[3] ?? "",
                        form: form,
                        validatorFields: validatorEmptyAllFields
                    }),
                    !isPermanentJob ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_workShiftsRowFields_WorkShiftsRowFields__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
                        className: (_contentFormPostJob_module_scss__WEBPACK_IMPORTED_MODULE_29___default().row),
                        name: fieldsMandatories[7] ?? "",
                        secondName: fieldsOptionals[1] ?? "",
                        form: form,
                        validatorFields: validatorEmptyAllFields
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_salaryRangeFields_SalaryRangeFields__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                        className: (_contentFormPostJob_module_scss__WEBPACK_IMPORTED_MODULE_29___default().row),
                        name: fieldsMandatories[8] ?? "",
                        secondName: fieldsMandatories[9] ?? "",
                        form: form,
                        validatorFields: validatorEmptyAllFields
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fieldHiringManager_FieldHiringManager__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                        className: (_contentFormPostJob_module_scss__WEBPACK_IMPORTED_MODULE_29___default().row),
                        name: fieldsMandatories[4] ?? "",
                        form: form,
                        validatorFields: validatorEmptyAllFields
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_datesRowFields_DatesRowFields__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                        className: (_contentFormPostJob_module_scss__WEBPACK_IMPORTED_MODULE_29___default().row),
                        name: fieldsMandatories[5] ?? "",
                        secondName: fieldsMandatories[6] ?? "",
                        form: form,
                        validatorFields: validatorEmptyAllFields
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_jobAttachment_JobAttachment__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                        className: (_contentFormPostJob_module_scss__WEBPACK_IMPORTED_MODULE_29___default().row),
                        name: fieldsOptionals[2] ?? "",
                        form: form
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_summaryCommentsFields_SummaryCommentsFields__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
                        className: (_contentFormPostJob_module_scss__WEBPACK_IMPORTED_MODULE_29___default().row),
                        name: fieldsOptionals[3] ?? "",
                        secondName: fieldsOptionals[4] ?? ""
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Divider, {
                        className: (_contentFormPostJob_module_scss__WEBPACK_IMPORTED_MODULE_29___default().divider_form)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
                        level: 5,
                        className: (_contentFormPostJob_module_scss__WEBPACK_IMPORTED_MODULE_29___default().title),
                        children: formCreate.titleLocation
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_addressRowFields_AddressRowFields__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                        className: (_contentFormPostJob_module_scss__WEBPACK_IMPORTED_MODULE_29___default().row),
                        name: fieldsOptionals[5] ?? "",
                        secondName: fieldsOptionals[6] ?? ""
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_countryStateFields_CountryStateFields__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                        className: (_contentFormPostJob_module_scss__WEBPACK_IMPORTED_MODULE_29___default().row),
                        name: fieldsOptionals[7] ?? "",
                        secondName: fieldsOptionals[8] ?? ""
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_cityZipFields_CityZipFields__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                        className: (_contentFormPostJob_module_scss__WEBPACK_IMPORTED_MODULE_29___default().row),
                        name: fieldsOptionals[9] ?? "",
                        secondName: fieldsOptionals[10] ?? ""
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Divider, {
                        className: (_contentFormPostJob_module_scss__WEBPACK_IMPORTED_MODULE_29___default().divider_form)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
                        level: 5,
                        className: (_contentFormPostJob_module_scss__WEBPACK_IMPORTED_MODULE_29___default().title),
                        children: formCreate.titleAdditional
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bUnitsGLCodesFields_BUnitsGLCodesFields__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                        className: (_contentFormPostJob_module_scss__WEBPACK_IMPORTED_MODULE_29___default().row),
                        name: fieldsOptionals[11] ?? "",
                        secondName: fieldsOptionals[12] ?? ""
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_costCenterSuppliersFields_CostCenterSuppliersFields__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                        className: (_contentFormPostJob_module_scss__WEBPACK_IMPORTED_MODULE_29___default().row),
                        name: fieldsOptionals[13] ?? "",
                        secondName: fieldsOptionals[14] ?? ""
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_actionsPostJob_ActionsPostJob__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                        form: form
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentFormPostJob);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 48828:
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _application_postJobsSlice_postJobsSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47498);
/* harmony import */ var _assets_arrowDown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92530);
/* harmony import */ var _components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(89480);
/* harmony import */ var _components_hooks_useWindowDimension__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(60255);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(90396);
/* harmony import */ var _consts_breakpoints__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(58310);
/* harmony import */ var _locales_en_en_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(89235);
/* harmony import */ var _actionsPostJob_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(95629);
/* harmony import */ var _actionsPostJob_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_actionsPostJob_module_scss__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_application_postJobsSlice_postJobsSlice__WEBPACK_IMPORTED_MODULE_4__]);
_application_postJobsSlice_postJobsSlice__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];












const { postNewJob: { formCreate  } ,  } = _locales_en_en_json__WEBPACK_IMPORTED_MODULE_9__;
const ActionsPostJob = ({ form  })=>{
    const { width =0  } = (0,_components_hooks_useWindowDimension__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    const dispatch = (0,_components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_6__/* .useAppDispatch */ .T)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { loading  } = (0,_components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_6__/* .useAppSelector */ .C)((state)=>state.postJobs);
    const handleMenuClick = (e)=>{
        dispatch((0,_application_postJobsSlice_postJobsSlice__WEBPACK_IMPORTED_MODULE_4__/* .setValueSubmitStatus */ .lb)(e.key));
        form?.submit();
    };
    const menuProps = {
        items: _consts__WEBPACK_IMPORTED_MODULE_8__/* .postJobsUI.SAVE_OPTIONS */ .dx.SAVE_OPTIONS,
        onClick: handleMenuClick
    };
    const handleSend = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        dispatch((0,_application_postJobsSlice_postJobsSlice__WEBPACK_IMPORTED_MODULE_4__/* .setValueSubmitStatus */ .lb)(_consts__WEBPACK_IMPORTED_MODULE_8__/* .postJobsUI.OPTIONS_SAVE_STATUS.isSentNow */ .dx.OPTIONS_SAVE_STATUS.isSentNow));
        form?.submit();
    }, [
        dispatch,
        form
    ]);
    const handleCancel = ()=>{
        dispatch((0,_application_postJobsSlice_postJobsSlice__WEBPACK_IMPORTED_MODULE_4__/* .resetValuesFormPostJob */ .Mu)());
        router.push(_consts__WEBPACK_IMPORTED_MODULE_8__/* .urls.URL_MY_JOBS */ .jk.dP);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
        justify: "end",
        gutter: [
            8,
            8
        ],
        className: (_actionsPostJob_module_scss__WEBPACK_IMPORTED_MODULE_10___default().actions_form),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                xs: 12,
                md: 4,
                className: (_actionsPostJob_module_scss__WEBPACK_IMPORTED_MODULE_10___default().col_cancel),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
                    type: "default",
                    htmlType: "button",
                    onClick: handleCancel,
                    className: (_actionsPostJob_module_scss__WEBPACK_IMPORTED_MODULE_10___default().submit),
                    block: width <= _consts_breakpoints__WEBPACK_IMPORTED_MODULE_11__/* .MOBILE_BREAKPOINT */ .Gh,
                    children: formCreate.titleCancel
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                xs: 12,
                md: 4,
                className: (_actionsPostJob_module_scss__WEBPACK_IMPORTED_MODULE_10___default().col_save),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Dropdown, {
                    menu: menuProps,
                    trigger: [
                        "click"
                    ],
                    overlayClassName: (_actionsPostJob_module_scss__WEBPACK_IMPORTED_MODULE_10___default().dropdown),
                    placement: "bottomRight",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
                        size: "large",
                        type: "default",
                        htmlType: "button",
                        className: (_actionsPostJob_module_scss__WEBPACK_IMPORTED_MODULE_10___default().dropdown__button),
                        block: width <= _consts_breakpoints__WEBPACK_IMPORTED_MODULE_11__/* .MOBILE_BREAKPOINT */ .Gh,
                        loading: loading.loadingSave,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: (_actionsPostJob_module_scss__WEBPACK_IMPORTED_MODULE_10___default().dropdown__title),
                                children: formCreate.titleSave
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_actionsPostJob_module_scss__WEBPACK_IMPORTED_MODULE_10___default().dropdown__icon_wrapper),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_assets_arrowDown__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                xs: 24,
                md: 4,
                className: (_actionsPostJob_module_scss__WEBPACK_IMPORTED_MODULE_10___default().col_send),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
                    type: "primary",
                    htmlType: "button",
                    onClick: handleSend,
                    className: (_actionsPostJob_module_scss__WEBPACK_IMPORTED_MODULE_10___default().send_now),
                    block: width <= _consts_breakpoints__WEBPACK_IMPORTED_MODULE_11__/* .MOBILE_BREAKPOINT */ .Gh,
                    loading: loading.loadingSend,
                    children: formCreate.titleSend
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActionsPostJob);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 74907:
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
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90396);
/* harmony import */ var _locales_en_en_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89235);





const AddressRowFields = ({ className , name , secondName ,  })=>{
    const { postNewJob: { formCreate  } ,  } = _locales_en_en_json__WEBPACK_IMPORTED_MODULE_4__;
    const { GUTTERS  } = _consts__WEBPACK_IMPORTED_MODULE_3__/* .gutters */ .lc;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
        className: className,
        gutter: GUTTERS.formField,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                xs: 24,
                md: 12,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                    label: formCreate.labelAddressLine1,
                    name: name,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Input, {
                        placeholder: formCreate.placeholderAddressLine1,
                        size: "large"
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                xs: 24,
                md: 12,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                    label: formCreate.labelAddressLine2,
                    name: secondName,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Input, {
                        placeholder: formCreate.placeholderAddressLine2,
                        size: "large"
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddressRowFields);


/***/ }),

/***/ 97305:
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
/* harmony import */ var _components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89480);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90396);
/* harmony import */ var _locales_en_en_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89235);






const { postNewJob: { formCreate  } ,  } = _locales_en_en_json__WEBPACK_IMPORTED_MODULE_5__;
const BUnitsGLCodesFields = ({ className , name , secondName , form ,  })=>{
    const { GUTTERS  } = _consts__WEBPACK_IMPORTED_MODULE_4__/* .gutters */ .lc;
    const { businessUnitsByBuyer , glCodesByBuyer  } = (0,_components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_3__/* .useAppSelector */ .C)((state)=>state.postJobs);
    const handleChangeBUnits = (value)=>form?.setFieldsValue({
            business_unit_id: value
        });
    const handleChangeGLCodes = (value)=>form?.setFieldsValue({
            gl_code_id: value
        });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
        className: className,
        gutter: GUTTERS.formField,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                xs: 24,
                md: 12,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                    label: formCreate.labelBUnits,
                    name: name,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Select, {
                        allowClear: true,
                        style: {
                            width: "100%"
                        },
                        placeholder: formCreate.placeholderBUnits,
                        onChange: handleChangeBUnits,
                        options: businessUnitsByBuyer
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                xs: 24,
                md: 12,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                    label: formCreate.labelGLCode,
                    name: secondName,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Select, {
                        allowClear: true,
                        style: {
                            width: "100%"
                        },
                        placeholder: formCreate.placeholderGLCode,
                        onChange: handleChangeGLCodes,
                        options: glCodesByBuyer
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BUnitsGLCodesFields);


/***/ }),

/***/ 57537:
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
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90396);
/* harmony import */ var _locales_en_en_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89235);





const CityZipFields = ({ className , name , secondName ,  })=>{
    const { postNewJob: { formCreate  } ,  } = _locales_en_en_json__WEBPACK_IMPORTED_MODULE_4__;
    const { GUTTERS  } = _consts__WEBPACK_IMPORTED_MODULE_3__/* .gutters */ .lc;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
        className: className,
        gutter: GUTTERS.formField,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                xs: 24,
                md: 12,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                    label: formCreate.labelCity,
                    name: name,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Input, {
                        placeholder: formCreate.placeholderCity,
                        size: "large"
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                xs: 24,
                md: 12,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                    label: formCreate.labelZip,
                    name: secondName,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Input, {
                        placeholder: formCreate.placeholderZip,
                        size: "large"
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CityZipFields);


/***/ }),

/***/ 37182:
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
/* harmony import */ var _components_common_TagRender_TagRender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2224);
/* harmony import */ var _components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89480);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(90396);
/* harmony import */ var _locales_en_en_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(89235);







const { postNewJob: { formCreate  } ,  } = _locales_en_en_json__WEBPACK_IMPORTED_MODULE_6__;
const CostCenterSuppliersFields = ({ className , name , secondName ,  })=>{
    const { GUTTERS  } = _consts__WEBPACK_IMPORTED_MODULE_5__/* .gutters */ .lc;
    const { costCentersByBuyer , suppliersByBuyer  } = (0,_components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_4__/* .useAppSelector */ .C)((state)=>state.postJobs);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
        className: className,
        gutter: GUTTERS.formField,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                xs: 24,
                md: 12,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                    label: formCreate.labelCostCenters,
                    name: name,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Select, {
                        mode: "multiple",
                        options: costCentersByBuyer,
                        size: "large",
                        tagRender: _components_common_TagRender_TagRender__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                        showArrow: true,
                        maxTagCount: "responsive",
                        allowClear: true,
                        style: {
                            height: "fit-content"
                        },
                        placeholder: formCreate.placeholderCostCenter,
                        filterOption: (input, option)=>(option?.value ?? "").toLowerCase().includes(input.toLowerCase()),
                        filterSort: (optionA, optionB)=>((optionA?.label) ?? "").toLowerCase().localeCompare(((optionB?.label) ?? "").toLowerCase())
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                xs: 24,
                md: 12,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                    label: formCreate.labelSupplierList,
                    name: secondName,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Select, {
                        mode: "multiple",
                        options: suppliersByBuyer,
                        size: "large",
                        tagRender: _components_common_TagRender_TagRender__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                        maxTagCount: "responsive",
                        showArrow: true,
                        allowClear: true,
                        style: {
                            height: "fit-content"
                        },
                        placeholder: formCreate.placeholderSupplierList,
                        filterOption: (input, option)=>(option?.value ?? "").toLowerCase().includes(input.toLowerCase()),
                        filterSort: (optionA, optionB)=>((optionA?.label) ?? "").toLowerCase().localeCompare(((optionB?.label) ?? "").toLowerCase())
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CostCenterSuppliersFields);


/***/ }),

/***/ 89412:
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89480);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(90396);
/* harmony import */ var _locales_en_en_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(89235);
/* harmony import */ var _application_postJobsSlice_postJobsSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(47498);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_application_postJobsSlice_postJobsSlice__WEBPACK_IMPORTED_MODULE_7__]);
_application_postJobsSlice_postJobsSlice__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const CountryStateFields = ({ className , name , secondName , form ,  })=>{
    const { postNewJob: { formCreate  } ,  } = _locales_en_en_json__WEBPACK_IMPORTED_MODULE_6__;
    const { GUTTERS  } = _consts__WEBPACK_IMPORTED_MODULE_5__/* .gutters */ .lc;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const dispatch = (0,_components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_4__/* .useAppDispatch */ .T)();
    const { listCountries , listProvinces  } = (0,_components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_4__/* .useAppSelector */ .C)((state)=>state.postJobs);
    const handleChangeCountry = (value)=>{
        if (!value) {
            dispatch((0,_application_postJobsSlice_postJobsSlice__WEBPACK_IMPORTED_MODULE_7__/* .setClearProvinces */ .Jc)());
            form?.setFieldsValue({
                country_id: value
            });
            return;
        }
        dispatch((0,_application_postJobsSlice_postJobsSlice__WEBPACK_IMPORTED_MODULE_7__/* .readProvinces */ .LO)({
            router,
            idCountry: value
        }));
    };
    const handleChangeState = (value)=>form?.setFieldsValue({
            province_region_id: value
        });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
        className: className,
        gutter: GUTTERS.formField,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                xs: 24,
                md: 12,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                    label: formCreate.labelCountry,
                    name: name,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Select, {
                        allowClear: true,
                        style: {
                            width: "100%"
                        },
                        placeholder: formCreate.placeholderCountry,
                        onChange: handleChangeCountry,
                        options: listCountries,
                        showSearch: true,
                        filterOption: (input, option)=>(option?.label ?? "").toLowerCase().includes(input.toLowerCase())
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                xs: 24,
                md: 12,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                    label: formCreate.labelState,
                    name: secondName,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Select, {
                        allowClear: true,
                        style: {
                            width: "100%"
                        },
                        placeholder: formCreate.placeholderState,
                        onChange: handleChangeState,
                        options: listProvinces
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CountryStateFields);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 77704:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89480);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90396);
/* harmony import */ var _consts_forms_general__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(48522);
/* harmony import */ var _locales_en_en_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89235);
/* harmony import */ var _useFormPostJob_useFormPostJob__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(94308);







const { postNewJob: { formCreate  } ,  } = _locales_en_en_json__WEBPACK_IMPORTED_MODULE_4__;
const DatesRowFields = ({ className , name , secondName , form , validatorFields ,  })=>{
    const { GUTTERS  } = _consts__WEBPACK_IMPORTED_MODULE_3__/* .gutters */ .lc;
    const { configItem  } = (0,_useFormPostJob_useFormPostJob__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const { isPermanentJob  } = (0,_components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_2__/* .useAppSelector */ .C)((state)=>state.postJobs);
    const lgPermanentJobColStyles = isPermanentJob ? 24 : 12;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
        className: className,
        gutter: GUTTERS.formField,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                xs: 24,
                lg: lgPermanentJobColStyles,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                    label: formCreate.labelPlannedStartDate,
                    name: name,
                    ...configItem(formCreate.textErrorPlannedStartDate, _consts__WEBPACK_IMPORTED_MODULE_3__/* .postJobsUI.FORM_FIELDS.mandatory */ .dx.FORM_FIELDS.mandatory, form, "date", validatorFields),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.DatePicker, {
                        format: _consts_forms_general__WEBPACK_IMPORTED_MODULE_6__/* .formatDate */ .p6
                    })
                })
            }),
            !isPermanentJob && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                xs: 24,
                lg: 12,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                    label: formCreate.labelPlannedEndDate,
                    name: secondName,
                    ...configItem(formCreate.textErrorPlannedEndDate, _consts__WEBPACK_IMPORTED_MODULE_3__/* .postJobsUI.FORM_FIELDS.mandatory */ .dx.FORM_FIELDS.mandatory, form, "date", validatorFields),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.DatePicker, {
                        format: _consts_forms_general__WEBPACK_IMPORTED_MODULE_6__/* .formatDate */ .p6
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DatesRowFields);


/***/ }),

/***/ 68478:
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
/* harmony import */ var _components_common_TagRender_TagRender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2224);
/* harmony import */ var _components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89480);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(90396);
/* harmony import */ var _locales_en_en_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(89235);
/* harmony import */ var _useFormPostJob_useFormPostJob__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(94308);








const FieldApprovers = ({ className , name , form , validatorFields ,  })=>{
    const { postNewJob: { formCreate  } ,  } = _locales_en_en_json__WEBPACK_IMPORTED_MODULE_6__;
    const { GUTTERS  } = _consts__WEBPACK_IMPORTED_MODULE_5__/* .gutters */ .lc;
    const { configItem  } = (0,_useFormPostJob_useFormPostJob__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    const { possibleApprovers  } = (0,_components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_4__/* .useAppSelector */ .C)((state)=>state.postJobs);
    const handleChange = (value)=>{
        if (value.length === 0) {
            form?.setFieldsValue({
                approvers_ids: undefined
            });
            return;
        }
        form?.setFieldsValue({
            approvers_ids: value
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
        className: className,
        gutter: GUTTERS.formField,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
            span: 24,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                label: formCreate.labelApprovers,
                name: name,
                ...configItem(formCreate.textErrorApprovers, _consts__WEBPACK_IMPORTED_MODULE_5__/* .postJobsUI.FORM_FIELDS.mandatory */ .dx.FORM_FIELDS.mandatory, form, "object", validatorFields),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Select, {
                    mode: "multiple",
                    options: possibleApprovers,
                    size: "large",
                    tagRender: _components_common_TagRender_TagRender__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                    maxTagCount: "responsive",
                    showArrow: true,
                    allowClear: true,
                    style: {
                        height: "fit-content"
                    },
                    placeholder: formCreate.placeholderApprovers,
                    onChange: handleChange,
                    filterOption: (input, option)=>(option?.label ?? "").toLowerCase().includes(input.toLowerCase()),
                    filterSort: (optionA, optionB)=>((optionA?.label) ?? "").toLowerCase().localeCompare(((optionB?.label) ?? "").toLowerCase())
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FieldApprovers);


/***/ }),

/***/ 59434:
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
/* harmony import */ var _components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89480);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90396);
/* harmony import */ var _locales_en_en_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89235);
/* harmony import */ var _useFormPostJob_useFormPostJob__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(94308);







const FieldHiringManager = ({ className , name , form , validatorFields ,  })=>{
    const { postNewJob: { formCreate  } ,  } = _locales_en_en_json__WEBPACK_IMPORTED_MODULE_5__;
    const { GUTTERS  } = _consts__WEBPACK_IMPORTED_MODULE_4__/* .gutters */ .lc;
    const { configItem  } = (0,_useFormPostJob_useFormPostJob__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    const { possibleHiringManagers  } = (0,_components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_3__/* .useAppSelector */ .C)((state)=>state.postJobs);
    const handleChange = (value)=>form?.setFieldsValue({
            primary_hiring_manager: value
        });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
        className: className,
        gutter: GUTTERS.formField,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
            span: 24,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                label: formCreate.labelHiringManager,
                name: name,
                ...configItem(formCreate.textErrorHiringManager, _consts__WEBPACK_IMPORTED_MODULE_4__/* .postJobsUI.FORM_FIELDS.mandatory */ .dx.FORM_FIELDS.mandatory, form, "string", validatorFields),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Select, {
                    showSearch: true,
                    optionFilterProp: "children",
                    allowClear: true,
                    style: {
                        width: "100%"
                    },
                    placeholder: formCreate.placeholderHiringManager,
                    onChange: handleChange,
                    options: possibleHiringManagers,
                    filterOption: (input, option)=>(option?.label ?? "").toLowerCase().includes(input.toLowerCase())
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FieldHiringManager);


/***/ }),

/***/ 85441:
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
/* harmony import */ var _components_common_uploadAttachmentComponent_UploadAttachmentComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2578);
/* harmony import */ var _components_hooks_useAttachments_useFileUpload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54964);
/* harmony import */ var _components_hooks_useFileDownload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(88084);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90396);
/* harmony import */ var _locales_en_en_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(89235);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_hooks_useAttachments_useFileUpload__WEBPACK_IMPORTED_MODULE_4__, _components_hooks_useFileDownload__WEBPACK_IMPORTED_MODULE_5__]);
([_components_hooks_useAttachments_useFileUpload__WEBPACK_IMPORTED_MODULE_4__, _components_hooks_useFileDownload__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const JobAttachment = ({ className , name , form ,  })=>{
    const { postNewJob: { formCreate  } ,  } = _locales_en_en_json__WEBPACK_IMPORTED_MODULE_7__;
    const { GUTTERS  } = _consts__WEBPACK_IMPORTED_MODULE_6__/* .gutters */ .lc;
    const { downloadFile  } = (0,_components_hooks_useFileDownload__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const { attachments , addNewFile  } = (0,_components_hooks_useAttachments_useFileUpload__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        form?.setFieldsValue({
            job_description_attachment: attachments
        });
    }, [
        attachments
    ]);
    const onDownload = ()=>downloadFile({
            name: attachments.fileName,
            id: attachments.path
        });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
        className: className,
        gutter: GUTTERS.formField,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
            span: 24,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                label: formCreate.labelJobAttachments,
                name: name,
                htmlFor: name,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_uploadAttachmentComponent_UploadAttachmentComponent__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    onChange: addNewFile,
                    maxCount: 1,
                    fileName: attachments?.fileName,
                    onDownload: onDownload
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (JobAttachment);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 55249:
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
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90396);
/* harmony import */ var _locales_en_en_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89235);
/* harmony import */ var _utils_currencyFormat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(42190);
/* harmony import */ var _useFormPostJob_useFormPostJob__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(94308);







const { postNewJob: { formCreate  } ,  } = _locales_en_en_json__WEBPACK_IMPORTED_MODULE_4__;
const SalaryRangeFields = ({ className , name , secondName , form , validatorFields ,  })=>{
    const { GUTTERS  } = _consts__WEBPACK_IMPORTED_MODULE_3__/* .gutters */ .lc;
    const { configItem  } = (0,_useFormPostJob_useFormPostJob__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
        className: className,
        gutter: GUTTERS.formField,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                xs: 24,
                md: 12,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                    label: formCreate.labelSalaryLow,
                    name: name,
                    ...configItem(formCreate.textErrorSalaryLow, _consts__WEBPACK_IMPORTED_MODULE_3__/* .postJobsUI.FORM_FIELDS.mandatory */ .dx.FORM_FIELDS.mandatory, form, "number", validatorFields),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.InputNumber, {
                        placeholder: formCreate.placeholderSalaryLow,
                        formatter: (value)=>(0,_utils_currencyFormat__WEBPACK_IMPORTED_MODULE_6__/* .currencyFormatterNumber */ .i)(value),
                        parser: (value)=>(0,_utils_currencyFormat__WEBPACK_IMPORTED_MODULE_6__/* .currencyParserNumber */ .m)(value),
                        size: "large",
                        precision: 2
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                xs: 24,
                md: 12,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                    label: formCreate.labelSalaryHigh,
                    name: secondName,
                    ...configItem(formCreate.textErrorSalaryHigh, _consts__WEBPACK_IMPORTED_MODULE_3__/* .postJobsUI.FORM_FIELDS.mandatory */ .dx.FORM_FIELDS.mandatory, form, "number", validatorFields),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.InputNumber, {
                        placeholder: formCreate.placeholderSalaryHigh,
                        formatter: (value)=>`$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                        parser: (value)=>value.replace(/\$\s?|(,*)/g, ""),
                        size: "large",
                        precision: 2
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SalaryRangeFields);


/***/ }),

/***/ 84465:
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
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90396);
/* harmony import */ var _locales_en_en_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89235);
/* harmony import */ var _useFormPostJob_useFormPostJob__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(94308);






const JobTitleSkillFields = ({ className , name , secondName , form , validatorFields ,  })=>{
    const { postNewJob: { formCreate  } ,  } = _locales_en_en_json__WEBPACK_IMPORTED_MODULE_4__;
    const { GUTTERS  } = _consts__WEBPACK_IMPORTED_MODULE_3__/* .gutters */ .lc;
    const { configItem  } = (0,_useFormPostJob_useFormPostJob__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const handleChange = (value)=>form?.setFieldsValue({
            skill_category: value
        });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
        className: className,
        gutter: GUTTERS.formField,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                xs: 24,
                md: 12,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                    label: formCreate.labelJobTitle,
                    name: name,
                    ...configItem(formCreate.textErrorJobTitle, _consts__WEBPACK_IMPORTED_MODULE_3__/* .postJobsUI.FORM_FIELDS.mandatory */ .dx.FORM_FIELDS.mandatory, form, "string", validatorFields),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Input, {
                        placeholder: formCreate.placeholderJobTitle,
                        size: "large"
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                xs: 24,
                md: 12,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                    label: formCreate.labelSkill,
                    name: secondName,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Select, {
                        allowClear: true,
                        style: {
                            width: "100%"
                        },
                        placeholder: formCreate.placeholderSkill,
                        onChange: handleChange,
                        options: _consts__WEBPACK_IMPORTED_MODULE_3__/* .postJobsUI.SKILL_CATEGORY_OPTIONS */ .dx.SKILL_CATEGORY_OPTIONS
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (JobTitleSkillFields);


/***/ }),

/***/ 95765:
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
/* harmony import */ var _locales_en_en_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89235);




const { TextArea  } = antd__WEBPACK_IMPORTED_MODULE_1__.Input;
const SummaryCommentsFields = ({ className , name , secondName ,  })=>{
    const { postNewJob: { formCreate  } ,  } = _locales_en_en_json__WEBPACK_IMPORTED_MODULE_3__;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
        className: className,
        gutter: [
            24,
            10
        ],
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                xs: 24,
                md: 12,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                    label: formCreate.labelJobSummary,
                    name: name,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TextArea, {
                        rows: 4,
                        placeholder: formCreate.placeholderComments
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                xs: 24,
                md: 12,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                    label: formCreate.labelComments,
                    name: secondName,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TextArea, {
                        rows: 4,
                        placeholder: formCreate.placeholderComments
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SummaryCommentsFields);


/***/ }),

/***/ 64162:
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
/* harmony import */ var _application_postJobsSlice_postJobsSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47498);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90396);
/* harmony import */ var _locales_en_en_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89235);
/* harmony import */ var _hooks_storeHooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89480);
/* harmony import */ var _useFormPostJob_useFormPostJob__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(94308);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_application_postJobsSlice_postJobsSlice__WEBPACK_IMPORTED_MODULE_2__]);
_application_postJobsSlice_postJobsSlice__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const NumberPositionsTypeFields = ({ className , name , secondName , form , validatorFields ,  })=>{
    const { postNewJob: { formCreate  } ,  } = _locales_en_en_json__WEBPACK_IMPORTED_MODULE_4__;
    const { GUTTERS  } = _consts__WEBPACK_IMPORTED_MODULE_3__/* .gutters */ .lc;
    const { configItem  } = (0,_useFormPostJob_useFormPostJob__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    const dispatch = (0,_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_5__/* .useAppDispatch */ .T)();
    const handleChange = (value)=>{
        form?.setFieldsValue({
            type_of_position: value
        });
        dispatch((0,_application_postJobsSlice_postJobsSlice__WEBPACK_IMPORTED_MODULE_2__/* .setValuePositionType */ .mS)(value));
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
        className: className,
        gutter: GUTTERS.formField,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                xs: 24,
                md: 12,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                    label: formCreate.labelNumberPositions,
                    name: name,
                    ...configItem(formCreate.textErrorNumberPositions, _consts__WEBPACK_IMPORTED_MODULE_3__/* .postJobsUI.FORM_FIELDS.mandatory */ .dx.FORM_FIELDS.mandatory, form, "number", validatorFields),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.InputNumber, {
                        maxLength: 16,
                        placeholder: formCreate.placeholderNumberPositions,
                        size: "large",
                        precision: 0,
                        min: 1
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                xs: 24,
                md: 12,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                    label: formCreate.labelPositionType,
                    name: secondName,
                    ...configItem(formCreate.textErrorPositionType, _consts__WEBPACK_IMPORTED_MODULE_3__/* .postJobsUI.FORM_FIELDS.mandatory */ .dx.FORM_FIELDS.mandatory, form, "string", validatorFields),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Select, {
                        optionFilterProp: "children",
                        style: {
                            width: "100%"
                        },
                        placeholder: formCreate.placeholderPositionType,
                        onChange: handleChange,
                        options: _consts__WEBPACK_IMPORTED_MODULE_3__/* .postJobsUI.POSITION_TYPE_OPTIONS */ .dx.POSITION_TYPE_OPTIONS
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NumberPositionsTypeFields);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4786:
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
/* harmony import */ var _application_postJobsSlice_postJobsSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47498);
/* harmony import */ var _components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89480);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(90396);
/* harmony import */ var _locales_en_en_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(89235);
/* harmony import */ var _utils_currencyFormat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(42190);
/* harmony import */ var _useFormPostJob_useFormPostJob__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(94308);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_application_postJobsSlice_postJobsSlice__WEBPACK_IMPORTED_MODULE_3__]);
_application_postJobsSlice_postJobsSlice__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const { postNewJob: { formCreate  } ,  } = _locales_en_en_json__WEBPACK_IMPORTED_MODULE_6__;
const WorkShiftsRowFields = ({ className , name , form , validatorFields ,  })=>{
    const { GUTTERS  } = _consts__WEBPACK_IMPORTED_MODULE_5__/* .gutters */ .lc;
    const { configItem  } = (0,_useFormPostJob_useFormPostJob__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    const dispatch = (0,_components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_4__/* .useAppDispatch */ .T)();
    const { workShiftsByBuyer , selectedWorkShifts  } = (0,_components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_4__/* .useAppSelector */ .C)((state)=>state.postJobs);
    const handleChange = (value, index)=>{
        if (selectedWorkShifts.length === 0) {
            dispatch((0,_application_postJobsSlice_postJobsSlice__WEBPACK_IMPORTED_MODULE_3__/* .setSelectedWorkShifts */ .Qx)([
                value
            ]));
            return;
        }
        const mappedList = selectedWorkShifts.map((data, indexFilter)=>{
            if (indexFilter === index) {
                return value;
            }
            return data;
        });
        dispatch((0,_application_postJobsSlice_postJobsSlice__WEBPACK_IMPORTED_MODULE_3__/* .setSelectedWorkShifts */ .Qx)(mappedList));
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
        className: className,
        gutter: GUTTERS.formField,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                xs: 24,
                md: 6,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                    label: formCreate.labelTargetRate,
                    name: name,
                    ...configItem(formCreate.textErrorTargetRate, _consts__WEBPACK_IMPORTED_MODULE_5__/* .postJobsUI.FORM_FIELDS.mandatory */ .dx.FORM_FIELDS.mandatory, form, "number", validatorFields),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.InputNumber, {
                        placeholder: formCreate.placeholderTargetRate,
                        formatter: (value)=>(0,_utils_currencyFormat__WEBPACK_IMPORTED_MODULE_8__/* .currencyFormatterNumber */ .i)(value),
                        parser: (value)=>(0,_utils_currencyFormat__WEBPACK_IMPORTED_MODULE_8__/* .currencyParserNumber */ .m)(value),
                        size: "large",
                        precision: 2
                    })
                })
            }),
            formCreate.workShiftsSelects.map((data, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                    xs: 24,
                    md: 6,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                        label: data.label,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Select, {
                            allowClear: true,
                            style: {
                                width: "100%"
                            },
                            placeholder: formCreate.placeholderWorkShifts,
                            onChange: (value)=>handleChange(value, index),
                            options: workShiftsByBuyer
                        })
                    })
                }, index))
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WorkShiftsRowFields);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 32299:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _application_postJobsSlice_postJobsSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47498);
/* harmony import */ var _components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89480);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90396);
/* harmony import */ var _locales_en_en_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(89235);
/* harmony import */ var _successComponent_SuccessComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3404);
/* harmony import */ var _contentFormPostJob_ContentFormPostJob__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(98916);
/* harmony import */ var _postNewJobs_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(42574);
/* harmony import */ var _postNewJobs_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_postNewJobs_module_scss__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_application_postJobsSlice_postJobsSlice__WEBPACK_IMPORTED_MODULE_4__, _contentFormPostJob_ContentFormPostJob__WEBPACK_IMPORTED_MODULE_9__]);
([_application_postJobsSlice_postJobsSlice__WEBPACK_IMPORTED_MODULE_4__, _contentFormPostJob_ContentFormPostJob__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const { OPTIONS_SAVE_STATUS  } = _consts__WEBPACK_IMPORTED_MODULE_6__/* .postJobsUI */ .dx;
const { postNewJob: { formCreate , title  } ,  } = _locales_en_en_json__WEBPACK_IMPORTED_MODULE_7__;
const PostNewJobs = ()=>{
    const { currentUserRoleName , currentUserRole  } = (0,_components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_5__/* .useAppSelector */ .C)((state)=>state.dashboard);
    const { userLevel  } = (0,_components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_5__/* .useAppSelector */ .C)((state)=>state.role);
    const dispatch = (0,_components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_5__/* .useAppDispatch */ .T)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { success  } = router.query;
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        dispatch((0,_application_postJobsSlice_postJobsSlice__WEBPACK_IMPORTED_MODULE_4__/* .readPossibleApprovers */ .Kh)({
            router
        }));
        dispatch((0,_application_postJobsSlice_postJobsSlice__WEBPACK_IMPORTED_MODULE_4__/* .readPossibleHiringManagers */ .u5)({
            router
        }));
        dispatch((0,_application_postJobsSlice_postJobsSlice__WEBPACK_IMPORTED_MODULE_4__/* .readWorkShiftsByBuyer */ .lI)({
            router
        }));
        dispatch((0,_application_postJobsSlice_postJobsSlice__WEBPACK_IMPORTED_MODULE_4__/* .readCountries */ .J7)({
            router
        }));
        dispatch((0,_application_postJobsSlice_postJobsSlice__WEBPACK_IMPORTED_MODULE_4__/* .readBusinessUnitsByBuyer */ .k1)({
            router
        }));
        dispatch((0,_application_postJobsSlice_postJobsSlice__WEBPACK_IMPORTED_MODULE_4__/* .readGlCodesByBuyer */ .hj)({
            router
        }));
        dispatch((0,_application_postJobsSlice_postJobsSlice__WEBPACK_IMPORTED_MODULE_4__/* .readCostCentersByBuyer */ .BI)({
            router
        }));
        dispatch((0,_application_postJobsSlice_postJobsSlice__WEBPACK_IMPORTED_MODULE_4__/* .readSuppliersByBuyer */ .Wf)({
            router
        }));
    }, [
        currentUserRoleName
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (currentUserRole === _consts__WEBPACK_IMPORTED_MODULE_6__/* .roles.LOGGED_AS.supplier */ .uJ.dv.supplier || userLevel === _consts__WEBPACK_IMPORTED_MODULE_6__/* .levels.supplier */ .gr.supplier) {
            router.push(_consts__WEBPACK_IMPORTED_MODULE_6__/* .urls.URL_DASHBOARD */ .jk.Zb);
        }
    }, [
        currentUserRole
    ]);
    const titleSuccessMessage = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>{
        if (success === OPTIONS_SAVE_STATUS.isSaveLater) {
            return formCreate.titleSuccessSaved;
        }
        if (success === OPTIONS_SAVE_STATUS.isSaveTemplate) {
            return formCreate.titleSuccessSavedAsTemplate;
        }
        return formCreate.titleSuccessSent;
    }, [
        success
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_postNewJobs_module_scss__WEBPACK_IMPORTED_MODULE_10___default().post_job),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Typography.Title, {
                className: (_postNewJobs_module_scss__WEBPACK_IMPORTED_MODULE_10___default().post_job__buyer),
                children: currentUserRoleName
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Typography.Title, {
                className: (_postNewJobs_module_scss__WEBPACK_IMPORTED_MODULE_10___default().post_job__title),
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_postNewJobs_module_scss__WEBPACK_IMPORTED_MODULE_10___default().form_container),
                children: !success ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_contentFormPostJob_ContentFormPostJob__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_successComponent_SuccessComponent__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    title: titleSuccessMessage,
                    textButton: formCreate.titleButtonGoJobs,
                    route: _consts__WEBPACK_IMPORTED_MODULE_6__/* .urls.URL_MY_JOBS */ .jk.dP
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostNewJobs);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 94308:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const useFormPostJob = ()=>{
    const configItem = (textError, fields, formInstance, type, validatorEmptyAllFields)=>({
            rules: [
                {
                    type,
                    required: true,
                    validator: (_, value)=>{
                        const emptyAllMandatories = Object.values(formInstance?.getFieldsValue(fields));
                        return validatorEmptyAllFields(value, textError, emptyAllMandatories);
                    }
                }, 
            ]
        });
    return {
        configItem
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useFormPostJob);


/***/ }),

/***/ 54964:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95566);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46555);
/* harmony import */ var _useAttachments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62360);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_2__, _useAttachments__WEBPACK_IMPORTED_MODULE_3__]);
([uuid__WEBPACK_IMPORTED_MODULE_2__, _useAttachments__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const useFileUpload = ()=>{
    const { 0: showError , 1: setShowError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: errors , 1: setErrors  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const { 0: attachments , 1: setAttachments  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { uploadS3File , updateS3File  } = (0,_useAttachments__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const errorUploadAttachment = (info)=>{
        setErrors({
            file: `${info.file.name} file upload failed.`
        });
        setShowError(true);
    };
    const addNewFile = async (info)=>{
        if (info.file.status === "done") {
            const response = await uploadS3File(info.file.name);
            if (!response.error) {
                setShowError(false);
                setAttachments({
                    url: response.url,
                    path: response.path,
                    file: info.file,
                    type: info.file.type,
                    id: (0,uuid__WEBPACK_IMPORTED_MODULE_2__.v4)(),
                    fileName: info.file.name
                });
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
    const updateFileAdded = async (fileUploaded)=>{
        await updateS3File({
            url: fileUploaded.url,
            originFileObj: fileUploaded.file.originFileObj,
            type: fileUploaded.file.type
        });
    };
    return {
        addNewFile,
        updateFileAdded,
        error: (next_error__WEBPACK_IMPORTED_MODULE_0___default()),
        showError,
        errors,
        attachments,
        setAttachments
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useFileUpload);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 88084:
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
/* harmony import */ var _infrastructure_services_utilsServices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17632);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_infrastructure_services_utilsServices__WEBPACK_IMPORTED_MODULE_2__]);
_infrastructure_services_utilsServices__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const useFileDownload = ()=>{
    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const downloadFile = async (file)=>{
        try {
            await _infrastructure_services_utilsServices__WEBPACK_IMPORTED_MODULE_2__/* .UtilServices.downloadS3File */ .$.downloadS3File(file, (next_router__WEBPACK_IMPORTED_MODULE_0___default()));
            setError(false);
        } catch (error) {
            setError(true);
        }
    };
    return {
        downloadFile,
        error
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useFileDownload);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 42190:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ currencyFormatterNumber),
/* harmony export */   "m": () => (/* binding */ currencyParserNumber)
/* harmony export */ });
const currencyFormatterNumber = (value)=>`$ ${value}`?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
const currencyParserNumber = (value)=>value.replace(/\$\s?|(,*)/g, "");


/***/ }),

/***/ 72909:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Scrolls the window to the top of the element referenced by the given ref object.
 *
 * @param ref - A RefObject that references the element to scroll to.
 *
 * @returns void.
 */ const scrollToRef = (ref)=>{
    if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        /** the size of the header is added so that the message is visible */ window.scrollTo({
            top: rect.top + window.pageYOffset - 90,
            behavior: "smooth"
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollToRef);


/***/ })

};
;