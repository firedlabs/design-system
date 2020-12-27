"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("../styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Email(_ref) {
  var label = _ref.label,
      placeholder = _ref.placeholder;
  return /*#__PURE__*/_react.default.createElement(_styles.Label, null, /*#__PURE__*/_react.default.createElement(_styles.Content, null, label), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "email",
    placeholder: placeholder
  }));
}

Email.defaultProps = {
  label: 'Email',
  placeholder: 'seu_email@gmail.com'
};
Email.propTypes = {
  label: _propTypes.default.string,
  placeholder: _propTypes.default.string
};
var _default = Email;
exports.default = _default;