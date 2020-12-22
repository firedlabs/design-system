"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Option(_ref) {
  var label = _ref.label,
      description = _ref.description,
      length = _ref.length,
      color = _ref.color;
  return /*#__PURE__*/_react.default.createElement(_styles.OptionStyle, {
    length: length,
    color: color
  }, /*#__PURE__*/_react.default.createElement(_styles.Label, null, label), /*#__PURE__*/_react.default.createElement(_styles.Description, null, description));
}

Option.propTypes = {
  label: _propTypes.default.string.isRequired,
  description: _propTypes.default.string.isRequired,
  length: _propTypes.default.number.isRequired,
  color: _propTypes.default.string
};
var _default = Option;
exports.default = _default;