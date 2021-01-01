"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FullscreenStyle = exports.IconFullcreen = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _IconPlayer = require("../IconPlayer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  opacity: 1;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var IconFullcreen = (0, _styledComponents.default)(_IconPlayer.IconPlayer).attrs(function (_ref) {
  var active = _ref.active;
  return {
    icon: active ? 'nofullscreen' : 'fullscreen'
  };
})(_templateObject());
exports.IconFullcreen = IconFullcreen;
var FullscreenStyle = (0, _styledComponents.default)(_IconPlayer.IconPlayerWrapper)(_templateObject2());
exports.FullscreenStyle = FullscreenStyle;