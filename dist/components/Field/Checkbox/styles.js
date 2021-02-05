"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckboxStyle = exports.Content = exports.Icon = exports.Check = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Tools = require("../../../Styles/Tools");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n        transform: translateY(20px);\n      "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n        transform: rotate(-45deg) translate(34px, -30px);\n        opacity: 1;\n        border-color: var(--color-success);\n      "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 200px;\n  height: 200px;\n  padding: var(--gap-medium);\n  background-color: var(--color-fourth);\n  border: 5px solid var(--color-third);\n  ", ";\n  transition: transform 100ms linear;\n  transform: ", ";\n\n  &:hover {\n    transform-origin: center;\n    transform: scale(1.07);\n  }\n\n  & > ", " {\n    ", "\n  }\n\n  & > ", " {\n    ", "\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  position: relative;\n  color: var(--color-third);\n  text-align: center;\n  transition: transform 100ms ease-in-out;\n\n  ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    ", "\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  width: 40px;\n  height: 20px;\n  border-left: 5px solid var(--color-third);\n  border-bottom: 5px solid var(--color-third);\n  background-color: var(--color-fourth);\n  transform-origin: center;\n  transform: rotate(-45deg) scale(0.5);\n  transition: transform 200ms ease-in-out, opacity 100ms ease-in-out,\n    border-color 100ms 150ms ease-in-out;\n  z-index: -1;\n  opacity: 0;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: none;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Check = _styledComponents.default.input.attrs({
  type: 'checkbox'
})(_templateObject());

exports.Check = Check;

var Icon = _styledComponents.default.span(_templateObject2());

exports.Icon = Icon;

var hasSmall = function hasSmall(_ref) {
  var small = _ref.small;
  return small && (0, _styledComponents.css)(_templateObject3(), _Tools.Body2);
};

var Content = _styledComponents.default.span(_templateObject4(), _Tools.Body1, hasSmall);

exports.Content = Content;

var CheckboxStyle = _styledComponents.default.label(_templateObject5(), _Tools.Cursor.hover, function (_ref2) {
  var active = _ref2.active;
  return active && 'scale(0.95)';
}, Icon, function (_ref3) {
  var active = _ref3.active;
  return active && (0, _styledComponents.css)(_templateObject6());
}, Content, function (_ref4) {
  var active = _ref4.active;
  return active && (0, _styledComponents.css)(_templateObject7());
});

exports.CheckboxStyle = CheckboxStyle;