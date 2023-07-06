exports.id = 1776;
exports.ids = [1776];
exports.modules = {

/***/ 16828:
/***/ ((module) => {

// Exports
module.exports = {
	"input": "input_input__pX5aU",
	"input__label": "input_input__label__TCgLi",
	"input__login": "input_input__login__czJlO",
	"input__show_pass": "input_input__show_pass__cnprA",
	"input__hidden_pass": "input_input__hidden_pass__bt8tY",
	"input__search_icon": "input_input__search_icon__UntAq",
	"moveToRight": "input_moveToRight__GVrAJ"
};


/***/ }),

/***/ 31776:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _input_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16828);
/* harmony import */ var _input_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_input_module_scss__WEBPACK_IMPORTED_MODULE_3__);
// import './input.css';




const Input = (props)=>{
    const [showPass, setShowPass] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(false);
    const { icon , inputLabel ="Username" , isLabel =true , labelColor ="#888E95" , inputWidth ="100%" , inputHeight ="48px" , inputColor ="#9FA4A9" , inputBackground ="" , borderColor ="#DBDDE0" , inputBorderRadius ="8px" , inputFontSize ="16px" , type ="text" , id ="user" , onChange =(value)=>console.log(value) , onFocus =()=>{} , onBlur =()=>{} , placeholder ="example@email.com" , register =()=>{} , rules ={
        requiered: false
    } ,  } = props;
    const styles = {
        width: inputWidth,
        height: inputHeight,
        color: inputColor,
        borderRadius: inputBorderRadius,
        fontSize: inputFontSize,
        border: `1px solid ${borderColor}`,
        backgroundColor: inputBackground
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            isLabel && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                className: (_input_module_scss__WEBPACK_IMPORTED_MODULE_3___default().input__label),
                htmlFor: id,
                style: {
                    color: labelColor
                },
                children: inputLabel
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_input_module_scss__WEBPACK_IMPORTED_MODULE_3___default().input),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: showPass ? "text" : type,
                        name: id,
                        className: (_input_module_scss__WEBPACK_IMPORTED_MODULE_3___default().input__login),
                        style: styles,
                        placeholder: placeholder,
                        onChange: (e)=>onChange(e.target.value),
                        onFocus: ()=>onFocus(),
                        onBlur: ()=>onBlur(),
                        "data-testid": id,
                        ...register(id, rules)
                    }),
                    type === "password" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: showPass ? (_input_module_scss__WEBPACK_IMPORTED_MODULE_3___default().input__show_pass) : (_input_module_scss__WEBPACK_IMPORTED_MODULE_3___default().input__hidden_pass),
                        onClick: ()=>setShowPass(!showPass),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                            src: showPass ? "/assets/icons/hide_pass.svg" : "/assets/icons/show_pass.svg",
                            alt: "pass",
                            width: 20,
                            height: 20
                        })
                    }),
                    icon === "search" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: (_input_module_scss__WEBPACK_IMPORTED_MODULE_3___default().input__show_pass),
                        onClick: ()=>{},
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                            width: 20,
                            height: 20,
                            alt: "search",
                            src: "/assets/icons/search.svg"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);


/***/ })

};
;