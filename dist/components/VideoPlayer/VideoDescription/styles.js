"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VideoDescriptionStyle = exports.MiniThumb = exports.Title = exports.Number = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Tools = require("../../../Styles/Tools");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: flex-start;\n  ", ";\n  transform-origin: center left;\n\n  &:hover {\n    transform: scale(1.05);\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  height: 10rem;\n  border: 0.5rem solid var(--color-first);\n  margin-right: var(--gap-small);\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  color: var(--color-third);\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  ", ";\n  margin-bottom: var(--gap-smallest);\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Number = _styledComponents.default.strong(_templateObject(), _Tools.Subtitle);

exports.Number = Number;

var Title = _styledComponents.default.figcaption(_templateObject2(), _Tools.Body2);

exports.Title = Title;

var MiniThumb = _styledComponents.default.img(_templateObject3());

exports.MiniThumb = MiniThumb;

var VideoDescriptionStyle = _styledComponents.default.figure(_templateObject4(), _Tools.Cursor.hover);

exports.VideoDescriptionStyle = VideoDescriptionStyle;