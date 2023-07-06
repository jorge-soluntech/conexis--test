exports.id = 6153;
exports.ids = [6153];
exports.modules = {

/***/ 46167:
/***/ ((module) => {

// Exports
module.exports = {
	"drag_and_drop": "UploadAttachmentComponent_drag_and_drop__alYeP",
	"title": "UploadAttachmentComponent_title__ywtP5",
	"show_attachment": "UploadAttachmentComponent_show_attachment__GnjTL",
	"moveToRight": "UploadAttachmentComponent_moveToRight__SlDji"
};


/***/ }),

/***/ 2578:
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
/* harmony import */ var _components_hooks_useWindowDimension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60255);
/* harmony import */ var _locales_en_en_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89235);
/* harmony import */ var _UploadAttachmentComponent_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(46167);
/* harmony import */ var _UploadAttachmentComponent_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_UploadAttachmentComponent_module_scss__WEBPACK_IMPORTED_MODULE_5__);






const { components: { uploadAttachment  } ,  } = _locales_en_en_json__WEBPACK_IMPORTED_MODULE_4__;
/**
 * Antd Upload Component
 * @param {string} props.titleUpload - Title to display for upload component
 * @param {string} props.titleUploadResponsive - Title to display for upload component on smaller screens
 * @param {number} props.breakpoint - Breakpoint for smaller screens, defaults to 992
 * @param {Function} props.onChange - Function to handle file upload changes
 * @param {string} props.icon - Path to icon for upload button, defaults to '/assets/icons/uploadAttachment.svg'
 * @returns {JSX.Element} - Antd Upload Component JSX Element
 */ const UploadComponent = ({ titleUpload =uploadAttachment.title , titleUploadResponsive =uploadAttachment.titleResponsive , breakpoint =992 , onChange , icon ="/assets/icons/uploadAttachment.svg" , maxCount , fileName , onDownload  })=>{
    const { width =0  } = (0,_components_hooks_useWindowDimension__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_UploadAttachmentComponent_module_scss__WEBPACK_IMPORTED_MODULE_5___default().drag_and_drop),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Upload, {
                    showUploadList: false,
                    onChange: (info)=>onChange(info),
                    customRequest: ({ onSuccess  })=>setTimeout(()=>{
                            if (onSuccess) {
                                onSuccess("ok", undefined);
                            }
                        }, 0),
                    maxCount: maxCount,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                            width: 18,
                            height: 18,
                            src: icon,
                            alt: "Upload attachment"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: (_UploadAttachmentComponent_module_scss__WEBPACK_IMPORTED_MODULE_5___default().title),
                            children: width <= breakpoint ? titleUploadResponsive : titleUpload
                        })
                    ]
                })
            }),
            fileName && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: (_UploadAttachmentComponent_module_scss__WEBPACK_IMPORTED_MODULE_5___default().show_attachment),
                onClick: onDownload,
                children: fileName
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UploadComponent);


/***/ }),

/***/ 62360:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _infrastructure_services_utilsServices__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17632);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_infrastructure_services_utilsServices__WEBPACK_IMPORTED_MODULE_0__]);
_infrastructure_services_utilsServices__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const useAttachments = ()=>{
    const uploadS3File = async (name)=>{
        const extension = name.substring(name.lastIndexOf(".") + 1);
        const response = await _infrastructure_services_utilsServices__WEBPACK_IMPORTED_MODULE_0__/* .UtilServices.uploadS3File */ .$.uploadS3File(extension);
        if (response.statusCode !== 200) {
            return {
                error: true,
                message: response.message[0]
            };
        }
        return {
            path: response.path,
            url: response.url
        };
    };
    const updateS3File = async (attachment)=>{
        await _infrastructure_services_utilsServices__WEBPACK_IMPORTED_MODULE_0__/* .UtilServices.updateS3File */ .$.updateS3File(attachment.url, attachment.originFileObj, attachment.type);
    };
    return {
        uploadS3File,
        updateS3File
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useAttachments);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;