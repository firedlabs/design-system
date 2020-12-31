import React from 'react'
import PropTypes from 'prop-types'
import { LoadingStyle, Square } from './styles'

function Loading({ active }) {
  return (
    <LoadingStyle active={active}>
      <Square />
    </LoadingStyle>
  )
}

Loading.propTypes = {
  active: PropTypes.bool.isRequired
}

export default Loading
