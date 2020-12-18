"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _html = _interopRequireDefault(require("../../assets/icons/html.png"));

var _css = _interopRequireDefault(require("../../assets/icons/css.png"));

var _twitter = _interopRequireDefault(require("../../assets/icons/twitter.png"));

var _twitch = _interopRequireDefault(require("../../assets/icons/twitch.png"));

var _youtube = _interopRequireDefault(require("../../assets/icons/youtube.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  image-rendering: crisp-edges;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var icons = {
  html: _html.default,
  css: _css.default,
  twitter: _twitter.default,
  twitch: _twitch.default,
  youtube: _youtube.default
};

var Icons = _styledComponents.default.img.attrs(function (_ref) {
  var name = _ref.name;
  return {
    src: icons[name]
  };
})(_templateObject());

var _default = Icons;
exports.default = _default;