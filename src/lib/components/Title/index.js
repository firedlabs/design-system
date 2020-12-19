import { Title as toolsTitle } from '../../Styles/Tools/index'
import styled from 'styled-components'

const Title = styled.h2`
  ${toolsTitle};
  color: ${({ dark }) =>
    dark ? 'var(--color-black-first)' : 'var(--color-third)'};
`

export default Title