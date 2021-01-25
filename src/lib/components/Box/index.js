import React from 'react'
import PropTypes from 'prop-types'
import { BoxStyles, Content, Image } from './styles'

function Box({
  light,
  children,
  src,
  alt,
  as,
  borderColor,
  backgroundColor,
  color,
  onSubmit
}) {
  const isImage = src && alt
  const isContent = !!children
  const hasContent = () =>
    isContent && <Content color={color}>{children}</Content>
  const hasImage = () => isImage && <Image src={src} alt={alt} />

  return (
    <BoxStyles
      as={as}
      light={light}
      image={isImage}
      borderColor={borderColor}
      backgroundColor={backgroundColor}
      onSubmit={onSubmit}
    >
      {hasContent() || hasImage()}
    </BoxStyles>
  )
}

Box.defaultProps = {
  as: 'article',
  light: false,
  children: false,
  src: false,
  alt: false,
  borderColor: 'colorThird',
  backgroundColor: 'colorBlackSecond',
  onSubmit: () => {}
}

Box.propTypes = {
  as: PropTypes.string,
  light: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  alt: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  borderColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  onSubmit: PropTypes.func
}

export default Box
