exports.id = 3962;
exports.ids = [3962];
exports.modules = {

/***/ 28554:
/***/ ((module) => {

// Exports
module.exports = {
	"header_table": "columnsTable_header_table__gKmy8",
	"column_table": "columnsTable_column_table__yoY6o",
	"wrapper_switch": "columnsTable_wrapper_switch__LDREh",
	"user_status": "columnsTable_user_status__kY9VS",
	"moveToRight": "columnsTable_moveToRight__0zjPi"
};


/***/ }),

/***/ 30502:
/***/ ((module) => {

// Exports
module.exports = {
	"work_shifts": "WorkShifts_work_shifts__OCEqQ",
	"work_shifts__buyer": "WorkShifts_work_shifts__buyer__ME7uY",
	"work_shifts__title": "WorkShifts_work_shifts__title__janME",
	"top_bar": "WorkShifts_top_bar__Csmxx",
	"buttons": "WorkShifts_buttons__1Yd06",
	"buttons__add_icon": "WorkShifts_buttons__add_icon__3VBWZ",
	"moveToRight": "WorkShifts_moveToRight__oahBH"
};


/***/ }),

/***/ 83262:
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
/* harmony import */ var _application_workShiftsSlice_workShiftsSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10120);
/* harmony import */ var _components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89480);
/* harmony import */ var _consts_colors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(89401);
/* harmony import */ var _locales_en_en_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89235);
/* harmony import */ var _utils_sorterTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20720);
/* harmony import */ var _columnsTable_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(28554);
/* harmony import */ var _columnsTable_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_columnsTable_module_scss__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_application_workShiftsSlice_workShiftsSlice__WEBPACK_IMPORTED_MODULE_3__]);
_application_workShiftsSlice_workShiftsSlice__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const useColumnsWorkShifts = ()=>{
    const activeValue = "Active";
    const inactiveValue = "Inactive";
    const dispatch = (0,_components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_4__/* .useAppDispatch */ .T)();
    const { workShifts: { table  } ,  } = _locales_en_en_json__WEBPACK_IMPORTED_MODULE_5__;
    const columnsTable = [
        {
            title: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: (_columnsTable_module_scss__WEBPACK_IMPORTED_MODULE_6___default().header_table),
                    children: table.name
                }),
            dataIndex: "workShiftDescription",
            className: (_columnsTable_module_scss__WEBPACK_IMPORTED_MODULE_6___default().column_table),
            sorter: (nameA, nameB, sortOrder)=>(0,_utils_sorterTable__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(nameA, nameB, "workShiftDescription", sortOrder),
            render: (value, { status  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    style: {
                        color: status ? _consts_colors__WEBPACK_IMPORTED_MODULE_8__/* .ACTIVE_COLOR */ .t : _consts_colors__WEBPACK_IMPORTED_MODULE_8__/* .INACTIVE_COLOR */ .RZ
                    },
                    children: value
                })
        },
        {
            title: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: (_columnsTable_module_scss__WEBPACK_IMPORTED_MODULE_6___default().header_table),
                    children: table.shiftStartTime
                }),
            dataIndex: "startTime",
            className: (_columnsTable_module_scss__WEBPACK_IMPORTED_MODULE_6___default().column_table),
            sorter: (a, b)=>a.startTime.localeCompare(b.startTime),
            render: (value, { status  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    style: {
                        color: status ? _consts_colors__WEBPACK_IMPORTED_MODULE_8__/* .ACTIVE_COLOR */ .t : _consts_colors__WEBPACK_IMPORTED_MODULE_8__/* .INACTIVE_COLOR */ .RZ
                    },
                    children: value
                })
        },
        {
            title: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: (_columnsTable_module_scss__WEBPACK_IMPORTED_MODULE_6___default().header_table),
                    children: table.shiftEndTime
                }),
            dataIndex: "endTime",
            className: (_columnsTable_module_scss__WEBPACK_IMPORTED_MODULE_6___default().column_table),
            sorter: (a, b)=>a.endTime.localeCompare(b.endTime),
            render: (value, { status  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    style: {
                        color: status ? _consts_colors__WEBPACK_IMPORTED_MODULE_8__/* .ACTIVE_COLOR */ .t : _consts_colors__WEBPACK_IMPORTED_MODULE_8__/* .INACTIVE_COLOR */ .RZ
                    },
                    children: value
                })
        },
        {
            title: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: (_columnsTable_module_scss__WEBPACK_IMPORTED_MODULE_6___default().header_table),
                    children: table.workDays
                }),
            dataIndex: "workDays",
            className: (_columnsTable_module_scss__WEBPACK_IMPORTED_MODULE_6___default().column_table),
            sorter: (a, b, sortOrder)=>(0,_utils_sorterTable__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(a, b, "workDays", sortOrder),
            render: (value, { status  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    style: {
                        color: status ? _consts_colors__WEBPACK_IMPORTED_MODULE_8__/* .ACTIVE_COLOR */ .t : _consts_colors__WEBPACK_IMPORTED_MODULE_8__/* .INACTIVE_COLOR */ .RZ
                    },
                    children: value
                })
        },
        {
            title: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: (_columnsTable_module_scss__WEBPACK_IMPORTED_MODULE_6___default().header_table),
                    children: table.status
                }),
            dataIndex: "status",
            filterMultiple: false,
            className: (_columnsTable_module_scss__WEBPACK_IMPORTED_MODULE_6___default().column_table),
            sorter: (a, b)=>{
                const valueA = a.status ? 1 : 0;
                const valueB = b.status ? 1 : 0;
                return valueB - valueA;
            },
            render: (status, { key  })=>{
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_columnsTable_module_scss__WEBPACK_IMPORTED_MODULE_6___default().wrapper_switch),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Switch, {
                            size: "small",
                            checked: status,
                            onChange: (_e)=>dispatch((0,_application_workShiftsSlice_workShiftsSlice__WEBPACK_IMPORTED_MODULE_3__/* .toggleStatusWorkShift */ .Dl)({
                                    router: (next_router__WEBPACK_IMPORTED_MODULE_2___default()),
                                    id: key,
                                    status: !status
                                }))
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: (_columnsTable_module_scss__WEBPACK_IMPORTED_MODULE_6___default().user_status),
                            style: {
                                color: status ? _consts_colors__WEBPACK_IMPORTED_MODULE_8__/* .ACTIVE_COLOR */ .t : _consts_colors__WEBPACK_IMPORTED_MODULE_8__/* .INACTIVE_COLOR */ .RZ
                            },
                            children: status ? activeValue : inactiveValue
                        })
                    ]
                });
            }
        }, 
    ];
    return {
        columnsTable
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useColumnsWorkShifts);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 28193:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _application_workShiftsSlice_workShiftsSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10120);
/* harmony import */ var _components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89480);
/* harmony import */ var _utils_scrollToRef__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72909);
/* harmony import */ var _tableComponent_Table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95821);
/* harmony import */ var _columnsTable_columnsTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(83262);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_application_workShiftsSlice_workShiftsSlice__WEBPACK_IMPORTED_MODULE_2__, _tableComponent_Table__WEBPACK_IMPORTED_MODULE_4__, _columnsTable_columnsTable__WEBPACK_IMPORTED_MODULE_5__]);
([_application_workShiftsSlice_workShiftsSlice__WEBPACK_IMPORTED_MODULE_2__, _tableComponent_Table__WEBPACK_IMPORTED_MODULE_4__, _columnsTable_columnsTable__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







/**
 * returns the work shifts table
 *
 * @param props.loading - boolean indicating whether the data request is being made for the table
 * @param props.dataUser - object with the table data
 * @returns the work shifts table
 */ const TableWorkShifts = ({ loading , dataUser ,  })=>{
    const dispatch = (0,_components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_3__/* .useAppDispatch */ .T)();
    const tableRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { 0: page , 1: setPage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const { columnsTable  } = (0,_columnsTable_columnsTable__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const { errorWorkShifts , showErrorWorkShifts  } = (0,_components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_3__/* .useAppSelector */ .C)((state)=>state.workShifts);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        /** If there is an error, scroll top is done so that it is visible to the user */ if (showErrorWorkShifts) {
            (0,_utils_scrollToRef__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(tableRef);
        }
    }, [
        showErrorWorkShifts
    ]);
    const onChange = (pagination)=>{
        setPage(pagination.current);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tableComponent_Table__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        page: page,
        loading: loading,
        padding: "8px 24px",
        dataTable: dataUser,
        columns: columnsTable,
        onChange: onChange,
        rowsSkeleton: 8,
        columnsSkeleton: 5,
        widthError: "100%",
        tableRef: tableRef,
        errorMessage: errorWorkShifts,
        showError: showErrorWorkShifts,
        setShowError: (value)=>dispatch((0,_application_workShiftsSlice_workShiftsSlice__WEBPACK_IMPORTED_MODULE_2__/* .setErrorWorkShifts */ .NT)(value))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TableWorkShifts);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 43962:
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
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _application_workShiftsSlice_workShiftsSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10120);
/* harmony import */ var _components_common_exportDropdownComponent_ExportDropdownComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(28786);
/* harmony import */ var _components_common_workWeekDefinitionComponent_WorkWeekDefinitionComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(83381);
/* harmony import */ var _components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(89480);
/* harmony import */ var _consts_routes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(42144);
/* harmony import */ var _locales_en_en_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(89235);
/* harmony import */ var _tableWorkShifts_TableWorkShifts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(28193);
/* harmony import */ var _WorkShifts_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(30502);
/* harmony import */ var _WorkShifts_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_WorkShifts_module_scss__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_application_workShiftsSlice_workShiftsSlice__WEBPACK_IMPORTED_MODULE_4__, _components_common_workWeekDefinitionComponent_WorkWeekDefinitionComponent__WEBPACK_IMPORTED_MODULE_6__, _tableWorkShifts_TableWorkShifts__WEBPACK_IMPORTED_MODULE_9__]);
([_application_workShiftsSlice_workShiftsSlice__WEBPACK_IMPORTED_MODULE_4__, _components_common_workWeekDefinitionComponent_WorkWeekDefinitionComponent__WEBPACK_IMPORTED_MODULE_6__, _tableWorkShifts_TableWorkShifts__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const WorkShifts = ({ allWorkShifts , loading  })=>{
    const { workShifts  } = _locales_en_en_json__WEBPACK_IMPORTED_MODULE_8__;
    const dispatch = (0,_components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_7__/* .useAppDispatch */ .T)();
    const { currentUserRoleName  } = (0,_components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_7__/* .useAppSelector */ .C)((state)=>state.dashboard);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_WorkShifts_module_scss__WEBPACK_IMPORTED_MODULE_10___default().work_shifts),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Typography.Title, {
                    className: (_WorkShifts_module_scss__WEBPACK_IMPORTED_MODULE_10___default().work_shifts__buyer),
                    children: currentUserRoleName
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Typography.Title, {
                    className: (_WorkShifts_module_scss__WEBPACK_IMPORTED_MODULE_10___default().work_shifts__title),
                    children: workShifts.titleWorkShifts
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                    className: (_WorkShifts_module_scss__WEBPACK_IMPORTED_MODULE_10___default().top_bar),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_workWeekDefinitionComponent_WorkWeekDefinitionComponent__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_WorkShifts_module_scss__WEBPACK_IMPORTED_MODULE_10___default().buttons),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_exportDropdownComponent_ExportDropdownComponent__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    exportData: (type)=>dispatch((0,_application_workShiftsSlice_workShiftsSlice__WEBPACK_IMPORTED_MODULE_4__/* .exportWorkShifts */ .r4)({
                                            router: (next_router__WEBPACK_IMPORTED_MODULE_2___default()),
                                            type
                                        }))
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                    size: "large",
                                    type: "primary",
                                    onClick: ()=>{
                                        next_router__WEBPACK_IMPORTED_MODULE_2___default().push(_consts_routes__WEBPACK_IMPORTED_MODULE_11__/* .URL_CREATE_WORK_SHIFTS */ .$5, undefined, {
                                            shallow: true
                                        });
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiOutlinePlus, {
                                            className: (_WorkShifts_module_scss__WEBPACK_IMPORTED_MODULE_10___default().buttons__add_icon)
                                        }),
                                        workShifts.addButton
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tableWorkShifts_TableWorkShifts__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                    loading: loading,
                    dataUser: allWorkShifts
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WorkShifts);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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


/***/ })

};
;