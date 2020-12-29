"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Cover = _interopRequireDefault(require("../Cover"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ListCovers(_ref) {
  var covers = _ref.covers;
  return /*#__PURE__*/_react.default.createElement(_styles.ListCoversStyle, null, covers.map(function (cover) {
    return /*#__PURE__*/_react.default.createElement(_styles.Item, {
      key: cover.title
    }, /*#__PURE__*/_react.default.createElement(_Cover.default, cover));
  }));
}

var cover = {
  src: _propTypes.default.string.isRequired,
  alt: _propTypes.default.string.isRequired,
  title: _propTypes.default.string.isRequired
};
ListCovers.propTypes = {
  covers: _propTypes.default.arrayOf(_propTypes.default.shape(cover))
};
var _default = ListCovers;
exports.default = _default;