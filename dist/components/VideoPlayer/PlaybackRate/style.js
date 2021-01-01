"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlaybackRateStyle = exports.IconWrapper = exports.IconPlaybackRate = exports.Velocity = exports.Action = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _styles = require("../../Box/styles");

var _IconPlayer = require("../IconPlayer");

var _Tools = require("../../../Styles/Tools");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  opacity: 1;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  --translateY: translateY(calc((100% + var(--gap-big)) * -1));\n\n  width: auto;\n  position: absolute;\n  top: 0;\n  right: 0;\n  opacity: 0;\n  transform: translateX(120%) var(--translateY);\n  padding: 0 var(--gap-smallest);\n  transition: transform 150ms ease-in-out, opacity 100ms ease-in-out;\n\n  &:hover {\n    transform: var(--translateY) translateX(25%);\n  }\n\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    opacity: 1;\n    transform: var(--translateY) translateX(25%);\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  ", ";\n  padding: var(--gap-smallest) 0;\n  color: var(--color-third);\n  color: ", ";\n  transition: transform 100ms linear;\n\n  &:hover {\n    color: var(--color-warning);\n    transform: scale(1.08);\n    ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Action = _styledComponents.default.span(_templateObject(), _Tools.Body2, function (_ref) {
  var active = _ref.active;
  return active && 'var(--color-warning)';
}, _Tools.Cursor.hover);

exports.Action = Action;

var animationShow = function animationShow(_ref2) {
  var showVelocity = _ref2.showVelocity;
  return showVelocity && (0, _styledComponents.css)(_templateObject2());
};

var Velocity = (0, _styledComponents.default)(_styles.BoxStyles)(_templateObject3(), animationShow);
exports.Velocity = Velocity;
var IconPlaybackRate = (0, _styledComponents.default)(_IconPlayer.IconPlayer).attrs({
  icon: 'playbackRate'
})(_templateObject4());
exports.IconPlaybackRate = IconPlaybackRate;
var IconWrapper = (0, _styledComponents.default)(_IconPlayer.IconPlayerWrapper)(_templateObject5());
exports.IconWrapper = IconWrapper;

var PlaybackRateStyle = _styledComponents.default.div(_templateObject6());

exports.PlaybackRateStyle = PlaybackRateStyle;