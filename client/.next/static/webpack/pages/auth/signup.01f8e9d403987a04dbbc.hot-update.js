/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/auth/signup",{

/***/ "./hooks/use-request.js":
/*!******************************!*\
  !*** ./hooks/use-request.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_tungnt_Desktop_ticketing_microservice_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_tungnt_Desktop_ticketing_microservice_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_tungnt_Desktop_ticketing_microservice_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_tungnt_Desktop_ticketing_microservice_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/home/tungnt/Desktop/ticketing-microservice/client/hooks/use-request.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s(function (_ref) {\n  _s();\n\n  var url = _ref.url,\n      method = _ref.method,\n      body = _ref.body;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null),\n      errors = _useState[0],\n      setErrors = _useState[1];\n\n  var doRequest = /*#__PURE__*/function () {\n    var _ref2 = (0,_home_tungnt_Desktop_ticketing_microservice_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_tungnt_Desktop_ticketing_microservice_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n      var response;\n      return _home_tungnt_Desktop_ticketing_microservice_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return (axios__WEBPACK_IMPORTED_MODULE_3___default())[method](url, body);\n\n            case 3:\n              response = _context.sent;\n              return _context.abrupt(\"return\", response.data);\n\n            case 7:\n              _context.prev = 7;\n              _context.t0 = _context[\"catch\"](0);\n              setErrors( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"alert alert-danger\",\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h4\", {\n                  children: \"Oooops...\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 13,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                  className: \"my-0\",\n                  children: errors.map(function (err) {\n                    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                      children: err.message\n                    }, err.message, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 15,\n                      columnNumber: 40\n                    }, _this);\n                  })\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 14,\n                  columnNumber: 19\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 12,\n                columnNumber: 24\n              }, _this));\n\n            case 10:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 7]]);\n    }));\n\n    return function doRequest() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return {\n    doRequest: doRequest,\n    errors: errors\n  };\n}, \"CBiIfGMAaAtFFE/cKx87b00YZJU=\"));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlLXJlcXVlc3QuanM/YTk4YyJdLCJuYW1lcyI6WyJ1cmwiLCJtZXRob2QiLCJib2R5IiwidXNlU3RhdGUiLCJlcnJvcnMiLCJzZXRFcnJvcnMiLCJkb1JlcXVlc3QiLCJheGlvcyIsInJlc3BvbnNlIiwiZGF0YSIsIm1hcCIsImVyciIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsK0RBQWUsbUJBQTJCO0FBQUE7O0FBQUEsTUFBeEJBLEdBQXdCLFFBQXhCQSxHQUF3QjtBQUFBLE1BQW5CQyxNQUFtQixRQUFuQkEsTUFBbUI7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQUEsa0JBQ1ZDLCtDQUFRLENBQUMsSUFBRCxDQURFO0FBQUEsTUFDL0JDLE1BRCtCO0FBQUEsTUFDdkJDLFNBRHVCOztBQUd0QyxNQUFNQyxTQUFTO0FBQUEsd1RBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUVhQyw4Q0FBSyxDQUFDTixNQUFELENBQUwsQ0FBY0QsR0FBZCxFQUFtQkUsSUFBbkIsQ0FGYjs7QUFBQTtBQUVKTSxzQkFGSTtBQUFBLCtDQUdIQSxRQUFRLENBQUNDLElBSE47O0FBQUE7QUFBQTtBQUFBO0FBS1ZKLHVCQUFTLGVBQUU7QUFBSyx5QkFBUyxFQUFDLG9CQUFmO0FBQUEsd0NBQ0w7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREssZUFFTDtBQUFJLDJCQUFTLEVBQUMsTUFBZDtBQUFBLDRCQUNHRCxNQUFNLENBQUNNLEdBQVAsQ0FBVyxVQUFBQyxHQUFHO0FBQUEsd0NBQUk7QUFBQSxnQ0FBdUJBLEdBQUcsQ0FBQ0M7QUFBM0IsdUJBQVNELEdBQUcsQ0FBQ0MsT0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUFKO0FBQUEsbUJBQWQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBRixDQUFUOztBQUxVO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVROLFNBQVM7QUFBQTtBQUFBO0FBQUEsS0FBZjs7QUFjQSxTQUFPO0FBQUVBLGFBQVMsRUFBVEEsU0FBRjtBQUFhRixVQUFNLEVBQU5BO0FBQWIsR0FBUDtBQUNILENBbEJEIiwiZmlsZSI6Ii4vaG9va3MvdXNlLXJlcXVlc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCAoeyB1cmwsIG1ldGhvZCwgYm9keSB9KSA9PiB7XG4gICAgY29uc3QgW2Vycm9ycywgc2V0RXJyb3JzXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gICAgY29uc3QgZG9SZXF1ZXN0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvc1ttZXRob2RdKHVybCwgYm9keSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBzZXRFcnJvcnMoIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+XG4gICAgICAgICAgICAgICAgICA8aDQ+T29vb3BzLi4uPC9oND5cbiAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJteS0wXCI+XG4gICAgICAgICAgICAgICAgICAgIHtlcnJvcnMubWFwKGVyciA9PiA8bGkga2V5PXtlcnIubWVzc2FnZX0+e2Vyci5tZXNzYWdlfTwvbGk+KX1cbiAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+KVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiB7IGRvUmVxdWVzdCwgZXJyb3JzIH07XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hooks/use-request.js\n");

/***/ }),

