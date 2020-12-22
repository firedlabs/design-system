import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Timer from '../Timer'
import { CountdownStyles } from './styles'

function Countdown({ paramLastDate, day, hrs, min, sec }) {
  const lastDate = paramLastDate

  const formatNumber = (number) => String(Math.floor(number)).padStart(2, '0')

  const calculateTimeLeft = () => {
    const difference = +new Date(lastDate) - +new Date()
    let timeLeft = {
      day: '--',
      hrs: '--',
      min: '--',
      sec: '--'
    }

    if (difference > 0) {
      timeLeft = {
        day: formatNumber(difference / (1000 * 60 * 60 * 24)),
        hrs: formatNumber((difference / (1000 * 60 * 60)) % 24),
        min: formatNumber((difference / 1000 / 60) % 60),
        sec: formatNumber((difference / 1000) % 60)
      }
    }

    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState({
    day: '--',
    hrs: '--',
    min: '--',
    sec: '--'
  })

  useEffect(() => {
    setTimeLeft(calculateTimeLeft())
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearTimeout(timer)
  })

  return (
    <CountdownStyles>
      {day && <Timer label="Dias" time={timeLeft.day} />}
      {hrs && <Timer label="Hrs" time={timeLeft.hrs} />}
      {min && <Timer label="Min" time={timeLeft.min} />}
      {sec && <Timer label="Seg" time={timeLeft.sec} />}
    </CountdownStyles>
  )
}

Countdown.defaultProps = {
  day: true,
  hrs: true,
  min: true,
  sec: true
}

Countdown.propTypes = {
  paramLastDate: PropTypes.string.isRequired,
  day: PropTypes.bool,
  hrs: PropTypes.bool,
  min: PropTypes.bool,
  sec: PropTypes.bool
}

export default Countdown
