exports.id = 9215;
exports.ids = [9215];
exports.modules = {

/***/ 50463:
/***/ ((module) => {

// Exports
module.exports = {
	"business_units": "BusinessUnits_business_units__ITVle",
	"business_units__buyer": "BusinessUnits_business_units__buyer__x90EP",
	"business_units__title": "BusinessUnits_business_units__title__gd_GU",
	"buttons_and_search": "BusinessUnits_buttons_and_search__3FEZL",
	"search": "BusinessUnits_search__zvE28",
	"buttons": "BusinessUnits_buttons__XL9L_",
	"buttons__add_icon": "BusinessUnits_buttons__add_icon__UOPQJ",
	"moveToRight": "BusinessUnits_moveToRight___KJh0"
};


/***/ }),

/***/ 49807:
/***/ ((module) => {

// Exports
module.exports = {
	"grid": "TableBusinessUnits_grid__Ssdjf",
	"businessTable": "TableBusinessUnits_businessTable__6iRmv",
	"headerTable": "TableBusinessUnits_headerTable__tIut_",
	"columnTable": "TableBusinessUnits_columnTable__Z4joL",
	"userStatus": "TableBusinessUnits_userStatus__M9a60",
	"wrapperLinkActions": "TableBusinessUnits_wrapperLinkActions__Jibs7",
	"moveToRight": "TableBusinessUnits_moveToRight__AepbQ"
};


/***/ }),

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

/***/ 30766:
/***/ ((module) => {

// Exports
module.exports = {
	"rowActionButton": "rowActionButton_rowActionButton__etUIa",
	"moveToRight": "rowActionButton_moveToRight__zhmNN"
};


/***/ }),

/***/ 14844:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ld": () => (/* binding */ subscribe),
/* harmony export */   "nY": () => (/* binding */ publish),
/* harmony export */   "r1": () => (/* binding */ unsubscribe)
/* harmony export */ });
function subscribe(eventName, listener) {
    document.addEventListener(eventName, listener);
}
function unsubscribe(eventName, listener) {
    document.removeEventListener(eventName, listener);
}
function publish(eventName, data) {
    const event = new CustomEvent(eventName, {
        detail: data
    });
    document.dispatchEvent(event);
}



/***/ }),

/***/ 9215:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "a": () => (/* binding */ List)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(45725);
// EXTERNAL MODULE: external "fuse.js"
var external_fuse_js_ = __webpack_require__(62733);
var external_fuse_js_default = /*#__PURE__*/__webpack_require__.n(external_fuse_js_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(25675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(71853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-icons/ai"
var ai_ = __webpack_require__(99847);
// EXTERNAL MODULE: ./src/components/common/businessUnitsComponents/businessUnits/BusinessUnits.module.scss
var BusinessUnits_module = __webpack_require__(50463);
var BusinessUnits_module_default = /*#__PURE__*/__webpack_require__.n(BusinessUnits_module);
// EXTERNAL MODULE: ./src/components/common/businessUnitsComponents/tableBusinessUnits/TableBusinessUnits.module.scss
var TableBusinessUnits_module = __webpack_require__(49807);
var TableBusinessUnits_module_default = /*#__PURE__*/__webpack_require__.n(TableBusinessUnits_module);
// EXTERNAL MODULE: ./src/components/common/skeletonTable/SkeletonTable.tsx
var skeletonTable_SkeletonTable = __webpack_require__(27914);
// EXTERNAL MODULE: ./src/components/common/tableComponent/Table.module.scss
var Table_module = __webpack_require__(73144);
var Table_module_default = /*#__PURE__*/__webpack_require__.n(Table_module);
// EXTERNAL MODULE: ./src/components/hooks/useWindowDimension.ts
var useWindowDimension = __webpack_require__(60255);
// EXTERNAL MODULE: ./src/consts/login_ui.ts + 1 modules
var login_ui = __webpack_require__(4262);
// EXTERNAL MODULE: ./src/assets/filter.tsx
var filter = __webpack_require__(67151);
// EXTERNAL MODULE: ./src/components/common/tableComponent/rowActionComponents/RowActionButton/rowActionButton.module.scss
var rowActionButton_module = __webpack_require__(30766);
var rowActionButton_module_default = /*#__PURE__*/__webpack_require__.n(rowActionButton_module);
;// CONCATENATED MODULE: ./src/components/common/tableComponent/rowActionComponents/RowActionButton/index.tsx



const RowActionButton = ({ buttonText , id , loading , onClick  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Button, {
        onClick: onClick,
        type: "text",
        loading: loading,
        id: id,
        className: (rowActionButton_module_default()).rowActionButton,
        children: buttonText
    });
};
/* harmony default export */ const rowActionComponents_RowActionButton = (RowActionButton);

;// CONCATENATED MODULE: ./src/components/common/tableComponent/components.tsx








// TODO:: check if we should move components,
// into their own respective files for all table components
const IconImage = /*#__PURE__*/ (0,external_react_.forwardRef)(({ alt , className , width =16 , height =16 , src  }, ref)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
        alt,
        src,
        ref,
        width,
        height,
        className
    });
});
IconImage.displayName = "IconImage";
// eslint-disable-next-line react/display-name
const ActionsEdit = (href)=>(_value, record)=>{
        return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            href: `${href}/${record.key}`,
            passHref: true,
            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(IconImage, {
                    alt: "edit",
                    src: "/assets/icons/edit.svg",
                    className: (TableBusinessUnits_module_default()).wrapperLinkActions
                })
            })
        });
    };
