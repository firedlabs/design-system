import React from 'react'
import PropTypes from 'prop-types'
import Tag from '../Tag'
import { ListTagsStyle, Item } from './styles'

function ListTags({ tags }) {
  return (
    <ListTagsStyle>
      {tags.map((tag) => (
        <Item key={tag}>
          <Tag {...tag} />
        </Item>
      ))}
    </ListTagsStyle>
  )
}

ListTags.propTypes = {
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      children: PropTypes.string.isRequired,
      backgroundColor: PropTypes.string,
      color: PropTypes.string
    })
  )
}

export default ListTags
