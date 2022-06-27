/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__bCOhY\",\n\t\"main\": \"Home_main__nLjiQ\",\n\t\"logs\": \"Home_logs__xVKJb\",\n\t\"button\": \"Home_button__Zs7A2\",\n\t\"title\": \"Home_title__T09hD\",\n\t\"description\": \"Home_description__41Owk\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NlbWFwaG9yZS1ib2lsZXJwbGF0ZS8uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3M/NzEyNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJIb21lX2NvbnRhaW5lcl9fYkNPaFlcIixcblx0XCJtYWluXCI6IFwiSG9tZV9tYWluX19uTGppUVwiLFxuXHRcImxvZ3NcIjogXCJIb21lX2xvZ3NfX3hWS0piXCIsXG5cdFwiYnV0dG9uXCI6IFwiSG9tZV9idXR0b25fX1pzN0EyXCIsXG5cdFwidGl0bGVcIjogXCJIb21lX3RpdGxlX19UMDloRFwiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiSG9tZV9kZXNjcmlwdGlvbl9fNDFPd2tcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _zk_kit_identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @zk-kit/identity */ \"@zk-kit/identity\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ethers */ \"ethers\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Button */ \"@mui/material/Button\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_zk_kit_identity__WEBPACK_IMPORTED_MODULE_1__]);\n_zk_kit_identity__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\nfunction Home() {\n    async function register() {\n        const message = \"Make me anonymous\";\n        if (typeof window.ethereum !== 'undefined') {\n            console.log('MetaMask is installed!');\n        }\n        await window.ethereum.request({\n            method: 'eth_requestAccounts'\n        });\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_2__.providers.Web3Provider(window.ethereum);\n        const signer = provider.getSigner();\n        const signature = await signer.signMessage(message);\n        const address = await signer.getAddress();\n        console.log({\n            signer,\n            signature,\n            address\n        });\n        const identity = new _zk_kit_identity__WEBPACK_IMPORTED_MODULE_1__.ZkIdentity(_zk_kit_identity__WEBPACK_IMPORTED_MODULE_1__.Strategy.MESSAGE, signature);\n        const identityCommitment = identity.genIdentityCommitment();\n        console.log(identityCommitment);\n        fetch(`http://localhost:8000/register`, {\n            method: \"POST\",\n            headers: {\n                'Accept': 'application/json',\n                'Content-Type': 'application/json'\n            },\n            body: JSON.stringify({\n                identityCommitment: identityCommitment.toString()\n            })\n        }).then((response)=>response.json()\n        ).then((json)=>console.log(json)\n        );\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n        style: {\n            display: 'flex',\n            alignItems: 'center',\n            flexDirection: 'column'\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Greetings\"\n                    }, void 0, false, {\n                        fileName: \"/Users/0xrishabh/workspace/playground/zk-Oauth/pages/index.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"A simple Next.js/Hardhat privacy application with Semaphore.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/0xrishabh/workspace/playground/zk-Oauth/pages/index.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/0xrishabh/workspace/playground/zk-Oauth/pages/index.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/0xrishabh/workspace/playground/zk-Oauth/pages/index.tsx\",\n                lineNumber: 53,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"ZK Oauth\"\n                }, void 0, false, {\n                    fileName: \"/Users/0xrishabh/workspace/playground/zk-Oauth/pages/index.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 18\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/0xrishabh/workspace/playground/zk-Oauth/pages/index.tsx\",\n                lineNumber: 59,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \" Create your \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                            children: \"anonymous\"\n                        }, void 0, false, {\n                            fileName: \"/Users/0xrishabh/workspace/playground/zk-Oauth/pages/index.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 30\n                        }, this),\n                        \" identity on \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                            children: \"blockchain\"\n                        }, void 0, false, {\n                            fileName: \"/Users/0xrishabh/workspace/playground/zk-Oauth/pages/index.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 59\n                        }, this),\n                        \". \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/0xrishabh/workspace/playground/zk-Oauth/pages/index.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 14\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/0xrishabh/workspace/playground/zk-Oauth/pages/index.tsx\",\n                lineNumber: 60,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_5___default()), {\n                    variant: \"outlined\",\n                    size: \"large\",\n                    className: \"register\",\n                    onClick: register,\n                    children: \" Register \"\n                }, void 0, false, {\n                    fileName: \"/Users/0xrishabh/workspace/playground/zk-Oauth/pages/index.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 14\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/0xrishabh/workspace/playground/zk-Oauth/pages/index.tsx\",\n                lineNumber: 61,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/0xrishabh/workspace/playground/zk-Oauth/pages/index.tsx\",\n        lineNumber: 48,\n        columnNumber: 9\n    }, this));\n};\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ3VEO0FBRUw7QUFDdEI7QUFDSDtBQUVxQjtBQUlMO0FBSTFCLFFBQVEsQ0FBQ08sSUFBSSxHQUFHLENBQUM7bUJBQ2JDLFFBQVEsR0FBRSxDQUFDO1FBQ3hCLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLENBQW1CO1FBQ25DLEVBQUUsRUFBRSxNQUFNLENBQUNDLE1BQU0sQ0FBQ0MsUUFBUSxLQUFLLENBQVcsWUFBRSxDQUFDO1lBQzNDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUF3QjtRQUN0QyxDQUFDO1FBRUQsS0FBSyxDQUFDSCxNQUFNLENBQUNDLFFBQVEsQ0FBQ0csT0FBTyxDQUFDLENBQUM7WUFBQ0MsTUFBTSxFQUFFLENBQXFCO1FBQUMsQ0FBQztRQUMvRCxLQUFLLENBQUNDLFFBQVEsR0FBRyxHQUFHLENBQUNkLDBEQUFzQixDQUFDUSxNQUFNLENBQUNDLFFBQVE7UUFDM0QsS0FBSyxDQUFDTyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0csU0FBUztRQUNqQyxLQUFLLENBQUNDLFNBQVMsR0FBRyxLQUFLLENBQUNGLE1BQU0sQ0FBQ0csV0FBVyxDQUFDWixPQUFPO1FBQ2xELEtBQUssQ0FBQ2EsT0FBTyxHQUFHLEtBQUssQ0FBQ0osTUFBTSxDQUFDSyxVQUFVO1FBQ3ZDWCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFDO1lBQUNLLE1BQU07WUFBRUUsU0FBUztZQUFFRSxPQUFPO1FBQUMsQ0FBQztRQUMxQyxLQUFLLENBQUNFLFFBQVEsR0FBRyxHQUFHLENBQUN2Qix3REFBVSxDQUFDRCw4REFBZ0IsRUFBRW9CLFNBQVM7UUFDM0QsS0FBSyxDQUFDTSxrQkFBa0IsR0FBR0YsUUFBUSxDQUFDRyxxQkFBcUI7UUFDekRmLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDYSxrQkFBa0I7UUFFOUJFLEtBQUssRUFBRSw4QkFBOEIsR0FBRyxDQUFDO1lBQ3JDYixNQUFNLEVBQUUsQ0FBTTtZQUNkYyxPQUFPLEVBQUUsQ0FBQztnQkFDUixDQUFRLFNBQUUsQ0FBa0I7Z0JBQzVCLENBQWMsZUFBRSxDQUFrQjtZQUNwQyxDQUFDO1lBQ0RDLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUMsQ0FBQztnQkFDcEJOLGtCQUFrQixFQUFFQSxrQkFBa0IsQ0FBQ08sUUFBUTtZQUNqRCxDQUFDO1FBQ0wsQ0FBQyxFQUNBQyxJQUFJLEVBQUNDLFFBQVEsR0FBSUEsUUFBUSxDQUFDQyxJQUFJO1VBQzlCRixJQUFJLEVBQUNFLElBQUksR0FBSXhCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDdUIsSUFBSTs7SUFDbEMsQ0FBQztJQUVDLE1BQU0sNkVBQ0RDLENBQUc7UUFBQ0MsU0FBUyxFQUFFakMsMEVBQWdCO1FBQUVtQyxLQUFLLEVBQUUsQ0FBQztZQUN4Q0MsT0FBTyxFQUFFLENBQU07WUFDZkMsVUFBVSxFQUFFLENBQVE7WUFDcEJDLGFBQWEsRUFBRSxDQUFRO1FBQ3pCLENBQUM7O3dGQUNJeEMsa0RBQUk7O2dHQUNBeUMsQ0FBSztrQ0FBQyxDQUFTOzs7Ozs7Z0dBQ2ZDLENBQUk7d0JBQUNDLElBQUksRUFBQyxDQUFhO3dCQUFDQyxPQUFPLEVBQUMsQ0FBOEQ7Ozs7OztnR0FDOUZDLENBQUk7d0JBQUNDLEdBQUcsRUFBQyxDQUFNO3dCQUFDQyxJQUFJLEVBQUMsQ0FBYzs7Ozs7Ozs7Ozs7O3dGQUd2Q2IsQ0FBRztzR0FBRWMsQ0FBRTs4QkFBQyxDQUFROzs7Ozs7Ozs7Ozt3RkFDcEJkLENBQUc7c0dBQUVlLENBQUM7O3dCQUFDLENBQWE7b0dBQUNDLENBQUM7c0NBQUMsQ0FBUzs7Ozs7O3dCQUFJLENBQWE7b0dBQUNBLENBQUM7c0NBQUMsQ0FBVTs7Ozs7O3dCQUFJLENBQUU7Ozs7Ozs7Ozs7Ozt3RkFDcEVoQixDQUFHO3NHQUFFL0IsNkRBQU07b0JBQUNnRCxPQUFPLEVBQUMsQ0FBVTtvQkFBQ0MsSUFBSSxFQUFDLENBQU87b0JBQUNqQixTQUFTLEVBQUMsQ0FBVTtvQkFBQ2tCLE9BQU8sRUFBRWhELFFBQVE7OEJBQUUsQ0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHdkcsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NlbWFwaG9yZS1ib2lsZXJwbGF0ZS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkZXRlY3RFdGhlcmV1bVByb3ZpZGVyIGZyb20gXCJAbWV0YW1hc2svZGV0ZWN0LXByb3ZpZGVyXCJcbmltcG9ydCB7IFN0cmF0ZWd5LCBaa0lkZW50aXR5IH0gZnJvbSBcIkB6ay1raXQvaWRlbnRpdHlcIlxuaW1wb3J0IHsgZ2VuZXJhdGVNZXJrbGVQcm9vZiwgU2VtYXBob3JlIH0gZnJvbSBcIkB6ay1raXQvcHJvdG9jb2xzXCJcbmltcG9ydCB7IHByb3ZpZGVycyxDb250cmFjdCwgdXRpbHMgfSBmcm9tIFwiZXRoZXJzXCJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIlxuaW1wb3J0IEdyZWV0Rm9ybSBmcm9tIFwiLi9jb21wb25lbnRzL0dyZWV0aW5nRm9ybVwiO1xuaW1wb3J0IEdyZWV0ZXIgZnJvbSBcImFydGlmYWN0cy9jb250cmFjdHMvR3JlZXRlcnMuc29sL0dyZWV0ZXJzLmpzb25cIlxuXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQnV0dG9uJ1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgICBhc3luYyBmdW5jdGlvbiByZWdpc3Rlcigpe1xuICAgICAgY29uc3QgbWVzc2FnZSA9IFwiTWFrZSBtZSBhbm9ueW1vdXNcIlxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuZXRoZXJldW0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdNZXRhTWFzayBpcyBpbnN0YWxsZWQhJyk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiAnZXRoX3JlcXVlc3RBY2NvdW50cycgfSk7XG4gICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBwcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHdpbmRvdy5ldGhlcmV1bSlcbiAgICAgIGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpXG4gICAgICBjb25zdCBzaWduYXR1cmUgPSBhd2FpdCBzaWduZXIuc2lnbk1lc3NhZ2UobWVzc2FnZSlcbiAgICAgIGNvbnN0IGFkZHJlc3MgPSBhd2FpdCBzaWduZXIuZ2V0QWRkcmVzcygpXG4gICAgICBjb25zb2xlLmxvZyh7IHNpZ25lciwgc2lnbmF0dXJlLCBhZGRyZXNzIH0pXG4gICAgICBjb25zdCBpZGVudGl0eSA9IG5ldyBaa0lkZW50aXR5KFN0cmF0ZWd5Lk1FU1NBR0UsIHNpZ25hdHVyZSlcbiAgICAgIGNvbnN0IGlkZW50aXR5Q29tbWl0bWVudCA9IGlkZW50aXR5LmdlbklkZW50aXR5Q29tbWl0bWVudCgpXG4gICAgICBjb25zb2xlLmxvZyhpZGVudGl0eUNvbW1pdG1lbnQpICAgIFxuXG4gICAgICBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDAwL3JlZ2lzdGVyYCwge1xuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICB9LFxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIGlkZW50aXR5Q29tbWl0bWVudDogaWRlbnRpdHlDb21taXRtZW50LnRvU3RyaW5nKClcbiAgICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGpzb24gPT4gY29uc29sZS5sb2coanNvbikpO1xuICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0gc3R5bGU9e3tcbiAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgIH19PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPkdyZWV0aW5nczwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkEgc2ltcGxlIE5leHQuanMvSGFyZGhhdCBwcml2YWN5IGFwcGxpY2F0aW9uIHdpdGggU2VtYXBob3JlLlwiIC8+XG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICAgICAgPC9IZWFkPlxuXG4gICAgICAgICAgICA8ZGl2PjxoMT5aSyBPYXV0aDwvaDE+PC9kaXY+XG4gICAgICAgIDxkaXY+PHA+IENyZWF0ZSB5b3VyIDxiPmFub255bW91czwvYj4gaWRlbnRpdHkgb24gPGI+YmxvY2tjaGFpbjwvYj4uIDwvcD48L2Rpdj5cbiAgICAgICAgPGRpdj48QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIHNpemU9XCJsYXJnZVwiIGNsYXNzTmFtZT0ncmVnaXN0ZXInIG9uQ2xpY2s9e3JlZ2lzdGVyfT4gUmVnaXN0ZXIgPC9CdXR0b24+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbIlN0cmF0ZWd5IiwiWmtJZGVudGl0eSIsInByb3ZpZGVycyIsIkhlYWQiLCJSZWFjdCIsInN0eWxlcyIsIkJ1dHRvbiIsIkhvbWUiLCJyZWdpc3RlciIsIm1lc3NhZ2UiLCJ3aW5kb3ciLCJldGhlcmV1bSIsImNvbnNvbGUiLCJsb2ciLCJyZXF1ZXN0IiwibWV0aG9kIiwicHJvdmlkZXIiLCJXZWIzUHJvdmlkZXIiLCJzaWduZXIiLCJnZXRTaWduZXIiLCJzaWduYXR1cmUiLCJzaWduTWVzc2FnZSIsImFkZHJlc3MiLCJnZXRBZGRyZXNzIiwiaWRlbnRpdHkiLCJNRVNTQUdFIiwiaWRlbnRpdHlDb21taXRtZW50IiwiZ2VuSWRlbnRpdHlDb21taXRtZW50IiwiZmV0Y2giLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0b1N0cmluZyIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJzdHlsZSIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiZmxleERpcmVjdGlvbiIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJoMSIsInAiLCJiIiwidmFyaWFudCIsInNpemUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "@mui/material/Button":
/*!***************************************!*\
  !*** external "@mui/material/Button" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Button");

/***/ }),

/***/ "ethers":
/*!*************************!*\
  !*** external "ethers" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("ethers");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@zk-kit/identity":
/*!***********************************!*\
  !*** external "@zk-kit/identity" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = import("@zk-kit/identity");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();