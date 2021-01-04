import styled from 'styled-components'
import { transparentize } from 'polished'
import { Caption } from '../../../Styles/Tools'
import { palette } from '../../../Styles/Settings/Colors/palette'

const VideoPlayerTimerStyles = styled.p`
  ${Caption};
  text-align: center;
  color: var(--color-third);
  background-color: ${transparentize(0.7, palette.colorSecond)};
  padding: calc(var(--gap-smallest) / 2);
`

export default VideoPlayerTimerStyles
