webpackJsonp([0],{

/***/ "./node_modules/babel-runtime/helpers/defineProperty.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),

/***/ "./src/routes/Counter/components/Counter.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Counter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);



var Counter = function Counter(_ref) {
  var counter = _ref.counter,
      increment = _ref.increment,
      doubleAsync = _ref.doubleAsync;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { style: { margin: '0 auto' } },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h2',
      null,
      'Counter: ',
      counter
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'button',
      { className: 'btn btn-primary', onClick: increment },
      'Increment'
    ),
    ' ',
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'button',
      { className: 'btn btn-secondary', onClick: doubleAsync },
      'Double (Async)'
    )
  );
};
Counter.propTypes = {
  counter: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
  increment: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  doubleAsync: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
};

/* harmony default export */ __webpack_exports__["a"] = (Counter);

/***/ }),

/***/ "./src/routes/Counter/containers/CounterContainer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_counter__ = __webpack_require__("./src/routes/Counter/modules/counter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Counter__ = __webpack_require__("./src/routes/Counter/components/Counter.js");



/*  This is a container component. Notice it does not contain any JSX,
    nor does it import React. This component is **only** responsible for
    wiring in the actions and state necessary to render a presentational
    component - in this case, the counter:   */



/*  Object of action creators (can also be function that returns object).
    Keys will be passed as props to presentational components. Here we are
    implementing our wrapper around increment; the component doesn't care   */

var mapDispatchToProps = {
    increment: function increment() {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__modules_counter__["increment"])(1);
    },
    doubleAsync: __WEBPACK_IMPORTED_MODULE_1__modules_counter__["doubleAsync"]
};

var mapStateToProps = function mapStateToProps(state) {
    return {
        counter: state.counter
    };
};

/*  Note: mapStateToProps is where you should use `reselect` to create selectors, ie:

    import { createSelector } from 'reselect'
    const counter = (state) => state.counter
    const tripleCount = createSelector(counter, (count) => count * 3)
    const mapStateToProps = (state) => ({
      counter: tripleCount(state)
    })

    Selectors can compute derived data, allowing Redux to store the minimal possible state.
    Selectors are efficient. A selector is not recomputed unless one of its arguments change.
    Selectors are composable. They can be used as input to other selectors.
    https://github.com/reactjs/reselect    */

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_2__components_Counter__["a" /* default */]));

/***/ }),

/***/ "./src/routes/Counter/modules/counter.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COUNTER_INCREMENT", function() { return COUNTER_INCREMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COUNTER_DOUBLE_ASYNC", function() { return COUNTER_DOUBLE_ASYNC; });
/* harmony export (immutable) */ __webpack_exports__["increment"] = increment;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doubleAsync", function() { return doubleAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony export (immutable) */ __webpack_exports__["default"] = counterReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);


var _ACTION_HANDLERS;

// ------------------------------------
// Constants
// ------------------------------------
var COUNTER_INCREMENT = 'COUNTER_INCREMENT';
var COUNTER_DOUBLE_ASYNC = 'COUNTER_DOUBLE_ASYNC';

// ------------------------------------
// Actions
// ------------------------------------
function increment() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

  return {
    type: COUNTER_INCREMENT,
    payload: value
  };
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

var doubleAsync = function doubleAsync() {
  return function (dispatch, getState) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        dispatch({
          type: COUNTER_DOUBLE_ASYNC,
          payload: getState().counter
        });
        resolve();
      }, 200);
    });
  };
};

var actions = {
  increment: increment,
  doubleAsync: doubleAsync

  // ------------------------------------
  // Action Handlers
  // ------------------------------------
};var ACTION_HANDLERS = (_ACTION_HANDLERS = {}, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ACTION_HANDLERS, COUNTER_INCREMENT, function (state, action) {
  return state + action.payload;
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ACTION_HANDLERS, COUNTER_DOUBLE_ASYNC, function (state, action) {
  return state * 2;
}), _ACTION_HANDLERS);

// ------------------------------------
// Reducer
// ------------------------------------
var initialState = 0;
function counterReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  var handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}

/***/ })

});
//# sourceMappingURL=0.js.map