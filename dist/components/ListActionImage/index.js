"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ActionImage = _interopRequireDefault(require("../ActionImage"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ListActionImage(_ref) {
  var items = _ref.items,
      size = _ref.size;
  console.log('size', size);
  return /*#__PURE__*/_react.default.createElement(_styles.default, null, items.map(function (_ref2) {
    var href = _ref2.href,
        src = _ref2.src,
        alt = _ref2.alt,
        isPadding = _ref2.isPadding,
        backgroundColor = _ref2.backgroundColor;
    return /*#__PURE__*/_react.default.createElement(_ActionImage.default, {
      key: href,
      src: src,
      alt: alt,
      href: href,
      size: size,
      isPadding: isPadding,
      backgroundColor: backgroundColor
    });
  }));
}

var actionImage = {
  src: _propTypes.default.string.isRequired,
  alt: _propTypes.default.string.isRequired,
  href: _propTypes.default.string.isRequired
};
ListActionImage.defaultProps = {
  size: 'small'
};
ListActionImage.propTypes = {
  items: _propTypes.default.arrayOf(_propTypes.default.shape(actionImage)).isRequired,
  size: _propTypes.default.string
};
var _default = ListActionImage;
exports.default = _default;