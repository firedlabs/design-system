import React from 'react'
import PropTypes from 'prop-types'
import { Image, ActionImageStyle } from './styles'
import { palette } from '../../Styles/Settings/Colors/palette'

function ActionImage({
  href,
  src,
  alt,
  backgroundColor,
  size,
  isPadding,
  boxShadow
}) {
  return (
    <ActionImageStyle
      href={href}
      backgroundColor={backgroundColor}
      size={size}
      isPadding={isPadding}
      boxShadow={boxShadow}
    >
      <Image src={src} alt={alt} />
    </ActionImageStyle>
  )
}

ActionImage.defaultProps = {
  backgroundColor: palette.colorFirst,
  size: 'small',
  isPadding: true,
  boxShadow: false
}

ActionImage.propTypes = {
  href: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  isPadding: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.string,
  boxShadow: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
}

export default ActionImage
