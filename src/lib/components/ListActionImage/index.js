import React from 'react'
import PropTypes from 'prop-types'
import ActionImage from '../ActionImage'
import ListActionImageStyle from './styles'

function ListActionImage({ items, size }) {
  console.log('size', size)

  return (
    <ListActionImageStyle>
      {items.map(({ href, src, alt, isPadding, backgroundColor }) => (
        <ActionImage
          key={href}
          src={src}
          alt={alt}
          href={href}
          size={size}
          isPadding={isPadding}
          backgroundColor={backgroundColor}
        />
      ))}
    </ListActionImageStyle>
  )
}

const actionImage = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired
}

ListActionImage.defaultProps = {
  size: 'small'
}

ListActionImage.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(actionImage)).isRequired,
  size: PropTypes.string
}

export default ListActionImage
