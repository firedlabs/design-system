"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Timer = _interopRequireDefault(require("../Timer"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Countdown(_ref) {
  var day = _ref.day,
      hrs = _ref.hrs,
      min = _ref.min,
      seg = _ref.seg;
  return /*#__PURE__*/_react.default.createElement(_styles.CountdownStyles, null, day && /*#__PURE__*/_react.default.createElement(_Timer.default, {
    label: day.label,
    time: day.time
  }), hrs && /*#__PURE__*/_react.default.createElement(_Timer.default, {
    label: hrs.label,
    time: hrs.time
  }), min && /*#__PURE__*/_react.default.createElement(_Timer.default, {
    label: min.label,
    time: min.time
  }), seg && /*#__PURE__*/_react.default.createElement(_Timer.default, {
    label: seg.label,
    time: seg.time
  }));
}

var shape = {
  label: _propTypes.default.string.isRequired,
  time: _propTypes.default.number.isRequired
};
Countdown.propTypes = {
  day: _propTypes.default.shape(shape).isRequired,
  hrs: _propTypes.default.shape(shape).isRequired,
  min: _propTypes.default.shape(shape).isRequired,
  seg: _propTypes.default.shape(shape).isRequired
};
var _default = Countdown;
exports.default = _default;