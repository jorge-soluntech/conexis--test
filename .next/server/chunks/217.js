exports.id = 217;
exports.ids = [217];
exports.modules = {

/***/ 12361:
/***/ ((module) => {

// Exports
module.exports = {
	"buyers": "buyerComponent_buyers__j_1_M",
	"buyers__title": "buyerComponent_buyers__title__5AdYm",
	"form_subtitle": "buyerComponent_form_subtitle__K_V76",
	"buttons": "buyerComponent_buttons__iO1LF",
	"buttons__export_icon": "buyerComponent_buttons__export_icon__2_N__",
	"buttons__add_icon": "buyerComponent_buttons__add_icon__1ygAe",
	"moveToRight": "buyerComponent_moveToRight__NIVHn"
};


/***/ }),

/***/ 549:
/***/ ((module) => {

// Exports
module.exports = {
	"headerTable": "TableBuyer_headerTable__Nk_Rc",
	"columnTable": "TableBuyer_columnTable__YJpDl",
	"expandedRow": "TableBuyer_expandedRow__qIsUc",
	"contractedRowIcon": "TableBuyer_contractedRowIcon__RGDYq",
	"expandedRowIcon": "TableBuyer_expandedRowIcon__p5x_K",
	"expandedRowContent": "TableBuyer_expandedRowContent__4Cu_A",
	"expandedRowContentSection": "TableBuyer_expandedRowContentSection__nYHOb",
	"expandedRowContentTitle": "TableBuyer_expandedRowContentTitle__0zNzk",
	"expandedRowContentItem": "TableBuyer_expandedRowContentItem__C94LF",
	"expandedRowContentItemValue": "TableBuyer_expandedRowContentItemValue__Qhv3a",
	"expandedRowContentItemDocument": "TableBuyer_expandedRowContentItemDocument__SlH56",
	"moveToRight": "TableBuyer_moveToRight__caTJ7"
};


/***/ }),

/***/ 41805:
/***/ ((module) => {

// Exports
module.exports = {
	"form_subtitle": "Header_form_subtitle__uoV8j",
	"buttons": "Header_buttons__QEkkl",
	"buttons__add_icon": "Header_buttons__add_icon__2BViJ",
	"moveToRight": "Header_moveToRight__QdoNi"
};


/***/ }),

/***/ 217:
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
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90396);
/* harmony import */ var _consts_permissions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(62633);
/* harmony import */ var _tableComponents_header_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20025);
/* harmony import */ var _buyerComponent_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(12361);
/* harmony import */ var _buyerComponent_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_buyerComponent_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _tableBuyer_TableBuyer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(27084);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tableComponents_header_Header__WEBPACK_IMPORTED_MODULE_6__, _tableBuyer_TableBuyer__WEBPACK_IMPORTED_MODULE_7__]);
([_tableComponents_header_Header__WEBPACK_IMPORTED_MODULE_6__, _tableBuyer_TableBuyer__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable no-nested-ternary */ 








const BuyerComponent = ({ loading , dataTable , showError , setShowError , messageError ,  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_buyerComponent_module_scss__WEBPACK_IMPORTED_MODULE_8___default().buyers),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tableComponents_header_Header__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    type: _consts_permissions__WEBPACK_IMPORTED_MODULE_5__/* .DASHBOARDTYPES.buyer */ .j2.buyer,
                    titleForm: _consts__WEBPACK_IMPORTED_MODULE_4__/* .BUYERS_TABLE_TEXT.title_buyers_table */ .Fg.title_buyers_table,
                    hasSearchInput: false,
                    subTitleForm: _consts__WEBPACK_IMPORTED_MODULE_4__/* .BUYERS_TABLE_TEXT.sub_title_buyers_table */ .Fg.sub_title_buyers_table
                }),
                showError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Alert, {
                    message: messageError,
                    className: "alert_red",
                    type: "error",
                    showIcon: true,
                    closable: true,
                    afterClose: ()=>setShowError(false),
                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        src: "/assets/icons/alert_error.svg",
                        alt: "logo_conexis",
                        width: 24,
                        height: 24
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tableBuyer_TableBuyer__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    loading: loading,
                    dataTable: dataTable,
                    setShowError: setShowError,
                    dashboard: _consts_permissions__WEBPACK_IMPORTED_MODULE_5__/* .DASHBOARDTYPES.buyer */ .j2.buyer
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BuyerComponent);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 27084:
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
/* harmony import */ var _infrastructure_services_utilsServices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17632);
/* harmony import */ var _tableComponent_Table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(95821);
/* harmony import */ var _TableBuyer_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(549);
/* harmony import */ var _TableBuyer_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_TableBuyer_module_scss__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_infrastructure_services_utilsServices__WEBPACK_IMPORTED_MODULE_4__, _tableComponent_Table__WEBPACK_IMPORTED_MODULE_5__]);
([_infrastructure_services_utilsServices__WEBPACK_IMPORTED_MODULE_4__, _tableComponent_Table__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const DEFAULT_PAGE_SIZE = 20;
/**
 * returns the buyers table
 * @param dashboard - The type of dashboard.
 * @param loading - boolean indicating whether the data request is being made for the table
 * @param dataTable - object with the table data
 * @param setShowError - function to show the error message
 * @returns the buyers table
 */ const TableBuyers = ({ dashboard , loading , dataTable , setShowError ,  })=>{
    const { 0: page , 1: setPage  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1);
    const onChange = (pagination)=>{
        setPage(pagination.current);
    };
    const columns = [
        {
            title: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: (_TableBuyer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().headerTable),
                    children: "Client company name"
                }),
            dataIndex: "clientCompanyName",
            sorter: (a, b)=>a.clientCompanyName.localeCompare(b.clientCompanyName),
            className: (_TableBuyer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().columnTable)
        },
        {
            title: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: (_TableBuyer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().headerTable),
                    children: "Client contact name"
                }),
            dataIndex: "clientContactName",
            className: (_TableBuyer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().columnTable),
            sorter: (a, b)=>{
                return a.clientContactName.localeCompare(b.clientContactName);
            }
        },
        {
            title: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: (_TableBuyer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().headerTable),
                    children: "Client contact email"
                }),
            dataIndex: "clientContactEmail",
            className: (_TableBuyer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().columnTable),
            sorter: (a, b)=>{
                return a.clientContactEmail.localeCompare(b.clientContactEmail);
            }
        },
        {
            title: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: (_TableBuyer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().headerTable),
                    children: "Client contact phone"
                }),
            dataIndex: "clientContactPhone",
            className: (_TableBuyer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().columnTable),
            sorter: (a, b)=>a.clientContactPhone.localeCompare(b.clientContactPhone)
        },
        {
            title: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: (_TableBuyer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().headerTable),
                    children: "Account owner"
                }),
            dataIndex: "accountOwner",
            className: (_TableBuyer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().columnTable),
            sorter: (a, b)=>a.accountOwner.localeCompare(b.accountOwner)
        },
        {
            title: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: (_TableBuyer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().headerTable),
                    children: "Contract expiration date"
                }),
            dataIndex: "contractExpirationDate",
            className: (_TableBuyer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().columnTable),
            sorter: (a, b)=>a.contractExpirationDate.localeCompare(b.contractExpirationDate)
        }, 
    ];
    function detailsContent(record) {
        const downloadS3File = async (file)=>{
            try {
                await _infrastructure_services_utilsServices__WEBPACK_IMPORTED_MODULE_4__/* .UtilServices.downloadS3File */ .$.downloadS3File(file, (next_router__WEBPACK_IMPORTED_MODULE_2___default()));
            } catch (error) {
                setShowError(true);
            }
        };
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_TableBuyer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().expandedRowContent),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_TableBuyer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().expandedRowContentSection),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: (_TableBuyer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().expandedRowContentTitle),
                            children: "Additional information"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                    xs: 12,
                                    md: 12,
                                    lg: 9,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        style: {
                                            display: "flex"
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: (_TableBuyer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().expandedRowContentItem),
                                                children: "Legal name for invoicing:"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: (_TableBuyer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().expandedRowContentItemValue),
                                                children: record.details.aditionalInfo.legalNameInvoicing
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                    xs: 12,
                                    md: 12,
                                    lg: 12,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        style: {
                                            display: "flex"
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: (_TableBuyer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().expandedRowContentItem),
                                                children: "Client mailing address:"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: (_TableBuyer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().expandedRowContentItemValue),
                                                children: record.details.aditionalInfo.clientMailingAddress
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                    xs: 12,
                                    md: 12,
                                    lg: 9,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        style: {
                                            display: "flex"
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: (_TableBuyer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().expandedRowContentItem),
                                                children: "Client mailing address 2:"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: (_TableBuyer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().expandedRowContentItemValue),
                                                children: record.details.aditionalInfo.clientMailingAddress2
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                    xs: 12,
                                    md: 12,
                                    lg: 12,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        style: {
                                            display: "flex"
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: (_TableBuyer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().expandedRowContentItem),
                                                children: "Work week definition:"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: (_TableBuyer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().expandedRowContentItemValue),
                                                children: record.details.aditionalInfo.workWeekDefinition
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                xs: 24,
                                md: 24,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    style: {
                                        display: "flex"
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: (_TableBuyer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().expandedRowContentItem),
                                            children: "Currency:"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: (_TableBuyer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().expandedRowContentItemValue),
                                            children: record.details.aditionalInfo.currency
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Divider, {
                            style: {
                                backgroundColor: "#DBDDE0"
                            }
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_TableBuyer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().expandedRowContentSection),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: (_TableBuyer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().expandedRowContentTitle),
                            children: "Taxes"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                    xs: 8,
                                    md: 8,
                                    lg: 8,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        style: {
                                            display: "flex"
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: (_TableBuyer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().expandedRowContentItem),
                                                children: "VAT/Federal:"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: (_TableBuyer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().expandedRowContentItemValue),
                                                children: record.details.taxes.vatFederalTax
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                    xs: 8,
                                    md: 8,
                                    lg: 8,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        style: {
                                            display: "flex"
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: (_TableBuyer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().expandedRowContentItem),
                                                children: "Provincial/State sales tax:"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: (_TableBuyer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().expandedRowContentItemValue),
                                                children: record.details.taxes.provincialTax
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                    xs: 8,
                                    md: 8,
                                    lg: 8,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        style: {
                                            display: "flex"
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: (_TableBuyer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().expandedRowContentItem),
                                                children: "Other:"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: (_TableBuyer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().expandedRowContentItemValue),
                                                children: record.details.taxes.otherTax
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Divider, {
                            style: {
                                backgroundColor: "#DBDDE0"
                            }
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_TableBuyer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().expandedRowContentSection),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: (_TableBuyer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().expandedRowContentTitle),
                            children: "Approvals"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                    xs: 12,
                                    md: 12,
                                    sm: 12,
                                    lg: 10,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        style: {
                                            display: "flex"
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: (_TableBuyer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().expandedRowContentItem),
                                                children: "Jobs require approval?"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: (_TableBuyer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().expandedRowContentItemValue),
                                                children: record.details.approvals.jobsRequireApproval
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                    xs: 12,
                                    md: 12,
                                    sm: 12,
                                    lg: 10,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        style: {
                                            display: "flex"
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: (_TableBuyer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().expandedRowContentItem),
                                                children: "Submissions require approval?"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: (_TableBuyer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().expandedRowContentItemValue),
                                                children: record.details.approvals.submissionsRequireApproval
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                    xs: 12,
                                    md: 12,
                                    sm: 12,
                                    lg: 10,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        style: {
                                            display: "flex"
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: (_TableBuyer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().expandedRowContentItem),
                                                children: "Access to applicant tracking module:"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: (_TableBuyer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().expandedRowContentItemValue),
                                                children: record.details.approvals.accesToApplicantTrackingModule
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                    xs: 12,
                                    md: 12,
                                    sm: 12,
                                    lg: 10,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        style: {
                                            display: "flex"
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: (_TableBuyer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().expandedRowContentItem),
                                                children: "Contracts require final approval?"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: (_TableBuyer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().expandedRowContentItemValue),
                                                children: record.details.approvals.contractRequiresApproval
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                    xs: 12,
                                    md: 12,
                                    sm: 12,
                                    lg: 10,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        style: {
                                            display: "flex"
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: (_TableBuyer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().expandedRowContentItem),
                                                children: "Accounts payable contact name:"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: (_TableBuyer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().expandedRowContentItemValue),
                                                children: record.details.approvals.accountsPayableContactName
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                    xs: 12,
                                    md: 12,
                                    sm: 12,
                                    lg: 10,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        style: {
                                            display: "flex"
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: (_TableBuyer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().expandedRowContentItem),
                                                children: "Accounts payable contact email:"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: (_TableBuyer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().expandedRowContentItemValue),
                                                children: record.details.approvals.accountsPayableContactEmail
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Divider, {
                            style: {
                                backgroundColor: "#DBDDE0"
                            }
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_TableBuyer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().expandedRowContentSection),
                    style: {
                        display: "block"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: (_TableBuyer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().expandedRowContentTitle),
                            children: "Documents"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: (_TableBuyer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().expandedRowContentItem),
                            style: {
                                display: "block"
                            },
                            children: "Client agreement"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: {
                                minHeight: "0.5rem",
                                display: "inline-block"
                            },
                            children: record.details.documents.clientAgreement?.map((item)=>{
                                if (item.id) {
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_TableBuyer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().expandedRowContentItemDocument),
                                        onClick: ()=>{
                                            downloadS3File(item);
                                        },
                                        children: item.name ? item.name : "undefined"
                                    }, item.id);
                                }
                                return null;
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: (_TableBuyer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().expandedRowContentItem),
                            style: {
                                display: "block"
                            },
                            children: "Others"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: {
                                minHeight: "1rem",
                                display: "inline-block"
                            },
                            children: record.details.documents.others?.map((item)=>{
                                if (item.id) {
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_TableBuyer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().expandedRowContentItemDocument),
                                        onClick: ()=>{
                                            downloadS3File(item);
                                        },
                                        children: item.name ? item.name : "Undefined"
                                    }, item.id);
                                }
                                return null;
                            })
                        })
                    ]
                })
            ]
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tableComponent_Table__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        dashboard: dashboard,
        page: page,
        loading: loading,
        dataTable: dataTable,
        pageSize: DEFAULT_PAGE_SIZE,
        columns: columns,
        onChange: onChange,
        expandable: {
            expandedRowClassName: ()=>(_TableBuyer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().expandedRow),
            expandedRowRender: (record)=>detailsContent(record),
            columnWidth: "1px",
            expandIcon: ({ expanded , onExpand , record  })=>{
                if (record.details === null) {
                    return null;
                }
                return expanded ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_TableBuyer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().contractedRowIcon),
                    onClick: (e)=>onExpand(record, e),
                    children: "........"
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_TableBuyer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().expandedRowIcon),
                    onClick: (e)=>onExpand(record, e),
                    children: "........"
                });
            },
            rowExpandable: (record)=>record.details !== null
        },
        rowsSkeleton: 8,
        columnsSkeleton: 7
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TableBuyers);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 20025:
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
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _application_authContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(78760);
/* harmony import */ var _components_common_input_Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(31776);
/* harmony import */ var _components_hooks_useWindowDimension__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(60255);
/* harmony import */ var _consts_breakpoints__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(58310);
/* harmony import */ var _consts_permissions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(62633);
/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(41805);
/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Header_module_scss__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_application_authContext__WEBPACK_IMPORTED_MODULE_5__]);
_application_authContext__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











