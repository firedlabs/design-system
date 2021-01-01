"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function VideoPlayerProgressBar(_ref) {
  var max = _ref.max,
      value = _ref.value,
      onChange = _ref.onChange,
      buffer = _ref.buffer;
  var progress = value / max * 100;
  var progressBuffer = buffer / max * 100;
  return /*#__PURE__*/_react.default.createElement(_styles.VideoPlayerProgressBarStyle, null, /*#__PURE__*/_react.default.createElement(_styles.InputRange, {
    max: max,
    value: value,
    onChange: onChange
  }), /*#__PURE__*/_react.default.createElement(_styles.Bar, {
    max: max,
    value: progress
  }), /*#__PURE__*/_react.default.createElement(_styles.Buffer, {
    value: progressBuffer
  }));
}

VideoPlayerProgressBar.defaultProps = {
  max: 0,
  value: 0
};
VideoPlayerProgressBar.propTypes = {
  max: _propTypes.default.number,
  value: _propTypes.default.number,
  onChange: _propTypes.default.func.isRequired,
  buffer: _propTypes.default.number.isRequired
};
var _default = VideoPlayerProgressBar;
exports.default = _default;