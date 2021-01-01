"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function VideoPlayerTimer(_ref) {
  var currentTime = _ref.currentTime,
      duration = _ref.duration;

  var formatTimer = function formatTimer(time) {
    var date = new Date(0);
    date.setSeconds(time);
    var formatNum = date.toISOString().substr(11, 8);
    return /^00/.test(formatNum) ? formatNum.replace('00:', '') : formatNum;
  };

  return /*#__PURE__*/_react.default.createElement(_styles.default, null, "".concat(formatTimer(currentTime), " / ").concat(formatTimer(duration)));
}

VideoPlayerTimer.propTypes = {
  currentTime: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]).isRequired,
  duration: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]).isRequired
};
var _default = VideoPlayerTimer;
exports.default = _default;