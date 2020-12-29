import React from 'react'
import PropTypes from 'prop-types'
import Cover from '../Cover'
import { ListCoversStyle, Item } from './styles'

function ListCovers({ covers }) {
  return (
    <ListCoversStyle>
      {covers.map((cover) => (
        <Item key={cover.title}>
          <Cover {...cover} />
        </Item>
      ))}
    </ListCoversStyle>
  )
}

const cover = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

ListCovers.propTypes = {
  covers: PropTypes.arrayOf(PropTypes.shape(cover))
}

export default ListCovers