const ActionsShow = // eslint-disable-next-line react/display-name
(href, dataIndex)=>(value, record)=>{
        return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            href: `${href}/${record[dataIndex]}`,
            passHref: true,
            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                className: (TableBusinessUnits_module_default()).wrapperLinkActions,
                children: value
            })
        });
    };
const FilterIcon = (filtered)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(filter/* default */.Z, {
        height: 16,
        width: 16,
        fill: filtered ? "#96bc33" : "#BFBFBF"
    });
};
const RenderSwitch = (onChange, trueText = "Active", falseText = "Inactive")=>// eslint-disable-next-line react/display-name
    (status, record)=>{
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            style: {
                minWidth: "104px"
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Switch, {
                    style: {
                        backgroundColor: status ? "#96BC33" : "#BFBFBF"
                    },
                    size: "small",
                    checked: status,
                    onChange: ()=>{
                        onChange(record.key);
                    }
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: (TableBusinessUnits_module_default()).userStatus,
                    style: {
                        color: status ? "#303336" : "#888E95"
                    },
                    children: status ? trueText : falseText
                })
            ]
        });
    };
const ExpandIcon = ({ expanded , onExpand , record  })=>{
    if (record.details === null) {
        return null;
    }
    return expanded ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "contracted_row_icon",
        onClick: (e)=>onExpand(record, e),
        children: "........"
    }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "expanded_row_icon",
        onClick: (e)=>onExpand(record, e),
        children: "........"
    });
};
const ActionAcceptReject = function ActionAcceptReject(custom) {
    const Component = (record)=>custom.buttonText.slice(0, 2).map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx(rowActionComponents_RowActionButton, {
                buttonText: item,
                onClick: custom.onClick,
                id: `${record.id}`
            }, index));
    Component.displayName = "ActionAcceptReject";
    return Component;
};

// EXTERNAL MODULE: ./src/utils/sorterTable.ts
var sorterTable = __webpack_require__(20720);
;// CONCATENATED MODULE: ./src/components/common/crudElemnts/Cell/types.ts
var FilterTypes;
(function(FilterTypes) {
    FilterTypes["uniqueByValue"] = "uniqueByValue";
    FilterTypes["boolean"] = "boolean";
})(FilterTypes || (FilterTypes = {}));
var SorterTypes;
(function(SorterTypes) {
    SorterTypes["boolean"] = "boolean";
    SorterTypes["text"] = "text";
    SorterTypes["localeCompare"] = "localeCompare";
})(SorterTypes || (SorterTypes = {}));
var CustomOption;
(function(CustomOption) {
    CustomOption["sorter"] = "sorter";
    CustomOption["actionEdit"] = "actionEdit";
    CustomOption["actionShow"] = "actionShow";
    CustomOption["switch"] = "switch";
    CustomOption["filter"] = "filter";
    CustomOption["actionAcceptReject"] = "actionAcceptReject";
})(CustomOption || (CustomOption = {}));

