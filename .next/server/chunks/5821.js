"use strict";
exports.id = 5821;
exports.ids = [5821];
exports.modules = {

/***/ 95821:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_common_skeletonTable_SkeletonTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27914);
/* harmony import */ var _components_hooks_useWindowDimension__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60255);
/* harmony import */ var _consts_breakpoints__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(58310);
/* harmony import */ var _Table_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73144);
/* harmony import */ var _Table_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Table_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _useColumFilter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(69198);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useColumFilter__WEBPACK_IMPORTED_MODULE_6__]);
_useColumFilter__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









/**
 * TableComponent is a reusable Ant Design table component that renders a table with pagination and optional error alert.
 *
 * the reference in the table is used to scroll top when there is an error alert
 *
 * @param props.dashboard - The dashboard.
 * @param props.page - The current page number of the table.
 * @param props.loading - Whether the table is currently loading or not.
 * @param props.dataTable - The array of data to render in the table.
 * @param props.pageSize = 25 - The number of items to display per page in the table, default is 25.
 * @param props.columns - The array of columns to display in the table.
 * @param props.onChange - The function to call when the table is changed, such as when the page number or sort order is changed.
 * @param props.rowsSkeleton - The array of skeleton rows to display while loading the table.
 * @param props.columnsSkeleton - The array of skeleton columns to display while loading the table.
 * @param props.padding - The padding to apply to the table card body.
 * @param props.showError - Whether to display the error alert or not.
 * @param props.setShowError - The function to call to update the state of the showError boolean.
 * @param props.expandable - The expandable configuration for the table.
 * @param props.widthError - error container width, default is 95%.
 * @param props.errorMessage - The error message to display in the alert.
 * @param props.tableRef - A reference to the Ant Design table component.
 * @param props.showSizeChanger - show record resizer per page
 * @param props.rowSelection - show a checkbox to select the row
 *
 * @returns The JSX element representing the table component.
 */ const TableComponent = ({ dashboard , page , loading , dataTable , pageSize =25 , columns , onChange , rowsSkeleton , columnsSkeleton , padding ="32px 48px" , showError =false , setShowError =()=>null , widthError ="95%" , errorMessage , expandable , tableRef , total , showSizeChanger =false , rowSelection =undefined ,  })=>{
    const { width =0  } = (0,_components_hooks_useWindowDimension__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const newColumns = (0,_useColumFilter__WEBPACK_IMPORTED_MODULE_6__/* .useColumnsFilter */ .y)({
        dashboard,
        columns
    });
    const { 0: pageSizeTable , 1: setPageSizeTable  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(pageSize);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Card, {
        ref: tableRef,
        className: (_Table_module_scss__WEBPACK_IMPORTED_MODULE_7___default().card),
        bodyStyle: {
            padding
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Card.Grid, {
            hoverable: false,
            className: (_Table_module_scss__WEBPACK_IMPORTED_MODULE_7___default().grid),
            children: [
                showError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Alert, {
                    showIcon: true,
                    closable: true,
                    type: "error",
                    message: errorMessage,
                    style: {
                        width: widthError
                    },
                    className: `alert_red ${(_Table_module_scss__WEBPACK_IMPORTED_MODULE_7___default().alert)}`,
                    afterClose: ()=>setShowError(false),
                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        src: "/assets/icons/alert_error.svg",
                        alt: "logo_conexis",
                        width: 24,
                        height: 24
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_skeletonTable_SkeletonTable__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    loading: loading,
                    rows: rowsSkeleton,
                    columns: columnsSkeleton,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Table, {
                        rowSelection: rowSelection,
                        columns: newColumns,
                        onChange: onChange,
                        className: (_Table_module_scss__WEBPACK_IMPORTED_MODULE_7___default().userTable),
                        dataSource: dataTable,
                        expandable: expandable,
                        pagination: {
                            size: "small",
                            current: page,
                            showSizeChanger,
                            style: {
                                marginTop: "28px",
                                marginBottom: "0px",
                                left: width <= _consts_breakpoints__WEBPACK_IMPORTED_MODULE_8__/* .MOBILE_BREAKPOINT */ .Gh ? "0" : "",
                                position: width <= _consts_breakpoints__WEBPACK_IMPORTED_MODULE_8__/* .MOBILE_BREAKPOINT */ .Gh ? "sticky" : "initial",
                                width: width <= _consts_breakpoints__WEBPACK_IMPORTED_MODULE_8__/* .MOBILE_BREAKPOINT */ .Gh ? "max-content" : "100%"
                            },
                            pageSize: pageSizeTable,
                            defaultPageSize: pageSizeTable,
                            onShowSizeChange: (_current, size)=>{
                                setPageSizeTable(size);
                            },
                            pageSizeOptions: [
                                "10",
                                "25",
                                "50",
                                "100",
                                "500",
                                "1000"
                            ],
                            showTotal: (total)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    style: {
                                        height: "32px"
                                    },
                                    children: [
                                        "Page ",
                                        page,
                                        " from ",
                                        Math.ceil(total / pageSizeTable)
                                    ]
                                }),
                            total
                        }
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TableComponent);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 69198:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ useColumnsFilter)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _application_authContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78760);
/* harmony import */ var _consts_permissions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(62633);
/* harmony import */ var _Table_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73144);
/* harmony import */ var _Table_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Table_module_scss__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_application_authContext__WEBPACK_IMPORTED_MODULE_4__]);
_application_authContext__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// import type { ColumnsType } from 'antd/es/table';







const useColumnsFilter = ({ dashboard , columns  })=>{
    const { user  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_application_authContext__WEBPACK_IMPORTED_MODULE_4__/* .AuthContext */ .Vo);
    const newColums = [
        ...columns
    ];
    if (user && dashboard && _consts_permissions__WEBPACK_IMPORTED_MODULE_5__/* .PERMISSIONS */ ._I[dashboard].edit.includes(user.role)) {
        newColums.push({
            title: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: (_Table_module_scss__WEBPACK_IMPORTED_MODULE_6___default().header_Table),
                    children: "Actions"
                }),
            dataIndex: "actions",
            className: (_Table_module_scss__WEBPACK_IMPORTED_MODULE_6___default().columnTable),
            render: (_value, record)=>{
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    onClick: ()=>{
                        next_router__WEBPACK_IMPORTED_MODULE_2___default().push(`/home/${dashboard}/edit/${record.key}`);
                    },
                    className: (_Table_module_scss__WEBPACK_IMPORTED_MODULE_6___default().wrapperLinkActions),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                        alt: "edit",
                        width: 16,
                        height: 16,
                        src: "/assets/icons/edit.svg"
                    })
                });
            }
        });
    }
    return newColums;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;