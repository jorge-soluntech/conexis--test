exports.id = 5027;
exports.ids = [5027];
exports.modules = {

/***/ 79002:
/***/ ((module) => {

// Exports
module.exports = {
	"gl_codes": "GLCodes_gl_codes__HrlO8",
	"gl_codes__buyer": "GLCodes_gl_codes__buyer__7fUgE",
	"gl_codes__title": "GLCodes_gl_codes__title__5iVKQ",
	"buttons_and_search": "GLCodes_buttons_and_search___xyZb",
	"search": "GLCodes_search__z8F6w",
	"buttons": "GLCodes_buttons__mMySb",
	"buttons__add_icon": "GLCodes_buttons__add_icon__VHueV",
	"moveToRight": "GLCodes_moveToRight__dC0n0"
};


/***/ }),

/***/ 74428:
/***/ ((module) => {

// Exports
module.exports = {
	"headerTable": "TableGLCodes_headerTable__3Zx4t",
	"columnTable": "TableGLCodes_columnTable__d54PA",
	"userStatus": "TableGLCodes_userStatus__A3OaJ",
	"moveToRight": "TableGLCodes_moveToRight__COEVN"
};


/***/ }),

/***/ 65027:
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
/* harmony import */ var _components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(89480);
/* harmony import */ var _components_hooks_useWindowDimension__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(60255);
/* harmony import */ var _consts_login_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4262);
/* harmony import */ var _tableGLCodes_TableGLCodes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(48877);
/* harmony import */ var _GLCodes_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(79002);
/* harmony import */ var _GLCodes_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_GLCodes_module_scss__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tableGLCodes_TableGLCodes__WEBPACK_IMPORTED_MODULE_9__]);
_tableGLCodes_TableGLCodes__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











