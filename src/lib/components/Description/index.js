import styled from 'styled-components'
import { Body1 } from '../../Styles/Tools'

const Description = styled.p`
  ${Body1};
  color: ${({ dark }) =>
    dark ? 'var(--color-black-first)' : 'var(--color-third)'};
`

export default Description
