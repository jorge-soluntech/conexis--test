exports.id = 8835;
exports.ids = [8835];
exports.modules = {

/***/ 70149:
/***/ ((module) => {

// Exports
module.exports = {
	"candidates": "candidates_candidates__UeiQB",
	"candidates__buyer": "candidates_candidates__buyer__hdFbl",
	"candidates__title": "candidates_candidates__title__7c2S9",
	"buttons_and_search": "candidates_buttons_and_search__vaLLI",
	"search": "candidates_search__nSaAI",
	"buttons": "candidates_buttons__QeMT6",
	"buttons__add_icon": "candidates_buttons__add_icon__OGRkY",
	"moveToRight": "candidates_moveToRight__nNveL"
};


/***/ }),

/***/ 81023:
/***/ ((module) => {

// Exports
module.exports = {
	"header_table": "columnsTable_header_table__n86si",
	"column_table": "columnsTable_column_table__Anjpr",
	"wrapperLinkActions": "columnsTable_wrapperLinkActions__uQKoQ",
	"moveToRight": "columnsTable_moveToRight__bgYtZ"
};


/***/ }),

/***/ 27493:
/***/ ((module) => {

// Exports
module.exports = {
	"row": "modalEditWorker_row__qgCu_",
	"col_item": "modalEditWorker_col_item__UxkZL",
	"label": "modalEditWorker_label__PwLdr",
	"moveToRight": "modalEditWorker_moveToRight__N09cZ"
};


/***/ }),

/***/ 58835:
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
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_common_input_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(31776);
/* harmony import */ var _components_hooks_useWindowDimension__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(60255);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(90396);
/* harmony import */ var _consts_login_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4262);
/* harmony import */ var _locales_en_en_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(89235);
/* harmony import */ var _hooks_useRenderTitleLoggedAs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(92575);
/* harmony import */ var _modalEditWorker_ModalEditWorker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(90545);
/* harmony import */ var _tableCandidates_TableCandidates__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(62087);
/* harmony import */ var _candidates_module_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(70149);
/* harmony import */ var _candidates_module_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_candidates_module_scss__WEBPACK_IMPORTED_MODULE_13__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useRenderTitleLoggedAs__WEBPACK_IMPORTED_MODULE_10__, _modalEditWorker_ModalEditWorker__WEBPACK_IMPORTED_MODULE_11__, _tableCandidates_TableCandidates__WEBPACK_IMPORTED_MODULE_12__]);
([_hooks_useRenderTitleLoggedAs__WEBPACK_IMPORTED_MODULE_10__, _modalEditWorker_ModalEditWorker__WEBPACK_IMPORTED_MODULE_11__, _tableCandidates_TableCandidates__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const { candidates  } = _locales_en_en_json__WEBPACK_IMPORTED_MODULE_9__;
const Candidates = ({ allCandidates , filteredData , handleSearch , infoCandidate , loading , searchText  })=>{
    const { width =0  } = (0,_components_hooks_useWindowDimension__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    const { renderTitleLoggedAs  } = (0,_hooks_useRenderTitleLoggedAs__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modalEditWorker_ModalEditWorker__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {}, infoCandidate?.workerStatus),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_candidates_module_scss__WEBPACK_IMPORTED_MODULE_13___default().candidates),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Typography.Title, {
                        className: (_candidates_module_scss__WEBPACK_IMPORTED_MODULE_13___default().candidates__buyer),
                        children: renderTitleLoggedAs
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Typography.Title, {
                        className: (_candidates_module_scss__WEBPACK_IMPORTED_MODULE_13___default().candidates__title),
                        children: candidates.title
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                        className: (_candidates_module_scss__WEBPACK_IMPORTED_MODULE_13___default().buttons_and_search),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_candidates_module_scss__WEBPACK_IMPORTED_MODULE_13___default().search),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_input_Input__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    id: "search",
                                    type: "text",
                                    icon: "search",
                                    isLabel: false,
                                    inputHeight: "43px",
                                    register: ()=>{},
                                    placeholder: candidates.placeholderSearch,
                                    inputBackground: "transparent",
                                    inputWidth: width <= _consts_login_ui__WEBPACK_IMPORTED_MODULE_8__/* .TABLET_BREAKPOINT */ .rN ? "100%" : "273px",
                                    onChange: (value)=>handleSearch(value)
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_candidates_module_scss__WEBPACK_IMPORTED_MODULE_13___default().buttons),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                    type: "primary",
                                    size: "large",
                                    htmlType: "submit",
                                    onClick: ()=>next_router__WEBPACK_IMPORTED_MODULE_2___default().push(_consts__WEBPACK_IMPORTED_MODULE_7__/* .urls.URL_CREATE_CANDIDATE */ .jk.u8),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiOutlinePlus, {
                                            className: (_candidates_module_scss__WEBPACK_IMPORTED_MODULE_13___default().buttons__add_icon)
                                        }),
                                        candidates.buttonAdd
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tableCandidates_TableCandidates__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                        loading: loading,
                        dataUser: allCandidates,
                        filteredData: filteredData,
                        searchText: searchText
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Candidates);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 15848:
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
/* harmony import */ var _application_candidatesSlice_candidatesSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89397);
/* harmony import */ var _assets_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67151);
/* harmony import */ var _components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89480);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(90396);
/* harmony import */ var _locales_en_en_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(89235);
/* harmony import */ var _utils_sorterTable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20720);
/* harmony import */ var _columnsTable_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(81023);
/* harmony import */ var _columnsTable_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_columnsTable_module_scss__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_application_candidatesSlice_candidatesSlice__WEBPACK_IMPORTED_MODULE_2__]);
_application_candidatesSlice_candidatesSlice__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const useColumnsCandidates = ()=>{
    const { candidates: { table  } ,  } = _locales_en_en_json__WEBPACK_IMPORTED_MODULE_6__;
    const dispatch = (0,_components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_4__/* .useAppDispatch */ .T)();
    const { filters  } = (0,_components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_4__/* .useAppSelector */ .C)((state)=>state.candidates);
    const columnsTable = [
        {
            title: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: (_columnsTable_module_scss__WEBPACK_IMPORTED_MODULE_7___default().header_table),
                    children: table.name
                }),
            dataIndex: "fullName",
            className: (_columnsTable_module_scss__WEBPACK_IMPORTED_MODULE_7___default().column_table),
            sorter: (a, b)=>a.fullName.localeCompare(b.fullName)
        },
        {
            title: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: (_columnsTable_module_scss__WEBPACK_IMPORTED_MODULE_7___default().header_table),
                    children: table.email
                }),
            dataIndex: "email",
            className: (_columnsTable_module_scss__WEBPACK_IMPORTED_MODULE_7___default().column_table),
            sorter: (a, b, sortOrder)=>(0,_utils_sorterTable__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(a, b, "email", sortOrder)
        },
        {
            title: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: (_columnsTable_module_scss__WEBPACK_IMPORTED_MODULE_7___default().header_table),
                    children: table.workerStatus
                }),
            dataIndex: "workerStatus",
            className: (_columnsTable_module_scss__WEBPACK_IMPORTED_MODULE_7___default().column_table),
            filters: _consts__WEBPACK_IMPORTED_MODULE_5__/* .workers.FILTERS_WORKER_STATUS */ .CB.el,
            onFilter: (value, record)=>{
                return record.workerStatus.indexOf(value) === 0;
            },
            sorter: (a, b, sortOrder)=>(0,_utils_sorterTable__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(a, b, "workerStatus", sortOrder),
            defaultFilteredValue: filters.status,
            filterIcon: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_assets_filter__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    height: 16,
                    width: 16,
                    fill: filters.status.length > 0 ? "#96bc33" : "#BFBFBF"
                })
        },
        {
            title: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: (_columnsTable_module_scss__WEBPACK_IMPORTED_MODULE_7___default().header_table),
                    children: table.actions
                }),
            dataIndex: "actions",
            className: (_columnsTable_module_scss__WEBPACK_IMPORTED_MODULE_7___default().column_table),
            render: (_value, record)=>{
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    onClick: ()=>dispatch((0,_application_candidatesSlice_candidatesSlice__WEBPACK_IMPORTED_MODULE_2__/* .showModal */ .K4)(record)),
                    className: (_columnsTable_module_scss__WEBPACK_IMPORTED_MODULE_7___default().wrapperLinkActions),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                        alt: "edit",
                        width: 16,
                        height: 16,
                        src: _consts__WEBPACK_IMPORTED_MODULE_5__/* .icons.EDIT_TABLE */ .ci.hq
                    })
                });
            }
        }, 
    ];
    return {
        columnsTable
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useColumnsCandidates);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 90545:
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
/* harmony import */ var _application_candidatesSlice_candidatesSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89397);
/* harmony import */ var _components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89480);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90396);
/* harmony import */ var _locales_en_en_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(89235);
/* harmony import */ var _FormSuccessModalComponent_FormSuccessModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(87497);
/* harmony import */ var _selectWorkerStatus_SelectWorkerStatus__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(61617);
/* harmony import */ var _modalEditWorker_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(27493);
/* harmony import */ var _modalEditWorker_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_modalEditWorker_module_scss__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_application_candidatesSlice_candidatesSlice__WEBPACK_IMPORTED_MODULE_4__]);
_application_candidatesSlice_candidatesSlice__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











