exports.id = 1957;
exports.ids = [1957];
exports.modules = {

/***/ 97499:
/***/ ((module) => {

// Exports
module.exports = {
	"table__row": "SkeletonTable_table__row__2eDLk",
	"table__cell": "SkeletonTable_table__cell__bhcQK",
	"moveToRight": "SkeletonTable_moveToRight__t_Xa8"
};


/***/ }),

/***/ 73144:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "Table_card__xG_9J",
	"grid": "Table_grid__mxp3Q",
	"min_width": "Table_min_width__S6WZr",
	"alert": "Table_alert__YHLdR",
	"userTable": "Table_userTable__0lT9U",
	"header_Table": "Table_header_Table__7mvGZ",
	"wrapperLinkActions": "Table_wrapperLinkActions__kgSeW",
	"columnTable": "Table_columnTable__sJ_J1",
	"rowEnabled": "Table_rowEnabled__t2CYa",
	"rowDisabled": "Table_rowDisabled__dTxQ2",
	"iconAttachment": "Table_iconAttachment__uF9Kw",
	"moveToRight": "Table_moveToRight__3iOiw"
};


/***/ }),

/***/ 27914:
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
/* harmony import */ var _SkeletonTable_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97499);
/* harmony import */ var _SkeletonTable_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_SkeletonTable_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* eslint-disable no-plusplus */ 



/**
 * Returns a loader skeleton for tables
 *
 * @param rows - number of rows in the table
 * @param columns - number of columns in the table
 * @param columns - number of columns in the table
 * @param loading - boolean to display the skeleton loader
 * @param children - jsx element to render the table once the upload is done
 * @returns Returns a loader skeleton for tables
 */ const SkeletonTable = ({ rows , columns , loading , children ,  })=>{
    const [rowsTable, setRows] = react__WEBPACK_IMPORTED_MODULE_2___default().useState([]);
    const [rowsColumns, setColumns] = react__WEBPACK_IMPORTED_MODULE_2___default().useState([]);
    react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(()=>{
        const arrayRowsTable = [];
        const arrayColumnsTable = [];
        for(let i = 0; i < rows; i++){
            arrayRowsTable.push(Math.floor(Math.random() * 9));
        }
        for(let i1 = 0; i1 < columns; i1++){
            arrayColumnsTable.push(Math.floor(Math.random() * 9));
        }
        setRows(arrayRowsTable);
        setColumns(arrayColumnsTable);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_SkeletonTable_module_scss__WEBPACK_IMPORTED_MODULE_3___default().table),
            children: rowsTable.map((_row, indexRow)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_SkeletonTable_module_scss__WEBPACK_IMPORTED_MODULE_3___default().table__row),
                    children: rowsColumns.map((_column, indexColumn)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_SkeletonTable_module_scss__WEBPACK_IMPORTED_MODULE_3___default().table__cell),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Skeleton, {
                                active: true,
                                title: false,
                                loading: loading,
                                paragraph: {
                                    rows: 1,
                                    width: "100%"
                                }
                            })
                        }, indexColumn))
                }, indexRow))
        }) : children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SkeletonTable);


/***/ })

};
;