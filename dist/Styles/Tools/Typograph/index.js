"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Link = exports.Caption = exports.Body2 = exports.Body1 = exports.Subtitle = exports.Title = exports.Heading = void 0;

var _styledComponents = require("styled-components");

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  color: var(--color-first);\n  font-weight: bold;\n  text-underline-offset: 0.4em;\n  text-decoration-thickness: 0.1em;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  font-size: max(1.8rem, 12px);\n  line-height: max(2.4rem, 18px);\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  font-size: max(2rem, 15px);\n  line-height: max(2.6rem, 20px);\n  font-weight: 500;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  font-size: max(3rem, 20px);\n  line-height: max(4.2rem, 28px);\n  font-weight: 300;\n"]);

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
var Link = (0, _styledComponents.css)(_templateObject7());
exports.Link = Link;