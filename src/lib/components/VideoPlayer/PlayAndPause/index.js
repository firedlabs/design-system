import React from 'react'
import PropTypes from 'prop-types'
import { PlayAndPauseStyle, Play, Pause } from './styles'

function PlayAndPause({ play, onClick }) {
  return (
    <PlayAndPauseStyle play={play} onClick={onClick}>
      <Play />
      <Pause />
    </PlayAndPauseStyle>
  )
}

PlayAndPause.propTypes = {
  play: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default PlayAndPause
