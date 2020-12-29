import React from 'react'
import PropTypes from 'prop-types'
import TimerStyle from './styles'

function Timer({ currentTime, duration, onClick }) {
  const formatTimer = (time) => {
    const date = new Date(0)
    date.setSeconds(time)
    const formatNum = date.toISOString().substr(11, 8)

    return /^00/.test(formatNum) ? formatNum.replace('00:', '') : formatNum
  }

  return (
    <TimerStyle onClick={onClick}>
      {`${formatTimer(currentTime)} / ${formatTimer(duration)}`}
    </TimerStyle>
  )
}

Timer.propTypes = {
  currentTime: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  duration: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  onClick: PropTypes.func.isRequired
}

export default Timer
