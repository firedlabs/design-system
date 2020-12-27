import styled, { css } from 'styled-components'
import { palette } from '../../Styles/Settings/Colors/palette'
import { BoxShadow } from '../../Styles/Tools'

const changeColor = ({ backgroundColor }) =>
  backgroundColor &&
  css`
    background-color: ${palette[backgroundColor]};
  `

export const Image = styled.img`
  width: 100%;
`

export const ActionImageStyle = styled.a`
  display: inline-block;
  cursor: pointer;
  width: 20rem;
  ${BoxShadow.medium};
  background-color: var(--color-first);
  ${changeColor};

  &:hover {
    transform: scale(1.1);
  }
`