;// CONCATENATED MODULE: ./src/components/common/crudElemnts/Cell/helpers.ts





const addCustomEditActionOptions = (custom)=>{
    return {
        render: ActionsEdit(custom.actionEdit.url)
    };
};
const addCustomShowActionOptions = (custom)=>{
    return {
        render: ActionsShow(custom.actionShow.url, custom.actionShow.dataIndex)
    };
};
const addCustomAcceptRejectActionOptions = (custom)=>{
    return {
        render: ActionAcceptReject(custom.actionAcceptReject)
    };
};
const SortFunctions = {
    [SorterTypes.boolean]: (_col)=>(a, b)=>b.status - a.status,
    [SorterTypes.localeCompare]: (col)=>(a, b)=>a[col.dataIndex].localeCompare(b[col.dataIndex]),
    [SorterTypes.text]: (col)=>(idNumberA, idNumberB, sortOrder)=>(0,sorterTable/* default */.Z)(idNumberA, idNumberB, col.dataIndex, sortOrder)
};
const FilterFunctions = {
    [FilterTypes.boolean]: (col)=>(value, record)=>{
            return record[col.dataIndex] === value;
        },
    [FilterTypes.uniqueByValue]: (col)=>(value, record)=>{
            return record[col.dataIndex].indexOf(value) === 0;
        }
};
const addCustomSorterOptions = (value, col)=>{
    if (value === false) return null;
    return {
        sorter: SortFunctions[value](col)
    };
};
const addCustomSwitchOptions = (custom)=>{
    const { [CustomOption["switch"]]: { callback , trueLabel , falseLabel  } ,  } = custom;
    return {
        render: RenderSwitch(callback, trueLabel, falseLabel)
    };
};
const addCustomFilterOptions = (col, value)=>{
    return {
        filterIcon: FilterIcon,
        onFilter: FilterFunctions[value](col),
        filterMultiple: !(value === FilterTypes.boolean)
    };
};
const normalizeFilterText = (val)=>{
    if (typeof val === "string") {
        const temp = val.trim();
        return temp.length === 0 ? "Blanks" : val;
    }
    return val;
};
const uniqueValues = (data, col)=>Array.from(new Set(data?.map((item)=>item[col.dataIndex]))).map((val)=>({
            text: normalizeFilterText(val),
            value: val
        }));
