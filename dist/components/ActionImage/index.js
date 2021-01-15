"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("./styles");

var _palette = require("../../Styles/Settings/Colors/palette");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ActionImage(_ref) {
  var href = _ref.href,
      src = _ref.src,
      alt = _ref.alt,
      backgroundColor = _ref.backgroundColor,
      size = _ref.size,
      isPadding = _ref.isPadding,
      boxShadow = _ref.boxShadow,
      as = _ref.as,
      to = _ref.to;
  return /*#__PURE__*/_react.default.createElement(_styles.ActionImageStyle, {
    href: href,
    backgroundColor: backgroundColor,
    size: size,
    isPadding: isPadding,
    boxShadow: boxShadow,
    as: as,
    to: to
  }, /*#__PURE__*/_react.default.createElement(_styles.Image, {
    src: src,
    alt: alt
  }));
}

ActionImage.defaultProps = {
  href: '#',
  backgroundColor: _palette.palette.colorFirst,
  size: 'small',
  isPadding: true,
  boxShadow: false,
  as: 'a',
  to: ''
};
ActionImage.propTypes = {
  src: _propTypes.default.string.isRequired,
  alt: _propTypes.default.string.isRequired,
  href: _propTypes.default.string,
  isPadding: _propTypes.default.bool,
  backgroundColor: _propTypes.default.string,
  size: _propTypes.default.string,
  boxShadow: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.bool]),
  as: _propTypes.default.string,
  to: _propTypes.default.string
};
var _default = ActionImage;
exports.default = _default;