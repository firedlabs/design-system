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

function Select(_ref) {
  var name = _ref.name,
      label = _ref.label,
      value = _ref.value,
      onChange = _ref.onChange,
      defaultValue = _ref.defaultValue,
      options = _ref.options,
      register = _ref.register;
  return /*#__PURE__*/_react.default.createElement(_styles.Label, null, /*#__PURE__*/_react.default.createElement(_styles.Content, null, label), /*#__PURE__*/_react.default.createElement(_styles2.SelectStyle, {
    name: name,
    onChange: onChange,
    ref: register(name),
    value: value || defaultValue
  }, options.map(function (option) {
    return /*#__PURE__*/_react.default.createElement(_styles2.Option, {
      key: option,
      value: option
    }, option);
  })));
}

Select.defaultProps = {
  label: '',
  value: '',
  onChange: function onChange() {},
  defaultValue: '',
  name: '',
  options: [''],
  register: function register() {}
};
Select.propTypes = {
  label: _propTypes.default.string,
  name: _propTypes.default.string,
  value: _propTypes.default.string,
  onChange: _propTypes.default.func,
  defaultValue: _propTypes.default.string,
  options: _propTypes.default.arrayOf(_propTypes.default.string),
  register: _propTypes.default.func
};
var _default = Select;
exports.default = _default;