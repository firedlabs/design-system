"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("./styles");

var _Option = _interopRequireDefault(require("./Option"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ContentDay(_ref) {
  var title = _ref.title,
      goal = _ref.goal,
      options = _ref.options,
      color = _ref.color,
      fontColor = _ref.fontColor;

  var hasOptions = function hasOptions() {
    return options && options.map(function (_ref2) {
      var label = _ref2.label,
          description = _ref2.description;
      return label && description && /*#__PURE__*/_react.default.createElement(_Option.default, {
        label: label,
        description: description,
        length: options.length,
        color: color
      });
    });
  };

  return /*#__PURE__*/_react.default.createElement(_styles.ContentDayStyle, {
    color: color,
    fontColor: fontColor
  }, /*#__PURE__*/_react.default.createElement(_styles.Title, null, title), /*#__PURE__*/_react.default.createElement(_styles.Goal, null, /*#__PURE__*/_react.default.createElement("strong", null, "Objetivo:"), goal), /*#__PURE__*/_react.default.createElement(_styles.WrapperOptions, null, hasOptions()));
}

ContentDay.defaultProps = {
  options: [],
  color: 'colorThird',
  fontColor: 'colorBlackFirst'
};
ContentDay.propTypes = {
  title: _propTypes.default.string.isRequired,
  goal: _propTypes.default.string.isRequired,
  options: _propTypes.default.arrayOf(_propTypes.default.shape({
    label: _propTypes.default.string.isRequired,
    description: _propTypes.default.string.isRequired,
    length: _propTypes.default.number.isRequired
  })),
  color: _propTypes.default.string,
  fontColor: _propTypes.default.string
};
var _default = ContentDay;
exports.default = _default;