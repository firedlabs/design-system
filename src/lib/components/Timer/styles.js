import styled from 'styled-components'
import { Subtitle, BoxShadow, Body2 } from '../../Styles/Tools'

export const Time = styled.dd`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-black-first);
  ${Subtitle};
  padding: var(--gap-medium) var(--gap-smallest);
  background-color: var(--color-third);
  ${BoxShadow.small};
  margin-bottom: calc(var(--gap-smallest) / 2);
`

export const Label = styled.dt`
  ${Body2};
  text-transform: uppercase;
  color: var(--color-black-first);
`

export const TimerStyles = styled.dl`
  display: flex;
  flex-direction: column;
  align-items: center;
`
