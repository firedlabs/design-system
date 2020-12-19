import React from 'react'
import PropTypes from 'prop-types'
import { BoxStyles, Content, Image } from './styles'

function Box({ light, children, src, alt }) {
  const isImage = src && alt
  const hasChildren = () => children && <Content>{children}</Content>
  const hasImage = () => isImage && <Image src={src} alt={alt} />

  return (
    <BoxStyles light={light} image={isImage}>
      {hasChildren() || hasImage()}
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
