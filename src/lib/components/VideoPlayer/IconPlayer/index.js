import styled from 'styled-components'
import sprite from '../../../assets/images/icons.png'
import { Cursor } from '../../../Styles/Tools'

const positionIcons = {
  audio: '0 -16px',
  mute: '-16px -16px',
  play: '0 0',
  pause: '-16px 0',
  fullscreen: '0 -32px',
  nofullscreen: '-16px -32px',
  playbackRate: '0 -48px',
  playlist: '-16px -48px'
}

export const IconPlayer = styled.span`
  background: url(${sprite}) no-repeat;
  background-position: ${({ icon }) => positionIcons[icon]};
  position: absolute;
  top: 0;
  left: 0;
  width: var(--wh);
  height: var(--wh);
  opacity: 0;
  transform-origin: left top;
  transform: scale(var(--scale));
  image-rendering: crisp-edges;
  image-rendering: pixelated;
  ${Cursor.hover};
  transition: opacity 100ms linear, transform 100ms linear;
`

export const IconPlayerWrapper = styled.div`
  --wh: 1.6rem;
  --scale: 2;
  position: relative;
  width: calc(var(--wh) * var(--scale));
  height: calc(var(--wh) * var(--scale));
  transform-origin: center center;
  transition: transform 100ms linear;

  &:hover,
  &:focus {
    transform: scale(1.2);
  }
`