// TODO: replace any type
const addCustomOptions = (custom, col, data)=>{
    if (custom === undefined) return {};
    const entries = Object.entries(custom);
    return entries.reduce((accumulator, [key, value])=>{
        // Apply predefined actions like edit
        let temp = {};
        switch(key){
            case CustomOption.filter:
                temp = {
                    ...addCustomFilterOptions(col, value),
                    filters: value === FilterTypes.uniqueByValue ? uniqueValues(data, col) : col.filters
                };
                break;
            case CustomOption["switch"]:
                temp = {
                    ...addCustomSwitchOptions(custom)
                };
                break;
            case CustomOption.actionEdit:
                temp = {
                    ...addCustomEditActionOptions(custom)
                };
                break;
            case CustomOption.actionShow:
                temp = {
                    ...addCustomShowActionOptions(custom)
                };
                break;
            case CustomOption.sorter:
                temp = {
                    ...addCustomSorterOptions(value, col)
                };
                break;
            case CustomOption.actionAcceptReject:
                temp = {
                    ...addCustomAcceptRejectActionOptions(custom)
                };
                break;
            default:
                console.log("this custom option is not currently supported", value, col);
                break;
        }
        return {
            ...accumulator,
            ...temp
        };
    }, {});
};
const addDefaults = (columns)=>{
    return columns.map((item)=>({
            ...item,
            className: (TableBusinessUnits_module_default()).columnTable,
            // @ts-ignore. It is expected to override sorter if its defined in the custom property
            custom: {
                sorter: "text",
                ...item.custom
            }
        }));
};
const addSwitchClassName = (record, columns)=>{
    const swicthObj = columns.find((obj)=>obj.custom && obj.custom.switch);
    if (swicthObj === undefined) {
        return (Table_module_default()).rowEnabled;
    }
    const swicthEnabled = record[swicthObj.dataIndex];
    return swicthEnabled ? (Table_module_default()).rowEnabled : (Table_module_default()).rowDisabled;
};
/**
 *
 * @param obj any abject passed to this function will be checked for a attribute existence, ANY attribute not a specific one.
 * @returns boolean true/false
 */ const objectHasAttributes = (obj)=>Object.keys(obj).length > 0;

;// CONCATENATED MODULE: ./src/components/common/crudElemnts/Cell/index.tsx










// TODO:: check if we should move components,
// into their own respective files for all table components
const Loading = ()=>/*#__PURE__*/ _jsx(SkeletonTable, {
        loading: true,
        rows: 5,
        columns: 5
    });
