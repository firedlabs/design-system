import React from 'react'
import PropTypes from 'prop-types'
import Live from '../Live'
import Image from '../Image'
import { TitleLiveStyle, Content, Title } from './styles'

function TitleLive({ src, alt, title, isLive }) {
  return (
    <TitleLiveStyle>
      <Image src={src} alt={alt} borderColor="colorSecond" />
      <Content>
        <Live active={isLive}>Live</Live>
        <Title>{title}</Title>
      </Content>
    </TitleLiveStyle>
  )
}

TitleLive.defaultProps = {
  isLive: false
}

TitleLive.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isLive: PropTypes.bool
}

export default TitleLive
