import React from 'react'
import PropTypes from 'prop-types'
import { FullscreenStyle, IconFullcreen } from './styles'

function Fullscreen({ onClick }) {
  return (
    <FullscreenStyle onClick={onClick}>
      <IconFullcreen />
    </FullscreenStyle>
  )
}

Fullscreen.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default Fullscreen
