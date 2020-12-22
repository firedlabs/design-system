"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContentDayStyle = exports.Title = exports.Goal = exports.WrapperOptions = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _palette = require("../../Styles/Settings/Colors/palette");

var _Tools = require("../../Styles/Tools");

var _styles = require("../Box/styles");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  --height-title: 6rem;\n\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: var(--color-third);\n  border-top: 0;\n  padding: 0;\n  margin-top: var(--height-title);\n\n  ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    border-color: ", ";\n\n    & > ", " {\n      color: ", ";\n      background-color: ", ";\n    }\n\n    & > ", " {\n      border-color: ", ";\n    }\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  background-color: var(--color-third);\n  ", ";\n  position: absolute;\n  top: 0;\n  transform: translateY(-100%);\n  padding: 0 var(--gap-small);\n  height: var(--height-title);\n  color: var(--color-black-first);\n  ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  padding: var(--gap-medium);\n  border-top: 0.5rem solid var(--color-third);\n  z-index: 1;\n\n  & > strong {\n    ", ";\n    font-weight: bold;\n    display: block;\n    margin-bottom: var(--gap-small);\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  flex-shrink: 0;\n  width: 100%;\n  flex-wrap: wrap;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var WrapperOptions = _styledComponents.default.div(_templateObject());

exports.WrapperOptions = WrapperOptions;

var Goal = _styledComponents.default.dd(_templateObject2(), _Tools.Body1, _Tools.Subtitle);

exports.Goal = Goal;

var Title = _styledComponents.default.dt(_templateObject3(), _Tools.Title, _Tools.BoxShadow.medium);

exports.Title = Title;

var changeColor = function changeColor(_ref) {
  var color = _ref.color,
      fontColor = _ref.fontColor;
  return color && (0, _styledComponents.css)(_templateObject4(), _palette.palette[color], Title, _palette.palette[fontColor], _palette.palette[color], Goal, _palette.palette[color]);
};

var ContentDayStyle = (0, _styledComponents.default)(_styles.BoxStyles)(_templateObject5(), changeColor);
exports.ContentDayStyle = ContentDayStyle;