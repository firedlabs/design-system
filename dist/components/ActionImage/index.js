"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ActionImage(_ref) {
  var href = _ref.href,
      src = _ref.src,
      alt = _ref.alt;
  return /*#__PURE__*/_react.default.createElement(_styles.Action, {
    href: href
  }, /*#__PURE__*/_react.default.createElement(_styles.Image, {
    src: src,
    alt: alt
  }));
}

ActionImage.propTypes = {
  href: _propTypes.default.string.isRequired,
  src: _propTypes.default.string.isRequired,
  alt: _propTypes.default.string.isRequired
};
var _default = ActionImage;
exports.default = _default;