/***/ "./pages/auth/signup.js":
/*!******************************!*\
  !*** ./pages/auth/signup.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_tungnt_Desktop_ticketing_microservice_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_tungnt_Desktop_ticketing_microservice_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_tungnt_Desktop_ticketing_microservice_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_tungnt_Desktop_ticketing_microservice_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _hooks_use_request__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/use-request */ \"./hooks/use-request.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/home/tungnt/Desktop/ticketing-microservice/client/pages/auth/signup.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s(function () {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),\n      email = _useState[0],\n      setEmail = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),\n      pass = _useState2[0],\n      setPass = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),\n      errors = _useState3[0],\n      setErrors = _useState3[1];\n\n  var onSubmit = /*#__PURE__*/function () {\n    var _ref = (0,_home_tungnt_Desktop_ticketing_microservice_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_tungnt_Desktop_ticketing_microservice_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(event) {\n      var response;\n      return _home_tungnt_Desktop_ticketing_microservice_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              event.preventDefault();\n              _context.prev = 1;\n              _context.next = 4;\n              return axios__WEBPACK_IMPORTED_MODULE_4___default().post('/api/users/signup', {\n                email: email,\n                password: pass\n              });\n\n            case 4:\n              response = _context.sent;\n              console.log(response.data);\n              _context.next = 11;\n              break;\n\n            case 8:\n              _context.prev = 8;\n              _context.t0 = _context[\"catch\"](1);\n              setErrors(_context.t0.response.data.errors);\n\n            case 11:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[1, 8]]);\n    }));\n\n    return function onSubmit(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n    onSubmit: onSubmit,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: \"Sign Up\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"form-group\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        children: \"Email Address\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        value: email,\n        onChange: function onChange(e) {\n          return setEmail(e.target.value);\n        },\n        className: \"form-control\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"form-group\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        children: \"Password\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        value: pass,\n        onChange: function onChange(e) {\n          return setPass(e.target.value);\n        },\n        type: \"password\",\n        className: \"form-control\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }, _this), errors.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"alert alert-danger\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n        children: \"Oooops...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: \"my-0\",\n        children: errors.map(function (err) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            children: err.message\n          }, err.message, false, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 32\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 33\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      className: \"btn btn-primary\",\n      children: \"Sign Up\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 7\n  }, _this);\n}, \"43a6YvmPst42Fk8hzxMMwzMmbQ0=\"));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC9zaWdudXAuanM/OWFjOSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzIiwic2V0UGFzcyIsImVycm9ycyIsInNldEVycm9ycyIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImF4aW9zIiwicGFzc3dvcmQiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiZSIsInRhcmdldCIsInZhbHVlIiwibGVuZ3RoIiwibWFwIiwiZXJyIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSwrREFBZSxlQUFNO0FBQUE7O0FBQUEsa0JBQ09BLCtDQUFRLENBQUMsRUFBRCxDQURmO0FBQUEsTUFDWkMsS0FEWTtBQUFBLE1BQ0xDLFFBREs7O0FBQUEsbUJBRUtGLCtDQUFRLENBQUMsRUFBRCxDQUZiO0FBQUEsTUFFWkcsSUFGWTtBQUFBLE1BRU5DLE9BRk07O0FBQUEsbUJBR1NKLCtDQUFRLENBQUMsRUFBRCxDQUhqQjtBQUFBLE1BR1pLLE1BSFk7QUFBQSxNQUdKQyxTQUhJOztBQUtuQixNQUFNQyxRQUFRO0FBQUEsdVRBQUcsaUJBQU9DLEtBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2ZBLG1CQUFLLENBQUNDLGNBQU47QUFEZTtBQUFBO0FBQUEscUJBSVVDLGlEQUFBLENBQVcsbUJBQVgsRUFBZ0M7QUFDckRULHFCQUFLLEVBQUxBLEtBRHFEO0FBQy9DVSx3QkFBUSxFQUFFUjtBQURxQyxlQUFoQyxDQUpWOztBQUFBO0FBSVBTLHNCQUpPO0FBUWJDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBUSxDQUFDRyxJQUFyQjtBQVJhO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBVWJULHVCQUFTLENBQUMsWUFBTU0sUUFBTixDQUFlRyxJQUFmLENBQW9CVixNQUFyQixDQUFUOztBQVZhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVJFLFFBQVE7QUFBQTtBQUFBO0FBQUEsS0FBZDs7QUFjQSxzQkFDSTtBQUFNLFlBQVEsRUFBRUEsUUFBaEI7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBSyxlQUFTLEVBQUMsWUFBZjtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFPLGFBQUssRUFBRU4sS0FBZDtBQUFxQixnQkFBUSxFQUFFLGtCQUFDZSxDQUFEO0FBQUEsaUJBQU9kLFFBQVEsQ0FBQ2MsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBZjtBQUFBLFNBQS9CO0FBQWdFLGlCQUFTLEVBQUM7QUFBMUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBTUU7QUFBSyxlQUFTLEVBQUMsWUFBZjtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFPLGFBQUssRUFBRWYsSUFBZDtBQUFvQixnQkFBUSxFQUFFLGtCQUFDYSxDQUFEO0FBQUEsaUJBQU9aLE9BQU8sQ0FBQ1ksQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBZDtBQUFBLFNBQTlCO0FBQThELFlBQUksRUFBQyxVQUFuRTtBQUE4RSxpQkFBUyxFQUFDO0FBQXhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFORixFQVVJYixNQUFNLENBQUNjLE1BQVAsR0FBZ0IsQ0FBaEIsaUJBQXNCO0FBQUssZUFBUyxFQUFDLG9CQUFmO0FBQUEsOEJBQ3RCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRHNCLGVBRXRCO0FBQUksaUJBQVMsRUFBQyxNQUFkO0FBQUEsa0JBQ0dkLE1BQU0sQ0FBQ2UsR0FBUCxDQUFXLFVBQUFDLEdBQUc7QUFBQSw4QkFBSTtBQUFBLHNCQUF1QkEsR0FBRyxDQUFDQztBQUEzQixhQUFTRCxHQUFHLENBQUNDLE9BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBSjtBQUFBLFNBQWQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRnNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVYxQixlQWdCRTtBQUFRLGVBQVMsRUFBQyxpQkFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFvQkMsQ0F2Q0giLCJmaWxlIjoiLi9wYWdlcy9hdXRoL3NpZ251cC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB1c2VSZXF1ZXN0IGZyb20gJy4uLy4uL2hvb2tzL3VzZS1yZXF1ZXN0JztcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3Bhc3MsIHNldFBhc3NdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbZXJyb3JzLCBzZXRFcnJvcnNdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvdXNlcnMvc2lnbnVwJywge1xuICAgICAgICBlbWFpbCxwYXNzd29yZDogcGFzc1xuICAgICAgfSlcbiAgXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgc2V0RXJyb3JzKGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PlxuICAgICAgICA8aDE+U2lnbiBVcDwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDxsYWJlbD5FbWFpbCBBZGRyZXNzPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdmFsdWU9e2VtYWlsfSBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDxsYWJlbD5QYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHZhbHVlPXtwYXNzfSBvbkNoYW5nZT17KGUpID0+IHNldFBhc3MoZS50YXJnZXQudmFsdWUpfSB0eXBlPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgeyBlcnJvcnMubGVuZ3RoID4gMCAmJiAoPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXJcIj5cbiAgICAgICAgICA8aDQ+T29vb3BzLi4uPC9oND5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibXktMFwiPlxuICAgICAgICAgICAge2Vycm9ycy5tYXAoZXJyID0+IDxsaSBrZXk9e2Vyci5tZXNzYWdlfT57ZXJyLm1lc3NhZ2V9PC9saT4pfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2Pil9XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+U2lnbiBVcDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgICk7XG4gIH07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/auth/signup.js\n");

/***/ })

});