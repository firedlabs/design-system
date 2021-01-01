import styled, { css } from 'styled-components'
import { BoxStyles } from '../../Box/styles'
import { IconPlayer, IconPlayerWrapper } from '../IconPlayer'
import { Cursor, Body2 } from '../../../Styles/Tools'

export const Action = styled.span`
  display: block;
  ${Body2};
  padding: var(--gap-smallest) 0;
  color: var(--color-third);
  color: ${({ active }) => active && 'var(--color-warning)'};
  transition: transform 100ms linear;

  &:hover {
    color: var(--color-warning);
    transform: scale(1.08);
    ${Cursor.hover};
  }
`

const animationShow = ({ showVelocity }) =>
  showVelocity &&
  css`
    opacity: 1;
    transform: var(--translateY) translateX(25%);
  `

export const Velocity = styled(BoxStyles)`
  --translateY: translateY(calc((100% + var(--gap-big)) * -1));

  width: auto;
  position: absolute;
  top: 0;
  right: 0;
  opacity: 0;
  transform: translateX(120%) var(--translateY);
  padding: 0 var(--gap-smallest);
  transition: transform 150ms ease-in-out, opacity 100ms ease-in-out;

  &:hover {
    transform: var(--translateY) translateX(25%);
  }

  ${animationShow}
`

export const IconPlaybackRate = styled(IconPlayer).attrs({
  icon: 'playbackRate'
})`
  opacity: 1;
`

export const IconWrapper = styled(IconPlayerWrapper)``

export const PlaybackRateStyle = styled.div`
  position: relative;
`
