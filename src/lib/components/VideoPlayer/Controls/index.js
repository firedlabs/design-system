import React from 'react'
import PropTypes from 'prop-types'
import Audio from '../Audio'
import Fullscreen from '../Fullscreen'
import PlayAndPause from '../PlayAndPause'
import VideoPlayerProgressBar from '../VideoPlayerProgressBar'
import Settings from '../Settings'
import VideoPlayerTimer from '../VideoPlayerTimer'
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
  showSettings,
  showVelocity,
  toggleShowSettings,
  toggleVelocity,
  changeActiveVelocity,
  velocityActive,
  velocities,
  onMouseLeave,
  onMouseEnter
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
        <Settings
          showSettings={showSettings}
          showVelocity={showVelocity}
          toggleShowSettings={toggleShowSettings}
          toggleVelocity={toggleVelocity}
          changeActiveVelocity={changeActiveVelocity}
          velocityActive={velocityActive}
          velocities={velocities}
        />
        <Fullscreen onClick={fullscreen} />
      </Right>
    </ControlsStyle>
  )
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
  volume: PropTypes.bool.isRequired,
  handleVolume: PropTypes.func.isRequired,
  fullscreen: PropTypes.func.isRequired,
  showSettings: PropTypes.bool.isRequired,
  showVelocity: PropTypes.bool.isRequired,
  toggleShowSettings: PropTypes.func.isRequired,
  toggleVelocity: PropTypes.func.isRequired,
  changeActiveVelocity: PropTypes.func.isRequired,
  velocityActive: PropTypes.bool.isRequired,
  velocities: PropTypes.arrayOf(PropTypes.string).isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired
}

export default Controls
