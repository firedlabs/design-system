'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

const _react = _interopRequireDefault(require('react'))

const _propTypes = _interopRequireDefault(require('prop-types'))

const _Audio = _interopRequireDefault(require('../Audio'))

const _Fullscreen = _interopRequireDefault(require('../Fullscreen'))

const _PlayAndPause = _interopRequireDefault(require('../PlayAndPause'))

const _VideoPlayerProgressBar = _interopRequireDefault(
  require('../VideoPlayerProgressBar')
)

const _VideoPlayerTimer = _interopRequireDefault(require('../VideoPlayerTimer'))

const _PlaybackRate = _interopRequireDefault(require('../PlaybackRate'))

const _styles = require('./styles')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

function Controls(_ref) {
  const showControls = _ref.showControls
  const handleChangeProgressBar = _ref.handleChangeProgressBar
  const duration = _ref.duration
  const progress = _ref.progress
  const buffer = _ref.buffer
  const play = _ref.play
  const playAndPause = _ref.playAndPause
  const mute = _ref.mute
  const handleMute = _ref.handleMute
  const volume = _ref.volume
  const handleVolume = _ref.handleVolume
  const fullscreen = _ref.fullscreen
  const activeFullscreen = _ref.activeFullscreen
  const toggleVelocity = _ref.toggleVelocity
  const showVelocity = _ref.showVelocity
  const changeActiveVelocity = _ref.changeActiveVelocity
  const velocityActive = _ref.velocityActive
  const velocities = _ref.velocities
  const onMouseLeave = _ref.onMouseLeave
  const onMouseEnter = _ref.onMouseEnter
  return /* #__PURE__ */ _react.default.createElement(
    _styles.ControlsStyle,
    {
      show: showControls,
      onMouseLeave: onMouseLeave,
      onMouseEnter: onMouseEnter
    },
    /* #__PURE__ */ _react.default.createElement(
      _VideoPlayerProgressBar.default,
      {
        onChange: handleChangeProgressBar,
        min: '0',
        max: duration,
        value: progress,
        buffer: buffer
      }
    ),
    /* #__PURE__ */ _react.default.createElement(
      _styles.Left,
      null,
      /* #__PURE__ */ _react.default.createElement(_PlayAndPause.default, {
        play: play,
        onClick: playAndPause
      }),
      /* #__PURE__ */ _react.default.createElement(_Audio.default, {
        mute: mute,
        onClick: handleMute,
        volume: volume,
        handleVolume: handleVolume
      })
    ),
    /* #__PURE__ */ _react.default.createElement(_VideoPlayerTimer.default, {
      currentTime: progress,
      duration: duration
    }),
    /* #__PURE__ */ _react.default.createElement(
      _styles.Right,
      null,
      /* #__PURE__ */ _react.default.createElement(_PlaybackRate.default, {
        showVelocity: showVelocity,
        changeActiveVelocity: changeActiveVelocity,
        velocityActive: velocityActive,
        velocities: velocities,
        toggleVelocity: toggleVelocity
      }),
      /* #__PURE__ */ _react.default.createElement(_Fullscreen.default, {
        onClick: fullscreen,
        active: activeFullscreen
      })
    )
  )
}

Controls.propTypes = {
  showControls: _propTypes.default.bool.isRequired,
  handleChangeProgressBar: _propTypes.default.func.isRequired,
  duration: _propTypes.default.oneOfType([
    _propTypes.default.string,
    _propTypes.default.number
  ]).isRequired,
  buffer: _propTypes.default.oneOfType([
    _propTypes.default.string,
    _propTypes.default.number
  ]).isRequired,
  progress: _propTypes.default.oneOfType([
    _propTypes.default.string,
    _propTypes.default.number
  ]).isRequired,
  play: _propTypes.default.bool.isRequired,
  playAndPause: _propTypes.default.func.isRequired,
  mute: _propTypes.default.bool.isRequired,
  handleMute: _propTypes.default.func.isRequired,
  volume: _propTypes.default.bool.isRequired,
  handleVolume: _propTypes.default.func.isRequired,
  fullscreen: _propTypes.default.func.isRequired,
  activeFullscreen: _propTypes.default.bool.isRequired,
  showVelocity: _propTypes.default.bool.isRequired,
  changeActiveVelocity: _propTypes.default.func.isRequired,
  velocityActive: _propTypes.default.bool.isRequired,
  toggleVelocity: _propTypes.default.func.isRequired,
  velocities: _propTypes.default.arrayOf(_propTypes.default.string).isRequired,
  onMouseLeave: _propTypes.default.func.isRequired,
  onMouseEnter: _propTypes.default.func.isRequired
}
const _default = Controls
exports.default = _default
