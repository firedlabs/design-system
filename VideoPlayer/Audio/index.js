import React from 'react'
import PropTypes from 'prop-types'
import { AudioStyle, AudioIcon, Mute, VolumeBar, InputRange } from './styles'

function Audio({ mute, onClick, handleVolume, volume }) {
  const handleClick = (event) => {
    event.stopPropagation()
  }

  return (
    <AudioStyle mute={mute} onClick={onClick}>
      <AudioIcon />
      <Mute />

      <InputRange
        value={volume}
        onClick={handleClick}
        onChange={handleVolume}
      />

      <VolumeBar volume={volume} />
    </AudioStyle>
  )
}

Audio.propTypes = {
  mute: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  handleVolume: PropTypes.func.isRequired,
  volume: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
}

export default Audio
