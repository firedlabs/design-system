"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Audio = _interopRequireDefault(require("../Audio"));

var _Fullscreen = _interopRequireDefault(require("../Fullscreen"));

var _PlayAndPause = _interopRequireDefault(require("../PlayAndPause"));

var _VideoPlayerProgressBar = _interopRequireDefault(require("../VideoPlayerProgressBar"));

var _VideoPlayerTimer = _interopRequireDefault(require("../VideoPlayerTimer"));

var _PlaybackRate = _interopRequireDefault(require("../PlaybackRate"));

var _Playlist = _interopRequireDefault(require("../Playlist"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Controls(_ref) {
  var showControls = _ref.showControls,
      handleChangeProgressBar = _ref.handleChangeProgressBar,
      duration = _ref.duration,
      progress = _ref.progress,
      buffer = _ref.buffer,
      play = _ref.play,
      playAndPause = _ref.playAndPause,
      mute = _ref.mute,
      handleMute = _ref.handleMute,
      volume = _ref.volume,
      handleVolume = _ref.handleVolume,
      fullscreen = _ref.fullscreen,
      activeFullscreen = _ref.activeFullscreen,
      toggleVelocity = _ref.toggleVelocity,
      showVelocity = _ref.showVelocity,
      changeActiveVelocity = _ref.changeActiveVelocity,
      velocityActive = _ref.velocityActive,
      velocities = _ref.velocities,
      onMouseLeave = _ref.onMouseLeave,
      onMouseEnter = _ref.onMouseEnter,
      lessons = _ref.lessons,
      playlistOpen = _ref.playlistOpen,
      menuOpen = _ref.menuOpen,
      lessonActive = _ref.lessonActive,
      clickMenuLesson = _ref.clickMenuLesson,
      clickLesson = _ref.clickLesson,
      clickIconPlaylist = _ref.clickIconPlaylist,
      clickVideo = _ref.clickVideo;
  return /*#__PURE__*/_react.default.createElement(_styles.ControlsStyle, {
    show: showControls,
    onMouseLeave: onMouseLeave,
    onMouseEnter: onMouseEnter
  }, /*#__PURE__*/_react.default.createElement(_VideoPlayerProgressBar.default, {
    onChange: handleChangeProgressBar,
    min: "0",
    max: duration,
    value: progress,
    buffer: buffer
  }), /*#__PURE__*/_react.default.createElement(_styles.Left, null, /*#__PURE__*/_react.default.createElement(_PlayAndPause.default, {
    play: play,
    onClick: playAndPause
  }), /*#__PURE__*/_react.default.createElement(_Audio.default, {
    mute: mute,
    onClick: handleMute,
    volume: volume,
    handleVolume: handleVolume
  })), /*#__PURE__*/_react.default.createElement(_VideoPlayerTimer.default, {
    currentTime: progress,
    duration: duration
  }), /*#__PURE__*/_react.default.createElement(_styles.Right, null, lessons.length > 0 && /*#__PURE__*/_react.default.createElement(_Playlist.default, {
    lessons: lessons,
    playlistOpen: playlistOpen,
    menuOpen: menuOpen,
    lessonActive: lessonActive,
    clickMenuLesson: clickMenuLesson,
    clickLesson: clickLesson,
    clickIconPlaylist: clickIconPlaylist,
    clickVideo: clickVideo
  }), /*#__PURE__*/_react.default.createElement(_PlaybackRate.default, {
    showVelocity: showVelocity,
    changeActiveVelocity: changeActiveVelocity,
    velocityActive: velocityActive,
    velocities: velocities,
    toggleVelocity: toggleVelocity
  }), /*#__PURE__*/_react.default.createElement(_Fullscreen.default, {
    onClick: fullscreen,
    active: activeFullscreen
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

Controls.defaultProps = {
  playlistOpen: false,
  menuOpen: false,
  lessons: [],
  lessonActive: '',
  clickMenuLesson: function clickMenuLesson() {},
  clickLesson: function clickLesson() {},
  clickIconPlaylist: function clickIconPlaylist() {}
};
Controls.propTypes = {
  showControls: _propTypes.default.bool.isRequired,
  handleChangeProgressBar: _propTypes.default.func.isRequired,
  duration: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]).isRequired,
  buffer: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]).isRequired,
  progress: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]).isRequired,
  play: _propTypes.default.bool.isRequired,
  playAndPause: _propTypes.default.func.isRequired,
  mute: _propTypes.default.bool.isRequired,
  handleMute: _propTypes.default.func.isRequired,
  volume: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]).isRequired,
  handleVolume: _propTypes.default.func.isRequired,
  fullscreen: _propTypes.default.func.isRequired,
  activeFullscreen: _propTypes.default.bool.isRequired,
  showVelocity: _propTypes.default.bool.isRequired,
  changeActiveVelocity: _propTypes.default.func.isRequired,
  velocityActive: _propTypes.default.string.isRequired,
  toggleVelocity: _propTypes.default.func.isRequired,
  velocities: _propTypes.default.arrayOf(_propTypes.default.string).isRequired,
  onMouseLeave: _propTypes.default.func.isRequired,
  onMouseEnter: _propTypes.default.func.isRequired,
  playlistOpen: _propTypes.default.bool,
  menuOpen: _propTypes.default.bool,
  lessons: _propTypes.default.arrayOf(lesson),
  lessonActive: _propTypes.default.string,
  clickMenuLesson: _propTypes.default.func,
  clickLesson: _propTypes.default.func,
  clickIconPlaylist: _propTypes.default.func,
  clickVideo: _propTypes.default.func
};
var _default = Controls;
exports.default = _default;