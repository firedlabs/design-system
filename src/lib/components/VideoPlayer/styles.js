import styled, { css } from 'styled-components'
import sprite from '../../assets/images/icons.png'
import { Cursor, BoxShadow } from '../../Styles/Tools'

export const BigPlay = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 90px;
  height: 90px;
  background-color: var(--color-first);
  filter: grayscale(1);
  transition: opacity 100ms linear;
  opacity: ${({ active }) => (active ? '1' : '0')};
  transition: opacity 200ms linear;
  ${BoxShadow.small}

  &:after {
    content: '';
    background: url(${sprite}) 0 0 no-repeat;
    width: 16px;
    height: 16px;
    transform: scale(3);
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

const hasBox = ({ box }) =>
  box &&
  css`
    position: relative;
    box-sizing: border-box;
    width: 60%;
    ${BoxShadow.medium};
    border: 0.5rem solid var(--color-third);
    background-color: var(--color-black-second);

    & > ${Video} {
      width: auto;
    }
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

  ${hasBox}
`
