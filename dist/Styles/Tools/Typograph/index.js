"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Caption = exports.Body2 = exports.Body1 = exports.Subtitle = exports.Title = exports.Heading = void 0;

var _styledComponents = require("styled-components");

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  font-size: 1.8rem;\n  line-height: 2.4rem;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  font-size: 2rem;\n  line-height: 2.6rem;\n  font-weight: 500;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  font-size: 3rem;\n  line-height: 4.2rem;\n  font-weight: 300;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  font-family: 'Press Start 2P', sans-serif;\n  font-size: 2.5rem;\n  line-height: 3rem;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-family: 'Press Start 2P', sans-serif;\n  font-size: 3rem;\n  line-height: 3.5rem;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-family: 'Press Start 2P', sans-serif;\n  font-size: 4rem;\n  line-height: 6rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Heading = (0, _styledComponents.css)(_templateObject());
exports.Heading = Heading;
var Title = (0, _styledComponents.css)(_templateObject2());
exports.Title = Title;
var Subtitle = (0, _styledComponents.css)(_templateObject3());
exports.Subtitle = Subtitle;
var Body1 = (0, _styledComponents.css)(_templateObject4());
exports.Body1 = Body1;
var Body2 = (0, _styledComponents.css)(_templateObject5());
exports.Body2 = Body2;
var Caption = (0, _styledComponents.css)(_templateObject6());
exports.Caption = Caption;