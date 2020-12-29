import React from 'react'
import PropTypes from 'prop-types'
import Box from '../Box'
import ListTags from '../ListTags'
import { CoverStyle, Title } from './styles'
import ProgressBar from '../ProgressBar'

function Cover({ src, alt, title, tags, progress }) {
  const hasProgress = () => progress && <ProgressBar {...progress} />

  return (
    <CoverStyle>
      <Box as="figure" src={src} alt={alt} borderColor="colorSecond" />
      {hasProgress()}
      <Title as="figcaption">{title}</Title>
      <ListTags tags={tags} />
    </CoverStyle>
  )
}

const progress = PropTypes.objectOf({
  valueNow: PropTypes.number.isRequired,
  valueMax: PropTypes.number.isRequired
})

Cover.defaultProps = {
  progress: false
}

Cover.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isREquired,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      children: PropTypes.string.isRequired,
      backgroundColor: PropTypes.string,
      color: PropTypes.string
    })
  ),
  progress
}

export default Cover
