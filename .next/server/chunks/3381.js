exports.id = 3381;
exports.ids = [3381];
exports.modules = {

/***/ 644:
/***/ ((module) => {

// Exports
module.exports = {
	"work_week": "WorkWeekDefinitionComponent_work_week__YGW0T",
	"work_week__title": "WorkWeekDefinitionComponent_work_week__title__gdAsO",
	"work_week__value": "WorkWeekDefinitionComponent_work_week__value__UiU6M",
	"moveToRight": "WorkWeekDefinitionComponent_moveToRight__JkJXU"
};


/***/ }),

/***/ 83381:
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
/* harmony import */ var _application_authContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78760);
/* harmony import */ var _locales_en_en_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89235);
/* harmony import */ var _WorkWeekDefinitionComponent_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(644);
/* harmony import */ var _WorkWeekDefinitionComponent_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_WorkWeekDefinitionComponent_module_scss__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_application_authContext__WEBPACK_IMPORTED_MODULE_2__]);
_application_authContext__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





/**
 * Represents a work week definition component that displays the title and value of a work week.
 *
 * @returns {JSX.Element} The JSX element that represents the work week definition component.
 */ const WorkWeekDefinition = ()=>{
    const { dataUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_application_authContext__WEBPACK_IMPORTED_MODULE_2__/* .AuthContext */ .Vo);
    const { components: { workWeekDefinition  } ,  } = _locales_en_en_json__WEBPACK_IMPORTED_MODULE_3__;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_WorkWeekDefinitionComponent_module_scss__WEBPACK_IMPORTED_MODULE_4___default().work_week),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: (_WorkWeekDefinitionComponent_module_scss__WEBPACK_IMPORTED_MODULE_4___default().work_week__title),
                children: workWeekDefinition.title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: (_WorkWeekDefinitionComponent_module_scss__WEBPACK_IMPORTED_MODULE_4___default().work_week__value),
                children: dataUser?.work_week_definition === "M-S" ? workWeekDefinition.ms : workWeekDefinition.ss
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WorkWeekDefinition);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;