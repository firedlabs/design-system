import styled, { css } from 'styled-components';
import color from 'styles/settings/color';
import gap from 'styles/settings/gap';
import cursor from 'styles/tools/cursor';

const wrappers = css`
  display: flex;
  position: relative;
  z-index: 2;
`;

export const Left = styled.div`
  ${wrappers};
`;

export const Right = styled.div`
  ${wrappers};
`;

export const ControlsStyle = styled.menu`
  display: flex;
  box-sizing: border-box;
  padding-left: ${gap.medium};
  padding-right: ${gap.medium};
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 0;
  z-index: 20;
  width: 100%;
  height: 50px;
  background-color: ${color.black.sixth};
  transition: transform 100ms linear;
  transform: ${({ show }) => (show ? 'translateY(0)' : 'translateY(100%)')};

  &:hover,
  &:focus {
    transform: translate(0);
    ${cursor.standard};
  }
`;
