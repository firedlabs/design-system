"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Fullscreen(_ref) {
  var onClick = _ref.onClick,
      active = _ref.active;
  return /*#__PURE__*/_react.default.createElement(_styles.FullscreenStyle, {
    onClick: onClick
  }, /*#__PURE__*/_react.default.createElement(_styles.IconFullcreen, {
    active: active
  }));
}

Fullscreen.defaultProps = {
  active: false
};
Fullscreen.propTypes = {
  onClick: _propTypes.default.func.isRequired,
  active: _propTypes.default.bool
};
var _default = Fullscreen;
exports.default = _default;