exports.id = 8147;
exports.ids = [8147];
exports.modules = {

/***/ 60402:
/***/ ((module) => {

// Exports
module.exports = {
	"att_container": "attachmentSuppliers_att_container__V7W5z",
	"att_container__buyer": "attachmentSuppliers_att_container__buyer__pCYT6",
	"att_container__title": "attachmentSuppliers_att_container__title__zUGDY",
	"att_container_file": "attachmentSuppliers_att_container_file__XeuVt",
	"att_container_row": "attachmentSuppliers_att_container_row__7CyE5",
	"moveToRight": "attachmentSuppliers_moveToRight__BhQux"
};


/***/ }),

/***/ 97488:
/***/ ((module) => {

// Exports
module.exports = {
	"headerTable": "tableAttachmentSuppliers_headerTable__owgWU",
	"columnTable": "tableAttachmentSuppliers_columnTable__4UrB8",
	"moveToRight": "tableAttachmentSuppliers_moveToRight__6amKM"
};


/***/ }),

/***/ 74809:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(89480);
/* harmony import */ var _infrastructure_services_SupplierServices__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8025);
/* harmony import */ var _locales_en_en_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(89235);
/* harmony import */ var _tableAttachmentSuppliers_TableAttachmentSuppliers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(93942);
/* harmony import */ var _attachmentSuppliers_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(60402);
/* harmony import */ var _attachmentSuppliers_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_attachmentSuppliers_module_scss__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_infrastructure_services_SupplierServices__WEBPACK_IMPORTED_MODULE_7__, _tableAttachmentSuppliers_TableAttachmentSuppliers__WEBPACK_IMPORTED_MODULE_9__]);
([_infrastructure_services_SupplierServices__WEBPACK_IMPORTED_MODULE_7__, _tableAttachmentSuppliers_TableAttachmentSuppliers__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable array-callback-return */ 










const { Title  } = antd__WEBPACK_IMPORTED_MODULE_2__.Typography;
const { Content  } = antd__WEBPACK_IMPORTED_MODULE_2__.Layout;
const { suppliers  } = _locales_en_en_json__WEBPACK_IMPORTED_MODULE_8__;
/**
 * Returns the AttachmentSuppliers component
 *
 * @param idSupplier - The string of the id supplier
 * @returns The AttachmentSuppliers component
 */ const AttachmentSuppliers = ({ idSupplier ,  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const supplierServices = new _infrastructure_services_SupplierServices__WEBPACK_IMPORTED_MODULE_7__/* .SupplierServices */ .S(router);
    const { currentUserRoleName  } = (0,_components_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_6__/* .useAppSelector */ .C)((state)=>state.dashboard);
    const { 0: dataUser , 1: setDataUser  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);
    const { 0: loading , 1: setloader  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(true);
    const getDataSupplierId = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(async ()=>{
        await supplierServices.getSuppliersById(idSupplier).then((response)=>{
            const result = response.data.attachments.map(({ id , file , name , type , expiry_date  })=>{
                const expiryDate = `${expiry_date.slice(5, 7)}/${expiry_date.slice(8, 10)}/${expiry_date.slice(0, 4)}`;
                return {
                    key: id,
                    file: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: (_attachmentSuppliers_module_scss__WEBPACK_IMPORTED_MODULE_10___default().att_container_file),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    src: "/assets/icons/doc.svg",
                                    width: 40,
                                    height: 40,
                                    alt: "doc"
                                })
                            }),
                            file
                        ]
                    }),
                    name: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: (_attachmentSuppliers_module_scss__WEBPACK_IMPORTED_MODULE_10___default().att_container_row),
                        children: name
                    }),
                    type: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: (_attachmentSuppliers_module_scss__WEBPACK_IMPORTED_MODULE_10___default().att_container_row),
                        children: type
                    }),
                    expiryDate: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: (_attachmentSuppliers_module_scss__WEBPACK_IMPORTED_MODULE_10___default().att_container_row),
                        children: expiryDate
                    })
                };
            });
            setDataUser(result);
            setloader(false);
        });
    }, [
        idSupplier
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        getDataSupplierId();
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Content, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `${(_attachmentSuppliers_module_scss__WEBPACK_IMPORTED_MODULE_10___default().att_container)}`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Row, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Col, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                style: {
                                    cursor: "pointer",
                                    color: "#888E95",
                                    width: "fit-content",
                                    fontSize: "16px"
                                },
                                onClick: ()=>{
                                    router.push("/home/suppliers", undefined, {
                                        shallow: true
                                    });
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__.LeftOutlined, {}),
                                    "\xa0 Suppliers"
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
                        level: 4,
                        className: (_attachmentSuppliers_module_scss__WEBPACK_IMPORTED_MODULE_10___default().att_container__buyer),
                        children: currentUserRoleName
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
                        level: 3,
                        className: (_attachmentSuppliers_module_scss__WEBPACK_IMPORTED_MODULE_10___default().att_container__title),
                        children: suppliers.textGoTo
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tableAttachmentSuppliers_TableAttachmentSuppliers__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        loading: loading,
                        dataUser: dataUser
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AttachmentSuppliers);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 93942:
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
/* harmony import */ var _utils_sorterTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20720);
/* harmony import */ var _tableComponent_Table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95821);
/* harmony import */ var _tableAttachmentSuppliers_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97488);
/* harmony import */ var _tableAttachmentSuppliers_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tableAttachmentSuppliers_module_scss__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tableComponent_Table__WEBPACK_IMPORTED_MODULE_2__]);
_tableComponent_Table__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const DEFAULT_PAGE_SIZE = 20;
/**
 * returns the attachment table
 *
 * @param loading - boolean indicating whether the data request is being made for the table
 * @param dataUser - object with the table data
 * @returns the attachment table
 */ const TableAttachmentSuppliers = ({ loading , dataUser ,  })=>{
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { 0: showError , 1: setShowError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const errorMessage = "Something went wrong, try again.";
    const columns = [
        {
            title: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: (_tableAttachmentSuppliers_module_scss__WEBPACK_IMPORTED_MODULE_3___default().headerTable),
                    children: "File"
                }),
            dataIndex: "file",
            className: (_tableAttachmentSuppliers_module_scss__WEBPACK_IMPORTED_MODULE_3___default().columnTable),
            sorter: (fileParameterA, fileParameterB, sortOrder)=>(0,_utils_sorterTable__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(fileParameterA.file.props.children, fileParameterB.file.props.children, "1", sortOrder)
        },
        {
            title: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: (_tableAttachmentSuppliers_module_scss__WEBPACK_IMPORTED_MODULE_3___default().headerTable),
                    children: "Name"
                }),
            dataIndex: "name",
            className: (_tableAttachmentSuppliers_module_scss__WEBPACK_IMPORTED_MODULE_3___default().columnTable),
            sorter: (nameParameterA, nameParameterB, sortOrder)=>(0,_utils_sorterTable__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(nameParameterA.name.props, nameParameterB.name.props, "children", sortOrder)
        },
        {
            title: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: (_tableAttachmentSuppliers_module_scss__WEBPACK_IMPORTED_MODULE_3___default().headerTable),
                    children: "Type of document"
                }),
            dataIndex: "type",
            className: (_tableAttachmentSuppliers_module_scss__WEBPACK_IMPORTED_MODULE_3___default().columnTable),
            sorter: (typeParameterA, typeParameterB, sortOrder)=>(0,_utils_sorterTable__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(typeParameterA.type.props, typeParameterB.type.props, "children", sortOrder)
        },
        {
            title: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: (_tableAttachmentSuppliers_module_scss__WEBPACK_IMPORTED_MODULE_3___default().headerTable),
                    children: "Expiry date"
                }),
            dataIndex: "expiryDate",
            className: (_tableAttachmentSuppliers_module_scss__WEBPACK_IMPORTED_MODULE_3___default().columnTable),
            sorter: (expiryDateParameterA, expiryDateParameterB, sortOrder)=>(0,_utils_sorterTable__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(expiryDateParameterA.expiryDate.props, expiryDateParameterB.expiryDate.props, "children", sortOrder)
        }, 
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tableComponent_Table__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            page: 1,
            loading: loading,
            dataTable: dataUser,
            pageSize: DEFAULT_PAGE_SIZE,
            columns: columns,
            onChange: ()=>{},
            rowsSkeleton: 8,
            columnsSkeleton: 7,
            padding: "32px 33px",
            errorMessage: errorMessage,
            showError: showError,
            setShowError: setShowError,
            tableRef: ref
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TableAttachmentSuppliers);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 58310:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gh": () => (/* binding */ MOBILE_BREAKPOINT),
/* harmony export */   "IU": () => (/* binding */ SMALL_TABLET_BREAKPOINT),
/* harmony export */   "rN": () => (/* binding */ TABLET_BREAKPOINT)
/* harmony export */ });
const MOBILE_BREAKPOINT = 576;
const TABLET_BREAKPOINT = 992;
const SMALL_TABLET_BREAKPOINT = 768;


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