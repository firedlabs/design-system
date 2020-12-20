"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("./styles");

var _Title = _interopRequireDefault(require("../Title"));

var _Image = _interopRequireDefault(require("../Image"));

var _Icons = _interopRequireDefault(require("../Icons"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Profile(_ref) {
  var name = _ref.name,
      avatar = _ref.avatar,
      socialMedias = _ref.socialMedias;
  return /*#__PURE__*/_react.default.createElement(_styles.ProfileStyle, null, /*#__PURE__*/_react.default.createElement(_Title.default, null, name), /*#__PURE__*/_react.default.createElement(_Image.default, {
    src: avatar,
    alt: name
  }), /*#__PURE__*/_react.default.createElement(_styles.Nav, null, socialMedias.map(function (_ref2) {
    var name = _ref2.name,
        url = _ref2.url;
    return /*#__PURE__*/_react.default.createElement(_styles.Action, {
      key: url,
      href: url
    }, /*#__PURE__*/_react.default.createElement(_Icons.default, {
      name: name
    }));
  })));
}

Profile.propTypes = {
  name: _propTypes.default.string.isRequired,
  avatar: _propTypes.default.string.isRequired,
  socialMedias: _propTypes.default.arrayOf(_propTypes.default.shape({
    name: _propTypes.default.string.isRequired,
    url: _propTypes.default.string.isRequired
  }).isRequired)
};
var _default = Profile;
exports.default = _default;