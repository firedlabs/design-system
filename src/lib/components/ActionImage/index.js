import React from 'react'
import PropTypes from 'prop-types'
import { Image, Action } from './styles'

function ActionImage({ href, src, alt }) {
  return (
    <Action href={href}>
      <Image src={src} alt={alt} />
    </Action>
  )
}

ActionImage.propTypes = {
  href: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

export default ActionImage
