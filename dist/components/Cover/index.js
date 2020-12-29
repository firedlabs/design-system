"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Box = _interopRequireDefault(require("../Box"));

var _ListTags = _interopRequireDefault(require("../ListTags"));

var _ProgressBar = _interopRequireDefault(require("../ProgressBar"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Cover(_ref) {
  var src = _ref.src,
      alt = _ref.alt,
      title = _ref.title,
      tags = _ref.tags,
      progress = _ref.progress;

  var hasProgress = function hasProgress() {
    return progress && /*#__PURE__*/_react.default.createElement(_ProgressBar.default, progress);
  };

  return /*#__PURE__*/_react.default.createElement(_styles.CoverStyle, null, /*#__PURE__*/_react.default.createElement(_Box.default, {
    as: "figure",
    src: src,
    alt: alt,
    borderColor: "colorSecond"
  }), hasProgress(), /*#__PURE__*/_react.default.createElement(_styles.Title, {
    as: "figcaption"
  }, title), /*#__PURE__*/_react.default.createElement(_ListTags.default, {
    tags: tags
  }));
}

var progress = _propTypes.default.objectOf({
  valueNow: _propTypes.default.number.isRequired,
  valueMax: _propTypes.default.number.isRequired
});

Cover.defaultProps = {
  progress: false
};
Cover.propTypes = {
  src: _propTypes.default.string.isRequired,
  alt: _propTypes.default.string.isRequired,
  title: _propTypes.default.string.isRequired,
  tags: _propTypes.default.arrayOf(_propTypes.default.shape({
    children: _propTypes.default.string.isRequired,
    backgroundColor: _propTypes.default.string,
    color: _propTypes.default.string
  })),
  progress: progress
};
var _default = Cover;
exports.default = _default;