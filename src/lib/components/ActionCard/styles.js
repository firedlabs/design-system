import styled from 'styled-components'
import { BoxStyles } from '../Box/styles'

export const ActionCardStyles = styled(BoxStyles)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-third);
  width: 280px;
  height: 280px;
  font-family: 'Press Start 2P', sans-serif;
  font-size: 25px;
  line-height: 30px;
  text-align: center;

  &:hover {
    transform: scale(1.05);
  }
`
