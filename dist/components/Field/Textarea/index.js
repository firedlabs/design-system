"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("../styles");

var _styles2 = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Textarea(_ref) {
  var value = _ref.value,
      name = _ref.name,
      label = _ref.label,
      placeholder = _ref.placeholder,
      readOnly = _ref.readOnly,
      onChange = _ref.onChange,
      register = _ref.register;
  return /*#__PURE__*/_react.default.createElement(_styles.Label, null, /*#__PURE__*/_react.default.createElement(_styles.Content, null, label), /*#__PURE__*/_react.default.createElement(_styles2.TextareaStyles, {
    name: name,
    value: value,
    placeholder: placeholder,
    readOnly: readOnly,
    onChange: onChange,
    ref: register
  }, value));
}

Textarea.defaultProps = {
  value: '',
  name: '',
  label: '',
  placeholder: '',
  readOnly: false,
  onChange: function onChange() {},
  register: function register() {}
};
Textarea.propTypes = {
  value: _propTypes.default.string,
  name: _propTypes.default.string,
  label: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  readOnly: _propTypes.default.bool,
  onChange: _propTypes.default.func,
  register: _propTypes.default.func
};
var _default = Textarea;
exports.default = _default;