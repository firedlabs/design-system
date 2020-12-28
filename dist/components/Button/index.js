"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _palette = require("../../Styles/Settings/Colors/palette");

var _index = require("../../Styles/Tools/index");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  background-color: var(--color-first);\n  ", ";\n  padding: var(--gap-medium);\n  color: var(--color-third);\n  ", ";\n  text-decoration: none;\n  text-align: center;\n\n  &:hover {\n    transform: translateY(calc(var(--gap-smallest) / -2)) scale(1.03);\n  }\n\n  ", ";\n  ", ";\n  ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    ", "\n    padding: var(--gap-small);\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    ", "\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  background-color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var changeColor = function changeColor(_ref) {
  var color = _ref.color,
      backgroundColor = _ref.backgroundColor;
  return (0, _styledComponents.css)(_templateObject(), _palette.palette[color], _palette.palette[backgroundColor]);
};

var hasMedium = function hasMedium(_ref2) {
  var medium = _ref2.medium;
  return medium && (0, _styledComponents.css)(_templateObject2(), _index.Subtitle);
};

var hasSmall = function hasSmall(_ref3) {
  var small = _ref3.small;
  return small && (0, _styledComponents.css)(_templateObject3(), _index.Body2);
};

var Button = _styledComponents.default.button(_templateObject4(), _index.Title, _index.BoxShadow.small, changeColor, hasMedium, hasSmall);

Button.defaultProps = {
  children: 'Enviar'
};
Button.propTypes = {
  children: _propTypes.default.string
};
var _default = Button;
exports.default = _default;