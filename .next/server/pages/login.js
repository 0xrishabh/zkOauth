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
exports.id = "pages/login";
exports.ids = ["pages/login"];
exports.modules = {

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__bCOhY\",\n\t\"main\": \"Home_main__nLjiQ\",\n\t\"logs\": \"Home_logs__xVKJb\",\n\t\"button\": \"Home_button__Zs7A2\",\n\t\"title\": \"Home_title__T09hD\",\n\t\"description\": \"Home_description__41Owk\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NlbWFwaG9yZS1ib2lsZXJwbGF0ZS8uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3M/NzEyNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJIb21lX2NvbnRhaW5lcl9fYkNPaFlcIixcblx0XCJtYWluXCI6IFwiSG9tZV9tYWluX19uTGppUVwiLFxuXHRcImxvZ3NcIjogXCJIb21lX2xvZ3NfX3hWS0piXCIsXG5cdFwiYnV0dG9uXCI6IFwiSG9tZV9idXR0b25fX1pzN0EyXCIsXG5cdFwidGl0bGVcIjogXCJIb21lX3RpdGxlX19UMDloRFwiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiSG9tZV9kZXNjcmlwdGlvbl9fNDFPd2tcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Button */ \"@mui/material/Button\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"ethers\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _zk_kit_identity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @zk-kit/identity */ \"@zk-kit/identity?7b1d\");\n/* harmony import */ var _zk_kit_protocols__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @zk-kit/protocols */ \"@zk-kit/protocols\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_8__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_7__, _zk_kit_protocols__WEBPACK_IMPORTED_MODULE_6__, _zk_kit_identity__WEBPACK_IMPORTED_MODULE_5__]);\n([react_toastify__WEBPACK_IMPORTED_MODULE_7__, _zk_kit_protocols__WEBPACK_IMPORTED_MODULE_6__, _zk_kit_identity__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\n\nconst success = (message)=>{\n    react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.success(message, {\n        position: \"bottom-right\",\n        autoClose: 5000,\n        hideProgressBar: false,\n        closeOnClick: true,\n        pauseOnHover: true,\n        draggable: true,\n        progress: undefined\n    });\n};\nconst error = (message)=>{\n    react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.error(message, {\n        position: \"top-center\",\n        autoClose: 5000,\n        hideProgressBar: false,\n        closeOnClick: true,\n        pauseOnHover: true,\n        draggable: true,\n        progress: undefined\n    });\n};\nasync function getAllMembers() {\n    let response = await fetch(\"/api/members\");\n    let result = await response.json();\n    return result[\"members\"];\n}\nasync function login(redirect_url) {\n    const message = \"Make me anonymous\";\n    await window.ethereum.request({\n        method: 'eth_requestAccounts'\n    });\n    const provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.providers.Web3Provider(window.ethereum);\n    const signer = provider.getSigner();\n    const signature = await signer.signMessage(message);\n    const address = await signer.getAddress();\n    const identity = new _zk_kit_identity__WEBPACK_IMPORTED_MODULE_5__.ZkIdentity(_zk_kit_identity__WEBPACK_IMPORTED_MODULE_5__.Strategy.MESSAGE, signature);\n    const identityCommitment = identity.genIdentityCommitment();\n    const identityCommitments = await getAllMembers(identityCommitment);\n    console.log(identityCommitments);\n    try {\n        const merkleProof = (0,_zk_kit_protocols__WEBPACK_IMPORTED_MODULE_6__.generateMerkleProof)(20, 0, identityCommitments, identityCommitment);\n        const signal = \"Login into\";\n        const nullifier = BigInt(Math.floor(Math.random() * 2 ** 256 + 1));\n        const externalNullifier = _zk_kit_protocols__WEBPACK_IMPORTED_MODULE_6__.Semaphore.genNullifierHash((0,_zk_kit_protocols__WEBPACK_IMPORTED_MODULE_6__.genExternalNullifier)(nullifier), identity.getNullifier());\n        const witness = _zk_kit_protocols__WEBPACK_IMPORTED_MODULE_6__.Semaphore.genWitness(identity.getTrapdoor(), identity.getNullifier(), merkleProof, externalNullifier, signal);\n        const { proof , publicSignals  } = await _zk_kit_protocols__WEBPACK_IMPORTED_MODULE_6__.Semaphore.genProof(witness, \"./semaphore.wasm\", \"./semaphore.zkey\");\n        const solidityProof = _zk_kit_protocols__WEBPACK_IMPORTED_MODULE_6__.Semaphore.packToSolidityProof(proof);\n        let response = await fetch(\"/api/login\", {\n            method: \"POST\",\n            headers: {\n                'Accept': 'application/json',\n                'Content-Type': 'application/json'\n            },\n            body: JSON.stringify({\n                signedMessage: signature,\n                signal: signal,\n                root: merkleProof.root.toString(),\n                nullifierHash: publicSignals.nullifierHash.toString(),\n                externalNullifier: publicSignals.externalNullifier.toString(),\n                proof: solidityProof\n            })\n        });\n        let result = await response.json();\n        console.log(result);\n        if (result[\"success\"]) {\n            success(\"Redirecting...\");\n            window.location = `${redirect_url}?token=${result[\"token\"]}`;\n        } else {\n            error(\"Error Occured\");\n        }\n    } catch (err) {\n        console.log(err);\n        return false;\n    }\n}\nfunction Login() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    console.log(router.query);\n    const client_name = router.query[\"client_name\"];\n    const redirect_url = router.query[\"redirect_url\"];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().container),\n        style: {\n            display: 'flex',\n            alignItems: 'center',\n            flexDirection: 'column'\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: [\n                        \"Login @\",\n                        client_name\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/0xrishabh/workspace/playground/zk-Oauth/pages/login.js\",\n                    lineNumber: 116,\n                    columnNumber: 14\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/0xrishabh/workspace/playground/zk-Oauth/pages/login.js\",\n                lineNumber: 116,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    variant: \"outlined\",\n                    size: \"large\",\n                    className: \"register\",\n                    onClick: ()=>{\n                        login(redirect_url);\n                    },\n                    children: \"Login\"\n                }, void 0, false, {\n                    fileName: \"/Users/0xrishabh/workspace/playground/zk-Oauth/pages/login.js\",\n                    lineNumber: 118,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/0xrishabh/workspace/playground/zk-Oauth/pages/login.js\",\n                lineNumber: 117,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_7__.ToastContainer, {}, void 0, false, {\n                fileName: \"/Users/0xrishabh/workspace/playground/zk-Oauth/pages/login.js\",\n                lineNumber: 126,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/0xrishabh/workspace/playground/zk-Oauth/pages/login.js\",\n        lineNumber: 111,\n        columnNumber: 9\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0pKLEtBQUssQ0FBQyxDQUFlO1FBQ3pCLENBQUM7SUFDTCxDQUFDLENBQUMsS0FBSyxFQUFFc0QsR0FBRyxFQUFFLENBQUM7UUFDWDdCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDNEIsR0FBRztRQUNmLE1BQU0sQ0FBQyxLQUFLO0lBQ2hCLENBQUM7QUFJTCxDQUFDO1NBRVFDLEtBQUssR0FBRSxDQUFDO0lBQ2IsS0FBSyxDQUFDQyxNQUFNLEdBQUcvRSxzREFBUztJQUN4QmdELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDOEIsTUFBTSxDQUFDQyxLQUFLO0lBQ3hCLEtBQUssQ0FBQ0MsV0FBVyxHQUFHRixNQUFNLENBQUNDLEtBQUssQ0FBQyxDQUFhO0lBQzlDLEtBQUssQ0FBQ2xELFlBQVksR0FBR2lELE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLENBQWM7SUFFaEQsTUFBTSw2RUFDREUsQ0FBRztRQUFDQyxTQUFTLEVBQUV6RSwwRUFBZ0I7UUFBRTJFLEtBQUssRUFBRSxDQUFDO1lBQ3RDQyxPQUFPLEVBQUUsQ0FBTTtZQUNmQyxVQUFVLEVBQUUsQ0FBUTtZQUNwQkMsYUFBYSxFQUFFLENBQVE7UUFDekIsQ0FBQzs7d0ZBQ0ZOLENBQUc7c0dBQUVPLENBQUU7O3dCQUFDLENBQU87d0JBQUNSLFdBQVc7Ozs7Ozs7Ozs7Ozt3RkFDM0JDLENBQUc7c0dBQ0NqRiw2REFBTTtvQkFDSHlGLE9BQU8sRUFBQyxDQUFVO29CQUNsQkMsSUFBSSxFQUFDLENBQU87b0JBQ1pSLFNBQVMsRUFBQyxDQUFVO29CQUNwQlMsT0FBTyxNQUFNLENBQUMvRDt3QkFBQUEsS0FBSyxDQUFDQyxZQUFZO29CQUFDLENBQUM7OEJBQUUsQ0FFeEM7Ozs7Ozs7Ozs7O3dGQUVIbkIsMERBQWM7Ozs7Ozs7Ozs7O0FBR3ZCLENBQUM7QUFDRCxpRUFBZW1FLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZW1hcGhvcmUtYm9pbGVycGxhdGUvLi9wYWdlcy9sb2dpbi5qcz84MWIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU2VhcmNoUGFyYW1zfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQnV0dG9uJ1xuaW1wb3J0IHsgcHJvdmlkZXJzLENvbnRyYWN0LCB1dGlscyB9IGZyb20gXCJldGhlcnNcIlxuaW1wb3J0IHsgU3RyYXRlZ3ksIFprSWRlbnRpdHkgfSBmcm9tIFwiQHprLWtpdC9pZGVudGl0eVwiXG5pbXBvcnQgeyBnZW5lcmF0ZU1lcmtsZVByb29mLGdlbkV4dGVybmFsTnVsbGlmaWVyLCBTZW1hcGhvcmUgfSBmcm9tIFwiQHprLWtpdC9wcm90b2NvbHNcIlxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciwgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5pbXBvcnQgJ3JlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3MnO1xuY29uc3Qgc3VjY2VzcyA9IChtZXNzYWdlKSA9PiB7XG5cdHRvYXN0LnN1Y2Nlc3MobWVzc2FnZSwge1xuXHQgIHBvc2l0aW9uOiBcImJvdHRvbS1yaWdodFwiLFxuXHQgIGF1dG9DbG9zZTogNTAwMCxcblx0ICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxuXHQgIGNsb3NlT25DbGljazogdHJ1ZSxcblx0ICBwYXVzZU9uSG92ZXI6IHRydWUsXG5cdCAgZHJhZ2dhYmxlOiB0cnVlLFxuXHQgIHByb2dyZXNzOiB1bmRlZmluZWQsXG5cdH0pO1xufTtcbmNvbnN0IGVycm9yID0gKG1lc3NhZ2UpID0+IHtcblx0dG9hc3QuZXJyb3IobWVzc2FnZSwge1xuXHQgIHBvc2l0aW9uOiBcInRvcC1jZW50ZXJcIixcblx0ICBhdXRvQ2xvc2U6IDUwMDAsXG5cdCAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcblx0ICBjbG9zZU9uQ2xpY2s6IHRydWUsXG5cdCAgcGF1c2VPbkhvdmVyOiB0cnVlLFxuXHQgIGRyYWdnYWJsZTogdHJ1ZSxcblx0ICBwcm9ncmVzczogdW5kZWZpbmVkLFxuXHR9KTtcbn07XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEFsbE1lbWJlcnMoKXtcbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvbWVtYmVyc1wiKVxuICAgIGxldCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICByZXR1cm4gcmVzdWx0W1wibWVtYmVyc1wiXVxufVxuYXN5bmMgZnVuY3Rpb24gbG9naW4ocmVkaXJlY3RfdXJsKXtcbiAgICBjb25zdCBtZXNzYWdlID0gXCJNYWtlIG1lIGFub255bW91c1wiXG4gICAgYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6ICdldGhfcmVxdWVzdEFjY291bnRzJyB9KTtcbiAgICBjb25zdCBwcm92aWRlciA9IG5ldyBwcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHdpbmRvdy5ldGhlcmV1bSlcbiAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKVxuICAgIGNvbnN0IHNpZ25hdHVyZSA9IGF3YWl0IHNpZ25lci5zaWduTWVzc2FnZShtZXNzYWdlKVxuICAgIGNvbnN0IGFkZHJlc3MgPSBhd2FpdCBzaWduZXIuZ2V0QWRkcmVzcygpXG5cblxuICAgIGNvbnN0IGlkZW50aXR5ID0gbmV3IFprSWRlbnRpdHkoU3RyYXRlZ3kuTUVTU0FHRSwgc2lnbmF0dXJlKVxuICAgIGNvbnN0IGlkZW50aXR5Q29tbWl0bWVudCA9IGlkZW50aXR5LmdlbklkZW50aXR5Q29tbWl0bWVudCgpXG4gICAgY29uc3QgaWRlbnRpdHlDb21taXRtZW50cyA9IGF3YWl0IGdldEFsbE1lbWJlcnMoaWRlbnRpdHlDb21taXRtZW50KVxuICAgIGNvbnNvbGUubG9nKGlkZW50aXR5Q29tbWl0bWVudHMpXG4gICAgdHJ5e1xuICAgICAgICBjb25zdCBtZXJrbGVQcm9vZiA9IGdlbmVyYXRlTWVya2xlUHJvb2YoXG4gICAgICAgICAgICAyMCwgXG4gICAgICAgICAgICAwLCBcbiAgICAgICAgICAgIGlkZW50aXR5Q29tbWl0bWVudHMsIFxuICAgICAgICAgICAgaWRlbnRpdHlDb21taXRtZW50XG4gICAgICAgIClcblxuICAgICAgICBjb25zdCBzaWduYWwgPSBcIkxvZ2luIGludG9cIlxuICAgICAgICBjb25zdCBudWxsaWZpZXIgPSBCaWdJbnQoTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDIqKjI1NikgKyAxKSk7XG4gICAgICAgIGNvbnN0IGV4dGVybmFsTnVsbGlmaWVyID0gU2VtYXBob3JlLmdlbk51bGxpZmllckhhc2goZ2VuRXh0ZXJuYWxOdWxsaWZpZXIobnVsbGlmaWVyKSwgaWRlbnRpdHkuZ2V0TnVsbGlmaWVyKCkpXG4gICAgICAgIGNvbnN0IHdpdG5lc3MgPSBTZW1hcGhvcmUuZ2VuV2l0bmVzcyhcbiAgICAgICAgICAgIGlkZW50aXR5LmdldFRyYXBkb29yKCksXG4gICAgICAgICAgICBpZGVudGl0eS5nZXROdWxsaWZpZXIoKSxcbiAgICAgICAgICAgIG1lcmtsZVByb29mLFxuICAgICAgICAgICAgZXh0ZXJuYWxOdWxsaWZpZXIsXG4gICAgICAgICAgICBzaWduYWxcbiAgICAgICAgKSAgIFxuICAgICAgICBjb25zdCB7IHByb29mLCBwdWJsaWNTaWduYWxzIH0gPSBhd2FpdCBTZW1hcGhvcmUuZ2VuUHJvb2Yod2l0bmVzcywgXCIuL3NlbWFwaG9yZS53YXNtXCIsIFwiLi9zZW1hcGhvcmUuemtleVwiKVxuICAgICAgICBjb25zdCBzb2xpZGl0eVByb29mID0gU2VtYXBob3JlLnBhY2tUb1NvbGlkaXR5UHJvb2YocHJvb2YpXG4gICAgICAgIFxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvbG9naW5cIix7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBzaWduZWRNZXNzYWdlOiBzaWduYXR1cmUsXG4gICAgICAgICAgICAgICAgc2lnbmFsOiBzaWduYWwsXG4gICAgICAgICAgICAgICAgcm9vdDogbWVya2xlUHJvb2Yucm9vdC50b1N0cmluZygpLFxuICAgICAgICAgICAgICAgIG51bGxpZmllckhhc2g6IHB1YmxpY1NpZ25hbHMubnVsbGlmaWVySGFzaC50b1N0cmluZygpLFxuICAgICAgICAgICAgICAgIGV4dGVybmFsTnVsbGlmaWVyOiBwdWJsaWNTaWduYWxzLmV4dGVybmFsTnVsbGlmaWVyLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgcHJvb2Y6IHNvbGlkaXR5UHJvb2ZcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxuICAgICAgICBpZihyZXN1bHRbXCJzdWNjZXNzXCJdKXtcbiAgICAgICAgICAgIHN1Y2Nlc3MoXCJSZWRpcmVjdGluZy4uLlwiKVxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gYCR7cmVkaXJlY3RfdXJsfT90b2tlbj0ke3Jlc3VsdFtcInRva2VuXCJdfWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVycm9yKFwiRXJyb3IgT2NjdXJlZFwiKVxuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIFxuICAgIFxuXG59XG5cbmZ1bmN0aW9uIExvZ2luKCl7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc29sZS5sb2cocm91dGVyLnF1ZXJ5KVxuICAgIGNvbnN0IGNsaWVudF9uYW1lID0gcm91dGVyLnF1ZXJ5W1wiY2xpZW50X25hbWVcIl1cbiAgICBjb25zdCByZWRpcmVjdF91cmwgPSByb3V0ZXIucXVlcnlbXCJyZWRpcmVjdF91cmxcIl1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfSBzdHlsZT17e1xuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgICB9fT5cbiAgICAgICAgPGRpdj48aDE+TG9naW4gQHtjbGllbnRfbmFtZX08L2gxPjwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEJ1dHRvbiBcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIiBcbiAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIiBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3JlZ2lzdGVyJyBcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+e2xvZ2luKHJlZGlyZWN0X3VybCl9fT4gXG4gICAgICAgICAgICAgICAgTG9naW4gXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxUb2FzdENvbnRhaW5lci8+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbmV4cG9ydCBkZWZhdWx0IExvZ2luXG4iXSwibmFtZXMiOlsidXNlU2VhcmNoUGFyYW1zIiwidXNlUm91dGVyIiwiQnV0dG9uIiwicHJvdmlkZXJzIiwiQ29udHJhY3QiLCJ1dGlscyIsIlN0cmF0ZWd5IiwiWmtJZGVudGl0eSIsImdlbmVyYXRlTWVya2xlUHJvb2YiLCJnZW5FeHRlcm5hbE51bGxpZmllciIsIlNlbWFwaG9yZSIsInN0eWxlcyIsIlRvYXN0Q29udGFpbmVyIiwidG9hc3QiLCJzdWNjZXNzIiwibWVzc2FnZSIsInBvc2l0aW9uIiwiYXV0b0Nsb3NlIiwiaGlkZVByb2dyZXNzQmFyIiwiY2xvc2VPbkNsaWNrIiwicGF1c2VPbkhvdmVyIiwiZHJhZ2dhYmxlIiwicHJvZ3Jlc3MiLCJ1bmRlZmluZWQiLCJlcnJvciIsImdldEFsbE1lbWJlcnMiLCJyZXNwb25zZSIsImZldGNoIiwicmVzdWx0IiwianNvbiIsImxvZ2luIiwicmVkaXJlY3RfdXJsIiwid2luZG93IiwiZXRoZXJldW0iLCJyZXF1ZXN0IiwibWV0aG9kIiwicHJvdmlkZXIiLCJXZWIzUHJvdmlkZXIiLCJzaWduZXIiLCJnZXRTaWduZXIiLCJzaWduYXR1cmUiLCJzaWduTWVzc2FnZSIsImFkZHJlc3MiLCJnZXRBZGRyZXNzIiwiaWRlbnRpdHkiLCJNRVNTQUdFIiwiaWRlbnRpdHlDb21taXRtZW50IiwiZ2VuSWRlbnRpdHlDb21taXRtZW50IiwiaWRlbnRpdHlDb21taXRtZW50cyIsImNvbnNvbGUiLCJsb2ciLCJtZXJrbGVQcm9vZiIsInNpZ25hbCIsIm51bGxpZmllciIsIkJpZ0ludCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImV4dGVybmFsTnVsbGlmaWVyIiwiZ2VuTnVsbGlmaWVySGFzaCIsImdldE51bGxpZmllciIsIndpdG5lc3MiLCJnZW5XaXRuZXNzIiwiZ2V0VHJhcGRvb3IiLCJwcm9vZiIsInB1YmxpY1NpZ25hbHMiLCJnZW5Qcm9vZiIsInNvbGlkaXR5UHJvb2YiLCJwYWNrVG9Tb2xpZGl0eVByb29mIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwic2lnbmVkTWVzc2FnZSIsInJvb3QiLCJ0b1N0cmluZyIsIm51bGxpZmllckhhc2giLCJsb2NhdGlvbiIsImVyciIsIkxvZ2luIiwicm91dGVyIiwicXVlcnkiLCJjbGllbnRfbmFtZSIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInN0eWxlIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJmbGV4RGlyZWN0aW9uIiwiaDEiLCJ2YXJpYW50Iiwic2l6ZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/login.js\n");

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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@zk-kit/identity?7b1d":
/*!***********************************!*\
  !*** external "@zk-kit/identity" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = import("@zk-kit/identity");;

/***/ }),

/***/ "@zk-kit/protocols":
/*!************************************!*\
  !*** external "@zk-kit/protocols" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@zk-kit/protocols");;

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
var __webpack_exports__ = (__webpack_exec__("./pages/login.js"));
module.exports = __webpack_exports__;

})();