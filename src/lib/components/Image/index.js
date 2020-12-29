import styled, { css } from 'styled-components'
import { palette } from '../../index'

const changeBorderColor = ({ borderColor }) =>
  borderColor &&
  css`
    border-color: ${palette[borderColor]};
  `

const Image = styled.img`
  box-sizing: border-box;
  width: 100%;
  border: 1rem solid var(--color-first);
  ${changeBorderColor};
`

export default Image
