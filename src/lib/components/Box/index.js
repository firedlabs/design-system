import React from 'react'
import PropTypes from 'prop-types'
import { BoxStyles, Content, Image } from './styles'

function Box({ light, children, src, alt }) {
  const isImage = src && alt
  const isContent = !!children
  const hasContent = () => isContent && <Content>{children}</Content>
  const hasImage = () => isImage && <Image src={src} alt={alt} />

  return (
    <BoxStyles light={light} image={isImage}>
      {hasContent() || hasImage()}
    </BoxStyles>
  )
}

Box.propTypes = {
  light: PropTypes.bool,
  children: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string
}

export default Box
