"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfileStyle = exports.Nav = exports.Action = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Icons = _interopRequireDefault(require("../Icons"));

var _Image = _interopRequireDefault(require("../Image"));

var _Title = _interopRequireDefault(require("../Title"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  max-width: 340px;\n\n  & > ", " {\n    text-align: center;\n    color: var(--color-first);\n    font-size: 30px;\n    width: 100%;\n    transform: translateX(2px);\n  }\n\n  & > ", ", & > ", " {\n    margin-bottom: 10px;\n  }\n\n  & > ", " {\n    max-width: 330px;\n  }\n\n  & ", " {\n    width: 100%;\n  }\n\n  @media (max-width: 375px) {\n    & > ", " {\n      font-size: 26px;\n    }\n  }\n\n  @media (max-width: 320px) {\n    & > ", " {\n      font-size: 22px;\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 18.2%;\n\n  &:not(:last-child) {\n    margin-right: 40px;\n  }\n\n  &:hover {\n    transform: scale(1.1);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Action = _styledComponents.default.a(_templateObject());

exports.Action = Action;

var Nav = _styledComponents.default.nav(_templateObject2());

exports.Nav = Nav;

var ProfileStyle = _styledComponents.default.article(_templateObject3(), _Title.default, _Title.default, _Image.default, _Image.default, _Icons.default, _Title.default, _Title.default);

exports.ProfileStyle = ProfileStyle;