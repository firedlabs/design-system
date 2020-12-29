import React from 'react'
import styled from 'styled-components'
import cursor from 'styles/tools/cursor'
import sprite from 'assets/icons.png'
import gap from 'styles/settings/gap'

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
  ${cursor.hover};
  transition: opacity 100ms linear;
`

export const IconPlayerWrapper = styled.div`
  --wh: 16px;
  --scale: 2.4;
  position: relative;
  width: calc(var(--wh) * var(--scale));
  height: calc(var(--wh) * var(--scale));
  transform-origin: center center;
  transition: transform 100ms linear;

  &:not(:last-child) {
    margin-right: ${gap.medium};
  }

  &:hover,
  &:focus {
    transform: scale(1.2);
  }
`
