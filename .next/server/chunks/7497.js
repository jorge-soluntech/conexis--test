exports.id = 7497;
exports.ids = [7497];
exports.modules = {

/***/ 12194:
/***/ ((module) => {

// Exports
module.exports = {
	"modal": "FormSuccessModal_modal__9FItp",
	"title_modal": "FormSuccessModal_title_modal__U7MBn",
	"label": "FormSuccessModal_label___auCw",
	"select": "FormSuccessModal_select__SDR5i",
	"wrapper_cancelation": "FormSuccessModal_wrapper_cancelation__tXAHq",
	"wrapper_success": "FormSuccessModal_wrapper_success__lliDJ",
	"title_success": "FormSuccessModal_title_success__mjMXm",
	"moveToRight": "FormSuccessModal_moveToRight__KPBkM"
};


/***/ }),

/***/ 24471:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "FooterModal_footer__nmfyD",
	"footer_success": "FooterModal_footer_success__2SjXU",
	"moveToRight": "FooterModal_moveToRight__KxQsF"
};


/***/ }),

/***/ 87497:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ FormSuccessModalComponent_FormSuccessModal)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(45725);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: ./src/consts/colors.ts
var colors = __webpack_require__(89401);
;// CONCATENATED MODULE: ./src/assets/alertSuccess.tsx


const AlertSuccess = ({ fill =colors/* GREEN_50 */.UX , width =48 , height =48 ,  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        fill: "none",
        width: width,
        height: height,
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                stroke: fill,
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                stroke: fill,
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M7.75 12L10.58 14.83L16.25 9.17"
            })
        ]
    });
/* harmony default export */ const alertSuccess = (AlertSuccess);

// EXTERNAL MODULE: ./src/components/hooks/storeHooks.ts
var storeHooks = __webpack_require__(89480);
// EXTERNAL MODULE: ./src/components/hooks/useWindowDimension.ts
var useWindowDimension = __webpack_require__(60255);
// EXTERNAL MODULE: ./src/consts/breakpoints.ts
var breakpoints = __webpack_require__(58310);
// EXTERNAL MODULE: ./src/locales/en/en.json
var en = __webpack_require__(89235);
// EXTERNAL MODULE: ./src/components/common/FormSuccessModalComponent/footerModal/FooterModal.module.scss
var FooterModal_module = __webpack_require__(24471);
var FooterModal_module_default = /*#__PURE__*/__webpack_require__.n(FooterModal_module);
;// CONCATENATED MODULE: ./src/components/common/FormSuccessModalComponent/footerModal/FooterModal.tsx




const { components: { formSuccessModal  } ,  } = en;
const FooterModal = ({ showSuccess , isLoading , handleOkSuccess , handleCancel , handleSave , titleSave =formSuccessModal.saveButton , titleCancel =formSuccessModal.cancelButton ,  })=>{
    let footer;
    if (showSuccess) {
        footer = /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (FooterModal_module_default()).footer_success,
            children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Button, {
                type: "default",
                onClick: handleOkSuccess,
                children: formSuccessModal.successButton
            }, "cancel")
        });
    } else {
        footer = /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (FooterModal_module_default()).footer,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Button, {
                    type: "text",
                    onClick: handleCancel,
                    children: titleCancel
                }, "cancel"),
                /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Button, {
                    type: "default",
                    loading: isLoading,
                    onClick: handleSave,
                    children: titleSave
                }, "save")
            ]
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: footer
    });
};
/* harmony default export */ const footerModal_FooterModal = (FooterModal);

// EXTERNAL MODULE: ./src/components/common/FormSuccessModalComponent/FormSuccessModal.module.scss
var FormSuccessModal_module = __webpack_require__(12194);
var FormSuccessModal_module_default = /*#__PURE__*/__webpack_require__.n(FormSuccessModal_module);
;// CONCATENATED MODULE: ./src/components/common/FormSuccessModalComponent/FormSuccessModal.tsx









const FormSuccessModal = ({ title , isModal , children , isLoading , centered =true , closable =false , showSuccess =false , titleSuccess , handleSave , handleCancel , handleOkSuccess , titleSave , titleCancel ,  })=>{
    const { width =0  } = (0,useWindowDimension/* default */.Z)();
    const { 0: modalStyles , 1: setModalStyles  } = (0,external_react_.useState)({});
    const { collapseSider , widthCollapseSider  } = (0,storeHooks/* useAppSelector */.C)((state)=>state.ui);
    (0,external_react_.useEffect)(()=>{
        if (collapseSider) {
            setModalStyles({});
        } else if (width >= breakpoints/* MOBILE_BREAKPOINT */.Gh) {
            setModalStyles({
                left: `${widthCollapseSider / 2}px`
            });
        }
    }, [
        collapseSider,
        widthCollapseSider,
        width
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Modal, {
        open: isModal,
        closable: closable,
        centered: centered,
        style: modalStyles,
        className: (FormSuccessModal_module_default()).modal,
        title: !showSuccess && /*#__PURE__*/ jsx_runtime_.jsx("span", {
            className: (FormSuccessModal_module_default()).title_modal,
            children: title
        }),
        onCancel: handleCancel,
        footer: /*#__PURE__*/ jsx_runtime_.jsx(footerModal_FooterModal, {
            showSuccess: showSuccess,
            isLoading: isLoading,
            handleOkSuccess: handleOkSuccess,
            handleCancel: handleCancel,
            handleSave: handleSave,
            titleSave: titleSave,
            titleCancel: titleCancel
        }),
        children: showSuccess ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (FormSuccessModal_module_default()).wrapper_success,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(alertSuccess, {}),
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: (FormSuccessModal_module_default()).title_success,
                    children: titleSuccess
                })
            ]
        }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: children
        })
    });
};
/* harmony default export */ const FormSuccessModalComponent_FormSuccessModal = (FormSuccessModal);


/***/ })

};
;