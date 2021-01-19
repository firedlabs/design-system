"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _VideoDescription = _interopRequireDefault(require("../VideoDescription"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Playlist(_ref) {
  var playlistOpen = _ref.playlistOpen,
      menuOpen = _ref.menuOpen,
      lessons = _ref.lessons,
      lessonActive = _ref.lessonActive,
      clickMenuLesson = _ref.clickMenuLesson,
      clickLesson = _ref.clickLesson,
      clickIconPlaylist = _ref.clickIconPlaylist,
      clickVideo = _ref.clickVideo;
  return /*#__PURE__*/_react.default.createElement(_styles.PlaylistStyle, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperLesson, {
    playlistOpen: playlistOpen
  }, /*#__PURE__*/_react.default.createElement(_styles.MenuLesson, {
    open: menuOpen,
    onClick: clickMenuLesson
  }, lessons.map(function (_ref2) {
    var title = _ref2.title,
        tag = _ref2.tag;
    return /*#__PURE__*/_react.default.createElement(_styles.Lesson, {
      key: title,
      active: title === lessonActive,
      onClick: clickLesson,
      "data-ref": title
    }, title, tag && /*#__PURE__*/_react.default.createElement(_styles.Tag, {
      "data-ref": title
    }, tag));
  })), /*#__PURE__*/_react.default.createElement(_styles.VideosLesson, null, lessons.map(function (_ref3) {
    var title = _ref3.title,
        videos = _ref3.videos;
    return /*#__PURE__*/_react.default.createElement(_styles.Videos, {
      key: title + 'video',
      active: title === lessonActive
    }, videos.map(function (_ref4, key) {
      var poster = _ref4.poster,
          title = _ref4.title,
          src = _ref4.src,
          type = _ref4.type;
      return /*#__PURE__*/_react.default.createElement(_VideoDescription.default, {
        num: "#".concat(String(key + 1).padStart(2, '0')),
        id: src,
        "data-type": type,
        onClick: clickVideo,
        key: src,
        poster: poster,
        title: title
      });
    }));
  }))), /*#__PURE__*/_react.default.createElement(_styles.IconWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.PlaylistIcon, {
    onClick: clickIconPlaylist
  })));
}

var videos = _propTypes.default.arrayOf(_propTypes.default.shape({
  poster: _propTypes.default.string.isRequired,
  title: _propTypes.default.string.isRequired
})).isRequired;

var lesson = _propTypes.default.shape({
  title: _propTypes.default.string.isRequired,
  videos: videos
}).isRequired;

Playlist.defaultProps = {
  playlistOpen: false,
  menuOpen: false
};
Playlist.propTypes = {
  playlistOpen: _propTypes.default.bool,
  menuOpen: _propTypes.default.bool,
  lessons: _propTypes.default.arrayOf(lesson).isRequired,
  lessonActive: _propTypes.default.string.isRequired,
  clickMenuLesson: _propTypes.default.func.isRequired,
  clickLesson: _propTypes.default.func.isRequired,
  clickIconPlaylist: _propTypes.default.func.isRequired,
  clickVideo: _propTypes.default.func.isRequired
};
var _default = Playlist;
exports.default = _default;