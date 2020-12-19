import styled from 'styled-components'
import { BoxShadow } from '../../Styles/Tools'

export const Image = styled.img``

export const Action = styled.a`
  display: inline-block;
  cursor: pointer;
  ${BoxShadow.medium};

  &:hover {
    transform: scale(1.1);
  }
`
