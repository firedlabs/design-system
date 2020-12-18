import React from 'react'
import PropTypes from 'prop-types'
import { Timer } from '../../index'
import { CountdownStyles } from './styles'

function Countdown({ day, hrs, min, seg }) {
  return (
    <CountdownStyles>
      {day && <Timer label={day.label} time={day.time} />}
      {hrs && <Timer label={hrs.label} time={hrs.time} />}
      {min && <Timer label={min.label} time={min.time} />}
      {seg && <Timer label={seg.label} time={seg.time} />}
    </CountdownStyles>
  )
}

const shape = {
  label: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired
}

Countdown.propTypes = {
  day: PropTypes.shape(shape).isRequired,
  hrs: PropTypes.shape(shape).isRequired,
  min: PropTypes.shape(shape).isRequired,
  seg: PropTypes.shape(shape).isRequired
}

export default Countdown
