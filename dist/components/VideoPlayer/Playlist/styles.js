"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlaylistStyle = exports.WrapperLesson = exports.VideosLesson = exports.Videos = exports.MenuLesson = exports.Lesson = exports.IconWrapper = exports.PlaylistIcon = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _polished = require("polished");

var _IconPlayer = require("../IconPlayer");

var _palette = require("../../../Styles/Settings/Colors/palette");

var _Tools = require("../../../Styles/Tools");

var _styles = require("../VideoDescription/styles");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject11() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  width: 30vw;\n  min-width: 290px;\n  height: 100vh;\n  background-color: ", ";\n  position: fixed;\n  top: 0;\n  right: 0;\n  border-left: 0.5rem var(--color-second) solid;\n  padding-top: 7.5rem;\n  transition: 200ms transform ease-in-out, 150ms opacity ease-in-out;\n\n  opacity: 0;\n  transform: translateX(100%) translateY(-100%);\n\n  ", "\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    transform: translate(0) translateY(-100%);\n    opacity: 1;\n  "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  padding: var(--gap-big) var(--gap-medium);\n  overflow-y: scroll;\n  overflow-x: hidden;\n  height: calc(100% - 8.5rem);\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  display: ", ";\n\n  & > ", ":not(:last-child) {\n    margin-bottom: var(--gap-medium);\n  }\n  & > ", ":last-child {\n    margin-bottom: var(--gap-big);\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  ", "\n  background-color: var(--color-black-first);\n  color: var(--color-third);\n  border-bottom: 0.5rem solid var(--color-second);\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n\n  &::after {\n    content: '>';\n\n    position: absolute;\n    z-index: 2;\n    top: var(--gap-medium);\n    right: var(--gap-medium);\n    transform: rotate(90deg) scaleY(1.2);\n    color: var(--color-first);\n  }\n\n  ", "\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    & > ", " {\n      opacity: 1;\n      position: static;\n    }\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  display: flex;\n  align-items: center;\n  padding: 0 var(--gap-medium);\n  height: 7rem;\n  opacity: 0;\n  position: absolute;\n\n  &:hover {\n    background-color: var(--color-black-third);\n  }\n\n  ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    opacity: 1;\n    position: relative;\n    z-index: 1;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

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

var PlaylistIcon = (0, _styledComponents.default)(_IconPlayer.IconPlayer).attrs({
  icon: 'playlist'
})(_templateObject());
exports.PlaylistIcon = PlaylistIcon;
var IconWrapper = (0, _styledComponents.default)(_IconPlayer.IconPlayerWrapper)(_templateObject2());
exports.IconWrapper = IconWrapper;

var hasActive = function hasActive(_ref) {
  var active = _ref.active;
  return active && (0, _styledComponents.css)(_templateObject3());
};

var Lesson = _styledComponents.default.a(_templateObject4(), _Tools.Cursor.hover, hasActive);

exports.Lesson = Lesson;

var hasOpen = function hasOpen(_ref2) {
  var open = _ref2.open;
  return open && (0, _styledComponents.css)(_templateObject5(), Lesson);
};

var MenuLesson = _styledComponents.default.menu(_templateObject6(), _Tools.Subtitle, _Tools.Cursor.hover, hasOpen);

exports.MenuLesson = MenuLesson;

var Videos = _styledComponents.default.div(_templateObject7(), function (_ref3) {
  var active = _ref3.active;
  return active ? 'block' : 'none';
}, _styles.VideoDescriptionStyle, _styles.VideoDescriptionStyle);

exports.Videos = Videos;

var VideosLesson = _styledComponents.default.section(_templateObject8());

exports.VideosLesson = VideosLesson;

var hasPlaylistOpen = function hasPlaylistOpen(_ref4) {
  var playlistOpen = _ref4.playlistOpen;
  return playlistOpen && (0, _styledComponents.css)(_templateObject9());
};

var WrapperLesson = _styledComponents.default.section(_templateObject10(), (0, _polished.transparentize)(0.1, _palette.palette.colorSecond), hasPlaylistOpen);

exports.WrapperLesson = WrapperLesson;

var PlaylistStyle = _styledComponents.default.div(_templateObject11());

exports.PlaylistStyle = PlaylistStyle;