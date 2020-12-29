"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TitleLiveStyle = exports.Content = exports.Title = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Image = _interopRequireDefault(require("../Image"));

var _Tools = require("../../Styles/Tools");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  & > ", " {\n    width: 6rem;\n    border-width: 0.4rem;\n    margin-right: var(--gap-medium);\n  }\n"]);

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
  var data = _taggedTemplateLiteral(["\n  ", ";\n  color: var(--color-third);\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Title = _styledComponents.default.h2(_templateObject(), _Tools.Title, _Tools.TextShadow.colorSize('colorSecond', 'small'));

exports.Title = Title;

var Content = _styledComponents.default.div(_templateObject2());

exports.Content = Content;

var TitleLiveStyle = _styledComponents.default.div(_templateObject3(), _Image.default);

exports.TitleLiveStyle = TitleLiveStyle;