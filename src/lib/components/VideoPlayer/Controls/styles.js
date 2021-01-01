import styled, { css } from 'styled-components'
import { transparentize } from 'polished'
import { palette } from '../../../Styles/Settings/Colors/palette'
import { Cursor } from '../../../Styles/Tools'

const wrappers = css`
  display: flex;
  position: relative;
  z-index: 2;

  & > *:not(:last-child) {
    margin-right: var(--gap-medium);
  }
`

export const Left = styled.div`
  ${wrappers};
`

export const Right = styled.div`
  ${wrappers};
`

export const ControlsStyle = styled.menu`
  display: flex;
  box-sizing: border-box;
  padding-left: var(--gap-small);
  padding-right: var(--gap-small);
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 0;
  z-index: 20;
  width: 100%;
  height: 50px;
  background-color: ${transparentize(0.4, palette.colorSecond)};
  transition: transform 100ms linear;
  transform: ${({ show }) => (show ? 'translateY(0)' : 'translateY(100%)')};

  &:hover,
  &:focus {
    transform: translate(0);
    ${Cursor.standard};
  }
`