const { Title  } = antd__WEBPACK_IMPORTED_MODULE_1__.Typography;
const GLCodes = ({ dataGLCodes , filteredData , handleSearchChange , loading , setDataGLCodes , setFilteredData , searchText  })=>{
    const { width =0  } = (0,_components_hooks_useWindowDimension__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    const { currentUserRoleName  } = (0,_components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_6__/* .useAppSelector */ .C)((state)=>state.dashboard);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_GLCodes_module_scss__WEBPACK_IMPORTED_MODULE_10___default().gl_codes),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
                    level: 4,
                    className: (_GLCodes_module_scss__WEBPACK_IMPORTED_MODULE_10___default().gl_codes__buyer),
                    children: currentUserRoleName
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
                    level: 2,
                    className: (_GLCodes_module_scss__WEBPACK_IMPORTED_MODULE_10___default().gl_codes__title),
                    children: "Manage GL Codes"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                    className: (_GLCodes_module_scss__WEBPACK_IMPORTED_MODULE_10___default().buttons_and_search),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_GLCodes_module_scss__WEBPACK_IMPORTED_MODULE_10___default().search),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_input_Input__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                id: "search",
                                type: "text",
                                icon: "search",
                                isLabel: false,
                                inputHeight: "43px",
                                register: ()=>{},
                                placeholder: "Search by",
                                inputBackground: "transparent",
                                inputWidth: width <= _consts_login_ui__WEBPACK_IMPORTED_MODULE_8__/* .TABLET_BREAKPOINT */ .rN ? "100%" : "273px",
                                onChange: (value)=>handleSearchChange(value)
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_GLCodes_module_scss__WEBPACK_IMPORTED_MODULE_10___default().buttons),
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                type: "primary",
                                size: "large",
                                htmlType: "submit",
                                onClick: ()=>{
                                    next_router__WEBPACK_IMPORTED_MODULE_2___default().push("/home/gl-codes/create");
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiOutlinePlus, {
                                        className: (_GLCodes_module_scss__WEBPACK_IMPORTED_MODULE_10___default().buttons__add_icon)
                                    }),
                                    "Add GL code"
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tableGLCodes_TableGLCodes__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                    searchText: searchText,
                    loading: loading,
                    dataGLCodes: dataGLCodes,
                    setDataGLCodes: setDataGLCodes,
                    filteredData: filteredData,
                    setFilteredData: setFilteredData
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GLCodes);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 48877:
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
/* harmony import */ var _infrastructure_services_GLCodesServices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17173);
/* harmony import */ var _utils_scrollToRef__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72909);
/* harmony import */ var _utils_sorterTable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20720);
/* harmony import */ var _tableComponent_Table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(95821);
/* harmony import */ var _TableGLCodes_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(74428);
/* harmony import */ var _TableGLCodes_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_TableGLCodes_module_scss__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_infrastructure_services_GLCodesServices__WEBPACK_IMPORTED_MODULE_4__, _tableComponent_Table__WEBPACK_IMPORTED_MODULE_5__]);
([_infrastructure_services_GLCodesServices__WEBPACK_IMPORTED_MODULE_4__, _tableComponent_Table__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const DEFAULT_PAGE_SIZE = 25;
/**
 * returns the cost center table
 *
 * @param {string} searchText - string or boolean that indicates if there is a search
 * @param {boolean} loading - boolean indicating whether the data request is being made for the table
 * @param {Object} dataGLCodes - object with the table data
 * @param {Function} setDataGLCodes - function that modifies dataGLCodes
 * @param {Object} filteredData - object with the table data filtered based on the searchText parameter
 * @param {Function} setFilteredData - function that modifies filteredData
 * @returns the cost center table
 */ const TableGLCodes = ({ searchText , loading , dataGLCodes , setDataGLCodes , filteredData , setFilteredData ,  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    const glCodesServices = new _infrastructure_services_GLCodesServices__WEBPACK_IMPORTED_MODULE_4__/* .GLCodesServices */ .m(router);
    const { 0: page , 1: setPage  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1);
    const { 0: showError , 1: setShowError  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const { 0: errorMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("GL codes cannot be deactivated if there’s an active contract connected to them.");
    const updateStatus = (id)=>{
        setDataGLCodes((prevData)=>prevData.map((item)=>{
                if (item.key === id) {
                    return {
                        ...item,
                        isActive: !item.isActive
                    };
                }
                return item;
            }));
        setFilteredData((prevData)=>prevData.map((item)=>{
                if (item.key === id) {
                    return {
                        ...item,
                        isActive: !item.isActive
                    };
                }
                return item;
            }));
    };
    const handleChange = async (id)=>{
        await glCodesServices.toggleGLCode(id).then((response)=>{
            if (response.statusCode === 200) updateStatus(id);
            if (response.statusCode === 400) {
                setShowError(true);
                (0,_utils_scrollToRef__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(ref);
            }
        });
    };
    const onChange = (pagination)=>{
        setPage(pagination.current);
    };
    const columns = [
        {
            title: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: (_TableGLCodes_module_scss__WEBPACK_IMPORTED_MODULE_7___default().headerTable),
                    children: "GL code"
                }),
            dataIndex: "glCode",
            className: (_TableGLCodes_module_scss__WEBPACK_IMPORTED_MODULE_7___default().columnTable),
            sorter: (a, b, sortOrder)=>(0,_utils_sorterTable__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(a, b, "glCode", sortOrder)
        },
        {
            title: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: (_TableGLCodes_module_scss__WEBPACK_IMPORTED_MODULE_7___default().headerTable),
                    children: "GL code description"
                }),
            dataIndex: "description",
            className: (_TableGLCodes_module_scss__WEBPACK_IMPORTED_MODULE_7___default().columnTable),
            sorter: (a, b, sortOrder)=>(0,_utils_sorterTable__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(a, b, "description", sortOrder)
        },
        {
            title: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: (_TableGLCodes_module_scss__WEBPACK_IMPORTED_MODULE_7___default().headerTable),
                    children: "Status"
                }),
            dataIndex: "isActive",
            filterMultiple: false,
            className: (_TableGLCodes_module_scss__WEBPACK_IMPORTED_MODULE_7___default().columnTable),
            sorter: (a, b)=>b.isActive - a.isActive,
            render: (status, record)=>{
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    style: {
                        minWidth: "104px"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Switch, {
                            style: {
                                backgroundColor: status ? "#96BC33" : "#BFBFBF"
                            },
                            size: "small",
                            checked: status,
                            onChange: ()=>{
                                setShowError(false);
                                handleChange(record.key);
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: (_TableGLCodes_module_scss__WEBPACK_IMPORTED_MODULE_7___default().userStatus),
                            style: {
                                color: status ? "#303336" : "#888E95"
                            },
                            children: status ? "Active" : "Inactive"
                        })
                    ]
                });
            }
        }, 
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tableComponent_Table__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        page: page,
        loading: loading,
        dataTable: searchText ? filteredData : dataGLCodes,
        pageSize: DEFAULT_PAGE_SIZE,
        columns: columns,
        onChange: onChange,
        rowsSkeleton: 8,
        columnsSkeleton: 3,
        padding: "24px 32px",
        errorMessage: errorMessage,
        showError: showError,
        setShowError: setShowError,
        tableRef: ref
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TableGLCodes);

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