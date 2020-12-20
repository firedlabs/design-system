import styled from 'styled-components'
import { palette } from '../../index'

const Image = styled.img`
  box-sizing: border-box;
  width: 100%;
  border: 1rem solid
    ${({ borderColor }) =>
      borderColor ? palette[borderColor] : 'var(--color-first)'};
`

export default Image
