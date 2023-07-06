exports.id = 4185;
exports.ids = [4185];
exports.modules = {

/***/ 15919:
/***/ ((module) => {

// Exports
module.exports = {
	"expandedRow": "expandedRow_expandedRow__IzVQp",
	"expandedRow_title": "expandedRow_expandedRow_title__0luvr",
	"expandedRow_col": "expandedRow_expandedRow_col__sSEcO",
	"attachments": "expandedRow_attachments__VNFmy",
	"attachments_icon": "expandedRow_attachments_icon__COQQC",
	"moveToRight": "expandedRow_moveToRight__sV48W"
};


/***/ }),

/***/ 13106:
/***/ ((module) => {

// Exports
module.exports = {
	"suppliers": "manageSuppliers_suppliers__ZLxK5",
	"suppliers__buyer": "manageSuppliers_suppliers__buyer__yHpHh",
	"suppliers__title": "manageSuppliers_suppliers__title__RJX4W",
	"buttons_and_search": "manageSuppliers_buttons_and_search__Mqgfw",
	"search": "manageSuppliers_search__jiaVk",
	"buttons": "manageSuppliers_buttons__IlV8I",
	"buttons__add_icon": "manageSuppliers_buttons__add_icon__LGQE7",
	"moveToRight": "manageSuppliers_moveToRight__QEbno"
};


/***/ }),

/***/ 25140:
/***/ ((module) => {

// Exports
module.exports = {
	"headerTable": "tableManageSuppliers_headerTable__3MmAZ",
	"columnTable": "tableManageSuppliers_columnTable__WOMUY",
	"childrenExpanded": "tableManageSuppliers_childrenExpanded__Y68Jz",
	"contractedRowIcon": "tableManageSuppliers_contractedRowIcon__SJeR8",
	"expandedRowIcon": "tableManageSuppliers_expandedRowIcon__L0jQM",
	"supplier_status": "tableManageSuppliers_supplier_status__PsKCa",
	"userStatus": "tableManageSuppliers_userStatus__KwaiV",
	"moveToRight": "tableManageSuppliers_moveToRight__J_zyw"
};


/***/ }),

/***/ 63556:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(90396);
/* harmony import */ var _expandedRow_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15919);
/* harmony import */ var _expandedRow_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_expandedRow_module_scss__WEBPACK_IMPORTED_MODULE_6__);







const ExpandedRow = ({ dataExpanded  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_expandedRow_module_scss__WEBPACK_IMPORTED_MODULE_6___default().expandedRow),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                className: (_expandedRow_module_scss__WEBPACK_IMPORTED_MODULE_6___default().expandedRow_title),
                children: "Supplier’s information"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                gutter: [
                    16,
                    24
                ],
                children: dataExpanded.supplierInformation?.map((data, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                        className: (_expandedRow_module_scss__WEBPACK_IMPORTED_MODULE_6___default().expandedRow_col),
                        span: 6,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: data?.title
                            }),
                            data?.title === "Rating" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Rate, {
                                    disabled: true,
                                    defaultValue: data?.value,
                                    allowHalf: true
                                })
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: data?.value ?? "-"
                            })
                        ]
                    }, index))
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Divider, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                className: (_expandedRow_module_scss__WEBPACK_IMPORTED_MODULE_6___default().expandedRow_title),
                children: "Additional supplier contacts"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                gutter: 16,
                children: dataExpanded.additionalSupplierContacts?.map((data, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                        className: (_expandedRow_module_scss__WEBPACK_IMPORTED_MODULE_6___default().expandedRow_col),
                        span: 6,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: data?.title
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: data?.value ?? "-"
                            })
                        ]
                    }, index))
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Divider, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                gutter: 16,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                        className: (_expandedRow_module_scss__WEBPACK_IMPORTED_MODULE_6___default().expandedRow_col),
                        span: 6,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: (_expandedRow_module_scss__WEBPACK_IMPORTED_MODULE_6___default().expandedRow_title),
                                children: "Taxes"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: dataExpanded.taxes?.title
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: dataExpanded.taxes?.value ?? "-"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                        className: (_expandedRow_module_scss__WEBPACK_IMPORTED_MODULE_6___default().expandedRow_col),
                        span: 6,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: (_expandedRow_module_scss__WEBPACK_IMPORTED_MODULE_6___default().expandedRow_title),
                                children: "Work category"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: dataExpanded.workCategory?.title
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: dataExpanded.workCategory?.value ?? "-"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Divider, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                className: (_expandedRow_module_scss__WEBPACK_IMPORTED_MODULE_6___default().expandedRow_title),
                children: "Account contact information"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                gutter: 16,
                children: dataExpanded.accountContactInformation?.map((data, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                        className: (_expandedRow_module_scss__WEBPACK_IMPORTED_MODULE_6___default().expandedRow_col),
                        span: 6,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: data?.title
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: data?.value ?? "-"
                            })
                        ]
                    }, index))
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Divider, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
                type: "text",
                className: (_expandedRow_module_scss__WEBPACK_IMPORTED_MODULE_6___default().attachments),
                onClick: ()=>router.push(`/home/suppliers/attachments/${dataExpanded.key}`, undefined, {
                        shallow: true
                    }),
                children: [
                    "Go to attachments",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: (_expandedRow_module_scss__WEBPACK_IMPORTED_MODULE_6___default().attachments_icon),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                            src: _consts__WEBPACK_IMPORTED_MODULE_5__/* .icons.ARROW_RIGHT_GREEN */ .ci.FI,
                            width: 5.77,
                            height: 12,
                            alt: "arrow"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExpandedRow);


