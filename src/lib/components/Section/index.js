import styled from 'styled-components'
import { palette } from '../../index'

const Section = styled.section`
  box-sizing: border-box;
  width: 100%;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? palette[backgroundColor] : 'var(--color-first)'};
  border-bottom: 10px solid
    ${({ borderColor }) =>
      borderColor ? palette[borderColor] : 'var(--color-black-first)'};
  padding: var(--gap-biggest) var(--gap-medium);
`

export default Section
