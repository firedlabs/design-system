"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PlayAndPause(_ref) {
  var play = _ref.play,
      onClick = _ref.onClick;
  return /*#__PURE__*/_react.default.createElement(_styles.PlayAndPauseStyle, {
    play: play,
    onClick: onClick
  }, /*#__PURE__*/_react.default.createElement(_styles.Play, null), /*#__PURE__*/_react.default.createElement(_styles.Pause, null));
}

PlayAndPause.propTypes = {
  play: _propTypes.default.bool.isRequired,
  onClick: _propTypes.default.func.isRequired
};
var _default = PlayAndPause;
exports.default = _default;