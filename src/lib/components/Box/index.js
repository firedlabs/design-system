import styled from 'styled-components'
import { BoxShadow } from '../../Styles/Tools'

const Box = styled.article`
  ${BoxShadow.medium};
  width: 600px;
  height: 420px;
  background-color: ${({ light }) =>
    light ? 'var(--color-black-fourth)' : 'var(--color-black-second)'};
  border: 5px solid var(--color-third);
  padding: var(--gap-medium);
`

export default Box
