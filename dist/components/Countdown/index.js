"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Timer = _interopRequireDefault(require("../Timer"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Countdown(_ref) {
  var paramLastDate = _ref.paramLastDate,
      day = _ref.day,
      hrs = _ref.hrs,
      min = _ref.min,
      sec = _ref.sec;
  var lastDate = paramLastDate;

  var formatNumber = function formatNumber(number) {
    return String(Math.floor(number)).padStart(2, '0');
  };

  var calculateTimeLeft = function calculateTimeLeft() {
    var difference = +new Date(lastDate) - +new Date();
    var timeLeft = {
      day: '--',
      hrs: '--',
      min: '--',
      sec: '--'
    };

    if (difference > 0) {
      timeLeft = {
        day: formatNumber(difference / (1000 * 60 * 60 * 24)),
        hrs: formatNumber(difference / (1000 * 60 * 60) % 24),
        min: formatNumber(difference / 1000 / 60 % 60),
        sec: formatNumber(difference / 1000 % 60)
      };
    }

    return timeLeft;
  };

  var _useState = (0, _react.useState)({
    day: '--',
    hrs: '--',
    min: '--',
    sec: '--'
  }),
      _useState2 = _slicedToArray(_useState, 2),
      timeLeft = _useState2[0],
      setTimeLeft = _useState2[1];

  (0, _react.useEffect)(function () {
    setTimeLeft(calculateTimeLeft());
  }, []);
  (0, _react.useEffect)(function () {
    var timer = setTimeout(function () {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return function () {
      return clearTimeout(timer);
    };
  });
  return /*#__PURE__*/_react.default.createElement(_styles.CountdownStyles, null, day && /*#__PURE__*/_react.default.createElement(_Timer.default, {
    label: "Dias",
    time: timeLeft.day || '--'
  }), hrs && /*#__PURE__*/_react.default.createElement(_Timer.default, {
    label: "Hrs",
    time: timeLeft.hrs
  }), min && /*#__PURE__*/_react.default.createElement(_Timer.default, {
    label: "Min",
    time: timeLeft.min
  }), sec && /*#__PURE__*/_react.default.createElement(_Timer.default, {
    label: "Seg",
    time: timeLeft.sec
  }));
}

Countdown.defaultProps = {
  day: true,
  hrs: true,
  min: true,
  sec: true
};
Countdown.propTypes = {
  paramLastDate: _propTypes.default.string.isRequired,
  day: _propTypes.default.bool,
  hrs: _propTypes.default.bool,
  min: _propTypes.default.bool,
  sec: _propTypes.default.bool
};
var _default = Countdown;
exports.default = _default;