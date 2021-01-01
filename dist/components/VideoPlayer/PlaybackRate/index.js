"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _style = require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PlaybackRate(_ref) {
  var showVelocity = _ref.showVelocity,
      velocities = _ref.velocities,
      changeActiveVelocity = _ref.changeActiveVelocity,
      velocityActive = _ref.velocityActive,
      toggleVelocity = _ref.toggleVelocity;
  return /*#__PURE__*/_react.default.createElement(_style.PlaybackRateStyle, null, /*#__PURE__*/_react.default.createElement(_style.Velocity, {
    showVelocity: showVelocity
  }, velocities.map(function (velocity) {
    return /*#__PURE__*/_react.default.createElement(_style.Action, {
      key: velocity,
      onClick: changeActiveVelocity,
      active: velocity === velocityActive
    }, velocity);
  })), /*#__PURE__*/_react.default.createElement(_style.IconWrapper, null, /*#__PURE__*/_react.default.createElement(_style.IconPlaybackRate, {
    onClick: toggleVelocity
  })));
}

PlaybackRate.defaultProps = {
  velocityActive: 1,
  showVelocity: false
};
PlaybackRate.propTypes = {
  velocityActive: _propTypes.default.string,
  changeActiveVelocity: _propTypes.default.func.isRequired,
  velocities: _propTypes.default.arrayOf(_propTypes.default.string).isRequired,
  toggleVelocity: _propTypes.default.func.isRequired,
  showVelocity: _propTypes.default.bool.isRequired
};
var _default = PlaybackRate;
exports.default = _default;