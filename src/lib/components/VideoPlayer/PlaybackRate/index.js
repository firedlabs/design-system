import React from 'react'
import PropTypes from 'prop-types'
import {
  PlaybackRateStyle,
  IconWrapper,
  IconPlaybackRate,
  Velocity,
  Action
} from './style'

function PlaybackRate({
  showVelocity,
  velocities,
  changeActiveVelocity,
  velocityActive,
  toggleVelocity
}) {
  return (
    <PlaybackRateStyle>
      <Velocity showVelocity={showVelocity}>
        {velocities.map((velocity) => (
          <Action
            key={velocity}
            onClick={changeActiveVelocity}
            active={velocity === velocityActive}
          >
            {velocity}
          </Action>
        ))}
      </Velocity>

      <IconWrapper>
        <IconPlaybackRate onClick={toggleVelocity} />
      </IconWrapper>
    </PlaybackRateStyle>
  )
}

PlaybackRate.defaultProps = {
  velocityActive: 1,
  showVelocity: false
}

PlaybackRate.propTypes = {
  velocityActive: PropTypes.string,
  changeActiveVelocity: PropTypes.func.isRequired,
  velocities: PropTypes.arrayOf(PropTypes.string).isRequired,
  toggleVelocity: PropTypes.func.isRequired,
  showVelocity: PropTypes.bool.isRequired
}

export default PlaybackRate
