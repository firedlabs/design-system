import styled from 'styled-components'
import { TimerStyles } from '../Timer/styles'

export const CountdownStyles = styled.div`
  display: flex;

  & > ${TimerStyles}:not(:last-child) {
    margin-right: var(--gap-big);
  }
`
