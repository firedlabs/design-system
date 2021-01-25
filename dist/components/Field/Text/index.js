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
  var name = _ref.name,
      type = _ref.type,
      label = _ref.label,
      placeholder = _ref.placeholder,
      readOnly = _ref.readOnly,
      register = _ref.register;
  return /*#__PURE__*/_react.default.createElement(_styles.Label, null, /*#__PURE__*/_react.default.createElement(_styles.Content, null, label), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: name,
    type: type,
    placeholder: placeholder,
    readOnly: readOnly,
    ref: register()
  }));
}

Text.defaultProps = {
  value: '',
  type: 'text',
  label: '',
  placeholder: '',
  readOnly: false,
  register: function register() {}
};
Text.propTypes = {
  name: _propTypes.default.string,
  type: _propTypes.default.string,
  label: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  readOnly: _propTypes.default.bool,
  register: _propTypes.default.func
};
var _default = Text;
exports.default = _default;