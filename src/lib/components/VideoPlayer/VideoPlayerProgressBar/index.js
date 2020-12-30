import React from 'react'
import PropTypes from 'prop-types'
import { Bar, VideoPlayerProgressBarStyle, InputRange, Buffer } from './styles'

function VideoPlayerProgressBar({ max, value, onChange, buffer }) {
  const progress = (value / max) * 100
  const progressBuffer = (buffer / max) * 100

  return (
    <VideoPlayerProgressBarStyle>
      <InputRange max={max} value={value} onChange={onChange} />
      <Bar max={max} value={progress} />
      <Buffer value={progressBuffer} />
    </VideoPlayerProgressBarStyle>
  )
}

VideoPlayerProgressBar.defaultProps = {
  max: 0,
  value: 0
}

VideoPlayerProgressBar.propTypes = {
  max: PropTypes.number,
  value: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  buffer: PropTypes.number.isRequired
}

export default VideoPlayerProgressBar
