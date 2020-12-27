import React from 'react'
import PropTypes from 'prop-types'
import { Image, ActionImageStyle } from './styles'
import { palette } from '../../Styles/Settings/Colors/palette'

function ActionImage({ href, src, alt, backgroundColor, size, isPadding }) {
  return (
    <ActionImageStyle
      href={href}
      backgroundColor={backgroundColor}
      size={size}
      isPadding={isPadding}
    >
      <Image src={src} alt={alt} />
    </ActionImageStyle>
  )
}

ActionImage.defaultProps = {
  backgroundColor: palette.colorFirst,
  size: 'small',
  isPadding: true
}

ActionImage.propTypes = {
  href: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  isPadding: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.string
}

export default ActionImage
