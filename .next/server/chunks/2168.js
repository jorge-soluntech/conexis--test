exports.id = 2168;
exports.ids = [2168];
exports.modules = {

/***/ 30973:
/***/ ((module) => {

// Exports
module.exports = {
	"form_container": "succesfullComponent_form_container__zTG94",
	"text": "succesfullComponent_text__w5gb6",
	"alertSuccess": "succesfullComponent_alertSuccess__xc5bw",
	"moveToRight": "succesfullComponent_moveToRight__phFtc"
};


/***/ }),

/***/ 32168:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _succesfullComponent_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(30973);
/* harmony import */ var _succesfullComponent_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_succesfullComponent_module_scss__WEBPACK_IMPORTED_MODULE_5__);






const { Title  } = antd__WEBPACK_IMPORTED_MODULE_2__.Typography;
const SuccessfullComponent = ({ titleForm ,  })=>{
    // const { width = 0 } = useWindowDimensions();
    const gridStyle = {
        width: "100%",
        textAlign: "center",
        alignContent: "center",
        boxShadow: "none",
        padding: "10px"
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: `${(_succesfullComponent_module_scss__WEBPACK_IMPORTED_MODULE_5___default().form_container)}`,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    style: {
                        cursor: "pointer",
                        color: "#888E95",
                        width: "fit-content",
                        fontSize: "16px"
                    },
                    onClick: ()=>{
                        next_router__WEBPACK_IMPORTED_MODULE_3___default().push("/home/users", undefined, {
                            shallow: true
                        });
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__.LeftOutlined, {}),
                        "\xa0 Users"
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
                    style: {
                        marginTop: "2rem",
                        fontSize: 32
                    },
                    level: 2,
                    children: titleForm
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Card, {
                    style: {
                        marginTop: "20px",
                        marginLeft: "auto",
                        marginRight: "auto",
                        width: "100%"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Card.Grid, {
                            hoverable: false,
                            style: gridStyle,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                style: {
                                    marginTop: "55px"
                                },
                                className: `${(_succesfullComponent_module_scss__WEBPACK_IMPORTED_MODULE_5___default().alertSuccess)}`,
                                children: "sucess"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Card.Grid, {
                            hoverable: false,
                            style: gridStyle,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: (_succesfullComponent_module_scss__WEBPACK_IMPORTED_MODULE_5___default().text),
                                children: [
                                    "Your form has been successfully",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    " submitted."
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Card.Grid, {
                            hoverable: false,
                            style: gridStyle,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                    style: {
                                        fontSize: 16
                                    },
                                    type: "default",
                                    size: "large",
                                    htmlType: "submit",
                                    onClick: ()=>{
                                        next_router__WEBPACK_IMPORTED_MODULE_3___default().push("/home/users", undefined, {
                                            shallow: true
                                        });
                                    },
                                    children: "Go back to users"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    style: {
                                        height: "50px"
                                    }
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SuccessfullComponent);


/***/ })

};
;