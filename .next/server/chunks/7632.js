"use strict";
exports.id = 7632;
exports.ids = [7632];
exports.modules = {

/***/ 17632:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ UtilServices)
/* harmony export */ });
/* harmony import */ var _api_configFetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51573);
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97237);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_configFetch__WEBPACK_IMPORTED_MODULE_0__]);
_api_configFetch__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/* eslint-disable no-useless-catch */ /* eslint-disable class-methods-use-this */ 

const createUrl = (base, path)=>`${base}${path}`;
const BASE_URL = "https://d5ja6jkvsot2v.cloudfront.net"; // Replace by your env variable
class UtilServices {
    // async method to get check if the backend server is down
    static async serverIsDown(router) {
        try {
            await (0,_api_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)((0,_api_configFetch__WEBPACK_IMPORTED_MODULE_0__/* .configGet */ .zn)(createUrl(BASE_URL, "/utils/serverStatus")));
            return false;
        } catch (error) {
            router.push("/auth/server-down", undefined, {
                shallow: true
            });
            return true;
        }
    }
    // async method to upload a file to s3 file from the frontend
    static uploadS3File = async (extension)=>{
        try {
            const response = await (0,_api_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)((0,_api_configFetch__WEBPACK_IMPORTED_MODULE_0__/* .configPost */ .DH)([
                createUrl(BASE_URL, "/utils/uploadS3File")
            ], {
                extension
            }));
            return response.data;
        } catch (error) {
            if (error.response?.status === 400) {
                return error.response.data;
            }
            throw error;
        }
    };
    // async method to update a file to s3 file from the frontend
    static updateS3File = async (url, blobData, contentType)=>{
        try {
            const response = await (0,_api_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({
                url,
                method: "put",
                headers: {
                    "Content-Type": contentType
                },
                data: blobData
            });
            return response;
        } catch (error) {
            console.error(error);
            throw error;
        }
    };
    // async method to get the url from an s3 file from the backend
    static getS3File = async (id, router)=>{
        try {
            const response = await (0,_api_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)((0,_api_configFetch__WEBPACK_IMPORTED_MODULE_0__/* .configGet */ .zn)(createUrl(BASE_URL, `/utils/getS3File/${id}`)));
            return response.data;
        } catch (error) {
            if (error.response?.status === 404 || error.response?.status === 400) {
                throw error;
            } else {
                UtilServices.serverIsDown(router);
                throw error;
            }
        }
    };
    // async method to download an s3 file from s3 after getting the url
    static downloadS3File = async (file, router)=>{
        try {
            const responseFileData = await this.getS3File(file.id, router);
            const response = await fetch(responseFileData.url, {
                method: "GET"
            });
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            const blob = await response.blob();
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = file.name;
            document.body.appendChild(a);
            a.click();
            a.remove();
        } catch (error) {
            if (error.response?.status === 404 || error.response?.status === 400) {
                console.log(error);
                throw error;
            } else {
                UtilServices.serverIsDown(router);
                throw error;
            }
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;