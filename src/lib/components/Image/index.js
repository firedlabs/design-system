import styled from 'styled-components'
import { palette } from '../../index'

const Image = styled.img`
  border: 10px solid
    ${({ borderColor }) =>
      borderColor ? palette[borderColor] : 'var(--color-first)'};
`

export default Image
