"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Box(_ref) {
  var light = _ref.light,
      children = _ref.children,
      src = _ref.src,
      alt = _ref.alt;
  var isImage = src && alt;
  var isContent = !!children;

  var hasContent = function hasContent() {
    return isContent && /*#__PURE__*/_react.default.createElement(_styles.Content, null, children);
  };

  var hasImage = function hasImage() {
    return isImage && /*#__PURE__*/_react.default.createElement(_styles.Image, {
      src: src,
      alt: alt
    });
  };

  return /*#__PURE__*/_react.default.createElement(_styles.BoxStyles, {
    light: light,
    image: isImage
  }, hasContent() || hasImage());
}

Box.propTypes = {
  light: _propTypes.default.bool,
  children: _propTypes.default.string,
  src: _propTypes.default.string,
  alt: _propTypes.default.string
};
var _default = Box;
exports.default = _default;