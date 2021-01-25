"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("../styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Text(_ref) {
  var value = _ref.value,
      name = _ref.name,
      type = _ref.type,
      label = _ref.label,
      placeholder = _ref.placeholder,
      readOnly = _ref.readOnly,
      onChange = _ref.onChange,
      register = _ref.register;
  return /*#__PURE__*/_react.default.createElement(_styles.Label, null, /*#__PURE__*/_react.default.createElement(_styles.Content, null, label), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    value: value,
    name: name,
    type: type,
    placeholder: placeholder,
    readOnly: readOnly,
    onChange: onChange,
    ref: register
  }));
}

Text.defaultProps = {
  value: '',
  name: '',
  type: 'text',
  label: '',
  placeholder: '',
  readOnly: false,
  onChange: function onChange() {},
  register: function register() {}
};
Text.propTypes = {
  value: _propTypes.default.string,
  name: _propTypes.default.string,
  type: _propTypes.default.string,
  label: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  readOnly: _propTypes.default.bool,
  onChange: _propTypes.default.func,
  register: _propTypes.default.func
};
var _default = Text;
exports.default = _default;