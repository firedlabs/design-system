import React from 'react'
import PropTypes from 'prop-types'
import { FullscreenStyle, IconFullcreen } from './styles'

function Fullscreen({ onClick, active }) {
  return (
    <FullscreenStyle onClick={onClick}>
      <IconFullcreen active={active} />
    </FullscreenStyle>
  )
}

Fullscreen.defaultProps = {
  active: false
}

Fullscreen.propTypes = {
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool
}

export default Fullscreen
