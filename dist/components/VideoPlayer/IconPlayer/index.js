"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconPlayerWrapper = exports.IconPlayer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _icons = _interopRequireDefault(require("../../../assets/images/icons.png"));

var _Tools = require("../../../Styles/Tools");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  --wh: 1.6rem;\n  --scale: 2;\n  position: relative;\n  width: calc(var(--wh) * var(--scale));\n  height: calc(var(--wh) * var(--scale));\n  transform-origin: center center;\n  transition: transform 100ms linear;\n\n  &:hover,\n  &:focus {\n    transform: scale(1.2);\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background: url(", ") no-repeat;\n  background-position: ", ";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: var(--wh);\n  height: var(--wh);\n  opacity: 0;\n  transform-origin: left top;\n  transform: scale(var(--scale));\n  image-rendering: crisp-edges;\n  image-rendering: pixelated;\n  ", ";\n  transition: opacity 100ms linear, transform 100ms linear;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var positionIcons = {
  audio: '0 -16px',
  mute: '-16px -16px',
  play: '0 0',
  pause: '-16px 0',
  fullscreen: '0 -32px',
  nofullscreen: '-16px -32px',
  playbackRate: '0 -48px',
  playlist: '-16px -48px'
};

var IconPlayer = _styledComponents.default.span(_templateObject(), _icons.default, function (_ref) {
  var icon = _ref.icon;
  return positionIcons[icon];
}, _Tools.Cursor.hover);

exports.IconPlayer = IconPlayer;

var IconPlayerWrapper = _styledComponents.default.div(_templateObject2());

exports.IconPlayerWrapper = IconPlayerWrapper;