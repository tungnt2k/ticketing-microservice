/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/auth/signup";
exports.ids = ["pages/auth/signup"];
exports.modules = {

/***/ "./hooks/use-request.js":
/*!******************************!*\
  !*** ./hooks/use-request.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/home/tungnt/Desktop/ticketing-microservice/client/hooks/use-request.js\";\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (({\n  url,\n  method,\n  body,\n  onSuccess\n}) => {\n  const {\n    0: errors,\n    1: setErrors\n  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n\n  const doRequest = async () => {\n    try {\n      setErrors(null);\n      const response = await (axios__WEBPACK_IMPORTED_MODULE_1___default())[method](url, body);\n\n      if (onSuccess) {\n        onSuccess(response.data);\n      }\n\n      return response.data;\n    } catch (err) {\n      setErrors( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"alert alert-danger\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n          children: \"Ooops....\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n          className: \"my-0\",\n          children: err.response.data.errors.map(err => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            children: err.message\n          }, err.message, false, {\n            fileName: _jsxFileName,\n            lineNumber: 23,\n            columnNumber: 15\n          }, undefined))\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, undefined));\n    }\n  };\n\n  return {\n    doRequest,\n    errors\n  };\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9ob29rcy91c2UtcmVxdWVzdC5qcz9hOThjIl0sIm5hbWVzIjpbInVybCIsIm1ldGhvZCIsImJvZHkiLCJvblN1Y2Nlc3MiLCJlcnJvcnMiLCJzZXRFcnJvcnMiLCJ1c2VTdGF0ZSIsImRvUmVxdWVzdCIsInJlc3BvbnNlIiwiYXhpb3MiLCJkYXRhIiwiZXJyIiwibWFwIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLCtEQUFlLENBQUM7QUFBRUEsS0FBRjtBQUFPQyxRQUFQO0FBQWVDLE1BQWY7QUFBcUJDO0FBQXJCLENBQUQsS0FBc0M7QUFDbkQsUUFBTTtBQUFBLE9BQUNDLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCQywrQ0FBUSxDQUFDLElBQUQsQ0FBcEM7O0FBRUEsUUFBTUMsU0FBUyxHQUFHLFlBQVk7QUFDNUIsUUFBSTtBQUNGRixlQUFTLENBQUMsSUFBRCxDQUFUO0FBQ0EsWUFBTUcsUUFBUSxHQUFHLE1BQU1DLDhDQUFLLENBQUNSLE1BQUQsQ0FBTCxDQUFjRCxHQUFkLEVBQW1CRSxJQUFuQixDQUF2Qjs7QUFFQSxVQUFJQyxTQUFKLEVBQWU7QUFDYkEsaUJBQVMsQ0FBQ0ssUUFBUSxDQUFDRSxJQUFWLENBQVQ7QUFDRDs7QUFFRCxhQUFPRixRQUFRLENBQUNFLElBQWhCO0FBQ0QsS0FURCxDQVNFLE9BQU9DLEdBQVAsRUFBWTtBQUNaTixlQUFTLGVBQ1A7QUFBSyxpQkFBUyxFQUFDLG9CQUFmO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUFJLG1CQUFTLEVBQUMsTUFBZDtBQUFBLG9CQUNHTSxHQUFHLENBQUNILFFBQUosQ0FBYUUsSUFBYixDQUFrQk4sTUFBbEIsQ0FBeUJRLEdBQXpCLENBQTZCRCxHQUFHLGlCQUMvQjtBQUFBLHNCQUF1QkEsR0FBRyxDQUFDRTtBQUEzQixhQUFTRixHQUFHLENBQUNFLE9BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURPLENBQVQ7QUFVRDtBQUNGLEdBdEJEOztBQXdCQSxTQUFPO0FBQUVOLGFBQUY7QUFBYUg7QUFBYixHQUFQO0FBQ0QsQ0E1QkQiLCJmaWxlIjoiLi9ob29rcy91c2UtcmVxdWVzdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgKHsgdXJsLCBtZXRob2QsIGJvZHksIG9uU3VjY2VzcyB9KSA9PiB7XG4gIGNvbnN0IFtlcnJvcnMsIHNldEVycm9yc10gPSB1c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBkb1JlcXVlc3QgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIHNldEVycm9ycyhudWxsKTtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3NbbWV0aG9kXSh1cmwsIGJvZHkpO1xuXG4gICAgICBpZiAob25TdWNjZXNzKSB7XG4gICAgICAgIG9uU3VjY2VzcyhyZXNwb25zZS5kYXRhKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBzZXRFcnJvcnMoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+XG4gICAgICAgICAgPGg0Pk9vb3BzLi4uLjwvaDQ+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm15LTBcIj5cbiAgICAgICAgICAgIHtlcnIucmVzcG9uc2UuZGF0YS5lcnJvcnMubWFwKGVyciA9PiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2Vyci5tZXNzYWdlfT57ZXJyLm1lc3NhZ2V9PC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHsgZG9SZXF1ZXN0LCBlcnJvcnMgfTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hooks/use-request.js\n");

/***/ }),

