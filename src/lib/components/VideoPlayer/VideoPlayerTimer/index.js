import React from 'react'
import PropTypes from 'prop-types'
import VideoPlayerTimerStyle from './styles'

function VideoPlayerTimer({ currentTime, duration }) {
  const formatTimer = (time) => {
    const date = new Date(0)
    date.setSeconds(time)
    const formatNum = date.toISOString().substr(11, 8)

    return /^00/.test(formatNum) ? formatNum.replace('00:', '') : formatNum
  }

  return (
    <VideoPlayerTimerStyle>
      {`${formatTimer(currentTime)} / ${formatTimer(duration)}`}
    </VideoPlayerTimerStyle>
  )
}

VideoPlayerTimer.propTypes = {
  currentTime: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  duration: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
}

export default VideoPlayerTimer
