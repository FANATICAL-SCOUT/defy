"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/explore/page",{

/***/ "(app-pages-browser)/./app/explore/page.tsx":
/*!******************************!*\
  !*** ./app/explore/page.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/card */ \"(app-pages-browser)/./components/ui/card.tsx\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst ExplorePetitions = ()=>{\n    _s();\n    const [petitions, setPetitions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            id: 1,\n            title: \"Sample Petition\",\n            description: \"This is a sample petition\",\n            petitioner: \"John Doe\"\n        }\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Fetch petitions from the backend\n        const fetchPetitions = async ()=>{\n            const response = await fetch(\"/api/petitions\");\n            const data = await response.json();\n            setPetitions(data);\n        };\n        fetchPetitions();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto mt-10 p-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl font-bold mb-6 text-center text-primary\",\n                children: \"Explore Petitions\"\n            }, void 0, false, {\n                fileName: \"D:\\\\defy\\\\e-governance-dapp (1)\\\\app\\\\explore\\\\page.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6\",\n                children: petitions.map((petition)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.Card, {\n                        className: \"shadow-lg border-2\",\n                        style: {\n                            borderImage: \"linear-gradient(to right, var(--primary), var(--secondary)) 1\",\n                            border: \"border border-primary focus:border-secondary transition-colors shadow-md\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardContent, {\n                            className: \"flex flex-col justify-between h-full p-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: \"text-2xl font-bold text-secondary mb-2\",\n                                            children: petition.title\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\defy\\\\e-governance-dapp (1)\\\\app\\\\explore\\\\page.tsx\",\n                                            lineNumber: 30,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-base text-muted-foreground mb-4\",\n                                            children: petition.description\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\defy\\\\e-governance-dapp (1)\\\\app\\\\explore\\\\page.tsx\",\n                                            lineNumber: 31,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-sm text-muted-foreground\",\n                                            children: [\n                                                \"By: \",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"font-medium\",\n                                                    children: petition.petitioner\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\defy\\\\e-governance-dapp (1)\\\\app\\\\explore\\\\page.tsx\",\n                                                    lineNumber: 32,\n                                                    columnNumber: 66\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"D:\\\\defy\\\\e-governance-dapp (1)\\\\app\\\\explore\\\\page.tsx\",\n                                            lineNumber: 32,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\defy\\\\e-governance-dapp (1)\\\\app\\\\explore\\\\page.tsx\",\n                                    lineNumber: 29,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    href: \"/petitions/\".concat(petition.id),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                        className: \"mt-4 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity\",\n                                        children: \"View Details\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\defy\\\\e-governance-dapp (1)\\\\app\\\\explore\\\\page.tsx\",\n                                        lineNumber: 35,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\defy\\\\e-governance-dapp (1)\\\\app\\\\explore\\\\page.tsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\defy\\\\e-governance-dapp (1)\\\\app\\\\explore\\\\page.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 13\n                        }, undefined)\n                    }, petition.id, false, {\n                        fileName: \"D:\\\\defy\\\\e-governance-dapp (1)\\\\app\\\\explore\\\\page.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"D:\\\\defy\\\\e-governance-dapp (1)\\\\app\\\\explore\\\\page.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\defy\\\\e-governance-dapp (1)\\\\app\\\\explore\\\\page.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ExplorePetitions, \"nCkUZrs4GZoTnCM0wJsH/NB8h0U=\");\n_c = ExplorePetitions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ExplorePetitions);\nvar _c;\n$RefreshReg$(_c, \"ExplorePetitions\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9leHBsb3JlL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVtRDtBQUN0QjtBQUM0QjtBQUNUO0FBRWhELE1BQU1PLG1CQUFtQjs7SUFDdkIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdQLCtDQUFRQSxDQUFDO1FBQUM7WUFBRVEsSUFBSTtZQUFHQyxPQUFPO1lBQW1CQyxhQUFhO1lBQTZCQyxZQUFZO1FBQVc7S0FBRTtJQUVsSlosZ0RBQVNBLENBQUM7UUFDUixtQ0FBbUM7UUFDbkMsTUFBTWEsaUJBQWlCO1lBQ3JCLE1BQU1DLFdBQVcsTUFBTUMsTUFBTTtZQUM3QixNQUFNQyxPQUFPLE1BQU1GLFNBQVNHLElBQUk7WUFDaENULGFBQWFRO1FBQ2Y7UUFFQUg7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ0s7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUFtRDs7Ozs7OzBCQUNqRSw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1paLFVBQVVjLEdBQUcsQ0FBQyxDQUFDQyx5QkFDZCw4REFBQ25CLHFEQUFJQTt3QkFBbUJnQixXQUFVO3dCQUFxQkksT0FBTzs0QkFBRUMsYUFBYTs0QkFBaUVDLFFBQVE7d0JBQTJFO2tDQUMvTiw0RUFBQ3JCLDREQUFXQTs0QkFBQ2UsV0FBVTs7OENBQ3JCLDhEQUFDRDs7c0RBQ0MsOERBQUNROzRDQUFHUCxXQUFVO3NEQUEwQ0csU0FBU1osS0FBSzs7Ozs7O3NEQUN0RSw4REFBQ2lCOzRDQUFFUixXQUFVO3NEQUF3Q0csU0FBU1gsV0FBVzs7Ozs7O3NEQUN6RSw4REFBQ2dCOzRDQUFFUixXQUFVOztnREFBZ0M7OERBQUksOERBQUNTO29EQUFLVCxXQUFVOzhEQUFlRyxTQUFTVixVQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OENBRXJHLDhEQUFDVixpREFBSUE7b0NBQUMyQixNQUFNLGNBQTBCLE9BQVpQLFNBQVNiLEVBQUU7OENBQ25DLDRFQUFDSix5REFBTUE7d0NBQUNjLFdBQVU7a0RBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFSbkdHLFNBQVNiLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQmhDO0dBckNNSDtLQUFBQTtBQXVDTiwrREFBZUEsZ0JBQWdCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9leHBsb3JlL3BhZ2UudHN4P2NlYWIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgQ2FyZCwgQ2FyZENvbnRlbnQgfSBmcm9tICdAL2NvbXBvbmVudHMvdWkvY2FyZCc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0AvY29tcG9uZW50cy91aS9idXR0b24nO1xyXG5cclxuY29uc3QgRXhwbG9yZVBldGl0aW9ucyA9ICgpID0+IHtcclxuICBjb25zdCBbcGV0aXRpb25zLCBzZXRQZXRpdGlvbnNdID0gdXNlU3RhdGUoW3sgaWQ6IDEsIHRpdGxlOiAnU2FtcGxlIFBldGl0aW9uJywgZGVzY3JpcHRpb246ICdUaGlzIGlzIGEgc2FtcGxlIHBldGl0aW9uJywgcGV0aXRpb25lcjogJ0pvaG4gRG9lJyB9XSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBGZXRjaCBwZXRpdGlvbnMgZnJvbSB0aGUgYmFja2VuZFxyXG4gICAgY29uc3QgZmV0Y2hQZXRpdGlvbnMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvcGV0aXRpb25zJyk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIHNldFBldGl0aW9ucyhkYXRhKTtcclxuICAgIH07XHJcblxyXG4gICAgZmV0Y2hQZXRpdGlvbnMoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIG10LTEwIHAtNlwiPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIG1iLTYgdGV4dC1jZW50ZXIgdGV4dC1wcmltYXJ5XCI+RXhwbG9yZSBQZXRpdGlvbnM8L2gxPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgZ2FwLTZcIj5cclxuICAgICAgICB7cGV0aXRpb25zLm1hcCgocGV0aXRpb24pID0+IChcclxuICAgICAgICAgIDxDYXJkIGtleT17cGV0aXRpb24uaWR9IGNsYXNzTmFtZT1cInNoYWRvdy1sZyBib3JkZXItMlwiIHN0eWxlPXt7IGJvcmRlckltYWdlOiAnbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS1wcmltYXJ5KSwgdmFyKC0tc2Vjb25kYXJ5KSkgMScsIGJvcmRlcjogXCJib3JkZXIgYm9yZGVyLXByaW1hcnkgZm9jdXM6Ym9yZGVyLXNlY29uZGFyeSB0cmFuc2l0aW9uLWNvbG9ycyBzaGFkb3ctbWRcIiB9fT5cclxuICAgICAgICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuIGgtZnVsbCBwLTRcIj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LXNlY29uZGFyeSBtYi0yXCI+e3BldGl0aW9uLnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIG1iLTRcIj57cGV0aXRpb24uZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LW11dGVkLWZvcmVncm91bmRcIj5CeTogPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tZWRpdW1cIj57cGV0aXRpb24ucGV0aXRpb25lcn08L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcGV0aXRpb25zLyR7cGV0aXRpb24uaWR9YH0+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cIm10LTQgYmctZ3JhZGllbnQtdG8tciBmcm9tLXByaW1hcnkgdG8tc2Vjb25kYXJ5IGhvdmVyOm9wYWNpdHktOTAgdHJhbnNpdGlvbi1vcGFjaXR5XCI+XHJcbiAgICAgICAgICAgICAgICAgIFZpZXcgRGV0YWlsc1xyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFeHBsb3JlUGV0aXRpb25zOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGluayIsIkNhcmQiLCJDYXJkQ29udGVudCIsIkJ1dHRvbiIsIkV4cGxvcmVQZXRpdGlvbnMiLCJwZXRpdGlvbnMiLCJzZXRQZXRpdGlvbnMiLCJpZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJwZXRpdGlvbmVyIiwiZmV0Y2hQZXRpdGlvbnMiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsIm1hcCIsInBldGl0aW9uIiwic3R5bGUiLCJib3JkZXJJbWFnZSIsImJvcmRlciIsImgyIiwicCIsInNwYW4iLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/explore/page.tsx\n"));

/***/ })

});