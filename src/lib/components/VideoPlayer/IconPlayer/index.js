import styled from 'styled-components'
import sprite from '../../../assets/images/icons.png'
import { Cursor } from '../../../Styles/Tools'

const positionIcons = {
  play: '-16px -64px',
  pause: '0 -64px',
  audio: '-48px -80px',
  mute: '-64px -80px',
  fullscreen: '-32px -64px',
  settings: '-112px 0'
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
  transform-origin: top left;
  transform: scale(var(--scale));
  image-rendering: crisp-edges;
  image-rendering: pixelated;
  ${Cursor.hover};
  transition: opacity 100ms linear;
`

export const IconPlayerWrapper = styled.div`
  --wh: 1.6rem;
  --scale: 2.4;
  position: relative;
  width: calc(var(--wh) * var(--scale));
  height: calc(var(--wh) * var(--scale));
  transform-origin: center center;
  transition: transform 100ms linear;

  &:not(:last-child) {
    margin-right: var(--gap-medium);
  }

  &:hover,
  &:focus {
    transform: scale(1.2);
  }
`
