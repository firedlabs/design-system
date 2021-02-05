"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Fieldset(_ref) {
  var legend = _ref.legend,
      children = _ref.children;
  return /*#__PURE__*/_react.default.createElement(_styles.FieldsetStyle, null, legend && /*#__PURE__*/_react.default.createElement(_styles.Legend, null, legend), /*#__PURE__*/_react.default.createElement(_styles.Wrapper, null, children));
}

Fieldset.defaultProps = {
  legend: ''
};
Fieldset.propTypes = {
  legend: _propTypes.default.string,
  children: _propTypes.default.element
};
var _default = Fieldset;
exports.default = _default;