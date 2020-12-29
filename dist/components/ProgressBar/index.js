"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ProgressBar(_ref) {
  var valueNow = _ref.valueNow,
      valueMax = _ref.valueMax,
      boxShadow = _ref.boxShadow,
      borderColor = _ref.borderColor,
      color = _ref.color,
      barColor = _ref.barColor,
      backgroundColor = _ref.backgroundColor;
  var valueMin = 0;
  var currentPercentage = Math.floor(valueNow / (valueMax - valueMin) * 100);
  return /*#__PURE__*/_react.default.createElement(_styles.default, {
    role: "progressbar",
    "aria-valuenow": valueNow,
    "aria-valuemin": valueMin,
    "aria-valuemax": valueMax,
    currentPercentage: currentPercentage,
    boxShadow: boxShadow,
    borderColor: borderColor,
    color: color,
    barColor: barColor,
    backgroundColor: backgroundColor
  }, currentPercentage + '%');
}

ProgressBar.defaultProps = {
  boxShadow: false,
  borderColor: 'colorSecond',
  color: 'colorBlackFirst',
  barColor: 'colorSuccess',
  backgroundColor: 'colorThird'
};
ProgressBar.propTypes = {
  valueNow: _propTypes.default.number.isRequired,
  valueMax: _propTypes.default.number.isRequired,
  boxShadow: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.bool]),
  borderColor: _propTypes.default.string,
  color: _propTypes.default.string,
  barColor: _propTypes.default.string,
  backgroundColor: _propTypes.default.string
};
var _default = ProgressBar;
exports.default = _default;