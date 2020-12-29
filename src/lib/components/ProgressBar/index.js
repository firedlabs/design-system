import React from 'react'
import PropTypes from 'prop-types'
import ProgressBarStyle from './styles'

function ProgressBar({
  valueNow,
  valueMax,
  boxShadow,
  borderColor,
  color,
  barColor,
  backgroundColor
}) {
  const valueMin = 0
  const currentPercentage = Math.floor((valueNow / (valueMax - valueMin)) * 100)

  return (
    <ProgressBarStyle
      role="progressbar"
      aria-valuenow={valueNow}
      aria-valuemin={valueMin}
      aria-valuemax={valueMax}
      currentPercentage={currentPercentage}
      boxShadow={boxShadow}
      borderColor={borderColor}
      color={color}
      barColor={barColor}
      backgroundColor={backgroundColor}
    >
      {currentPercentage + '%'}
    </ProgressBarStyle>
  )
}

ProgressBar.defaultProps = {
  boxShadow: false,
  borderColor: 'colorSecond',
  color: 'colorBlackFirst',
  barColor: 'colorSuccess',
  backgroundColor: 'colorThird'
}

ProgressBar.propTypes = {
  valueNow: PropTypes.number.isRequired,
  valueMax: PropTypes.number.isRequired,
  boxShadow: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  borderColor: PropTypes.string,
  color: PropTypes.string,
  barColor: PropTypes.string,
  backgroundColor: PropTypes.string
}

export default ProgressBar
