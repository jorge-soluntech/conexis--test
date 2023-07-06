exports.id = 33;
exports.ids = [33];
exports.modules = {

/***/ 15912:
/***/ ((module) => {

// Exports
module.exports = {
	"headerTable": "TableUser_headerTable__Xa0rV",
	"columnTable": "TableUser_columnTable__ktFeX",
	"userStatus": "TableUser_userStatus__hWkO_",
	"wrapperLinkActions": "TableUser_wrapperLinkActions__hPA4h",
	"moveToRight": "TableUser_moveToRight__8hQcI"
};


/***/ }),

/***/ 79417:
/***/ ((module) => {

// Exports
module.exports = {
	"users": "userComponent_users___2Wow",
	"users__title": "userComponent_users__title__GmPaz",
	"buttons_and_search": "userComponent_buttons_and_search__PG_Xp",
	"search": "userComponent_search__rgSdW",
	"buttons": "userComponent_buttons__VgfrR",
	"buttons__add_icon": "userComponent_buttons__add_icon__LO45X",
	"moveToRight": "userComponent_moveToRight__LA8kY"
};


/***/ }),

/***/ 90033:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_common_exportDropdownComponent_ExportDropdownComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28786);
/* harmony import */ var _components_common_input_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31776);
/* harmony import */ var _components_designSystem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(88776);
/* harmony import */ var _components_hooks_useWindowDimension__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(60255);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(90396);
/* harmony import */ var _consts_login_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4262);
/* harmony import */ var _infrastructure_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(43019);
/* harmony import */ var _tableUser_TableUsers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(76614);
/* harmony import */ var _userComponent_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(79417);
/* harmony import */ var _userComponent_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_userComponent_module_scss__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_infrastructure_services__WEBPACK_IMPORTED_MODULE_9__, _tableUser_TableUsers__WEBPACK_IMPORTED_MODULE_10__]);
([_infrastructure_services__WEBPACK_IMPORTED_MODULE_9__, _tableUser_TableUsers__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable no-nested-ternary */ 











const { Title  } = _components_designSystem__WEBPACK_IMPORTED_MODULE_5__/* .Typography */ .ZT;
const UserComponent = ({ dataUser , filters , filteredData , handleSearchChange , loading , search , setDataUser , setFilters , setFilteredData ,  })=>{
    const { width =0  } = (0,_components_hooks_useWindowDimension__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    const downloadAsCsv = (data)=>{
        const element = document.createElement("a");
        element.id = "download-csv";
        element.setAttribute("href", `data:text/plain;charset=utf-8,${encodeURIComponent(data)}`);
        element.setAttribute("download", "users.csv");
        document.body.appendChild(element);
        document.querySelector("#download-csv").click();
        element.remove();
    };
    const downloadAsTxt = (data)=>{
        const element = document.createElement("a");
        element.setAttribute("href", `data:text/plain;charset=utf-8,${encodeURIComponent(data)}`);
        element.setAttribute("download", "users.txt");
        element.style.display = "none";
        document.body.appendChild(element);
        element.click();
        element.remove();
    };
    const downloadAsJson = (data)=>{
        const dataStr = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(data))}`;
        const element = document.createElement("a");
        element.setAttribute("href", dataStr);
        element.setAttribute("download", "users.json");
        document.body.appendChild(element); // required for firefox
        element.click();
        element.remove();
    };
    const exportFile = async (type)=>{
        const { userRole  } = filters;
        let userRoleParams = "";
        userRole.forEach((role)=>{
            userRoleParams = userRoleParams.concat(`&user_role=${role}`);
        });
        const value = filters.userStatus[0];
        const userStatus = value !== undefined ? value === true ? "Active" : "Inactive" : "";
        await _infrastructure_services__WEBPACK_IMPORTED_MODULE_9__/* ["default"].exportUsers */ .ZP.exportUsers(type, userStatus, userRoleParams, search).then((response)=>{
            if (response.status === 200) {
                if (type === "csv") downloadAsCsv(response.data);
                if (type === "txt") downloadAsTxt(response.data);
                if (type === "json") downloadAsJson(response.data);
            }
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_userComponent_module_scss__WEBPACK_IMPORTED_MODULE_11___default().users),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
                    level: 2,
                    className: (_userComponent_module_scss__WEBPACK_IMPORTED_MODULE_11___default().users__title),
                    children: _consts__WEBPACK_IMPORTED_MODULE_7__/* .userCretaeUI.USER_CREATION_TEXT.title_users */ .XI.n4.title_users
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_designSystem__WEBPACK_IMPORTED_MODULE_5__/* .Row */ .X2, {
                    className: (_userComponent_module_scss__WEBPACK_IMPORTED_MODULE_11___default().buttons_and_search),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_userComponent_module_scss__WEBPACK_IMPORTED_MODULE_11___default().search),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_input_Input__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
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
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_userComponent_module_scss__WEBPACK_IMPORTED_MODULE_11___default().buttons),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_exportDropdownComponent_ExportDropdownComponent__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    exportData: (type)=>exportFile(type)
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_designSystem__WEBPACK_IMPORTED_MODULE_5__/* .Button */ .zx, {
                                    type: "primary",
                                    size: "large",
                                    htmlType: "submit",
                                    onClick: ()=>{
                                        next_router__WEBPACK_IMPORTED_MODULE_1___default().push("/home/users/create", undefined, {
                                            shallow: true
                                        });
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiOutlinePlus, {
                                            className: (_userComponent_module_scss__WEBPACK_IMPORTED_MODULE_11___default().buttons__add_icon)
                                        }),
                                        "Add new user"
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tableUser_TableUsers__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                    search: search,
                    loading: loading,
                    dataUser: dataUser,
                    setDataUser: setDataUser,
                    filteredData: filteredData,
                    setFilteredData: setFilteredData,
                    filters: filters,
                    setFilters: setFilters
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserComponent);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 56980:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "D": () => (/* binding */ getUserRolesAllowedFilters)
});

;// CONCATENATED MODULE: ./src/utils/getUniqueArrayObjects.ts
/**
 * Returns an array of unique objects from the provided array based on a specified object key.
 * @template T - The type of objects in the array.
 * @param {T[]} array - The array of objects.
 * @param {keyof T} objectKey - The key used to determine uniqueness.
 * @returns {T[]} - An array of unique objects.
 */ const getUniqueArrayObjects = (array, objectKey)=>{
    const uniqueObjects = [];
    array.forEach((item)=>{
        const keyValue = item[objectKey];
        const isUnique = !uniqueObjects.some((obj)=>obj[objectKey] === keyValue);
        if (isUnique) {
            uniqueObjects.push(item);
        }
    });
    return uniqueObjects;
};

// EXTERNAL MODULE: ./src/utils/stringUtils.ts
var stringUtils = __webpack_require__(25690);
;// CONCATENATED MODULE: ./src/components/common/userComponent/helpers/getUserRolesAllowedFilters.ts


/* NOTE::
 * If the users array is large or if the operations inside the function becomes more complex,
 * it could potentially become computationally expensive.
 * In this case it is, recommended to use this function inside of the React useMemo hook, or even optimize this function.
 */ /**
 * @template T IUserComponent.DataUserMapped[] - The type of users array passed in
 * @param users IUserComponent.DataUserMapped[]
 * @returns {UserRoleFilters[]} An array of unique user roles in the format { text: string, value: string }[].
 */ const getUserRolesAllowedFilters = (users)=>{
    // The below code is taking ALL the users data and
    // creating a unique list of values which can be used for filters
    // first we create the unique list,
    // and then we format it into the shape antd columns expects for filters.
    const allowedUserRoleFilters = getUniqueArrayObjects(users.map(({ userRole  })=>({
            userRole
        })), "userRole")?.map(({ userRole  })=>({
            text: userRole,
            value: (0,stringUtils.capitalizeString)(userRole)
        }));
    return allowedUserRoleFilters;
};


/***/ }),

/***/ 76614:
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
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67151);
/* harmony import */ var _infrastructure_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(43019);
/* harmony import */ var _tableComponent_Table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(95821);
/* harmony import */ var _helpers_getUserRolesAllowedFilters__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(56980);
/* harmony import */ var _TableUser_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(15912);
/* harmony import */ var _TableUser_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_TableUser_module_scss__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_infrastructure_services__WEBPACK_IMPORTED_MODULE_6__, _tableComponent_Table__WEBPACK_IMPORTED_MODULE_7__]);
([_infrastructure_services__WEBPACK_IMPORTED_MODULE_6__, _tableComponent_Table__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const DEFAULT_PAGE_SIZE = 20;
/**
 * returns the user table
 *
 * @param search - string with search criteria
 * @param loading - boolean indicating whether the data request is being made for the table
 * @param dataUser - object with the table data
 * @param setDataUser - function that modifies dataUser
 * @param filteredData - object with the table data filtered based on the searchText parameter
 * @param setFilteredData - function that modifies filteredData
 * @param filters - object containing all the filter criteria applied to the table
 * @param setFilters - function that modifies filters
 * @returns the user table
 */ const TableUsers = ({ search , loading , dataUser , setDataUser , filteredData , setFilteredData , filters , setFilters ,  })=>{
    const { 0: page , 1: setPage  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(1);
    // The complexity of getUserRolesAllowedFilters depends on the size of the users array.
    // If the users array is relatively small, the function should execute quickly
    // and without any noticeable performance impact. otherwise it should be placed inside a useMemo hook.
    const userRoleFilters = (0,_helpers_getUserRolesAllowedFilters__WEBPACK_IMPORTED_MODULE_8__/* .getUserRolesAllowedFilters */ .D)(dataUser);
    const updateStatus = (id)=>{
        setDataUser((prevData)=>prevData.map((item)=>{
                if (item.key === id) {
                    return {
                        ...item,
                        status: !item.status
                    };
                }
                return item;
            }));
        setFilteredData((prevData)=>prevData.map((item)=>{
                if (item.key === id) {
                    return {
                        ...item,
                        status: !item.status
                    };
                }
                return item;
            }));
    };
    const handleChange = async (id, status)=>{
        updateStatus(id);
        const userStatus = status ? "Active" : "Inactive";
        await _infrastructure_services__WEBPACK_IMPORTED_MODULE_6__/* ["default"].changeUserStatus */ .ZP.changeUserStatus(id, {
            user_status: userStatus
        }).then((response)=>{
            if (response.status !== 200) updateStatus(id);
        });
    };
    const onChange = (pagination, filters)=>{
        const field = Object.keys(filters)[1];
        if (field) {
            const filterLength = filters[field]?.length;
            if (filterLength && filterLength > 0) {
                setFilters((prev)=>{
                    return {
                        userRole: field === "userRole" ? filters.userRole : prev.userRole,
                        userStatus: field === "status" ? filters.status : prev.userStatus
                    };
                });
            } else {
                setFilters((prev)=>{
                    return {
                        userRole: field === "userRole" ? [] : prev.userRole,
                        userStatus: field === "status" ? [] : prev.userStatus
                    };
                });
            }
        }
        setPage(pagination.current);
    };
    const columns = [
        {
            title: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: (_TableUser_module_scss__WEBPACK_IMPORTED_MODULE_9___default().headerTable),
                    children: "Name"
                }),
            dataIndex: "name",
            sorter: (a, b)=>a.name.localeCompare(b.name),
            className: (_TableUser_module_scss__WEBPACK_IMPORTED_MODULE_9___default().columnTable)
        },
        {
            title: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: (_TableUser_module_scss__WEBPACK_IMPORTED_MODULE_9___default().headerTable),
                    children: "Email"
                }),
            dataIndex: "email",
            className: (_TableUser_module_scss__WEBPACK_IMPORTED_MODULE_9___default().columnTable),
            sorter: (a, b)=>a.email.localeCompare(b.email)
        },
        {
            title: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: (_TableUser_module_scss__WEBPACK_IMPORTED_MODULE_9___default().headerTable),
                    children: "User role"
                }),
            dataIndex: "userRole",
            className: (_TableUser_module_scss__WEBPACK_IMPORTED_MODULE_9___default().columnTable),
            filters: userRoleFilters,
            filterIcon: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_assets_filter__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    height: 16,
                    width: 16,
                    fill: filters.userRole.length > 0 ? "#96bc33" : "#BFBFBF"
                }),
            onFilter: (value, record)=>record.userRole.indexOf(`${value}`) === 0,
            sorter: (a, b)=>a.userRole.localeCompare(b.userRole)
        },
        {
            title: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: (_TableUser_module_scss__WEBPACK_IMPORTED_MODULE_9___default().headerTable),
                    children: "User Status"
                }),
            dataIndex: "status",
            filterMultiple: false,
            className: (_TableUser_module_scss__WEBPACK_IMPORTED_MODULE_9___default().columnTable),
            filters: [
                {
                    text: "Active",
                    value: true
                },
                {
                    text: "Inactive",
                    value: false
                }, 
            ],
            filterIcon: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_assets_filter__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    height: 16,
                    width: 16,
                    fill: filters.userStatus.length > 0 ? "#96bc33" : "#BFBFBF"
                }),
            onFilter: (value, record)=>record.status === value,
            sorter: (a, b)=>b.status - a.status,
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
                            onChange: ()=>handleChange(record.key, !status)
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: (_TableUser_module_scss__WEBPACK_IMPORTED_MODULE_9___default().userStatus),
                            style: {
                                color: status ? "#303336" : "#888E95"
                            },
                            children: status ? "Active" : "Inactive"
                        })
                    ]
                });
            }
        },
        {
            title: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: (_TableUser_module_scss__WEBPACK_IMPORTED_MODULE_9___default().headerTable),
                    children: "Actions"
                }),
            dataIndex: "actions",
            className: (_TableUser_module_scss__WEBPACK_IMPORTED_MODULE_9___default().columnTable),
            render: (_value, record)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    onClick: ()=>{
                        next_router__WEBPACK_IMPORTED_MODULE_3___default().push(`/home/users/update/${record.key}`);
                    },
                    className: (_TableUser_module_scss__WEBPACK_IMPORTED_MODULE_9___default().wrapperLinkActions),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        alt: "edit",
                        width: 16,
                        height: 16,
                        src: "/assets/icons/edit.svg"
                    })
                })
        }, 
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tableComponent_Table__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        page: page,
        loading: loading,
        dataTable: search ? filteredData : dataUser,
        pageSize: DEFAULT_PAGE_SIZE,
        columns: columns,
        onChange: onChange,
        rowsSkeleton: 8,
        columnsSkeleton: 5
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TableUsers);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 25690:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "capitalizeString": () => (/* binding */ capitalizeString),
/* harmony export */   "getInitials": () => (/* binding */ getInitials)
/* harmony export */ });
const getInitials = (name)=>name?.match(/\b(\w)/g)?.join("").substring(0, 3).toUpperCase();
const capitalizeString = (str)=>str?.charAt(0).toUpperCase() + str?.slice(1);


/***/ })

};
;