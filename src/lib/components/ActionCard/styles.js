import styled from 'styled-components'
import { BoxStyles } from '../Box/styles'
import { Subtitle } from '../../Styles/Tools/'

export const ActionCardStyles = styled(BoxStyles)`
  ${Subtitle};
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-third);
  width: 280px;
  height: 280px;

  &:hover {
    transform: scale(1.05);
  }
`
