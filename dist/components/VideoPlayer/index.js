"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Loading = _interopRequireDefault(require("../Loading"));

var _Controls = _interopRequireDefault(require("./Controls"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function VideoPlayer(_ref) {
  var poster = _ref.poster,
      sources = _ref.sources;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      showControls = _useState2[0],
      setShowControls = _useState2[1];

  var _useState3 = (0, _react.useState)(true),
      _useState4 = _slicedToArray(_useState3, 2),
      outControls = _useState4[0],
      setOutControls = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      play = _useState6[0],
      setPlay = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      mute = _useState8[0],
      setMute = _useState8[1];

  var _useState9 = (0, _react.useState)(100),
      _useState10 = _slicedToArray(_useState9, 2),
      volume = _useState10[0],
      setVolume = _useState10[1];

  var _useState11 = (0, _react.useState)(0),
      _useState12 = _slicedToArray(_useState11, 2),
      duration = _useState12[0],
      setDuration = _useState12[1];

  var _useState13 = (0, _react.useState)(0),
      _useState14 = _slicedToArray(_useState13, 2),
      progress = _useState14[0],
      setProgress = _useState14[1];

  var _useState15 = (0, _react.useState)(0),
      _useState16 = _slicedToArray(_useState15, 2),
      buffer = _useState16[0],
      setBuffer = _useState16[1];

  var _useState17 = (0, _react.useState)(false),
      _useState18 = _slicedToArray(_useState17, 2),
      bigPlay = _useState18[0],
      setBigPlay = _useState18[1];

  var _useState19 = (0, _react.useState)(false),
      _useState20 = _slicedToArray(_useState19, 2),
      loading = _useState20[0],
      setLoading = _useState20[1];

  var _useState21 = (0, _react.useState)(false),
      _useState22 = _slicedToArray(_useState21, 2),
      activeFullscreen = _useState22[0],
      setActiveFullscreen = _useState22[1];

  var wrapper = (0, _react.useRef)();
  var video = (0, _react.useRef)();
  var velocities = ['0.25', '0.5', '0.75', '1', '1.25', '1.5', '1.75', '2'];

  var _useState23 = (0, _react.useState)(false),
      _useState24 = _slicedToArray(_useState23, 2),
      showVelocity = _useState24[0],
      setShowVelocity = _useState24[1];

  var _useState25 = (0, _react.useState)('1'),
      _useState26 = _slicedToArray(_useState25, 2),
      velocityActive = _useState26[0],
      setVelocityActive = _useState26[1];

  (0, _react.useEffect)(function () {
    var buffered = video.current.buffered;

    if (buffered.length) {
      setBuffer(buffered.end(buffered.length - 1));
    }
  });
  (0, _react.useEffect)(function () {
    var _localStorage$getItem;

    var volumeStorage = (_localStorage$getItem = localStorage.getItem('volume')) !== null && _localStorage$getItem !== void 0 ? _localStorage$getItem : 100;
    setVolume(volumeStorage);
    video.current.volume = volumeStorage / 100;
    video.current.focus();
  }, []);
  (0, _react.useEffect)(function () {
    var timer = setTimeout(function () {
      if (outControls) {
        setShowControls(false);
        setShowVelocity(false);
      }
    }, 3000);
    return function () {
      return clearTimeout(timer);
    };
  }, [showControls, outControls]);

  var changeMute = function changeMute(muteParam) {
    video.current.muted = muteParam;
    setMute(muteParam);
  };

  var playAndPause = function playAndPause() {
    if (play) {
      video.current.pause();
      setPlay(false);
    } else {
      video.current.play();
      setBigPlay(false);
      setPlay(true);
    }

    setShowVelocity(false);
  };

  var handleChangeProgressBar = function handleChangeProgressBar(_ref2) {
    var target = _ref2.target;
    var value = target.value;
    setProgress(value);
    video.current.currentTime = value;
  };

  var handleMouseUp = function handleMouseUp() {
    return video.current.focus();
  };

  var handleMouseMove = function handleMouseMove() {
    return setShowControls(true);
  };

  var handleTimeUpdate = function handleTimeUpdate() {
    var _video$current = video.current,
        videoDuration = _video$current.duration,
        currentTime = _video$current.currentTime;
    setDuration(videoDuration);
    setProgress(currentTime);
  };

  var handleMute = function handleMute() {
    var volumeStorage = localStorage.getItem('volume');

    if (mute) {
      changeMute(false);
      setVolume(volumeStorage);
      video.current.volume = volumeStorage / 100;
    } else {
      changeMute(true);
      setVolume(0);
      video.current.volume = volumeStorage / 100;
    }
  };

  var changeVolume = function changeVolume(value) {
    localStorage.setItem('volume', value);
    setVolume(value);
    changeMute(false);
    video.current.volume = value / 100;
  };

  var handleVolume = function handleVolume(_ref3) {
    var target = _ref3.target;
    var value = target.value;
    changeVolume(value);
  };

  var toggleFullscreen = function toggleFullscreen() {
    if (document.fullscreenElement) {
      document.exitFullscreen();
      setActiveFullscreen(false);
    } else {
      wrapper.current.requestFullscreen();
      setActiveFullscreen(true);
    }
  };

  var changeActiveVelocity = function changeActiveVelocity(_ref4) {
    var target = _ref4.target;
    var playbackRate = target.textContent;
    setShowVelocity(false);
    setVelocityActive(playbackRate);
    video.current.playbackRate = playbackRate;
  };

  var toggleVelocity = function toggleVelocity() {
    setShowVelocity(function (old) {
      return !old;
    });
  };

  var handleMouseLeave = function handleMouseLeave() {
    return setOutControls(true);
  };

  var handleMouseEnter = function handleMouseEnter() {
    return setOutControls(false);
  };

  var keys = {
    ' ': playAndPause,
    ArrowRight: function ArrowRight() {
      video.current.currentTime += 5;
    },
    ArrowLeft: function ArrowLeft() {
      video.current.currentTime -= 5;
    },
    ArrowUp: function ArrowUp() {
      if (video.current.volume <= 0.9) {
        var newVolume = video.current.volume + 0.1;
        changeVolume(newVolume * 100);
      } else {
        changeVolume(100);
      }
    },
    ArrowDown: function ArrowDown() {
      if (video.current.volume >= 0.1) {
        var newVolume = video.current.volume - 0.1;
        changeVolume(newVolume * 100);
      } else {
        changeVolume(0);
      }
    },
    m: handleMute,
    l: function l() {
      setVelocityActive(function (oldVelocity) {
        if (oldVelocity <= 1.75) {
          var newVelocity = +oldVelocity + 0.25;
          video.current.playbackRate = newVelocity;
          return newVelocity.toString();
        }

        return oldVelocity;
      });
    },
    k: function k() {
      setVelocityActive(function (oldVelocity) {
        if (oldVelocity >= 0.5) {
          var newVelocity = +oldVelocity - 0.25;
          video.current.playbackRate = newVelocity;
          return newVelocity.toString();
        }

        return oldVelocity;
      });
    },
    f: toggleFullscreen
  };

  var handleKeyUp = function handleKeyUp(_ref5) {
    var key = _ref5.key;
    return keys[key] && keys[key]();
  };

  var handleLoadStart = function handleLoadStart() {
    return setBigPlay(true);
  };

  var handleWaiting = function handleWaiting() {
    return setLoading(true);
  };

  var handleCanPlay = function handleCanPlay() {
    return setLoading(false);
  };

  return /*#__PURE__*/_react.default.createElement(_styles.Wrapper, {
    showCursor: showControls,
    onMouseUp: handleMouseUp,
    onMouseMove: handleMouseMove,
    onKeyUp: handleKeyUp,
    ref: wrapper
  }, /*#__PURE__*/_react.default.createElement(_styles.Video, {
    poster: poster,
    onClick: playAndPause,
    ref: video,
    onTimeUpdate: handleTimeUpdate,
    onLoadStart: handleLoadStart,
    onWaiting: handleWaiting,
    onCanPlay: handleCanPlay
  }, sources.map(function (_ref6) {
    var src = _ref6.src,
        type = _ref6.type;
    return /*#__PURE__*/_react.default.createElement(_styles.Source, {
      key: src,
      src: src,
      type: type
    });
  })), /*#__PURE__*/_react.default.createElement(_Loading.default, {
    active: loading
  }), /*#__PURE__*/_react.default.createElement(_styles.BigPlay, {
    active: bigPlay,
    onClick: playAndPause
  }), /*#__PURE__*/_react.default.createElement(_Controls.default, {
    showControls: showControls,
    onMouseLeave: handleMouseLeave,
    onMouseEnter: handleMouseEnter,
    duration: duration,
    progress: progress,
    buffer: buffer,
    handleChangeProgressBar: handleChangeProgressBar,
    play: play,
    playAndPause: playAndPause,
    mute: mute,
    handleMute: handleMute,
    volume: volume,
    handleVolume: handleVolume,
    fullscreen: toggleFullscreen,
    activeFullscreen: activeFullscreen,
    showVelocity: showVelocity,
    changeActiveVelocity: changeActiveVelocity,
    velocityActive: velocityActive,
    toggleVelocity: toggleVelocity,
    velocities: velocities
  }));
}

VideoPlayer.propTypes = {
  poster: _propTypes.default.string.isRequired,
  sources: _propTypes.default.arrayOf(_propTypes.default.shape({
    src: _propTypes.default.string.isRequired,
    type: _propTypes.default.string.isRequired
  })).isRequired
};
var _default = VideoPlayer;
exports.default = _default;