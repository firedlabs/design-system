import styled from 'styled-components'
import { Body1, BoxShadow } from '../../Styles/Tools'

const FloatingButton = styled.button`
  ${Body1};
  font-weight: bold;
  font-size: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-first);
  color: var(--color-third);
  min-height: 50px;
  min-width: 50px;
  ${BoxShadow.small};
  position: fixed;
  bottom: var(--gap-biggest);
  right: var(--gap-biggest);

  &:hover {
    transform: scale(1.2);
  }
`

export default FloatingButton
