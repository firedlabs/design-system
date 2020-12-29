"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Live = _interopRequireDefault(require("../Live"));

var _Image = _interopRequireDefault(require("../Image"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TitleLive(_ref) {
  var src = _ref.src,
      alt = _ref.alt,
      title = _ref.title,
      isLive = _ref.isLive;
  return /*#__PURE__*/_react.default.createElement(_styles.TitleLiveStyle, null, /*#__PURE__*/_react.default.createElement(_Image.default, {
    src: src,
    alt: alt,
    borderColor: "colorSecond"
  }), /*#__PURE__*/_react.default.createElement(_styles.Content, null, /*#__PURE__*/_react.default.createElement(_Live.default, {
    active: isLive
  }, "Live"), /*#__PURE__*/_react.default.createElement(_styles.Title, null, title)));
}

TitleLive.defaultProps = {
  isLive: false
};
TitleLive.propTypes = {
  src: _propTypes.default.string.isRequired,
  alt: _propTypes.default.string.isRequired,
  title: _propTypes.default.string.isRequired,
  isLive: _propTypes.default.bool
};
var _default = TitleLive;
exports.default = _default;