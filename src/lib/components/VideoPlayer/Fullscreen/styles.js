import styled from 'styled-components'
import { IconPlayerWrapper, IconPlayer } from '../IconPlayer'

export const IconFullcreen = styled(IconPlayer).attrs(({ active }) => ({
  icon: active ? 'nofullscreen' : 'fullscreen'
}))`
  opacity: 1;
`

export const FullscreenStyle = styled(IconPlayerWrapper)``
