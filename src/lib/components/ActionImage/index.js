import React from 'react'
import PropTypes from 'prop-types'
import { Image, ActionImageStyle } from './styles'
import { palette } from '../../Styles/Settings/Colors/palette'

function ActionImage({ href, src, alt, backgroundColor }) {
  return (
    <ActionImageStyle href={href} backgroundColor={backgroundColor}>
      <Image src={src} alt={alt} />
    </ActionImageStyle>
  )
}

ActionImage.defaultProps = {
  backgroundColor: palette.colorFirst
}

ActionImage.propTypes = {
  href: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string
}

export default ActionImage
