import styled from 'styled-components'
import { BoxShadow } from '../../Styles/Tools'

export const Image = styled.img`
  width: 100%;
`

export const Action = styled.a`
  display: inline-block;
  cursor: pointer;
  width: 20rem;
  ${BoxShadow.medium};

  &:hover {
    transform: scale(1.1);
  }
`
