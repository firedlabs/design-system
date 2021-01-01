import styled from 'styled-components'
import sprite from '../../assets/images/icons.png'
import { Cursor } from '../../Styles/Tools'

export const BigPlay = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 90px;
  height: 90px;
  background-color: var(--color-second);
  filter: grayscale(1);
  transition: opacity 100ms linear;
  opacity: ${({ active }) => (active ? '1' : '0')};
  transition: opacity 200ms linear;

  &:after {
    content: '';
    background: url(${sprite}) -16px -64px no-repeat;
    width: 16px;
    height: 16px;
    transform: scale(3.8);
    image-rendering: crisp-edges;
    image-rendering: pixelated;
  }

  &:hover {
    ${Cursor.hover};
    transform: scale(1.1);
  }
`

export const Source = styled.source``

export const Video = styled.video`
  min-width: 100%;
  max-height: 100%;
`

export const Wrapper = styled.figure`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: var(--color-black-first);
  ${({ showCursor }) => !showCursor && 'cursor: none;'};

  &:hover > ${BigPlay} {
    filter: grayscale(0);
  }
`
