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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _zk_kit_identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @zk-kit/identity */ \"@zk-kit/identity\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ethers */ \"ethers\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Button */ \"@mui/material/Button\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_5__, _zk_kit_identity__WEBPACK_IMPORTED_MODULE_1__]);\n([react_toastify__WEBPACK_IMPORTED_MODULE_5__, _zk_kit_identity__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\nconst success = (message)=>{\n    react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.success(message, {\n        position: \"bottom-right\",\n        autoClose: 5000,\n        hideProgressBar: false,\n        closeOnClick: true,\n        pauseOnHover: true,\n        draggable: true,\n        progress: undefined\n    });\n};\nconst error = (message)=>{\n    react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.error(message, {\n        position: \"top-center\",\n        autoClose: 5000,\n        hideProgressBar: false,\n        closeOnClick: true,\n        pauseOnHover: true,\n        draggable: true,\n        progress: undefined\n    });\n};\nfunction Home() {\n    async function register() {\n        const message = \"Make me anonymous\";\n        if (typeof window.ethereum !== 'undefined') {\n            console.log('MetaMask is installed!');\n        }\n        await window.ethereum.request({\n            method: 'eth_requestAccounts'\n        });\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_2__.providers.Web3Provider(window.ethereum);\n        const signer = provider.getSigner();\n        const signature = await signer.signMessage(message);\n        const address = await signer.getAddress();\n        console.log({\n            signer,\n            signature,\n            address\n        });\n        const response = await fetch(`/api/register`, {\n            method: \"POST\",\n            headers: {\n                'Accept': 'application/json',\n                'Content-Type': 'application/json'\n            },\n            body: JSON.stringify({\n                signature: signature\n            })\n        });\n        const result = await response.json();\n        if (result[\"success\"]) {\n            success(\"User successfully Registerd\");\n        } else {\n            error(\"User Registration failed\");\n        }\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().container),\n        style: {\n            display: 'flex',\n            alignItems: 'center',\n            flexDirection: 'column'\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Greetings\"\n                    }, void 0, false, {\n                        fileName: \"/Users/0xrishabh/workspace/playground/zk-Oauth/pages/index.js\",\n                        lineNumber: 76,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"A simple Next.js/Hardhat privacy application with Semaphore.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/0xrishabh/workspace/playground/zk-Oauth/pages/index.js\",\n                        lineNumber: 77,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/0xrishabh/workspace/playground/zk-Oauth/pages/index.js\",\n                        lineNumber: 78,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/0xrishabh/workspace/playground/zk-Oauth/pages/index.js\",\n                lineNumber: 75,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_5__.ToastContainer, {}, void 0, false, {\n                fileName: \"/Users/0xrishabh/workspace/playground/zk-Oauth/pages/index.js\",\n                lineNumber: 80,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"ZK Oauth\"\n                }, void 0, false, {\n                    fileName: \"/Users/0xrishabh/workspace/playground/zk-Oauth/pages/index.js\",\n                    lineNumber: 82,\n                    columnNumber: 18\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/0xrishabh/workspace/playground/zk-Oauth/pages/index.js\",\n                lineNumber: 82,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \" Create your \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                            children: \"anonymous\"\n                        }, void 0, false, {\n                            fileName: \"/Users/0xrishabh/workspace/playground/zk-Oauth/pages/index.js\",\n                            lineNumber: 83,\n                            columnNumber: 30\n                        }, this),\n                        \" identity on \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                            children: \"blockchain\"\n                        }, void 0, false, {\n                            fileName: \"/Users/0xrishabh/workspace/playground/zk-Oauth/pages/index.js\",\n                            lineNumber: 83,\n                            columnNumber: 59\n                        }, this),\n                        \". \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/0xrishabh/workspace/playground/zk-Oauth/pages/index.js\",\n                    lineNumber: 83,\n                    columnNumber: 14\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/0xrishabh/workspace/playground/zk-Oauth/pages/index.js\",\n                lineNumber: 83,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_6___default()), {\n                    variant: \"outlined\",\n                    size: \"large\",\n                    className: \"register\",\n                    onClick: register,\n                    children: \" Register \"\n                }, void 0, false, {\n                    fileName: \"/Users/0xrishabh/workspace/playground/zk-Oauth/pages/index.js\",\n                    lineNumber: 84,\n                    columnNumber: 14\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/0xrishabh/workspace/playground/zk-Oauth/pages/index.js\",\n                lineNumber: 84,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/0xrishabh/workspace/playground/zk-Oauth/pages/index.js\",\n        lineNumber: 70,\n        columnNumber: 9\n    }, this));\n};\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBSTs7Z0dBQ0FnRCxDQUFLO2tDQUFDLENBQVM7Ozs7OztnR0FDZkMsQ0FBSTt3QkFBQ0MsSUFBSSxFQUFDLENBQWE7d0JBQUNDLE9BQU8sRUFBQyxDQUE4RDs7Ozs7O2dHQUM5RkMsQ0FBSTt3QkFBQ0MsR0FBRyxFQUFDLENBQU07d0JBQUNDLElBQUksRUFBQyxDQUFjOzs7Ozs7Ozs7Ozs7d0ZBRXZDbkQsMERBQWM7Ozs7O3dGQUVkc0MsQ0FBRztzR0FBRWMsQ0FBRTs4QkFBQyxDQUFROzs7Ozs7Ozs7Ozt3RkFDcEJkLENBQUc7c0dBQUVlLENBQUM7O3dCQUFDLENBQWE7b0dBQUNDLENBQUM7c0NBQUMsQ0FBUzs7Ozs7O3dCQUFJLENBQWE7b0dBQUNBLENBQUM7c0NBQUMsQ0FBVTs7Ozs7O3dCQUFJLENBQUU7Ozs7Ozs7Ozs7Ozt3RkFDcEVoQixDQUFHO3NHQUFFcEMsNkRBQU07b0JBQUNxRCxPQUFPLEVBQUMsQ0FBVTtvQkFBQ0MsSUFBSSxFQUFDLENBQU87b0JBQUNqQixTQUFTLEVBQUMsQ0FBVTtvQkFBQ2tCLE9BQU8sRUFBRTFDLFFBQVE7OEJBQUUsQ0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHdkcsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NlbWFwaG9yZS1ib2lsZXJwbGF0ZS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RyYXRlZ3ksIFprSWRlbnRpdHkgfSBmcm9tIFwiQHprLWtpdC9pZGVudGl0eVwiXG5cbmltcG9ydCB7IHByb3ZpZGVyc30gZnJvbSBcImV0aGVyc1wiXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lcix0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0J1dHRvbidcbmltcG9ydCAncmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzcyc7XG5cbmNvbnN0IHN1Y2Nlc3MgPSAobWVzc2FnZSkgPT4ge1xuICBcdCAgdG9hc3Quc3VjY2VzcyhtZXNzYWdlLCB7XG4gIFx0ICAgIHBvc2l0aW9uOiBcImJvdHRvbS1yaWdodFwiLFxuICBcdCAgICBhdXRvQ2xvc2U6IDUwMDAsXG4gIFx0ICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXG4gIFx0ICAgIGNsb3NlT25DbGljazogdHJ1ZSxcbiAgXHQgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxuICBcdCAgICBkcmFnZ2FibGU6IHRydWUsXG4gIFx0ICAgIHByb2dyZXNzOiB1bmRlZmluZWQsXG4gIFx0ICB9KTtcbiB9O1xuY29uc3QgZXJyb3IgPSAobWVzc2FnZSkgPT4ge1xuICB0b2FzdC5lcnJvcihtZXNzYWdlLCB7XG4gICAgcG9zaXRpb246IFwidG9wLWNlbnRlclwiLFxuICAgIGF1dG9DbG9zZTogNTAwMCxcbiAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxuICAgIGNsb3NlT25DbGljazogdHJ1ZSxcbiAgICBwYXVzZU9uSG92ZXI6IHRydWUsXG4gICAgZHJhZ2dhYmxlOiB0cnVlLFxuICAgIHByb2dyZXNzOiB1bmRlZmluZWQsXG4gIH0pO1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICAgIGFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyKCl7XG4gICAgICBjb25zdCBtZXNzYWdlID0gXCJNYWtlIG1lIGFub255bW91c1wiXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5ldGhlcmV1bSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ01ldGFNYXNrIGlzIGluc3RhbGxlZCEnKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6ICdldGhfcmVxdWVzdEFjY291bnRzJyB9KTtcbiAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IHByb3ZpZGVycy5XZWIzUHJvdmlkZXIod2luZG93LmV0aGVyZXVtKVxuICAgICAgY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKClcbiAgICAgIGNvbnN0IHNpZ25hdHVyZSA9IGF3YWl0IHNpZ25lci5zaWduTWVzc2FnZShtZXNzYWdlKVxuICAgICAgY29uc3QgYWRkcmVzcyA9IGF3YWl0IHNpZ25lci5nZXRBZGRyZXNzKClcbiAgICAgIGNvbnNvbGUubG9nKHsgc2lnbmVyLCBzaWduYXR1cmUsIGFkZHJlc3MgfSlcblxuXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvYXBpL3JlZ2lzdGVyYCwge1xuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICB9LFxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIHNpZ25hdHVyZTogc2lnbmF0dXJlXG4gICAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICAgIFxuICAgICAgaWYocmVzdWx0W1wic3VjY2Vzc1wiXSl7XG4gICAgICBcdHN1Y2Nlc3MoXCJVc2VyIHN1Y2Nlc3NmdWxseSBSZWdpc3RlcmRcIilcdFxuICAgICAgfSBlbHNlIHtcbiAgICAgIFx0ZXJyb3IoXCJVc2VyIFJlZ2lzdHJhdGlvbiBmYWlsZWRcIilcbiAgICAgIH1cbiAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9IHN0eWxlPXt7XG4gICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICB9fT5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5HcmVldGluZ3M8L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJBIHNpbXBsZSBOZXh0LmpzL0hhcmRoYXQgcHJpdmFjeSBhcHBsaWNhdGlvbiB3aXRoIFNlbWFwaG9yZS5cIiAvPlxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxUb2FzdENvbnRhaW5lci8+XG5cbiAgICAgICAgICAgIDxkaXY+PGgxPlpLIE9hdXRoPC9oMT48L2Rpdj5cbiAgICAgICAgPGRpdj48cD4gQ3JlYXRlIHlvdXIgPGI+YW5vbnltb3VzPC9iPiBpZGVudGl0eSBvbiA8Yj5ibG9ja2NoYWluPC9iPi4gPC9wPjwvZGl2PlxuICAgICAgICA8ZGl2PjxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVkXCIgc2l6ZT1cImxhcmdlXCIgY2xhc3NOYW1lPSdyZWdpc3Rlcicgb25DbGljaz17cmVnaXN0ZXJ9PiBSZWdpc3RlciA8L0J1dHRvbj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbn1cbiJdLCJuYW1lcyI6WyJTdHJhdGVneSIsIlprSWRlbnRpdHkiLCJwcm92aWRlcnMiLCJIZWFkIiwiUmVhY3QiLCJzdHlsZXMiLCJUb2FzdENvbnRhaW5lciIsInRvYXN0IiwiQnV0dG9uIiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJwb3NpdGlvbiIsImF1dG9DbG9zZSIsImhpZGVQcm9ncmVzc0JhciIsImNsb3NlT25DbGljayIsInBhdXNlT25Ib3ZlciIsImRyYWdnYWJsZSIsInByb2dyZXNzIiwidW5kZWZpbmVkIiwiZXJyb3IiLCJIb21lIiwicmVnaXN0ZXIiLCJ3aW5kb3ciLCJldGhlcmV1bSIsImNvbnNvbGUiLCJsb2ciLCJyZXF1ZXN0IiwibWV0aG9kIiwicHJvdmlkZXIiLCJXZWIzUHJvdmlkZXIiLCJzaWduZXIiLCJnZXRTaWduZXIiLCJzaWduYXR1cmUiLCJzaWduTWVzc2FnZSIsImFkZHJlc3MiLCJnZXRBZGRyZXNzIiwicmVzcG9uc2UiLCJmZXRjaCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3VsdCIsImpzb24iLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJzdHlsZSIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiZmxleERpcmVjdGlvbiIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJoMSIsInAiLCJiIiwidmFyaWFudCIsInNpemUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./node_modules/react-toastify/dist/ReactToastify.css":
/*!************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.css ***!
  \************************************************************/
/***/ (() => {



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

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();