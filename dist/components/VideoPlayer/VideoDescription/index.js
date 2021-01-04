"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function VideoDescription(_ref) {
  var id = _ref.id,
      key = _ref.key,
      poster = _ref.poster,
      title = _ref.title,
      num = _ref.num,
      onClick = _ref.onClick,
      type = _ref.type;
  return /*#__PURE__*/_react.default.createElement(_styles.VideoDescriptionStyle, {
    onClick: onClick,
    id: id,
    key: key,
    "data-type": type
  }, /*#__PURE__*/_react.default.createElement(_styles.MiniThumb, {
    src: poster,
    alt: title
  }), /*#__PURE__*/_react.default.createElement(_styles.Title, null, /*#__PURE__*/_react.default.createElement(_styles.Number, null, num), title));
}

VideoDescription.defaultProps = {
  onClick: function onClick() {}
};
VideoDescription.propTypes = {
  poster: _propTypes.default.string.isRequired,
  title: _propTypes.default.string.isRequired,
  num: _propTypes.default.string.isRequired,
  id: _propTypes.default.string.isRequired,
  key: _propTypes.default.string.isRequired,
  type: _propTypes.default.string.isRequired,
  onClick: _propTypes.default.func
};
var _default = VideoDescription;
exports.default = _default;