/***/ }),

/***/ 94185:
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
/* harmony import */ var _components_common_input_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31776);
/* harmony import */ var _components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89480);
/* harmony import */ var _components_hooks_useWindowDimension__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(60255);
/* harmony import */ var _consts_login_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4262);
/* harmony import */ var _consts_permissions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(62633);
/* harmony import */ var _locales_en_en_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(89235);
/* harmony import */ var _tableManageSuppliers_TableManageSuppliers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(17056);
/* harmony import */ var _manageSuppliers_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(13106);
/* harmony import */ var _manageSuppliers_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_manageSuppliers_module_scss__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tableManageSuppliers_TableManageSuppliers__WEBPACK_IMPORTED_MODULE_10__]);
_tableManageSuppliers_TableManageSuppliers__WEBPACK_IMPORTED_MODULE_10__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];












const { Title  } = antd__WEBPACK_IMPORTED_MODULE_1__.Typography;
const { suppliers  } = _locales_en_en_json__WEBPACK_IMPORTED_MODULE_9__;
const ManageSuppliers = ({ dataManageSuppliers , filters , filteredData , handleSearchChange , loading , searchText , setFilteredData , setDataManageSuppliers  })=>{
    const { width =0  } = (0,_components_hooks_useWindowDimension__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    const { currentUserRoleName  } = (0,_components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_5__/* .useAppSelector */ .C)((state)=>state.dashboard);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_manageSuppliers_module_scss__WEBPACK_IMPORTED_MODULE_11___default().suppliers),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
                    level: 4,
                    className: (_manageSuppliers_module_scss__WEBPACK_IMPORTED_MODULE_11___default().suppliers__buyer),
                    children: currentUserRoleName
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
                    level: 3,
                    className: (_manageSuppliers_module_scss__WEBPACK_IMPORTED_MODULE_11___default().suppliers__title),
                    children: suppliers.title
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                    className: (_manageSuppliers_module_scss__WEBPACK_IMPORTED_MODULE_11___default().buttons_and_search),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_manageSuppliers_module_scss__WEBPACK_IMPORTED_MODULE_11___default().search),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_input_Input__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                id: "search",
                                type: "text",
                                icon: "search",
                                isLabel: false,
                                inputHeight: "43px",
                                register: ()=>{},
                                placeholder: "Search by",
                                inputBackground: "transparent",
                                inputWidth: width <= _consts_login_ui__WEBPACK_IMPORTED_MODULE_7__/* .TABLET_BREAKPOINT */ .rN ? "100%" : "273px",
                                onChange: (value)=>handleSearchChange(value)
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_manageSuppliers_module_scss__WEBPACK_IMPORTED_MODULE_11___default().buttons),
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                style: {
                                    fontWeight: 400
                                },
                                type: "primary",
                                size: "large",
                                htmlType: "submit",
                                onClick: ()=>{
                                    next_router__WEBPACK_IMPORTED_MODULE_2___default().push("/home/suppliers/create");
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiOutlinePlus, {
                                        className: (_manageSuppliers_module_scss__WEBPACK_IMPORTED_MODULE_11___default().buttons__add_icon)
                                    }),
                                    "Add supplier"
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tableManageSuppliers_TableManageSuppliers__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                    dashboard: _consts_permissions__WEBPACK_IMPORTED_MODULE_8__/* .DASHBOARDTYPES.supplier */ .j2.supplier,
                    searchText: searchText,
                    loading: loading,
                    dataManageSuppliers: dataManageSuppliers,
                    setDataManageSuppliers: setDataManageSuppliers,
                    filteredData: filteredData,
                    setFilteredData: setFilteredData,
                    columnFilters: filters
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ManageSuppliers);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 17056:
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
/* harmony import */ var _application_supplierSlice_supplierSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22915);
/* harmony import */ var _assets_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67151);
/* harmony import */ var _components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89480);
/* harmony import */ var _locales_en_en_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89235);
/* harmony import */ var _utils_sorterTable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20720);
/* harmony import */ var _tableComponent_Table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(95821);
/* harmony import */ var _expandedRow_ExpandedRow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(63556);
/* harmony import */ var _tableManageSuppliers_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(25140);
/* harmony import */ var _tableManageSuppliers_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_tableManageSuppliers_module_scss__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tableComponent_Table__WEBPACK_IMPORTED_MODULE_6__]);
_tableComponent_Table__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const DEFAULT_PAGE_SIZE = 20;
const { consts: { filters: { blankObject  } ,  } ,  } = _locales_en_en_json__WEBPACK_IMPORTED_MODULE_5__;
/**
 * returns the suppliers table
 * @param dashboard - The dashboard.
 * @param searchText - string or boolean that indicates if there is a search
 * @param loading - boolean indicating whether the data request is being made for the table
 * @param dataUser - object with the table data
 * @param setDataUser - function that modifies dataUser
 * @param filteredData - object with the table data filtered based on the searchText parameter
 * @param setFilteredData - function that modifies filteredData
 * @param columnFilters - string array with columns that can be filtered
 * @returns the suppliers table
 */ const TableManageSuppliers = ({ dashboard , searchText , loading , dataManageSuppliers , filteredData , columnFilters ,  })=>{
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const dispatch = (0,_components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_4__/* .useAppDispatch */ .T)();
    const { page  } = (0,_components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_4__/* .useAppSelector */ .C)((state)=>state.suppliers);
    const { 0: showError , 1: setShowError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: errorMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("Business units cannot be deactivated if there’s an active contract connected to them.");
    const { 0: filters , 1: setFilters  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        status: [],
        expiration: [],
        contactEmail: [],
        contactName: []
    });
    const onChange = (pagination, filters)=>{
        dispatch((0,_application_supplierSlice_supplierSlice__WEBPACK_IMPORTED_MODULE_2__/* .setPage */ .YA)(pagination.current));
        const field = Object.keys(filters)[1];
        if (field) {
            const filterLength = filters[field]?.length;
            if (filterLength && filterLength > 0) {
                setFilters((prev)=>{
                    return {
                        status: field === "supplierStatus" ? filters.status : prev.status,
                        expiration: field === "agreementExpiryDate" ? filters.expiration : prev.expiration,
                        contactEmail: field === "contactEmail" ? filters.contactEmail : prev.contactEmail,
                        contactName: field === "contactName" ? filters.contactName : prev.contactName
                    };
                });
            } else {
                setFilters((prev)=>{
                    return {
                        status: field === "supplierStatus" ? [] : prev.status,
                        expiration: field === "agreementExpiryDate" ? [] : prev.expiration,
                        contactEmail: field === "contactEmail" ? [] : prev.contactEmail,
                        contactName: field === "contactName" ? [] : prev.contactName
                    };
                });
            }
        }
    };
    const columns = [
        {
            title: ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                    className: (_tableManageSuppliers_module_scss__WEBPACK_IMPORTED_MODULE_8___default().headerTable),
                    children: [
                        "Supplier company ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        " name"
                    ]
                }),
            dataIndex: "supplierCompanyName",
            className: (_tableManageSuppliers_module_scss__WEBPACK_IMPORTED_MODULE_8___default().columnTable),
            sorter: (a, b, sortOrder)=>(0,_utils_sorterTable__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(a, b, "supplierCompanyName", sortOrder)
        },
        {
            title: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: (_tableManageSuppliers_module_scss__WEBPACK_IMPORTED_MODULE_8___default().headerTable),
                    children: "Contact name"
                }),
            dataIndex: "contactName",
            className: (_tableManageSuppliers_module_scss__WEBPACK_IMPORTED_MODULE_8___default().columnTable),
            sorter: (a, b, sortOrder)=>(0,_utils_sorterTable__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(a, b, "contactName", sortOrder),
            filters: columnFilters.contactName.map((val)=>({
                    text: val === "" ? blankObject.text : val,
                    value: val
                })),
            filterIcon: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_assets_filter__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    height: 16,
                    width: 16,
                    fill: filters.contactName?.length > 0 ? "#96bc33" : "#BFBFBF"
                }),
            onFilter: (value, record)=>record.contactName === value
        },
        {
            title: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: (_tableManageSuppliers_module_scss__WEBPACK_IMPORTED_MODULE_8___default().headerTable),
                    children: "Contact email"
                }),
            dataIndex: "contactEmail",
            className: (_tableManageSuppliers_module_scss__WEBPACK_IMPORTED_MODULE_8___default().columnTable),
            sorter: (a, b, sortOrder)=>(0,_utils_sorterTable__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(a, b, "contactEmail", sortOrder),
            filters: columnFilters.contactEmail.map((val)=>({
                    text: val,
                    value: val
                })),
            filterIcon: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_assets_filter__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    height: 16,
                    width: 16,
                    fill: filters.contactEmail?.length > 0 ? "#96bc33" : "#BFBFBF"
                }),
            onFilter: (value, record)=>record.contactEmail.indexOf(value) === 0
        },
        {
            title: ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                    className: (_tableManageSuppliers_module_scss__WEBPACK_IMPORTED_MODULE_8___default().headerTable),
                    children: [
                        "Contract expiration ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        " date"
                    ]
                }),
            dataIndex: "agreementExpiryDate",
            className: (_tableManageSuppliers_module_scss__WEBPACK_IMPORTED_MODULE_8___default().columnTable),
            sorter: (a, b, sortOrder)=>(0,_utils_sorterTable__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(a, b, "agreementExpiryDate", sortOrder),
            filters: columnFilters.expiration.map((val)=>({
                    text: val === "" ? blankObject.text : val,
                    value: val
                })),
            filterIcon: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_assets_filter__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    height: 16,
                    width: 16,
                    fill: filters.expiration?.length > 0 ? "#96bc33" : "#BFBFBF"
                }),
            onFilter: (value, record)=>record.agreementExpiryDate === value
        },
        {
            title: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: (_tableManageSuppliers_module_scss__WEBPACK_IMPORTED_MODULE_8___default().headerTable),
                    children: "Supplier status"
                }),
            dataIndex: "supplierStatus",
            className: `${(_tableManageSuppliers_module_scss__WEBPACK_IMPORTED_MODULE_8___default().columnTable)} ${(_tableManageSuppliers_module_scss__WEBPACK_IMPORTED_MODULE_8___default().supplier_status)}`,
            sorter: (a, b, sortOrder)=>(0,_utils_sorterTable__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(a, b, "supplierStatus", sortOrder),
            filters: columnFilters.status.map((val)=>({
                    text: val ?? blankObject.text,
                    value: val
                })),
            filterIcon: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_assets_filter__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    height: 16,
                    width: 16,
                    fill: filters.status?.length > 0 ? "#96bc33" : "#BFBFBF"
                }),
            onFilter: (value, record)=>record.supplierStatus === value
        }, 
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tableComponent_Table__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            dashboard: dashboard,
            page: page,
            loading: loading,
            dataTable: searchText ? filteredData : dataManageSuppliers,
            pageSize: DEFAULT_PAGE_SIZE,
            columns: columns,
            onChange: onChange,
            rowsSkeleton: 8,
            columnsSkeleton: 7,
            padding: "32px 33px",
            errorMessage: errorMessage,
            showError: showError,
            setShowError: setShowError,
            tableRef: ref,
            expandable: {
                expandedRowRender: (record)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_expandedRow_ExpandedRow__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        dataExpanded: record
                    }),
                columnWidth: "1px",
                expandIcon: ({ expanded , onExpand , record  })=>{
                    if (record.key === null) {
                        return null;
                    }
                    return expanded ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_tableManageSuppliers_module_scss__WEBPACK_IMPORTED_MODULE_8___default().contractedRowIcon),
                        onClick: (e)=>onExpand(record, e)
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_tableManageSuppliers_module_scss__WEBPACK_IMPORTED_MODULE_8___default().expandedRowIcon),
                        onClick: (e)=>onExpand(record, e)
                    });
                },
                expandedRowClassName: ()=>(_tableManageSuppliers_module_scss__WEBPACK_IMPORTED_MODULE_8___default().childrenExpanded),
                rowExpandable: (record)=>record.key !== null
            }
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TableManageSuppliers);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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