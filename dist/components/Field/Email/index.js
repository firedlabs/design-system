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
  var value = _ref.value,
      label = _ref.label,
      placeholder = _ref.placeholder,
      readOnly = _ref.readOnly,
      onChange = _ref.onChange,
      register = _ref.register;
  return /*#__PURE__*/_react.default.createElement(_styles.Label, null, /*#__PURE__*/_react.default.createElement(_styles.Content, null, label), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    value: value,
    type: "email",
    placeholder: placeholder,
    readOnly: readOnly,
    onChange: onChange,
    ref: register
  }));
}

Email.defaultProps = {
  label: 'Email',
  placeholder: 'seu_email@gmail.com',
  readOnly: false,
  value: '',
  onChange: function onChange() {},
  register: function register() {}
};
Email.propTypes = {
  label: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  readOnly: _propTypes.default.string,
  value: _propTypes.default.string,
  onChange: _propTypes.default.func,
  register: _propTypes.default.func
};
var _default = Email;
exports.default = _default;