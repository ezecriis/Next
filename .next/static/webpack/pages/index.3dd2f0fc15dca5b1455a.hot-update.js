webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/components/Users.js":
/*!***********************************!*\
  !*** ./pages/components/Users.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\crled\\OneDrive\\Escritorio\\Dev\\Cursos\\projectnext\\pages\\components\\Users.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Users = function Users(props) {
  console.log(props);
  return __jsx("ul", {
    className: "list-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, props.users.map(function (user) {
    return __jsx("li", {
      className: "list-group-item list-group-item-action\r d-flex justify-content-between alig-items-center",
      key: user.id,
      onClick: function onClick(e) {
        return next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/users/[id]', "/users/".concat(user.id));
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 21
      }
    }, __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 25
      }
    }, __jsx("h5", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 29
      }
    }, user.first_name, " ", user.last_name, " "), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 29
      }
    }, "Email: ", user.email, " ")), __jsx("img", {
      src: user.avatar,
      alt: user.first_name + user.last_name,
      style: {
        borderRadius: '50%'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 25
      }
    }));
  }));
};

_c = Users;
/* harmony default export */ __webpack_exports__["default"] = (Users);

var _c;

$RefreshReg$(_c, "Users");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9Vc2Vycy5qcyJdLCJuYW1lcyI6WyJVc2VycyIsInByb3BzIiwiY29uc29sZSIsImxvZyIsInVzZXJzIiwibWFwIiwidXNlciIsImlkIiwiZSIsIlJvdXRlciIsInB1c2giLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwiZW1haWwiLCJhdmF0YXIiLCJib3JkZXJSYWRpdXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRCxFQUFXO0FBQ3JCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNBLFNBQ0k7QUFBSSxhQUFTLEVBQUMsWUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRVFBLEtBQUssQ0FBQ0csS0FBTixDQUFZQyxHQUFaLENBQWdCLFVBQUFDLElBQUk7QUFBQSxXQUNoQjtBQUFJLGVBQVMsRUFBQywyRkFBZDtBQUNrRCxTQUFHLEVBQUVBLElBQUksQ0FBQ0MsRUFENUQ7QUFFQSxhQUFPLEVBQUUsaUJBQUFDLENBQUM7QUFBQSxlQUFJQyxrREFBTSxDQUFDQyxJQUFQLENBQVksYUFBWixtQkFBcUNKLElBQUksQ0FBQ0MsRUFBMUMsRUFBSjtBQUFBLE9BRlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUtELElBQUksQ0FBQ0ssVUFBVixPQUF1QkwsSUFBSSxDQUFDTSxTQUE1QixNQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBV04sSUFBSSxDQUFDTyxLQUFoQixNQUZKLENBSEosRUFPSTtBQUFLLFNBQUcsRUFBRVAsSUFBSSxDQUFDUSxNQUFmO0FBQ0EsU0FBRyxFQUFFUixJQUFJLENBQUNLLFVBQUwsR0FBa0JMLElBQUksQ0FBQ00sU0FENUI7QUFFQSxXQUFLLEVBQUU7QUFBRUcsb0JBQVksRUFBRTtBQUFoQixPQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFQSixDQURnQjtBQUFBLEdBQXBCLENBRlIsQ0FESjtBQW1CSCxDQXJCRDs7S0FBTWYsSztBQXVCU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguM2RkMmYwZmMxNWRjYTViMTQ1NWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY29uc3QgVXNlcnMgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHByb3BzKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cFwiPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy51c2Vycy5tYXAodXNlciA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWctaXRlbXMtY2VudGVyXCIga2V5PXt1c2VyLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4gUm91dGVyLnB1c2goJy91c2Vycy9baWRdJywgYC91c2Vycy8ke3VzZXIuaWR9YCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1Pnt1c2VyLmZpcnN0X25hbWV9IHt1c2VyLmxhc3RfbmFtZX0gPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkVtYWlsOiB7dXNlci5lbWFpbH0gPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3VzZXIuYXZhdGFyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e3VzZXIuZmlyc3RfbmFtZSArIHVzZXIubGFzdF9uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXJSYWRpdXM6ICc1MCUnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L3VsPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VycztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==