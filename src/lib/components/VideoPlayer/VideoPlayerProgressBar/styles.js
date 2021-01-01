import styled, { css } from 'styled-components'
import { Cursor } from '../../../Styles/Tools'

const GenericBar = css`
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  transform-origin: left center;
  transform: translateX(${({ value }) => `${value}%`});
`

export const Buffer = styled.span`
  ${GenericBar};
  z-index: 1;
  background-color: var(--color-third);
`

export const Bar = styled.label.attrs({ htmlFor: 'progress' })`
  ${GenericBar};
  z-index: 2;
  background-color: var(--color-first);
`

export const InputRange = styled.input.attrs({
  type: 'range',
  step: 0.1,
  id: 'progress'
})`
  width: 100%;
  flex-shrink: 0;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 3;
  opacity: 0;
  transform: translateY(-42%);
  ${Cursor.hover}
`

export const VideoPlayerProgressBarStyle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 0.6rem;
  transform-origin: center center;
  transform: translateY(-100%);
  background-color: var(--color-second);

  &:hover,
  &:focus {
    ${Cursor.hover};
    transform: scaleY(2) translateY(-50%);
  }
`
