import styled from 'styled-components'
import { TimerStyles } from '../Timer/styles'

export const CountdownStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > ${TimerStyles}:not(:last-child) {
    margin-right: var(--gap-big);
  }
`
