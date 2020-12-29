import styled, { css } from 'styled-components';
import { IconPlayer, IconPlayerWrapper } from '../IconPlayer';

export const Play = styled(IconPlayer).attrs({ icon: 'play' })``;
export const Pause = styled(IconPlayer).attrs({ icon: 'pause' })``;

export const PlayAndPauseStyle = styled(IconPlayerWrapper)`
  ${({ play }) =>
    play
      ? css`
          & > ${Pause} {
            opacity: 1;
          }
        `
      : css`
          & > ${Play} {
            opacity: 1;
          }
        `}
`;