const ModalEditWorker = ()=>{
    const { openModal , infoCandidate , confirmLoading  } = (0,_components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_5__/* .useAppSelector */ .C)((state)=>state.candidates);
    const { candidates  } = _locales_en_en_json__WEBPACK_IMPORTED_MODULE_7__;
    const [, , workerStatus] = _consts__WEBPACK_IMPORTED_MODULE_6__/* .workers.FORM_FIELDS.mandatories */ .CB.GZ.mandatories;
    const dispatch = (0,_components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_5__/* .useAppDispatch */ .T)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { 0: statusWorker , 1: setStatusWorker  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(infoCandidate?.workerStatus);
    const triggerChange = async ()=>{
        const updatedStatus = await dispatch((0,_application_candidatesSlice_candidatesSlice__WEBPACK_IMPORTED_MODULE_4__/* .updateWorkerStatus */ .fs)({
            router,
            body: {
                worker_status: statusWorker
            },
            idCandidate: infoCandidate.key
        }));
        if (updatedStatus?.payload.statusCode === 200) {
            dispatch((0,_application_candidatesSlice_candidatesSlice__WEBPACK_IMPORTED_MODULE_4__/* .setConfirmLoading */ .b$)(false));
            dispatch((0,_application_candidatesSlice_candidatesSlice__WEBPACK_IMPORTED_MODULE_4__/* .setOpenModal */ .i3)(false));
        }
    };
    const onStatusChange = (value)=>setStatusWorker(value);
    const handleCandel = ()=>{
        dispatch((0,_application_candidatesSlice_candidatesSlice__WEBPACK_IMPORTED_MODULE_4__/* .setOpenModal */ .i3)(false));
        setTimeout(()=>{
            dispatch((0,_application_candidatesSlice_candidatesSlice__WEBPACK_IMPORTED_MODULE_4__/* .clearInfoCandidate */ .$P)());
        }, 500);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FormSuccessModalComponent_FormSuccessModal__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        isModal: openModal,
        isLoading: confirmLoading,
        handleSave: triggerChange,
        handleCancel: handleCandel,
        showSuccess: false,
        titleSave: candidates.modalEdit.buttonSave,
        titleCancel: candidates.modalEdit.buttonCancel,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form, {
            layout: "vertical",
            validateTrigger: "onSubmit",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                className: (_modalEditWorker_module_scss__WEBPACK_IMPORTED_MODULE_10___default().row),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                    span: 24,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                        label: candidates.create.labelStatus,
                        name: workerStatus,
                        className: (_modalEditWorker_module_scss__WEBPACK_IMPORTED_MODULE_10___default().label),
                        rules: [
                            {
                                required: true
                            }
                        ],
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_selectWorkerStatus_SelectWorkerStatus__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                            onStatusChange: onStatusChange,
                            isSelectCreate: false,
                            defaultValueSelect: infoCandidate?.workerStatus
                        })
                    })
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalEditWorker);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 62087:
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
/* harmony import */ var _application_candidatesSlice_candidatesSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89397);
/* harmony import */ var _components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89480);
/* harmony import */ var _utils_scrollToRef__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72909);
/* harmony import */ var _tableComponent_Table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95821);
/* harmony import */ var _columnsTable_columnsTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15848);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_application_candidatesSlice_candidatesSlice__WEBPACK_IMPORTED_MODULE_2__, _tableComponent_Table__WEBPACK_IMPORTED_MODULE_4__, _columnsTable_columnsTable__WEBPACK_IMPORTED_MODULE_5__]);
([_application_candidatesSlice_candidatesSlice__WEBPACK_IMPORTED_MODULE_2__, _tableComponent_Table__WEBPACK_IMPORTED_MODULE_4__, _columnsTable_columnsTable__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







/**
 * returns the candidates table
 *
 * @param props.loading - boolean indicating whether the data request is being made for the table
 * @param props.dataUser - object with the table data
 * @param props.filteredData - filered data when the user use the search bar
 * @param props.searchText - boolean that indicate if search is used
 * @returns the candidates table
 */ const TableCandidates = ({ dataUser , filteredData , loading , searchText ,  })=>{
    const dispatch = (0,_components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_3__/* .useAppDispatch */ .T)();
    const tableRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { columnsTable  } = (0,_columnsTable_columnsTable__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const { errorCandidates , showErrorCandidates , page , totalRecords  } = (0,_components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_3__/* .useAppSelector */ .C)((state)=>state.candidates);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        /** If there is an error, scroll top is done so that it is visible to the user */ if (showErrorCandidates) (0,_utils_scrollToRef__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(tableRef);
    }, [
        showErrorCandidates
    ]);
    const onChange = (pagination, filters)=>{
        dispatch((0,_application_candidatesSlice_candidatesSlice__WEBPACK_IMPORTED_MODULE_2__/* .setFilters */ .rr)(filters.workerStatus));
        dispatch((0,_application_candidatesSlice_candidatesSlice__WEBPACK_IMPORTED_MODULE_2__/* .setPage */ .YA)(pagination.current));
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tableComponent_Table__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        page: page,
        total: totalRecords,
        loading: loading,
        padding: "8px 24px",
        dataTable: searchText ? filteredData : dataUser,
        columns: columnsTable,
        onChange: onChange,
        rowsSkeleton: 8,
        columnsSkeleton: 5,
        widthError: "100%",
        tableRef: tableRef,
        errorMessage: errorCandidates,
        showError: showErrorCandidates,
        setShowError: (value)=>dispatch((0,_application_candidatesSlice_candidatesSlice__WEBPACK_IMPORTED_MODULE_2__/* .setErrorCandidates */ .vU)(value))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TableCandidates);

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