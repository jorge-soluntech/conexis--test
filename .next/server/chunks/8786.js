exports.id = 8786;
exports.ids = [8786];
exports.modules = {

/***/ 1563:
/***/ ((module) => {

// Exports
module.exports = {
	"dropdown": "ExportDropdownComponent_dropdown__YpQlI",
	"dropdown__button": "ExportDropdownComponent_dropdown__button__1bqnw",
	"dropdown__title": "ExportDropdownComponent_dropdown__title__mxMlN",
	"dropdown__icon_wrapper": "ExportDropdownComponent_dropdown__icon_wrapper__Wx7af",
	"dropdown__export_icon_mobile": "ExportDropdownComponent_dropdown__export_icon_mobile__DrWye",
	"moveToRight": "ExportDropdownComponent_moveToRight__LaUBx"
};


/***/ }),

/***/ 28786:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ExportDropdownComponent)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(45725);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: ./src/assets/arrowDown.tsx
var arrowDown = __webpack_require__(92530);
// EXTERNAL MODULE: ./src/consts/colors.ts
var colors = __webpack_require__(89401);
;// CONCATENATED MODULE: ./src/assets/export.tsx


const Export = ({ fill =colors/* GREEN_50 */.UX , width =15.86 , height =15.83 ,  })=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        width: width,
        height: height,
        viewBox: "0 0 18 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            stroke: fill,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12.7 6.41683C15.7 6.67516 16.925 8.21683 16.925 11.5918V11.7002C16.925 15.4252 15.4333 16.9168 11.7083 16.9168H6.28335C2.55835 16.9168 1.06668 15.4252 1.06668 11.7002V11.5918C1.06668 8.24183 2.27501 6.70016 5.22501 6.42516M9.00002 11.5002V2.01683M11.7917 3.87516L9.00002 1.0835L6.20835 3.87516"
        })
    });
/* harmony default export */ const assets_export = (Export);

// EXTERNAL MODULE: ./src/components/hooks/useWindowDimension.ts
var useWindowDimension = __webpack_require__(60255);
// EXTERNAL MODULE: ./src/consts/breakpoints.ts
var breakpoints = __webpack_require__(58310);
// EXTERNAL MODULE: ./src/locales/en/en.json
var en = __webpack_require__(89235);
// EXTERNAL MODULE: ./src/components/common/exportDropdownComponent/ExportDropdownComponent.module.scss
var ExportDropdownComponent_module = __webpack_require__(1563);
var ExportDropdownComponent_module_default = /*#__PURE__*/__webpack_require__.n(ExportDropdownComponent_module);
;// CONCATENATED MODULE: ./src/components/common/exportDropdownComponent/ExportDropdownComponent.tsx









/**
 * ExportDropdown component that displays a button that pulls down a menu with options for exporting data.
 *
 * @param {(data: string) => void} props.exportData - Function to handle exporting the data.
 * @param {boolean} props.responsive - Indicates whether the component should be responsive.
 * @returns React component that renders a button that displays a menu with options to export data.
 */ const ExportDropdown = ({ exportData , responsive =true  })=>{
    const { components: { exportDropdown  } ,  } = en;
    const { width =0  } = (0,useWindowDimension/* default */.Z)();
    const { 0: dropdownVisible , 1: setDropdownVisible  } = (0,external_react_.useState)(false);
    const handleDropdownVisibleChange = (visible)=>{
        setDropdownVisible(visible);
    };
    const items = [
        {
            key: "1",
            label: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                onClick: ()=>{
                    setDropdownVisible(false);
                    exportData("csv");
                },
                children: exportDropdown.exportCsv
            })
        },
        {
            key: "2",
            label: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                onClick: ()=>{
                    setDropdownVisible(false);
                    exportData("txt");
                },
                children: exportDropdown.exportTxt
            })
        },
        {
            key: "3",
            label: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                onClick: ()=>{
                    setDropdownVisible(false);
                    exportData("json");
                },
                children: exportDropdown.exportJson
            })
        }, 
    ];
    return /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Dropdown, {
        menu: {
            items
        },
        trigger: [
            "click"
        ],
        open: dropdownVisible,
        overlayClassName: (ExportDropdownComponent_module_default()).dropdown,
        onOpenChange: handleDropdownVisibleChange,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Button, {
            size: "large",
            type: "default",
            className: (ExportDropdownComponent_module_default()).dropdown__button,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: `${(ExportDropdownComponent_module_default()).dropdown__icon_wrapper} ${responsive && width < breakpoints/* MOBILE_BREAKPOINT */.Gh && (ExportDropdownComponent_module_default()).dropdown__export_icon_mobile}`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(assets_export, {})
                }),
                (!responsive || width > breakpoints/* MOBILE_BREAKPOINT */.Gh) && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: (ExportDropdownComponent_module_default()).dropdown__title,
                    children: exportDropdown.title
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (ExportDropdownComponent_module_default()).dropdown__icon_wrapper,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(arrowDown/* default */.Z, {})
                })
            ]
        })
    });
};
/* harmony default export */ const ExportDropdownComponent = (ExportDropdown);


/***/ })

};
;