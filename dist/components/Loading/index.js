"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Loading(_ref) {
  var active = _ref.active;
  return /*#__PURE__*/_react.default.createElement(_styles.LoadingStyle, {
    active: active
  }, /*#__PURE__*/_react.default.createElement(_styles.Square, null));
}

Loading.propTypes = {
  active: _propTypes.default.bool.isRequired
};
var _default = Loading;
exports.default = _default;