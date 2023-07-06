exports.id = 5803;
exports.ids = [5803];
exports.modules = {

/***/ 60386:
/***/ ((module) => {

// Exports
module.exports = {
	"back": "backButton_back__q5Dyu",
	"moveToRight": "backButton_moveToRight__Wm4A8"
};


/***/ }),

/***/ 36718:
/***/ ((module) => {

// Exports
module.exports = {
	"row": "formWorkShiftsCreate_row__tCS05",
	"col_item": "formWorkShiftsCreate_col_item__MDpnD",
	"label": "formWorkShiftsCreate_label__jmSNz",
	"submit": "formWorkShiftsCreate_submit__D3mM1",
	"moveToRight": "formWorkShiftsCreate_moveToRight__rtiBQ"
};


/***/ }),

/***/ 67171:
/***/ ((module) => {

// Exports
module.exports = {
	"wshifts_container": "workShiftsCreate_wshifts_container__eFT0k",
	"wshifts_container__buyer": "workShiftsCreate_wshifts_container__buyer__bPm3c",
	"wshifts_container__title": "workShiftsCreate_wshifts_container__title__jjSxb",
	"wshifts_container_row": "workShiftsCreate_wshifts_container_row__2MMCS",
	"form_container": "workShiftsCreate_form_container__f5mFs",
	"moveToRight": "workShiftsCreate_moveToRight__b_zYW"
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

/***/ 95831:
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
/* harmony import */ var _application_workShiftsSlice_workShiftsSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10120);
/* harmony import */ var _components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(89480);
/* harmony import */ var _components_hooks_useValidateFields__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(29776);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(90396);
/* harmony import */ var _locales_en_en_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(89235);
/* harmony import */ var _utils_sorterWeekDays__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(48789);
/* harmony import */ var _alertComponent_AlertMessage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(72017);
/* harmony import */ var _formWorkShiftsCreate_module_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(36718);
/* harmony import */ var _formWorkShiftsCreate_module_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_formWorkShiftsCreate_module_scss__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_application_authContext__WEBPACK_IMPORTED_MODULE_4__, _application_workShiftsSlice_workShiftsSlice__WEBPACK_IMPORTED_MODULE_5__]);
([_application_authContext__WEBPACK_IMPORTED_MODULE_4__, _application_workShiftsSlice_workShiftsSlice__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













/**
 * Returns the FormWorkShiftsCreate component
 *
 * @returns The FormWorkShiftsCreate component
 */ const FormWorkShiftsCreate = ()=>{
    const { valuesFormCreate  } = (0,_components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_6__/* .useAppSelector */ .C)((state)=>state.workShifts);
    const { idTenant , dataUser  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_application_authContext__WEBPACK_IMPORTED_MODULE_4__/* .AuthContext */ .Vo);
    const { validatorEmptyAllFields , messageError , showError , activateErrorAlert ,  } = (0,_components_hooks_useValidateFields__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    const dispatch = (0,_components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_6__/* .useAppDispatch */ .T)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const [form] = antd__WEBPACK_IMPORTED_MODULE_1__.Form.useForm();
    const { workShifts  } = _locales_en_en_json__WEBPACK_IMPORTED_MODULE_9__;
    const [workShiftDescription, startTime, endTime] = _consts__WEBPACK_IMPORTED_MODULE_8__/* .workShiftsUI.FORM_FIELDS.mandatories */ .lz.FORM_FIELDS.mandatories;
    const [workDays] = _consts__WEBPACK_IMPORTED_MODULE_8__/* .workShiftsUI.FORM_FIELDS.optionals */ .lz.FORM_FIELDS.optionals;
    const configItem = (textError)=>({
            className: (_formWorkShiftsCreate_module_scss__WEBPACK_IMPORTED_MODULE_12___default().label),
            rules: [
                {
                    type: "object",
                    required: true,
                    validator: (_, value)=>{
                        const emptyAllMandatories = Object.values(form.getFieldsValue(_consts__WEBPACK_IMPORTED_MODULE_8__/* .workShiftsUI.FORM_FIELDS.mandatories */ .lz.FORM_FIELDS.mandatories));
                        return validatorEmptyAllFields(value, textError, emptyAllMandatories);
                    }
                }, 
            ]
        });
    const onFinish = async (values)=>{
        const response = await dispatch((0,_application_workShiftsSlice_workShiftsSlice__WEBPACK_IMPORTED_MODULE_5__/* .createWorkShift */ .fU)({
            router,
            body: {
                ...values,
                start_time: values.start_time.format("hh:mm a"),
                end_time: values.end_time.format("hh:mm a"),
                word_days: (0,_utils_sorterWeekDays__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(values.work_days),
                buyer_id: dataUser.logged_buyer,
                id_tenant: idTenant
            }
        }));
        if (response.payload) {
            router.push(_consts__WEBPACK_IMPORTED_MODULE_8__/* .urls.URL_SUCCESS_CREATE_WSHIFTS */ .jk.H_, undefined, {
                shallow: true
            });
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            showError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_alertComponent_AlertMessage__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
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
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                        className: (_formWorkShiftsCreate_module_scss__WEBPACK_IMPORTED_MODULE_12___default().row),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                            span: 24,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                                label: workShifts.create.labelName,
                                name: workShiftDescription,
                                ...configItem(workShifts.create.textErrorName),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Input, {
                                    placeholder: workShifts.create.placeholderName,
                                    size: "large"
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                        className: (_formWorkShiftsCreate_module_scss__WEBPACK_IMPORTED_MODULE_12___default().row),
                        gutter: [
                            24,
                            10
                        ],
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                xs: 24,
                                lg: 12,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                                    label: workShifts.create.labelStartTime,
                                    name: startTime,
                                    ...configItem(workShifts.create.textErrorDate),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.TimePicker, {
                                        format: "hh:mm a",
                                        use12Hours: true
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                xs: 24,
                                lg: 12,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                                    label: workShifts.create.labelEndTime,
                                    name: endTime,
                                    ...configItem(workShifts.create.textErrorDate),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.TimePicker, {
                                        format: "hh:mm a",
                                        use12Hours: true
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                        label: workShifts.create.labelDays,
                        name: workDays,
                        className: (_formWorkShiftsCreate_module_scss__WEBPACK_IMPORTED_MODULE_12___default().label),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Checkbox.Group, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                                className: (_formWorkShiftsCreate_module_scss__WEBPACK_IMPORTED_MODULE_12___default().row),
                                gutter: [
                                    24,
                                    16
                                ],
                                children: workShifts.create.days.map((day, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                        className: (_formWorkShiftsCreate_module_scss__WEBPACK_IMPORTED_MODULE_12___default().col_item),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Checkbox, {
                                            value: day,
                                            children: day
                                        })
                                    }, index))
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
                            type: "primary",
                            htmlType: "submit",
                            className: (_formWorkShiftsCreate_module_scss__WEBPACK_IMPORTED_MODULE_12___default().submit),
                            children: workShifts.create.titleButtonSubmit
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormWorkShiftsCreate);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 35803:
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
/* harmony import */ var _components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89480);
/* harmony import */ var _locales_en_en_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89235);
/* harmony import */ var _backButton_BackButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6694);
/* harmony import */ var _successComponent_SuccessComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3404);
/* harmony import */ var _workWeekDefinitionComponent_WorkWeekDefinitionComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(83381);
/* harmony import */ var _formWorkShiftsCreate_FormWorkShiftsCreate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(95831);
/* harmony import */ var _workShiftsCreate_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(67171);
/* harmony import */ var _workShiftsCreate_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_workShiftsCreate_module_scss__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_workWeekDefinitionComponent_WorkWeekDefinitionComponent__WEBPACK_IMPORTED_MODULE_7__, _formWorkShiftsCreate_FormWorkShiftsCreate__WEBPACK_IMPORTED_MODULE_8__]);
([_workWeekDefinitionComponent_WorkWeekDefinitionComponent__WEBPACK_IMPORTED_MODULE_7__, _formWorkShiftsCreate_FormWorkShiftsCreate__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const { Title  } = antd__WEBPACK_IMPORTED_MODULE_1__.Typography;
const { Content  } = antd__WEBPACK_IMPORTED_MODULE_1__.Layout;
const urlBackHome = "/home/work-shifts";
/**
 * Returns the WorkShiftsCreate component
 *
 * @returns The WorkShiftsCreate component
 */ const WorkShiftsCreate = ({ titleForm , titleBackButton ,  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { success  } = router.query;
    const { currentUserRoleName  } = (0,_components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_3__/* .useAppSelector */ .C)((state)=>state.dashboard);
    const { workShifts  } = _locales_en_en_json__WEBPACK_IMPORTED_MODULE_4__;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Content, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `${(_workShiftsCreate_module_scss__WEBPACK_IMPORTED_MODULE_9___default().wshifts_container)}`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_backButton_BackButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                title: titleBackButton,
                                onClick: ()=>router.push(urlBackHome)
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
                        level: 4,
                        className: (_workShiftsCreate_module_scss__WEBPACK_IMPORTED_MODULE_9___default().wshifts_container__buyer),
                        children: currentUserRoleName
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
                        level: 3,
                        className: (_workShiftsCreate_module_scss__WEBPACK_IMPORTED_MODULE_9___default().wshifts_container__title),
                        children: titleForm
                    }),
                    !success && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_workWeekDefinitionComponent_WorkWeekDefinitionComponent__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_workShiftsCreate_module_scss__WEBPACK_IMPORTED_MODULE_9___default().form_container),
                        children: success ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_successComponent_SuccessComponent__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            title: workShifts.create.titleSuccess,
                            textButton: workShifts.create.textButtonSuccess,
                            route: urlBackHome
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_formWorkShiftsCreate_FormWorkShiftsCreate__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WorkShiftsCreate);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 48789:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90396);

const { SORTER_MAP_DAYS  } = _consts__WEBPACK_IMPORTED_MODULE_0__/* .workShiftsUI */ .lz;
const sorterWeekDays = (days)=>days.sort((a, b)=>SORTER_MAP_DAYS[a] - SORTER_MAP_DAYS[b]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sorterWeekDays);


/***/ })

};
;