import styled, { css } from 'styled-components'
import { Cursor } from '../../../Styles/Tools'
import { IconPlayerWrapper, IconPlayer } from '../IconPlayer'

export const InputRange = styled.input.attrs({
  type: 'range',
  step: 1,
  min: 0,
  max: 100,
  id: 'volume'
})`
  width: var(--widthVolume);
  flex-shrink: 0;
  position: absolute;
  right: 0;
  z-index: 1;
  opacity: 0;
  ${Cursor.hover};
`

const changePositionBar = css`
  transform: translateX(${({ volume }) => `${volume}%`});
`

export const VolumeBar = styled.label.attrs({ forHtml: 'volume' })`
  ${Cursor.hover};
  position: relative;
  background-color: var(--color-third);
  height: 0.6rem;
  width: var(--widthVolume);
  flex-shrink: 0;
  margin-left: var(--gap-smallest);
  overflow: hidden;
  opacity: 0;
  transform-origin: left top;
  transform: scaleX(0);
  transition: opacity 200ms linear, transform 100ms linear;

  &::after {
    content: '';
    position: absolute;
    left: calc(var(--widthVolume) * -1);
    top: 0;
    width: 100%;
    height: 100%;
    background-color: var(--color-first);
    transform-origin: left center;
    ${changePositionBar}
  }
`

export const Mute = styled(IconPlayer).attrs({ icon: 'mute' })``
export const AudioIcon = styled(IconPlayer).attrs({ icon: 'audio' })``

const toggleMute = css`
  ${({ mute }) =>
    mute
      ? css`
          & > ${Mute} {
            opacity: 1;
          }
        `
      : css`
          & > ${AudioIcon} {
            opacity: 1;
          }
        `}
`

export const AudioStyle = styled(IconPlayerWrapper)`
  --widthVolume: 9rem;
  display: flex;
  padding-left: calc(var(--wh) * var(--scale));
  align-items: center;
  width: auto;

  &:hover > ${VolumeBar} {
    opacity: 1;
    transform: scaleX(1);
  }

  ${toggleMute}
`
