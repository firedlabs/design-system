import React from 'react'
import PropTypes from 'prop-types'
import { Label, Time, TimerStyles } from './styles'

Timer.propTypes = {
  time: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired
}

function Timer({ time, label }) {
  return (
    <TimerStyles>
      <Time>{time}</Time>
      <Label>{label}</Label>
    </TimerStyles>
  )
}

export default Timer
