"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Settings(_ref) {
  var showSettings = _ref.showSettings,
      showVelocity = _ref.showVelocity,
      toggleShowSettings = _ref.toggleShowSettings,
      toggleVelocity = _ref.toggleVelocity,
      changeActiveVelocity = _ref.changeActiveVelocity,
      velocityActive = _ref.velocityActive,
      velocities = _ref.velocities;
  return /*#__PURE__*/_react.default.createElement(_styles.SettingsStyle, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperIcon, null, /*#__PURE__*/_react.default.createElement(_styles.Icon, {
    onClick: toggleShowSettings
  })), /*#__PURE__*/_react.default.createElement(_styles.Menu, {
    showMenu: showSettings
  }, /*#__PURE__*/_react.default.createElement(_styles.Action, {
    onClick: toggleVelocity
  }, "Velocidade")), /*#__PURE__*/_react.default.createElement(_styles.Velocity, {
    showVelocity: showVelocity
  }, velocities.map(function (velocity) {
    return /*#__PURE__*/_react.default.createElement(_styles.Action, {
      key: velocity,
      onClick: changeActiveVelocity,
      active: velocity === velocityActive
    }, velocity);
  })));
}

Settings.propTypes = {
  showSettings: _propTypes.default.bool.isRequired,
  toggleShowSettings: _propTypes.default.func.isRequired,
  toggleVelocity: _propTypes.default.func.isRequired,
  velocityActive: _propTypes.default.bool.isRequired,
  changeActiveVelocity: _propTypes.default.func.isRequired,
  showVelocity: _propTypes.default.bool.isRequired,
  velocities: _propTypes.default.arrayOf(_propTypes.default.string).isRequired
};
var _default = Settings;
exports.default = _default;