"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ContentDay = _interopRequireDefault(require("../ContentDay"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ListContentDay(_ref) {
  var days = _ref.days;
  return /*#__PURE__*/_react.default.createElement(_styles.default, {
    length: days.length
  }, days.map(function (day) {
    return /*#__PURE__*/_react.default.createElement(_ContentDay.default, _extends({
      key: day.title
    }, day));
  }));
}

var contentDay = {
  title: _propTypes.default.string.isRequired,
  goal: _propTypes.default.string.isRequired,
  options: _propTypes.default.arrayOf(_propTypes.default.shape({
    label: _propTypes.default.string.isRequired,
    description: _propTypes.default.string.isRequired,
    length: _propTypes.default.number.isRequired
  })),
  color: _propTypes.default.string,
  fontColor: _propTypes.default.string
};
ListContentDay.propTypes = {
  days: _propTypes.default.arrayOf(_propTypes.default.shape(contentDay))
};
var _default = ListContentDay;
exports.default = _default;