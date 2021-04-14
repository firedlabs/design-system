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
  var name = _ref.name,
      label = _ref.label,
      placeholder = _ref.placeholder,
      readOnly = _ref.readOnly,
      register = _ref.register;
  return /*#__PURE__*/_react.default.createElement(_styles.Label, null, /*#__PURE__*/_react.default.createElement(_styles.Content, null, label), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "email",
    name: name,
    placeholder: placeholder,
    readOnly: readOnly,
    ref: register(name)
  }));
}

Email.defaultProps = {
  label: 'Email',
  name: 'email',
  placeholder: 'seu_email@gmail.com',
  readOnly: false,
  register: function register() {}
};
Email.propTypes = {
  label: _propTypes.default.string,
  name: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  readOnly: _propTypes.default.string,
  register: _propTypes.default.func
};
var _default = Email;
exports.default = _default;