const Failure = ({ error  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            "Error loading: ",
            error
        ]
    });
};
// generateAntTableColumns & defaultExpandableRowOptions are not in helpers because
// they return ReactElement or ReactNode this is tsx helpers are specifically ts in a ts file,
// and it is better to colocate with the Success component in this case.
const generateAntTableColumns = (data, columnsConfig)=>{
    // here we are checking for the two empty objects
    // that represent columns for SELECTION_COLUMN & EXPAND_COLUMN see the Table type in antd
    const columnsConfigHasSelectAndExpand = columnsConfig.slice(0, 1).some((item)=>!objectHasAttributes(item));
    // copy the original array because splice will alter original array
    // unlike slice so just to make sure nothing strange happens with the original array we will use a copy.
    const localColumnsConfig = columnsConfig;
    // here we removes the above SELECTION_COLUMN & EXPAND_COLUMN if they exist otherwise we use the original columnsConfig
    const columns = columnsConfigHasSelectAndExpand ? localColumnsConfig.splice(2, columnsConfig.length) : columnsConfig;
    // Table expects exactly Table.SELECTION_COLUMN, Table.EXPAND_COLUMN to change the order of the columns (
    // select first checkbox second) so here we add them in again.
    // But we need to make some checks here before sending the columns to addDefaults this is what the slicing and splicing does.
    // This needs to be done to not alter the implementation that the developer expects which is adding them to the columns array in config.
    return [
        columnsConfigHasSelectAndExpand && external_antd_.Table.SELECTION_COLUMN,
        columnsConfigHasSelectAndExpand && external_antd_.Table.EXPAND_COLUMN,
        ...addDefaults(columns).map((colConfig)=>{
            const { custom , ...col } = colConfig;
            const hasUserDefinedFilters = Object.keys(col).includes("filters");
            return {
                ...col,
                filterIcon: hasUserDefinedFilters ? FilterIcon : null,
                title: ()=>/*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (TableBusinessUnits_module_default()).headerTable,
                        children: col.title
                    }),
                ...addCustomOptions(custom, col, data)
            };
        }), 
    ].filter(Boolean); // if columnsConfigHasSelectAndExpand is false this will filter out the false values.
};
const defaultExpandableRowOptions = ({ expandedRowRender  })=>{
    if (expandedRowRender) {
        return {
            expandable: {
                columnWidth: "1px",
                expandIcon: ExpandIcon,
                expandedRowRender,
                rowExpandable: (record)=>record.details !== null
            }
        };
    }
    return null;
};
// TODO: add proper types
const Success = ({ data , columns , defaultRowSelectOptions , expandedRowRender , paginationOptions  })=>{
    const { width =0  } = (0,useWindowDimension/* default */.Z)();
    const columnsWithStyles = (0,external_react_.useMemo)(()=>generateAntTableColumns(data, columns), [
        generateAntTableColumns
    ]);
    const addDefaultsExpandableOptions = (0,external_react_.useMemo)(()=>defaultExpandableRowOptions({
            expandedRowRender
        }), [
        expandedRowRender
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Table, {
        rowKey: "id",
        dataSource: data,
        columns: columnsWithStyles,
        className: (Table_module_default()).userTable,
        rowClassName: (record)=>addSwitchClassName(record, columns) ?? "",
        pagination: {
            size: "small",
            style: {
                marginTop: "28px",
                marginBottom: "0px",
                left: width <= login_ui/* MOBILE_BREAKPOINT */.Gh ? "0" : "",
                position: width <= login_ui/* MOBILE_BREAKPOINT */.Gh ? "sticky" : "initial",
                width: width <= login_ui/* MOBILE_BREAKPOINT */.Gh ? "max-content" : "100%"
            },
            defaultPageSize: 25,
            showSizeChanger: true,
            pageSizeOptions: [
                "10",
                "25",
                "50",
                "100",
                "500",
                "1000"
            ],
            showTotal: (total, range)=>{
                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                    style: {
                        height: "32px"
                    },
                    children: [
                        "Showing ",
                        range[0],
                        " - ",
                        range[1],
                        " of ",
                        total
                    ]
                });
            },
            ...paginationOptions
        },
        ...defaultRowSelectOptions,
        ...addDefaultsExpandableOptions
    });
};

// EXTERNAL MODULE: ./src/components/common/input/input.module.scss
var input_module = __webpack_require__(16828);
var input_module_default = /*#__PURE__*/__webpack_require__.n(input_module);
// EXTERNAL MODULE: ./src/components/hooks/storeHooks.ts
var storeHooks = __webpack_require__(89480);
;// CONCATENATED MODULE: ./src/components/hooks/useDebounce.ts

function useDebounce(value, delay) {
    const { 0: debouncedValue , 1: setDebouncedValue  } = (0,external_react_.useState)(value);
    (0,external_react_.useEffect)(()=>{
        const timer = setTimeout(()=>setDebouncedValue(value), delay || 500);
        return ()=>{
            clearTimeout(timer);
        };
    }, [
        value,
        delay
    ]);
    return [
        debouncedValue,
        setDebouncedValue
    ];
}

;// CONCATENATED MODULE: ./src/utils/childrenByType.ts

const childrenByType = (children, componentType)=>{
    return external_react_default().Children.toArray(children).filter((child)=>external_react_default().isValidElement(child) && child.type === componentType);
};
/* harmony default export */ const utils_childrenByType = (childrenByType);

// EXTERNAL MODULE: ./src/components/common/crudElemnts/Events.ts
var Events = __webpack_require__(14844);
;// CONCATENATED MODULE: ./src/components/common/crudElemnts/index.tsx


















const { Title  } = external_antd_.Typography;
const List = ({ data , error , mutate , isValidating , isLoading , columns , texts , children , config ={} , expandedRowRender , defaultRowSelectOptions ,  })=>{
    const { creatable =true , searchable =true , keysToSearchBy =[] , paginationOptions ={} ,  } = config;
    const { currentUserRoleName  } = (0,storeHooks/* useAppSelector */.C)((state)=>state.dashboard);
    const { pathname  } = (0,router_.useRouter)();
    const { 0: searchTerm , 1: setSearchTerm  } = (0,external_react_.useState)("");
    const { 0: errorMessage , 1: setErrorMessage  } = (0,external_react_.useState)(null);
    const [debouncedValue, setDebouncedValue] = useDebounce(searchTerm, 300);
    const { width =0  } = (0,useWindowDimension/* default */.Z)();
    const showLoading = isLoading || isValidating;
    (0,external_react_.useEffect)(()=>{
        (0,Events/* subscribe */.Ld)("showError", (e)=>{
            // @ts-ignore
            setErrorMessage(e.detail);
        });
        return ()=>{
            (0,Events/* unsubscribe */.r1)("showError", ()=>setErrorMessage(null));
        };
    }, []);
    (0,external_react_.useEffect)(()=>{
        setSearchTerm("");
        setDebouncedValue("");
        if (!showLoading) {
            mutate();
        }
    }, [
        currentUserRoleName
    ]);
    const filteredData = (0,external_react_.useMemo)(()=>{
        if (showLoading || error || !data) return null;
        const fuse = new (external_fuse_js_default())(data, {
            keys: keysToSearchBy
        });
        return fuse.search(debouncedValue).map((r)=>r.item);
    }, [
        data,
        showLoading,
        debouncedValue
    ]);
    if (error) return /*#__PURE__*/ jsx_runtime_.jsx(Failure, {});
    const searchChildren = utils_childrenByType(children, List.Search);
    const actionChildren = utils_childrenByType(children, List.Actions);
    const bodyChildren = utils_childrenByType(children, List.Body);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (BusinessUnits_module_default()).business_units,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Title, {
                    level: 4,
                    className: (BusinessUnits_module_default()).business_units__buyer,
                    children: currentUserRoleName
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Title, {
                    level: 2,
                    className: (BusinessUnits_module_default()).business_units__title,
                    children: texts.titleTable
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Row, {
                    className: (BusinessUnits_module_default()).buttons_and_search,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (BusinessUnits_module_default()).search,
                            children: [
                                searchable && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (input_module_default()).input,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            value: searchTerm,
                                            type: "text",
                                            id: "search",
                                            className: (input_module_default()).input__login,
                                            style: {
                                                width: width <= login_ui/* TABLET_BREAKPOINT */.rN ? "100%" : "273px",
                                                height: "43px",
                                                backgroundColor: "transparent"
                                            },
                                            placeholder: "Search by",
                                            onChange: (e)=>setSearchTerm(e.target.value)
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: (input_module_default()).input__show_pass,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                width: 20,
                                                height: 20,
                                                alt: "search",
                                                src: "/assets/icons/search.svg"
                                            })
                                        })
                                    ]
                                }),
                                searchChildren
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (BusinessUnits_module_default()).buttons,
                            children: [
                                actionChildren,
                                creatable && /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: `${pathname}/create`,
                                    passHref: true,
                                    legacyBehavior: true,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Button, {
                                        type: "primary",
                                        size: "large",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(ai_.AiOutlinePlus, {
                                                className: (BusinessUnits_module_default()).buttons__add_icon
                                            }),
                                            texts.buttonAddNew
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Card, {
                    className: (Table_module_default()).card,
                    bodyStyle: {
                        padding: "32px 48px"
                    },
                    children: [
                        bodyChildren,
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Card.Grid, {
                            hoverable: false,
                            className: (Table_module_default()).grid,
                            children: [
                                errorMessage && /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Alert, {
                                    showIcon: true,
                                    closable: true,
                                    type: "error",
                                    message: errorMessage,
                                    className: `alert_red ${(BusinessUnits_module_default()).alert}`,
                                    afterClose: ()=>setErrorMessage(null),
                                    icon: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: "/assets/icons/alert_error.svg",
                                        alt: "logo_conexis",
                                        width: 24,
                                        height: 24
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Success, {
                                    data: debouncedValue === "" ? data : filteredData,
                                    columns,
                                    paginationOptions,
                                    expandedRowRender,
                                    defaultRowSelectOptions
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
const SearchContainer = ({ children  })=>{
    return children;
};
const ActionsContainer = ({ children  })=>{
    return children;
};
const BodyContainer = ({ children  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: children
    });
};
List.Search = SearchContainer;
List.Actions = ActionsContainer;
List.Body = BodyContainer;


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