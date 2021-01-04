import React from 'react'
import PropTypes from 'prop-types'
import { VideoDescriptionStyle, MiniThumb, Title, Number } from './styles'

function VideoDescription({ id, key, poster, title, num, onClick, type }) {
  return (
    <VideoDescriptionStyle onClick={onClick} id={id} key={key} data-type={type}>
      <MiniThumb src={poster} alt={title} />

      <Title>
        <Number>{num}</Number>
        {title}
      </Title>
    </VideoDescriptionStyle>
  )
}

VideoDescription.defaultProps = {
  onClick: () => {}
}

VideoDescription.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  num: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

export default VideoDescription
