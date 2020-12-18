"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Timer.propTypes = {
  time: _propTypes.default.number.isRequired,
  label: _propTypes.default.string.isRequired
};

function Timer(_ref) {
  var time = _ref.time,
      label = _ref.label;
  return /*#__PURE__*/_react.default.createElement(_styles.TimerStyles, null, /*#__PURE__*/_react.default.createElement(_styles.Time, null, time), /*#__PURE__*/_react.default.createElement(_styles.Label, null, label));
}

var _default = Timer;
exports.default = _default;