"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AudioStyle = exports.AudioIcon = exports.Mute = exports.VolumeBar = exports.InputRange = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Tools = require("../../../Styles/Tools");

var _IconPlayer = require("../IconPlayer");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  --widthVolume: 9rem;\n  display: flex;\n  padding-left: calc(var(--wh) * var(--scale));\n  align-items: center;\n  width: auto;\n\n  &:hover > ", " {\n    opacity: 1;\n    transform: scaleX(1);\n  }\n\n  ", "\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n          & > ", " {\n            opacity: 1;\n          }\n        "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n          & > ", " {\n            opacity: 1;\n          }\n        "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

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
  var data = _taggedTemplateLiteral([""]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  position: relative;\n  background-color: var(--color-third);\n  height: 0.6rem;\n  width: var(--widthVolume);\n  flex-shrink: 0;\n  margin-left: var(--gap-smallest);\n  overflow: hidden;\n  opacity: 0;\n  transform-origin: left top;\n  transform: scaleX(0);\n  transition: opacity 200ms linear, transform 100ms linear;\n\n  &::after {\n    content: '';\n    position: absolute;\n    left: calc(var(--widthVolume) * -1);\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background-color: var(--color-first);\n    transform-origin: left center;\n    ", "\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  transform: translateX(", ");\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: var(--widthVolume);\n  flex-shrink: 0;\n  position: absolute;\n  right: 0;\n  z-index: 1;\n  opacity: 0;\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var InputRange = _styledComponents.default.input.attrs({
  type: 'range',
  step: 1,
  min: 0,
  max: 100,
  id: 'volume'
})(_templateObject(), _Tools.Cursor.hover);

exports.InputRange = InputRange;
var changePositionBar = (0, _styledComponents.css)(_templateObject2(), function (_ref) {
  var volume = _ref.volume;
  return "".concat(volume, "%");
});

var VolumeBar = _styledComponents.default.label.attrs({
  forHtml: 'volume'
})(_templateObject3(), _Tools.Cursor.hover, changePositionBar);

exports.VolumeBar = VolumeBar;
var Mute = (0, _styledComponents.default)(_IconPlayer.IconPlayer).attrs({
  icon: 'mute'
})(_templateObject4());
exports.Mute = Mute;
var AudioIcon = (0, _styledComponents.default)(_IconPlayer.IconPlayer).attrs({
  icon: 'audio'
})(_templateObject5());
exports.AudioIcon = AudioIcon;
var toggleMute = (0, _styledComponents.css)(_templateObject6(), function (_ref2) {
  var mute = _ref2.mute;
  return mute ? (0, _styledComponents.css)(_templateObject7(), Mute) : (0, _styledComponents.css)(_templateObject8(), AudioIcon);
});
var AudioStyle = (0, _styledComponents.default)(_IconPlayer.IconPlayerWrapper)(_templateObject9(), VolumeBar, toggleMute);
exports.AudioStyle = AudioStyle;