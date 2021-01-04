import React from 'react'
import PropTypes from 'prop-types'
import Audio from '../Audio'
import Fullscreen from '../Fullscreen'
import PlayAndPause from '../PlayAndPause'
import VideoPlayerProgressBar from '../VideoPlayerProgressBar'
import VideoPlayerTimer from '../VideoPlayerTimer'
import PlaybackRate from '../PlaybackRate'
import Playlist from '../Playlist'
import { ControlsStyle, Left, Right } from './styles'

function Controls({
  showControls,
  handleChangeProgressBar,
  duration,
  progress,
  buffer,
  play,
  playAndPause,
  mute,
  handleMute,
  volume,
  handleVolume,
  fullscreen,
  activeFullscreen,
  toggleVelocity,
  showVelocity,
  changeActiveVelocity,
  velocityActive,
  velocities,
  onMouseLeave,
  onMouseEnter,
  lessons,
  playlistOpen,
  menuOpen,
  lessonActive,
  clickMenuLesson,
  clickLesson,
  clickIconPlaylist,
  clickVideo
}) {
  return (
    <ControlsStyle
      show={showControls}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
    >
      <VideoPlayerProgressBar
        onChange={handleChangeProgressBar}
        min="0"
        max={duration}
        value={progress}
        buffer={buffer}
      />
      <Left>
        <PlayAndPause play={play} onClick={playAndPause} />
        <Audio
          mute={mute}
          onClick={handleMute}
          volume={volume}
          handleVolume={handleVolume}
        />
      </Left>

      <VideoPlayerTimer currentTime={progress} duration={duration} />

      <Right>
        {lessons.length > 0 && (
          <Playlist
            lessons={lessons}
            playlistOpen={playlistOpen}
            menuOpen={menuOpen}
            lessonActive={lessonActive}
            clickMenuLesson={clickMenuLesson}
            clickLesson={clickLesson}
            clickIconPlaylist={clickIconPlaylist}
            clickVideo={clickVideo}
          />
        )}
        <PlaybackRate
          showVelocity={showVelocity}
          changeActiveVelocity={changeActiveVelocity}
          velocityActive={velocityActive}
          velocities={velocities}
          toggleVelocity={toggleVelocity}
        />
        <Fullscreen onClick={fullscreen} active={activeFullscreen} />
      </Right>
    </ControlsStyle>
  )
}

const videos = PropTypes.arrayOf(
  PropTypes.shape({
    poster: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  })
).isRequired

const lesson = PropTypes.shape({
  title: PropTypes.string.isRequired,
  videos
}).isRequired

Controls.defaultProps = {
  playlistOpen: false,
  menuOpen: false,
  lessons: [],
  lessonActive: '',
  clickMenuLesson: () => {},
  clickLesson: () => {},
  clickIconPlaylist: () => {}
}

Controls.propTypes = {
  showControls: PropTypes.bool.isRequired,
  handleChangeProgressBar: PropTypes.func.isRequired,
  duration: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  buffer: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  progress: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  play: PropTypes.bool.isRequired,
  playAndPause: PropTypes.func.isRequired,
  mute: PropTypes.bool.isRequired,
  handleMute: PropTypes.func.isRequired,
  volume: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  handleVolume: PropTypes.func.isRequired,
  fullscreen: PropTypes.func.isRequired,
  activeFullscreen: PropTypes.bool.isRequired,
  showVelocity: PropTypes.bool.isRequired,
  changeActiveVelocity: PropTypes.func.isRequired,
  velocityActive: PropTypes.string.isRequired,
  toggleVelocity: PropTypes.func.isRequired,
  velocities: PropTypes.arrayOf(PropTypes.string).isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  playlistOpen: PropTypes.bool,
  menuOpen: PropTypes.bool,
  lessons: PropTypes.arrayOf(lesson),
  lessonActive: PropTypes.string,
  clickMenuLesson: PropTypes.func,
  clickLesson: PropTypes.func,
  clickIconPlaylist: PropTypes.func,
  clickVideo: PropTypes.func
}

export default Controls
