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
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Button */ \"@mui/material/Button\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ \"ethers\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _zk_kit_identity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @zk-kit/identity */ \"@zk-kit/identity\");\n/* harmony import */ var _zk_kit_protocols__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @zk-kit/protocols */ \"@zk-kit/protocols\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_zk_kit_protocols__WEBPACK_IMPORTED_MODULE_7__, _zk_kit_identity__WEBPACK_IMPORTED_MODULE_6__]);\n([_zk_kit_protocols__WEBPACK_IMPORTED_MODULE_7__, _zk_kit_identity__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\nasync function getAllMembers(id) {\n    let response = await fetch(\"http://localhost:8000/getAllLeaves\");\n    let result = await response.json();\n    return result[\"leaves\"];\n}\nasync function login() {\n    const message = \"Make me anonymous\";\n    await window.ethereum.request({\n        method: 'eth_requestAccounts'\n    });\n    const provider = new ethers__WEBPACK_IMPORTED_MODULE_5__.providers.Web3Provider(window.ethereum);\n    const signer = provider.getSigner();\n    const signature = await signer.signMessage(message);\n    const address = await signer.getAddress();\n    const identity = new _zk_kit_identity__WEBPACK_IMPORTED_MODULE_6__.ZkIdentity(_zk_kit_identity__WEBPACK_IMPORTED_MODULE_6__.Strategy.MESSAGE, signature);\n    const identityCommitment = identity.genIdentityCommitment();\n    const identityCommitments = await getAllMembers(identityCommitment);\n    const indexIdentityCommitment = identityCommitments.indexOf(identityCommitment);\n    const merkleProof = (0,_zk_kit_protocols__WEBPACK_IMPORTED_MODULE_7__.generateMerkleProof)(20, 0, identityCommitments, identityCommitment);\n    const signal = \"Login into\";\n    let externalNullifier = BigInt(Math.floor(Math.random() * 2 ** 256 + 1));\n    const witness = _zk_kit_protocols__WEBPACK_IMPORTED_MODULE_7__.Semaphore.genWitness(identity.getTrapdoor(), identity.getNullifier(), merkleProof, merkleProof.root, signal);\n    const { proof , publicSignals  } = await _zk_kit_protocols__WEBPACK_IMPORTED_MODULE_7__.Semaphore.genProof(witness, \"./semaphore.wasm\", \"./semaphore.zkey\");\n    const solidityProof = _zk_kit_protocols__WEBPACK_IMPORTED_MODULE_7__.Semaphore.packToSolidityProof(proof);\n    let root = merkleProof.root.toString();\n    let nullifierHash = publicSignals.nullifierHash;\n    let response = await fetch(\"http://localhost:8000/login\", {\n        method: \"POST\",\n        headers: {\n            'Accept': 'application/json',\n            'Content-Type': 'application/json'\n        },\n        body: JSON.stringify({\n            signal: signal,\n            root: merkleProof.root.toString(),\n            nullifierHash: publicSignals.nullifierHash.toString(),\n            externalNullifier: publicSignals.externalNullifier.toString(),\n            proof: solidityProof\n        })\n    });\n    let result = await response.json();\n    if (result[\"sucess\"]) {\n        window.location = `http://3rdpartywebsite.one/?commitmentId=${identityCommitment}`;\n    }\n}\nfunction Login() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().container),\n        style: {\n            display: 'flex',\n            alignItems: 'center',\n            flexDirection: 'column'\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Login with @\"\n                }, void 0, false, {\n                    fileName: \"/Users/0xrishabh/workspace/playground/zk-Oauth/pages/login.js\",\n                    lineNumber: 81,\n                    columnNumber: 14\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/0xrishabh/workspace/playground/zk-Oauth/pages/login.js\",\n                lineNumber: 81,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    variant: \"outlined\",\n                    size: \"large\",\n                    className: \"register\",\n                    onClick: login,\n                    children: \" Login \"\n                }, void 0, false, {\n                    fileName: \"/Users/0xrishabh/workspace/playground/zk-Oauth/pages/login.js\",\n                    lineNumber: 83,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/0xrishabh/workspace/playground/zk-Oauth/pages/login.js\",\n                lineNumber: 82,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/0xrishabh/workspace/playground/zk-Oauth/pages/login.js\",\n        lineNumber: 76,\n        columnNumber: 9\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q00sUUFBUTtZQUMvQkMsYUFBYSxFQUFFTCxhQUFhLENBQUNLLGFBQWEsQ0FBQ0QsUUFBUTtZQUNuRGYsaUJBQWlCLEVBQUVXLGFBQWEsQ0FBQ1gsaUJBQWlCLENBQUNlLFFBQVE7WUFDM0RMLEtBQUssRUFBRUcsYUFBYTtRQUN4QixDQUFDO0lBQ0wsQ0FBQztJQUNELEdBQUcsQ0FBQ3RDLE1BQU0sR0FBRyxLQUFLLENBQUNGLFFBQVEsQ0FBQ0csSUFBSTtJQUNoQyxFQUFFLEVBQUNELE1BQU0sQ0FBQyxDQUFRLFVBQUUsQ0FBQztRQUNqQkksTUFBTSxDQUFDMEMsUUFBUSxJQUFJLHlDQUF5QyxFQUFFNUIsa0JBQWtCO0lBQ3BGLENBQUM7QUFHTCxDQUFDO1NBRVE2QixLQUFLLEdBQUUsQ0FBQztJQUNiLE1BQU0sNkVBQ0RDLENBQUc7UUFBQ0MsU0FBUyxFQUFFdEQsMEVBQWdCO1FBQUV3RCxLQUFLLEVBQUUsQ0FBQztZQUN0Q0MsT0FBTyxFQUFFLENBQU07WUFDZkMsVUFBVSxFQUFFLENBQVE7WUFDcEJDLGFBQWEsRUFBRSxDQUFRO1FBQ3pCLENBQUM7O3dGQUNGTixDQUFHO3NHQUFFTyxDQUFFOzhCQUFDLENBQVk7Ozs7Ozs7Ozs7O3dGQUNwQlAsQ0FBRztzR0FDQzdELDZEQUFNO29CQUFDcUUsT0FBTyxFQUFDLENBQVU7b0JBQUNDLElBQUksRUFBQyxDQUFPO29CQUFDUixTQUFTLEVBQUMsQ0FBVTtvQkFBQ1MsT0FBTyxFQUFFeEQsS0FBSzs4QkFBRSxDQUFPOzs7Ozs7Ozs7Ozs7Ozs7OztBQUloRyxDQUFDO0FBQ0QsaUVBQWU2QyxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2VtYXBob3JlLWJvaWxlcnBsYXRlLy4vcGFnZXMvbG9naW4uanM/ODFiMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVBhcmFtfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBmcyBmcm9tICdmcyc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQnV0dG9uJ1xuaW1wb3J0IHsgcHJvdmlkZXJzLENvbnRyYWN0LCB1dGlscyB9IGZyb20gXCJldGhlcnNcIlxuaW1wb3J0IHsgU3RyYXRlZ3ksIFprSWRlbnRpdHkgfSBmcm9tIFwiQHprLWtpdC9pZGVudGl0eVwiXG5pbXBvcnQgeyBnZW5lcmF0ZU1lcmtsZVByb29mLCBTZW1hcGhvcmUgfSBmcm9tIFwiQHprLWtpdC9wcm90b2NvbHNcIlxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiXG5cbmFzeW5jIGZ1bmN0aW9uIGdldEFsbE1lbWJlcnMoaWQpe1xuICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL2dldEFsbExlYXZlc1wiKVxuICAgIGxldCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICByZXR1cm4gcmVzdWx0W1wibGVhdmVzXCJdXG59XG5hc3luYyBmdW5jdGlvbiBsb2dpbigpe1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBcIk1ha2UgbWUgYW5vbnltb3VzXCJcbiAgICBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogJ2V0aF9yZXF1ZXN0QWNjb3VudHMnIH0pO1xuICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IHByb3ZpZGVycy5XZWIzUHJvdmlkZXIod2luZG93LmV0aGVyZXVtKVxuICAgIGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpXG4gICAgY29uc3Qgc2lnbmF0dXJlID0gYXdhaXQgc2lnbmVyLnNpZ25NZXNzYWdlKG1lc3NhZ2UpXG4gICAgY29uc3QgYWRkcmVzcyA9IGF3YWl0IHNpZ25lci5nZXRBZGRyZXNzKClcblxuXG4gICAgY29uc3QgaWRlbnRpdHkgPSBuZXcgWmtJZGVudGl0eShTdHJhdGVneS5NRVNTQUdFLCBzaWduYXR1cmUpXG4gICAgY29uc3QgaWRlbnRpdHlDb21taXRtZW50ID0gaWRlbnRpdHkuZ2VuSWRlbnRpdHlDb21taXRtZW50KClcbiAgICBjb25zdCBpZGVudGl0eUNvbW1pdG1lbnRzID0gYXdhaXQgZ2V0QWxsTWVtYmVycyhpZGVudGl0eUNvbW1pdG1lbnQpXG4gICAgY29uc3QgaW5kZXhJZGVudGl0eUNvbW1pdG1lbnQgPSBpZGVudGl0eUNvbW1pdG1lbnRzLmluZGV4T2YoaWRlbnRpdHlDb21taXRtZW50KVxuXG4gICAgY29uc3QgbWVya2xlUHJvb2YgPSBnZW5lcmF0ZU1lcmtsZVByb29mKFxuICAgICAgICAyMCwgXG4gICAgICAgIDAsIFxuICAgICAgICBpZGVudGl0eUNvbW1pdG1lbnRzLCBcbiAgICAgICAgaWRlbnRpdHlDb21taXRtZW50XG4gICAgKVxuXG4gICAgY29uc3Qgc2lnbmFsID0gXCJMb2dpbiBpbnRvXCJcbiAgICBsZXQgZXh0ZXJuYWxOdWxsaWZpZXIgPSBCaWdJbnQoTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDIqKjI1NikgKyAxKSlcbiAgICBjb25zdCB3aXRuZXNzID0gU2VtYXBob3JlLmdlbldpdG5lc3MoXG4gICAgICAgIGlkZW50aXR5LmdldFRyYXBkb29yKCksXG4gICAgICAgIGlkZW50aXR5LmdldE51bGxpZmllcigpLFxuICAgICAgICBtZXJrbGVQcm9vZixcbiAgICAgICAgbWVya2xlUHJvb2Yucm9vdCxcbiAgICAgICAgc2lnbmFsXG4gICAgKVxuXG4gICAgY29uc3QgeyBwcm9vZiwgcHVibGljU2lnbmFscyB9ID0gYXdhaXQgU2VtYXBob3JlLmdlblByb29mKHdpdG5lc3MsIFwiLi9zZW1hcGhvcmUud2FzbVwiLCBcIi4vc2VtYXBob3JlLnprZXlcIilcbiAgICBjb25zdCBzb2xpZGl0eVByb29mID0gU2VtYXBob3JlLnBhY2tUb1NvbGlkaXR5UHJvb2YocHJvb2YpXG4gICAgbGV0IHJvb3QgPSBtZXJrbGVQcm9vZi5yb290LnRvU3RyaW5nKClcbiAgICBsZXQgbnVsbGlmaWVySGFzaCA9IHB1YmxpY1NpZ25hbHMubnVsbGlmaWVySGFzaFxuICAgIFxuICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL2xvZ2luXCIse1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBzaWduYWw6IHNpZ25hbCxcbiAgICAgICAgICAgIHJvb3Q6IG1lcmtsZVByb29mLnJvb3QudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIG51bGxpZmllckhhc2g6IHB1YmxpY1NpZ25hbHMubnVsbGlmaWVySGFzaC50b1N0cmluZygpLFxuICAgICAgICAgICAgZXh0ZXJuYWxOdWxsaWZpZXI6IHB1YmxpY1NpZ25hbHMuZXh0ZXJuYWxOdWxsaWZpZXIudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIHByb29mOiBzb2xpZGl0eVByb29mXG4gICAgICAgIH0pXG4gICAgfSlcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgaWYocmVzdWx0W1wic3VjZXNzXCJdKXtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uID0gYGh0dHA6Ly8zcmRwYXJ0eXdlYnNpdGUub25lLz9jb21taXRtZW50SWQ9JHtpZGVudGl0eUNvbW1pdG1lbnR9YFxuICAgIH1cbiAgICBcblxufVxuXG5mdW5jdGlvbiBMb2dpbigpe1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfSBzdHlsZT17e1xuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgICB9fT5cbiAgICAgICAgPGRpdj48aDE+TG9naW4gd2l0aCBAPC9oMT48L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVkXCIgc2l6ZT1cImxhcmdlXCIgY2xhc3NOYW1lPSdyZWdpc3Rlcicgb25DbGljaz17bG9naW59PiBMb2dpbiA8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbmV4cG9ydCBkZWZhdWx0IExvZ2luIl0sIm5hbWVzIjpbInVzZVBhcmFtIiwicGF0aCIsImZzIiwiQnV0dG9uIiwicHJvdmlkZXJzIiwiQ29udHJhY3QiLCJ1dGlscyIsIlN0cmF0ZWd5IiwiWmtJZGVudGl0eSIsImdlbmVyYXRlTWVya2xlUHJvb2YiLCJTZW1hcGhvcmUiLCJzdHlsZXMiLCJnZXRBbGxNZW1iZXJzIiwiaWQiLCJyZXNwb25zZSIsImZldGNoIiwicmVzdWx0IiwianNvbiIsImxvZ2luIiwibWVzc2FnZSIsIndpbmRvdyIsImV0aGVyZXVtIiwicmVxdWVzdCIsIm1ldGhvZCIsInByb3ZpZGVyIiwiV2ViM1Byb3ZpZGVyIiwic2lnbmVyIiwiZ2V0U2lnbmVyIiwic2lnbmF0dXJlIiwic2lnbk1lc3NhZ2UiLCJhZGRyZXNzIiwiZ2V0QWRkcmVzcyIsImlkZW50aXR5IiwiTUVTU0FHRSIsImlkZW50aXR5Q29tbWl0bWVudCIsImdlbklkZW50aXR5Q29tbWl0bWVudCIsImlkZW50aXR5Q29tbWl0bWVudHMiLCJpbmRleElkZW50aXR5Q29tbWl0bWVudCIsImluZGV4T2YiLCJtZXJrbGVQcm9vZiIsInNpZ25hbCIsImV4dGVybmFsTnVsbGlmaWVyIiwiQmlnSW50IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwid2l0bmVzcyIsImdlbldpdG5lc3MiLCJnZXRUcmFwZG9vciIsImdldE51bGxpZmllciIsInJvb3QiLCJwcm9vZiIsInB1YmxpY1NpZ25hbHMiLCJnZW5Qcm9vZiIsInNvbGlkaXR5UHJvb2YiLCJwYWNrVG9Tb2xpZGl0eVByb29mIiwidG9TdHJpbmciLCJudWxsaWZpZXJIYXNoIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibG9jYXRpb24iLCJMb2dpbiIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInN0eWxlIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJmbGV4RGlyZWN0aW9uIiwiaDEiLCJ2YXJpYW50Iiwic2l6ZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/login.js\n");

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

/***/ "@zk-kit/identity":
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

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

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