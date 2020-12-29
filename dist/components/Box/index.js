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
      alt = _ref.alt,
      as = _ref.as,
      borderColor = _ref.borderColor,
      backgroundColor = _ref.backgroundColor,
      color = _ref.color;
  var isImage = src && alt;
  var isContent = !!children;

  var hasContent = function hasContent() {
    return isContent && /*#__PURE__*/_react.default.createElement(_styles.Content, {
      color: color
    }, children);
  };

  var hasImage = function hasImage() {
    return isImage && /*#__PURE__*/_react.default.createElement(_styles.Image, {
      src: src,
      alt: alt
    });
  };

  return /*#__PURE__*/_react.default.createElement(_styles.BoxStyles, {
    as: as,
    light: light,
    image: isImage,
    borderColor: borderColor,
    backgroundColor: backgroundColor
  }, hasContent() || hasImage());
}

Box.defaultProps = {
  as: 'article',
  light: false,
  children: false,
  src: false,
  alt: false,
  borderColor: 'colorThird',
  backgroundColor: 'colorBlackSecond'
};
Box.propTypes = {
  as: _propTypes.default.string,
  light: _propTypes.default.bool,
  children: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.bool]),
  src: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.bool]),
  alt: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.bool]),
  borderColor: _propTypes.default.string,
  backgroundColor: _propTypes.default.string,
  color: _propTypes.default.string
};
var _default = Box;
exports.default = _default;