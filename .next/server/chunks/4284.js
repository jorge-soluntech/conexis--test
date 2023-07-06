exports.id = 4284;
exports.ids = [4284];
exports.modules = {

/***/ 60386:
/***/ ((module) => {

// Exports
module.exports = {
	"back": "backButton_back__q5Dyu",
	"moveToRight": "backButton_moveToRight__Wm4A8"
};


/***/ }),

/***/ 64208:
/***/ ((module) => {

// Exports
module.exports = {
	"candidate_container": "candidatesCreate_candidate_container__bbe_i",
	"candidate_container__buyer": "candidatesCreate_candidate_container__buyer__kx8XA",
	"candidate_container__title": "candidatesCreate_candidate_container__title__GGxPT",
	"candidate_container_row": "candidatesCreate_candidate_container_row__QrwMz",
	"form_container": "candidatesCreate_form_container__GlvId",
	"moveToRight": "candidatesCreate_moveToRight__iFaAo"
};


/***/ }),

/***/ 65562:
/***/ ((module) => {

// Exports
module.exports = {
	"email_support": "contentCandidate_email_support__Ksmpn",
	"moveToRight": "contentCandidate_moveToRight__3CBL1"
};


/***/ }),

/***/ 97643:
/***/ ((module) => {

// Exports
module.exports = {
	"row": "formCandidatesCreate_row__pNuD5",
	"col_item": "formCandidatesCreate_col_item__tXMS2",
	"label": "formCandidatesCreate_label__s44lS",
	"submit": "formCandidatesCreate_submit__3KLVs",
	"moveToRight": "formCandidatesCreate_moveToRight__eDrSZ"
};


/***/ }),

/***/ 17382:
/***/ ((module) => {

// Exports
module.exports = {
	"text_warning": "modalWarningEmail_text_warning____lrN",
	"moveToRight": "modalWarningEmail_moveToRight__vAnV5"
};


/***/ }),

/***/ 52405:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "supportComponent_card__Vuu48",
	"grid_style": "supportComponent_grid_style__BFcfi",
	"alert_success": "supportComponent_alert_success__MY4zG",
	"text": "supportComponent_text__fKKMa",
	"paragraph": "supportComponent_paragraph__hskR_",
	"moveToRight": "supportComponent_moveToRight__v_K7z"
};


/***/ }),

/***/ 6694:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_designSystem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88776);
/* harmony import */ var _backButton_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60386);
/* harmony import */ var _backButton_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_backButton_module_scss__WEBPACK_IMPORTED_MODULE_3__);




/**
 * A component that displays the BackButton.
 * @param {string} title - The title parameter.
 * @param {Function} onClick - The passed function of the onClick paramenter.
 *
 * @returns {JSX.Element} - A component that displays the BackButton.
 */ const BackButton = ({ title , onClick  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_backButton_module_scss__WEBPACK_IMPORTED_MODULE_3___default().back),
        onClick: onClick,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_designSystem__WEBPACK_IMPORTED_MODULE_2__/* .LeftOutlined */ .D5, {}),
            "\xa0 ",
            title
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BackButton);


/***/ }),

