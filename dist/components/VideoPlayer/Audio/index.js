"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Audio(_ref) {
  var mute = _ref.mute,
      onClick = _ref.onClick,
      handleVolume = _ref.handleVolume,
      volume = _ref.volume;

  var handleClick = function handleClick(event) {
    event.stopPropagation();
  };

  return /*#__PURE__*/_react.default.createElement(_styles.AudioStyle, {
    mute: mute,
    onClick: onClick
  }, /*#__PURE__*/_react.default.createElement(_styles.AudioIcon, null), /*#__PURE__*/_react.default.createElement(_styles.Mute, null), /*#__PURE__*/_react.default.createElement(_styles.InputRange, {
    value: volume,
    onClick: handleClick,
    onChange: handleVolume
  }), /*#__PURE__*/_react.default.createElement(_styles.VolumeBar, {
    volume: volume
  }));
}

Audio.propTypes = {
  mute: _propTypes.default.bool.isRequired,
  onClick: _propTypes.default.func.isRequired,
  handleVolume: _propTypes.default.func.isRequired,
  volume: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]).isRequired
};
var _default = Audio;
exports.default = _default;