/***/ "./pages/auth/signup.js":
/*!******************************!*\
  !*** ./pages/auth/signup.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks_use_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/use-request */ \"./hooks/use-request.js\");\n\nvar _jsxFileName = \"/home/tungnt/Desktop/ticketing-microservice/client/pages/auth/signup.js\";\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\n  const {\n    0: email,\n    1: setEmail\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n  const {\n    0: password,\n    1: setPassword\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n  const {\n    doRequest,\n    errors\n  } = (0,_hooks_use_request__WEBPACK_IMPORTED_MODULE_3__.default)({\n    url: '/api/users/signup',\n    method: 'post',\n    body: {\n      email,\n      password\n    },\n    onSuccess: () => next_router__WEBPACK_IMPORTED_MODULE_2___default().push('/')\n  });\n\n  const onSubmit = async event => {\n    event.preventDefault();\n    await doRequest();\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n    onSubmit: onSubmit,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: \"Sign Up\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"form-group\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        children: \"Email Address\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        value: email,\n        onChange: e => setEmail(e.target.value),\n        className: \"form-control\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"form-group\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        children: \"Password\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        value: password,\n        onChange: e => setPassword(e.target.value),\n        type: \"password\",\n        className: \"form-control\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, undefined), errors, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      className: \"btn btn-primary\",\n      children: \"Sign Up\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 5\n  }, undefined);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9hdXRoL3NpZ251cC5qcz85YWM5Il0sIm5hbWVzIjpbImVtYWlsIiwic2V0RW1haWwiLCJ1c2VTdGF0ZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJkb1JlcXVlc3QiLCJlcnJvcnMiLCJ1c2VSZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwiYm9keSIsIm9uU3VjY2VzcyIsIlJvdXRlciIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLCtEQUFlLE1BQU07QUFDbkIsUUFBTTtBQUFBLE9BQUNBLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CQywrQ0FBUSxDQUFDLEVBQUQsQ0FBbEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJGLCtDQUFRLENBQUMsRUFBRCxDQUF4QztBQUNBLFFBQU07QUFBRUcsYUFBRjtBQUFhQztBQUFiLE1BQXdCQywyREFBVSxDQUFDO0FBQ3ZDQyxPQUFHLEVBQUUsbUJBRGtDO0FBRXZDQyxVQUFNLEVBQUUsTUFGK0I7QUFHdkNDLFFBQUksRUFBRTtBQUNKVixXQURJO0FBRUpHO0FBRkksS0FIaUM7QUFPdkNRLGFBQVMsRUFBRSxNQUFNQyx1REFBQSxDQUFZLEdBQVo7QUFQc0IsR0FBRCxDQUF4Qzs7QUFVQSxRQUFNQyxRQUFRLEdBQUcsTUFBTUMsS0FBTixJQUFlO0FBQzlCQSxTQUFLLENBQUNDLGNBQU47QUFFQSxVQUFNVixTQUFTLEVBQWY7QUFDRCxHQUpEOztBQU1BLHNCQUNFO0FBQU0sWUFBUSxFQUFFUSxRQUFoQjtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBSyxlQUFTLEVBQUMsWUFBZjtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFDRSxhQUFLLEVBQUViLEtBRFQ7QUFFRSxnQkFBUSxFQUFFZ0IsQ0FBQyxJQUFJZixRQUFRLENBQUNlLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBRnpCO0FBR0UsaUJBQVMsRUFBQztBQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLGVBVUU7QUFBSyxlQUFTLEVBQUMsWUFBZjtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFDRSxhQUFLLEVBQUVmLFFBRFQ7QUFFRSxnQkFBUSxFQUFFYSxDQUFDLElBQUlaLFdBQVcsQ0FBQ1ksQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FGNUI7QUFHRSxZQUFJLEVBQUMsVUFIUDtBQUlFLGlCQUFTLEVBQUM7QUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFWRixFQW1CR1osTUFuQkgsZUFvQkU7QUFBUSxlQUFTLEVBQUMsaUJBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXBCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQXdCRCxDQTNDRCIsImZpbGUiOiIuL3BhZ2VzL2F1dGgvc2lnbnVwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHVzZVJlcXVlc3QgZnJvbSAnLi4vLi4vaG9va3MvdXNlLXJlcXVlc3QnO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgeyBkb1JlcXVlc3QsIGVycm9ycyB9ID0gdXNlUmVxdWVzdCh7XG4gICAgdXJsOiAnL2FwaS91c2Vycy9zaWdudXAnLFxuICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgIGJvZHk6IHtcbiAgICAgIGVtYWlsLFxuICAgICAgcGFzc3dvcmRcbiAgICB9LFxuICAgIG9uU3VjY2VzczogKCkgPT4gUm91dGVyLnB1c2goJy8nKVxuICB9KTtcblxuICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jIGV2ZW50ID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgYXdhaXQgZG9SZXF1ZXN0KCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PlxuICAgICAgPGgxPlNpZ24gVXA8L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgIDxsYWJlbD5FbWFpbCBBZGRyZXNzPC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPGxhYmVsPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtlcnJvcnN9XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlNpZ24gVXA8L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/auth/signup.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/auth/signup.js"));
module.exports = __webpack_exports__;

})();