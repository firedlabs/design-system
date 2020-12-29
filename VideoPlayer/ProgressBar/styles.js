import styled, { css } from 'styled-components';
import color from 'styles/settings/color';
import cursor from 'styles/tools/cursor';

const GenericBar = css`
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  transform-origin: left center;
  transform: translateX(${({ value }) => `${value}%`});
`;

export const Buffer = styled.span`
  ${GenericBar};
  z-index: 1;
  background-color: ${color.third};
`;

export const Bar = styled.label.attrs({ htmlFor: 'progress' })`
  ${GenericBar};
  z-index: 2;
  background-color: ${color.fourth};
`;

export const InputRange = styled.input.attrs({
  type: 'range',
  step: 0.1,
  id: 'progress',
})`
  width: 100%;
  flex-shrink: 0;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 3;
  opacity: 0;
  transform: translateY(-42%);
  ${cursor.hover};
`;

export const ProgressBarStyle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 6px;
  transform-origin: center center;
  transform: translateY(-100%);
  background-color: ${color.black.fifth};

  &:hover,
  &:focus {
    ${cursor.hover};
    transform: scaleY(2) translateY(-50%);
  }
`;