const { Title  } = antd__WEBPACK_IMPORTED_MODULE_1__.Typography;
/**
 * Header is a reusable Header for the dashboards with a button to add new and a input with a filter option.
 *
 * the reference in the table is used to scroll top when there is an error alert
 *
 * @param type - The role type of the table, or the dashboaard type.
 * @param titleForm - The current page number of the table.
 * @param subTitleForm - Whether the table is currently loading or not.
 * @param hasSearchInput - Boolean that tells me if the component should have an filterInput.
 * @param handleSearchChange = only valid if hasSearchInput prop is true.
 *
 * @returns The JSX element representing the header of the dashboard.
 */ const Header = ({ type , titleForm , subTitleForm , hasSearchInput , handleSearchChange  })=>{
    const { user  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_application_authContext__WEBPACK_IMPORTED_MODULE_5__/* .AuthContext */ .Vo);
    const { width =0  } = (0,_components_hooks_useWindowDimension__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
        className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_9___default().buttons_and_search),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                md: 18,
                sm: 24,
                xs: 24,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
                        level: 2,
                        className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_9___default().buyers__title),
                        children: titleForm
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_9___default().form_subtitle),
                        children: subTitleForm
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                md: 6,
                sm: 24,
                xs: 24,
                children: [
                    hasSearchInput && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_9___default().search),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_input_Input__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            id: "search",
                            type: "text",
                            icon: "search",
                            isLabel: false,
                            inputHeight: "43px",
                            register: ()=>{},
                            placeholder: "Search by",
                            inputBackground: "transparent",
                            inputWidth: width <= _consts_breakpoints__WEBPACK_IMPORTED_MODULE_10__/* .TABLET_BREAKPOINT */ .rN ? "100%" : "273px",
                            onChange: (value)=>handleSearchChange(value)
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_9___default().buttons),
                        children: user && _consts_permissions__WEBPACK_IMPORTED_MODULE_8__/* .PERMISSIONS */ ._I[type].create.includes(user.role) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
                            style: {
                                width: width <= _consts_breakpoints__WEBPACK_IMPORTED_MODULE_10__/* .SMALL_TABLET_BREAKPOINT */ .IU ? "100%" : "auto"
                            },
                            type: "primary",
                            size: "large",
                            htmlType: "submit",
                            onClick: ()=>{
                                next_router__WEBPACK_IMPORTED_MODULE_2___default().push(`/home/${type}/create`);
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiOutlinePlus, {
                                    className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_9___default().buttons__add_icon)
                                }),
                                "Add ",
                                type.substring(0, type.length - 1)
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;