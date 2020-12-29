"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Tag = _interopRequireDefault(require("../Tag"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ListTags(_ref) {
  var tags = _ref.tags;
  return /*#__PURE__*/_react.default.createElement(_styles.ListTagsStyle, null, tags.map(function (tag) {
    return /*#__PURE__*/_react.default.createElement(_styles.Item, {
      key: tag
    }, /*#__PURE__*/_react.default.createElement(_Tag.default, tag));
  }));
}

ListTags.propTypes = {
  tags: _propTypes.default.arrayOf(_propTypes.default.shape({
    children: _propTypes.default.string.isRequired,
    backgroundColor: _propTypes.default.string,
    color: _propTypes.default.string
  }))
};
var _default = ListTags;
exports.default = _default;