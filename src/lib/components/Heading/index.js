import styled from 'styled-components'
import { Heading as toolsHeading, TextShadow } from '../../Styles/Tools'

const Heading = styled.h1`
  ${toolsHeading};
  color: var(--color-third);
  ${TextShadow.small};
  text-align: center;
`

export default Heading
