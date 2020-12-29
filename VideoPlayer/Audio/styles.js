import styled, { css } from 'styled-components';
import color from 'styles/settings/color';
import gap from 'styles/settings/gap';
import cursor from 'styles/tools/cursor';
import { IconPlayerWrapper, IconPlayer } from '../IconPlayer';

export const InputRange = styled.input.attrs({
  type: 'range',
  step: 1,
  min: 0,
  max: 100,
  id: 'volume',
})`
  width: var(--widthVolume);
  flex-shrink: 0;
  position: absolute;
  right: 0;
  z-index: 1;
  opacity: 0;
  ${cursor.hover};
`;

export const VolumeBar = styled.label.attrs({ forHtml: 'volume' })`
  ${cursor.hover};
  position: relative;
  background-color: ${color.third};
  height: 6px;
  width: var(--widthVolume);
  flex-shrink: 0;
  margin-left: ${gap.small};
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
    background-color: ${color.second};
    transform-origin: left center;
    transform: translateX(${({ volume }) => `${volume}%`});
  }
`;

export const Mute = styled(IconPlayer).attrs({ icon: 'mute' })``;
export const AudioIcon = styled(IconPlayer).attrs({ icon: 'audio' })``;

export const AudioStyle = styled(IconPlayerWrapper)`
  --widthVolume: 90px;
  display: flex;
  padding-left: calc(var(--wh) * var(--scale));
  align-items: center;
  width: auto;

  &:hover > ${VolumeBar} {
    opacity: 1;
    transform: scaleX(1);
  }

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
`;
