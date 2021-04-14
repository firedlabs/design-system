"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Checkbox(_ref) {
  var children = _ref.children,
      active = _ref.active,
      name = _ref.name,
      register = _ref.register,
      value = _ref.value,
      onClick = _ref.onClick,
      small = _ref.small;
  return /*#__PURE__*/_react.default.createElement(_styles.CheckboxStyle, {
    active: active,
    onClick: onClick
  }, /*#__PURE__*/_react.default.createElement(_styles.Check, {
    ref: register(name),
    name: name,
    value: value,
    defaultChecked: active
  }), /*#__PURE__*/_react.default.createElement(_styles.Icon, null), /*#__PURE__*/_react.default.createElement(_styles.Content, {
    small: small
  }, children));
}

Checkbox.defaultProps = {
  active: false,
  onClick: function onClick() {},
  value: '',
  small: false
};
Checkbox.propTypes = {
  children: _propTypes.default.string.isRequired,
  name: _propTypes.default.string.isRequired,
  register: _propTypes.default.func.isRequired,
  value: _propTypes.default.string,
  onClick: _propTypes.default.func,
  active: _propTypes.default.bool,
  small: _propTypes.default.bool
};
var _default = Checkbox;
exports.default = _default;