/***/ 54284:
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
/* harmony import */ var _application_candidatesSlice_candidatesSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89397);
/* harmony import */ var _components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89480);
/* harmony import */ var _components_hooks_useRenderTitleLoggedAs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92575);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90396);
/* harmony import */ var _backButton_BackButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6694);
/* harmony import */ var _contentCandidate_ContentCandidate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(22913);
/* harmony import */ var _modalWarningEmail_ModalWarningEmail__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2966);
/* harmony import */ var _candidatesCreate_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(64208);
/* harmony import */ var _candidatesCreate_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_candidatesCreate_module_scss__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_application_candidatesSlice_candidatesSlice__WEBPACK_IMPORTED_MODULE_3__, _components_hooks_useRenderTitleLoggedAs__WEBPACK_IMPORTED_MODULE_5__, _contentCandidate_ContentCandidate__WEBPACK_IMPORTED_MODULE_8__, _modalWarningEmail_ModalWarningEmail__WEBPACK_IMPORTED_MODULE_9__]);
([_application_candidatesSlice_candidatesSlice__WEBPACK_IMPORTED_MODULE_3__, _components_hooks_useRenderTitleLoggedAs__WEBPACK_IMPORTED_MODULE_5__, _contentCandidate_ContentCandidate__WEBPACK_IMPORTED_MODULE_8__, _modalWarningEmail_ModalWarningEmail__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const { Title  } = antd__WEBPACK_IMPORTED_MODULE_1__.Typography;
const { Content  } = antd__WEBPACK_IMPORTED_MODULE_1__.Layout;
/**
 * Returns the CandidatesCreate component
 *
 * @returns The CandidatesCreate component
 */ const CandidatesCreate = ({ titleForm , titleBackButton ,  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const dispatch = (0,_components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_4__/* .useAppDispatch */ .T)();
    const { renderTitleLoggedAs  } = (0,_components_hooks_useRenderTitleLoggedAs__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const handleBackButton = ()=>{
        dispatch((0,_application_candidatesSlice_candidatesSlice__WEBPACK_IMPORTED_MODULE_3__/* .resetValuesFormCandidates */ .DP)());
        router.push(_consts__WEBPACK_IMPORTED_MODULE_6__/* .urls.URL_BACK_CREATE_CANDIDATE */ .jk.Q9);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modalWarningEmail_ModalWarningEmail__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Content, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_candidatesCreate_module_scss__WEBPACK_IMPORTED_MODULE_10___default().candidate_container),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_backButton_BackButton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                    title: titleBackButton,
                                    onClick: handleBackButton
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
                            level: 4,
                            className: (_candidatesCreate_module_scss__WEBPACK_IMPORTED_MODULE_10___default().candidate_container__buyer),
                            children: renderTitleLoggedAs
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
                            level: 3,
                            className: (_candidatesCreate_module_scss__WEBPACK_IMPORTED_MODULE_10___default().candidate_container__title),
                            children: titleForm
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_candidatesCreate_module_scss__WEBPACK_IMPORTED_MODULE_10___default().form_container),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_contentCandidate_ContentCandidate__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CandidatesCreate);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 22913:
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
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90396);
/* harmony import */ var _locales_en_en_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89235);
/* harmony import */ var _successComponent_SuccessComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3404);
/* harmony import */ var _supportComponent_SupportComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3537);
/* harmony import */ var _formCandidatesCreate_FormCandidatesCreate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13461);
/* harmony import */ var _contentCandidate_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(65562);
/* harmony import */ var _contentCandidate_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_contentCandidate_module_scss__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_formCandidatesCreate_FormCandidatesCreate__WEBPACK_IMPORTED_MODULE_7__]);
_formCandidatesCreate_FormCandidatesCreate__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const ContentCandidate = ()=>{
    const { candidates , formsCommon  } = _locales_en_en_json__WEBPACK_IMPORTED_MODULE_4__;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const { success , isTalent  } = router.query;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            success === _consts__WEBPACK_IMPORTED_MODULE_3__/* .workers.ROUTES_SUCCESS.emailNotSent */ .CB.Yv.emailNotSent && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_supportComponent_SupportComponent__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                title: candidates.create.titleSuccessSupport,
                paragraph: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        candidates.create.textContactSupport,
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: (_contentCandidate_module_scss__WEBPACK_IMPORTED_MODULE_8___default().email_support),
                            children: formsCommon.emailSupport
                        })
                    ]
                })
            }),
            success === _consts__WEBPACK_IMPORTED_MODULE_3__/* .workers.ROUTES_SUCCESS.emailSent */ .CB.Yv.emailSent && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_successComponent_SuccessComponent__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                title: !isTalent ? candidates.create.titleSuccess : candidates.create.titleSuccessAddedTalentPool,
                subtitle: !isTalent && candidates.create.subtitleSuccess,
                textButton: candidates.create.textButtonSuccess,
                route: _consts__WEBPACK_IMPORTED_MODULE_3__/* .urls.URL_BACK_CREATE_CANDIDATE */ .jk.Q9
            }),
            !success && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_formCandidatesCreate_FormCandidatesCreate__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentCandidate);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 13461:
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
/* harmony import */ var _application_candidatesSlice_candidatesSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89397);
/* harmony import */ var _components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(89480);
/* harmony import */ var _components_hooks_useValidateFields__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(29776);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(90396);
/* harmony import */ var _locales_en_en_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(89235);
/* harmony import */ var _utils_isValidEmail__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(33220);
/* harmony import */ var _alertComponent_AlertMessage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(72017);
/* harmony import */ var _selectWorkerStatus_SelectWorkerStatus__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(61617);
/* harmony import */ var _formCandidatesCreate_module_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(97643);
/* harmony import */ var _formCandidatesCreate_module_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_formCandidatesCreate_module_scss__WEBPACK_IMPORTED_MODULE_13__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_application_authContext__WEBPACK_IMPORTED_MODULE_4__, _application_candidatesSlice_candidatesSlice__WEBPACK_IMPORTED_MODULE_5__]);
([_application_authContext__WEBPACK_IMPORTED_MODULE_4__, _application_candidatesSlice_candidatesSlice__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














/**
 * Returns the FormCandidatesCreate component
 *
 * @returns The FormCandidatesCreate component
 */ const FormCandidatesCreate = ()=>{
    const { valuesFormCreate , loading  } = (0,_components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_6__/* .useAppSelector */ .C)((state)=>state.candidates);
    const { idTenant  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_application_authContext__WEBPACK_IMPORTED_MODULE_4__/* .AuthContext */ .Vo);
    const { validatorEmptyAllFields , messageError , showError , activateErrorAlert , checkEmptyEmailField ,  } = (0,_components_hooks_useValidateFields__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    const dispatch = (0,_components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_6__/* .useAppDispatch */ .T)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const [form] = antd__WEBPACK_IMPORTED_MODULE_1__.Form.useForm();
    const { 0: statusEmail , 1: setStatusEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
        validateStatus: ""
    });
    const { candidates  } = _locales_en_en_json__WEBPACK_IMPORTED_MODULE_9__;
    const [firstName, lastName, workerStatus] = _consts__WEBPACK_IMPORTED_MODULE_8__/* .workers.FORM_FIELDS.mandatories */ .CB.GZ.mandatories;
    const [email] = _consts__WEBPACK_IMPORTED_MODULE_8__/* .workers.FORM_FIELDS.optionals */ .CB.GZ.optionals;
    const emailValidationRules = [
        {
            type: "email",
            validator: async (_, value)=>{
                if (value) {
                    if ((0,_utils_isValidEmail__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(value)) {
                        setStatusEmail({
                            validateStatus: "error"
                        });
                        activateErrorAlert(true, candidates.create.textErrorValidEmail);
                        return Promise.reject();
                    }
                    return Promise.resolve();
                }
                return Promise.resolve();
            }
        }, 
    ];
    const configItem = (textError)=>({
            className: (_formCandidatesCreate_module_scss__WEBPACK_IMPORTED_MODULE_13___default().label),
            rules: [
                {
                    type: "object",
                    required: true,
                    validator: (_, value)=>{
                        const emptyAllMandatories = Object.values(form.getFieldsValue(_consts__WEBPACK_IMPORTED_MODULE_8__/* .workers.FORM_FIELDS.mandatories */ .CB.GZ.mandatories));
                        return validatorEmptyAllFields(value, textError, emptyAllMandatories);
                    }
                }, 
            ]
        });
    const onStatusChange = (value)=>form.setFieldsValue({
            worker_status: value
        });
    const onFinish = async (values)=>{
        setStatusEmail({
            validateStatus: ""
        });
        const valuesFormToSend = {
            ...values,
            id_tenant: idTenant,
            email: checkEmptyEmailField(values.email)
        };
        if (!valuesFormToSend.email) {
            dispatch((0,_application_candidatesSlice_candidatesSlice__WEBPACK_IMPORTED_MODULE_5__/* .setValuesCandidate */ .qw)(valuesFormToSend));
            dispatch((0,_application_candidatesSlice_candidatesSlice__WEBPACK_IMPORTED_MODULE_5__/* .setModalWarningEmail */ .l5)(true));
            activateErrorAlert(false);
            return;
        }
        const response = await dispatch((0,_application_candidatesSlice_candidatesSlice__WEBPACK_IMPORTED_MODULE_5__/* .createCandidate */ .l0)({
            router,
            body: valuesFormToSend
        }));
        if (response.payload.message === "User already exists") {
            activateErrorAlert(true, candidates.create.textErrorUsedEmail);
            return;
        }
        if (response.payload.message?.[0] === candidates.create.textErrorValidEmail) {
            setStatusEmail({
                validateStatus: "error"
            });
            activateErrorAlert(true, candidates.create.textErrorValidEmail);
            return;
        }
        if (response.payload.message === candidates.create.textErrorAlreadyInTalentPool) {
            setStatusEmail({
                validateStatus: "error"
            });
            activateErrorAlert(true, candidates.create.textErrorAlreadyInTalentPool);
            return;
        }
        if (response.payload.errors?.[0] === "error sending email") {
            router.push(_consts__WEBPACK_IMPORTED_MODULE_8__/* .urls.URL_SUCCESS_NO_SENT_EMAIL_CANDIDATE */ .jk.a9);
            return;
        }
        if (response.payload.message === candidates.create.titleSuccessAddedTalentPool) {
            router.push({
                pathname: _consts__WEBPACK_IMPORTED_MODULE_8__/* .urls.URL_CREATE_CANDIDATE */ .jk.u8,
                query: {
                    success: _consts__WEBPACK_IMPORTED_MODULE_8__/* .workers.ROUTES_SUCCESS.emailSent */ .CB.Yv.emailSent,
                    isTalent: true
                }
            });
            return;
        }
        if (response.payload.statusCode === 201) {
            dispatch((0,_application_candidatesSlice_candidatesSlice__WEBPACK_IMPORTED_MODULE_5__/* .setPage */ .YA)(1));
            router.push({
                pathname: _consts__WEBPACK_IMPORTED_MODULE_8__/* .urls.URL_CREATE_CANDIDATE */ .jk.u8,
                query: {
                    success: _consts__WEBPACK_IMPORTED_MODULE_8__/* .workers.ROUTES_SUCCESS.emailSent */ .CB.Yv.emailSent
                }
            });
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            showError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_alertComponent_AlertMessage__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                afterClose: ()=>activateErrorAlert(false),
                message: messageError
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Form, {
                name: "basic",
                initialValues: valuesFormCreate,
                onFinish: onFinish,
                layout: "vertical",
                validateTrigger: "onSubmit",
                form: form,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                        className: (_formCandidatesCreate_module_scss__WEBPACK_IMPORTED_MODULE_13___default().row),
                        gutter: [
                            24,
                            10
                        ],
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                xs: 24,
                                md: 12,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                                    label: candidates.create.labelName,
                                    name: firstName,
                                    ...configItem(candidates.create.textErrorName),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Input, {
                                        placeholder: candidates.create.placeholderInputNames,
                                        size: "large"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                xs: 24,
                                md: 12,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                                    label: candidates.create.labelLastName,
                                    name: lastName,
                                    ...configItem(candidates.create.textErrorLastName),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Input, {
                                        placeholder: candidates.create.placeholderInputNames,
                                        size: "large"
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                        className: (_formCandidatesCreate_module_scss__WEBPACK_IMPORTED_MODULE_13___default().row),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                            span: 24,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                                    label: candidates.create.labelEmail,
                                    name: email,
                                    className: (_formCandidatesCreate_module_scss__WEBPACK_IMPORTED_MODULE_13___default().label),
                                    validateStatus: statusEmail.validateStatus,
                                    rules: emailValidationRules,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Input, {
                                        placeholder: candidates.create.placeholderEmail,
                                        size: "large"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: candidates.create.textNoteEmail
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                        className: (_formCandidatesCreate_module_scss__WEBPACK_IMPORTED_MODULE_13___default().row),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                            span: 24,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                                label: candidates.create.labelStatus,
                                name: workerStatus,
                                ...configItem(candidates.create.textErrorWorkerStatus),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_selectWorkerStatus_SelectWorkerStatus__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                    onStatusChange: onStatusChange,
                                    isSelectCreate: true
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
                            type: "primary",
                            htmlType: "submit",
                            className: (_formCandidatesCreate_module_scss__WEBPACK_IMPORTED_MODULE_13___default().submit),
                            loading: loading,
                            children: candidates.create.titleButtonSubmit
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormCandidatesCreate);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2966:
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
/* harmony import */ var _application_candidatesSlice_candidatesSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89397);
/* harmony import */ var _components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89480);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(90396);
/* harmony import */ var _locales_en_en_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(89235);
/* harmony import */ var _FormSuccessModalComponent_FormSuccessModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(87497);
/* harmony import */ var _modalWarningEmail_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(17382);
/* harmony import */ var _modalWarningEmail_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_modalWarningEmail_module_scss__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_application_candidatesSlice_candidatesSlice__WEBPACK_IMPORTED_MODULE_3__]);
_application_candidatesSlice_candidatesSlice__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const { candidates: { create  } ,  } = _locales_en_en_json__WEBPACK_IMPORTED_MODULE_6__;
const ModalWarningEmail = ()=>{
    const dispatch = (0,_components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_4__/* .useAppDispatch */ .T)();
    const { isModalWarningEmail , valuesFormCreate  } = (0,_components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_4__/* .useAppSelector */ .C)((state)=>state.candidates);
    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const closeModal = ()=>dispatch((0,_application_candidatesSlice_candidatesSlice__WEBPACK_IMPORTED_MODULE_3__/* .setModalWarningEmail */ .l5)(false));
    const submitCreateCandidate = async ()=>{
        setIsLoading(true);
        const response = await dispatch((0,_application_candidatesSlice_candidatesSlice__WEBPACK_IMPORTED_MODULE_3__/* .createCandidate */ .l0)({
            router: (next_router__WEBPACK_IMPORTED_MODULE_1___default()),
            body: valuesFormCreate
        }));
        if (response.payload.statusCode !== 201) return;
        setIsLoading(false);
        closeModal();
        dispatch((0,_application_candidatesSlice_candidatesSlice__WEBPACK_IMPORTED_MODULE_3__/* .setPage */ .YA)(1));
        dispatch((0,_application_candidatesSlice_candidatesSlice__WEBPACK_IMPORTED_MODULE_3__/* .resetValuesFormCandidates */ .DP)());
        next_router__WEBPACK_IMPORTED_MODULE_1___default().push({
            pathname: _consts__WEBPACK_IMPORTED_MODULE_5__/* .urls.URL_CREATE_CANDIDATE */ .jk.u8,
            query: {
                success: _consts__WEBPACK_IMPORTED_MODULE_5__/* .workers.ROUTES_SUCCESS.emailSent */ .CB.Yv.emailSent
            }
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_FormSuccessModalComponent_FormSuccessModal__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        isModal: isModalWarningEmail,
        title: create.titleModalWarning,
        isLoading: isLoading,
        handleSave: submitCreateCandidate,
        handleCancel: closeModal,
        showSuccess: false,
        titleSave: create.titleYesButton,
        titleCancel: create.titleNoButton,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                className: (_modalWarningEmail_module_scss__WEBPACK_IMPORTED_MODULE_8___default().text_warning),
                children: create.textModalWarning
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                className: (_modalWarningEmail_module_scss__WEBPACK_IMPORTED_MODULE_8___default().text_warning),
                children: create.textModalConfirm
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalWarningEmail);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3537:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _supportComponent_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52405);
/* harmony import */ var _supportComponent_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_supportComponent_module_scss__WEBPACK_IMPORTED_MODULE_2__);



/**
 * SuccessComponent is a component that renders a success message with a button that navigates to a specific route.
 * @param title - The title to be displayed in the success message.
 * @param paragraph - The text with de email support.
 * @returns A React component that renders a success message with exceptions.
 */ const SupportComponent = ({ title , paragraph ,  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Card, {
        className: (_supportComponent_module_scss__WEBPACK_IMPORTED_MODULE_2___default().card),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Card.Grid, {
                hoverable: false,
                className: (_supportComponent_module_scss__WEBPACK_IMPORTED_MODULE_2___default().grid_style),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_supportComponent_module_scss__WEBPACK_IMPORTED_MODULE_2___default().alert_success)
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Card.Grid, {
                hoverable: false,
                className: (_supportComponent_module_scss__WEBPACK_IMPORTED_MODULE_2___default().grid_style),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: (_supportComponent_module_scss__WEBPACK_IMPORTED_MODULE_2___default().text),
                        children: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_supportComponent_module_scss__WEBPACK_IMPORTED_MODULE_2___default().paragraph),
                        children: paragraph
                    })
                ]
            })
        ]
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SupportComponent);


/***/ })

};
;